/* Utilitaires partagés entre les pages. */
const MOIS = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return `${d.getDate()} ${MOIS[d.getMonth()]} ${d.getFullYear()}`;
}

/* Normalise un texte pour la recherche : minuscules, sans accents. */
function norm(s) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function entryRowHTML(e) {
  return `
    <li class="entry">
      <div class="meta">
        <span class="num">N° ${e.num}</span>
        <span class="date">${formatDate(e.date)}</span>
      </div>
      <div class="title-block">
        <a class="etitle" href="${e.pdf}" target="_blank" rel="noopener">${e.title}</a>
        <span class="theme">${e.theme}</span>
        <p class="summary">${e.summary}</p>
      </div>
      <a class="dl" href="${e.pdf}" target="_blank" rel="noopener">PDF ↓</a>
    </li>`;
}

function cardHTML(e) {
  return `
    <article class="card">
      <span class="num">N° ${e.num} · ${formatDate(e.date)}</span>
      <h3><a href="${e.pdf}" target="_blank" rel="noopener">${e.title}</a></h3>
      <span class="theme">${e.theme}</span>
      <p class="summary">${e.summary}</p>
    </article>`;
}
