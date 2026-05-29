/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║                  CLIENT CONFIGURATION FILE                       ║
 * ║  Edit this file to deploy the map for a new client.              ║
 * ║                                                                  ║
 * ║  CHECKLIST FOR A NEW DEPLOYMENT:                                 ║
 * ║  1. Update branding  →  appName, brandLetter, primaryColor       ║
 * ║  2. Update dealTypes →  must match your Smartsheet "Deal Type"   ║
 * ║  3. Update mapCenter →  center the default view on your market   ║
 * ║  4. Edit client-config.json → match your Smartsheet column names ║
 * ║  5. Add GitHub Secrets:                                          ║
 * ║       SMARTSHEET         → API token                            ║
 * ║       SMARTSHEET_SHEET_ID → main properties sheet ID            ║
 * ║       SURVEY_FOLDER_ID   → folder containing survey sheets      ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

const CLIENT_CONFIG = {

  // ── Branding ─────────────────────────────────────────────────────────────
  // appName     : displayed in the header and browser tab
  // brandLetter : 1-2 character initials shown in the header shield badge
  // primaryColor: hex color used for active states, pins, and accents
  // pageTitle   : browser tab / window title
  appName:      "Salvation Army",
  brandLetter:  "S",
  primaryColor: "#EE2A24",
  pageTitle:    "Salvation Army — Property Map",

  // ── Deal Types ───────────────────────────────────────────────────────────
  // Each entry must match a value in your Smartsheet "Deal Type" column.
  //   key   → exact Smartsheet value (case-sensitive)
  //   label → display name shown in the UI
  //   color → hex color for map pins, chips, and badges
  dealTypes: [
    { key: "Renewal", label: "Renewal", color: "#f97316" },
    { key: "Newlo",   label: "Newlo",   color: "#eab308" },
  ],

  // ── Map Defaults ─────────────────────────────────────────────────────────
  // Initial [lat, lng] center and zoom level before data loads.
  // The map will auto-fit to the loaded data bounds after fetch.
  //
  // Quick references:
  //   US national view : [37.5, -96],   zoom 4
  //   East Coast       : [38.5, -77],   zoom 6
  //   Midwest          : [41.8, -87.6], zoom 7
  //   West Coast       : [37.3, -122],  zoom 6
  //   Single city      : [lat, lng],    zoom 12
  mapCenter: [37.5, -96],
  mapZoom:   4,

};
