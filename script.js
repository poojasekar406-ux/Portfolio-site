const P = PORTFOLIO, $ = id => document.getElementById(id);
const li = a => a.map(t => `<li>${t}</li>`).join("");
const btn = (href, text, cls = "") => `<a class="btn ${cls}" href="${href}" target="${href.startsWith("mailto") ? "_self" : "_blank"}" rel="noopener">${text}</a>`;

$("brand").textContent = P.name;
$("role").textContent = `${P.title}, ${P.location}`;
$("heroName").textContent = P.name;
$("intro").textContent = P.intro;
if (P.photo) { $("photo").src = P.photo; $("photo").alt = P.name; $("photo").hidden = false; }

const L = P.links;
$("heroLinks").innerHTML = btn("#projects", "See my projects", "solid") + btn(L.github, "GitHub") + btn(L.linkedin, "LinkedIn");
$("contactLinks").innerHTML = btn("mailto:" + L.email, L.email, "solid") + btn(L.github, "GitHub") + btn(L.linkedin, "LinkedIn");
$("aboutBody").innerHTML = P.about.map(t => `<p>${t}</p>`).join("");

$("projectList").innerHTML = P.projects.map(p => `
  <article class="item"><h3>${p.title}</h3><p class="meta">${p.stack}</p><ul>${li(p.points)}</ul>
  ${p.link ? `<a class="text-link" href="${p.link}" target="_blank" rel="noopener">View on GitHub</a>` : ""}</article>`).join("");

$("expList").innerHTML = P.experience.map(e => `
  <article class="item"><h3>${e.role}, ${e.org}</h3><p class="meta">${e.period}</p><ul>${li(e.points)}</ul></article>`).join("");

$("skillList").innerHTML = Object.entries(P.skills).map(([g, s]) => `
  <div class="skill-group"><h3>${g}</h3><p class="chips">${s.map(x => `<span>${x}</span>`).join("")}</p></div>`).join("");

$("certList").innerHTML = P.certificates.map((c, i) => {
  const meta = [c.issuer, c.year].filter(Boolean).join(", ");
  const inner = `<strong>${c.title}</strong>${meta ? `<span>${meta}</span>` : ""}`;
  return c.image
    ? `<button class="cert has-img" data-i="${i}"><img src="assets/certificates/${c.image}" alt="" loading="lazy">${inner}</button>`
    : `<div class="cert">${inner}</div>`;
}).join("");
$("workshops").textContent = "Workshops: " + P.workshops.join(", ") + ".";
$("achievement").textContent = P.achievement;
$("footer").textContent = `© ${new Date().getFullYear()} ${P.name}`;

// Certificate popup
const modal = $("modal");
const closeModal = () => { modal.hidden = true; document.body.classList.remove("lock"); };
$("certList").addEventListener("click", e => {
  const card = e.target.closest(".has-img"); if (!card) return;
  const c = P.certificates[card.dataset.i];
  $("modalImg").src = "assets/certificates/" + c.image;
  $("modalImg").alt = c.title;
  $("modalTitle").textContent = c.title;
  $("modalMeta").textContent = [c.issuer, c.year].filter(Boolean).join(", ");
  $("modalVerify").hidden = !c.verify; if (c.verify) $("modalVerify").href = c.verify;
  modal.hidden = false; document.body.classList.add("lock"); $("closeBtn").focus();
});
$("closeBtn").onclick = closeModal;
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });
