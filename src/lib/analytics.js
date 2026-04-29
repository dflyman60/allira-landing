/**
 * Google Analytics 4 — shared event helpers (public site).
 * Fails silently when gtag is not loaded.
 */

export function trackFindMatchesClick(sourcePage) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "find_matches_click", {
      source_page: sourcePage,
      page_path: window.location.pathname,
      page_title: document.title,
      button_label: "Find Matches",
    });
  }
}
