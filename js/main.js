(function () {
  "use strict";

  const data = window.portfolioData;
  const body = document.body;

  const icons = {
    linkedin:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.51-3.5-.7-3.72-1.34-.13-.33-.68-1.35-1.16-1.62-.4-.22-.96-.75-.01-.77.89-.01 1.53.83 1.74 1.18 1.02 1.75 2.65 1.25 3.3.96.1-.75.4-1.26.72-1.55-2.53-.29-5.19-1.29-5.19-5.74 0-1.27.44-2.31 1.16-3.12-.12-.29-.5-1.48.11-3.08 0 0 .95-.31 3.13 1.19a10.6 10.6 0 0 1 5.7 0c2.17-1.5 3.12-1.19 3.12-1.19.62 1.6.23 2.79.11 3.08.72.81 1.16 1.84 1.16 3.12 0 4.46-2.67 5.44-5.21 5.73.41.36.77 1.07.77 2.17 0 1.57-.01 2.83-.01 3.22 0 .27.18.6.69.49A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2z"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6 8.5 6.5L20.5 6"/></svg>',
    external:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6"/><path d="M10 14 20 4"/><path d="M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6"/></svg>',
    arrow:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 2.9a2 2 0 0 1-.5 2.1L7.9 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.5 2.9.6a2 2 0 0 1 1.7 2.1z"/></svg>',
  };

  let currentMode = localStorage.getItem("portfolioMode") || "hardware";
  const modeParam = new URLSearchParams(location.search).get("mode");
  if (modeParam === "hardware" || modeParam === "software") currentMode = modeParam;

  const els = {
    modeSwitch: document.querySelector(".mode-switch"),
    switchHardware: document.getElementById("switchHardware"),
    switchSoftware: document.getElementById("switchSoftware"),
    heroEyebrow: document.getElementById("heroEyebrow"),
    heroHeadline: document.getElementById("heroHeadline"),
    heroSub: document.getElementById("heroSub"),
    heroKeywords: document.getElementById("heroKeywords"),
    heroMeta: document.getElementById("heroMeta"),
    heroVisual: document.getElementById("heroVisual"),
    heroResumeLink: document.getElementById("heroResumeLink"),
    aboutObjective: document.getElementById("aboutObjective"),
    focusList: document.getElementById("focusList"),
    projectsEyebrow: document.getElementById("projectsEyebrow"),
    projectsIntro: document.getElementById("projectsIntro"),
    projectGrid: document.getElementById("projectGrid"),
    experienceTimeline: document.getElementById("experienceTimeline"),
    skillsGrid: document.getElementById("skillsGrid"),
    pubList: document.getElementById("pubList"),
    eduList: document.getElementById("eduList"),
    certList: document.getElementById("certList"),
    contactLinks: document.getElementById("contactLinks"),
    footerMode: document.getElementById("footerMode"),
    footerGithub: document.getElementById("footerGithub"),
    modalOverlay: document.getElementById("modalOverlay"),
    modalTitle: document.getElementById("modalTitle"),
    modalDomain: document.getElementById("modalDomain"),
    modalTags: document.getElementById("modalTags"),
    modalPoints: document.getElementById("modalPoints"),
    modalLinks: document.getElementById("modalLinks"),
    modalClose: document.getElementById("modalClose"),
    burgerBtn: document.getElementById("burgerBtn"),
    mobilePanel: document.getElementById("mobilePanel"),
  };

  function esc(str) {
    const d = document.createElement("div");
    d.textContent = str == null ? "" : String(str);
    return d.innerHTML;
  }

  // ---------------- HERO VISUALS ----------------
  function hardwareSVG() {
    return `<svg viewBox="0 0 480 460" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="hwline" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="var(--hw-a)"/>
          <stop offset="1" stop-color="var(--hw-b)"/>
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#hwline)" stroke-width="1.4" opacity="0.85">
        <path d="M40 120 H180 V60 H420" />
        <path d="M40 200 H120 V300 H260 V380" />
        <path d="M420 100 V220 H320 V340 H420" />
        <path d="M60 380 H220 V420" />
        <path d="M300 60 V160 H240" />
      </g>
      <g fill="url(#hwline)">
        <circle cx="40" cy="120" r="4"/><circle cx="420" cy="60" r="4"/>
        <circle cx="40" cy="200" r="4"/><circle cx="260" cy="380" r="4"/>
        <circle cx="420" cy="100" r="4"/><circle cx="420" cy="340" r="4"/>
        <circle cx="220" cy="420" r="4"/><circle cx="300" cy="60" r="4"/>
      </g>
      <g stroke="var(--hw-a)" stroke-width="1" opacity="0.5">
        <rect x="170" y="170" width="120" height="100" rx="4" fill="rgba(63,224,200,0.06)"/>
      </g>
      <g stroke="var(--hw-b)" stroke-width="1.4" opacity="0.75">
        <path d="M170 190 H140 M170 210 H140 M170 230 H140 M170 250 H140" />
        <path d="M290 190 H320 M290 210 H320 M290 230 H320 M290 250 H320" />
      </g>
      <text x="200" y="226" font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--ink-dim)">HEMT</text>
    </svg>`;
  }

  function softwareSVG() {
    return `<svg viewBox="0 0 480 460" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="swline" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="var(--sw-a)"/>
          <stop offset="1" stop-color="var(--sw-b)"/>
        </linearGradient>
      </defs>
      <rect x="70" y="60" width="340" height="220" rx="14" fill="rgba(155,123,255,0.06)" stroke="url(#swline)" stroke-width="1.3"/>
      <circle cx="96" cy="86" r="4" fill="var(--sw-b)"/>
      <circle cx="112" cy="86" r="4" fill="var(--sw-a)" opacity="0.7"/>
      <circle cx="128" cy="86" r="4" fill="var(--ink-faint)"/>
      <g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--ink-dim)">
        <text x="90" y="120">const engineer = {</text>
        <text x="110" y="140" fill="var(--sw-a)">domain: "hardware + software",</text>
        <text x="110" y="160" fill="var(--sw-b)">stack: ["React", "Verilog"],</text>
        <text x="90" y="180">}</text>
      </g>
      <g stroke="url(#swline)" stroke-width="1.2" opacity="0.7" fill="none">
        <path d="M70 320 H410" />
        <path d="M110 320 V400" />
        <path d="M220 320 V370 H340 V400" />
        <path d="M370 320 V360" />
      </g>
      <g fill="url(#swline)">
        <circle cx="110" cy="400" r="4"/><circle cx="340" cy="400" r="4"/><circle cx="370" cy="360" r="4"/>
      </g>
    </svg>`;
  }

  // ---------------- RENDER ----------------
  function render(mode) {
    const d = data[mode];
    const c = data.common;

    document.title = `Vignesh K P — ${d.modeLabel} Engineer`;

    // hero
    els.heroEyebrow.textContent =
      mode === "hardware"
        ? "Electronics & Communication Engineering · VLSI & IoT"
        : "Electronics & Communication Engineering · Software Development";
    els.heroHeadline.innerHTML =
      mode === "hardware"
        ? `Designing <span class="hl">silicon</span> that thinks.`
        : `Building <span class="hl">software</span> that works.`;
    els.heroSub.textContent = d.objective;
    els.heroKeywords.innerHTML = d.heroKeywords
      .map((k) => `<span class="pill">${esc(k)}</span>`)
      .join("");
    els.heroResumeLink.href = d.resumeFile;
    els.heroResumeLink.download = "";

    const projectCount = d.projects.length;
    const expCount = d.experience.length;
    const metaItems =
      mode === "hardware"
        ? [
            [String(projectCount), "Hardware projects"],
            [String(d.publications.length), "Papers accepted"],
            ["90nm", "CMOS process node"],
          ]
        : [
            [String(projectCount), "Software projects"],
            [String(expCount), "Active internship"],
            ["React.js", "Primary framework"],
          ];
    els.heroMeta.innerHTML = metaItems
      .map(
        ([val, lab]) =>
          `<div><span class="val">${esc(val)}</span><span class="lab">${esc(lab)}</span></div>`
      )
      .join("");
    els.heroVisual.innerHTML = mode === "hardware" ? hardwareSVG() : softwareSVG();

    // about
    els.aboutObjective.textContent = d.objective;
    els.focusList.innerHTML = d.focusAreas.map((f) => `<li>${esc(f)}</li>`).join("");

    // projects
    els.projectsEyebrow.textContent = mode === "hardware" ? "Device & VLSI work" : "Applications shipped";
    els.projectsIntro.textContent =
      mode === "hardware"
        ? "Device-level and VLSI design projects, from semiconductor simulation to transistor-level CMOS blocks."
        : "Web applications built end to end, from UI to logic.";
    els.projectGrid.innerHTML = d.projects
      .map((p, i) => {
        const links = [];
        if (p.github) {
          links.push(
            `<a href="${esc(p.github)}" target="_blank" rel="noopener noreferrer" aria-label="View ${esc(p.shortName)} on GitHub" onclick="event.stopPropagation()">${icons.github}</a>`
          );
        }
        return `
        <button class="card project-card reveal" data-project-index="${i}" data-mode="${mode}" type="button">
          <div class="project-card-top">
            <span class="project-card-domain">${esc(p.domain)}</span>
            ${p.date ? `<span class="project-card-date">${esc(p.date)}</span>` : ""}
          </div>
          <h3>${esc(p.shortName)}</h3>
          <p>${esc(p.summary)}</p>
          <div class="project-card-tags">${p.tags.map((t) => `<span class="pill">${esc(t)}</span>`).join("")}</div>
          <div class="project-card-foot">
            <span class="project-card-more">View details ${icons.arrow}</span>
            ${links.length ? `<span class="project-card-links">${links.join("")}</span>` : ""}
          </div>
        </button>`;
      })
      .join("");

    // experience
    els.experienceTimeline.innerHTML = d.experience
      .map(
        (e) => `
        <div class="timeline-item reveal">
          <div class="timeline-head">
            <div>
              <h3>${esc(e.role)}</h3>
              <div class="timeline-org">${esc(e.org)}</div>
            </div>
            <span class="timeline-date">${esc(e.duration)}</span>
          </div>
          <ul class="timeline-points">${e.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>
        </div>`
      )
      .join("");

    // skills
    els.skillsGrid.innerHTML = d.skills
      .map(
        (s) => `
        <div class="card skill-card reveal">
          <h3>${esc(s.category)}</h3>
          <div class="skill-pills">${s.items.map((it) => `<span class="pill">${esc(it)}</span>`).join("")}</div>
        </div>`
      )
      .join("");

    // publications (hardware only, but keep populated regardless)
    if (d.publications) {
      els.pubList.innerHTML = d.publications
        .map(
          (p, i) => `
          <div class="card pub-card reveal">
            <span class="pub-index">${String(i + 1).padStart(2, "0")}</span>
            <div>
              <span class="pub-status">${esc(p.status)}</span>
              <h3>${esc(p.title)}</h3>
              <div class="pub-meta"><span class="lab">Conference</span>${esc(p.conference)}</div>
              <div class="pub-meta"><span class="lab">Venue</span>${esc(p.venue)}</div>
              <div class="pub-meta"><span class="lab">Dates</span>${esc(p.dates)}</div>
            </div>
          </div>`
        )
        .join("");
    }

    // education (common)
    els.eduList.innerHTML = c.education
      .map(
        (e) => `
        <div class="edu-item">
          <h3>${esc(e.institution)}</h3>
          <div class="edu-degree">${esc(e.degree)}</div>
          <div class="edu-row"><span>${esc(e.duration)}</span><span class="accent">${esc(e.detail)}</span></div>
        </div>`
      )
      .join("");

    // certifications (common)
    els.certList.innerHTML = c.certifications
      .map(
        (cert) => `
        <div class="cert-item">
          <span>${esc(cert.name)}</span>
          <span class="cert-issuer">${esc(cert.issuer)}</span>
        </div>`
      )
      .join("");

    // contact
    const contactRows = [
      { icon: icons.mail, label: "Email", value: c.email, href: `mailto:${c.email}` },
      { icon: icons.phone, label: "Phone", value: c.phone, href: `tel:${c.phone}` },
      { icon: icons.linkedin, label: "LinkedIn", value: c.linkedinLabel, href: c.linkedin },
    ];
    if (mode === "software") {
      contactRows.push({ icon: icons.github, label: "GitHub", value: c.githubLabel, href: c.github });
    }
    els.contactLinks.innerHTML = contactRows
      .map(
        (r) => `
        <a class="contact-link-row" href="${esc(r.href)}" ${r.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>
          <span class="ic">${r.icon}</span>
          <span><span class="lab">${esc(r.label)}</span>${esc(r.value)}</span>
        </a>`
      )
      .join("");

    // footer
    els.footerMode.textContent = `${d.modeLabel} mode`;

    // mode-only items (nav links, mobile panel links, publications section)
    document.querySelectorAll("[data-mode-only]").forEach((node) => {
      node.classList.toggle("mode-hidden", node.getAttribute("data-mode-only") !== mode);
    });

    // color theme swap
    body.dataset.mode = mode;
    if (mode === "software") {
      document.documentElement.style.setProperty("--accent", "var(--sw-a)");
      document.documentElement.style.setProperty("--accent-2", "var(--sw-b)");
      document.documentElement.style.setProperty("--accent-rgb", "var(--sw-a-rgb)");
      document.documentElement.style.setProperty("--accent-2-rgb", "var(--sw-b-rgb)");
    } else {
      document.documentElement.style.setProperty("--accent", "var(--hw-a)");
      document.documentElement.style.setProperty("--accent-2", "var(--hw-b)");
      document.documentElement.style.setProperty("--accent-rgb", "var(--hw-a-rgb)");
      document.documentElement.style.setProperty("--accent-2-rgb", "var(--hw-b-rgb)");
    }

    // switch UI state
    els.switchHardware.setAttribute("aria-pressed", String(mode === "hardware"));
    els.switchSoftware.setAttribute("aria-pressed", String(mode === "software"));
    els.modeSwitch.classList.toggle("is-software", mode === "software");

    attachRevealObserver();
  }

  function setMode(mode, updateUrl) {
    if (mode !== "hardware" && mode !== "software") return;
    currentMode = mode;
    localStorage.setItem("portfolioMode", mode);
    if (updateUrl !== false) {
      const url = new URL(location.href);
      url.searchParams.set("mode", mode);
      history.replaceState(null, "", url);
    }
    render(mode);
  }

  els.switchHardware.addEventListener("click", () => setMode("hardware"));
  els.switchSoftware.addEventListener("click", () => setMode("software"));

  // ---------------- PROJECT MODAL ----------------
  els.projectGrid.addEventListener("click", (e) => {
    const cardBtn = e.target.closest(".project-card");
    if (!cardBtn) return;
    const idx = Number(cardBtn.dataset.projectIndex);
    const mode = cardBtn.dataset.mode;
    const p = data[mode].projects[idx];
    openModal(p, mode);
  });

  function openModal(p, mode) {
    els.modalDomain.textContent = p.domain + (p.date ? ` · ${p.date}` : "");
    els.modalTitle.textContent = p.name;
    els.modalTags.innerHTML = p.tags.map((t) => `<span class="pill">${esc(t)}</span>`).join("");
    els.modalPoints.innerHTML = p.points.map((pt) => `<li>${esc(pt)}</li>`).join("");
    const links = [];
    if (p.github) {
      links.push(
        `<a class="btn" href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">${icons.github} View on GitHub</a>`
      );
    }
    els.modalLinks.innerHTML = links.join("");
    els.modalOverlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    els.modalClose.focus();
  }

  function closeModal() {
    els.modalOverlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  els.modalClose.addEventListener("click", closeModal);
  els.modalOverlay.addEventListener("click", (e) => {
    if (e.target === els.modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeMobilePanel();
    }
  });

  // ---------------- MOBILE NAV ----------------
  function openMobilePanel() {
    els.mobilePanel.classList.add("is-open");
    els.burgerBtn.setAttribute("aria-expanded", "true");
  }
  function closeMobilePanel() {
    els.mobilePanel.classList.remove("is-open");
    els.burgerBtn.setAttribute("aria-expanded", "false");
  }
  els.burgerBtn.addEventListener("click", () => {
    els.mobilePanel.classList.contains("is-open") ? closeMobilePanel() : openMobilePanel();
  });
  els.mobilePanel.addEventListener("click", (e) => {
    if (e.target === els.mobilePanel || e.target.tagName === "A") closeMobilePanel();
  });

  // ---------------- SCROLL REVEAL ----------------
  let observer;
  function attachRevealObserver() {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => observer.observe(el));
  }

  // ---------------- CONTACT FORM (mailto fallback) ----------------
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cf-name").value;
    const email = document.getElementById("cf-email").value;
    const message = document.getElementById("cf-message").value;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${data.common.email}?subject=${subject}&body=${body}`;
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  // ---------------- INIT ----------------
  render(currentMode);
})();
