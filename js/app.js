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

function lawRefsHtml(keys) {
  if (!keys || !keys.length) return "";
  const items = keys
    .map((k) => LAW_LINKS[k])
    .filter(Boolean)
    .map(
      (law) => `
      <a class="law-ref" href="${law.url}" target="_blank" rel="noopener">
        <span class="law-name">📖 ${esc(law.name)}</span>
        <span class="law-detail">View on legislation.wa.gov.au</span>
      </a>`
    )
    .join("");
  return `<div class="law-refs"><h3 style="color:var(--accent);font-size:1.1rem;margin:18px 0 10px">Legislation / Policy</h3>${items}</div>`;
}

function topicCardHtml(s) {
  return `
    <button class="topic-card" data-scenario="${s.id}">
      <span class="card-icon">${s.icon}</span>
      <span>
        <span class="topic-title">${esc(s.title)}</span>
        <span class="topic-sub" style="display:block">${esc(s.summary)}</span>
      </span>
    </button>`;
}

function disclaimerHtml() {
  return `<div class="notice">⚖️ ${esc(DISCLAIMER)}</div>`;
}

/* ---------- Views ---------- */

function renderHome() {
  const essentials = SCENARIOS.filter((s) => s.essential);
  const common = SCENARIOS.filter((s) => !s.essential);
  app.innerHTML = `
    <h1 class="app-title">Know Your Rights - WA</h1>
    <p class="app-subtitle">
      Understand your rights and police powers during interactions with police in WA.<br />
      All referenced legislation/policy is publicly available and accessible via the
      'Legislation/Policy' links in each topic.
    </p>

    <div class="search-wrap">
      <span class="search-icon">🔎</span>
      <input class="search-input" id="searchInput" type="search"
        placeholder="Search your rights..." autocomplete="off" />
    </div>
    <div id="searchResults"></div>

    <div id="homeContent">
      <button class="action-card primary" data-view="situation">
        <span class="card-icon">❓</span>
        <span>
          <span class="card-title" style="display:block">Check Your Situation</span>
          <span class="card-sub">Get relevant information for your scenario</span>
        </span>
        <span class="chev">›</span>
      </button>

      <button class="action-card secondary" data-view="canpolice">
        <span class="card-icon">⚖️</span>
        <span>
          <span class="card-title" style="display:block">Can Police...?</span>
          <span class="card-sub">Quick answers to common police powers</span>
        </span>
        <span class="chev">›</span>
      </button>

      <h2 class="section-heading">Common Scenarios</h2>
      <div class="chip-row">
        <button class="chip accent" data-view="favourites">🔖 Favourites</button>
        <button class="chip" data-view="norights">🏛️ Your Rights in WA</button>
        <button class="chip" data-view="faq">❓ FAQ</button>
        <button class="chip" data-view="contacts">📞 Legal Help</button>
      </div>

      <h2 class="section-heading"><span class="heading-icon">★</span> Essential Rights</h2>
      ${essentials.map(topicCardHtml).join("")}

      <h2 class="section-heading">Scenarios</h2>
      ${common.map(topicCardHtml).join("")}

      ${disclaimerHtml()}
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
      (hits.length || qaHits.length
        ? hits.map(topicCardHtml).join("") +
          qaHits
            .map(
              (c, i) => `
            <button class="topic-card" data-view="canpolice">
              <span class="card-icon">⚖️</span>
              <span>
                <span class="topic-title">${esc(c.q)}</span>
                <span class="topic-sub" style="display:block">See 'Can Police...?' quick answers</span>
              </span>
            </button>`
            )
            .join("")
        : `<p class="empty-msg">No results for “${esc(input.value)}”.</p>`);
    bindNav(results);
  });

  bindNav(app);
  setActiveTab("home");
}

function renderAll() {
  app.innerHTML = `
    <h1 class="app-title">All Topics</h1>
    <p class="app-subtitle">Every scenario, quick answer and piece of referenced legislation.</p>

    <h2 class="section-heading">Scenarios</h2>
    ${SCENARIOS.map(topicCardHtml).join("")}

    <h2 class="section-heading">Quick Answers</h2>
    <button class="action-card secondary" data-view="canpolice">
      <span class="card-icon">⚖️</span>
      <span><span class="card-title" style="display:block">Can Police...?</span>
      <span class="card-sub">${CAN_POLICE.length} common questions</span></span>
      <span class="chev">›</span>
    </button>
    <button class="action-card secondary" data-view="faq">
      <span class="card-icon">❓</span>
      <span><span class="card-title" style="display:block">FAQ</span>
      <span class="card-sub">${FAQS.length} frequently asked questions</span></span>
      <span class="chev">›</span>
    </button>

    <h2 class="section-heading">Legislation / Policy</h2>
    ${Object.values(LAW_LINKS)
      .map(
        (law) => `
      <a class="law-ref" href="${law.url}" target="_blank" rel="noopener">
        <span class="law-name">📖 ${esc(law.name)}</span>
        <span class="law-detail">View on legislation.wa.gov.au</span>
      </a>`
      )
      .join("")}

    ${disclaimerHtml()}
  `;
  bindNav(app);
  setActiveTab("all");
}

function renderScenario(id, backView) {
  const s = SCENARIOS.find((x) => x.id === id);
  if (!s) return renderHome();
  const isFav = getFavs().includes(id);
  app.innerHTML = `
    <button class="back-btn" data-view="${backView || "home"}">‹ Back</button>
    <div class="detail-header">
      <h1 class="detail-title">${s.icon} ${esc(s.title)}</h1>
      <button class="fav-btn ${isFav ? "active" : ""}" id="favBtn"
        aria-label="Toggle favourite">${isFav ? "★" : "☆"}</button>
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
    ${disclaimerHtml()}
  `;
  document.getElementById("favBtn").addEventListener("click", (e) => {
    toggleFav(id);
    const nowFav = getFavs().includes(id);
    e.currentTarget.classList.toggle("active", nowFav);
    e.currentTarget.textContent = nowFav ? "★" : "☆";
  });
  bindNav(app);
  window.scrollTo(0, 0);
}

function renderCanPolice() {
  app.innerHTML = `
    <button class="back-btn" data-view="home">‹ Back</button>
    <h1 class="detail-title">Can Police...?</h1>
    <p class="detail-summary">Quick answers to common questions about police powers in WA. Tap a question to expand it.</p>
    ${CAN_POLICE.map(
      (c, i) => `
      <div class="qa-item">
        <button class="qa-q" data-qa="${i}">${esc(c.q)}<span class="qa-chev">›</span></button>
        <div class="qa-a">
          <span class="answer-badge ${c.a}">${c.a === "depends" ? "It depends" : c.a}</span>
          <p>${esc(c.detail)}</p>
          ${lawRefsHtml(c.laws)}
        </div>
      </div>`
    ).join("")}
    ${disclaimerHtml()}
  `;
  bindAccordions();
  bindNav(app);
  window.scrollTo(0, 0);
}

function renderFaq() {
  app.innerHTML = `
    <button class="back-btn" data-view="home">‹ Back</button>
    <h1 class="detail-title">FAQ</h1>
    <p class="detail-summary">Frequently asked questions about your rights in Western Australia.</p>
    ${FAQS.map(
      (f, i) => `
      <div class="qa-item">
        <button class="qa-q" data-qa="${i}">${esc(f.q)}<span class="qa-chev">›</span></button>
        <div class="qa-a"><p>${esc(f.detail)}</p></div>
      </div>`
    ).join("")}
    ${disclaimerHtml()}
  `;
  bindAccordions();
  bindNav(app);
  window.scrollTo(0, 0);
}

function renderSituation() {
  app.innerHTML = `
    <button class="back-btn" data-view="home">‹ Back</button>
    <h1 class="detail-title">Check Your Situation</h1>
    <p class="detail-summary">What’s happening? Pick the closest match to see your rights and the relevant police powers.</p>
    ${SITUATIONS.map(
      (s) => `
      <button class="situation-btn" data-scenario="${s.target}" data-back="situation">
        <span class="card-icon" style="width:42px;height:42px;font-size:1.2rem">${s.icon}</span>
        ${esc(s.label)}
        <span class="chev" style="margin-left:auto;color:var(--accent)">›</span>
      </button>`
    ).join("")}
  `;
  bindNav(app);
  window.scrollTo(0, 0);
}

function renderFavourites() {
  const favs = getFavs();
  const items = SCENARIOS.filter((s) => favs.includes(s.id));
  app.innerHTML = `
    <button class="back-btn" data-view="home">‹ Back</button>
    <h1 class="detail-title">🔖 Favourites</h1>
    ${
      items.length
        ? items.map(topicCardHtml).join("")
        : `<p class="empty-msg">No favourites yet.<br/>Open any topic and tap the ☆ star to save it here.</p>`
    }
  `;
  bindNav(app);
  window.scrollTo(0, 0);
}

function renderNoRightsAct() {
  app.innerHTML = `
    <button class="back-btn" data-view="home">‹ Back</button>
    <h1 class="detail-title">🏛️ Your Rights in WA</h1>
    <p class="detail-summary">Where your rights actually come from in Western Australia.</p>
    <div class="detail-section">
      <h3>WA has no Human Rights Act</h3>
      <p>Unlike Queensland (Human Rights Act 2019), Victoria and the ACT, Western Australia has not enacted a Human Rights Act. There is no single WA law setting out rights like liberty, privacy or fair hearing.</p>
    </div>
    <div class="detail-section">
      <h3>So where do your rights come from?</h3>
      <ul>
        <li><strong>Specific WA statutes</strong> — e.g. the Criminal Investigation Act 2006 limits police powers and gives arrested people rights (lawyer, interpreter, limited detention).</li>
        <li><strong>The common law</strong> — the right to silence, the presumption of innocence, protection against unlawful arrest and trespass.</li>
        <li><strong>The Australian Constitution</strong> — limited protections, including freedom of political communication.</li>
        <li><strong>Federal law</strong> — anti-discrimination legislation and Australia’s international human rights obligations.</li>
      </ul>
    </div>
    <div class="detail-section">
      <h3>What this means in practice</h3>
      <p>Because there’s no general rights charter in WA, the detail of each specific law matters more. Knowing exactly when police can and can’t require something of you — which is what this app is for — is your main practical protection.</p>
    </div>
    ${lawRefsHtml(["cia", "ciipa", "code"])}
    ${disclaimerHtml()}
  `;
  bindNav(app);
  window.scrollTo(0, 0);
}

function renderContacts() {
  app.innerHTML = `
    <button class="back-btn" data-view="home">‹ Back</button>
    <h1 class="detail-title">📞 Legal Help</h1>
    <p class="detail-summary">Free and low-cost legal help in Western Australia.</p>
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
    ${disclaimerHtml()}
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
    el.addEventListener("click", () => {
      const v = el.getAttribute("data-view");
      (VIEWS[v] || renderHome)();
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
  b.addEventListener("click", () => {
    const v = b.getAttribute("data-nav");
    (VIEWS[v] || renderHome)();
  });
});

renderHome();
