import { LessonContent } from "../../types/course.types";

export const CHAPTER_2_LESSONS: Record<string, LessonContent> = {
  "a1-ch2-l6": {
    "overview": "German regular verbs follow a beautifully predictable pattern. Every regular verb consists of a root (stem) and an ending (-en). Once you master the 4 core personal endings, you can instantly conjugate over 80% of all German verbs.",
    "canDo": "Can identify the verb stem and attach the correct personal endings (-e, -st, -t, -en, -t, -en) for any regular German verb.",
    "teacherNote": "Remember the rhythmic chant: E - ST - T - EN - T - EN! (ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en). Notice that 'wir' and 'sie/Sie' always look identical to the dictionary infinitive!",
    "sections": [
      {
        "title": "1. Regelmäßige Verben im Präsens (Regular Verbs)",
        "description": "Take the verb 'kommen' (to come). Remove '-en' to find the stem: 'komm-'. Add personal endings:",
        "table": {
          "headers": [
            "Pronomen",
            "Endung",
            "Beispiel: kommen",
            "Beispiel: lernen",
            "Beispiel: wohnen"
          ],
          "rows": [
            [
              "ich",
              "-e",
              "ich komme",
              "ich lerne",
              "ich wohne"
            ],
            [
              "du",
              "-st",
              "du kommst",
              "du lernst",
              "du wohnst"
            ],
            [
              "er / sie / es",
              "-t",
              "er kommt",
              "sie lernt",
              "es wohnt"
            ],
            [
              "wir",
              "-en",
              "wir kommen",
              "wir lernen",
              "wir wohnen"
            ],
            [
              "ihr",
              "-t",
              "ihr kommt",
              "ihr lernt",
              "ihr wohnt"
            ],
            [
              "sie / Sie",
              "-en",
              "sie kommen",
              "sie lernen",
              "Sie wohnen"
            ]
          ]
        }
      },
      {
        "title": "2. Special Stem Endings: -t / -d and -s / -ß / -z",
        "description": "Two phonetic adjustments make pronunciation comfortable:",
        "items": [
          {
            "term": "Stems in -t / -d (arbeiten, finden)",
            "meaning": "Insert an extra '-e-' before -st and -t so consonants don't clump together.",
            "example": "du arbeitest, er arbeitet, ihr arbeitet (not 'arbeitst'!)"
          },
          {
            "term": "Stems in -s / -ß / -z (heißen, reisen)",
            "meaning": "The 'du' form drops the 's' and just adds '-t', since the sound is already a sibilant.",
            "example": "du heißt (not 'heißst'!), du reist"
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Zwei Kursteilnehmer im Café nach dem Unterricht (Netzwerk A1):",
      "lines": [
        {
          "speaker": "Christian",
          "german": "Hallo Sarah! Was trinkst du?",
          "english": "Hello Sarah! What are you drinking?"
        },
        {
          "speaker": "Sarah",
          "german": "Ich trinke einen Orangensaft. Und was trinkst du?",
          "english": "I am drinking an orange juice. And what are you drinking?"
        },
        {
          "speaker": "Christian",
          "german": "Ich trinke einen Kaffee. Lernst du heute noch für den Test?",
          "english": "I am drinking a coffee. Are you still studying for the test today?"
        },
        {
          "speaker": "Sarah",
          "german": "Ja, wir lernen am Nachmittag zusammen in der Bibliothek.",
          "english": "Yes, we are studying together in the library this afternoon."
        }
      ]
    },
    "funFact": {
      "title": "No Present Continuous in German!",
      "content": "English has two present tenses: 'I learn' and 'I am learning'. German has only ONE: 'Ich lerne' means both! To express that an action is happening right this second, simply add the word 'gerade': 'Ich lerne gerade Deutsch' (I am learning German right now)."
    },
    "practice": [
      {
        "question": "What is the correct conjugation: 'Woher _____ du?' (kommen)",
        "options": [
          "kommst",
          "kommt",
          "kommen"
        ],
        "answer": "kommst",
        "explanation": "'du' always takes the ending '-st' (Woher kommst du?)."
      },
      {
        "question": "Conjugate 'arbeiten' for 'er': 'Er _____ bei BMW.'",
        "options": [
          "arbeitt",
          "arbeitet",
          "arbeiten"
        ],
        "answer": "arbeitet",
        "explanation": "Stems ending in -t add '-et' for ease of pronunciation: er arbeitet."
      }
    ]
  },
  "a1-ch2-l7": {
    "overview": "Several high-frequency German verbs undergo a vowel shift in the 2nd (du) and 3rd (er/sie/es) person singular. In this lesson, you will master the two major shift categories: 'e -> i/ie' and 'a -> ä'.",
    "canDo": "Can recognize and correctly conjugate key stem-changing verbs: sprechen, lesen, sehen, essen, and fahren.",
    "teacherNote": "Golden rule of stem-changing verbs: the vowel shift ONLY affects 'du' and 'er/sie/es'! All plural forms (wir, ihr, sie/Sie) remain completely regular!",
    "sections": [
      {
        "title": "1. Vowel Shift: e -> i / ie (sprechen, lesen, sehen, essen)",
        "description": "Watch how the stem vowel changes in singular forms:",
        "table": {
          "headers": [
            "Pronomen",
            "sprechen (to speak)",
            "lesen (to read)",
            "sehen (to see)",
            "essen (to eat)"
          ],
          "rows": [
            [
              "ich",
              "spreche",
              "lese",
              "sehe",
              "esse"
            ],
            [
              "du",
              "sprichst (e->i)",
              "liest (e->ie)",
              "siehst (e->ie)",
              "isst (e->i)"
            ],
            [
              "er / sie / es",
              "spricht (e->i)",
              "liest (e->ie)",
              "sieht (e->ie)",
              "isst (e->i)"
            ],
            [
              "wir",
              "sprechen",
              "lesen",
              "sehen",
              "essen"
            ],
            [
              "ihr",
              "sprecht",
              "lest",
              "seht",
              "esst"
            ],
            [
              "sie / Sie",
              "sprechen",
              "lesen",
              "sehen",
              "essen"
            ]
          ]
        }
      },
      {
        "title": "2. Vowel Shift: a -> ä (fahren, schlafen, tragen)",
        "description": "The vowel 'a' receives an Umlaut ('ä') in 'du' and 'er/sie/es':",
        "table": {
          "headers": [
            "Pronomen",
            "fahren (to travel/drive)",
            "schlafen (to sleep)",
            "tragen (to wear/carry)"
          ],
          "rows": [
            [
              "ich",
              "fahre",
              "schlafe",
              "trage"
            ],
            [
              "du",
              "fährst (a->ä)",
              "schläfst (a->ä)",
              "trägst (a->ä)"
            ],
            [
              "er / sie / es",
              "fährt (a->ä)",
              "schläft (a->ä)",
              "trägt (a->ä)"
            ],
            [
              "wir",
              "fahren",
              "schlafen",
              "tragen"
            ],
            [
              "ihr",
              "fahrt",
              "schlaft",
              "tragt"
            ],
            [
              "sie / Sie",
              "fahren",
              "schlafen",
              "tragen"
            ]
          ]
        }
      }
    ],
    "dialogue": {
      "context": "Im Buchladen am Marienplatz in München (Netzwerk A1):",
      "lines": [
        {
          "speaker": "Kunde",
          "german": "Guten Tag! Sprechen Sie auch Englisch?",
          "english": "Good day! Do you also speak English?"
        },
        {
          "speaker": "Buchhändlerin",
          "german": "Ja, ein bisschen. Welche Bücher lesen Sie gern?",
          "english": "Yes, a little. What books do you like to read?"
        },
        {
          "speaker": "Kunde",
          "german": "Ich lerne Deutsch und lese gern einfache Kurzgeschichten.",
          "english": "I am learning German and like reading simple short stories."
        },
        {
          "speaker": "Buchhändlerin",
          "german": "Da haben wir ein tolles Buch! Mein Kollege liest das auch sehr gern.",
          "english": "We have a great book right there! My colleague also loves reading it."
        }
      ]
    },
    "funFact": {
      "title": "The 'essen' & 'sein' Identity",
      "content": "Notice that 'er isst' (he eats) and 'er ist' (he is) sound 100% identical in spoken German! Context always makes the meaning crystal clear: 'Er ist im Café' (He is in the café) vs. 'Er isst ein Brötchen' (He is eating a bread roll)."
    },
    "practice": [
      {
        "question": "Complete the question: 'Welche Sprachen _____ du?' (sprechen)",
        "options": [
          "sprichst",
          "sprechst",
          "sprecht"
        ],
        "answer": "sprichst",
        "explanation": "'sprechen' shifts e -> i for 'du': du sprichst."
      },
      {
        "question": "Choose the correct form: 'Am Wochenende _____ sie nach Hamburg.' (fahren - singular she)",
        "options": [
          "fährt",
          "fahrt",
          "fahren"
        ],
        "answer": "fährt",
        "explanation": "'sie' (3rd person singular) shifts a -> ä: sie fährt."
      }
    ]
  },
  "a1-ch2-l8": {
    "overview": "German sentence structure revolves around one unbreakable golden rule: in a standard statement, the conjugated verb ALWAYS occupies Position 2. In this lesson, you will master normal word order and inverted word order.",
    "canDo": "Can position verbs accurately in Position 2 and create varied sentences starting with time, place, or objects.",
    "teacherNote": "Position 2 does NOT mean 'second word'—it means second grammatical element! A time phrase like 'Heute Nachmittag' (this afternoon) is two words, but it counts as ONE element in Position 1. The verb immediately follows in Position 2.",
    "sections": [
      {
        "title": "1. Die goldene Regel: Verb an Position 2",
        "description": "Observe how the verb stays locked in Position 2 while other elements move around it:",
        "table": {
          "headers": [
            "Position 1 (Vorfeld)",
            "Position 2 (Verb)",
            "Mittelfeld (Subjekt / Zeit / Ort)",
            "Satzende"
          ],
          "rows": [
            [
              "Ich",
              "lerne",
              "heute Deutsch in Berlin",
              "."
            ],
            [
              "Heute",
              "lerne",
              "ich Deutsch in Berlin",
              "."
            ],
            [
              "In Berlin",
              "lerne",
              "ich heute Deutsch",
              "."
            ],
            [
              "Gregor",
              "trinkt",
              "am Morgen immer Kaffee",
              "."
            ],
            [
              "Am Morgen",
              "trinkt",
              "Gregor immer Kaffee",
              "."
            ]
          ]
        }
      },
      {
        "title": "2. Inversion (Umkehrung der Wortstellung)",
        "description": "When you put something other than the subject in Position 1, the subject flips to Position 3:",
        "items": [
          {
            "term": "Subject First",
            "meaning": "Standard neutral order: Subject + Verb + Information",
            "example": "Nina wohnt in Frankfurt."
          },
          {
            "term": "Time First (Emphasis on Time)",
            "meaning": "Time + Verb + Subject + Information",
            "example": "Jetzt wohnt Nina in Frankfurt."
          },
          {
            "term": "Place First (Emphasis on Location)",
            "meaning": "Location + Verb + Subject + Information",
            "example": "In Frankfurt wohnt Nina schon zwei Jahre."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Zwei Freunde planen ihren Tag in Zürich (Netzwerk A1):",
      "lines": [
        {
          "speaker": "Marco",
          "german": "Wann fährst du heute nach Zürich?",
          "english": "When are you driving to Zurich today?"
        },
        {
          "speaker": "Anna",
          "german": "Um zehn Uhr fahre ich mit der Bahn. Und was machst du?",
          "english": "At ten o'clock I travel by train. And what are you doing?"
        },
        {
          "speaker": "Marco",
          "german": "Heute arbeite ich bis 16 Uhr. Am Abend treffe ich Lukas.",
          "english": "Today I work until 4 PM. In the evening I am meeting Lukas."
        },
        {
          "speaker": "Anna",
          "german": "Perfekt, dann sehen wir uns um sieben Uhr!",
          "english": "Perfect, then we will see each other at seven o'clock!"
        }
      ]
    },
    "funFact": {
      "title": "German is a 'Verb-Second' (V2) Language",
      "content": "Linguists call German a V2 language. Unlike English, where you can say 'Yesterday I went to the store' (Yesterday = 1, I = 2, went = 3), in German the verb DEMANDS Position 2: 'Gestern bin ich...' (Yesterday = 1, bin = 2, ich = 3)."
    },
    "practice": [
      {
        "question": "Which sentence follows correct German word order?",
        "options": [
          "Morgen ich fahre nach Berlin.",
          "Morgen fahre ich nach Berlin.",
          "Ich morgen fahre nach Berlin."
        ],
        "answer": "Morgen fahre ich nach Berlin.",
        "explanation": "Because 'Morgen' occupies Position 1, the verb 'fahre' MUST be in Position 2, followed by the subject 'ich'."
      },
      {
        "question": "Where does the conjugated verb go in a standard German statement?",
        "options": [
          "At the very end",
          "Always in Position 2",
          "Always in Position 1"
        ],
        "answer": "Always in Position 2",
        "explanation": "The core rule of German main clauses is that the conjugated verb stands in Position 2."
      }
    ]
  },
  "a1-ch2-l9": {
    "overview": "Questions are essential for everyday conversation. In this lesson, you will master yes/no questions (Ja/Nein-Fragen) where the verb jumps to Position 1, and learn the famous German answer word 'Doch!', which has no direct one-word English equivalent.",
    "canDo": "Can construct yes/no questions by placing the verb in Position 1, and answer accurately using 'Ja', 'Nein', and 'Doch!'.",
    "teacherNote": "Mastering 'Doch' is the ultimate German superpower! When someone asks a negative question ('Kommst du nicht mit?'), English speakers struggle with whether 'yes' means you are coming or not. German solves this instantly: 'Doch!' means 'Yes, on the contrary, I AM coming!'.",
    "sections": [
      {
        "title": "1. Ja/Nein-Fragen (Verb in Position 1)",
        "description": "To turn any statement into a yes/no question, simply move the conjugated verb to the very front:",
        "table": {
          "headers": [
            "Aussage (Statement)",
            "Ja/Nein-Frage (Question)",
            "Mögliche Antwort"
          ],
          "rows": [
            [
              "Du sprichst Deutsch.",
              "Sprichst du Deutsch?",
              "Ja, ein bisschen."
            ],
            [
              "Herr Schubert kommt heute.",
              "Kommt Herr Schubert heute?",
              "Nein, leider nicht."
            ],
            [
              "Sie wohnen in Wien.",
              "Wohnen Sie in Wien?",
              "Ja, in der Innenstadt."
            ],
            [
              "Ihr trinkt Kaffee.",
              "Trinkt ihr Kaffee?",
              "Ja, gern!"
            ]
          ]
        }
      },
      {
        "title": "2. The Triangle of Answers: Ja, Nein & DOCH!",
        "description": "How to respond to positive vs. negative questions:",
        "table": {
          "headers": [
            "Fragentyp",
            "Fragebeispiel",
            "Antwort: Ja / Nein",
            "Antwort: Doch!"
          ],
          "rows": [
            [
              "Positive Frage",
              "Kommst du heute zum Kurs?",
              "Ja, ich komme. / Nein, ich habe keine Zeit.",
              "— (nicht verwendet)"
            ],
            [
              "Negative Frage",
              "Kommst du heute NICHT?",
              "Nein, ich komme nicht.",
              "DOCH! (Ich komme natürlich!)"
            ],
            [
              "Negative Frage",
              "Trinkst du KEINEN Kaffee?",
              "Nein, ich trinke keinen.",
              "DOCH! (Ich trinke sehr gern Kaffee!)"
            ]
          ]
        }
      }
    ],
    "dialogue": {
      "context": "In der Pause vor dem Seminarraum (Netzwerk A1):",
      "lines": [
        {
          "speaker": "Julia",
          "german": "Hast du keine Pause, Gregor?",
          "english": "Don't you have a break, Gregor?"
        },
        {
          "speaker": "Gregor",
          "german": "Doch! Ich habe 20 Minuten Pause. Gehst du in die Cafeteria?",
          "english": "Yes I do! (On the contrary!) I have a 20-minute break. Are you going to the cafeteria?"
        },
        {
          "speaker": "Julia",
          "german": "Ja, kommst du mit?",
          "english": "Yes, are you coming along?"
        },
        {
          "speaker": "Gregor",
          "german": "Ja gern, ich brauche einen Espresso!",
          "english": "Yes gladly, I need an espresso!"
        }
      ]
    },
    "funFact": {
      "title": "The Untranslatable 'Doch'",
      "content": "'Doch' is one of the most useful words in the German language. French has 'si' and Scandinavian languages have 'jo', but English lost its equivalent word ('yea'). Using 'Doch' naturally will instantly make your German sound authentic and fluent!"
    },
    "practice": [
      {
        "question": "Someone asks you: 'Lernst du nicht Deutsch?' (Don't you learn German?). You DO learn German. How do you answer?",
        "options": [
          "Ja!",
          "Nein!",
          "Doch!"
        ],
        "answer": "Doch!",
        "explanation": "'Doch!' contradicts a negative question and confirms that the positive statement is true."
      },
      {
        "question": "Which sentence is a correct Ja/Nein question?",
        "options": [
          "Wohnst du in München?",
          "Wo wohnst du in München?",
          "Du wohnst in München?"
        ],
        "answer": "Wohnst du in München?",
        "explanation": "A yes/no question begins with the conjugated verb in Position 1: 'Wohnst du in München?'."
      }
    ]
  },
  "a1-ch2-l10": {
    "overview": "W-Questions (W-Fragen) are open-ended questions that ask for specific information. In German, every single question word begins with the letter 'W'. In this lesson, you will master the 8 core W-words and their sentence structure.",
    "canDo": "Can formulate open questions using all 8 German W-question words and understand questions asked during conversations or official inquiries.",
    "teacherNote": "Notice the structure: W-Word (Position 1) + Conjugated Verb (Position 2) + Subject (Position 3) + Rest of Sentence. The verb stays right in Position 2, just like in a statement!",
    "sections": [
      {
        "title": "1. Die 8 wichtigsten W-Fragen (The 8 Key W-Words)",
        "description": "Essential interrogative pronouns from Netzwerk A1:",
        "table": {
          "headers": [
            "W-Wort",
            "Bedeutung",
            "Beispielfrage (Netzwerk A1)",
            "Typische Antwort"
          ],
          "rows": [
            [
              "Wer?",
              "Who?",
              "Wer ist das?",
              "Das ist mein Kollege Paco."
            ],
            [
              "Was?",
              "What?",
              "Was machen Sie beruflich?",
              "Ich bin Ingenieur."
            ],
            [
              "Wo?",
              "Where? (Location)",
              "Wo wohnen Sie?",
              "In München."
            ],
            [
              "Woher?",
              "Where from? (Origin)",
              "Woher kommen Sie?",
              "Aus Österreich."
            ],
            [
              "Wohin?",
              "Where to? (Destination)",
              "Wohin fährst du?",
              "Nach Berlin."
            ],
            [
              "Wie?",
              "How?",
              "Wie heißen Sie?",
              "Ich heiße Julia."
            ],
            [
              "Wann?",
              "When?",
              "Wann beginnt der Kurs?",
              "Um neun Uhr."
            ],
            [
              "Warum?",
              "Why?",
              "Warum lernst du Deutsch?",
              "Für meinen Beruf."
            ]
          ]
        }
      },
      {
        "title": "2. Wo vs. Woher vs. Wohin",
        "description": "German clearly separates location, origin, and destination:",
        "items": [
          {
            "term": "Wo? (Static Location)",
            "meaning": "Asking where someone or something is stationary (paired with 'in', 'bei')",
            "example": "Wo bist du? - Ich bin im Sprachinstitut."
          },
          {
            "term": "Woher? (Origin)",
            "meaning": "Asking where someone or something comes from (paired with 'aus')",
            "example": "Woher kommst du? - Aus der Schweiz."
          },
          {
            "term": "Wohin? (Destination)",
            "meaning": "Asking where someone is going (paired with 'nach', 'in')",
            "example": "Wohin gehst du? - In die Mensa."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Interview am Goethe-Institut am ersten Unterrichtstag (Netzwerk A1):",
      "lines": [
        {
          "speaker": "Lehrerin",
          "german": "Guten Morgen! Wie heißen Sie und woher kommen Sie?",
          "english": "Good morning! What is your name and where do you come from?"
        },
        {
          "speaker": "Paco",
          "german": "Ich heiße Paco und komme aus Spanien.",
          "english": "My name is Paco and I come from Spain."
        },
        {
          "speaker": "Lehrerin",
          "german": "Und wo wohnen Sie hier in München?",
          "english": "And where do you live here in Munich?"
        },
        {
          "speaker": "Paco",
          "german": "Ich wohne in Schwabing, nahe der Universität.",
          "english": "I live in Schwabing, close to the university."
        },
        {
          "speaker": "Lehrerin",
          "german": "Sehr schön! Wann haben Sie Zeit für die Einstufung?",
          "english": "Very nice! When do you have time for the placement test?"
        },
        {
          "speaker": "Paco",
          "german": "Heute um elf Uhr.",
          "english": "Today at eleven o'clock."
        }
      ]
    },
    "funFact": {
      "title": "'Wie' is used for Names and Phone Numbers!",
      "content": "In English, you ask: '*What* is your name?' and '*What* is your phone number?'. But in German, you use 'Wie' (How): 'Wie heißen Sie?' (How are you called?) and 'Wie ist Ihre Telefonnummer?' (How is your phone number?). Asking 'Was ist Ihr Name?' sounds unidiomatic to native speakers!"
    },
    "practice": [
      {
        "question": "Which question word asks for someone's country of origin?",
        "options": [
          "Wo?",
          "Wohin?",
          "Woher?"
        ],
        "answer": "Woher?",
        "explanation": "'Woher' specifically means 'where from'."
      },
      {
        "question": "How do you ask: 'What is your telephone number?' in idiomatic German?",
        "options": [
          "Was ist Ihre Telefonnummer?",
          "Wie ist Ihre Telefonnummer?",
          "Wo ist Ihre Telefonnummer?"
        ],
        "answer": "Wie ist Ihre Telefonnummer?",
        "explanation": "German uses 'Wie' (How) when asking for numbers, addresses, and names."
      }
    ]
  }
};
