/* Know Your Rights - WA : single-page app */

const app = document.getElementById("app");
const FAV_KEY = "kyr-wa-favourites";

function getFavs() {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY)) || [];
  } catch {
    return [];
  }
}

function setFavs(favs) {
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
}

function toggleFav(id) {
  const favs = getFavs();
  const i = favs.indexOf(id);
  if (i >= 0) favs.splice(i, 1);
  else favs.push(id);
  setFavs(favs);
}

function esc(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

const chev = `<span class="chev">${svgIcon("chevron", 18)}</span>`;

function lawRefsHtml(keys) {
  if (!keys || !keys.length) return "";
  const items = keys
    .map((k) => LAW_LINKS[k])
    .filter(Boolean)
    .map(
      (law) => `
      <a class="law-ref" href="${law.url}" target="_blank" rel="noopener">
        ${discIcon("book", "sm")}
        <span>
          <span class="law-name">${esc(law.name)}</span>
          <span class="law-detail">View on legislation.wa.gov.au</span>
        </span>
      </a>`
    )
    .join("");
  return `<div class="law-refs"><h3>Legislation / Policy</h3>${items}</div>`;
}

function topicCardHtml(s) {
  return `
    <button class="topic-card" data-scenario="${s.id}">
      ${discIcon(s.icon)}
      <span>
        <span class="topic-title">${esc(s.title)}</span>
        <span class="topic-sub">${esc(s.summary)}</span>
      </span>
    </button>`;
}

function footerHtml() {
  return `
    <div class="notice">${esc(DISCLAIMER)}</div>
    <div class="brand-footer">
      <a href="${FIRM.site}" target="_blank" rel="noopener">
        <img src="assets/sap-logo.png" alt="Slee Anderson &amp; Pidgeon Lawyers" />
      </a>
      <span>Serving the South West since 1919</span>
    </div>`;
}

function sectionHeading(name, text) {
  return `<h2 class="section-heading">${esc(text)}</h2><hr class="section-rule" />`;
}

/* ---------- Views ---------- */

function renderHome() {
  const essentials = SCENARIOS.filter((s) => s.essential);
  const common = SCENARIOS.filter((s) => !s.essential);
  app.innerHTML = `
    <a href="${FIRM.site}" target="_blank" rel="noopener">
      <img class="brand-logo" src="assets/sap-logo.png" alt="Slee Anderson &amp; Pidgeon Lawyers" />
    </a>
    <h1 class="app-title">Know Your Rights &mdash; WA</h1>
    <hr class="app-rule" />
    <p class="app-subtitle">
      Understand your rights and police powers during interactions with police in
      Western Australia. Every topic links to the legislation it relies on.
    </p>

    <div class="search-wrap">
      <span class="search-icon">${svgIcon("search", 18)}</span>
      <input class="search-input" id="searchInput" type="search"
        placeholder="Search your rights..." autocomplete="off" />
    </div>
    <div id="searchResults"></div>

    <div id="homeContent">
      <button class="action-card primary" data-view="situation">
        ${discIcon("question", "inv")}
        <span>
          <span class="card-title">Check Your Situation</span>
          <span class="card-sub">Get relevant information for your scenario</span>
        </span>
        ${chev}
      </button>

      <button class="action-card" data-view="canpolice">
        ${discIcon("scales")}
        <span>
          <span class="card-title">Can Police...?</span>
          <span class="card-sub">Quick answers to common police powers</span>
        </span>
        ${chev}
      </button>

      <a class="action-card" href="${FIRM.contact}" target="_blank" rel="noopener">
        ${discIcon("briefcase")}
        <span>
          <span class="card-title">Need a Lawyer?</span>
          <span class="card-sub">Make an appointment with Slee Anderson &amp; Pidgeon</span>
        </span>
        ${chev}
      </a>

      <div class="chip-row">
        <button class="chip" data-view="favourites">${svgIcon("bookmark")} Favourites</button>
        <button class="chip" data-view="norights">${svgIcon("columns")} Rights in WA</button>
        <button class="chip" data-view="faq">${svgIcon("question")} FAQ</button>
        <button class="chip" data-view="contacts">${svgIcon("phone")} Legal Help</button>
      </div>

      ${sectionHeading("star", "Essential Rights")}
      ${essentials.map(topicCardHtml).join("")}

      ${sectionHeading("list", "Scenarios")}
      ${common.map(topicCardHtml).join("")}

      ${footerHtml()}
    </div>
  `;

  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");
  const homeContent = document.getElementById("homeContent");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      results.innerHTML = "";
      homeContent.style.display = "";
      return;
    }
    homeContent.style.display = "none";
    const hits = SCENARIOS.filter((s) => {
      const hay = [s.title, s.summary, ...s.sections.map((x) => x.heading + " " + x.body)]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
    const qaHits = CAN_POLICE.filter((c) => (c.q + " " + c.detail).toLowerCase().includes(q));
    results.innerHTML =
      hits.length || qaHits.length
        ? hits.map(topicCardHtml).join("") +
          qaHits
            .map(
              (c) => `
            <button class="topic-card" data-view="canpolice">
              ${discIcon("scales")}
              <span>
                <span class="topic-title">${esc(c.q)}</span>
                <span class="topic-sub">See 'Can Police...?' quick answers</span>
              </span>
            </button>`
            )
            .join("")
        : `<p class="empty-msg">No results for &ldquo;${esc(input.value)}&rdquo;.</p>`;
    bindNav(results);
  });

  bindNav(app);
  setActiveTab("home");
  window.scrollTo(0, 0);
}

function renderAll() {
  app.innerHTML = `
    <h1 class="app-title">All Topics</h1>
    <hr class="app-rule" />
    <p class="app-subtitle">Every scenario, quick answer and piece of referenced legislation.</p>

    ${sectionHeading("list", "Scenarios")}
    ${SCENARIOS.map(topicCardHtml).join("")}

    ${sectionHeading("question", "Quick Answers")}
    <button class="action-card" data-view="canpolice">
      ${discIcon("scales")}
      <span>
        <span class="card-title">Can Police...?</span>
        <span class="card-sub">${CAN_POLICE.length} common questions</span>
      </span>
      ${chev}
    </button>
    <button class="action-card" data-view="faq">
      ${discIcon("question")}
      <span>
        <span class="card-title">FAQ</span>
        <span class="card-sub">${FAQS.length} frequently asked questions</span>
      </span>
      ${chev}
    </button>

    ${sectionHeading("book", "Legislation / Policy")}
    ${Object.values(LAW_LINKS)
      .map(
        (law) => `
      <a class="law-ref" href="${law.url}" target="_blank" rel="noopener">
        ${discIcon("book", "sm")}
        <span>
          <span class="law-name">${esc(law.name)}</span>
          <span class="law-detail">View on legislation.wa.gov.au</span>
        </span>
      </a>`
      )
      .join("")}

    ${footerHtml()}
  `;
  bindNav(app);
  setActiveTab("all");
  window.scrollTo(0, 0);
}

function backBtn(view) {
  return `<button class="back-btn" data-view="${view || "home"}">${svgIcon("back", 15)} Back</button>`;
}

function renderScenario(id, backView) {
  const s = SCENARIOS.find((x) => x.id === id);
  if (!s) return renderHome();
  const isFav = getFavs().includes(id);
  app.innerHTML = `
    ${backBtn(backView)}
    <div class="detail-header">
      ${discIcon(s.icon)}
      <h1 class="detail-title">${esc(s.title)}</h1>
      <button class="fav-btn ${isFav ? "active" : ""}" id="favBtn"
        aria-label="Toggle favourite">${svgIcon("bookmark", 22)}</button>
    </div>
    <p class="detail-summary">${esc(s.summary)}</p>
    ${s.sections
      .map(
        (sec) => `
      <div class="detail-section">
        <h3>${esc(sec.heading)}</h3>
        <p>${esc(sec.body)}</p>
      </div>`
      )
      .join("")}
    ${lawRefsHtml(s.laws)}
    ${footerHtml()}
  `;
  document.getElementById("favBtn").addEventListener("click", (e) => {
    toggleFav(id);
    e.currentTarget.classList.toggle("active", getFavs().includes(id));
  });
  bindNav(app);
  window.scrollTo(0, 0);
}

function renderCanPolice() {
  app.innerHTML = `
    ${backBtn("home")}
    <h1 class="app-title">Can Police...?</h1>
    <hr class="app-rule" />
    <p class="app-subtitle">Quick answers on police powers in WA. Tap a question to expand it.</p>
    ${CAN_POLICE.map(
      (c, i) => `
      <div class="qa-item">
        <button class="qa-q" data-qa="${i}">${esc(c.q)}${chev}</button>
        <div class="qa-a">
          <span class="answer-badge ${c.a}">${c.a === "depends" ? "It depends" : c.a}</span>
          <p>${esc(c.detail)}</p>
          ${lawRefsHtml(c.laws)}
        </div>
      </div>`
    ).join("")}
    ${footerHtml()}
  `;
  bindAccordions();
  bindNav(app);
  window.scrollTo(0, 0);
}

function renderFaq() {
  app.innerHTML = `
    ${backBtn("home")}
    <h1 class="app-title">FAQ</h1>
    <hr class="app-rule" />
    <p class="app-subtitle">Frequently asked questions about your rights in Western Australia.</p>
    ${FAQS.map(
      (f, i) => `
      <div class="qa-item">
        <button class="qa-q" data-qa="${i}">${esc(f.q)}${chev}</button>
        <div class="qa-a"><p>${esc(f.detail)}</p></div>
      </div>`
    ).join("")}
    ${footerHtml()}
  `;
  bindAccordions();
  bindNav(app);
  window.scrollTo(0, 0);
}

function renderSituation() {
  app.innerHTML = `
    ${backBtn("home")}
    <h1 class="app-title">Check Your Situation</h1>
    <hr class="app-rule" />
    <p class="app-subtitle">What&rsquo;s happening? Pick the closest match to see your rights and the relevant police powers.</p>
    ${SITUATIONS.map(
      (s) => `
      <button class="situation-btn" data-scenario="${s.target}" data-back="situation">
        ${discIcon(s.icon, "sm")}
        <span>${esc(s.label)}</span>
        ${chev}
      </button>`
    ).join("")}
    ${footerHtml()}
  `;
  bindNav(app);
  window.scrollTo(0, 0);
}

function renderFavourites() {
  const favs = getFavs();
  const items = SCENARIOS.filter((s) => favs.includes(s.id));
  app.innerHTML = `
    ${backBtn("home")}
    <h1 class="app-title">Favourites</h1>
    <hr class="app-rule" />
    ${
      items.length
        ? items.map(topicCardHtml).join("")
        : `<p class="empty-msg">No favourites yet.<br />Open any topic and tap the bookmark to save it here.</p>`
    }
    ${footerHtml()}
  `;
  bindNav(app);
  window.scrollTo(0, 0);
}

function renderNoRightsAct() {
  app.innerHTML = `
    ${backBtn("home")}
    <h1 class="app-title">Your Rights in WA</h1>
    <hr class="app-rule" />
    <p class="app-subtitle">Where your rights actually come from in Western Australia.</p>
    <div class="detail-section">
      <h3>WA has no Human Rights Act</h3>
      <p>Unlike Queensland (Human Rights Act 2019), Victoria and the ACT, Western Australia has not enacted a Human Rights Act. There is no single WA law setting out rights like liberty, privacy or fair hearing.</p>
    </div>
    <div class="detail-section">
      <h3>So where do your rights come from?</h3>
      <ul>
        <li><strong>Specific WA statutes</strong> &mdash; e.g. the Criminal Investigation Act 2006 limits police powers and gives arrested people rights (lawyer, interpreter, limited detention).</li>
        <li><strong>The common law</strong> &mdash; the right to silence, the presumption of innocence, protection against unlawful arrest and trespass.</li>
        <li><strong>The Australian Constitution</strong> &mdash; limited protections, including freedom of political communication.</li>
        <li><strong>Federal law</strong> &mdash; anti-discrimination legislation and Australia&rsquo;s international human rights obligations.</li>
      </ul>
    </div>
    <div class="detail-section">
      <h3>What this means in practice</h3>
      <p>Because there&rsquo;s no general rights charter in WA, the detail of each specific law matters more. Knowing exactly when police can and can&rsquo;t require something of you &mdash; which is what this app is for &mdash; is your main practical protection.</p>
    </div>
    ${lawRefsHtml(["cia", "ciipa", "code"])}
    ${footerHtml()}
  `;
  bindNav(app);
  window.scrollTo(0, 0);
}

function renderContacts() {
  app.innerHTML = `
    ${backBtn("home")}
    <h1 class="app-title">Legal Help</h1>
    <hr class="app-rule" />
    <p class="app-subtitle">Where to get legal help in Western Australia.</p>
    <div class="detail-section">
      <h3>Slee Anderson &amp; Pidgeon Lawyers</h3>
      <p>Serving the South West since 1919, with offices in Bunbury, Busselton, Mandurah and Margaret River. Criminal defence, family law, wills &amp; estates, commercial and more.</p>
      <p><a class="cta-btn" href="${FIRM.contact}" target="_blank" rel="noopener">Make an Appointment</a></p>
    </div>
    <div class="detail-section">
      <h3>Legal Aid WA</h3>
      <p>Infoline: <a href="tel:1300650579">1300 650 579</a> (business hours)</p>
      <p><a href="https://www.legalaid.wa.gov.au" target="_blank" rel="noopener">legalaid.wa.gov.au</a></p>
    </div>
    <div class="detail-section">
      <h3>Aboriginal Legal Service of WA (ALSWA)</h3>
      <p>Phone: <a href="tel:1800019900">1800 019 900</a></p>
      <p><a href="https://www.als.org.au" target="_blank" rel="noopener">als.org.au</a></p>
    </div>
    <div class="detail-section">
      <h3>Community Legal Centres</h3>
      <p>Free advice at centres across WA.</p>
      <p><a href="https://www.communitylegalwa.org.au" target="_blank" rel="noopener">communitylegalwa.org.au</a></p>
    </div>
    <div class="detail-section">
      <h3>Complaints about police</h3>
      <p>WA Police Force: <a href="https://www.police.wa.gov.au" target="_blank" rel="noopener">police.wa.gov.au</a></p>
      <p>Corruption and Crime Commission: <a href="https://www.ccc.wa.gov.au" target="_blank" rel="noopener">ccc.wa.gov.au</a></p>
    </div>
    <div class="detail-section">
      <h3>Emergency</h3>
      <p>Police, fire, ambulance: <a href="tel:000">000</a></p>
      <p>Police non-emergency: <a href="tel:131444">131 444</a></p>
    </div>
    ${footerHtml()}
  `;
  bindNav(app);
  window.scrollTo(0, 0);
}

/* ---------- Wiring ---------- */

const VIEWS = {
  home: renderHome,
  all: renderAll,
  canpolice: renderCanPolice,
  faq: renderFaq,
  situation: renderSituation,
  favourites: renderFavourites,
  norights: renderNoRightsAct,
  contacts: renderContacts,
};

function bindNav(root) {
  root.querySelectorAll("[data-view]").forEach((el) => {
    if (el.tagName === "A") return;
    el.addEventListener("click", () => {
      (VIEWS[el.getAttribute("data-view")] || renderHome)();
    });
  });
  root.querySelectorAll("[data-scenario]").forEach((el) => {
    el.addEventListener("click", () => {
      renderScenario(el.getAttribute("data-scenario"), el.getAttribute("data-back"));
    });
  });
}

function bindAccordions() {
  app.querySelectorAll(".qa-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".qa-item").classList.toggle("open");
    });
  });
}

function setActiveTab(tab) {
  document.querySelectorAll(".nav-btn").forEach((b) => {
    b.classList.toggle("active", b.getAttribute("data-nav") === tab);
  });
}

document.querySelectorAll(".nav-btn").forEach((b) => {
  b.innerHTML =
    svgIcon(b.getAttribute("data-nav") === "home" ? "navhome" : "list") +
    `<span>${b.getAttribute("data-nav") === "home" ? "Home" : "All"}</span>`;
  b.addEventListener("click", () => {
    (VIEWS[b.getAttribute("data-nav")] || renderHome)();
  });
});

renderHome();
