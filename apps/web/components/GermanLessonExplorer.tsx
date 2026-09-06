"use client";

import React, { useState, useMemo } from "react";
import { CheckCircle2 } from "lucide-react";

interface AlphabetLetter {
  char: string;
  letter: string;
  name: string;
  sound: string;
  example: string;
  meaning: string;
  isShift?: boolean;
  isVowel?: boolean;
  dinName: string;
  mouthTip: string;
  variants?: string;
}

const GERMAN_ALPHABET: AlphabetLetter[] = [
  { char: 'A', letter: 'A a', name: 'aah', sound: "Open 'a' like in father", example: 'der Abend', meaning: 'evening', isVowel: true, dinName: 'Anton', mouthTip: 'Drop jaw naturally; relaxed open mouth.' },
  { char: 'B', letter: 'B b', name: 'beh', sound: "Like 'b' in bed", example: 'das Buch', meaning: 'book', isVowel: false, dinName: 'Berta', mouthTip: 'Both lips together with slight vocal release.' },
  { char: 'C', letter: 'C c', name: 'tseh', sound: "Crisp 'ts' before e/i; 'k' before a/o/u", example: 'das Café', meaning: 'café', isVowel: false, dinName: 'Cäsar', mouthTip: 'Tongue tip behind lower front teeth.', variants: '1. Crisp [ts] before front vowels e, i, ä, ö (Cäsar, Celsius) • 2. Hard [k] before a, o, u or consonants (das Café, der Club)' },
  { char: 'D', letter: 'D d', name: 'deh', sound: "Like 'd' in door", example: 'der Dank', meaning: 'thanks', isVowel: false, dinName: 'Dora', mouthTip: 'Tongue tip touches upper gums.' },
  { char: 'E', letter: 'E e', name: 'eeh', sound: "Open like 'pet' (short) or 'ay' (long)", example: 'das Essen', meaning: 'food', isVowel: true, dinName: 'Emil', mouthTip: 'Smile slightly; tongue arched forward.', variants: '1. Short open [ɛ] (das Essen, das Bett) • 2. Long closed [eː] (der Tee, das Leben) • 3. Unstressed final schwa [ə] (die Bitte, der Name)' },
  { char: 'F', letter: 'F f', name: 'eff', sound: "Like 'f' in find", example: 'der Freund', meaning: 'friend', isVowel: false, dinName: 'Friedrich', mouthTip: 'Upper teeth lightly press lower lip.' },
  { char: 'G', letter: 'G g', name: 'geh', sound: "Always hard 'g' like in go (never 'j')", example: 'gut', meaning: 'good', isVowel: false, dinName: 'Gustav', mouthTip: 'Back of tongue against soft palate.', variants: '1. Standard hard [ɡ] (gut, gehen) • 2. Word-ending "-ig" pronounced as soft [ɪç] like "ich" in standard German (richtig, zwanzig)' },
  { char: 'H', letter: 'H h', name: 'hah', sound: "Breathed 'h' initially; silent lengthener after vowel", example: 'Hallo', meaning: 'hello', isVowel: false, dinName: 'Heinrich', mouthTip: 'Open breath from throat.', variants: '1. Aspirated breathed [h] at syllable start (Hallo, haben) • 2. Completely silent vowel-lengthener after vowels (die Uhr, die Bahn)' },
  { char: 'I', letter: 'I i', name: 'iih', sound: "Like 'ee' in see (long) or 'i' in sit", example: 'die Idee', meaning: 'idea', isVowel: true, dinName: 'Ida', mouthTip: 'Wide smile; tongue high near roof.', variants: '1. Long [iː] in open syllables or with "ie" (die Idee, wie) • 2. Short crisp [ɪ] in closed syllables (der Tisch, bitte)' },
  { char: 'J', letter: 'J j', name: 'yott', sound: "Always like English 'y' in yes!", example: 'ja', meaning: 'yes', isShift: true, isVowel: false, dinName: 'Julius', mouthTip: "Middle tongue arches up, never 'dj'!", variants: '1. German consonant [j] like English "yes" (ja, das Jahr) • 2. French loanwords retain [ʒ] (der Journalist)' },
  { char: 'K', letter: 'K k', name: 'kah', sound: "Crisp aspirated 'k' like in kite", example: 'der Kaffee', meaning: 'coffee', isVowel: false, dinName: 'Kaufmann', mouthTip: 'Sharp burst of air from soft palate.' },
  { char: 'L', letter: 'L l', name: 'ell', sound: "Clear European 'l' on upper gums", example: 'die Lampe', meaning: 'lamp', isVowel: false, dinName: 'Ludwig', mouthTip: 'Tongue tip firmly against upper front teeth.' },
  { char: 'M', letter: 'M m', name: 'emm', sound: "Like 'm' in mother", example: 'die Musik', meaning: 'music', isVowel: false, dinName: 'Martha', mouthTip: 'Lips sealed, nasal resonance.' },
  { char: 'N', letter: 'N n', name: 'enn', sound: "Like 'n' in no", example: 'der Name', meaning: 'name', isVowel: false, dinName: 'Nordpol', mouthTip: 'Tongue touches upper ridge.' },
  { char: 'O', letter: 'O o', name: 'ohh', sound: "Pure round 'o' like in so", example: 'die Oper', meaning: 'opera', isVowel: true, dinName: 'Otto', mouthTip: "Round lips into an 'O' circle.", variants: '1. Long closed [oː] (die Oper, das Foto) • 2. Short open [ɔ] (die Sonne, der Oft)' },
  { char: 'P', letter: 'P p', name: 'peh', sound: "Crisp 'p' like in park", example: 'die Post', meaning: 'post office', isVowel: false, dinName: 'Paula', mouthTip: 'Lips press together with gentle pop.' },
  { char: 'Q', letter: 'Q q', name: 'kuh', sound: "Always followed by u: sounds like 'kv'", example: 'bequem', meaning: 'comfortable', isVowel: false, dinName: 'Quelle', mouthTip: "Pronounce as 'k' immediately followed by 'v'." },
  { char: 'R', letter: 'R r', name: 'err', sound: "Throat-trilled (uvular) or gently tapped", example: 'das Radio', meaning: 'radio', isVowel: false, dinName: 'Richard', mouthTip: 'Gargle lightly at back of throat.', variants: '1. Consonantal uvular trill [ʁ] at start of syllables (das Radio, rot) • 2. Vocalic soft [ɐ] at word or syllable ends (der Vater [FAH-tɐ], der)' },
  { char: 'S', letter: 'S s', name: 'ess', sound: "Voiced 'z' before vowels; unvoiced at end", example: 'die Sonne', meaning: 'sun', isVowel: false, dinName: 'Samuel', mouthTip: "Buzz like 'z' when followed by vowel.", variants: '1. Voiced [z] like "zoo" before vowels (die Sonne, sein) • 2. Sharp unvoiced [s] like "bus" at word end (das, das Glas) • 3. Morphs to "sh" [ʃ] before p/t (Sport, Stadt)' },
  { char: 'T', letter: 'T t', name: 'teh', sound: "Sharp dental 't' like in tea", example: 'der Tag', meaning: 'day', isVowel: false, dinName: 'Theodor', mouthTip: 'Tongue strikes upper front teeth.' },
  { char: 'U', letter: 'U u', name: 'uuh', sound: "Deep 'oo' like in moon", example: 'die Uhr', meaning: 'clock', isVowel: true, dinName: 'Ulrich', mouthTip: 'Pucker lips forward tightly.', variants: '1. Long deep [uː] (die Uhr, gut) • 2. Short [ʊ] (das Buch, die Mutter)' },
  { char: 'V', letter: 'V v', name: 'fau', sound: "Sounds like English 'f' in native words; 'v' in loanwords", example: 'der Vater', meaning: 'father', isShift: true, isVowel: false, dinName: 'Viktor', mouthTip: "Upper teeth on lower lip; blow like 'f'.", variants: '1. Native German words: [f] like "father" (der Vater, vier, voll) • 2. Foreign loanwords: [v] like "victory" (die Vase, das Verb, das Visum)' },
  { char: 'W', letter: 'W w', name: 'veh', sound: "Always like English 'v' in victory! No English 'w'", example: 'das Wasser', meaning: 'water', isShift: true, isVowel: false, dinName: 'Wilhelm', mouthTip: "Never round lips like English 'w'; use teeth on lower lip." },
  { char: 'X', letter: 'X x', name: 'iks', sound: "Like 'ks' in taxi", example: 'das Taxi', meaning: 'taxi', isVowel: false, dinName: 'Xanthippe', mouthTip: "Quick blend of 'k' and 's'." },
  { char: 'Y', letter: 'Y y', name: 'üpsilon', sound: "Sounds like 'ü' in native words or 'y'", example: 'das Yoga', meaning: 'yoga', isVowel: false, dinName: 'Ypsilon', mouthTip: "Lips like 'oo', say 'ee'.", variants: '1. Vowel [y] (same as "ü") in native/Greek words (der Typ, das System) • 2. Consonant [j] like "yes" in loanwords (das Yoga)' },
  { char: 'Z', letter: 'Z z', name: 'tsett', sound: "Always sharp 'ts' like in cats! Never buzz 'z'", example: 'die Zeit', meaning: 'time', isShift: true, isVowel: false, dinName: 'Zacharias', mouthTip: "Sharp burst: 't' followed directly by 's'." },
];

const GERMAN_CONSONANT_SHIFTS = [
  {
    equation: "W = [V]",
    germanName: "veh",
    rule: "German has NO English 'W' sound. Always pronounce it like English 'V' as in victory!",
    examples: ["das Wasser", "Wien", "wer", "wie", "woher"],
    translation: "water, Vienna, who, how, where from",
  },
  {
    equation: "V = [F] or [V]",
    germanName: "fau",
    rule: "German 'V' has two pronunciation modes: In native German words, 'V' sounds like English 'F' (Vater, vier). In loanwords, it sounds like English 'V' (die Vase, das Verb)!",
    examples: ["der Vater", "vier", "viel", "die Vase"],
    translation: "father [F], four [F], much/many [F], vase [V]",
  },
  {
    equation: "J = [Y]",
    germanName: "yott",
    rule: "Always pronounced like English consonant 'Y' as in 'yes' or 'yellow'. Never like English 'J' in judge!",
    examples: ["ja", "das Jahr", "jetzt", "jung"],
    translation: "yes, the year, now, young",
  },
  {
    equation: "Z = [TS]",
    germanName: "tsett",
    rule: "Always a crisp, explosive 'ts' sound, exactly like the end of English 'cats'. Never pronounce it with a buzzing English 'Z'!",
    examples: ["zehn", "die Zeit", "das Zimmer", "zusammen"],
    translation: "ten, time, room, together",
  },
];

const DIALOGUE_LINES = [
  {
    speaker: "Nina Weber",
    german: "Guten Tag! Herzlich willkommen. Wie heißen Sie bitte?",
    english: "Good day! Welcome. What is your name, please?",
    role: "Receptionist",
    avatarChar: "👩‍💼",
  },
  {
    speaker: "Gregor Schubert",
    german: "Guten Tag. Ich heiße Gregor Schubert.",
    english: "Good day. My name is Gregor Schubert.",
    role: "Student",
    avatarChar: "👨‍🎓",
  },
  {
    speaker: "Nina Weber",
    german: "Entschuldigung, wie schreibt man den Nachnamen? Können Sie bitte buchstabieren?",
    english: "Excuse me, how do you spell the last name? Could you please spell it?",
    role: "Receptionist",
    avatarChar: "👩‍💼",
  },
  {
    speaker: "Gregor Schubert",
    german: "Ja, natürlich: S - C - H - U - B - E - R - T.",
    english: "Yes, of course: S - C - H - U - B - E - R - T.",
    role: "Student",
    avatarChar: "👨‍🎓",
  },
  {
    speaker: "Nina Weber",
    german: "Vielen Dank, Herr Schubert! Ihr Kursraum ist Nummer 12 im ersten Stock.",
    english: "Thank you very much, Mr. Schubert! Your classroom is number 12 on the first floor.",
    role: "Receptionist",
    avatarChar: "👩‍💼",
  },
];

export interface GermanWordEntry {
  word: string;
  translation: string;
  phonetic: string;
  gender?: string; // "der", "die", "das"
  partOfSpeech?: string; // "Noun", "Verb", "Adjective", "Adverb", "Pronoun", "Article", etc.
  plural?: string;
  note?: string;
  secondarySense?: {
    word: string;
    partOfSpeech?: string;
    translation: string;
  };
}

export const GERMAN_DICTIONARY: Record<string, GermanWordEntry> = {
  // Screenshot Reference & Classroom Vocabulary
  "Tisch": { word: "Tisch", translation: "table", phonetic: "[TISH]", gender: "der", partOfSpeech: "Noun", plural: "Tische", note: "Masculine noun" },
  "der Tisch": { word: "Tisch", translation: "table", phonetic: "[dehr TISH]", gender: "der", partOfSpeech: "Noun", plural: "Tische", note: "Masculine noun" },
  "das": { word: "das", translation: "that; this", phonetic: "[dahs]", gender: "das", partOfSpeech: "Article / Pronoun" },
  "ein": { word: "ein", translation: "a / an / one", phonetic: "[EYE-n]", partOfSpeech: "Indefinite Article" },
  "Ist": {
    word: "sein",
    translation: "his",
    phonetic: "[IST]",
    secondarySense: {
      word: "sein",
      partOfSpeech: "Verb",
      translation: "be",
    },
    note: "3rd person 'ist' (is) conjugates from root verb 'sein' (to be)",
  },
  "ist": {
    word: "sein",
    translation: "his",
    phonetic: "[IST]",
    secondarySense: {
      word: "sein",
      partOfSpeech: "Verb",
      translation: "be",
    },
    note: "3rd person 'ist' (is) conjugates from root verb 'sein' (to be)",
  },
  "sein": {
    word: "sein",
    translation: "his",
    phonetic: "[ZYNE]",
    secondarySense: {
      word: "sein",
      partOfSpeech: "Verb",
      translation: "be",
    },
  },

  // 26 alphabet example words
  "der Abend": { word: "Abend", translation: "evening", phonetic: "[dehr AH-bent]", gender: "der", partOfSpeech: "Noun", plural: "Abende", note: "Open 'A' sound" },
  "das Buch": { word: "Buch", translation: "book", phonetic: "[dahs BOOKH]", gender: "das", partOfSpeech: "Noun", plural: "Bücher", note: "Deep 'U', uvular 'ch'" },
  "das Café": { word: "Café", translation: "café", phonetic: "[dahs kah-FAY]", gender: "das", partOfSpeech: "Noun", plural: "Cafés", note: "Crisp 'C' like 'k'" },
  "der Dank": { word: "Dank", translation: "gratitude / thanks", phonetic: "[dehr DAHN-k]", gender: "der", partOfSpeech: "Noun", note: "Dental 'D'" },
  "das Essen": { word: "Essen", translation: "food / meal", phonetic: "[dahs ESS-en]", gender: "das", partOfSpeech: "Noun", note: "Short open 'E'" },
  "der Freund": { word: "Freund", translation: "friend", phonetic: "[dehr FROYNT]", gender: "der", partOfSpeech: "Noun", plural: "Freunde", note: "'eu' = 'oy' sound" },
  "gut": { word: "gut", translation: "good / fine", phonetic: "[GOOT]", partOfSpeech: "Adjective", note: "Always hard 'G'" },
  "Hallo": { word: "Hallo", translation: "hello / hi", phonetic: "[HAH-lo]", partOfSpeech: "Greeting", note: "Breathed 'H'" },
  "die Idee": { word: "Idee", translation: "idea", phonetic: "[dee ee-DAY]", gender: "die", partOfSpeech: "Noun", plural: "Ideen", note: "Long 'ee' vowel" },
  "ja": { word: "ja", translation: "yes", phonetic: "[YAH]", partOfSpeech: "Particle", note: "J = [Y] sound (like yes)" },
  "der Kaffee": { word: "Kaffee", translation: "coffee", phonetic: "[dehr KAH-fay]", gender: "der", partOfSpeech: "Noun", note: "Crisp 'K'" },
  "die Lampe": { word: "Lampe", translation: "lamp", phonetic: "[dee LAHM-puh]", gender: "die", partOfSpeech: "Noun", plural: "Lampen", note: "Clear European 'L'" },
  "die Musik": { word: "Musik", translation: "music", phonetic: "[dee moo-ZEEK]", gender: "die", partOfSpeech: "Noun", note: "Voiced 'S' = 'Z'" },
  "der Name": { word: "Name", translation: "name", phonetic: "[dehr NAH-muh]", gender: "der", partOfSpeech: "Noun", plural: "Namen", note: "Clear 'N'" },
  "die Oper": { word: "Oper", translation: "opera", phonetic: "[dee OH-puhr]", gender: "die", partOfSpeech: "Noun", plural: "Opern", note: "Round 'O' vowel" },
  "die Post": { word: "Post", translation: "post office / mail", phonetic: "[dee POHST]", gender: "die", partOfSpeech: "Noun", note: "Crisp 'P'" },
  "bequem": { word: "bequem", translation: "comfortable", phonetic: "[buh-KVAYM]", partOfSpeech: "Adjective", note: "'qu' sounds like 'kv'" },
  "das Radio": { word: "Radio", translation: "radio", phonetic: "[dahs RAH-dyo]", gender: "das", partOfSpeech: "Noun", plural: "Radios", note: "Throat uvular 'R'" },
  "die Sonne": { word: "Sonne", translation: "sun", phonetic: "[dee ZON-nuh]", gender: "die", partOfSpeech: "Noun", note: "Voiced 'S' sounds like 'Z'" },
  "der Tag": { word: "Tag", translation: "day", phonetic: "[dehr TAHK]", gender: "der", partOfSpeech: "Noun", plural: "Tage", note: "Dental 'T', final 'g' like 'k'" },
  "die Uhr": { word: "Uhr", translation: "clock / watch", phonetic: "[dee OOR]", gender: "die", partOfSpeech: "Noun", plural: "Uhren", note: "Deep 'U', silent 'H'" },
  "der Vater": { word: "Vater", translation: "father", phonetic: "[dehr FAH-tuhr]", gender: "der", partOfSpeech: "Noun", plural: "Väter", note: "V = [F] sound (like father)" },
  "das Wasser": { word: "Wasser", translation: "water", phonetic: "[dahs VAH-suhr]", gender: "das", partOfSpeech: "Noun", note: "W = [V] sound (like victory)" },
  "das Taxi": { word: "Taxi", translation: "taxi", phonetic: "[dahs TAHK-see]", gender: "das", partOfSpeech: "Noun", plural: "Taxis", note: "'X' = 'ks' blend" },
  "das Yoga": { word: "Yoga", translation: "yoga", phonetic: "[dahs YOH-gah]", gender: "das", partOfSpeech: "Noun", note: "'Y' vowel sound" },
  "die Zeit": { word: "Zeit", translation: "time", phonetic: "[dee TSYTE]", gender: "die", partOfSpeech: "Noun", plural: "Zeiten", note: "Z = [TS] sound (like cats)" },

  // Consonant shifts vocabulary
  "Wien": { word: "Wien", translation: "Vienna (capital of Austria)", phonetic: "[VEEN]", partOfSpeech: "Proper Noun", note: "W = [V] sound" },
  "wer": { word: "wer", translation: "who", phonetic: "[VEHR]", partOfSpeech: "Pronoun", note: "W = [V] sound" },
  "wie": { word: "wie", translation: "how", phonetic: "[VEE]", partOfSpeech: "Adverb", note: "W = [V] sound" },
  "woher": { word: "woher", translation: "where from", phonetic: "[vo-HEHR]", partOfSpeech: "Adverb", note: "W = [V] sound" },
  "vier": { word: "vier", translation: "four", phonetic: "[FEER]", partOfSpeech: "Numeral", note: "V = [F] sound" },
  "viel": { word: "viel", translation: "much / a lot", phonetic: "[FEEL]", partOfSpeech: "Adverb", note: "V = [F] sound" },
  "voll": { word: "voll", translation: "full", phonetic: "[FOLL]", partOfSpeech: "Adjective", note: "V = [F] sound" },
  "von": { word: "von", translation: "of / from", phonetic: "[FON]", partOfSpeech: "Preposition", note: "V = [F] sound" },
  "die Vase": { word: "Vase", translation: "vase", phonetic: "[dee VAH-zuh]", gender: "die", partOfSpeech: "Noun", plural: "Vasen", note: "Loanword: V is pronounced as [V]" },
  "das Jahr": { word: "Jahr", translation: "year", phonetic: "[dahs YAHR]", gender: "das", partOfSpeech: "Noun", plural: "Jahre", note: "J = [Y] sound" },
  "jetzt": { word: "jetzt", translation: "now", phonetic: "[YETST]", partOfSpeech: "Adverb", note: "J = [Y] sound, z = [ts]" },
  "jung": { word: "jung", translation: "young", phonetic: "[YOONG]", partOfSpeech: "Adjective", note: "J = [Y] sound" },
  "zehn": { word: "zehn", translation: "ten", phonetic: "[TSAYN]", partOfSpeech: "Numeral", note: "Z = [TS] sound" },
  "das Zimmer": { word: "Zimmer", translation: "room", phonetic: "[dahs TSIM-muhr]", gender: "das", partOfSpeech: "Noun", plural: "Zimmer", note: "Z = [TS] sound" },
  "zusammen": { word: "zusammen", translation: "together", phonetic: "[tsoo-ZAHM-men]", partOfSpeech: "Adverb", note: "Z = [TS] sound" },

  // Dialogue vocabulary
  "Guten Tag": { word: "Guten Tag", translation: "Good day / Hello", phonetic: "[GOO-ten TAHK]", partOfSpeech: "Greeting", note: "Universal German greeting" },
  "Herzlich willkommen": { word: "Herzlich willkommen", translation: "Warmly welcome", phonetic: "[HEHRTS-likh vil-KOM-men]", partOfSpeech: "Phrase", note: "From 'Herz' (heart)" },
  "Wie heißen Sie": { word: "Wie heißen Sie", translation: "What is your name? (formal)", phonetic: "[VEE HY-sen ZEE]", partOfSpeech: "Phrase", note: "Formal polite question" },
  "bitte": { word: "bitte", translation: "please / you're welcome", phonetic: "[BIT-tuh]", partOfSpeech: "Particle", note: "Essential polite particle" },
  "Ich heiße": { word: "Ich heiße", translation: "My name is / I am called", phonetic: "[IKH HY-suh]", partOfSpeech: "Verb Phrase", note: "1st person of heißen" },
  "Gregor": { word: "Gregor", translation: "German male first name", phonetic: "[GRAY-gor]", partOfSpeech: "Proper Name" },
  "Schubert": { word: "Schubert", translation: "German family surname", phonetic: "[SHOO-bert]", partOfSpeech: "Proper Name" },
  "Entschuldigung": { word: "Entschuldigung", translation: "Excuse me / Pardon", phonetic: "[ent-SHOOL-dee-goong]", gender: "die", partOfSpeech: "Noun", note: "Polite attention getter" },
  "den Nachnamen": { word: "Nachname", translation: "the surname / last name", phonetic: "[dehn NAHKH-nah-men]", gender: "der", partOfSpeech: "Noun", plural: "Nachnamen", note: "Masculine noun" },
  "buchstabieren": { word: "buchstabieren", translation: "to spell letter-by-letter", phonetic: "[bookh-stah-BEE-ren]", partOfSpeech: "Verb", note: "DIN 5009 spelling standard" },
  "natürlich": { word: "natürlich", translation: "of course / naturally", phonetic: "[nah-TEWR-likh]", partOfSpeech: "Adverb", note: "Common confirmation adverb" },
  "Vielen Dank": { word: "Vielen Dank", translation: "Many thanks / Thank you very much", phonetic: "[FEE-len DAHNK]", partOfSpeech: "Phrase", note: "V = [F] sound" },
  "Kursraum": { word: "Kursraum", translation: "classroom / course room", phonetic: "[KOORS-rowm]", gender: "der", partOfSpeech: "Noun", plural: "Kursräume" },
  "Nummer": { word: "Nummer", translation: "number", phonetic: "[NOOM-muhr]", gender: "die", partOfSpeech: "Noun", plural: "Nummern" },
  "Stock": { word: "Stock", translation: "floor / story (of building)", phonetic: "[SHTOK]", gender: "der", partOfSpeech: "Noun", plural: "Stockwerke" },

  // Umlauts and special characters
  "die Äpfel": { word: "Äpfel", translation: "the apples", phonetic: "[dee EHP-fel]", gender: "die", partOfSpeech: "Noun (pl)", plural: "Äpfel", note: "Plural of der Apfel" },
  "spät": { word: "spät", translation: "late", phonetic: "[shpayt]", partOfSpeech: "Adjective", note: "Ä = open 'eh' sound" },
  "schön": { word: "schön", translation: "beautiful / lovely", phonetic: "[shoen]", partOfSpeech: "Adjective", note: "Ö = rounded lips, say 'ee'" },
  "das Öl": { word: "Öl", translation: "oil", phonetic: "[dahs oel]", gender: "das", partOfSpeech: "Noun", note: "Ö vowel sound" },
  "müde": { word: "müde", translation: "tired / sleepy", phonetic: "[MEW-duh]", partOfSpeech: "Adjective", note: "Ü = tight puckered lips, say 'ee'" },
  "die Übung": { word: "Übung", translation: "exercise / practice", phonetic: "[dee EW-boong]", gender: "die", partOfSpeech: "Noun", plural: "Übungen", note: "Ü vowel sound" },
  "groß": { word: "groß", translation: "big / tall / great", phonetic: "[grohs]", partOfSpeech: "Adjective", note: "ß = sharp unvoiced 'ss'" },
  "heißen": { word: "heißen", translation: "to be called / named", phonetic: "[HY-sen]", partOfSpeech: "Verb", note: "ß = sharp 'ss', ei = 'eye'" },
  "schon": { word: "schon", translation: "already", phonetic: "[shohn]", partOfSpeech: "Adverb", note: "Plain 'o' sound (contrast with schön)" },

  // Diphthongs and combinations
  "mein": { word: "mein", translation: "my / mine", phonetic: "[myne]", partOfSpeech: "Possessive Pronoun", note: "ei = [eye] sound" },
  "nein": { word: "nein", translation: "no", phonetic: "[nyne]", partOfSpeech: "Particle", note: "ei = [eye] sound" },
  "Sie": { word: "Sie", translation: "you (formal)", phonetic: "[zee]", partOfSpeech: "Personal Pronoun", note: "ie = [ee] sound" },
  "das Haus": { word: "Haus", translation: "house", phonetic: "[dahs hows]", gender: "das", partOfSpeech: "Noun", plural: "Häuser", note: "au = [ow] sound" },
  "die Frau": { word: "Frau", translation: "woman / wife", phonetic: "[dee frow]", gender: "die", partOfSpeech: "Noun", plural: "Frauen", note: "au = [ow] sound" },
  "heute": { word: "heute", translation: "today", phonetic: "[HOY-tuh]", partOfSpeech: "Adverb", note: "eu = [oy] sound" },
  "die Häuser": { word: "Häuser", translation: "houses", phonetic: "[dee HOY-zer]", gender: "die", partOfSpeech: "Noun (pl)", note: "äu = [oy] sound" },
  "der Student": { word: "Student", translation: "student", phonetic: "[dehr shtoo-DENT]", gender: "der", partOfSpeech: "Noun", plural: "Studenten", note: "st at start = [sht]" },
  "die Sprache": { word: "Sprache", translation: "language", phonetic: "[dee SHPRAH-khuh]", gender: "die", partOfSpeech: "Noun", plural: "Sprachen", note: "sp at start = [shp]" },
  "die Stadt": { word: "Stadt", translation: "city / town", phonetic: "[dee SHTAHT]", gender: "die", partOfSpeech: "Noun", plural: "Städte", note: "st at start = [sht]" },
  "die Nacht": { word: "Nacht", translation: "night", phonetic: "[dee NAHKHT]", gender: "die", partOfSpeech: "Noun", plural: "Nächte", note: "Throaty Ach-Laut after 'a'" },
  "ich": { word: "ich", translation: "I", phonetic: "[ikh]", partOfSpeech: "Personal Pronoun", note: "Hissing soft Ich-Laut after 'i'" },
  "nicht": { word: "nicht", translation: "not", phonetic: "[nikht]", partOfSpeech: "Particle", note: "Hissing soft Ich-Laut after 'i'" },
  "richtig": { word: "richtig", translation: "correct / right", phonetic: "[RIKH-tikh]", partOfSpeech: "Adjective", note: "-ig ending = soft ich-laut [ɪç]" },
  "wichtig": { word: "wichtig", translation: "important", phonetic: "[VIKH-tikh]", partOfSpeech: "Adjective", note: "-ig ending = soft ich-laut [ɪç], w = [v]" },
  "zwanzig": { word: "zwanzig", translation: "twenty", phonetic: "[TSVAHN-tsikh]", partOfSpeech: "Numeral", note: "z = [ts], -ig = soft ich-laut [ɪç]" },
};

export const UMLAUTS_AND_ESZETT = [
  {
    char: "Ä ä",
    name: "A-Umlaut",
    phoneticGuide: "ɛː / ɛ (open e)",
    sound: "Sounds like 'eh' in 'bed' or 'fair'.",
    mouthTip: "Drop your jaw slightly, tongue behind lower front teeth.",
    pair: { normal: "der Apfel (apple)", umlaut: "die Äpfel (apples)" },
    examples: ["die Äpfel", "spät"],
  },
  {
    char: "Ö ö",
    name: "O-Umlaut",
    phoneticGuide: "øː / œ (rounded ee)",
    sound: "Unique German vowel. No direct English counterpart.",
    mouthTip: "Shape lips into a round 'O', but attempt to say the vowel 'ee'.",
    pair: { normal: "schon (already)", umlaut: "schön (beautiful)" },
    examples: ["schön", "das Öl"],
  },
  {
    char: "Ü ü",
    name: "U-Umlaut",
    phoneticGuide: "yː / ʏ (puckered ee)",
    sound: "Deep focused vowel sound.",
    mouthTip: "Pucker lips tightly forward as if whistling, and pronounce 'ee'.",
    pair: { normal: "Mutter (mother)", umlaut: "Mütter (mothers)" },
    examples: ["müde", "die Übung"],
  },
  {
    char: "ß",
    name: "Eszett (scharfes S)",
    phoneticGuide: "s (sharp unvoiced ss)",
    sound: "Always an unvoiced sharp 'ss', like in 'kiss' or 'sun'.",
    mouthTip: "Never voice it like buzzing 'z'. Occurs after long vowels & diphthongs.",
    pair: { normal: "das Fass (short a)", umlaut: "die Straße (long a + ß)" },
    examples: ["groß", "heißen"],
  },
];

export const DIPHTHONGS_AND_CLUSTERS = [
  {
    pair: "EI vs. IE",
    rule: "The Golden Rule: The second vowel does the talking!",
    subRules: [
      {
        combo: "EI = [EYE]",
        desc: "Sounds like English 'eye' or 'bike'.",
        examples: ["mein", "nein", "die Zeit"],
      },
      {
        combo: "IE = [EE]",
        desc: "Sounds like English 'ee' in 'tree'.",
        examples: ["Sie", "wie", "vier"],
      },
    ],
  },
  {
    pair: "SP & ST (Word Beginnings)",
    rule: "At the start of words or stems, 'S' morphs into 'Sh'!",
    subRules: [
      {
        combo: "SP = [SHP]",
        desc: "Pronounce 'sp' as 'shp'.",
        examples: ["die Sprache", "spät"],
      },
      {
        combo: "ST = [SHT]",
        desc: "Pronounce 'st' as 'sht'.",
        examples: ["der Student", "die Stadt"],
      },
    ],
  },
  {
    pair: "CH (Ach-Laut vs. Ich-Laut)",
    rule: "German 'ch' changes based on the preceding vowel:",
    subRules: [
      {
        combo: "Ach-Laut (after a, o, u)",
        desc: "Deep throaty friction at back of palate (Scottish 'loch').",
        examples: ["das Buch", "die Nacht"],
      },
      {
        combo: "Ich-Laut (after e, i, ä, ö, ü)",
        desc: "Soft whispering air against upper front teeth (kitten's hiss).",
        examples: ["ich", "nicht"],
      },
    ],
  },
  {
    pair: "Word Ending -IG (Soft Ich-Laut)",
    rule: "In standard Hochdeutsch, word-ending '-ig' is pronounced like soft '-ich' [ɪç]:",
    subRules: [
      {
        combo: "-IG = [IKH]",
        desc: "Pronounced with a soft hissing Ich-Laut, NOT a hard 'k' or 'g'.",
        examples: ["richtig", "wichtig", "zwanzig"],
      },
    ],
  },
];

export function GermanLessonExplorer() {
  const [alphabetFilter, setAlphabetFilter] = useState<"all" | "shifts" | "vowels" | "consonants">("all");
  const [selectedLetter, setSelectedLetter] = useState<string>("W");

  const filteredAlphabet = useMemo(() => {
    if (alphabetFilter === "shifts") return GERMAN_ALPHABET.filter((l) => l.isShift);
    if (alphabetFilter === "vowels") return GERMAN_ALPHABET.filter((l) => l.isVowel);
    if (alphabetFilter === "consonants") return GERMAN_ALPHABET.filter((l) => !l.isVowel);
    return GERMAN_ALPHABET;
  }, [alphabetFilter]);

  const activeLetterItem = GERMAN_ALPHABET.find((l) => l.char === selectedLetter) || GERMAN_ALPHABET[0]!;

  return (
    <div className="max-w-3xl w-full mx-auto space-y-12 py-4 pb-24 text-[#18191E]">
      {/* ========================================================================= */}
      {/* LESSON INTRODUCTION */}
      {/* ========================================================================= */}
      <header className="space-y-4">
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
          Willkommen! In German, what you see is what you say. Unlike English, where spelling rules constantly surprise you, German pronunciation is remarkably logical and consistent. Once you learn how these sounds work together, you will be able to read almost any German word aloud with confidence. Let&apos;s go through each concept together one by one.
        </p>

        {/* Teacher Advice Callout */}
        <div className="p-4 sm:p-5 rounded-xl bg-neutral-50/80 border-l-2 border-[#18191E] text-neutral-800 space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-900">
              Teacher&apos;s Golden Rule
            </span>
          </div>
          <p className="text-xs sm:text-sm italic leading-relaxed text-neutral-700">
            &ldquo;When reading German, never guess—trust the letters. Vowels are pure and never glide into unintended diphthongs. Keep your mouth crisp, articulate each syllable, and memorize the four consonant shifts (W, V, J, Z).&rdquo;
          </p>
        </div>

        {/* Learning Highlights */}
        <div className="pt-2 flex flex-wrap gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 font-medium text-neutral-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#18191E]" />
            <span>26 Standard Letters</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 font-medium text-neutral-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#18191E]" />
            <span>4 Special Characters (Ä, Ö, Ü, ß)</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 font-medium text-neutral-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#18191E]" />
            <span>4 Consonant Traps (W, V, J, Z)</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 font-medium text-neutral-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#18191E]" />
            <span>Diphthongs &amp; Sound Rules</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 font-medium text-neutral-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#18191E]" />
            <span>Practice Dialogue in Munich</span>
          </span>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 1. THE 26 STANDARD LETTERS */}
      {/* ========================================================================= */}
      <section className="border-t border-neutral-200/80 pt-10 space-y-6">
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-black text-[#18191E] tracking-tight">
            1. The 26 Standard Letters (A bis Z)
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Let&apos;s start right at the beginning with the 26 base letters. You will recognize all of these letters from English, but German gives each one a pure, steady sound. Vowels never waver into extra syllables, and consonants are crisp and precise. Select any letter in the bar below to inspect its pronunciation, mouth position, and example word:
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-1 p-1 rounded-xl bg-neutral-100 border border-neutral-200 text-xs">
            {(
              [
                { id: "all", label: "All Letters (26)" },
                { id: "vowels", label: "Vowels (5)" },
                { id: "consonants", label: "Consonants (21)" },
                { id: "shifts", label: "Key Traps (4)" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setAlphabetFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all cursor-pointer ${
                  alphabetFilter === tab.id
                    ? "bg-[#18191E] text-white shadow-xs"
                    : "text-neutral-600 hover:text-black hover:bg-white/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-[11px] text-neutral-400 font-medium">
            Showing {filteredAlphabet.length} letters
          </span>
        </div>

        {/* Quick Letter Navigation Ribbon */}
        <div className="overflow-x-auto pb-2 flex items-center gap-1.5 scrollbar-thin">
          {filteredAlphabet.map((item) => {
            const isSelected = selectedLetter === item.char;
            return (
              <button
                key={item.char}
                type="button"
                onClick={() => {
                  setSelectedLetter(item.char);
                }}
                className={`min-w-9 h-9 rounded-xl font-extrabold text-xs flex items-center justify-center transition-all cursor-pointer shrink-0 border ${
                  isSelected
                    ? "bg-[#18191E] text-white border-[#18191E] scale-105 shadow-xs"
                    : "bg-white hover:bg-neutral-100 text-neutral-800 border-neutral-200"
                }`}
                title={`Select letter ${item.char}`}
              >
                {item.char}
              </button>
            );
          })}
        </div>

        {/* Active Letter Inspector Strip */}
        {activeLetterItem && (
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-xl bg-[#18191E] text-white flex flex-col items-center justify-center shadow-xs shrink-0">
                  <span className="text-xl font-black">{activeLetterItem.char}</span>
                  <span className="text-[9px] font-mono font-bold text-neutral-300">
                    [{activeLetterItem.name}]
                  </span>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-[#18191E]">
                      Letter &ldquo;{activeLetterItem.char}&rdquo;
                    </span>
                    {activeLetterItem.isShift && (
                      <span className="text-[9px] font-extrabold text-neutral-700 bg-neutral-200/80 px-2 py-0.5 rounded">
                        Critical Shift
                      </span>
                    )}
                    {activeLetterItem.isVowel && (
                      <span className="text-[9px] font-extrabold text-neutral-600 bg-neutral-200/60 px-2 py-0.5 rounded">
                        Pure Vowel
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-medium text-neutral-700">
                    {activeLetterItem.sound}
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    Mouth position: {activeLetterItem.mouthTip}
                  </p>
                  {activeLetterItem.variants && (
                    <p className="text-[11px] text-neutral-600 bg-neutral-100/90 border border-neutral-200/80 rounded-md px-2.5 py-1.5 mt-1 leading-relaxed">
                      <span className="font-bold text-[#18191E]">Pronunciation Variations: </span>
                      {activeLetterItem.variants}
                    </p>
                  )}
                </div>
              </div>

              {/* Pronunciation Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white border border-neutral-200 text-neutral-800 shadow-2xs shrink-0">
                <span className="text-neutral-400 font-mono text-[10px] uppercase">Pronunciation:</span>
                <span className="font-mono font-bold text-[#18191E]">[{activeLetterItem.name}]</span>
              </div>
            </div>

            {/* Contextual Example Word */}
            <div className="pt-3 border-t border-neutral-200/70 flex flex-wrap items-center gap-3 text-xs">
              <span className="text-neutral-500 font-bold uppercase tracking-wider text-[10px]">
                Example Word:
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-[#18191E]">
                <span className="font-bold">{activeLetterItem.example}</span>
                <span className="text-neutral-300">•</span>
                <span className="text-neutral-600 font-medium">{activeLetterItem.meaning}</span>
                {GERMAN_DICTIONARY[activeLetterItem.example]?.phonetic && (
                  <>
                    <span className="text-neutral-300">•</span>
                    <span className="text-neutral-500 font-mono text-[11px]">
                      {GERMAN_DICTIONARY[activeLetterItem.example]?.phonetic}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Alphabet Sound Reference Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {filteredAlphabet.map((item) => {
            const isSelected = selectedLetter === item.char;
            return (
              <div
                key={item.char}
                onClick={() => setSelectedLetter(item.char)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-2.5 group ${
                  isSelected
                    ? "bg-[#18191E] text-white border-[#18191E] shadow-sm"
                    : "bg-white hover:bg-neutral-50 border-neutral-200/90 text-neutral-900"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs ${
                        isSelected
                          ? "bg-white text-black"
                          : "bg-neutral-100 text-black border border-neutral-200"
                      }`}
                    >
                      {item.char}
                    </span>
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? "text-neutral-300" : "text-neutral-600"
                      }`}
                    >
                      [{item.name}]
                    </span>
                  </div>

                  {item.isShift && (
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                        isSelected
                          ? "bg-neutral-800 text-neutral-300"
                          : "bg-neutral-100 text-neutral-600"
                      }`}
                    >
                      Shift
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <p
                    className={`text-[11px] leading-snug font-medium ${
                      isSelected ? "text-neutral-300" : "text-neutral-600"
                    }`}
                  >
                    {item.sound}
                  </p>
                  <div
                    className={`px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between gap-1 border ${
                      isSelected
                        ? "bg-neutral-800 text-white border-neutral-700"
                        : "bg-neutral-50 text-neutral-800 border-neutral-200/80"
                    }`}
                  >
                    <span className="font-bold">{item.example}</span>
                    <span className={`text-[11px] ${isSelected ? "text-neutral-300" : "text-neutral-500"}`}>
                      {item.meaning}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE 4 SPECIAL CHARACTERS (UMLAUTS & ESZETT) */}
      {/* ========================================================================= */}
      <section className="border-t border-neutral-200/80 pt-10 space-y-6">
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-black text-[#18191E] tracking-tight">
            2. The Four Special Characters: Umlauts &amp; Eszett
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Now let&apos;s look at the four unique characters that make German look and sound distinctly German: the three Umlauts (Ä, Ö, Ü) and the Eszett (ß). Those two little dots aren&apos;t just decorative—they pull your tongue forward in your mouth and completely transform the meaning of a word (for example, turning one apple &ldquo;Apfel&rdquo; into many apples &ldquo;Äpfel&rdquo;). Study how each character is pronounced below:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {UMLAUTS_AND_ESZETT.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-neutral-50/70 border border-neutral-200/90 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 border-b border-neutral-200/70 pb-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl font-black text-[#18191E]">{item.char}</span>
                    <span className="text-xs font-bold text-neutral-500">
                      {item.name}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono font-bold text-neutral-600 bg-white border border-neutral-200 px-2 py-0.5 rounded-lg shadow-2xs">
                    [{item.phoneticGuide}]
                  </span>
                </div>

                <p className="text-xs text-neutral-700 font-medium leading-relaxed">
                  {item.sound}
                </p>

                <p className="text-[11px] text-neutral-500 leading-relaxed">
                  <span className="font-semibold text-neutral-700">Mouth Tip:</span> {item.mouthTip}
                </p>

                {/* Contrast pair */}
                <div className="text-[11px] text-neutral-600 bg-white p-2 rounded-lg border border-neutral-200/70">
                  <span className="font-semibold text-neutral-800">Contrast Pair: </span>
                  <span className="text-neutral-500">{item.pair.normal}</span>
                  <span className="mx-1 text-neutral-400">→</span>
                  <span className="font-bold text-[#18191E]">{item.pair.umlaut}</span>
                </div>
              </div>

              {/* Word Pills */}
              <div className="pt-2 border-t border-neutral-200/70 space-y-1.5">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                  Example Words:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.examples.map((word) => {
                    const dict = GERMAN_DICTIONARY[word];
                    return (
                      <span
                        key={word}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-white border border-neutral-200 text-[#18191E]"
                      >
                        <span className="font-bold">{word}</span>
                        {dict?.translation && (
                          <span className="text-neutral-500 text-[11px]">({dict.translation})</span>
                        )}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE 4 CRITICAL CONSONANT TRAPS (W, V, J, Z) */}
      {/* ========================================================================= */}
      <section className="border-t border-neutral-200/80 pt-10 space-y-6">
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-black text-[#18191E] tracking-tight">
            3. The Four Consonant Traps (W, V, J, Z)
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Pay extra attention here. These four letters exist in both English and German, but German pronounces them completely differently! This is where most beginners trip up. Remember these four rules: W is always &lsquo;V&rsquo;, V sounds like &lsquo;F&rsquo;, J sounds like &lsquo;Y&rsquo;, and Z sounds like &lsquo;TS&rsquo; (like the end of &ldquo;cats&rdquo;). Master these four, and you avoid 90% of beginner pronunciation mistakes:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {GERMAN_CONSONANT_SHIFTS.map((shift, sIdx) => (
            <div
              key={sIdx}
              className="p-4 sm:p-5 rounded-2xl bg-neutral-50/70 border border-neutral-200/90 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 border-b border-neutral-200/70 pb-2.5">
                  <span className="text-base font-black text-[#18191E]">
                    {shift.equation}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-neutral-600 bg-neutral-200/60 px-2 py-0.5 rounded">
                    [{shift.germanName}]
                  </span>
                </div>

                <p className="text-xs text-neutral-700 font-medium leading-relaxed">
                  {shift.rule}
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-200/70 space-y-2">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                  Practice Words:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {shift.examples.map((word) => {
                    const dict = GERMAN_DICTIONARY[word];
                    return (
                      <span
                        key={word}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-white border border-neutral-200 text-[#18191E]"
                      >
                        <span className="font-bold">{word}</span>
                        {dict?.translation && (
                          <span className="text-neutral-500 text-[11px]">({dict.translation})</span>
                        )}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ESSENTIAL DIPHTHONGS & CLUSTERS */}
      {/* ========================================================================= */}
      <section className="border-t border-neutral-200/80 pt-10 space-y-6">
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-black text-[#18191E] tracking-tight">
            4. When Letters Combine: Diphthongs &amp; Clusters
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Now let&apos;s see what happens when letters sit side by side. Unlike English with its silent letters and unpredictable spellings, German vowel and consonant pairings follow strict, regular acoustic formulas every single time. The golden rule to remember is between &lsquo;EI&rsquo; and &lsquo;IE&rsquo;: in German, the second vowel always does the talking! Here is how each combination is pronounced:
          </p>
        </div>

        <div className="space-y-4">
          {DIPHTHONGS_AND_CLUSTERS.map((group, gIdx) => (
            <div
              key={gIdx}
              className="p-4 sm:p-5 rounded-2xl bg-neutral-50/70 border border-neutral-200/90 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-neutral-200/70 pb-2.5">
                <h3 className="text-sm font-extrabold text-[#18191E]">
                  {group.pair}
                </h3>
                <span className="text-xs italic text-neutral-600">
                  {group.rule}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {group.subRules.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-white border border-neutral-200/70 space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-black text-[#18191E]">
                        {sub.combo}
                      </span>
                      <span className="text-[11px] text-neutral-500 font-medium">
                        {sub.desc}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {sub.examples.map((word) => {
                        const dict = GERMAN_DICTIONARY[word];
                        return (
                          <span
                            key={word}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-neutral-50 border border-neutral-200 text-[#18191E]"
                          >
                            <span className="font-bold">{word}</span>
                            {dict?.translation && (
                              <span className="text-neutral-500 text-[11px]">({dict.translation})</span>
                            )}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PRAXIS-DIALOG: ANMELDUNG IN MÜNCHEN */}
      {/* ========================================================================= */}
      <section className="border-t border-neutral-200/80 pt-10 space-y-6">
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-black text-[#18191E] tracking-tight">
            5. Putting It Together: A Real Dialogue in Munich
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Here is how real German sounds in an everyday situation. Imagine arriving at the reception desk of a language school in Munich. Each German sentence is shown with its direct English translation below:
          </p>
        </div>

        {/* Clean, Direct Dialogue Cards */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200/80 space-y-3">
          <div className="border-b border-neutral-100 pb-2.5">
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
              Dialogue Flow • German with Direct English Translation
            </span>
          </div>

          <div className="space-y-3 pt-1">
            {DIALOGUE_LINES.map((line, lIdx) => (
              <div
                key={lIdx}
                className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-neutral-50/80 border border-neutral-200/80 transition-colors hover:bg-neutral-50"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-lg shrink-0 shadow-2xs">
                  {line.avatarChar}
                </div>

                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#18191E]">
                      {line.speaker}
                    </span>
                    {line.role && (
                      <span className="text-[10px] font-medium text-neutral-500 bg-neutral-200/60 px-1.5 py-0.5 rounded">
                        {line.role}
                      </span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base font-bold text-[#18191E] leading-snug">
                    {line.german}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-snug font-normal">
                    {line.english}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Noun Capitalization Note */}
        <div className="p-4 rounded-xl bg-neutral-50/80 border-l-2 border-[#18191E] text-xs sm:text-sm text-neutral-700 space-y-1">
          <div className="font-bold text-[#18191E] flex items-center gap-2">
            <span>🇩🇪 Teacher&apos;s Note: Universal Noun Capitalization</span>
          </div>
          <p className="leading-relaxed text-neutral-600">
            In German, every noun is capitalized without exception: <span className="font-bold text-[#18191E]">der Name</span> (the name), <span className="font-bold text-[#18191E]">der Nachname</span> (the surname), and <span className="font-bold text-[#18191E]">der Kursraum</span> (the classroom). This convention originated in the 17th century to help readers parse sentence roles quickly.
          </p>
        </div>
      </section>
    </div>
  );
}
