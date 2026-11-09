// Spiel „Klangpaare“ – entraînement perceptif (HVPT) : un mot est dit, choisir lequel.
export interface PairSet {
  contrast: string; // ce qui distingue
  tip: string;
  words: { fr: string; de: string }[];
}

export const PAIRS: PairSet[] = [
  { contrast: 'u / ou', tip: 'Geschriebenes „u“ = deutsches „ü“. Geschriebenes „ou“ = deutsches „u“.', words: [{ fr: 'tu', de: 'du' }, { fr: 'tout', de: 'alles' }] },
  { contrast: 'u / ou', tip: '„u“ = ü, „ou“ = u.', words: [{ fr: 'dessus', de: 'oben drauf' }, { fr: 'dessous', de: 'darunter' }] },
  { contrast: 'u / ou', tip: '„u“ = ü, „ou“ = u.', words: [{ fr: 'rue', de: 'Straße' }, { fr: 'roue', de: 'Rad' }] },
  { contrast: 'u / ou', tip: '„u“ = ü, „ou“ = u.', words: [{ fr: 'vu', de: 'gesehen' }, { fr: 'vous', de: 'ihr / Sie' }] },
  { contrast: 'u / ou', tip: '„u“ = ü, „ou“ = u.', words: [{ fr: 'bu', de: 'getrunken' }, { fr: 'bout', de: 'Ende' }] },
  { contrast: 'eu / ou', tip: '„eu“ = deutsches „ö“.', words: [{ fr: 'deux', de: 'zwei' }, { fr: 'doux', de: 'sanft' }] },
  { contrast: 'eu / ou', tip: '„eu“ = ö.', words: [{ fr: 'peu', de: 'wenig' }, { fr: 'pou', de: 'Laus' }] },
  { contrast: 'an / on / in', tip: 'Drei Nasale: „an“ (offen), „on“ (rund), „in“ (hell). Das n hört man nie.', words: [{ fr: 'vent', de: 'Wind' }, { fr: 'vont', de: 'sie gehen' }, { fr: 'vin', de: 'Wein' }] },
  { contrast: 'an / on / in', tip: 'Das n verschwindet in den Vokal.', words: [{ fr: 'blanc', de: 'weiß' }, { fr: 'blond', de: 'blond' }] },
  { contrast: 'an / on / in', tip: 'Das n verschwindet in den Vokal.', words: [{ fr: 'cent', de: 'hundert' }, { fr: 'son', de: 'Ton / sein' }, { fr: 'saint', de: 'heilig' }] },
  { contrast: 'an / on', tip: '„an/en“ offen, „on“ gerundet.', words: [{ fr: 'temps', de: 'Zeit' }, { fr: 'thon', de: 'Thunfisch' }] },
  { contrast: 'le / les', tip: 'Oft das einzige Zeichen für Mehrzahl! „le“ = dumpfes e, „les“ = helles „lé“.', words: [{ fr: 'le chat', de: 'die Katze' }, { fr: 'les chats', de: 'die Katzen' }] },
  { contrast: 'le / les', tip: '„le“ = dumpf, „les“ = hell.', words: [{ fr: 'le livre', de: 'das Buch' }, { fr: 'les livres', de: 'die Bücher' }] },
  { contrast: 'il / ils + Bindung', tip: 'Vor Vokal macht „ils“ ein hörbares z: „ils_ont“ = „il-zõ“.', words: [{ fr: 'il a', de: 'er hat' }, { fr: 'ils ont', de: 'sie haben' }] },
  { contrast: 'é / è', tip: 'é = geschlossen (wie „Tee“), è / ai = offen (wie „Bär“).', words: [{ fr: 'les', de: 'die (Mehrzahl)' }, { fr: 'lait', de: 'Milch' }] },
  { contrast: 'é / e', tip: 'é = hell, e = dumpf.', words: [{ fr: 'des', de: 'einige' }, { fr: 'de', de: 'von' }] },
  { contrast: 'Vergangenheit hören', tip: '„j’ai“ = ich habe (Perfekt kommt), „je“ = Gegenwart.', words: [{ fr: "j'ai mangé", de: 'ich habe gegessen' }, { fr: 'je mange', de: 'ich esse' }] },
  { contrast: 'oi = wa', tip: '„oi“ klingt immer „wa“.', words: [{ fr: 'moi', de: 'ich' }, { fr: 'mou', de: 'weich' }] },
  { contrast: 'ch / j', tip: '„ch“ = sch, „j“ = stimmhaftes sch (wie in „Journal“).', words: [{ fr: 'chou', de: 'Kohl' }, { fr: 'joue', de: 'Wange / spielt' }] },
];
