# Mes étonnements : guide du site

Site statique (HTML, CSS et JavaScript simples, rien à installer) pour archiver et diffuser les numéros PDF de la newsletter.

## Astuce avant de commencer : la langue de GitHub

GitHub s'affiche en anglais. Si Chrome le traduit automatiquement, les boutons portent un nom français qui peut différer légèrement de celui indiqué ici. Deux solutions :

- Clic droit sur la page, puis **Afficher l'original** : les boutons repassent en anglais et correspondent exactement aux noms de ce guide.
- Ou garde la traduction et repère le bouton grâce au tableau ci-dessous (la traduction automatique peut varier un peu, fie-toi aussi à la position du bouton et à sa couleur, souvent vert).

| Anglais (GitHub) | Français probable (Chrome) |
|---|---|
| New repository | Nouveau dépôt |
| Public | Public |
| Create repository | Créer un dépôt |
| uploading an existing file | téléverser un fichier existant |
| Commit changes | Valider les modifications |
| Settings | Paramètres |
| Pages | Pages |
| Build and deployment | Construction et déploiement |
| Deploy from a branch | Déployer à partir d'une branche |
| Branch | Branche |
| Save | Enregistrer |
| Add file | Ajouter un fichier |
| Upload files | Téléverser des fichiers |
| Edit | Modifier (icône en forme de crayon) |

## Mettre le site en ligne (une seule fois)

1. Va sur https://github.com et crée un compte si tu n'en as pas.
2. Clique sur **New repository** (Nouveau dépôt). Nom suggéré : `mes-etonnements`. Coche **Public**. Ne coche rien d'autre. Clique sur **Create repository** (Créer un dépôt).
3. Sur la page du dépôt vide, clique sur le lien **uploading an existing file**.
4. Glisse tous les fichiers du dossier du site dans la zone de dépôt, y compris les dossiers `assets` et `pdfs`. Clique sur **Commit changes** (Valider les modifications).
5. Va dans l'onglet **Settings** (Paramètres) du dépôt, puis dans **Pages** dans le menu de gauche.
6. Sur la page Pages, repère la section **Build and deployment** (Construction et déploiement). Dans **Source**, choisis **Deploy from a branch** (Déployer à partir d'une branche). Juste en dessous, dans **Branch** (Branche), sélectionne `main` dans le premier menu et `/ (root)` dans le second, puis clique sur **Save** (Enregistrer).
7. Attends une à deux minutes. L'adresse de ton site s'affiche en haut de cette même page, sous la forme `https://ton-identifiant.github.io/mes-etonnements/`.

Cette étape n'est à faire qu'une seule fois.

## Ajouter un nouveau numéro (à chaque newsletter)

1. Dans le dépôt GitHub, ouvre le dossier `pdfs`, clique sur **Add file** (Ajouter un fichier), puis **Upload files** (Téléverser des fichiers), et dépose le PDF du numéro. Valide avec **Commit changes** (Valider les modifications).
2. Ouvre le fichier `assets/entries.js` et clique sur le crayon (**Edit**, Modifier).
3. Copie un bloc existant tout en haut de la liste, juste après `const ENTRIES = [`, et modifie :
   - `num` : le numéro du numéro (par exemple 67)
   - `date` : au format `AAAA-MM-JJ`
   - `title` : le titre du numéro
   - `theme` : un des thèmes existants (Société, Climat et nature, Économie, Politique, IA, Entreprise, Intelligence collective, Pensée, Formation, Vœux, Divers)
   - `summary` : deux phrases de présentation
   - `pdf` : `pdfs/nom-du-fichier.pdf`, avec le nom exact du PDF déposé à l'étape 1
   - `debut` : `true` pour le mettre dans « Par où commencer », sinon `false`
4. Clique sur **Commit changes** (Valider les modifications).

La page d'accueil et la page Archives se mettent à jour toutes seules, avec le dernier numéro en vedette. Compte une à deux minutes pour que GitHub republie le site.

## Personnaliser

- Textes de la page d'accueil : `index.html`
- Texte de la page À propos : `a-propos.html`
- Couleurs et typographies : `assets/style.css`, regroupées en haut du fichier
- Lien LinkedIn : dans `index.html`, remplace l'adresse du bouton « S'abonner sur LinkedIn » par celle de ton profil.

## Nom de domaine personnel (optionnel, plus tard)

GitHub Pages permet de brancher un nom de domaine que tu achèterais (par exemple `mesetonnements.fr`) à la place de l'adresse en `.github.io`. Ce n'est pas nécessaire pour démarrer.
