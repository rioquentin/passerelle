# Passerelle

Site « anti-Duolingo » pour aider une germanophone (qui parle aussi anglais) à **comprendre** le français.
On n'y écrit et on n'y parle jamais : on répond seulement en touchant l'écran. Il n'y a ni streak ni vies.
L'interface est en allemand. Les fondements sont dans [docs/recherche.md](docs/recherche.md) et la direction visuelle dans [DESIGN.md](DESIGN.md).

## Lancer

```bash
npm install
npm run dev        # http://localhost:5179 (option --host : accessible depuis le téléphone sur le même wifi)
npm run build      # site statique dans dist/
node scripts/check.ts   # vérifie que chaque mot des histoires a une traduction
```

## Contenu

| Module | Fichier de données | Levier (cf. recherche) |
|---|---|---|
| Wörter-Detektiv | `src/data/stories.ts` (`DETEKTIV`) | cognats, confiance |
| Geschichten (6 épisodes, Lena à Toulouse) | `src/data/stories.ts` (`STORIES`) | input compréhensible, narrow reading |
| Kernwörter | `src/data/words.ts` (sections `k`) | noyau des mots-outils + écoute |
| Freund oder Verräter? | `src/data/falsefriends.ts` | faux amis, faux gallicismes |
| Wortmaschine | `src/data/rules.ts` | règles de transformation DE/EN→FR |
| Klangpaare | `src/data/pairs.ts` | perception, plusieurs voix (HVPT) |
| Wann? Ja oder nein? | `src/data/signals.ts` | grammaire réceptive (Processing Instruction) |
| Textometer | lexique + heuristique de suffixes | couverture lexicale |

- **Lexique** : 423 entrées. Format d'une ligne `fr|de|formes|indice`, à l'intérieur de sections `## k|d|e|b`.
- **Progression** : stockée dans le navigateur (`localStorage`), selon une répétition espacée de type Leitner. Un mot compte comme « sûr » à partir de la boîte 2.
- **Audio** : synthèse vocale du navigateur. Les jeux alternent entre toutes les voix françaises de l'appareil.
- **Couverture** : les pourcentages sont calculés vraiment. Ils additionnent les mots transparents et les mots-outils déjà sûrs. Le « potentiel » affiche le score qu'on obtiendrait en maîtrisant tous les mots-outils.

## Personnaliser

Les histoires mettent en scène Lena, Hugo, Madame Roux et le chat Minou. Pour les rendre plus personnelles, on peut renommer les personnages dans `src/data/stories.ts` (ainsi que dans `NAMES`), puis relancer `node scripts/check.ts`.
