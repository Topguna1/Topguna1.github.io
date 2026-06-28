// Data loading extracted from main.js
(function () {
  const DETAILS_API_URL =
    "https://script.google.com/macros/s/AKfycbxu0QNxzD11mmExZ89ItV9TIvKz9Dd1EYxAiQbL56SyGQU2yzZNyT0qzB6dpwwbslzJeA/exec";

  function normalizeDetailsPayload(data) {
    const source =
      data?.items ||
      data?.details ||
      data?.data ||
      data?.rows ||
      data?.results ||
      {};

    if (Array.isArray(source)) {
      return source.reduce((acc, item) => {
        if (!item || typeof item !== "object") return acc;
        const key = item.key || item.id || item.slug || item.name || item.title;
        if (key) acc[String(key).trim()] = item;
        return acc;
      }, {});
    }

    if (source && typeof source === "object") {
      return source;
    }

    return {};
  }

  function applyDetailsPayload(data) {
    const items = normalizeDetailsPayload(data);
    window.siteDetailMap = window.siteDetailMap || {};
    Object.assign(window.siteDetailMap, items);
    return items;
  }

  async function loadDetailsFromSheet({ cacheMinutes = 60 } = {}) {
    const cacheKey = "detailsSheetCache:v2";
    const now = Date.now();

    try {
      const cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
      if (cached?.ts && now - cached.ts < cacheMinutes * 60 * 1000 && cached?.data) {
        applyDetailsPayload(cached.data);
        return;
      }
    } catch {}

    try {
      const res = await fetch(DETAILS_API_URL, { cache: "no-store" });
      if (!res.ok) throw new Error("details sheet load failed: " + res.status);

      const data = await res.json();
      applyDetailsPayload(data);

      try {
        localStorage.setItem(cacheKey, JSON.stringify({ ts: now, data }));
      } catch {}
    } catch (err) {
      window.__detailsLoadError = err;
      console.warn("[data] details sheet load skipped:", err);
      window.siteDetailMap = window.siteDetailMap || {};
    }
  }

  async function loadJSONData() {
    try {
      const [categoriesRes, sitesRes] = await Promise.all([
        fetch("data/categories.json"),
        fetch("data/sites.json")
      ]);

      if (!categoriesRes.ok || !sitesRes.ok) {
        throw new Error("JSON fetch failed");
      }

      window.defaultCategories = await categoriesRes.json();
      const sitesData = await sitesRes.json();
      window.initialSites = Array.isArray(sitesData) ? sitesData : [];

      console.log("JSON data loaded", {
        categories: Object.keys(window.defaultCategories).length,
        sites: window.initialSites.length
      });
    } catch (err) {
      console.error("JSON loading error:", err);
      window.handleDataLoadFailure?.();
      throw err;
    }
  }

  window.DETAILS_API_URL = DETAILS_API_URL;
  window.loadDetailsFromSheet = loadDetailsFromSheet;
  window.loadJSONData = loadJSONData;
})();
