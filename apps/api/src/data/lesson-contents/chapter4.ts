import { LessonContent } from "../../types/course.types";

export const CHAPTER_4_LESSONS: Record<string, LessonContent> = {
  "a1-ch4-l16": {
    "overview": "Every German noun carries one of three grammatical genders: masculine (der), feminine (die), or neuter (das). In this lesson, you will master definite articles ('the'), indefinite articles ('a/an'), and negative articles ('no/not any') using city and everyday objects from Netzwerk Kapitel 3 ('In der Stadt').",
    "canDo": "Can identify the three definite articles (der, die, das), use indefinite articles (ein, eine) and negative articles (kein, keine) in the nominative case.",
    "teacherNote": "Never learn a German noun by itself! Always learn the article attached: don't memorize 'Bahnhof' (station), memorize 'der Bahnhof'. Blue for der (maskulin), red for die (feminin), green for das (neutral)!",
    "sections": [
      {
        "title": "1. Die drei Artikel im Nominativ (Definit, Indefinit & Negativ)",
        "description": "Notice how the endings correspond across article types:",
        "table": {
          "headers": [
            "Genus (Gender)",
            "Bestimmter Artikel ('the')",
            "Unbestimmter Artikel ('a/an')",
            "Negativartikel ('no/none')",
            "Beispiel (Netzwerk A1)"
          ],
          "rows": [
            [
              "Maskulin (m)",
              "der",
              "ein",
              "kein",
              "der Bahnhof / ein Bahnhof (station)"
            ],
            [
              "Feminin (f)",
              "die",
              "eine",
              "keine",
              "die Kirche / eine Kirche (church)"
            ],
            [
              "Neutral (n)",
              "das",
              "ein",
              "kein",
              "das Hotel / ein Hotel (hotel)"
            ],
            [
              "Plural (pl)",
              "die",
              "— (kein Plural)",
              "keine",
              "die Museen / keine Museen (museums)"
            ]
          ]
        }
      },
      {
        "title": "2. Typische Endungen für die Geschlechter (Suffix Rules)",
        "description": "Look at the ending of the noun for reliable clues:",
        "items": [
          {
            "term": "Feminin (die) – 99% verlässlich",
            "meaning": "Endings: -ung, -heit, -keit, -schaft, -tion, -tät, -e",
            "example": "die Wohnung, die Universität, die Information, die Straße"
          },
          {
            "term": "Maskulin (der) – Personen & Endungen",
            "meaning": "Endings: -er, -ling, -or, -ist, as well as days, months, and compass directions",
            "example": "der Lehrer, der Motor, der Montag, der Norden"
          },
          {
            "term": "Neutral (das) – Verkleinerungen & Fremdwörter",
            "meaning": "Endings: -chen, -lein, -ment, -um, and nominalized verbs (infinitives as nouns)",
            "example": "das Mädchen, das Zentrum, das Dokument, das Essen"
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Stadtrundgang in Hamburg – Orientierung (Netzwerk A1 Kapitel 3):",
      "lines": [
        {
          "speaker": "Tourist",
          "german": "Entschuldigung, was ist das für ein Gebäude dort drüben? Ist das ein Hotel?",
          "english": "Excuse me, what kind of building is that over there? Is that a hotel?"
        },
        {
          "speaker": "Hamburger",
          "german": "Nein, das ist kein Hotel. Das ist das Rathaus von Hamburg!",
          "english": "No, that is not a hotel. That is the Town Hall of Hamburg!"
        },
        {
          "speaker": "Tourist",
          "german": "Und die große Kirche daneben? Wie heißt die?",
          "english": "And the big church next to it? What is it called?"
        },
        {
          "speaker": "Hamburger",
          "german": "Das ist die St. Michaelskirche, wir nennen sie einfach 'den Michel'.",
          "english": "That is St. Michael's Church, we simply call it 'the Michel'."
        }
      ]
    },
    "funFact": {
      "title": "The Reason for 'Das Mädchen'",
      "content": "Why is 'das Mädchen' (girl) grammatically neuter when girls are clearly female? Because in German, the diminutive suffix '-chen' (meaning 'little') AUTOMATICALLY forces every noun to become neuter 'das'! Historically, 'die Magd' (maiden) + '-chen' became 'das Mädchen'."
    },
    "practice": [
      {
        "question": "Which article belongs with the noun 'Wohnung' (apartment)?",
        "options": [
          "der",
          "die",
          "das"
        ],
        "answer": "die",
        "explanation": "Nouns ending in '-ung' are always feminine (die Wohnung)."
      },
      {
        "question": "Complete the negative sentence: 'Das ist _____ Hotel, das ist ein Museum.'",
        "options": [
          "keine",
          "kein",
          "nicht"
        ],
        "answer": "kein",
        "explanation": "'Hotel' is neuter (das Hotel), so the negative article in nominative is 'kein'."
      }
    ]
  },
  "a1-ch4-l17": {
    "overview": "Unlike English, which almost always adds '-s' to form plurals (cat -> cats), German has five distinct plural patterns. In this lesson, you will master the 5 core plural categories and understand how vowels often take an Umlaut.",
    "canDo": "Can form the plural of common A1 nouns and identify the 5 standard German plural endings (-e, -er, -en/-n, -s, no ending).",
    "teacherNote": "In dictionaries, plural forms are listed immediately after the gender: 'der Tisch, -e' means plural is 'die Tische'. 'das Buch, -\"er' means plural adds an Umlaut and -er: 'die Bücher'. Crucial rule: ALL German plurals use the definite article 'die'!",
    "sections": [
      {
        "title": "1. Die 5 Pluralmuster im Deutschen (The 5 Plural Patterns)",
        "description": "Essential plural patterns with authentic A1 vocabulary from Netzwerk:",
        "table": {
          "headers": [
            "Muster (Pattern)",
            "Singular",
            "Plural (immer 'die')",
            "Bedeutung"
          ],
          "rows": [
            [
              "1. Endung -e (oft mit Umlaut)",
              "der Tisch / die Stadt",
              "die Tische / die Städte",
              "tables / cities"
            ],
            [
              "2. Endung -(e)n (häufig bei feminin)",
              "die Lampe / die Frau",
              "die Lampen / die Frauen",
              "lamps / women"
            ],
            [
              "3. Endung -er (meist mit Umlaut)",
              "das Buch / das Kind",
              "die Bücher / die Kinder",
              "books / children"
            ],
            [
              "4. Endung -s (Fremdwörter & Abkürzungen)",
              "das Auto / das Hotel",
              "die Autos / die Hotels",
              "cars / hotels"
            ],
            [
              "5. Keine Endung (nur Umlaut möglich)",
              "der Lehrer / der Apfel",
              "die Lehrer / die Äpfel",
              "teachers / apples"
            ]
          ]
        }
      },
      {
        "title": "2. Plural-Regeln nach Geschlecht (Gender Tendencies)",
        "description": "Predictable patterns to help you guess accurately:",
        "items": [
          {
            "term": "Feminine Nouns (die)",
            "meaning": "Over 90% of feminine nouns form their plural with -(e)n (never with -er!)",
            "example": "die Straße -> die Straßen, die Sprache -> die Sprachen"
          },
          {
            "term": "Neuter Nouns (das)",
            "meaning": "Very frequently take -er with an Umlaut, or simply -e",
            "example": "das Bild -> die Bilder, das Haus -> die Häuser"
          },
          {
            "term": "Masculine Nouns (der)",
            "meaning": "Most commonly take -e (often with an Umlaut), or end in -er with no change",
            "example": "der Tag -> die Tage, der Computer -> die Computer"
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Vorbereitung für den Unterricht im Seminarraum (Netzwerk A1):",
      "lines": [
        {
          "speaker": "Lehrerin",
          "german": "Guten Morgen! Haben alle Teilnehmer ihre Bücher und Stifte dabei?",
          "english": "Good morning! Does all participants have their books and pens with them?"
        },
        {
          "speaker": "Paco",
          "german": "Ja, hier sind meine Kursbücher. Aber ich brauche noch zwei Hefte.",
          "english": "Yes, here are my coursebooks. But I still need two notebooks."
        },
        {
          "speaker": "Nina",
          "german": "Ich habe hier drei Hefte und viele Stifte. Nimm einfach eins!",
          "english": "I have three notebooks and many pens here. Just take one!"
        },
        {
          "speaker": "Paco",
          "german": "Vielen Dank, Nina! Das hilft mir sehr.",
          "english": "Thank you very much, Nina! That helps me a lot."
        }
      ]
    },
    "funFact": {
      "title": "Universal 'Die' in the Plural",
      "content": "No matter whether a noun was originally 'der', 'die', or 'das' in the singular, in the plural EVERY noun takes the article 'die'! For example: der Mann -> die Männer, die Frau -> die Frauen, das Kind -> die Kinder. This simplifies plural nominative and accusative greatly!"
    },
    "practice": [
      {
        "question": "What is the plural of 'das Buch' (the book)?",
        "options": [
          "die Buche",
          "die Bücher",
          "die Büchen"
        ],
        "answer": "die Bücher",
        "explanation": "Neuter noun 'Buch' takes an Umlaut and -er: die Bücher."
      },
      {
        "question": "What is the plural article for all German nouns in the nominative?",
        "options": [
          "der",
          "die",
          "das"
        ],
        "answer": "die",
        "explanation": "All plural nouns take the definite article 'die' in the nominative case."
      }
    ]
  },
  "a1-ch4-l18": {
    "overview": "The Nominative case (der Nominativ) is the subject of the sentence—the person or thing performing the action. In this lesson, you will practice identifying the subject by asking 'Wer oder was?' (Who or what?), and master city orientation questions from Netzwerk Kapitel 3.",
    "canDo": "Can identify the subject of any sentence, use correct nominative articles, and ask for and give simple directions in a German-speaking city.",
    "teacherNote": "Whenever you see the verbs 'sein' (to be) or 'werden' (to become), BOTH sides of the sentence are in the Nominative case: 'Das ist der Bahnhof' (both 'das' and 'der Bahnhof' are Nominativ!).",
    "sections": [
      {
        "title": "1. Der Nominativ: Die Frage 'Wer oder was?'",
        "description": "The subject determines the conjugation of the verb:",
        "table": {
          "headers": [
            "Beispielsatz (Netzwerk A1)",
            "Frage nach dem Subjekt",
            "Subjekt (Nominativ)"
          ],
          "rows": [
            [
              "Der Zug kommt um 10 Uhr an.",
              "Wer oder was kommt an?",
              "Der Zug (maskulin)"
            ],
            [
              "Die Kirche ist sehr alt.",
              "Wer oder was ist alt?",
              "Die Kirche (feminin)"
            ],
            [
              "Das Museum öffnet am Samstag.",
              "Wer oder was öffnet?",
              "Das Museum (neutral)"
            ],
            [
              "Die Touristen machen Fotos.",
              "Wer oder was macht Fotos?",
              "Die Touristen (plural)"
            ]
          ]
        }
      },
      {
        "title": "2. Redemittel: Nach dem Weg fragen (Asking Directions)",
        "description": "Essential phrases from Netzwerk Kapitel 3 for finding your way around town:",
        "items": [
          {
            "term": "Entschuldigung, wo ist...?",
            "meaning": "Excuse me, where is...?",
            "example": "Entschuldigung, wo ist der Hauptbahnhof?"
          },
          {
            "term": "Gehen Sie geradeaus!",
            "meaning": "Go straight ahead!",
            "example": "Gehen Sie immer geradeaus bis zur Kreuzung."
          },
          {
            "term": "Biegen Sie rechts / links ab!",
            "meaning": "Turn right / turn left!",
            "example": "Biegen Sie an der Ampel links ab."
          },
          {
            "term": "Da drüben / auf der rechten Seite",
            "meaning": "Over there / on the right-hand side",
            "example": "Da drüben ist die Post, gleich an der Ecke."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Nach dem Weg fragen in Leipzig (Netzwerk A1 Kapitel 3):",
      "lines": [
        {
          "speaker": "Paco",
          "german": "Entschuldigung, ich habe eine Frage: Wo ist hier die Touristen-Information?",
          "english": "Excuse me, I have a question: Where is the tourist information around here?"
        },
        {
          "speaker": "Passantin",
          "german": "Das ist ganz einfach! Gehen Sie hier geradeaus und dann die zweite Straße rechts.",
          "english": "That is very simple! Go straight ahead here and then take the second street on the right."
        },
        {
          "speaker": "Paco",
          "german": "Also hier geradeaus und dann rechts? Ist das weit?",
          "english": "So straight ahead here and then right? Is it far?"
        },
        {
          "speaker": "Passantin",
          "german": "Nein, nur zwei Minuten zu Fuß. Das Büro ist direkt am Marktplatz.",
          "english": "No, only two minutes on foot. The office is right on the marketplace."
        },
        {
          "speaker": "Paco",
          "german": "Vielen Dank und einen schönen Tag noch!",
          "english": "Thank you very much and have a nice day!"
        }
      ]
    },
    "funFact": {
      "title": "German Street Names (Straße & Platz)",
      "content": "In German cities, you will see 'Straße' (street), 'Gasse' (alley), 'Weg' (way), and 'Platz' (square). Notice how street names are often compounded into a single word: 'Goethestraße', 'Marienplatz', or 'Bahnhofstraße'!"
    },
    "practice": [
      {
        "question": "In the sentence 'Der Zug fährt nach Hamburg', what is the subject?",
        "options": [
          "nach Hamburg",
          "fährt",
          "Der Zug"
        ],
        "answer": "Der Zug",
        "explanation": "'Der Zug' performs the action of travelling (Wer fährt? -> Der Zug)."
      },
      {
        "question": "How do you tell someone in German to 'go straight ahead'?",
        "options": [
          "Gehen Sie geradeaus!",
          "Biegen Sie links ab!",
          "Kommen Sie hier!"
        ],
        "answer": "Gehen Sie geradeaus!",
        "explanation": "'geradeaus' means straight ahead."
      }
    ]
  },
  "a1-ch4-l19": {
    "overview": "Descriptive adjectives bring sentences to life. When adjectives are used after 'sein' (predicative adjectives), they take NO endings at all in German! In this lesson, you will master essential adjective pairs and opposites to describe cities, buildings, weather, and feelings.",
    "canDo": "Can describe objects, places, and people using predicative adjectives and their common opposites without grammatical endings.",
    "teacherNote": "Great news: When an adjective comes after 'sein' ('Das Hotel ist modern', 'Die Stadt ist schön'), the adjective does NOT change! You never need to add -e, -en, or -es in this position!",
    "sections": [
      {
        "title": "1. Wichtige Adjektiv-Gegenteile (Essential Opposites)",
        "description": "High-frequency descriptive pairs from Netzwerk A1:",
        "table": {
          "headers": [
            "Adjektiv (Positiv)",
            "Gegenteil (Opposite)",
            "Beispielsatz",
            "Bedeutung"
          ],
          "rows": [
            [
              "groß (big)",
              "klein (small)",
              "Das Zimmer ist groß, aber das Bad ist klein.",
              "big / small"
            ],
            [
              "alt (old)",
              "neu / modern (new / modern)",
              "Das Rathaus ist alt, das Hotel ist modern.",
              "old / modern"
            ],
            [
              "schön (beautiful)",
              "hässlich (ugly)",
              "Der Park ist sehr schön.",
              "beautiful / ugly"
            ],
            [
              "billig / günstig (cheap)",
              "teuer (expensive)",
              "Das Café ist günstig, das Restaurant ist teuer.",
              "cheap / expensive"
            ],
            [
              "laut (noisy)",
              "ruhig (quiet)",
              "Die Straße ist laut, der Garten ist ruhig.",
              "noisy / quiet"
            ],
            [
              "gut (good)",
              "schlecht (bad)",
              "Das Wetter ist heute gut.",
              "good / bad"
            ],
            [
              "hell (bright)",
              "dunkel (dark)",
              "Die Wohnung ist hell und sonnig.",
              "bright / dark"
            ]
          ]
        }
      },
      {
        "title": "2. Verstärkungswörter (very, quite, too)",
        "description": "Nuance your descriptions with these modifier adverbs:",
        "items": [
          {
            "term": "sehr (very)",
            "meaning": "Enhances the intensity of the adjective",
            "example": "Die Stadt ist sehr lebendig und sehr grün."
          },
          {
            "term": "ziemlich / ganz (quite / fairly)",
            "meaning": "Moderate degree",
            "example": "Der Kurs ist ziemlich interessant."
          },
          {
            "term": "zu (too / excessively)",
            "meaning": "Expresses an undesirable excess",
            "example": "Der Kaffee ist zu heiß! / Die Wohnung ist zu teuer."
          },
          {
            "term": "nicht so (not so / not very)",
            "meaning": "Polite negation",
            "example": "Das Restaurant ist nicht so gut."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Zwei Freunde vergleichen Städte in Deutschland (Netzwerk A1):",
      "lines": [
        {
          "speaker": "Gregor",
          "german": "Wie findest du eigentlich München, Paco?",
          "english": "What do you actually think of Munich, Paco?"
        },
        {
          "speaker": "Paco",
          "german": "Ich finde München wunderschön! Die Parks sind groß und sehr sauber.",
          "english": "I find Munich wonderful! The parks are big and very clean."
        },
        {
          "speaker": "Gregor",
          "german": "Ja, das stimmt. Aber die Mieten sind leider sehr teuer!",
          "english": "Yes, that's true. But the rents are unfortunately very expensive!"
        },
        {
          "speaker": "Paco",
          "german": "Das ist wahr. Aber die Lebensqualität ist fantastisch.",
          "english": "That is true. But the quality of life is fantastic."
        }
      ]
    },
    "funFact": {
      "title": "'Günstig' vs. 'Billig'",
      "content": "While both words mean 'cheap', 'billig' can sometimes carry a negative connotation of 'cheaply made / low quality'. In modern German, native speakers prefer the positive word 'günstig' (favorable / good value for money)!"
    },
    "practice": [
      {
        "question": "What is the opposite of 'teuer' (expensive)?",
        "options": [
          "groß",
          "billig / günstig",
          "laut"
        ],
        "answer": "billig / günstig",
        "explanation": "'billig' or 'günstig' means cheap or good value."
      },
      {
        "question": "How do you say: 'The apartment is too small'?",
        "options": [
          "Die Wohnung ist sehr klein.",
          "Die Wohnung ist zu klein.",
          "Die Wohnung ist ganz klein."
        ],
        "answer": "Die Wohnung ist zu klein.",
        "explanation": "'zu' means 'too' (excessively)."
      }
    ]
  }
};
