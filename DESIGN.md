# Passerelle — DESIGN.md

Site d'entraînement à la **compréhension** du français pour une germanophone (qui parle aussi anglais).
Interface en allemand, contenu en français. Base scientifique : `docs/recherche.md`.

## Références réelles

1. **Plaques de rue parisiennes** : émail bleu nuit, cadre vert fin, lettres blanches. C'est l'unique audace visuelle du site : chaque mot français « en vedette » s'affiche sur une plaque.
2. **Reclam Universal-Bibliothek** : couverture jaune et texte noir très sobre. Ça donne le jaune, utilisé seulement comme surligneur.
3. **Le Textmarker jaune** des cahiers d'école allemands : les mots transparents sont *surlignés*, comme on le ferait à la main.
4. **Entrée de dictionnaire de poche** (Langenscheidt, Petit Robert) : mot en gras, prononciation, traduction. C'est la forme du feedback.
5. **Carnet Clairefontaine Seyès** : fond papier légèrement chaud.

## Système

- Fond papier `#F6F3EA`, encre `#1C1F26`, encre douce `#5B5F69`.
- Plaque : bleu `#1E3765`, cadre vert `#2F6B50`, lettres `#FFFFFF`.
- Surligneur `#FFE45C` (avec 55 % d'opacité derrière le texte).
- Juste `#2F6B50` (le vert de la plaque), à revoir `#B4462F` (brique). Jamais de rouge vif, jamais de croix seule : toujours une explication.
- Typo : **Literata** pour tout le français (faite pour la lecture longue), **Source Sans 3** pour l'interface allemande. Les chiffres restent dans ces polices, pas de monospace.
- Les rangées de la page d'accueil sont toutes différentes : pas de grille de cartes identiques, pas de badges en capitales, pas de points médians.
- Les cibles tactiles font au moins 48 px. L'appareil visé en premier est le téléphone (375 px).

## Règles anti-Duolingo (non négociables)

- Pas de production : ni clavier ni micro. On répond seulement en touchant l'écran.
- Pas de streak qui retombe à zéro, pas de vies, pas de notifications.
- Les métriques sont réelles : mots reconnus, % compris d'un texte.
- En cas d'erreur, toujours afficher *pourquoi* (par exemple « hier = gestern »).
- On peut quitter à tout moment sans rien perdre : chaque réponse est enregistrée tout de suite.
