"use client";

import React, { useState, useMemo } from "react";
import {
  Volume2,
  CheckCircle2,
  Sparkles,
  BookOpen,
  MessageSquare,
  Eye,
  EyeOff,
  Languages,
  Check,
  Play,
  RotateCcw,
} from "lucide-react";
import { speechService } from "../lib/speech";

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
}

const GERMAN_ALPHABET: AlphabetLetter[] = [
  { char: 'A', letter: 'A a', name: 'aah', sound: "Open 'a' like in father", example: 'der Abend', meaning: 'evening', isVowel: true, dinName: 'Anton', mouthTip: 'Drop jaw naturally; relaxed open mouth.' },
  { char: 'B', letter: 'B b', name: 'beh', sound: "Like 'b' in bed", example: 'das Buch', meaning: 'book', isVowel: false, dinName: 'Berta', mouthTip: 'Both lips together with slight vocal release.' },
  { char: 'C', letter: 'C c', name: 'tseh', sound: "Crisp 'ts' before e/i; 'k' before a/o/u", example: 'das Café', meaning: 'café', isVowel: false, dinName: 'Cäsar', mouthTip: 'Tongue tip behind lower front teeth.' },
  { char: 'D', letter: 'D d', name: 'deh', sound: "Like 'd' in door", example: 'der Dank', meaning: 'thanks', isVowel: false, dinName: 'Dora', mouthTip: 'Tongue tip touches upper gums.' },
  { char: 'E', letter: 'E e', name: 'eeh', sound: "Open like 'pet' (short) or 'ay' (long)", example: 'das Essen', meaning: 'food', isVowel: true, dinName: 'Emil', mouthTip: 'Smile slightly; tongue arched forward.' },
  { char: 'F', letter: 'F f', name: 'eff', sound: "Like 'f' in find", example: 'der Freund', meaning: 'friend', isVowel: false, dinName: 'Friedrich', mouthTip: 'Upper teeth lightly press lower lip.' },
  { char: 'G', letter: 'G g', name: 'geh', sound: "Always hard 'g' like in go (never 'j')", example: 'gut', meaning: 'good', isVowel: false, dinName: 'Gustav', mouthTip: 'Back of tongue against soft palate.' },
  { char: 'H', letter: 'H h', name: 'hah', sound: "Breathed 'h' initially; silent lengthener after vowel", example: 'Hallo', meaning: 'hello', isVowel: false, dinName: 'Heinrich', mouthTip: 'Open breath from throat.' },
  { char: 'I', letter: 'I i', name: 'iih', sound: "Like 'ee' in see (long) or 'i' in sit", example: 'die Idee', meaning: 'idea', isVowel: true, dinName: 'Ida', mouthTip: 'Wide smile; tongue high near roof.' },
  { char: 'J', letter: 'J j', name: 'yott', sound: "Always like English 'y' in yes!", example: 'ja', meaning: 'yes', isShift: true, isVowel: false, dinName: 'Julius', mouthTip: "Middle tongue arches up, never 'dj'!" },
  { char: 'K', letter: 'K k', name: 'kah', sound: "Crisp aspirated 'k' like in kite", example: 'der Kaffee', meaning: 'coffee', isVowel: false, dinName: 'Kaufmann', mouthTip: 'Sharp burst of air from soft palate.' },
  { char: 'L', letter: 'L l', name: 'ell', sound: "Clear European 'l' on upper gums", example: 'die Lampe', meaning: 'lamp', isVowel: false, dinName: 'Ludwig', mouthTip: 'Tongue tip firmly against upper front teeth.' },
  { char: 'M', letter: 'M m', name: 'emm', sound: "Like 'm' in mother", example: 'die Musik', meaning: 'music', isVowel: false, dinName: 'Martha', mouthTip: 'Lips sealed, nasal resonance.' },
  { char: 'N', letter: 'N n', name: 'enn', sound: "Like 'n' in no", example: 'der Name', meaning: 'name', isVowel: false, dinName: 'Nordpol', mouthTip: 'Tongue touches upper ridge.' },
  { char: 'O', letter: 'O o', name: 'ohh', sound: "Pure round 'o' like in so", example: 'die Oper', meaning: 'opera', isVowel: true, dinName: 'Otto', mouthTip: "Round lips into an 'O' circle." },
  { char: 'P', letter: 'P p', name: 'peh', sound: "Crisp 'p' like in park", example: 'die Post', meaning: 'post office', isVowel: false, dinName: 'Paula', mouthTip: 'Lips press together with gentle pop.' },
  { char: 'Q', letter: 'Q q', name: 'kuh', sound: "Always followed by u: sounds like 'kv'", example: 'bequem', meaning: 'comfortable', isVowel: false, dinName: 'Quelle', mouthTip: "Pronounce as 'k' immediately followed by 'v'." },
  { char: 'R', letter: 'R r', name: 'err', sound: "Throat-trilled (uvular) or gently tapped", example: 'das Radio', meaning: 'radio', isVowel: false, dinName: 'Richard', mouthTip: 'Gargle lightly at back of throat.' },
  { char: 'S', letter: 'S s', name: 'ess', sound: "Voiced 'z' before vowels; unvoiced at end", example: 'die Sonne', meaning: 'sun', isVowel: false, dinName: 'Samuel', mouthTip: "Buzz like 'z' when followed by vowel." },
  { char: 'T', letter: 'T t', name: 'teh', sound: "Sharp dental 't' like in tea", example: 'der Tag', meaning: 'day', isVowel: false, dinName: 'Theodor', mouthTip: 'Tongue strikes upper front teeth.' },
  { char: 'U', letter: 'U u', name: 'uuh', sound: "Deep 'oo' like in moon", example: 'die Uhr', meaning: 'clock', isVowel: true, dinName: 'Ulrich', mouthTip: 'Pucker lips forward tightly.' },
  { char: 'V', letter: 'V v', name: 'fau', sound: "Sounds like English 'f' in native German words!", example: 'der Vater', meaning: 'father', isShift: true, isVowel: false, dinName: 'Viktor', mouthTip: "Upper teeth on lower lip; blow like 'f'." },
  { char: 'W', letter: 'W w', name: 'veh', sound: "Always like English 'v' in victory! No English 'w'", example: 'das Wasser', meaning: 'water', isShift: true, isVowel: false, dinName: 'Wilhelm', mouthTip: "Never round lips like English 'w'; use teeth on lower lip." },
  { char: 'X', letter: 'X x', name: 'iks', sound: "Like 'ks' in taxi", example: 'das Taxi', meaning: 'taxi', isVowel: false, dinName: 'Xanthippe', mouthTip: "Quick blend of 'k' and 's'." },
  { char: 'Y', letter: 'Y y', name: 'üpsilon', sound: "Sounds like 'ü' in native words or 'y'", example: 'das Yoga', meaning: 'yoga', isVowel: false, dinName: 'Ypsilon', mouthTip: "Lips like 'oo', say 'ee'." },
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
    equation: "V = [F]",
    germanName: "fau",
    rule: "In native German words, 'V' sounds like English 'F' as in father. (In loanwords like 'Vase', it sounds like 'V').",
    examples: ["der Vater", "vier", "viel", "voll", "von"],
    translation: "father, four, much/many, full, of/from",
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
  },
  {
    speaker: "Gregor",
    german: "Guten Tag. Ich heiße Gregor Schubert.",
    english: "Good day. My name is Gregor Schubert.",
  },
  {
    speaker: "Nina Weber",
    german: "Entschuldigung, wie schreibt man den Nachnamen? Können Sie bitte buchstabieren?",
    english: "Excuse me, how do you spell the last name? Could you please spell it?",
  },
  {
    speaker: "Gregor",
    german: "Ja, natürlich: S - C - H - U - B - E - R - T.",
    english: "Yes, of course: S - C - H - U - B - E - R - T.",
  },
  {
    speaker: "Nina Weber",
    german: "Vielen Dank, Herr Schubert! Ihr Kursraum ist Nummer 12 im ersten Stock.",
    english: "Thank you very much, Mr. Schubert! Your classroom is number 12 on the first floor.",
  },
];

const PRACTICE_QUESTIONS = [
  {
    question: "How is the German letter 'W' in 'Wasser' (water) pronounced?",
    options: [
      "Like English 'W' in 'water'",
      "Like English 'V' in 'vase'",
      "Silent",
    ],
    answer: "Like English 'V' in 'vase'",
    explanation: "In German, the letter 'W' is consistently pronounced like the English 'V'. German has no English 'W' sound.",
  },
  {
    question: "How do you pronounce the number 'zehn' (ten)?",
    options: [
      "Like English 'zen'",
      "Like 'tsehn' with a sharp 'ts'",
      "Like 'kehn'",
    ],
    answer: "Like 'tsehn' with a sharp 'ts'",
    explanation: "The letter 'Z' in German always makes a crisp 'ts' sound, exactly as at the end of 'cats'.",
  },
  {
    question: "Which question asks someone to spell their name in German?",
    options: [
      "Wie heißen Sie?",
      "Woher kommen Sie?",
      "Wie schreibt man das?",
    ],
    answer: "Wie schreibt man das?",
    explanation: "'Wie schreibt man das?' means 'How do you write/spell that?' in German.",
  },
];

export function GermanLessonExplorer() {
  const [alphabetFilter, setAlphabetFilter] = useState<"all" | "shifts" | "vowels" | "consonants">("all");
  const [selectedLetter, setSelectedLetter] = useState<string>("W");
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);
  const [customSpelling, setCustomSpelling] = useState<string>("GREGOR");
  const [showTranslations, setShowTranslations] = useState<boolean>(true);

  // Practice state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});

  const speakAudio = (text: string, id: string) => {
    speechService.stop();
    setActivePlayingId(id);
    speechService.speak(text, {
      onEnd: () => setActivePlayingId(null),
      onError: () => setActivePlayingId(null),
    });
  };

  const filteredAlphabet = useMemo(() => {
    if (alphabetFilter === "shifts") return GERMAN_ALPHABET.filter((l) => l.isShift);
    if (alphabetFilter === "vowels") return GERMAN_ALPHABET.filter((l) => l.isVowel);
    if (alphabetFilter === "consonants") return GERMAN_ALPHABET.filter((l) => !l.isVowel);
    return GERMAN_ALPHABET;
  }, [alphabetFilter]);

  const activeLetterItem = GERMAN_ALPHABET.find((l) => l.char === selectedLetter) || GERMAN_ALPHABET[0]!;

  const spelledTokens = useMemo(() => {
    const clean = customSpelling.toUpperCase().replace(/[^A-ZÄÖÜß]/g, "");
    return clean.split("").map((char) => {
      const match = GERMAN_ALPHABET.find((item) => item.char === char);
      if (match) {
        return { char, dinName: match.dinName, phrase: `${char} wie ${match.dinName}` };
      }
      if (char === "Ä") return { char, dinName: "Ärger", phrase: "Ä wie Ärger" };
      if (char === "Ö") return { char, dinName: "Ökonom", phrase: "Ö wie Ökonom" };
      if (char === "Ü") return { char, dinName: "Übermut", phrase: "Ü wie Übermut" };
      if (char === "ß") return { char, dinName: "Eszett", phrase: "scharfes S" };
      return { char, dinName: char, phrase: char };
    });
  }, [customSpelling]);

  return (
    <div className="max-w-4xl w-full mx-auto space-y-8 py-2 pb-16">
      {/* 1. EDITORIAL HEADER & WELCOME */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-500">
          <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 font-bold">
            Chapter 1
          </span>
          <span>•</span>
          <span>15 mins</span>
          <span>•</span>
          <span className="font-bold text-neutral-900">CEFR A1</span>
          <span>•</span>
          <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Authentic German Audio
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#18191E] tracking-tight leading-tight">
          Lesson 1: Das Deutsche Alphabet & German Phonetics
        </h1>

        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
          Welcome to German! German pronunciation is remarkably logical and phonetic. Unlike English, where vowels and consonants shift unpredictably, German letters correspond reliably to consistent sounds. In this lesson, you will master the 26 letters of the German alphabet, crucial consonant shifts (<span className="font-bold">W, V, J, Z</span>), and the official German spelling alphabet (<span className="italic">Buchstabier-Alphabet DIN 5009</span>).
        </p>

        {/* Teacher Note Quote */}
        <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border-l-4 border-[#18191E] text-neutral-800">
          <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-1">
            Instructor Tip • Hochdeutsch Phonetics
          </span>
          <p className="text-xs sm:text-sm italic leading-relaxed">
            &ldquo;When reading German, never guess—trust the letters. Remember that &lsquo;W&rsquo; always sounds like English &lsquo;V&rsquo; (das Wasser), &lsquo;V&rsquo; in native words sounds like &lsquo;F&rsquo; (der Vater, vier), &lsquo;J&rsquo; sounds like &lsquo;Y&rsquo; in yes (ja, das Jahr), and &lsquo;Z&rsquo; is always a sharp &lsquo;ts&rsquo; (zehn, die Zeit).&rdquo;
          </p>
        </div>
      </div>

      {/* 2. WHAT YOU WILL ACHIEVE (CLEAN CHECKLIST) */}
      <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 border-b border-neutral-100 pb-3">
          <CheckCircle2 className="w-4 h-4 text-[#18191E]" />
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#18191E]">
            What You Will Achieve
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          <div className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-full bg-[#18191E] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
              ✓
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 leading-snug">
              <span className="font-bold text-[#18191E]">Master authentic pronunciation</span> for all 26 German alphabet letters (A bis Z).
            </p>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-full bg-[#18191E] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
              ✓
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 leading-snug">
              <span className="font-bold text-[#18191E]">Eliminate beginner traps</span> across the 4 key consonant shifts (W, V, J, Z).
            </p>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-full bg-[#18191E] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
              ✓
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 leading-snug">
              <span className="font-bold text-[#18191E]">Spell names aloud (Buchstabieren)</span> fluently using the official DIN 5009 standard.
            </p>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-full bg-[#18191E] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
              ✓
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 leading-snug">
              <span className="font-bold text-[#18191E]">Conduct real-world inquiries</span> at reception, phone registration, and check-ins.
            </p>
          </div>
        </div>
      </div>

      {/* 3. INTERACTIVE ALPHABET SOUND EXPLORER */}
      <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-6">
        <div className="border-b border-neutral-100 pb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
              Part 1 • Interactive Explorer
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-[#18191E] tracking-tight">
              1. Das Deutsche Alphabet (A bis Z)
            </h2>
            <p className="text-xs text-neutral-500 mt-0.5">
              Click any letter, sound name, or example word to hear authentic native German pronunciation.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-100 border border-neutral-200 text-xs">
            {(
              [
                { id: "all", label: "All (26)" },
                { id: "shifts", label: "Key Shifts (4)" },
                { id: "vowels", label: "Vowels (5)" },
                { id: "consonants", label: "Consonants" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
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
        </div>

        {/* Quick Jump Horizontal Ribbon */}
        <div className="overflow-x-auto pb-2 flex items-center gap-1.5">
          {filteredAlphabet.map((item) => {
            const isSelected = selectedLetter === item.char;
            return (
              <button
                key={item.char}
                onClick={() => {
                  setSelectedLetter(item.char);
                  speakAudio(item.char, `ribbon-${item.char}`);
                }}
                className={`min-w-9 h-9 rounded-xl font-extrabold text-xs flex items-center justify-center transition-all cursor-pointer shrink-0 border ${
                  isSelected
                    ? "bg-[#18191E] text-white border-[#18191E] scale-105 shadow-xs"
                    : "bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border-neutral-200"
                }`}
                title={`Select & pronounce ${item.char}`}
              >
                {item.char}
              </button>
            );
          })}
        </div>

        {/* Active Letter Inspector Card */}
        {activeLetterItem && (
          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => speakAudio(activeLetterItem.char, `inspector-${activeLetterItem.char}`)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-neutral-300 flex flex-col items-center justify-center shadow-xs hover:border-black transition-all cursor-pointer group shrink-0"
                  title="Click to pronounce letter"
                >
                  <span className="text-xl sm:text-2xl font-black text-[#18191E]">
                    {activeLetterItem.letter}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-neutral-500 mt-0.5">
                    [{activeLetterItem.name}]
                  </span>
                </button>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-[#18191E]">
                      Letter &ldquo;{activeLetterItem.char}&rdquo;
                    </span>
                    {activeLetterItem.isShift && (
                      <span className="text-[10px] font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                        Critical Shift
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-neutral-700">
                    {activeLetterItem.sound}
                  </p>
                  <p className="text-xs text-neutral-500">
                    💡 <span className="font-semibold">Mouth position:</span> {activeLetterItem.mouthTip}
                  </p>
                </div>
              </div>
            </div>

            {/* Targeted Sound Buttons */}
            <div className="pt-3 border-t border-neutral-200/80">
              <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                Click to Hear Specific Sound:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => speakAudio(activeLetterItem.char, `btn-char-${activeLetterItem.char}`)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    activePlayingId === `btn-char-${activeLetterItem.char}`
                      ? "bg-[#18191E] text-white border-[#18191E]"
                      : "bg-white hover:bg-neutral-100 text-[#18191E] border-neutral-200"
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Letter &ldquo;{activeLetterItem.char}&rdquo;</span>
                </button>

                <button
                  type="button"
                  onClick={() => speakAudio(activeLetterItem.name, `btn-name-${activeLetterItem.char}`)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    activePlayingId === `btn-name-${activeLetterItem.char}`
                      ? "bg-[#18191E] text-white border-[#18191E]"
                      : "bg-white hover:bg-neutral-100 text-[#18191E] border-neutral-200"
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Sound [{activeLetterItem.name}]</span>
                </button>

                <button
                  type="button"
                  onClick={() => speakAudio(activeLetterItem.example, `btn-ex-${activeLetterItem.char}`)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    activePlayingId === `btn-ex-${activeLetterItem.char}`
                      ? "bg-[#18191E] text-white border-[#18191E]"
                      : "bg-white hover:bg-neutral-100 text-[#18191E] border-neutral-200"
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Word: &ldquo;{activeLetterItem.example}&rdquo;</span>
                </button>

                <button
                  type="button"
                  onClick={() => speakAudio(activeLetterItem.dinName, `btn-din-${activeLetterItem.char}`)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    activePlayingId === `btn-din-${activeLetterItem.char}`
                      ? "bg-[#18191E] text-white border-[#18191E]"
                      : "bg-white hover:bg-neutral-100 text-[#18191E] border-neutral-200"
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>DIN 5009: &ldquo;{activeLetterItem.dinName}&rdquo;</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 4-Column Responsive Alphabet Sound Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredAlphabet.map((item) => {
            const isSelected = selectedLetter === item.char;
            return (
              <div
                key={item.char}
                onClick={() => setSelectedLetter(item.char)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-3 group ${
                  isSelected
                    ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                    : "bg-neutral-50/80 hover:bg-neutral-100/90 border-neutral-200 text-neutral-900"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm ${
                      isSelected ? "bg-white text-black" : "bg-white border border-neutral-200 text-black shadow-2xs"
                    }`}>
                      {item.char}
                    </span>
                    <span className={`text-xs font-bold ${isSelected ? "text-neutral-300" : "text-neutral-600"}`}>
                      [{item.name}]
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      speakAudio(item.char, `tile-char-${item.char}`);
                    }}
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-neutral-800 hover:bg-neutral-700 text-white"
                        : "bg-white hover:bg-neutral-200 border border-neutral-200 text-neutral-700"
                    }`}
                    title={`Pronounce ${item.char}`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-1">
                  <p className={`text-[11px] leading-tight font-medium ${isSelected ? "text-neutral-300" : "text-neutral-600"}`}>
                    {item.sound}
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      speakAudio(item.example, `tile-word-${item.char}`);
                    }}
                    className={`w-full mt-1 px-2 py-1 rounded-lg text-left text-xs font-bold transition-colors flex items-center justify-between gap-1.5 ${
                      isSelected
                        ? "bg-neutral-800 hover:bg-neutral-700 text-white"
                        : "bg-white hover:bg-neutral-200/90 border border-neutral-200 text-neutral-900"
                    }`}
                  >
                    <span className="truncate">{item.example}</span>
                    <Volume2 className="w-3 h-3 shrink-0 text-neutral-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. THE 4 ESSENTIAL CONSONANT SHIFTS SPOTLIGHT */}
      <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-6">
        <div className="border-b border-neutral-100 pb-3">
          <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
            Part 2 • Critical Contrast
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-[#18191E] tracking-tight">
            2. The 4 Essential Consonant Shifts
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Master these four mental anchors to prevent 90% of beginner German pronunciation mistakes:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {GERMAN_CONSONANT_SHIFTS.map((shift, sIdx) => (
            <div
              key={sIdx}
              className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 space-y-3.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-neutral-200/70 pb-2.5">
                  <span className="text-base font-black text-[#18191E]">
                    {shift.equation}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-neutral-600 bg-neutral-200/60 px-2 py-0.5 rounded">
                    [{shift.germanName}]
                  </span>
                </div>
                <p className="text-xs text-neutral-700 mt-2.5 leading-relaxed font-medium">
                  {shift.rule}
                </p>
              </div>

              {/* Individual Interactive Sound Chips */}
              <div className="pt-2 border-t border-neutral-200/70 space-y-2">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                  Tap Any Word to Hear It:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {shift.examples.map((word) => (
                    <button
                      key={word}
                      type="button"
                      onClick={() => speakAudio(word, `shift-${word}`)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                        activePlayingId === `shift-${word}`
                          ? "bg-[#18191E] text-white border-[#18191E]"
                          : "bg-white hover:bg-neutral-200 border-neutral-200 text-neutral-800"
                      }`}
                    >
                      <Volume2 className="w-3 h-3" />
                      <span>{word}</span>
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-neutral-500 italic">
                  Meaning: {shift.translation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. INTERACTIVE "SPELL YOUR NAME" STUDIO (DIN 5009) */}
      <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-5">
        <div className="border-b border-neutral-100 pb-3">
          <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
            Part 3 • Real-World Simulator
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-[#18191E] tracking-tight">
            3. Buchstabieren (Spelling Names Aloud • DIN 5009)
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Type any name or select a preset to generate the authentic German spelling alphabet tokens:
          </p>
        </div>

        {/* Input Row & Presets */}
        <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={customSpelling}
                onChange={(e) => setCustomSpelling(e.target.value)}
                placeholder="Type your name (e.g. GREGOR)..."
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-300 text-sm font-bold uppercase text-[#18191E] placeholder:normal-case placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {customSpelling && (
                <button
                  type="button"
                  onClick={() => setCustomSpelling("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black text-xs font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {spelledTokens.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  const full = spelledTokens.map((t) => `${t.char} wie ${t.dinName}`).join(". ");
                  speakAudio(full, "full-spelling");
                }}
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  activePlayingId === "full-spelling"
                    ? "bg-emerald-600 text-white"
                    : "bg-[#18191E] hover:bg-neutral-800 text-white shadow-xs"
                }`}
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Listen Full Sequence</span>
              </button>
            )}
          </div>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-bold text-neutral-500">Presets:</span>
            {["GREGOR", "NINA", "LUKAS", "ANNA", "BERLIN"].map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => setCustomSpelling(sample)}
                className={`px-3 py-1 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                  customSpelling === sample
                    ? "bg-[#18191E] text-white border-[#18191E]"
                    : "bg-white hover:bg-neutral-200 border-neutral-200 text-neutral-800"
                }`}
              >
                {sample}
              </button>
            ))}
          </div>

          {/* Generated Phonetic Spelled Badges */}
          <div className="pt-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {spelledTokens.map((token, tIdx) => (
                <button
                  key={tIdx}
                  type="button"
                  onClick={() => speakAudio(token.phrase, `token-${tIdx}`)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                    activePlayingId === `token-${tIdx}`
                      ? "bg-[#18191E] text-white border-[#18191E]"
                      : "bg-white hover:bg-neutral-100 border-neutral-200 text-neutral-900"
                  }`}
                  title="Click to pronounce"
                >
                  <div className="min-w-0">
                    <span className="text-xs font-black block">{token.char} wie</span>
                    <span className="text-sm font-bold truncate block">{token.dinName}</span>
                  </div>
                  <Volume2 className="w-4 h-4 shrink-0 opacity-60" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 6. REAL-WORLD CONVERSATION (CHAT FORMAT) */}
      <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-5">
        <div className="border-b border-neutral-100 pb-3 flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
              Part 4 • Practical Dialogue
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-[#18191E] tracking-tight">
              4. Praxis-Dialog (Anmeldung am Empfang in München)
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setShowTranslations((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-xs font-bold text-neutral-700 transition-colors cursor-pointer"
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{showTranslations ? "Hide English" : "Show English"}</span>
          </button>
        </div>

        <p className="text-xs text-neutral-500 italic">
          📍 Hotel / Language School Reception Desk in Munich (Netzwerk A1):
        </p>

        <div className="space-y-3 pt-2">
          {DIALOGUE_LINES.map((line, lIdx) => {
            const isReceptionist = line.speaker.includes("Nina");
            return (
              <div
                key={lIdx}
                className={`p-4 rounded-2xl border transition-all ${
                  isReceptionist
                    ? "bg-neutral-50 border-neutral-200/80"
                    : "bg-neutral-100/70 border-neutral-200 ml-4 sm:ml-10"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    {line.speaker}
                  </span>
                  <button
                    type="button"
                    onClick={() => speakAudio(line.german, `dialogue-${lIdx}`)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-neutral-700 hover:text-black cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Listen</span>
                  </button>
                </div>
                <div className="text-sm sm:text-base font-bold text-[#18191E]">
                  {line.german}
                </div>
                {showTranslations && (
                  <div className="text-xs text-neutral-500 mt-1 leading-relaxed">
                    {line.english}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 7. CULTURAL & LINGUISTIC INSIGHT */}
      <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="text-xl">🇩🇪</span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            German Linguistic Insight • Capitalization Rule
          </span>
        </div>
        <h3 className="text-base font-extrabold text-[#18191E]">
          Universal Noun Capitalization in German
        </h3>
        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
          German is the only major world language where every single noun is capitalized! Whether it is <span className="font-bold">&ldquo;der Name&rdquo;</span> (name), <span className="font-bold">&ldquo;das Buch&rdquo;</span> (book), or <span className="font-bold">&ldquo;die Musik&rdquo;</span> (music), capitalizing nouns was standardized in the 17th century to help readers immediately recognize the grammatical subjects and objects in complex texts.
        </p>
      </div>

      {/* 8. KNOWLEDGE CHECK & PRACTICE */}
      <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-6">
        <div className="border-b border-neutral-100 pb-3">
          <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
            Part 5 • Self-Assessment
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-[#18191E] tracking-tight">
            5. Knowledge Check & Practice
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Test your understanding of the German alphabet and consonant rules:
          </p>
        </div>

        <div className="space-y-4">
          {PRACTICE_QUESTIONS.map((q, qIdx) => {
            const isRevealed = Boolean(revealedAnswers[qIdx]);
            const selectedOpt = selectedAnswers[qIdx];

            return (
              <div
                key={qIdx}
                className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 space-y-3.5"
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-[#18191E] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    Q{qIdx + 1}
                  </span>
                  <p className="text-sm font-bold text-[#18191E] leading-relaxed">
                    {q.question}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pl-8">
                  {q.options.map((opt, optIdx) => {
                    const isChosen = selectedOpt === optIdx;
                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => setSelectedAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))}
                        className={`px-3 py-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                          isChosen
                            ? "bg-[#18191E] text-white border-[#18191E] shadow-2xs"
                            : "bg-white hover:bg-neutral-100 text-neutral-800 border-neutral-200"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                <div className="pl-8 pt-1">
                  <button
                    type="button"
                    onClick={() => setRevealedAnswers((prev) => ({ ...prev, [qIdx]: !prev[qIdx] }))}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-800 hover:text-black cursor-pointer"
                  >
                    {isRevealed ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Hide Explanation</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Verify Answer &amp; Explanation</span>
                      </>
                    )}
                  </button>

                  {isRevealed && (
                    <div className="mt-3 p-3.5 rounded-xl bg-white border border-neutral-200 text-xs space-y-1">
                      <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Correct Answer: {q.answer}</span>
                      </div>
                      <p className="text-neutral-600 leading-relaxed pl-5">
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
