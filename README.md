# Mes étonnements — site

Site statique (HTML/CSS/JS pur, aucune installation nécessaire) pour archiver
et diffuser les numéros PDF de la newsletter.

## Mettre le site en ligne (une seule fois)

1. Va sur https://github.com et crée un compte si tu n'en as pas.
2. Clique sur **New repository**. Nom suggéré : `mes-etonnements`.
   Coche **Public**. Ne coche rien d'autre. Clique **Create repository**.
3. Sur la page du dépôt vide, clique **uploading an existing file**.
4. Glisse-dépose tout le contenu de ce dossier (tous les fichiers et le
   dossier `assets`, `pdfs` compris) dans la zone de dépôt. Clique
   **Commit changes**.
5. Va dans l'onglet **Settings** du dépôt, puis **Pages** dans le menu de
   gauche.
6. Sous **Build and deployment → Branch**, choisis `main` et le dossier
   `/ (root)`, puis **Save**.
7. Attends une à deux minutes. L'URL de ton site s'affiche en haut de cette
   même page (`https://<ton-identifiant>.github.io/mes-etonnements/`).

C'est fait. Cette étape n'est à faire qu'une seule fois.

## Ajouter un nouveau numéro (à chaque newsletter)

1. Dans le dépôt GitHub, ouvre le dossier `pdfs`, clique **Add file → Upload
   files**, et dépose le PDF du numéro.
2. Ouvre le fichier `assets/entries.js`, clique sur le crayon (**Edit**).
3. Copie-colle un bloc existant tout en haut du tableau `ENTRIES`, juste
   après `const ENTRIES = [`, et modifie :
   - `date` : au format `AAAA-MM-JJ`
   - `title` : le titre du numéro
   - `theme` : un mot-clé (Climat, Société, Politique, Justice, Récit…)
   - `summary` : une phrase de résumé
   - `pdf` : `pdfs/nom-du-fichier.pdf` (le nom exact du PDF déposé à
     l'étape 1)
4. Clique **Commit changes**.

La page d'accueil et la page Archives se mettent à jour automatiquement,
sans rien toucher d'autre. Compte 1 à 2 minutes pour que GitHub Pages
republie.

## Personnaliser

- Textes de la page d'accueil : `index.html`
- Texte de la page « À propos » : `a-propos.html`
- Couleurs, typographies : `assets/style.css` (tout est regroupé en haut du
  fichier, dans `:root`)
- Lien LinkedIn : dans `index.html`, remplace l'URL du bouton
  « S'abonner sur LinkedIn » par le lien de ton profil.

## Nom de domaine personnel (optionnel, plus tard)

GitHub Pages permet de brancher un nom de domaine que tu achèterais
(`mesetonnements.fr` par exemple) à la place de l'URL en `.github.io`.
Ce n'est pas nécessaire pour démarrer — on peut le faire quand tu veux.
