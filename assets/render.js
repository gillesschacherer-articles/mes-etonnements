/* Petits utilitaires de rendu partagés entre les pages. */

const MOIS = [
  "janv.", "févr.", "mars", "avr.", "mai", "juin",
  "juil.", "août", "sept.", "oct.", "nov.", "déc.",
];

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return `${d.getDate()} ${MOIS[d.getMonth()]} ${d.getFullYear()}`;
}

function entryRowHTML(entry) {
  return `
    <li class="entry">
      <span class="date">${formatDate(entry.date)}</span>
      <span class="title-block">
        <a href="${entry.pdf}" target="_blank" rel="noopener">${entry.title}</a>
        <span class="theme">${entry.theme}</span>
      </span>
      <a class="dl" href="${entry.pdf}" target="_blank" rel="noopener">PDF ↓</a>
    </li>
  `;
}
