import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const app = express();
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
});

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4000",
  "https://allira-landing.vercel.app",
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
  })
);

app.use(express.json());

app.get("/api/health", async (_req, res) => {
  try {
    const result = await pool.query("select now() as now");
    res.json({ ok: true, db: true, now: result.rows[0].now });
  } catch (error) {
    console.error("Health check failed:", error);
    res.status(500).json({
      ok: false,
      db: false,
      error: error?.message || String(error),
    });
  }
});

app.post("/api/early-access", async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      error: "All required fields must be provided.",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      ok: false,
      error: "Invalid email address.",
    });
  }

  try {
    const insertSql = `
      insert into early_access_request
        (name, email, company, message, source_page, status)
      values
        ($1, $2, $3, $4, $5, $6)
      returning id, created_at
    `;

    const values = [
      name.trim(),
      email.trim().toLowerCase(),
      company ? company.trim() : null,
      message.trim(),
      "allure-landing",
      "new",
    ];

    const dbResult = await pool.query(insertSql, values);

    return res.status(201).json({
      ok: true,
      id: dbResult.rows[0].id,
      created_at: dbResult.rows[0].created_at,
      message: "Request saved successfully.",
    });
  } catch (error) {
    console.error("Early access submission failed:", error);
    return res.status(500).json({
      ok: false,
      error: error?.message || "Failed to save request.",
    });
  }
});

app.get("/api/early-access", async (req, res) => {
  const status = req.query.status;

  try {
    let result;

    if (status && status !== "all") {
      result = await pool.query(
        `
        select id, created_at, name, email, company, message, status, notes
        from early_access_request
        where status = $1
        order by created_at desc
        limit 100
        `,
        [status]
      );
    } else {
      result = await pool.query(`
        select id, created_at, name, email, company, message, status, notes
        from early_access_request
        order by created_at desc
        limit 100
      `);
    }

    res.json({ ok: true, data: result.rows });
  } catch (error) {
    console.error("Fetch early access requests failed:", error);
    res.status(500).json({
      ok: false,
      error: error?.message || "Failed to fetch requests.",
    });
  }
});

app.patch("/api/early-access/:id", async (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;

  const allowedStatuses = [
    "new",
    "reviewing",
    "contacted",
    "qualified",
    "not_interested",
  ];

  if (status && !allowedStatuses.includes(status)) {
    return res.status(400).json({
      ok: false,
      error: "Invalid status value.",
    });
  }

  try {
    const result = await pool.query(
      `
      update early_access_request
      set
        status = coalesce($1, status),
        notes = coalesce($2, notes)
      where id = $3
      returning id, created_at, name, email, company, message, status, notes
      `,
      [status ?? null, notes ?? null, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        ok: false,
        error: "Record not found.",
      });
    }

    res.json({ ok: true, data: result.rows[0] });
  } catch (error) {
    console.error("Update early access request failed:", error);
    res.status(500).json({
      ok: false,
      error: error?.message || "Failed to update request.",
    });
  }
});

const port = Number(process.env.PORT) || 3001;

app.listen(port, "0.0.0.0", () => {
  console.log(`Allure intake API listening on port ${port}`);
});
