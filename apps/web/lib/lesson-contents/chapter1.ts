import { LessonContent } from "../api";

export const CHAPTER_1_LESSONS: Record<string, LessonContent> = {
  "a1-ch1-l1": {
    "overview": "Welcome to German! German pronunciation is remarkably logical and phonetic. Unlike English, where vowels and consonants shift unpredictably, German letters correspond reliably to consistent sounds. In this lesson, you will master the 26 letters of the German alphabet, crucial consonant shifts (W, V, J, Z), and the official German spelling alphabet (Buchstabier-Alphabet).",
    "canDo": "Can spell your first and last name aloud in German, recognize essential consonant sounds (W, V, J, Z), and understand spelling in official contexts like hotel check-in or course registration.",
    "teacherNote": "Herzlich willkommen! When reading German, never guess—trust the letters. Remember that 'W' always sounds like English 'V' (das Wasser), 'V' in native words sounds like 'F' (der Vater, vier), 'J' sounds like 'Y' in yes (ja, das Jahr), and 'Z' is always a sharp 'ts' (zehn, die Zeit).",
    "sections": [
      {
        "title": "1. Das Deutsche Alphabet (A bis Z)",
        "description": "Listen to and pronounce each letter with its authentic German name:",
        "table": {
          "headers": [
            "Buchstabe",
            "Name",
            "Lautwert (Sound)",
            "Beispiel (Example)"
          ],
          "rows": [
            [
              "A a",
              "aah",
              "open 'a' like in father",
              "der Abend (evening)"
            ],
            [
              "B b",
              "beh",
              "like 'b' in bed",
              "das Buch (book)"
            ],
            [
              "C c",
              "tseh",
              "crisp 'ts' before e/i",
              "das Café (café)"
            ],
            [
              "D d",
              "deh",
              "like 'd' in door",
              "der Danke (thanks)"
            ],
            [
              "E e",
              "eeh",
              "open like 'e' in pet or long like 'ay'",
              "das Essen (food)"
            ],
            [
              "F f",
              "eff",
              "like 'f' in find",
              "der Freund (friend)"
            ],
            [
              "G g",
              "geh",
              "always hard like 'g' in go",
              "gut (good)"
            ],
            [
              "H h",
              "hah",
              "breathed 'h' at start; silent lengthener after vowel",
              "Hallo (hello)"
            ],
            [
              "I i",
              "iih",
              "like 'ee' in see",
              "die Idee (idea)"
            ],
            [
              "J j",
              "yott",
              "sounds like English 'y' in yes!",
              "ja (yes)"
            ],
            [
              "K k",
              "kah",
              "crisp 'k' like in kite",
              "der Kaffee (coffee)"
            ],
            [
              "L l",
              "ell",
              "clear European 'l' on upper gums",
              "die Lampe (lamp)"
            ],
            [
              "M m",
              "emm",
              "like 'm' in mother",
              "die Musik (music)"
            ],
            [
              "N n",
              "enn",
              "like 'n' in no",
              "der Name (name)"
            ],
            [
              "O o",
              "ohh",
              "pure round 'o' like in so",
              "die Oper (opera)"
            ],
            [
              "P p",
              "peh",
              "crisp 'p' like in park",
              "die Post (post office)"
            ],
            [
              "Q q",
              "kuh",
              "always followed by u: sounds like 'kv'",
              "bequem (comfortable)"
            ],
            [
              "R r",
              "err",
              "throat-trilled or softly tapped",
              "das Radio (radio)"
            ],
            [
              "S s",
              "ess",
              "voiced like 'z' before vowels; unvoiced at end",
              "die Sonne (sun) / das Glas"
            ],
            [
              "T t",
              "teh",
              "sharp 't' like in tea",
              "der Tag (day)"
            ],
            [
              "U u",
              "uuh",
              "deep 'oo' like in moon",
              "die Uhr (clock)"
            ],
            [
              "V v",
              "fau",
              "mostly sounds like 'f' in father!",
              "der Vater (father)"
            ],
            [
              "W w",
              "veh",
              "sounds like English 'v' in victory!",
              "das Wasser (water)"
            ],
            [
              "X x",
              "iks",
              "like 'ks' in taxi",
              "das Taxi (taxi)"
            ],
            [
              "Y y",
              "üpsilon",
              "sounds like 'ü' or 'y'",
              "das Yoga (yoga)"
            ],
            [
              "Z z",
              "tsett",
              "always sharp 'ts' like in cats!",
              "die Zeit (time)"
            ]
          ]
        }
      },
      {
        "title": "2. The 4 Essential Consonant Shifts",
        "description": "These four mental anchors will prevent 90% of pronunciation errors for beginners:",
        "items": [
          {
            "term": "W = [V]",
            "pronunciation": "veh",
            "meaning": "Pronounced like English 'V'. German does not have the English 'W' sound!",
            "example": "das Wasser, Wien, wer, wie, woher"
          },
          {
            "term": "V = [F]",
            "pronunciation": "fau",
            "meaning": "Pronounced like English 'F' in native words (Vater, vier, viel, voll).",
            "example": "der Vater, vier, vor, von"
          },
          {
            "term": "J = [Y]",
            "pronunciation": "yott",
            "meaning": "Pronounced like English 'Y' in yes.",
            "example": "ja, das Jahr, jetzt, jung"
          },
          {
            "term": "Z = [TS]",
            "pronunciation": "tsett",
            "meaning": "Always a sharp 'ts' sound, exactly like the end of 'cats'.",
            "example": "zehn, die Zeit, das Zimmer, zusammen"
          }
        ]
      },
      {
        "title": "3. Buchstabieren (Spelling Names Aloud)",
        "description": "In official registration and phone calls, you will frequently be asked: 'Wie schreibt man das?' (How do you spell that?). The standard German spelling alphabet pairs letters with well-known names:",
        "table": {
          "headers": [
            "Buchstabe",
            "Buchstabier-Name (DIN 5009)",
            "Beispiel im Alltag"
          ],
          "rows": [
            [
              "A wie Anton",
              "Anton",
              "A wie Anton"
            ],
            [
              "B wie Berta",
              "Berta",
              "B wie Berta"
            ],
            [
              "C wie Cäsar",
              "Cäsar",
              "C wie Cäsar"
            ],
            [
              "D wie Dora",
              "Dora",
              "D wie Dora"
            ],
            [
              "E wie Emil",
              "Emil",
              "E wie Emil"
            ],
            [
              "F wie Friedrich",
              "Friedrich",
              "F wie Friedrich"
            ],
            [
              "G wie Gustav",
              "Gustav",
              "G wie Gustav"
            ],
            [
              "H wie Heinrich",
              "Heinrich",
              "H wie Heinrich"
            ],
            [
              "I wie Ida",
              "Ida",
              "I wie Ida"
            ],
            [
              "J wie Julius",
              "Julius",
              "J wie Julius"
            ],
            [
              "K wie Kaufmann",
              "Kaufmann",
              "K wie Kaufmann"
            ],
            [
              "L wie Ludwig",
              "Ludwig",
              "L wie Ludwig"
            ],
            [
              "M wie Martha",
              "Martha",
              "M wie Martha"
            ],
            [
              "N wie Nordpol",
              "Nordpol",
              "N wie Nordpol"
            ],
            [
              "O wie Otto",
              "Otto",
              "O wie Otto"
            ],
            [
              "P wie Paula",
              "Paula",
              "P wie Paula"
            ],
            [
              "S wie Samuel",
              "Samuel",
              "S wie Samuel"
            ],
            [
              "T wie Theodor",
              "Theodor",
              "T wie Theodor"
            ],
            [
              "U wie Ulrich",
              "Ulrich",
              "U wie Ulrich"
            ],
            [
              "V wie Viktor",
              "Viktor",
              "V wie Viktor"
            ],
            [
              "W wie Wilhelm",
              "Wilhelm",
              "W wie Wilhelm"
            ],
            [
              "Z wie Zacharias",
              "Zacharias",
              "Z wie Zacharias"
            ]
          ]
        }
      }
    ],
    "dialogue": {
      "context": "Anmeldung am Empfang der Sprachschule in München (Netzwerk A1):",
      "lines": [
        {
          "speaker": "Nina Weber",
          "german": "Guten Tag! Herzlich willkommen. Wie heißen Sie bitte?",
          "english": "Good day! Welcome. What is your name, please?"
        },
        {
          "speaker": "Gregor",
          "german": "Guten Tag. Ich heiße Gregor Schubert.",
          "english": "Good day. My name is Gregor Schubert."
        },
        {
          "speaker": "Nina Weber",
          "german": "Entschuldigung, wie schreibt man den Nachnamen? Können Sie bitte buchstabieren?",
          "english": "Excuse me, how do you spell the last name? Could you please spell it?"
        },
        {
          "speaker": "Gregor",
          "german": "Ja, natürlich: S - C - H - U - B - E - R - T.",
          "english": "Yes, of course: S - C - H - U - B - E - R - T."
        },
        {
          "speaker": "Nina Weber",
          "german": "Vielen Dank, Herr Schubert! Ihr Kursraum ist Nummer 12 im ersten Stock.",
          "english": "Thank you very much, Mr. Schubert! Your classroom is number 12 on the first floor."
        }
      ]
    },
    "funFact": {
      "title": "Universal Noun Capitalization in German",
      "content": "German is the only major world language where every single noun is capitalized! Whether it is 'der Name' (name), 'das Buch' (book), or 'die Musik' (music), capitalizing nouns was standardized in the 17th century to help readers instantly distinguish subjects and objects in long philosophical and literary texts."
    },
    "practice": [
      {
        "question": "How is the German letter 'W' in 'Wasser' (water) pronounced?",
        "options": [
          "Like English 'W' in 'water'",
          "Like English 'V' in 'vase'",
          "Silent"
        ],
        "answer": "Like English 'V' in 'vase'",
        "explanation": "In German, the letter 'W' is consistently pronounced like the English 'V'."
      },
      {
        "question": "How do you pronounce the number 'zehn' (ten)?",
        "options": [
          "Like English 'zen'",
          "Like 'tsehn' with a sharp 'ts'",
          "Like 'kehn'"
        ],
        "answer": "Like 'tsehn' with a sharp 'ts'",
        "explanation": "The letter 'Z' in German always makes a crisp 'ts' sound, exactly as in 'cats'."
      },
      {
        "question": "Which question asks someone to spell their name?",
        "options": [
          "Wie heißen Sie?",
          "Woher kommen Sie?",
          "Wie schreibt man das?"
        ],
        "answer": "Wie schreibt man das?",
        "explanation": "'Wie schreibt man das?' means 'How do you spell/write that?' in German."
      }
    ]
  },
  "a1-ch1-l2": {
    "overview": "German features four characters you won't find in the standard English alphabet: the three Umlauts (ä, ö, ü) and the unique ligature Eszett (ß). In this lesson, you will master mouth positioning for these authentic sounds, learn the golden rule for diphthongs (ei vs. ie), and master hard vs. soft 'ch'.",
    "canDo": "Can articulate ä, ö, ü with accurate lip positioning, avoid the #1 beginner trap between 'ei' and 'ie', and distinguish the soft 'ich'-sound from the hard 'ach'-sound.",
    "teacherNote": "The two dots above ä, ö, and ü aren't decorations—they represent a historical shorthand for a tiny letter 'e' placed above the vowel! If you don't have a German keyboard, write 'ae', 'oe', and 'ue'.",
    "sections": [
      {
        "title": "1. The 3 Umlauts (Die Umlaute: Ä, Ö, Ü)",
        "description": "Train your facial muscles with these precise mouth shapes:",
        "table": {
          "headers": [
            "Umlaut",
            "Mundstellung (Mouth Shape)",
            "Minimal Pair (Contrast)",
            "Bedeutung (Meaning)"
          ],
          "rows": [
            [
              "Ä ä",
              "Open mouth wide, pronounce 'eh' like in air",
              "der Apfel / die Äpfel",
              "the apple / the apples"
            ],
            [
              "Ö ö",
              "Shape lips into an 'O', then try to say 'ee'",
              "schon / schön",
              "already / beautiful"
            ],
            [
              "Ü ü",
              "Pucker lips as if to whistle, then say 'ee'",
              "die Mutter / die Mütter",
              "the mother / the mothers"
            ]
          ]
        }
      },
      {
        "title": "2. The Golden Rule of Diphthongs: 'ei' vs. 'ie'",
        "description": "This is the most common beginner error. Always pronounce the SECOND letter:",
        "items": [
          {
            "term": "ei = [eye]",
            "pronunciation": "ay",
            "meaning": "Pronounce the second letter (i sounds like eye): mein, nein, das Eis, eins, der Wein (wine).",
            "example": "Wein (wine) sounds like 'Vine'."
          },
          {
            "term": "ie = [ee]",
            "pronunciation": "ee",
            "meaning": "Pronounce the second letter (e sounds like ee in see): Wien (Vienna), sieben, hier, wie, sie.",
            "example": "Wien (Vienna) sounds like 'Veen'."
          },
          {
            "term": "eu / äu = [oy]",
            "pronunciation": "oy",
            "meaning": "Both sound like 'oy' in boy: neu (new), heute (today), Europa, die Häuser (houses).",
            "example": "Neu in Deutschland? (New in Germany?)"
          }
        ]
      },
      {
        "title": "3. The Eszett (ß) & The Two Faces of 'ch'",
        "description": "Understanding when 'ch' is whispered versus cleared in the throat:",
        "table": {
          "headers": [
            "Laut",
            "Regel (Phonetic Rule)",
            "Beispiele (Examples)"
          ],
          "rows": [
            [
              "ß (Eszett)",
              "Sharp unvoiced double-s after long vowels and diphthongs.",
              "die Straße (street), groß (big), heiß (hot), heißen"
            ],
            [
              "Ich-Laut (soft ch)",
              "Whispered hiss against palate after e, i, ä, ö, ü, l, n, r.",
              "ich (I), nicht (not), sprechen (to speak), das Mädchen"
            ],
            [
              "Ach-Laut (hard ch)",
              "Deep friction in throat after a, o, u, au.",
              "das Buch (book), die Nacht (night), die Woche, auch (also)"
            ]
          ]
        }
      }
    ],
    "dialogue": {
      "context": "In einem Wiener Kaffeehaus – Aussprache beim Bestellen (Netzwerk A1):",
      "lines": [
        {
          "speaker": "Gast",
          "german": "Entschuldigung, ist dieser Platz noch frei?",
          "english": "Excuse me, is this seat still free?"
        },
        {
          "speaker": "Kellner",
          "german": "Ja, bitte nehmen Sie Platz! Ein schöner Tag heute in Wien.",
          "english": "Yes, please have a seat! A beautiful day today in Vienna."
        },
        {
          "speaker": "Gast",
          "german": "Vielen Dank. Ich möchte bitte einen Kaffee und ein Stück Apfelstrudel.",
          "english": "Thank you very much. I would like a coffee and a piece of apple strudel, please."
        },
        {
          "speaker": "Kellner",
          "german": "Sehr gern! Kommt sofort.",
          "english": "Very gladly! Coming right up."
        }
      ]
    },
    "funFact": {
      "title": "The Swiss 'ß' Rule",
      "content": "In Switzerland and Liechtenstein, the letter 'ß' does not exist! They replaced it entirely with 'ss' (Strasse, gross, heissen). However, in Germany and Austria, 'ß' is strictly necessary because it shows the preceding vowel is long (die Maße = dimensions) versus short (die Masse = mass)!"
    },
    "practice": [
      {
        "question": "How do you distinguish the pronunciation of 'Wein' (wine) and 'Wien' (Vienna)?",
        "options": [
          "Wein sounds like 'Vine', Wien sounds like 'Veen'",
          "Wein sounds like 'Veen', Wien sounds like 'Vine'",
          "They sound identical"
        ],
        "answer": "Wein sounds like 'Vine', Wien sounds like 'Veen'",
        "explanation": "Pronounce the second vowel: in 'Wein', i sounds like 'eye'; in 'Wien', e sounds like 'ee'."
      },
      {
        "question": "Which of these words contains the soft 'Ich-Laut' whispered sound?",
        "options": [
          "das Buch",
          "die Nacht",
          "nicht"
        ],
        "answer": "nicht",
        "explanation": "Following the vowel 'i', 'ch' always forms the soft whispered Ich-Laut."
      }
    ]
  },
  "a1-ch1-l3": {
    "overview": "To converse naturally, you need subject pronouns. In German, there is a fundamental social division between informal 'du' (friends, family, peers) and formal 'Sie' (adult strangers, colleagues, professionals).",
    "canDo": "Can use all 9 personal pronouns accurately and choose appropriately between 'du' and capitalized 'Sie' in everyday social situations.",
    "teacherNote": "Look at the capitalization! Capitalized 'Sie' always means formal 'you' (singular or plural). Lowercase 'sie' means 'she' or 'they', which you can identify from the verb ending.",
    "sections": [
      {
        "title": "1. Die 9 Personalpronomen (Subject Pronouns)",
        "description": "The fundamental building blocks of German sentences:",
        "table": {
          "headers": [
            "Pronomen",
            "Bedeutung",
            "Person",
            "Beispielsatz"
          ],
          "rows": [
            [
              "ich",
              "I",
              "1. Person Singular",
              "Ich lerne Deutsch."
            ],
            [
              "du",
              "you (informal singular)",
              "2. Person Singular",
              "Wie heißt du?"
            ],
            [
              "er",
              "he",
              "3. Person Singular maskulin",
              "Er kommt aus Spanien."
            ],
            [
              "sie",
              "she",
              "3. Person Singular feminin",
              "Sie wohnt in Berlin."
            ],
            [
              "es",
              "it",
              "3. Person Singular neutral",
              "Es ist warm heute."
            ],
            [
              "wir",
              "we",
              "1. Person Plural",
              "Wir sind im Deutschkurs."
            ],
            [
              "ihr",
              "you all (informal plural)",
              "2. Person Plural",
              "Woher kommt ihr?"
            ],
            [
              "sie",
              "they",
              "3. Person Plural",
              "Sie sprechen Englisch."
            ],
            [
              "Sie",
              "you (formal singular & plural)",
              "Höflichkeitsform",
              "Wie heißen Sie?"
            ]
          ]
        }
      },
      {
        "title": "2. Soziale Etikette: 'du' oder 'Sie'?",
        "description": "Rules of respect and familiarity in the DACH countries:",
        "items": [
          {
            "term": "du (informell)",
            "meaning": "Used with friends, family, fellow university students, children under 16, and pets.",
            "example": "Hallo Julia, wie geht's dir?"
          },
          {
            "term": "Sie (formell & großgeschrieben)",
            "meaning": "Used with adult strangers, doctors, officials, shop assistants, and professional business partners.",
            "example": "Guten Tag, Frau Müller! Wie geht es Ihnen?"
          },
          {
            "term": "ihr (Gruppe informell)",
            "meaning": "Addressing multiple friends, family members, or classmates.",
            "example": "Kommt ihr heute zum Deutschkurs?"
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Begegnungen im Sprachinstitut – Höflich vs. Vertraut (Netzwerk A1):",
      "lines": [
        {
          "speaker": "Gregor",
          "german": "Hallo Nina! Wie geht's?",
          "english": "Hello Nina! How are you?"
        },
        {
          "speaker": "Nina",
          "german": "Danke, sehr gut! Und dir?",
          "english": "Thanks, very well! And you?"
        },
        {
          "speaker": "Gregor",
          "german": "Es geht, danke. Oh, guten Morgen, Herr Kaiser!",
          "english": "Not bad, thanks. Oh, good morning, Mr. Kaiser!"
        },
        {
          "speaker": "Herr Kaiser",
          "german": "Guten Morgen, Herr Schubert! Wie geht es Ihnen heute?",
          "english": "Good morning, Mr. Schubert! How are you doing today?"
        },
        {
          "speaker": "Gregor",
          "german": "Sehr gut, danke! Wir freuen uns auf den Unterricht.",
          "english": "Very well, thank you! We are looking forward to class."
        }
      ]
    },
    "funFact": {
      "title": "Das 'Du' anbieten (Offering the Informal 'Du')",
      "content": "In German corporate culture, colleagues often work alongside each other for years using formal 'Sie' and last names (Herr Schmidt, Frau Weber). It is a major social milestone when the senior or older colleague says: 'Wir können uns gern duzen!' (We can gladly use 'du'). Once accepted, you switch to first names!"
    },
    "practice": [
      {
        "question": "You enter a doctor's office in Frankfurt. Which greeting and pronoun do you use?",
        "options": [
          "Hallo, wie heißt du?",
          "Guten Tag! Wie geht es Ihnen?",
          "Hi, wer seid ihr?"
        ],
        "answer": "Guten Tag! Wie geht es Ihnen?",
        "explanation": "In professional healthcare settings, formal 'Sie' / 'Ihnen' is always required."
      },
      {
        "question": "What is the meaning of 'ihr'?",
        "options": [
          "She",
          "We",
          "You all (informal plural)"
        ],
        "answer": "You all (informal plural)",
        "explanation": "'ihr' is the informal plural pronoun used when talking to two or more friends."
      }
    ]
  },
  "a1-ch1-l4": {
    "overview": "The verb 'sein' (to be) is the single most essential verb in German. Just like English 'to be' (am, is, are), it is irregular, and mastering its conjugation allows you to state your identity, nationality, profession, and status.",
    "canDo": "Can conjugate 'sein' across all 6 grammatical persons and formulate self-introduction statements (name, role, origin).",
    "teacherNote": "Learn 'sein' as a rhythmic chant: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind. Say it aloud three times every morning!",
    "sections": [
      {
        "title": "1. Konjugation von 'sein' (to be)",
        "description": "Full present tense conjugation table of 'sein':",
        "table": {
          "headers": [
            "Pronomen",
            "Form von 'sein'",
            "Englisch",
            "Beispielsatz (Netzwerk A1)"
          ],
          "rows": [
            [
              "ich",
              "bin",
              "I am",
              "Ich bin Paco aus Spanien."
            ],
            [
              "du",
              "bist",
              "you are (informal)",
              "Du bist sehr freundlich."
            ],
            [
              "er / sie / es",
              "ist",
              "he / she / it is",
              "Das ist Frau Weber. Sie ist Lehrerin."
            ],
            [
              "wir",
              "sind",
              "we are",
              "Wir sind hier im Deutschkurs."
            ],
            [
              "ihr",
              "seid",
              "you all are",
              "Seid ihr fertig mit Aufgabe 3?"
            ],
            [
              "sie / Sie",
              "sind",
              "they / You (formal) are",
              "Sie sind Herr Schubert, richtig?"
            ]
          ]
        }
      },
      {
        "title": "2. Three Core Uses of 'sein'",
        "description": "Stating identity, origin, and conditions:",
        "items": [
          {
            "term": "Identität & Beruf",
            "meaning": "Stating your name or profession (no indefinite article needed before professions!)",
            "example": "Ich bin Nina. / Er ist Ingenieur. / Sie ist Studentin."
          },
          {
            "term": "Eigenschaft & Zustand",
            "meaning": "Describing qualities with adjectives",
            "example": "Der Kurs ist interessant. / Das Wetter ist schön."
          },
          {
            "term": "Ort & Herkunft",
            "meaning": "Stating current location or location of items",
            "example": "Wir sind in München. / Das Buch ist hier."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Im Deutschkurs A1 – Kennenlernen der neuen Teilnehmer (Netzwerk A1):",
      "lines": [
        {
          "speaker": "Julia",
          "german": "Hallo! Ich bin Julia. Wer bist du?",
          "english": "Hello! I am Julia. Who are you?"
        },
        {
          "speaker": "Paco",
          "german": "Hallo Julia! Ich bin Paco. Ich komme aus Spanien.",
          "english": "Hello Julia! I am Paco. I come from Spain."
        },
        {
          "speaker": "Julia",
          "german": "Bist du auch neu in Deutschland?",
          "english": "Are you also new in Germany?"
        },
        {
          "speaker": "Paco",
          "german": "Ja, ich bin seit drei Wochen in Berlin. Wir sind in der gleichen Gruppe!",
          "english": "Yes, I have been in Berlin for three weeks. We are in the same group!"
        }
      ]
    },
    "funFact": {
      "title": "No 'A/An' before Professions in German!",
      "content": "In English, you say 'I am a teacher' or 'He is an architect'. In German, saying 'Ich bin ein Lehrer' sounds foreign! Germans drop the article completely: 'Ich bin Lehrer' or 'Ich bin Ingenieurin'."
    },
    "practice": [
      {
        "question": "Choose the correct form: 'Wir _____ heute in Berlin.'",
        "options": [
          "seid",
          "sind",
          "ist"
        ],
        "answer": "sind",
        "explanation": "The correct conjugation of 'sein' for 'wir' is 'sind'."
      },
      {
        "question": "How do you say: 'Who are you?' (informal)",
        "options": [
          "Wer bist du?",
          "Wer ist du?",
          "Wer seid du?"
        ],
        "answer": "Wer bist du?",
        "explanation": "'du' always pairs with 'bist' (Wer bist du?)."
      }
    ]
  },
  "a1-ch1-l5": {
    "overview": "Together with 'sein', the verb 'haben' (to have) is one of the two pillar verbs of German. It expresses possession, physical feelings, schedule availability, and forms the past tense (Perfekt).",
    "canDo": "Can conjugate 'haben' fluently, express possession, and discuss schedule availability ('Ich habe Zeit / keine Zeit').",
    "teacherNote": "Notice the small stem shift: in 'du hast' and 'er/sie/es hat', the letter 'b' drops out for smoother, faster pronunciation!",
    "sections": [
      {
        "title": "1. Konjugation von 'haben' (to have)",
        "description": "Present tense forms of 'haben':",
        "table": {
          "headers": [
            "Pronomen",
            "Form von 'haben'",
            "Englisch",
            "Beispielsatz (Netzwerk A1)"
          ],
          "rows": [
            [
              "ich",
              "habe",
              "I have",
              "Ich habe eine Frage."
            ],
            [
              "du",
              "hast",
              "you have (informal)",
              "Hast du heute Zeit?"
            ],
            [
              "er / sie / es",
              "hat",
              "he / she / it has",
              "Er hat ein Wörterbuch."
            ],
            [
              "wir",
              "haben",
              "we have",
              "Wir haben um zehn Uhr Pause."
            ],
            [
              "ihr",
              "habt",
              "you all have",
              "Habt ihr einen Stift?"
            ],
            [
              "sie / Sie",
              "haben",
              "they / You (formal) have",
              "Haben Sie ein Zimmer frei?"
            ]
          ]
        }
      },
      {
        "title": "2. High-Frequency Idiomatic Expressions with 'haben'",
        "description": "Everyday German expressions that use 'haben' where English uses 'to be':",
        "items": [
          {
            "term": "Zeit haben / keine Zeit haben",
            "meaning": "To have time / to have no time",
            "example": "Hast du am Samstag Zeit? - Nein, ich habe leider keine Zeit."
          },
          {
            "term": "Hunger / Durst haben",
            "meaning": "To be hungry / to be thirsty (lit. 'to have hunger/thirst')",
            "example": "Ich habe großen Hunger! Gehen wir essen?"
          },
          {
            "term": "eine Frage haben",
            "meaning": "To have a question in class or at work",
            "example": "Entschuldigung, ich habe eine kurze Frage."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Nach dem Deutschkurs – Pläne für den Nachmittag (Netzwerk A1):",
      "lines": [
        {
          "speaker": "Gregor",
          "german": "Hallo Paco! Hast du heute Nachmittag Zeit für einen Kaffee?",
          "english": "Hello Paco! Do you have time for a coffee this afternoon?"
        },
        {
          "speaker": "Paco",
          "german": "Um wie viel Uhr? Um vier Uhr habe ich einen Termin bei der Bank.",
          "english": "At what time? At four o'clock I have an appointment at the bank."
        },
        {
          "speaker": "Gregor",
          "german": "Kein Problem, um fünf Uhr? Ich habe großen Durst!",
          "english": "No problem, at five o'clock? I am very thirsty!"
        },
        {
          "speaker": "Paco",
          "german": "Ja super, um fünf Uhr habe ich Zeit. Bis später!",
          "english": "Yes great, at five o'clock I have time. See you later!"
        }
      ]
    },
    "funFact": {
      "title": "Having Hunger vs. Being Hungry",
      "content": "While you can say 'Ich bin hungrig' in German, native speakers almost universally say 'Ich habe Hunger' (I have hunger) and 'Ich habe Durst' (I have thirst). It is one of the quickest ways to sound natural from day one!"
    },
    "practice": [
      {
        "question": "What is the correct form: 'Er _____ ein deutsches Lehrbuch.'",
        "options": [
          "habe",
          "hast",
          "hat"
        ],
        "answer": "hat",
        "explanation": "3rd person singular (er/sie/es) takes 'hat'."
      },
      {
        "question": "How do you ask: 'Do you have time?' (informal)",
        "options": [
          "Hast du Zeit?",
          "Bist du Zeit?",
          "Habt du Zeit?"
        ],
        "answer": "Hast du Zeit?",
        "explanation": "'Hast du Zeit?' is the natural way to ask if someone is free."
      }
    ]
  }
};
