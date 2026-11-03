/* =========================================================
   MES ÉTONNEMENTS — liste des numéros
   ---------------------------------------------------------
   Pour ajouter un nouveau numéro :
   1. Dépose le PDF dans le dossier /pdfs/
   2. Copie un bloc { ... } ci-dessous, en haut du tableau
   3. Renseigne date, titre, thème, résumé, et le nom du fichier pdf
   Rien d'autre à toucher : les pages se mettent à jour seules.
   ========================================================= */

const ENTRIES = [
  {
    date: "2026-06-28",
    title: "La non-écologie punitive",
    theme: "Climat",
    summary:
      "Et si l'inaction, et non les mesures écologiques, était le véritable coût qu'on refuse de nommer ?",
    pdf: "pdfs/2026-06-28-non-ecologie-punitive.pdf",
  },
  {
    date: "2026-06-07",
    title: "Ce que dit vraiment la démographie française",
    theme: "Société",
    summary:
      "Projections INSEE, immigration, équilibre des retraites : ce que les chiffres racontent quand on les regarde en face.",
    pdf: "pdfs/2026-06-07-demographie-francaise.pdf",
  },
  {
    date: "2026-05-17",
    title: "Magnifica Humanitas : ce que le Pape dit de l'intelligence artificielle",
    theme: "Société",
    summary:
      "Une lecture de l'encyclique consacrée aux risques de l'IA, et de ce qu'elle déplace dans le débat public.",
    pdf: "pdfs/2026-05-17-magnifica-humanitas.pdf",
  },
  {
    date: "2026-04-26",
    title: "L'énergie que coûte une question à une IA",
    theme: "Climat",
    summary:
      "Consommation électrique, eau, empreinte carbone : la facture cachée derrière chaque requête.",
    pdf: "pdfs/2026-04-26-ia-energie.pdf",
  },
  {
    date: "2026-04-05",
    title: "\u00ab On n'a jamais essayé \u00bb — le cas hongrois",
    theme: "Politique",
    summary:
      "L'Orbanisme comme contre-exemple gênant à une objection qu'on entend partout.",
    pdf: "pdfs/2026-04-05-orban-hongrie.pdf",
  },
  {
    date: "2026-03-15",
    title: "Une justice à bout de souffle",
    theme: "Justice",
    summary:
      "Sous-financement chronique et ses conséquences concrètes sur les violences faites aux femmes et aux enfants.",
    pdf: "pdfs/2026-03-15-justice-sous-financee.pdf",
  },
  {
    date: "2026-02-22",
    title: "Ce que la violence des stades dit de nous",
    theme: "Société",
    summary:
      "Sortir du réflexe punitif pour lire la violence footballistique comme un fait structurel plutôt qu'un accident.",
    pdf: "pdfs/2026-02-22-violence-stades.pdf",
  },
  {
    date: "2026-02-01",
    title: "Nos cœurs invincibles",
    theme: "Récit",
    summary:
      "Voix israéliennes et palestiniennes qui refusent la logique de la haine réciproque.",
    pdf: "pdfs/2026-02-01-nos-coeurs-invincibles.pdf",
  },
  {
    date: "2026-01-11",
    title: "1933–2026 : anatomie d'une répétition ?",
    theme: "Politique",
    summary:
      "Ce que l'histoire du fascisme des années 30 éclaire, et n'éclaire pas, des mouvements autoritaires actuels.",
    pdf: "pdfs/2026-01-11-anatomie-repetition.pdf",
  },
  {
    date: "2025-12-14",
    title: "Bâillons, contre-feux, saturations, effacement",
    theme: "Politique",
    summary:
      "Quatre techniques de suppression rhétorique, décortiquées une à une.",
    pdf: "pdfs/2025-12-14-baillons-contre-feux.pdf",
  },
  {
    date: "2025-11-23",
    title: "Le désert apprend à se taire",
    theme: "Récit",
    summary:
      "Un trek dans le Sahara algérien, la présence tenue d'un guide touareg, et ce que l'Occident a désappris.",
    pdf: "pdfs/2025-11-23-le-desert.pdf",
  },
];

// Tri anti-erreur : toujours du plus récent au plus ancien,
// même si l'ordre ci-dessus n'est pas parfaitement respecté.
ENTRIES.sort((a, b) => new Date(b.date) - new Date(a.date));
