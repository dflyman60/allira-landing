import { useEffect, useState } from "react";

const API_BASE =
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:3001";

const STATUS_OPTIONS = [
  "new",
  "reviewing",
  "contacted",
  "qualified",
  "not_interested",
];

export default function Admin() {
  const [rows, setRows] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState(null);
  const [error, setError] = useState("");

  async function loadRows(selectedStatus = filter) {
    setLoading(true);
    setError("");

    try {
      const query =
        selectedStatus && selectedStatus !== "all"
          ? `?status=${encodeURIComponent(selectedStatus)}`
          : "";

      const response = await fetch(`${API_BASE}/api/early-access${query}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to load submissions.");
      }

      setRows(data.data || []);
    } catch (err) {
      setError(err.message || "Failed to load submissions.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function updateRow(id, updates) {
    setSavingId(id);
    setError("");

    try {
      const response = await fetch(`${API_BASE}/api/early-access/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update record.");
      }

      setRows((prev) =>
        prev.map((row) => (row.id === id ? data.data : row))
      );
    } catch (err) {
      setError(err.message || "Failed to update record.");
    } finally {
      setSavingId(null);
    }
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#0b1020",
        color: "#f5f7fb",
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "32px 24px 80px",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#93a4c3",
                marginBottom: "8px",
              }}
            >
              Internal Marketing Console
            </div>
            <h1
              style={{
                fontSize: "34px",
                fontWeight: 800,
                margin: 0,
              }}
            >
              Allira Early Access Leads
            </h1>
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <select
              value={filter}
              onChange={(e) => {
                const next = e.target.value;
                setFilter(next);
                loadRows(next);
              }}
              style={selectStyle}
            >
              <option value="all">All statuses</option>
              {STATUS_OPTIONS.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            <button
              onClick={() => loadRows()}
              style={buttonStyle}
            >
              Refresh
            </button>
          </div>
        </header>

        {error && (
          <div
            style={{
              marginBottom: "16px",
              padding: "14px 16px",
              borderRadius: "12px",
              backgroundColor: "rgba(255, 90, 90, 0.12)",
              border: "1px solid rgba(255, 90, 90, 0.22)",
              color: "#ffb4b4",
            }}
          >
            {error}
          </div>
        )}

        <div
          style={{
            background: "linear-gradient(180deg, #11182f 0%, #0d1428 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "18px",
            overflow: "hidden",
          }}
        >
          {loading ? (
            <div style={{ padding: "24px", color: "#aebbd5" }}>
              Loading submissions...
            </div>
          ) : rows.length === 0 ? (
            <div style={{ padding: "24px", color: "#aebbd5" }}>
              No submissions found.
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  minWidth: "1100px",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#121933" }}>
                    <Th>Created</Th>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Company</Th>
                    <Th>Message</Th>
                    <Th>Status</Th>
                    <Th>Notes</Th>
                    <Th>Action</Th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <AdminRow
                      key={row.id}
                      row={row}
                      saving={savingId === row.id}
                      onSave={updateRow}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AdminRow({ row, onSave, saving }) {
  const [status, setStatus] = useState(row.status || "new");
  const [notes, setNotes] = useState(row.notes || "");

  return (
    <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <Td>{new Date(row.created_at).toLocaleString()}</Td>
      <Td>{row.name}</Td>
      <Td>{row.email}</Td>
      <Td>{row.company || "—"}</Td>
      <Td>{row.message}</Td>
      <Td>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={selectStyle}
        >
          {STATUS_OPTIONS.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </Td>
      <Td>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          style={{
            ...inputStyle,
            minWidth: "220px",
            resize: "vertical",
          }}
        />
      </Td>
      <Td>
        <button
          onClick={() => onSave(row.id, { status, notes })}
          disabled={saving}
          style={{
            ...buttonStyle,
            opacity: saving ? 0.7 : 1,
          }}
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </Td>
    </tr>
  );
}

function Th({ children }) {
  return (
    <th
      style={{
        textAlign: "left",
        padding: "14px 16px",
        fontSize: "13px",
        textTransform: "uppercase",
        letterSpacing: "0.6px",
        color: "#93a4c3",
      }}
    >
      {children}
    </th>
  );
}

function Td({ children }) {
  return (
    <td
      style={{
        padding: "16px",
        verticalAlign: "top",
        color: "#d7deec",
        fontSize: "14px",
        lineHeight: 1.5,
      }}
    >
      {children}
    </td>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.12)",
  backgroundColor: "#121933",
  color: "#f5f7fb",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
};

const selectStyle = {
  padding: "10px 12px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.12)",
  backgroundColor: "#121933",
  color: "#f5f7fb",
  fontSize: "14px",
  outline: "none",
};

const buttonStyle = {
  padding: "10px 16px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "#4f7cff",
  color: "white",
  fontWeight: 700,
  fontSize: "14px",
  cursor: "pointer",
};
