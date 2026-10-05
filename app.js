/* App logic — renders content.js into the page. Không cần sửa file này khi cập nhật nội dung. */
(function () {
  const S = window.SITE, O = S.owner, P = S.project;
  const $ = (s) => document.querySelector(s);
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmt = (n, d = 0) => n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  const avatar = (photo, initials) => photo ? `<img src="${esc(photo)}" alt="">` : esc(initials);
  const initialsOf = (n) => n.split(/\s+/).map((w) => w[0]).slice(-2).join("").toUpperCase();

  /* ---------- OWNER ---------- */
  document.title = `${O.name} — Portfolio`;
  $("#brandMark").textContent = O.initials;
  $("#brandName").textContent = O.shortName;
  $("#heroHeadline").textContent = O.headline;
  const parts = O.name.split(" ");
  $("#heroName").innerHTML = `${esc(parts.slice(0, -2).join(" "))} <span class="accent">${esc(parts.slice(-2).join(" "))}</span>`;
  $("#heroTagline").textContent = O.tagline;
  $("#heroLocation").textContent = O.location;
  $("#heroAvatar").innerHTML = avatar(O.photo, O.initials);
  const cv = $("#heroCv"); O.cv ? (cv.href = O.cv) : cv.classList.add("hidden");
  $("#heroHighlights").innerHTML = O.highlights.map((h) => `<div class="hl"><span>${esc(h.label)}</span><b>${esc(h.value)}</b></div>`).join("");
  $("#aboutText").innerHTML = O.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#skills").innerHTML = O.skills.map((g) => `<div class="skill-group"><h4>${esc(g.group)}</h4><div class="chips">${g.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div></div>`).join("");
  $("#timeline").innerHTML = O.experience.map((e) => `<div class="tl-item"><div class="tl-period">${esc(e.period)}</div><h3>${esc(e.title)}</h3><div class="tl-org">${esc(e.org)}</div><p>${esc(e.text)}</p></div>`).join("");
  $("#cEmail").href = `mailto:${O.email}`;
  const li = $("#cLinkedin"); O.linkedin ? (li.href = O.linkedin) : li.classList.add("hidden");
  $("#year").textContent = new Date().getFullYear();
  $("#footName").textContent = O.name;

  /* ---------- TEAM ---------- */
  $("#teamGrid").innerHTML = S.team.map((m, i) => `
    <div class="member reveal" style="transition-delay:${i * 80}ms" tabindex="0">
      <div class="member-inner">
        <div class="face front">
          <div class="avatar">${avatar(m.photo, initialsOf(m.name))}</div>
          <h3>${esc(m.name)}</h3>
          <p class="role">${esc(m.role)}</p>
          ${i === 0 ? '<span class="lead-badge">Portfolio owner</span>' : '<span class="hint">Hover or tap to see contributions</span>'}
        </div>
        <div class="face back">
          <h4>${esc(m.fullName)}</h4>
          <ul>${m.contributions.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
          ${m.linkedin ? `<a href="${esc(m.linkedin)}" target="_blank" rel="noopener">LinkedIn ↗</a>` : ""}
        </div>
      </div>
    </div>`).join("");
  document.querySelectorAll(".member").forEach((el) => el.addEventListener("click", () => el.classList.toggle("flipped")));

  /* ---------- PROJECT ---------- */
  $("#projTag").textContent = P.tag;
  $("#projTitle").textContent = P.title;
  $("#projSummary").textContent = P.summary;
  $("#projReport").href = P.report;
  $("#projDisclaimer").textContent = P.disclaimer;
  $("#kpiGrid").innerHTML = P.kpis.map((k, i) => `<div class="kpi reveal" style="transition-delay:${i * 90}ms"><b data-count="${k.value}" data-dec="${k.decimals || 0}" data-pre="${esc(k.prefix || "")}" data-suf="${esc(k.suffix || "")}">0</b><span>${esc(k.label)}</span></div>`).join("");
  $("#steps").innerHTML = P.steps.map((s) => `<div class="step"><div class="n">${s.n}</div><h4>${esc(s.title)}</h4><p>${esc(s.text)}</p></div>`).join("");
  $("#findings").innerHTML = P.findings.map((f, i) => `<div class="finding"><div class="idx">${i + 1}</div><div><h4>${esc(f.title)}</h4><p>${esc(f.text)}</p></div></div>`).join("");
  $("#scenTable").innerHTML = `<thead><tr><th>FY2026F</th>${P.scenarios.map((s) => `<th>${s.name}</th>`).join("")}</tr></thead><tbody>
    <tr><td>Revenue growth</td>${P.scenarios.map((s) => `<td>${s.growth}</td>`).join("")}</tr>
    <tr><td>Gross margin</td>${P.scenarios.map((s) => `<td>${s.gm}</td>`).join("")}</tr>
    <tr><td>SG&amp;A / revenue</td>${P.scenarios.map((s) => `<td>${s.sga}</td>`).join("")}</tr>
    <tr><td>Net income (VND bn)</td>${P.scenarios.map((s) => `<td class="${s.netIncome < 0 ? "neg" : "pos"}">${fmt(s.netIncome)}</td>`).join("")}</tr>
    <tr><td>Net cash generated (VND bn)</td>${P.scenarios.map((s) => `<td class="${s.cash < 0 ? "neg" : "pos"}">${fmt(s.cash)}</td>`).join("")}</tr></tbody>`;
  $("#pages").innerHTML = P.pages.map((p) => `<div class="page" data-src="${esc(p.src)}" data-cap="${esc(p.caption)}"><img src="${esc(p.src)}" alt="${esc(p.caption)}" loading="lazy"><p>${esc(p.caption)}</p></div>`).join("");

  /* ---------- SVG CHARTS ---------- */
  const tip = document.createElement("div"); tip.className = "tip"; document.body.appendChild(tip);
  const showTip = (e, t) => { tip.textContent = t; tip.style.opacity = 1; tip.style.left = e.clientX + 12 + "px"; tip.style.top = e.clientY - 30 + "px"; };
  const hideTip = () => (tip.style.opacity = 0);
  const W = 520, H = 280, M = { t: 20, r: 16, b: 34, l: 52 };

  function axes(min, max, ticks, fmtT) {
    let g = '<g class="grid">';
    for (let i = 0; i <= ticks; i++) {
      const v = min + ((max - min) * i) / ticks, y = M.t + (H - M.t - M.b) * (1 - i / ticks);
      g += `<line x1="${M.l}" x2="${W - M.r}" y1="${y}" y2="${y}"/><text x="${M.l - 8}" y="${y + 4}" text-anchor="end">${fmtT(v)}</text>`;
    }
    return g + "</g>";
  }
  function lineChart(el, series, min, max, fmtT, unit, ticks = 4) {
    const xs = P.years, iw = W - M.l - M.r, ih = H - M.t - M.b;
    const X = (i) => M.l + (iw * i) / (xs.length - 1), Y = (v) => M.t + ih * (1 - (v - min) / (max - min));
    let svg = `<svg viewBox="0 0 ${W} ${H}">${axes(min, max, ticks, fmtT)}`;
    xs.forEach((x, i) => (svg += `<text x="${X(i)}" y="${H - 10}" text-anchor="middle">${x}</text>`));
    series.forEach((s) => {
      const d = s.data.map((v, i) => `${i ? "L" : "M"}${X(i)},${Y(v)}`).join(" ");
      svg += `<path class="line" d="${d}" stroke="${s.color}"/>`;
      s.data.forEach((v, i) => (svg += `<circle cx="${X(i)}" cy="${Y(v)}" r="5" fill="#fff" stroke="${s.color}" stroke-width="2.5" data-t="${s.name} ${xs[i]}: ${fmt(v, unit === "%" ? 2 : 0)}${unit}"/>`));
    });
    el.innerHTML = svg + "</svg>";
    el.querySelectorAll("path.line").forEach((p) => p.style.setProperty("--len", Math.ceil(p.getTotalLength())));
  }
  function legend(el, series) { el.innerHTML = series.map((s) => `<span><i style="background:${s.color}"></i>${s.name}</span>`).join(""); }

  const incomeSeries = [
    { name: "Revenue", data: P.revenue, color: "#0B1F44" },
    { name: "Operating cash flow", data: P.cfo, color: "#C9A24B" },
    { name: "Net profit", data: P.netProfit, color: "#2563EB" },
  ];
  lineChart($("#chartIncome"), incomeSeries, 0, 60000, (v) => fmt(v / 1000) + "k", "");
  legend($("#legendIncome"), incomeSeries);
  const marginSeries = [
    { name: "Gross margin", data: P.grossMargin, color: "#0B1F44" },
    { name: "EBIT margin", data: P.ebitMargin, color: "#2563EB" },
    { name: "Net margin", data: P.netMargin, color: "#C9A24B" },
  ];
  lineChart($("#chartMargin"), marginSeries, 10, 35, (v) => fmt(v) + "%", "%", 5);
  legend($("#legendMargin"), marginSeries);

  (function scenChart(el) {
    const min = -2500, max = 10000, iw = W - M.l - M.r, ih = H - M.t - M.b;
    const Y = (v) => M.t + ih * (1 - (v - min) / (max - min)), bw = iw / P.scenarios.length;
    const colors = { Bear: "#C2410C", Base: "#0B1F44", Bull: "#15803D" };
    let svg = `<svg viewBox="0 0 ${W} ${H}">${axes(min, max, 5, (v) => fmt(v))}<line x1="${M.l}" x2="${W - M.r}" y1="${Y(0)}" y2="${Y(0)}" stroke="#94A3B8"/>`;
    P.scenarios.forEach((s, i) => {
      const x = M.l + bw * i + bw * 0.22, w = bw * 0.56, y = s.netIncome >= 0 ? Y(s.netIncome) : Y(0), h = Math.abs(Y(s.netIncome) - Y(0));
      svg += `<rect class="bar" x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${colors[s.name]}" style="animation-delay:${i * 150}ms;${s.netIncome < 0 ? "transform-origin:top" : ""}" data-t="${s.name}: ${fmt(s.netIncome)} VND bn"/>`;
      svg += `<text class="val" x="${x + w / 2}" y="${s.netIncome >= 0 ? y - 8 : y + h + 16}" text-anchor="middle">${fmt(s.netIncome)}</text>`;
      svg += `<text x="${x + w / 2}" y="${H - 10}" text-anchor="middle">${s.name}</text>`;
    });
    el.innerHTML = svg + "</svg>";
  })($("#chartScen"));

  document.querySelectorAll(".chart [data-t]").forEach((n) => {
    n.addEventListener("mousemove", (e) => showTip(e, n.dataset.t));
    n.addEventListener("mouseleave", hideTip);
  });
  const drawVisible = () => document.querySelectorAll(".tab-panel.active .chart").forEach((c) => c.classList.add("draw"));

  /* ---------- TABS ---------- */
  document.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => {
    document.querySelectorAll(".tab, .tab-panel").forEach((x) => x.classList.remove("active"));
    t.classList.add("active");
    $("#tab-" + t.dataset.tab).classList.add("active");
    requestAnimationFrame(drawVisible);
  }));

  /* ---------- LIGHTBOX ---------- */
  const lb = $("#lightbox");
  document.querySelectorAll(".page").forEach((p) => p.addEventListener("click", () => { $("#lbImg").src = p.dataset.src; $("#lbCap").textContent = p.dataset.cap; lb.classList.add("open"); }));
  lb.addEventListener("click", (e) => { if (e.target !== $("#lbImg")) lb.classList.remove("open"); });
  document.addEventListener("keydown", (e) => e.key === "Escape" && lb.classList.remove("open"));

  /* ---------- NAV, PROGRESS, REVEAL, COUNTERS ---------- */
  const nav = $("#nav"), links = [...document.querySelectorAll(".nav-links a")];
  $("#navToggle").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
  links.forEach((a) => a.addEventListener("click", () => $("#navLinks").classList.remove("open")));
  const onScroll = () => {
    const y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle("scrolled", y > 40);
    $("#progress").style.width = (y / h) * 100 + "%";
    let cur = "";
    document.querySelectorAll("section[id]").forEach((s) => { if (y >= s.offsetTop - 140) cur = s.id; });
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  const count = (el) => {
    const end = +el.dataset.count, dec = +el.dataset.dec, t0 = performance.now(), dur = 1400;
    const step = (t) => { const p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = el.dataset.pre + fmt(end * e, dec) + el.dataset.suf; if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    en.target.querySelectorAll?.("[data-count]").forEach(count);
    if (en.target.matches("[data-count]")) count(en.target);
    if (en.target.classList.contains("tabs")) drawVisible();
    io.unobserve(en.target);
  }), { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
