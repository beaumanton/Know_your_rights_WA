/*
 * Know Your Rights - WA : icon set
 * Flat 2D line icons, drawn on a 24x24 grid with white strokes to sit inside
 * solid navy circles — matching the Slee Anderson & Pidgeon house style.
 */

const ICONS = {
  silence:
    '<path d="M4 9.5h3L11 6v12L7 14.5H4z"/><path d="M15.5 9.5l5 5M20.5 9.5l-5 5"/>',
  person:
    '<circle cx="12" cy="5" r="2.4"/><path d="M12 7.8v6.4M8.4 10.4h7.2M9.4 20.5l2.6-6.3M14.6 20.5L12 14.2"/>',
  car:
    '<path d="M5.2 17.4H3.6a.6.6 0 0 1-.6-.6v-4a2 2 0 0 1 .15-.76l1.75-4.2A2 2 0 0 1 6.7 6.6h10.6a2 2 0 0 1 1.85 1.24l1.75 4.2A2 2 0 0 1 21 12.8v4a.6.6 0 0 1-.6.6h-1.6"/><path d="M3.3 12.6h17.4"/><path d="M9.4 17.4h5.2"/><circle cx="7" cy="17.4" r="1.9"/><circle cx="17" cy="17.4" r="1.9"/>',
  search:
    '<circle cx="10.5" cy="10.5" r="5.6"/><path d="M14.6 14.6L20 20"/>',
  cuffs:
    '<circle cx="6.4" cy="14.4" r="4.6"/><circle cx="17.6" cy="14.4" r="4.6"/><path d="M11 14.4h2"/><path d="M6.4 9.8V7.4a2.2 2.2 0 0 1 4.4 0v1M17.6 9.8V7.4a2.2 2.2 0 0 0-4.4 0v1"/>',
  mic:
    '<rect x="9.4" y="2.8" width="5.2" height="10" rx="2.6"/><path d="M6 11.4a6 6 0 0 0 12 0M12 17.4v3.4M9.2 20.8h5.6"/>',
  moveon:
    '<path d="M13 4.5H6v15h7"/><path d="M11 12h9M17 9l3 3-3 3"/>',
  home:
    '<path d="M3.2 10.6L12 4l8.8 6.6"/><path d="M5.6 9.6V20h12.8V9.6"/><path d="M9.9 20v-5.4h4.2V20"/>',
  filming:
    '<rect x="6.4" y="2.6" width="11.2" height="18.8" rx="2"/><path d="M10.4 5.6h3.2"/><circle cx="12" cy="12.6" r="2.9"/>',
  youth:
    '<circle cx="8.8" cy="7.4" r="3"/><path d="M3.4 20.4a5.4 5.4 0 0 1 10.8 0"/><circle cx="17.4" cy="9.6" r="2.2"/><path d="M15.9 15a4.6 4.6 0 0 1 4.7 5.4"/>',
  megaphone:
    '<path d="M3.6 10.2v3.6a1.2 1.2 0 0 0 1.2 1.2h2.4l6.8 3.8V5.2L7.2 9H4.8a1.2 1.2 0 0 0-1.2 1.2z"/><path d="M17.4 9.4a4 4 0 0 1 0 5.2"/><path d="M7.2 15v4.6h3V16.7"/>',
  fingerprint:
    '<path d="M3.6 11.6a8.4 8.4 0 0 1 16.8 0v3"/><path d="M7.2 11.8a4.8 4.8 0 0 1 9.6 0v6.2"/><path d="M10.8 12a1.2 1.2 0 0 1 2.4 0v8"/><path d="M4 15.4c.2 2.2.7 3.8 1.5 5"/><path d="M20 17.6c-.2 1.4-.6 2.4-1 3.2"/>',
  complaint:
    '<path d="M14 3.2H7.2a1.6 1.6 0 0 0-1.6 1.6v14.4a1.6 1.6 0 0 0 1.6 1.6h9.6a1.6 1.6 0 0 0 1.6-1.6V7.6z"/><path d="M14 3.2v4.4h4.4"/><path d="M8.6 12.4h6.8M8.6 15.9h4.4"/>',
  question:
    '<circle cx="12" cy="12" r="8.8"/><path d="M9.5 9.4a2.6 2.6 0 0 1 5.1.7c0 1.8-2.6 2.2-2.6 3.9"/><path d="M12 17.2v.2"/>',
  scales:
    '<path d="M12 4.4v15.2M8.2 19.6h7.6M4.6 8h14.8"/><circle cx="12" cy="4.2" r="1.1"/><path d="M4.6 8L2 13.6a3 3 0 0 0 5.2 0z"/><path d="M19.4 8l2.6 5.6a3 3 0 0 1-5.2 0z"/>',
  briefcase:
    '<rect x="2.8" y="7.4" width="18.4" height="12.2" rx="1.6"/><path d="M9 7.4V5.6A1.6 1.6 0 0 1 10.6 4h2.8A1.6 1.6 0 0 1 15 5.6v1.8"/><path d="M2.8 12.6h18.4"/>',
  bookmark: '<path d="M6.6 3.6h10.8v16.8L12 16.4l-5.4 4z"/>',
  columns:
    '<path d="M3 9.6L12 4.2l9 5.4"/><path d="M5.4 9.8v8M9.8 9.8v8M14.2 9.8v8M18.6 9.8v8"/><path d="M3.4 17.8h17.2M2.6 20.4h18.8"/>',
  phone:
    '<path d="M7.4 3.4H5.6a2 2 0 0 0-2 2.2c.5 8 6.8 14.3 14.8 14.8a2 2 0 0 0 2.2-2v-1.6l-4-1.5-1.9 1.9a13.4 13.4 0 0 1-5.5-5.5l1.9-1.9z"/>',
  star: '<path d="M12 3.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"/>',
  book:
    '<path d="M3.6 4.8h5.6A2.8 2.8 0 0 1 12 7.6v11.6a2.4 2.4 0 0 0-2.4-1.6H3.6z"/><path d="M20.4 4.8h-5.6A2.8 2.8 0 0 0 12 7.6v11.6a2.4 2.4 0 0 1 2.4-1.6h6z"/>',
  list: '<path d="M4 6.6h16M4 12h16M4 17.4h16"/>',
  navhome:
    '<path d="M3.4 10.8L12 4.2l8.6 6.6V20h-5.8v-5.6H9.2V20H3.4z"/>',
  chevron: '<path d="M9.5 5l7 7-7 7"/>',
  back: '<path d="M14.5 5l-7 7 7 7"/>',
};

/* Inline SVG, stroke-only, inherits currentColor. */
function svgIcon(name, size) {
  const body = ICONS[name] || ICONS.question;
  const s = size || 24;
  return (
    `<svg class="icn" viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" ` +
    `stroke="currentColor" stroke-width="1.4" stroke-linecap="round" ` +
    `stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`
  );
}

/* Navy disc with a white line icon — the firm's signature treatment. */
function discIcon(name, cls) {
  return `<span class="disc ${cls || ""}">${svgIcon(name)}</span>`;
}
