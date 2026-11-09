# Comprendre le français vite quand on est germanophone : leviers, données et mini-jeux pour un site « anti-Duolingo »

Pour une germanophone qui parle anglais, le chemin le plus court vers la compréhension passe par quatre leviers. Le premier est le vocabulaire transparent qu'elle possède déjà (cognats allemands, anglais et internationaux, à décoder grâce à des règles de transformation). Le deuxième est un noyau de quelques centaines de mots-outils et de verbes très fréquents. Le troisième est un entraînement spécifique de l'oreille au français parlé, qui est le vrai goulot d'étranglement. Le quatrième est beaucoup de lecture et d'écoute faciles, au plus près du « je comprends presque tout ». La grammaire se limite à une douzaine de signaux à savoir *reconnaître*. Duolingo n'est pas inutile, mais il optimise l'engagement plutôt que la compréhension : il faut garder son feedback immédiat et ses sessions courtes, et inverser tout le reste.

## TL;DR

- **Le plus rentable n'est pas d'« apprendre des mots » au hasard.** Il faut activer ce qu'elle sait déjà (cognats, règles -ität→-ité, -ieren→-er, etc.), installer les quelque 300 mots les plus fréquents (mots-outils, pronoms, négation, connecteurs, verbes de base), puis entraîner l'oreille à découper le flux sonore français. Une étude de Lange & Matthews (2020), menée sur des apprenants d'anglais, montre que la segmentation de la parole prédit mieux la compréhension orale que la seule connaissance du vocabulaire à l'oral.
- **Les seuils de couverture lexicale sont exigeants**, d'après les travaux de Nation, Laufer et Schmitt : environ 95 % des mots connus pour une compréhension minimale, 98 % pour une lecture autonome confortable, soit plusieurs milliers de familles de mots. Il faut donc des textes *adaptés à son niveau* (à 98 % connus) dès le début, et pas des textes authentiques bruts. Ses cognats lui font gagner beaucoup de terrain à l'écrit, nettement moins à l'oral.
- **Le site doit être l'inverse de Duolingo sur les points qui comptent.** Que de la reconnaissance, jamais de production. De l'input réel (phrases et mini-textes avec audio de plusieurs voix) au lieu de traduction de phrases isolées. Aucune streak punitive. Une mesure de progrès honnête : « tu comprends X % de ce texte ». Il faut garder le feedback instantané, les sessions de 2 à 5 minutes et la répétition espacée cachée dans le jeu.

## Key Findings

### 1. Ce qui est bien démontré, débattu, ou relève du marketing

| Affirmation | Statut | Ce qu'il faut en retenir pour le site |
|---|---|---|
| La compréhension dépend fortement du % de mots connus dans le texte | **Bien démontré** (Hu & Nation 2000 ; Laufer & Ravenhorst-Kalovski 2010 ; Schmitt, Jiang & Grabe 2011) | Mesurer et afficher la couverture ; choisir les textes en fonction | [ed](https://files.eric.ed.gov/fulltext/EJ1316858.pdf) [hawaii](https://scholarspace.manoa.hawaii.edu/server/api/core/bitstreams/b9432fbc-3873-41fd-95a7-5363f711cc09/content)
| Il existe un « seuil » magique à 95 % ou 98 % | **Débattu** : Schmitt et al. (2011) trouvent une relation à peu près linéaire, sans seuil net | Présenter la progression comme une courbe continue, pas comme un mur | [lextutor](https://www.lextutor.ca/cover/papers/schmitt_etal_2011.pdf)
| Il faut de nombreuses rencontres pour retenir un mot de façon incidente | **Bien démontré, chiffre exact incertain** : de 6 à plus de 20 selon les études (méta-analyse Uchihara, Webb & Yanagisawa 2019) | Recycler chaque mot cible au moins une dizaine de fois, dans des contextes variés | [semanticscholar](https://www.semanticscholar.org/paper/The-Effects-of-Repetition-on-Incidental-Vocabulary-Uchihara-Webb/2e6da523facae1bcc05a58b404af52ed1c7a618c) [wordpress](https://adaptivelearninginelt.wordpress.com/2019/09/23/how-often-do-you-need-to-encounter-a-word-before-you-learn-it/)
| L'entraînement perceptif à forte variabilité (HVPT) améliore la perception | **Bien démontré** (méta-analyses Sakai & Moorman 2018 ; Uchihara et al. 2025) | Toujours plusieurs voix ; jeux de discrimination courts | [cambridge](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/6ABB8C1F32D88D53EA8D05A4565E76F6/S0272263125100879a.pdf/high_variability_phonetic_training_hvpt_a_metaanalysis_of_l2_perceptual_training_studies.pdf) [researchgate](https://www.researchgate.net/publication/320715653_Can_perception_training_improve_the_production_of_second_language_phonemes_A_meta-analytic_review_of_25_years_of_perception_training_research)
| L'enseignement de la grammaire par l'input structuré (Processing Instruction) marche pour la compréhension | **Assez bien démontré** (méta-analyse Shintani 2015, 42 expériences) | Grammaire = jeux d'interprétation, pas d'explications ni d'exercices de production | [researchgate](https://www.researchgate.net/publication/236032459_The_effectiveness_of_processing_instruction_on_L2_grammar_acquisition_A_meta-analysis) [academia](https://www.academia.edu/7266237/The_effectiveness_of_processing_instruction_on_L2_grammar_acquisition_A_meta_analysis)
| Les cognats facilitent la reconnaissance des mots et l'apprentissage | **Bien démontré**, mais dépend du niveau dans la L3 (Otwinowska 2024) [sagepub](https://journals.sagepub.com/doi/10.1177/02676583231176371) | Exploiter massivement les cognats, en entraînant aussi la reconnaissance *orale* |
| « Seul l'input compréhensible compte » (Krashen) | **Débattu** : utile comme principe, mais la théorie est critiquée comme peu testable et incomplète [academia](https://www.academia.edu/27939381/A_Critical_Review_of_Krashens_Input_Hypothesis_Three_Major_Arguments) [slideshare](https://www.slideshare.net/EricaThompson47/a-critical-review-of-krashen-s-input-hypothesis-three-major-argumentspdf) | Beaucoup d'input facile, *plus* une attention dirigée (jeux de repérage) |
| La gamification améliore l'apprentissage | **Effet positif moyen, mais fragile** : forte hétérogénéité et biais de publication probable [repec](https://ideas.repec.org/a/gam/jsusta/v15y2023i14p11325-d1198713.html) [mdpi](https://www.mdpi.com/2071-1050/15/14/11325) | Gamifier la mécanique d'apprentissage, pas l'emballage | [researchgate](https://www.researchgate.net/publication/372563923_Effects_of_Gamification_on_Students'_English_Language_Proficiency_A_Meta-Analysis_on_Research_in_South_Korea)
| Diglot weave / « sandwich » | **Prometteur, preuves faibles** (petites études, souvent non contrôlées rigoureusement) [scribd](https://www.scribd.com/document/168792379/The-Effect-of-Teaching-Vocabulary-through-the-Diglot-Weave-Technique-and-Attitude-towards-This-Technique) [semanticscholar](https://www.semanticscholar.org/paper/The-Effect-of-Teaching-Vocabulary-through-the-%E2%80%93-and-Nemati-Maleki/bd6f5c54fbd88223e4873365fe8c5320351d83a3) | À utiliser comme mode ludique, sans promesse chiffrée |
| « Duolingo ne marche pas » | **Faux tel quel.** Il produit des gains réceptifs mesurables, mais les études favorables sont surtout internes | Critiquer la conception, pas nier tout effet | [wiley](https://onlinelibrary.wiley.com/doi/full/10.1111/flan.12600)

### 2. Classement des leviers par rapport impact/effort pour ce profil

| Rang | Levier | Impact sur la compréhension | Effort | Pourquoi pour elle spécifiquement |
|---|---|---|---|---|
| 1 | **Cognats + règles de transformation DE/EN→FR** | Très élevé à l'écrit, moyen à l'oral | Très faible | Allemand + anglais = des milliers de mots « gratuits » |
| 2 | **Noyau de mots-outils (~150-300)** : articles, pronoms, prépositions, négation, connecteurs, interrogatifs, marqueurs de temps | Très élevé | Faible | Non transparents, ultra-fréquents, ce sont eux qui rendent une phrase opaque |
| 3 | **Correspondances graphie↔son** (lettres muettes, nasales, ou/u/eu, oi, liaisons) | Très élevé à l'oral | Faible à moyen | Permet de reconnaître à l'oreille un mot qu'elle « connaît » déjà à l'écrit ; avantage ü/ö |
| 4 | **Segmentation de la parole** (où finit un mot ?) | Très élevé à l'oral | Moyen | Principal obstacle du français parlé |
| 5 | **Grammaire réceptive minimale** (~12 signaux) | Élevé | Faible | Beaucoup de structures analogues à l'allemand |
| 6 | **Verbes fréquents et leurs formes courantes** (être, avoir, aller, faire, dire, pouvoir, vouloir, savoir, voir, venir, prendre…) | Élevé | Moyen | Formes irrégulières non transparentes (*va, fait, peut, veut, sais*) |
| 7 | **Lecture/écoute extensive facile** (≥ 95-98 % connu) | Élevé sur la durée | Variable, agréable | Consolide tout, apprentissage incident |
| 8 | **Inférence par le contexte, gist** | Moyen | Faible | Stratégie qu'elle maîtrise déjà en L1/L2, à réactiver |
| 9 | **Chunks fréquents** (*il y a, c'est, qu'est-ce que, est-ce que, je sais pas, ça va*) | Moyen à élevé à l'oral | Faible | Reconnus en bloc, ils accélèrent la segmentation |
| 10 | Vocabulaire thématique de moyenne fréquence | Moyen | Élevé | À laisser venir par la lecture plus tard |

## Details

### 3. Vocabulaire : combien de mots, lesquels, quelles listes

**Couverture et compréhension.**
- Pour l'anglais, Nation (2006) estime qu'il faut 8 000 à 9 000 familles de mots pour couvrir 98 % de l'écrit (romans, journaux) et 6 000 à 7 000 pour 98 % de l'oral. Environ 3 000 familles plus les noms propres suffisent pour dépasser 95 %. [hawaii](https://scholarspace.manoa.hawaii.edu/server/api/core/bitstreams/b9432fbc-3873-41fd-95a7-5363f711cc09/content) [scienceguide](https://www.scienceguide.nl/wp-content/uploads/2017/11/nation-2006-vocabulary.pdf)
- Hu & Nation (2000) concluent qu'il faut 98 % de couverture (un mot inconnu sur 50) pour que la plupart des lecteurs comprennent sans aide. À 95 % (un mot inconnu sur 20), une minorité seulement y arrive. [lextutor](https://www.lextutor.ca/cover/papers/schmitt_etal_2011.pdf) [scienceguide](https://www.scienceguide.nl/wp-content/uploads/2017/11/nation-2006-vocabulary.pdf)
- Laufer & Ravenhorst-Kalovski (2010) retiennent 95 % (environ 4 000 familles) pour une compréhension minimale avec aides, et 98 % (environ 8 000 familles) pour une lecture autonome. [wiley](https://onlinelibrary.wiley.com/doi/full/10.1111/modl.70021) [ed](https://files.eric.ed.gov/fulltext/EJ1316858.pdf)
- Schmitt et al. (2011) nuancent ces seuils. Ils observent une relation plutôt linéaire entre couverture et compréhension, et même à 98-100 % de couverture les scores de compréhension tournent autour de 68 à 75 %. [lextutor](https://www.lextutor.ca/cover/papers/schmitt_etal_2011.pdf) Connaître les mots ne suffit donc pas, et l'absence de seuil net signifie que *chaque mot fréquent gagné rapporte*.

**Données spécifiques au français.**
- Cobb (2026, *Modern Language Journal*) a construit une liste de 3 000 familles de mots pour le français (LFNF). Elle donne 96 à 98 % de couverture selon les types de textes, dont 98,3 % sur un corpus de parole parisienne. [wiley](https://onlinelibrary.wiley.com/doi/full/10.1111/modl.70021)
- Parmi les listes testées, celle de Lonsdale & Le Bras offre la meilleure couverture moyenne : 92,78 %. [wiley](https://onlinelibrary.wiley.com/doi/10.1111/modl.70021)
- Des histoires de niveau A2 atteignent 90 % de couverture avec seulement les 512 premières familles. [wiley](https://onlinelibrary.wiley.com/doi/10.1111/modl.70021) C'est l'argument le plus concret pour un objectif de palier initial autour de 500 familles.
- Une analyse non académique (blog Gallus French, sous-titres et livres) trouve que les 1 000 mots les plus fréquents couvrent 88,4 % du français parlé et 81,5 % de l'écrit. Il faudrait environ 6 400 mots pour 98 % de l'oral filmé et environ 11 300 pour 98 % des livres. [gallus-french](https://gallus-french.com/blog/how-many-french-words) Ces chiffres sont plausibles et cohérents avec la littérature, mais à traiter comme indicatifs : la méthode n'est pas évaluée par des pairs, et elle compte des lemmes, pas des familles.

**Conclusion pratique.** L'oral courant est lexicalement *plus facile* que l'écrit, mais *phonétiquement plus difficile*. Pour elle, les cognats inversent en partie ce rapport : beaucoup de mots longs et rares de l'écrit (*gouvernement, situation, important, problème*) lui sont transparents.

**Listes de fréquence exploitables.**

| Source | Contenu | Licence / réutilisation |
|---|---|---|
| **Lexique 3.83** (New & Pallier) | ~140 000 mots, fréquences livres et sous-titres de films (corpus de ~50 M de mots tirés de 9 474 films/séries), phonétique, lemmes, syllabation | **Licence à vérifier.** Le site lexique.org indique CC BY-NC (pas d'usage commercial) ; le dépôt Openlexicon affiche CC BY-SA 4.0. [github +2](https://github.com/chrplr/openlexicon/blob/master/datasets-info/Lexique383/README-Lexique.md) Pour un site gratuit et personnel, les deux conviennent avec attribution ; pour un usage commercial, demander aux auteurs. |
| **Fréquences « films » de Lexique** | Meilleur proxy de l'oral (dialogues) | Idem | [researchgate](https://www.researchgate.net/publication/287661689_Lexique_3_Une_nouvelle_base_de_donnees_lexicales)
| **Gougenheim / Français fondamental** (dans Openlexicon) | 1 064 mots avec leur fréquence, issus d'un corpus *oral* des années 1950 | Lexique historique, daté mais centré sur l'oral de base | [openlexicon](http://openlexicon.fr/datasets-info/)
| **Lonsdale & Le Bras, *A Frequency Dictionary of French*** (Routledge, 2009) | 5 000 mots, corpus de 23 M de mots, moitié oral, moitié écrit | **Sous droits d'auteur** : à consulter pour vérifier, pas à copier dans le site | [emerald](https://www.emerald.com/rr/article/23/8/33/369843/A-Frequency-Dictionary-of-French-Core-Vocabulary) [routledge](https://www.routledge.com/A-Frequency-Dictionary-of-French-Core-Vocabulary-for-Learners/LeBras/p/book/9780415775311)
| **LFNF (Cobb 2026)** | 3 000 familles « nucléaires » | Article académique ; vérifier la disponibilité de la liste | [wiley](https://onlinelibrary.wiley.com/doi/full/10.1111/modl.70021)
| **Wiktionary** | Définitions, traductions DE/EN, prononciations, étymologies | CC BY-SA 4.0 + GFDL (partage à l'identique) | [wiktionary](https://en.wiktionary.org/wiki/Wiktionary:Copyrights)
| **Tatoeba** | Phrases traduites FR-DE-EN | Texte CC BY 2.0 FR (une partie en CC0) ; audio : licence propre à chaque contributeur | [Wikipedia](https://en.wikipedia.org/wiki/Tatoeba)

**Recommandation.** Générer la liste de base à partir des fréquences « films » de Lexique, croisées avec les fréquences « livres ». La lemmatiser, regrouper les familles, puis annoter chaque mot avec : (a) transparent pour une germanophone ? (b) transparent via l'anglais ? (c) faux ami ? Cette annotation (le « coefficient de transparence ») est le cœur de la valeur ajoutée du site.

**Le noyau à installer en premier (non transparent, ultra-fréquent).**
- **Articles et déterminants :** le, la, les, l', un, une, des, du, de la, ce/cette/ces, mon/ton/son…
- **Pronoms :** je, tu, il, elle, on, nous, vous, ils, elles ; me, te, se, le, la, lui, leur, y, en ; qui, que, ça/cela, ce.
- **Prépositions :** à, de, dans, en, sur, sous, avec, sans, pour, par, chez, entre, vers, après, avant, depuis, pendant.
- **Négation :** ne… pas, pas seul, ne… plus, ne… jamais, ne… rien, ne… personne, ne… que.
- **Connecteurs :** et, ou, mais, donc, alors, parce que, car, si, quand, comme, pourtant, aussi, puis, enfin.
- **Interrogatifs :** qui, quoi, que, où, quand, comment, pourquoi, combien, quel/quelle, est-ce que, qu'est-ce que.
- **Temps :** aujourd'hui, hier, demain, maintenant, déjà, encore, toujours, jamais, souvent, bientôt, tout de suite.
- **Quantité et degré :** très, trop, beaucoup, peu, plus, moins, tout, rien, assez.
- **Verbes clés :** être, avoir, aller, faire, dire, pouvoir, vouloir, savoir, voir, venir, prendre, devoir, falloir (il faut), mettre, parler, donner, trouver, croire, penser, passer.

### 4. Ponts allemand → français et anglais → français

**4.1 Combien de français connaît-elle déjà ?**
- Les emprunts au français forment le deuxième grand groupe de mots d'emprunt en allemand, après le latin. [Wikipedia](https://de.wikipedia.org/wiki/Gallizismus) Selon la Gesellschaft für deutsche Sprache, citée de seconde main, on compte environ 2 400 gallicismes en usage. [quillbot](https://quillbot.com/de/blog/woerter-finden/franzoesische-woerter-im-deutschen/) Un lexique en ligne en recense 2 628. [sprachnudel](https://www.sprachnudel.de/etymologie/lehnwoerter/gallizismus)
- En anglais, l'étude de Finkenstaedt & Wolff (1973), sur environ 80 000 mots du *Shorter Oxford Dictionary*, attribue 28,3 % du lexique au français et 28,24 % au latin. [wordreference](https://forum.wordreference.com/threads/english-words-having-their-origin-in-french.244408/) [Wikipedia](https://en.wikipedia.org/wiki/Foreign-language_influences_in_English) **Attention :** ce chiffre porte sur un dictionnaire, pas sur la langue courante. Les 1 000 mots anglais les plus fréquents sont majoritairement d'origine germanique [Wikipedia](https://en.wikipedia.org/wiki/Foreign-language_influences_in_English) ; le vocabulaire d'origine française domine dans les registres plus soutenus.

**Conséquence clé.** Les cognats aident surtout pour les mots de moyenne et basse fréquence, qui sont justement ceux qui manquent pour passer de 90 % à 98 % de couverture. Ils aident peu pour les mots-outils, qu'il faut apprendre. C'est pourquoi les leviers 1 et 2 sont complémentaires.

**Gallicismes allemands vérifiés (même sens en français) :**
- Restaurant → *restaurant* ; Portemonnaie → *porte-monnaie* ; Trottoir → *trottoir* ; Etage → *étage* ; Parfüm → *parfum* ; Garage → *garage* ; Niveau → *niveau*.
- Balkon → *balcon* ; Büro → *bureau* ; Adresse → *adresse* ; Abonnement → *abonnement* ; Bonbon → *bonbon* ; Boulevard → *boulevard*. [frag-mutti +2](https://www.frag-mutti.de/gallizismen-franzoesische-woerter-im-deutschen-funfriday-a56719/)
- Chauffeur → *chauffeur* ; Garderobe → *garde-robe* ; Kiosk → *kiosque* ; Onkel → *oncle* ; Tante → *tante* ; Toilette → *toilette(s)*. [sprachnudel](https://www.sprachnudel.de/etymologie/lehnwoerter/gallizismus) [muni](https://is.muni.cz/th/svw7c/Gallizismen_und_deren_Nutzung_im_Unterricht.pdf)
- Terrasse → *terrasse* ; Tasse → *tasse* ; Route → *route* ; Routine → *routine* ; Ruine → *ruine* ; Charme → *charme* ; Balance → *balance* (sens partiel). [classicistranieri](https://www.classicistranieri.com/de/articles/l/i/s/Liste_von_Gallizismen_1220.html) [dieschreibschneiderei](https://dieschreibschneiderei.de/gallizismen/)
- Chance → *chance* : en français, le mot veut dire à la fois *Glück* et *Gelegenheit*, donc la correspondance n'est que partielle.

**Pièges dans les exemples courants : les « Scheingallizismen ».** Certains mots ont l'air français mais n'existent pas, ou pas avec ce sens, en français. Ils ne sont donc PAS des ponts :
- **Friseur** : en français on dit *coiffeur* ; *friser* veut dire « boucler ». [quillbot](https://quillbot.com/de/blog/woerter-finden/franzoesische-woerter-im-deutschen/)
- **Blamage** : n'existe pas en français ; on dit *honte* ou *ridicule*. *Blâmer* veut dire « reprocher ». [dardel](http://dardel.info/Sprache/FauxAmisDE.html)
- **Gardine**, **Staffage** et **Takelage** sont aussi des formations allemandes. [Wikipedia](https://de.wikipedia.org/wiki/Gallizismus)
- **Jour fixe** n'est pas utilisé en ce sens en France. [quillbot](https://quillbot.com/de/blog/woerter-finden/franzoesische-woerter-im-deutschen/)

C'est un excellent contenu de jeu (« vrai français ou faux français ? »).

**4.2 Règles de transformation systématiques (à transformer en jeu)**

| Allemand | Anglais | Français | Exemples vérifiés |
|---|---|---|---|
| -tion | -tion | -tion | Nation/nation, Information/information, Situation/situation |
| -ität | -ity | **-ité** | Universität/université, Qualität/qualité, Realität/réalité |
| -ieren | -ate/-ize/-∅ | **-er** | reservieren/réserver, akzeptieren/accepter, organisieren/organiser, telefonieren/téléphoner |
| -ie | -y | -ie | Biologie/biologie, Energie/énergie, Geografie/géographie |
| -ismus | -ism | **-isme** | Tourismus/tourisme, Optimismus/optimisme |
| -ell | -al | **-el/-elle** | offiziell/officiel, kulturell/culturel, traditionell/traditionnel |
| -ik | -ic(s) | **-ique** | Musik/musique, Politik/politique, Technik/technique, Republik/république |
| -iv | -ive | **-if/-ive** | aktiv/actif, positiv/positif, kreativ/créatif |
| -ur | -ure | -ure | Kultur/culture, Natur/nature, Temperatur/température |
| -enz / -anz | -ence / -ance | **-ence / -ance** | Konferenz/conférence, Intelligenz/intelligence, Distanz/distance, Toleranz/tolérance |
| -ent / -ant | -ent / -ant | -ent / -ant | Präsident/président, elegant/élégant, interessant/intéressant |
| — | -ly | **-ment** | exactly/exactement, rapidly/rapidement |
| — | -ous | **-eux** | curious/curieux, dangerous/dangereux |

Règles « cachées », typiques des tamis EuroCom :
- **Accent circonflexe = s disparu** : forêt/forest, hôpital/hospital, fête/Fest/feast, île/isle.
- **é- initial = s- / es-** : école/school/Schule, étudiant/student, état/state, étrange/strange, épice/spice.

**4.3 Faux amis vérifiés, classés par danger pour la *compréhension***

*Allemand → français* :

| Le mot français… | …ressemble à l'allemand | …mais veut dire |
|---|---|---|
| **hier** | hier (= ici) | **gestern** — le plus dangereux, car ultra-fréquent [aufutur](https://aufutur.fr/revisions/langues-vivantes/allemand/les-principaux-faux-amis-entre-l-allemand-et-le-francais/) [dardel](http://dardel.info/Sprache/FauxAmisDE.html) |
| clavier | Klavier | Tastatur (piano = *piano*) [reclam](https://www.reclam.de/data/media/978-3-15-019778-3.pdf) [dardel](http://dardel.info/Sprache/FauxAmisDE.html) |
| figure | Figur | Gesicht (aussi « figure » au sens abstrait) [reclam](https://www.reclam.de/data/media/978-3-15-019778-3.pdf) |
| baiser | Baiser (meringue) | Kuss, et comme verbe un sens vulgaire en registre familier [comprenders +2](https://comprenders.com/fr/lang/allemand/internet/quels-sont-les-faux-amis-les-plus-courants-entre-le-francais-et-l-allemand/) |
| art | Art (manière) | Kunst [comprenders](https://comprenders.com/fr/lang/allemand/internet/quels-sont-les-faux-amis-les-plus-courants-entre-le-francais-et-l-allemand/) [dardel](http://dardel.info/Sprache/FauxAmisDE.html) |
| brave | brav (sage) | mutig, tapfer [aufutur](https://aufutur.fr/revisions/langues-vivantes/allemand/les-principaux-faux-amis-entre-l-allemand-et-le-francais/) [paperblog](https://www.paperblog.fr/8336540/l-allemand-pour-les-nuls-liste-de-faux-amis-franco-allemands/) |
| gymnase | Gymnasium | Turnhalle (lycée = *lycée*) [dardel](http://dardel.info/Sprache/FauxAmisDE.html) |
| dose | Dose (boîte) | Dosis [dardel](http://dardel.info/Sprache/FauxAmisDE.html) |
| état / État | Etat (budget) | Zustand / Staat [dardel](http://dardel.info/Sprache/FauxAmisDE.html) |
| folie | Folie (film plastique) | Wahnsinn [dardel](http://dardel.info/Sprache/FauxAmisDE.html) |
| jalousie | Jalousie (store) | Eifersucht [dardel](http://dardel.info/Sprache/FauxAmisDE.html) |
| compas | Kompass | Zirkel (boussole = *boussole*) [dardel](http://dardel.info/Sprache/FauxAmisDE.html) |
| délicatesse | Delikatesse (mets fin) | Zartgefühl, Takt [castel-franc](http://www.castel-franc.com/blog/faux-amis-falsche-freunde) [dardel](http://dardel.info/Sprache/FauxAmisDE.html) |
| veste | Weste (gilet) | Jacke, Sakko [paperblog](https://www.paperblog.fr/8336540/l-allemand-pour-les-nuls-liste-de-faux-amis-franco-allemands/) [castel-franc](http://www.castel-franc.com/blog/faux-amis-falsche-freunde) |
| pile | Pille | Batterie (pilule = *pilule*) [castel-franc](http://www.castel-franc.com/blog/faux-amis-falsche-freunde) |
| rat | Rat (conseil) | Ratte [aufutur](https://aufutur.fr/revisions/langues-vivantes/allemand/les-principaux-faux-amis-entre-l-allemand-et-le-francais/) [castel-franc](http://www.castel-franc.com/blog/faux-amis-falsche-freunde) |
| bureau | Büro | bureau = pièce ET meuble (faux ami partiel) [comprenders](https://comprenders.com/fr/lang/allemand/internet/quels-sont-les-faux-amis-les-plus-courants-entre-le-francais-et-l-allemand/) [paperblog](https://www.paperblog.fr/8336540/l-allemand-pour-les-nuls-liste-de-faux-amis-franco-allemands/) |
| chance | Chance | Glück + Gelegenheit (partiel) |

*Anglais → français*, à couvrir aussi puisqu'elle lit avec ses deux langues :

| Français | Ressemble à | Veut dire |
|---|---|---|
| actuellement | actually | currently / derzeit |
| éventuellement | eventually | possibly / eventuell (là, l'allemand aide !) |
| attendre | attend | wait / warten |
| assister à | assist | attend / teilnehmen |
| librairie | library | bookshop / Buchhandlung |
| sensible | sensible | sensitive / empfindlich |
| location | location | rental / Miete |
| blesser | bless | injure / verletzen |
| coin | coin | corner / Ecke |
| demander | demand | ask / fragen |

À noter : sur *éventuellement*, l'allemand *eventuell* corrige le faux ami anglais. Le jeu doit montrer que l'une de ses deux langues sauve souvent l'autre.

**4.4 Similarités grammaticales exploitables (« tu sais déjà ça »)**
- **Passé composé ≈ Perfekt** : même structure auxiliaire + participe (*ich habe gegessen* / *j'ai mangé*). Les verbes de mouvement et de changement d'état prennent *être* comme ils prennent *sein* (*ich bin gekommen* / *je suis venu*). Le passé composé est aussi, comme le Perfekt, le passé normal de l'oral.
- **on ≈ man** : à l'oral, *on* veut très souvent dire *nous* (*on y va* = « wir gehen »). C'est à signaler explicitement.
- **il y a ≈ es gibt**, mais **il y a + durée = vor** (*il y a deux ans* = « vor zwei Jahren »). C'est un piège de compréhension.
- **tu/vous ≈ du/Sie** : même logique de politesse ; *vous* sert aussi de pluriel (= ihr).
- **Verbes pronominaux ≈ sich** : *se laver* / *sich waschen*, *s'appeler* / *sich nennen* (heißen).
- **Genre grammatical** : elle a l'habitude. Pour comprendre, le genre est presque toujours ignorable.
- **Négation en deux temps** : *ne… pas* encadre le verbe, alors que *nicht* le suit ou est placé en fin de proposition. À l'oral, *ne* disparaît massivement. Coveney (1996) observe un taux moyen d'omission de 81,2 % dans un corpus picard. [researchgate](https://www.researchgate.net/publication/232006108_Maitriser_la_norme_sociolinguistique_en_interlangue_francaise_le_cas_de_l'omission_variable_de_'ne') Ashby trouve une rétention de *ne* passée de 37 % (Tours, 1976) à 18 % (Tours, 1995). [researchgate](https://www.researchgate.net/publication/231882137_The_Emergence_of_Emphatic_'ne'_in_Conversational_Swiss_French) **Le signal fiable de la négation à l'oral est donc *pas* (ou *plus, jamais, rien*), pas *ne*.**
- **ne… que = nur** : piège majeur. La phrase a l'air négative mais ne l'est pas (*je n'ai que deux euros* = « ich habe nur zwei Euro »).
- **Futur proche ≈ structure transparente** : *je vais manger* = aller + infinitif. Le jeu doit distinguer *je vais à Paris* (mouvement) de *je vais partir* (futur).

**4.5 Différences qui piègent une germanophone (en compréhension)**
- **Pronoms objets avant le verbe** : *je le vois* (ich sehe ihn), *je lui ai dit* (ich habe ihm gesagt). Il faut savoir que *le/la/les* devant un verbe ne sont pas des articles.
- **Adjectif généralement après le nom** : *une voiture rouge*.
- **Pas de cas marqués** : le rôle est donné par l'ordre des mots et les prépositions *de/à*. *De* est polyvalent (possession, origine, partitif *du/de la/des*, après négation *pas de*). Pour la compréhension, apprendre à « sauter » *de* est souvent suffisant.
- **Ordre des mots** : sujet-verbe-objet, sans verbe en fin de subordonnée. C'est plutôt plus simple pour elle.
- **Questions** : intonation seule à l'oral (*tu viens ?*), *est-ce que*, inversion à l'écrit (*viens-tu ?*).

**4.6 Phonétique : ses atouts et ses pièges**
- **Atout majeur, les voyelles arrondies antérieures** : le *u* français [y] est le *ü* allemand (*tu* se prononce presque « tü »), *eu* [ø/œ] est le *ö*, et *ou* [u] est le *u* allemand. C'est un avantage sur les anglophones, à exploiter avec une règle visuelle : « u écrit = ü ; ou écrit = u ».
- **Correspondances graphie-son à automatiser** : *ch* = [ʃ] (« sch ») ; *j/ge* = [ʒ] ; *oi* = [wa] ; *eau/au* = [o] ; *ai* = [ɛ] ; *gn* = [ɲ] ; *qu* = [k]. Le *h* est muet. Les consonnes finales sont généralement muettes (*petit, grand, vous, est*), le *-ent* verbal aussi (*ils parlent* = [il paʁl]). Le *e* final est muet.
- **Nasales** (*an/en, on, in/un*) : absentes de l'allemand ; elles « effacent » le *n* écrit.
- **Liaison et enchaînement** : *les élèves* se dit [le.ze.lɛv], ce qui peut faire entendre un mot fantôme *zélève*. [researchgate](https://www.researchgate.net/publication/30460622_La_Resolution_de_la_liaison_par_des_locuteurs_natifs_et_non-natifs) Les études montrent que les apprenants L2 ont plus de mal que les natifs à compenser ce décalage entre syllabes et mots, surtout dans le bruit. [researchgate](https://www.researchgate.net/publication/310834973_French_Speech_Segmentation_in_Liaison_Contexts_by_L1_and_L2_Listeners) [researchgate](https://www.researchgate.net/publication/263160924_Convergence_and_divergence_in_the_acquisition_of_French_liaison_by_native_and_non-native_speakers_A_review_of_existing_data_and_avenues_for_future_research)
- **Élisions** : *l'ami, j'ai, c'est, qu'il, je sais pas* → [ʃepa]. La chute du *e* (*je ne sais pas* → [ʃpa]) est fréquente à l'oral.
- **Homophones massifs** : *vert/verre/vers/ver*, *est/et/ai*, *ses/ces/c'est/sait*, *parle/parles/parlent*. Le contexte est indispensable, ce qui justifie l'entraînement à l'inférence.

### 5. Comprendre l'oral : le vrai goulot d'étranglement

- Lange & Matthews (2020, *Studies in Second Language Learning and Teaching*) ont étudié 130 apprenants japonais d'anglais, et non des apprenants de français. Pour les deux tests d'écoute, la capacité à segmenter la parole en mots était le prédicteur le plus fort, la connaissance du vocabulaire à l'oral le plus faible ; à elles deux, elles expliquaient 34 % et 38 % de la variance. Les meilleurs auditeurs savaient aussi découper des groupes de trois mots très fréquents dans la parole enchaînée. Chez 157 apprenants de français, Vandergrift & Baker (2015) trouvent en revanche que le vocabulaire est le meilleur corrélat (r = 0,51) : les deux comptent. **Implication directe : il faut entraîner le découpage des mots-outils et des chunks fréquents à l'oreille, pas seulement apprendre plus de mots.**
- **HVPT.** La méta-analyse de Sakai & Moorman (2018) sur 25 ans d'entraînement perceptif trouve des gains moyens à grands en perception (d = 0,92). La durée moyenne d'entraînement était de 4,79 heures. [researchgate](https://www.researchgate.net/publication/363664831_A_Web-Based_High_Variability_Phonetic_Training_Application_for_French_Vowels) [researchgate](https://www.researchgate.net/publication/320715653_Can_perception_training_improve_the_production_of_second_language_phonemes_A_meta-analytic_review_of_25_years_of_perception_training_research) La méta-analyse de Uchihara, Karas & Thomson (2025, *Studies in Second Language Acquisition*), centrée sur la HVPT et portant sur 79 études, confirme un effet moyen à grand sur la perception L2 (g = 0,92 avant/après ; g = 0,67 face à un groupe contrôle), plus fort avec davantage de locuteurs et de temps d'entraînement. La variabilité des locuteurs est l'ingrédient qui permet de généraliser à de nouvelles voix. **Le site doit donc présenter chaque élément audio avec plusieurs voix (homme, femme, âges, accents standards).**
- **Paires à entraîner pour elle** : [y]/[u] (*tu/tout, dessus/dessous*), nasales (*an/on/in* : *vent/vont/vin*), [e]/[ɛ]/[ə] (*les/lait/le*), présence ou absence de liaison, et singulier/pluriel à l'oreille (*le/les* est souvent la seule marque du pluriel à l'oral).
- **Dictée, en version reconnaissance** : la dictée classique impose d'écrire, ce que le cahier des charges exclut. On la remplace par « entends → choisis parmi 3 transcriptions » ou « entends → touche les mots dans l'ordre ». Cela garde le bénéfice (attention à la forme sonore) sans la production.
- **Vitesse** : commencer à vitesse ralentie (0,75×) mais naturelle, avec plusieurs voix. Passer vite à la vitesse normale sur des phrases déjà comprises à l'écrit. L'écoute répétée d'un même texte (narrow listening) est l'outil le plus efficace pour passer du « je le lis » au « je l'entends ». Le **shadowing** n'est pas nécessaire puisqu'il s'agit de production ; il est à omettre.
- **Contenus** : phrases Tatoeba avec audio sous licence libre, puis mini-dialogues écrits pour le site et lus en synthèse vocale multi-voix. Ensuite, de l'oral réel facile : vidéos pour apprenants, podcasts lents.

### 6. Input compréhensible, lecture/écoute extensive, inférence

- **Krashen** : la thèse selon laquelle on acquiert la langue en comprenant des messages reste le meilleur principe directeur pour un objectif *de compréhension*. Mais la théorie est critiquée sur trois points : la notion d'« input compréhensible » et le « i+1 » ne sont pas définis précisément, donc difficilement testables (McLaughlin 1987) ; l'input compréhensible est nécessaire mais pas suffisant (Ellis) ; enfin « compréhensible » ne veut pas dire « simplifié ». [medium +2](https://rezaul-karim.medium.com/a-critique-on-krashens-input-hypothesis-57acad72ac50) **Position à retenir :** beaucoup d'input facile, *plus* une attention dirigée vers les formes utiles (repérage, Processing Instruction).
- **Lectures graduées / narrow reading** : on vise des textes avec 95 à 98 % de mots connus, en comptant les cognats transparents comme « connus ». « Narrow » veut dire le même thème ou les mêmes personnages sur plusieurs textes, ce qui recycle automatiquement le vocabulaire.
- **Inférence par le contexte** : elle fonctionne mal sous 95 % de couverture. C'est une raison de plus d'utiliser des textes calibrés. Elle s'entraîne bien en jeu : un mot masqué, trois sens possibles.
- **Approches centrées sur la compréhension** (Natural Approach, TPR, Automatic Language Growth, Assimil « phase passive ») : toutes reposent sur l'écoute et la lecture avant la production. Leur logique est cohérente avec l'objectif, mais les preuves comparatives rigoureuses sont limitées. On peut s'en inspirer (priorité à l'écoute, pas de production forcée) sans en reprendre les promesses.
- **Intercompréhension / EuroComRom** : la méthode des « sept tamis » de Klein & Stegmann (2000), au sous-titre explicite « Romanische Sprachen sofort lesen können », cible la *compréhension écrite*. Les sept tamis sont : vocabulaire international, vocabulaire panroman, correspondances phonétiques, graphies et prononciations, structures syntaxiques panromanes, éléments morphosyntaxiques, préfixes et suffixes. [fachportal-paedagogik](https://www.fachportal-paedagogik.de/literatur/vollanzeige.html?FId=2646272) [uni-saarland](https://www.eurocom.uni-saarland.de/basiswissen/glossar/) Un module dédié, *Basismodul Englisch – Englisch als Brückensprache* (Klein & Reissner 2006), exploite l'anglais comme langue-pont. [eurocomprehension](http://www.eurocomprehension.de/kurs/text_seite_1600.htm) L'Université de la Sarre propose des salles d'entraînement en ligne en allemand (eurocom.uni-saarland.de). [uni-saarland](https://www.eurocom.uni-saarland.de/) **C'est la référence la plus proche de ce projet : s'en inspirer directement pour les jeux de cognats et de règles.**

### 7. Apprentissage du vocabulaire : répétition, récupération, incident vs intentionnel

- La méta-analyse d'Uchihara et al. (2019) porte sur 26 études, 45 tailles d'effet et 1 918 participants. Elle trouve un effet moyen (r = 0,34) du nombre de rencontres sur l'apprentissage incident. Les études primaires citent des besoins de 6, 10, 12 ou plus de 20 rencontres. Le chiffre de « 10 rencontres » est une approximation, pas une loi. [semanticscholar](https://www.semanticscholar.org/paper/The-Effects-of-Repetition-on-Incidental-Vocabulary-Uchihara-Webb/2e6da523facae1bcc05a58b404af52ed1c7a618c) [wordpress](https://adaptivelearninginelt.wordpress.com/2019/09/23/how-often-do-you-need-to-encounter-a-word-before-you-learn-it/)
- L'apprentissage **intentionnel** (s'exercer sur le mot) produit des gains plus rapides que l'apprentissage incident par la lecture seule. [sagepub](https://journals.sagepub.com/doi/10.1177/13621688221140521) [weebly](https://takumiuchihara.weebly.com/uploads/1/2/3/7/123756989/how_should_we_teach_vocabulary.pdf) L'idéal est la combinaison des deux : rencontres en contexte, plus de petits rappels actifs. Les rappels se font **par reconnaissance** ici (choisir le sens), ce qui est moins puissant que le rappel libre mais suffisant pour l'objectif réceptif.
- **Répétition espacée** : l'espacement des révisions et l'effet de test (se rappeler plutôt que relire) font partie des résultats les plus robustes de la psychologie cognitive. Dans le site, un algorithme simple (Leitner ou FSRS) programme le retour des mots *dans les jeux*, sans « deck de cartes » visible.
- **Cognats** : ils sont plus faciles à apprendre et résistent mieux à l'oubli (de Groot & Keijzer 2000). [beinborn](https://beinborn.eu/documents/ITLpaper.pdf) L'effet de facilitation dans une L3 dépend cependant du niveau atteint dans cette langue (Otwinowska 2024). [sagepub](https://journals.sagepub.com/doi/10.1177/02676583231176371) [langsci-press](https://langsci-press.org/catalog/view/268/2358/2053-1) Il faut donc *rendre visibles* les correspondances au début : l'activation n'est pas automatique.
- **Chunks** : *il y a, c'est, qu'est-ce que, est-ce que, je sais pas, ça va, il faut, en fait, du coup, tout à fait*. On les enseigne comme des blocs, surtout pour l'oreille.

### 8. Grammaire réceptive : le strict minimum

**Processing Instruction (VanPatten)** : on présente des phrases où il faut *interpréter* une forme pour comprendre le sens (qui fait quoi ? passé ou futur ?), sans jamais la produire. La méta-analyse de Shintani (2015), qui porte sur 42 expériences issues de 33 études, trouve des effets importants sur la connaissance réceptive. L'explication grammaticale ajoutée n'apporte pas de gain significatif : l'input structuré seul suffit. [researchgate](https://www.researchgate.net/publication/282376997_The_Effectiveness_of_Processing_Instruction_and_Production-based_Instruction_on_L2_Grammar_Acquisition_A_Meta-Analysis) [academia](https://www.academia.edu/7266237/The_effectiveness_of_processing_instruction_on_L2_grammar_acquisition_A_meta_analysis) C'est exactement le format d'un mini-jeu.

**Les 12 signaux à savoir reconnaître :**
1. Négation : *pas / plus / jamais / rien / personne* (avec ou sans *ne*).
2. *ne… que* = nur.
3. Passé composé : *ai/as/a/avons/avez/ont* ou *suis/es/est/sommes/êtes/sont* + participe (*-é, -i, -u, fait, dit, pris, vu*).
4. Futur proche : *vais/vas/va/allons/allez/vont* + infinitif.
5. Futur simple : terminaisons en *-r-* (*parlera, fera, sera, aura, ira*).
6. Imparfait : *-ais/-ait/-aient* (« c'était », « il y avait ») = description ou habitude passée.
7. Pronoms objets devant le verbe (*le, la, les, lui, leur, me, te*), plus *y* (là-bas) et *en* (« davon »).
8. Questions : intonation, *est-ce que*, mots interrogatifs, inversion.
9. *on* = man / wir.
10. *il y a* = es gibt / vor.
11. Conditionnel de politesse : *je voudrais, pourriez-vous* (terminaisons *-rais/-rait*).
12. Relatifs : *qui / que / où / dont*, comme frontières de proposition.

**Ignorables au départ pour comprendre** : accords en genre et en nombre des adjectifs et participes, choix entre *être* et *avoir*, subjonctif (le reconnaître vaguement suffit), passé simple (seulement à l'écrit littéraire, à introduire tard), concordance des temps, la plupart des distinctions orthographiques.

### 9. Duolingo : ce que disent vraiment les données

**Ce qui marche (preuves réelles).**
- Jiang et al. (2021, *Foreign Language Annals*) ont testé des apprenants de français ayant fini le contenu débutant (88 en lecture, 89 en écoute), avec les tests de l'ACTFL. Ils approchaient le niveau Intermediate Mid en lecture et atteignaient Novice High en écoute. En lecture, leurs scores étaient significativement supérieurs à ceux d'étudiants de 4e semestre universitaire ; en écoute, ils étaient comparables (3,61 contre 3,39 pour 422 étudiants).
- **Bémol important** : l'étude a été conduite par quatre chercheurs de Duolingo (Jiang, Rollinson, Gustafson, Pajak) avec un seul collaborateur externe, Luke Plonsky (Northern Arizona University), et seuls les utilisateurs ayant terminé le parcours ont été testés. Le biais de survivant est évident.
- Même dans ces données, **l'écoute est en retard d'environ un sous-niveau sur la lecture**. [amazonaws](https://duolingo-papers.s3.amazonaws.com/reports/duolingo-english-efficacy-whitepaper.pdf) C'est exactement le point faible que le site doit attaquer.

**Ce que disent les études indépendantes.**
- Loewen et al. (2019, *ReCALL*) ont fait un cas d'étude sur le turc : 9 chercheurs-apprenants, au moins 1 h par semaine pendant 12 semaines. Les participants ont trouvé les activités répétitives et centrées sur la traduction. Leur motivation a souvent baissé, et certains « bourraient » leurs sessions pour remplir le quota plutôt que d'étudier régulièrement. [duolingo +3](http://static.duolingo.com/s3/DuolingoReport_Final.pdf)
- La revue systématique de Shortt et al. (2023, *CALL*) couvre la littérature de 2012 à 2020. Elle conclut que la gamification motive au début et aide pour le vocabulaire de base, mais que l'app aide mal à dépasser le niveau élémentaire. [tandfonline](https://www.tandfonline.com/doi/full/10.1080/09588221.2021.1933540) [behaviouralbydesign](https://evidence.behaviouralbydesign.com/p/the-real-effect-of-duolingo)
- Les études basées sur des enquêtes montrent que les streaks et l'XP sont motivants. Des utilisateurs doutent pourtant qu'une longue streak reflète une vraie compréhension (mémoire de l'Université d'Oulu, 2025). [unpkediri +2](https://proceeding.unpkediri.ac.id/index.php/eltt/article/download/10964/6969)

**Diagnostic factuel des faiblesses pour un objectif de compréhension.**
1. Phrases isolées, souvent artificielles, au lieu de textes cohérents : peu d'input continu et peu d'entraînement au gist.
2. La traduction comme mécanique centrale : on vérifie la correspondance mot à mot, pas la compréhension du message.
3. Un mélange de production et de réception qui ralentit la progression réceptive, inutile pour cet objectif.
4. Les streaks et l'XP récompensent la *présence*, pas la *compréhension*, et peuvent induire anxiété et comportements de contournement. [arxiv](https://arxiv.org/pdf/2607.25096) [spellings](https://spellings.app/blog/duolingo-effect)
5. Une seule voix ou peu de voix, peu de parole spontanée : faible préparation à l'oral réel.
6. Une progression linéaire imposée, qui ne tient pas compte de ce que l'apprenante sait déjà (zéro exploitation des cognats spécifiques à l'allemand).

**À conserver** : sessions très courtes, feedback immédiat, réponses par tapotement, répétition adaptative, ton léger et humour.

### 10. Gamification sans fausse motivation

- Les méta-analyses trouvent des effets positifs de taille moyenne à grande, mais très hétérogènes :
  - Li, Ma & Shi (2023, *Frontiers in Psychology*) : g = 0,822 sur l'apprentissage en général. [frontiersin](https://www.frontiersin.org/articles/10.3389/fpsyg.2023.1253549/full) [frontiersin](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1253549/pdf)
  - Liu, Zhang & Dai (2025, *Computer Assisted Language Learning*), méta-analyse sur les jeux mobiles en apprentissage des langues (38 études, 4 102 participants) : g = 0,962.
  - Lee & Baek (2023, 11 études coréennes, 610 participants) : g = 0,517. [researchgate](https://www.researchgate.net/publication/372563923_Effects_of_Gamification_on_Students'_English_Language_Proficiency_A_Meta-Analysis_on_Research_in_South_Korea) Les mémoires et thèses y affichent des effets bien plus élevés que les articles publiés en revue (0,799 contre 0,298), ce qui signale un biais méthodologique. [repec +2](https://ideas.repec.org/a/gam/jsusta/v15y2023i14p11325-d1198713.html)
- **Lecture prudente** : la gamification « marche » surtout quand le jeu *est* l'exercice d'apprentissage, et non quand des points se superposent à une tâche inchangée.
- **Théorie de l'autodétermination** (Deci & Ryan) : la motivation durable repose sur l'autonomie, le sentiment de compétence et le lien social. Des récompenses externes contingentes peuvent affaiblir l'intérêt intrinsèque pour une activité déjà plaisante (effet de surjustification).
- **Règles de conception qui en découlent :**
  - **Compétence visible et vraie** : « Tu comprends maintenant 87 % de ce texte » (calculé sur ses mots maîtrisés), « Tu reconnais 412 mots à l'oreille ». C'est la meilleure récompense possible, et elle est honnête.
  - **Autonomie** : choix libre du jeu et du thème, aucun parcours imposé.
  - **Pas de streak punitive** : au mieux un compteur de « jours où tu as joué ce mois-ci » qui ne se remet jamais à zéro, plus un message accueillant après une pause (« Content de te revoir, tu te souviens encore de 94 % de tes mots »).
  - **Feedback immédiat et informatif** : en cas d'erreur, montrer *pourquoi* (« *hier* = gestern ! »), pas une simple croix rouge.
  - **Sessions de 1 à 5 minutes**, que l'on peut quitter à tout moment sans perte.
  - **Lien social léger** : comme le site est fait pour une amie, des messages personnalisés ou des textes qui parlent d'elle et de lui sont un énorme levier de motivation intrinsèque.

### 11. Mini-jeux proposés (réalisables par un développeur seul)

Tous se jouent par **tap ou clic, avec reconnaissance uniquement, sans jamais écrire ni parler**.

| # | Jeu | Mécanique | Levier | Base de preuve |
|---|---|---|---|---|
| 1 | **Détective de cognats** | Un texte français réel s'affiche, elle tape tous les mots qu'elle « reconnaît » ; le jeu révèle le sens et affiche « Tu viens de comprendre 41 mots sans les avoir appris » | Cognats, confiance | Facilitation cognatique ; EuroCom tamis 1-2 |
| 2 | **La machine à transformer** | Un mot allemand ou anglais entre dans une « machine » ; elle choisit la règle (-ität→-ité…) et voit sortir le mot français, ou à l'inverse elle devine le sens d'un mot français inconnu grâce à la règle | Règles de transformation | EuroCom tamis 3-4 et 7 |
| 3 | **Ami ou traître ?** | Des mots défilent vite ; on les glisse à gauche (vrai ami) ou à droite (faux ami / faux gallicisme) ; feedback avec mini-image drôle | Faux amis, Scheingallizismen | Les faux amis sont moins bien reconnus que les cognats |
| 4 | **Phrase sandwich** | Une histoire en allemand dont la part de français augmente de 10 % à chaque épisode ; mots français tapables pour vérifier | Input compréhensible, diglot weave | Preuves faibles mais plausibles ; mode à présenter comme un jeu |
| 5 | **Révélation mot par mot** | Une phrase française floutée ; chaque tap révèle un mot ; l'objectif est de deviner le sens global (3 choix) en révélant le moins de mots possible | Gist, inférence, mots-clés | Stratégies de compréhension |
| 6 | **Le mot masqué** | Un mot inconnu est remplacé par ███ dans un texte compris à 98 % ; elle choisit parmi 3 sens | Inférence par le contexte | Inférence efficace à couverture ≥ 95-98 % |
| 7 | **Chasse au son** | Une phrase audio (3 voix différentes) ; elle tape le bouton dès qu'elle entend un mot cible (« pas ! », « on ! ») | Reconnaissance orale des mots-outils | Segmentation ; HVPT |
| 8 | **Coupe le ruban** | La transcription phonétique continue d'une phrase (« ilzonfini ») ; elle tape les frontières de mots, puis voit l'écrit (*ils ont fini*) | Segmentation, liaison, élision | Corrélation forte segmentation/compréhension |
| 9 | **Paires de sons** | Elle entend un mot et choisit entre *tu/tout*, *vent/vont/vin*, *le/les* ; multi-voix ; 20 items en 60 secondes | Perception phonémique | HVPT (Sakai & Moorman ; Uchihara et al.) |
| 10 | **Oreille ↔ œil** | Elle entend un mot connu à l'écrit et le reconnaît parmi 4 formes écrites (*parlent* vs *parlant*…) ; règles graphie-son en bulles | Correspondance graphie-phonie | Lexique fournit la phonétique de chaque mot |
| 11 | **Qui fait quoi ? / Quand ?** | Une phrase audio ou écrite ; elle choisit l'image ou la frise temporelle (passé / maintenant / futur, oui / non) | Grammaire réceptive | Processing Instruction (Shintani 2015) |
| 12 | **Flash gist** | Un mini-texte ou audio de 20 à 30 secondes, puis une question globale (« De quoi ça parle ? », « Il est content ou pas ? ») avec un temps limité | Compréhension globale, écoute extensive | Input compréhensible |
| 13 | **Le curseur de compréhension** | Elle colle n'importe quel texte français (article, message) ; le site colore les mots connus / cognats / inconnus et affiche le % de couverture | Motivation, choix des textes | Couverture lexicale (Nation, Laufer, Schmitt) |
| 14 | **Narrow stories** | Une série d'histoires courtes avec les mêmes personnages ; l'audio passe de 0,75× à 1× ; un tap sur un mot donne sa traduction | Lecture/écoute extensive, recyclage | Rencontres répétées (Uchihara 2019) |

**Priorité MVP** : les jeux 1, 3, 5, 7, 9, 11 et 13, plus une petite série d'histoires (14).

### 12. Progression par paliers (estimations)

| Palier | Contenu | Ce qu'elle devrait pouvoir comprendre | Fiabilité de l'estimation |
|---|---|---|---|
| **0 – « Tu sais déjà »** (1-2 semaines de jeu léger) | Règles de transformation, ~200 gallicismes et cognats fréquents, 15 faux amis, règles graphie-son de base | Deviner le thème d'un article de presse simple ; repérer les mots-clés d'une affiche, d'un menu, d'un titre | Moyenne : l'écrit est bien soutenu par les cognats, l'oral beaucoup moins |
| **1 – Noyau 300** | ~150 mots-outils + ~100 verbes et formes fréquentes + ~50 chunks ; signaux 1-4 | Comprendre la structure (qui, quoi, négation, passé/futur) de phrases simples ; suivre un texte gradué A1 | Moyenne : on peut lui faire confiance pour la structure, la couverture réelle dépend des textes |
| **2 – ~500 familles + cognats** | Fréquences Lexique jusqu'à environ le rang 500, tous les signaux grammaticaux | Lire des histoires A2 avec ~90 % de couverture (d'après Cobb 2026), donc le sens général avec un peu d'aide ; comprendre un dialogue lent sur un sujet familier | Assez bonne pour l'écrit (donnée française publiée), plus incertaine pour l'oral | [wiley](https://onlinelibrary.wiley.com/doi/10.1111/modl.70021)
| **3 – ~1 000-2 000 + cognats** | Lecture/écoute extensive quotidienne, fréquences « films » | ~88 % de couverture lexicale de l'oral filmé (estimation non académique) ; avec les cognats, une bonne partie des messages écrits du quotidien ; le gist d'une conversation lente ou d'un podcast pour apprenants | Faible à moyenne : chiffres de couverture non évalués par des pairs ; la segmentation reste limitante | [gallus-french](https://gallus-french.com/blog/how-many-french-words)
| **4 – 3 000+ familles** | Textes authentiques choisis grâce au curseur | ~96-98 % de couverture sur beaucoup de textes (LFNF) ; articles de presse avec un peu d'effort ; séries avec sous-titres français | Moyenne : appuyée sur Cobb 2026 et Nation 2006, mais la compréhension réelle à 98 % plafonne souvent vers 70 % | [wiley](https://onlinelibrary.wiley.com/doi/full/10.1111/modl.70021) [lextutor](https://www.lextutor.ca/cover/papers/schmitt_etal_2011.pdf)

**Remarque honnête.** Le chemin de « je comprends en gros » à « je comprends un film sans sous-titres » est long : plusieurs milliers de familles de mots et des centaines d'heures d'écoute. Le site doit mettre en valeur les étapes intermédiaires réelles, sans promettre la fluidité.

### 13. Sources de données ouvertes (licences vérifiées)

| Ressource | Usage | Licence |
|---|---|---|
| **Lexique 3.83** | Fréquences, phonétique, lemmes | CC BY-NC selon lexique.org (CC BY-SA 4.0 indiqué sur le dépôt Openlexicon). À clarifier si usage commercial | [github](https://github.com/chrplr/openlexicon/blob/master/datasets-info/Lexique383/README-Lexique.md) [lexique](http://www.lexique.org/)
| **Tatoeba** | Phrases FR-DE-EN | Texte CC BY 2.0 FR (une partie en CC0). Audio : licence choisie par chaque contributeur ; si le champ licence est vide, réutilisation hors Tatoeba interdite. Plus de 13,4 millions de phrases, plus d'un million avec audio (toutes langues) [tatoeba +2](https://tatoeba.org/en/downloads) | [Wikipedia](https://en.wikipedia.org/wiki/Tatoeba)
| **Wiktionary** | Traductions, définitions, étymologies | CC BY-SA 4.0 + GFDL : citer et partager à l'identique | [wiktionary](https://en.wiktionary.org/wiki/Wiktionary:Copyrights)
| **Mozilla Common Voice (FR)** | Enregistrements de phrases lues par de nombreuses voix (idéal pour la HVPT) | CC0. Environ 1 200 heures de français annoncées fin 2025 ; engagement à ne pas chercher à identifier les locuteurs | [mozilladatacollective](https://mozilladatacollective.com/datasets/cmqi2a71t005uo507j5vzspfu) [mozilladatacollective](https://community.mozilladatacollective.com/pashto-becomes-third-highest-language-by-volume-of-data-in-common-voice-v24/)
| **Lingua Libre (Wikimedia Commons)** | Prononciation de mots isolés par des locuteurs natifs | Généralement CC BY-SA 4.0, mais licence fichier par fichier : à vérifier | [Wikipedia](https://en.wikipedia.org/wiki/Lingua_Libre) [wikimedia](https://commons.wikimedia.org/wiki/File:LL-Q7913_%28ron%29-KlaudiuMihaila-Liban.wav)
| **Piper TTS** (voix françaises) | Synthèse vocale locale, gratuite | fr_FR-siwis entraînée sur des données CC BY 4.0 ; fr_FR-upmc sur des données CC BY-SA 4.0 ; fr_FR-tom sous AGPLv3. Le mainteneur déclare n'imposer aucune licence supplémentaire aux modèles, mais le modèle de base anglais (« lessac ») a sa propre licence : statut flou pour un usage commercial | [huggingface +3](https://huggingface.co/rhasspy/piper-voices/blob/0c9c5d340496a47205a799eb046aab69334a88e9/fr/fr_FR/siwis/medium/MODEL_CARD)
| **EuroCom (Uni Saarland)** | Inspiration pédagogique, tamis | Contenu protégé : s'en inspirer, ne pas copier |
| **Lonsdale & Le Bras** | Vérification | Sous droits d'auteur : ne pas reproduire |

**Pratique recommandée.** Pré-générer l'audio en TTS multi-voix (Piper, ou un service cloud) pour tout le contenu produit, compléter avec Common Voice (CC0) pour la variabilité naturelle des voix, et afficher les attributions CC BY dans une page « crédits ».

## Recommendations

**Contenu minimal du MVP :**
1. Une base d'environ 600 entrées, générée depuis Lexique (fréquence films), chacune annotée *transparent DE / transparent EN / opaque / faux ami*, avec traduction allemande, phonétique et 2 à 3 voix audio.
2. Un module « règles de transformation » (~12 règles, 10 exemples chacune, tous vérifiés).
3. 40 faux amis et faux gallicismes vérifiés (les tableaux ci-dessus).
4. 12 jeux de signaux grammaticaux (Processing Instruction), environ 15 items chacun.
5. 10 à 15 micro-histoires « narrow » (100 à 200 mots, mêmes personnages, ≥ 95 % de couverture au palier visé), en texte et en audio à 2 vitesses.
6. Le curseur de compréhension (texte collé → % de couverture), qui sert à la fois d'outil et de récompense.
7. Un moteur de répétition espacée invisible qui alimente tous les jeux.

**Règles de conception « anti-Duolingo » :**
- Jamais de production : pas de clavier, pas de micro.
- Jamais de streak qui se remet à zéro, pas de cœurs ou de vies, pas de notifications culpabilisantes.
- Des métriques de compréhension réelle, pas d'XP abstrait.
- Toujours du sens : histoires et dialogues cohérents plutôt que phrases isolées.
- L'oral en priorité dès le jour 1, avec plusieurs voix.
- Partir de ce qu'elle sait (cognats) et non d'un parcours universel.

**Ce qu'il ne faut surtout PAS faire :**
- Présenter *Friseur, Blamage* comme des mots français.
- Laisser croire que *ne* est le signal de la négation à l'oral.
- Utiliser des textes authentiques trop tôt : sous 90 % de couverture, ils frustrent sans enseigner.
- Une seule voix TTS.
- Des explications grammaticales longues.
- Des promesses chiffrées du type « comprendre le français en 30 jours ».
- Réutiliser des listes protégées (Routledge) ou des audios Tatoeba sans licence.

## Caveats

- Les seuils de couverture viennent surtout de recherches sur l'anglais. Pour le français, les données publiées sont récentes (Cobb 2026) ou non académiques (Gallus). Les paliers sont des ordres de grandeur, pas des garanties.
- Les études favorables à Duolingo sont en grande partie produites par l'entreprise. Les études indépendantes sont petites et souvent qualitatives.
- Les méta-analyses sur la gamification montrent une forte hétérogénéité et des signes de biais de publication ; leurs grandes tailles d'effet sont à prendre avec prudence. [wiley](https://bera-journals.onlinelibrary.wiley.com/doi/full/10.1111/bjet.13471) [repec](https://ideas.repec.org/a/gam/jsusta/v15y2023i14p11325-d1198713.html)
- Les preuves sur le diglot weave reposent sur quelques études de petite taille. [scribd](https://www.scribd.com/document/168792379/The-Effect-of-Teaching-Vocabulary-through-the-Diglot-Weave-Technique-and-Attitude-towards-This-Technique) [jptam](https://jptam.org/index.php/jptam/article/view/3699) Les approches « comprehension-first » (ALG, Assimil passif) n'ont pas d'évaluation comparative solide.
- Le chiffre d'environ 2 400 gallicismes en allemand vient de sources secondaires. Les taux d'omission de *ne* sont cités d'après des sources secondaires (Coveney 1996 ; Ashby 1981, 2001).
- La licence de Lexique est indiquée différemment selon la source (CC BY-NC vs CC BY-SA), [github](https://github.com/chrplr/openlexicon/blob/master/datasets-info/Lexique383/README-Lexique.md) [lexique](http://www.lexique.org/) et celle des voix Piper est ambiguë pour un usage commercial. Pour un site privé destiné à une amie, le risque est faible, mais il faut vérifier avant toute publication élargie.
- La facilitation par les cognats s'observe plus nettement à l'écrit, et une partie de son effet dépend du niveau déjà atteint. L'apport des cognats à la compréhension *orale* sera plus faible tant que les règles graphie-son ne sont pas automatisées.