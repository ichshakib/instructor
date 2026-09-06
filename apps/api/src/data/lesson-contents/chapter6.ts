import { LessonContent } from "../../types/course.types";

export const CHAPTER_6_LESSONS: Record<string, LessonContent> = {
  "a1-ch6-l24": {
    "overview": "Negation is essential for expressing what you don't have, what you don't do, or what isn't true. In German, there are two distinct words for 'not': 'nicht' and 'kein'. In this lesson, you will master the simple rule to always choose the right one.",
    "canDo": "Can reliably decide between 'nicht' and 'kein' to negate verbs, adjectives, specific nouns, and indefinite nouns.",
    "teacherNote": "Here is the golden rule in one sentence: Use 'kein' whenever you would say 'a / an' or 'no' in English (nouns with ein- or zero article). Use 'nicht' for everything else (verbs, adjectives, proper names, and definite nouns with der/die/das)!",
    "sections": [
      {
        "title": "1. Die Entscheidungsregel: 'kein' vs. 'nicht'",
        "description": "Simple flowchart for choosing negation:",
        "table": {
          "headers": [
            "Was wird verneint?",
            "Regel",
            "Beispiel: Positiv",
            "Beispiel: Verneint"
          ],
          "rows": [
            [
              "Nomen mit 'ein-' oder ohne Artikel",
              "Verwende KEIN- (dekliniert wie ein-)",
              "Das ist ein Hotel.",
              "Das ist KEIN Hotel."
            ],
            [
              "Nomen im Plural ohne Artikel",
              "Verwende KEINE",
              "Ich habe Geschwister.",
              "Ich habe KEINE Geschwister."
            ],
            [
              "Verben (Handlung)",
              "Verwende NICHT (meist am Satzende)",
              "Ich rauche.",
              "Ich rauche NICHT."
            ],
            [
              "Adjektive & Adverbien",
              "Verwende NICHT vor dem Adjektiv",
              "Das Zimmer ist groß.",
              "Das Zimmer ist NICHT groß."
            ],
            [
              "Nomen mit bestimmtem Artikel (der/die/das)",
              "Verwende NICHT vor dem Nomen",
              "Das ist der Schlüssel.",
              "Das ist NICHT der Schlüssel."
            ],
            [
              "Eigennamen & Städte",
              "Verwende NICHT vor dem Namen",
              "Er heißt Gregor.",
              "Er heißt NICHT Gregor."
            ]
          ]
        }
      },
      {
        "title": "2. Deklination von 'kein' (Declension of kein)",
        "description": "'kein' declines exactly like 'ein', but also has a plural form ('keine'):",
        "table": {
          "headers": [
            "Fall / Genus",
            "Maskulin (m)",
            "Feminin (f)",
            "Neutral (n)",
            "Plural (pl)"
          ],
          "rows": [
            [
              "Nominativ (Subjekt)",
              "kein Tisch",
              "keine Lampe",
              "kein Buch",
              "keine Bücher"
            ],
            [
              "Akkusativ (Objekt)",
              "keinen Tisch",
              "keine Lampe",
              "kein Buch",
              "keine Bücher"
            ]
          ]
        }
      }
    ],
    "dialogue": {
      "context": "Zimmerbesichtigung im Wohnheim (Netzwerk A1 Kapitel 8):",
      "lines": [
        {
          "speaker": "Mieter",
          "german": "Ist hier in der Küche ein Kühlschrank?",
          "english": "Is there a refrigerator here in the kitchen?"
        },
        {
          "speaker": "Vermieter",
          "german": "Nein, hier ist leider kein Kühlschrank. Den müssen Sie selbst kaufen.",
          "english": "No, there is unfortunately no refrigerator here. You have to buy that yourself."
        },
        {
          "speaker": "Mieter",
          "german": "Schade. Und funktioniert das WLAN im Zimmer gut?",
          "english": "Pity. And does the Wi-Fi work well in the room?"
        },
        {
          "speaker": "Vermieter",
          "german": "Das WLAN ist schnell und kostet nicht extra.",
          "english": "The Wi-Fi is fast and does not cost extra."
        }
      ]
    },
    "funFact": {
      "title": "Why 'Ich habe nicht Auto' is Incorrect",
      "content": "English speakers often say 'I do not have a car' and literally translate it as 'Ich habe nicht ein Auto'. In German, 'nicht + ein' merges into the single word 'KEIN': 'Ich habe kein Auto'. Saying 'nicht ein' is only used for extreme dramatic emphasis ('Not a single car!')!"
    },
    "practice": [
      {
        "question": "How do you say: 'I have no time' in German?",
        "options": [
          "Ich habe nicht Zeit.",
          "Ich habe keine Zeit.",
          "Ich bin nicht Zeit."
        ],
        "answer": "Ich habe keine Zeit.",
        "explanation": "'Zeit' is a noun without an article (feminine die Zeit), so it is negated with 'keine'."
      },
      {
        "question": "How do you negate the sentence: 'Ich verstehe das' (I understand that)?",
        "options": [
          "Ich verstehe kein das.",
          "Ich verstehe das nicht.",
          "Ich nicht verstehe das."
        ],
        "answer": "Ich verstehe das nicht.",
        "explanation": "To negate a verb, place 'nicht' towards the end of the clause."
      }
    ]
  },
  "a1-ch6-l25": {
    "overview": "Possessive articles express ownership ('my book', 'your friend', 'our apartment'). In German, possessive articles match both the person possessing (mein, dein, sein, ihr) and the grammatical gender/case of the noun possessed.",
    "canDo": "Can use possessive articles (mein, dein, sein, ihr) in Nominative and Accusative to talk about family members, possessions, and colleagues.",
    "teacherNote": "Think of possessive articles as 'chameleons': the root word tells you WHO owns it (mein = my, dein = your, sein = his, ihr = her), and the ending tells you the GENDER and CASE of the thing owned (meine Mutter, meinen Bruder, mein Kind)!",
    "sections": [
      {
        "title": "1. Die Possessiv-Stämme (Possessive Roots)",
        "description": "Who owns the object:",
        "table": {
          "headers": [
            "Person",
            "Besitzer (Owner)",
            "Possessiv-Stamm",
            "Beispiel"
          ],
          "rows": [
            [
              "ich (I)",
              "my",
              "mein-",
              "mein Name, meine Stadt"
            ],
            [
              "du (you informal)",
              "your",
              "dein-",
              "dein Freund, deine Telefonnummer"
            ],
            [
              "er / es (he / it)",
              "his / its",
              "sein-",
              "sein Auto, seine Kollegin"
            ],
            [
              "sie (she)",
              "her",
              "ihr-",
              "ihr Kurs, ihre Tasche"
            ],
            [
              "wir (we)",
              "our",
              "unser-",
              "unser Lehrer, unsere Schule"
            ],
            [
              "ihr (you all)",
              "your (plural)",
              "euer / eure-",
              "euer Zimmer, eure Freunde"
            ],
            [
              "sie / Sie (they / You formal)",
              "their / Your (formal)",
              "ihr- / Ihr- (groß)",
              "ihr Haus / Ihr Name"
            ]
          ]
        }
      },
      {
        "title": "2. Endungen im Nominativ & Akkusativ",
        "description": "Possessives decline exactly like 'ein' and 'kein':",
        "table": {
          "headers": [
            "Fall",
            "Maskulin (m)",
            "Feminin (f)",
            "Neutral (n)",
            "Plural (pl)"
          ],
          "rows": [
            [
              "Nominativ (Subjekt)",
              "mein Vater",
              "meine Mutter",
              "mein Kind",
              "meine Eltern"
            ],
            [
              "Akkusativ (Objekt)",
              "meinen Vater (-en!)",
              "meine Mutter",
              "mein Kind",
              "meine Eltern"
            ]
          ]
        }
      }
    ],
    "dialogue": {
      "context": "Fotos zeigen im Café (Netzwerk A1 Kapitel 2):",
      "lines": [
        {
          "speaker": "Paco",
          "german": "Schau mal, Julia! Das ist ein Foto von meiner Familie.",
          "english": "Look, Julia! That is a photo of my family."
        },
        {
          "speaker": "Julia",
          "german": "Oh, wie schön! Wer ist das? Ist das dein Bruder?",
          "english": "Oh, how nice! Who is that? Is that your brother?"
        },
        {
          "speaker": "Paco",
          "german": "Ja, das ist mein Bruder Carlos und das ist seine Freundin Sofia.",
          "english": "Yes, that is my brother Carlos and that is his girlfriend Sofia."
        },
        {
          "speaker": "Julia",
          "german": "Und die Kinder dort drüben?",
          "english": "And the children over there?"
        },
        {
          "speaker": "Paco",
          "german": "Das sind meine Nichten. Ich besuche meine Familie im Sommer.",
          "english": "Those are my nieces. I am visiting my family in the summer."
        }
      ]
    },
    "funFact": {
      "title": "'euer' drops an 'e' before endings!",
      "content": "Notice this spelling quirk with 'euer' (your plural): without ending it is 'euer' ('Euer Zimmer ist schön'), but when you add the feminine/plural ending '-e', the middle 'e' drops out: 'eure Freunde' and 'eure Mutter' (not 'euere')!"
    },
    "practice": [
      {
        "question": "Choose the correct possessive for 'my brother' as direct object: 'Ich rufe _____ Bruder an.'",
        "options": [
          "mein",
          "meine",
          "meinen"
        ],
        "answer": "meinen",
        "explanation": "'Bruder' is masculine accusative, so the possessive takes '-en': meinen Bruder."
      },
      {
        "question": "How does Nina say: 'Her name is Julia'?",
        "options": [
          "Sein Name ist Julia.",
          "Ihr Name ist Julia.",
          "Dein Name ist Julia."
        ],
        "answer": "Ihr Name ist Julia.",
        "explanation": "'ihr' is the possessive article for feminine 3rd person singular (her)."
      }
    ]
  },
  "a1-ch6-l26": {
    "overview": "Describing whether things exist or are available in an area is one of the most common communicative tasks. In German, 'there is / there are' is expressed by the fixed idiom 'es gibt'. In this lesson, you will master using 'es gibt' with the Accusative case.",
    "canDo": "Can describe cities, neighborhoods, and facilities using 'es gibt' followed by accusative nouns.",
    "teacherNote": "'Es gibt' is a fixed idiom where 'es' is the subject and 'gibt' is the verb. Therefore, whatever exists is the DIRECT OBJECT and MUST be in the Akkusativ case! Masculine nouns take 'einen': 'Es gibt einen Supermarkt'.",
    "sections": [
      {
        "title": "1. Die Struktur: 'Es gibt' + Akkusativ",
        "description": "No matter if singular or plural, 'es gibt' stays identical:",
        "table": {
          "headers": [
            "Genus",
            "Akkusativ nach 'es gibt'",
            "Beispielsatz (Netzwerk A1)",
            "Bedeutung"
          ],
          "rows": [
            [
              "Maskulin (m)",
              "einen / keinen",
              "In der Nähe gibt es einen Park.",
              "There is a park nearby."
            ],
            [
              "Feminin (f)",
              "eine / keine",
              "Hier gibt es eine U-Bahn-Station.",
              "There is a subway station here."
            ],
            [
              "Neutral (n)",
              "ein / kein",
              "In Leipzig gibt es ein schönes Museum.",
              "There is a nice museum in Leipzig."
            ],
            [
              "Plural (pl)",
              "viele / keine",
              "In Berlin gibt es viele Theater.",
              "There are many theaters in Berlin."
            ]
          ]
        }
      },
      {
        "title": "2. Fragen mit 'Gibt es...?' (Is there...? / Are there...?)",
        "description": "To ask whether something exists, place 'Gibt' first:",
        "items": [
          {
            "term": "Gibt es hier ein Café?",
            "meaning": "Is there a café around here?",
            "example": "Ja, gleich an der Ecke gibt es ein schönes Café."
          },
          {
            "term": "Gibt es hier einen Geldautomaten?",
            "meaning": "Is there an ATM around here?",
            "example": "Ja, in der Sparkasse da drüben."
          },
          {
            "term": "Gibt es noch Fragen?",
            "meaning": "Are there any more questions? (teacher / presenter phrase)",
            "example": "Gibt es noch Fragen zum Kurs?"
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Neu in der Stadt – Erkundung des Viertels (Netzwerk A1 Kapitel 3):",
      "lines": [
        {
          "speaker": "Paco",
          "german": "Entschuldigung, gibt es hier in der Nähe einen Supermarkt?",
          "english": "Excuse me, is there a supermarket nearby?"
        },
        {
          "speaker": "Nachbarin",
          "german": "Ja, in der Goethestraße gibt es einen großen Edeka und eine Bäckerei.",
          "english": "Yes, on Goethe Street there is a large Edeka and a bakery."
        },
        {
          "speaker": "Paco",
          "german": "Toll! Und gibt es auch eine Apotheke?",
          "english": "Great! And is there also a pharmacy?"
        },
        {
          "speaker": "Nachbarin",
          "german": "Ja, direkt neben der Bäckerei gibt es eine Apotheke. Alles ganz nah!",
          "english": "Yes, right next to the bakery there is a pharmacy. Everything very close!"
        }
      ]
    },
    "funFact": {
      "title": "'Es gibt' Never Takes Plural Verbs!",
      "content": "In English, you must distinguish: 'There IS a park' (singular) vs. 'There ARE ten parks' (plural). In German, 'es gibt' NEVER changes to 'es geben'! You say 'Es gibt ein Museum' AND 'Es gibt zehn Museen'. The verb remains locked in 'gibt'!"
    },
    "practice": [
      {
        "question": "Complete the sentence: 'Gibt es hier in der Nähe _____ (der) Park?'",
        "options": [
          "ein Park",
          "einen Park",
          "einem Park"
        ],
        "answer": "einen Park",
        "explanation": "'es gibt' triggers the accusative case. 'Park' is masculine, so it takes 'einen Park'."
      },
      {
        "question": "How do you ask: 'Are there any questions?' in German?",
        "options": [
          "Geben es Fragen?",
          "Gibt es Fragen?",
          "Sind es Fragen?"
        ],
        "answer": "Gibt es Fragen?",
        "explanation": "'Gibt es Fragen?' is the standard idiom, keeping 'gibt' singular."
      }
    ]
  },
  "a1-ch6-l27": {
    "overview": "Coordinating conjunctions connect two sentences without altering the normal word order. In German, the most important conjunctions are 'und' (and), 'aber' (but), and 'oder' (or). They are known as 'Position 0' connectors.",
    "canDo": "Can connect simple main clauses smoothly using 'und', 'aber', and 'oder' while preserving Position 2 verb placement.",
    "teacherNote": "Remember: 'und', 'aber', and 'oder' sit at 'Position 0'! They act like a bridge between sentences, so the sentence that follows starts counting fresh: Position 1 (Subject) + Position 2 (Verb)!",
    "sections": [
      {
        "title": "1. Die Position 0 Konnektoren (und, aber, oder)",
        "description": "Connecting two complete independent clauses:",
        "table": {
          "headers": [
            "Konnektor",
            "Bedeutung",
            "Erster Satz",
            "Konnektor (Pos 0)",
            "Zweiter Satz (Pos 1 + Pos 2)"
          ],
          "rows": [
            [
              "und",
              "and",
              "Ich lerne Deutsch",
              ", und",
              "ich wohne in München."
            ],
            [
              "aber",
              "but (contrast)",
              "Paco lernt fleißig",
              ", aber",
              "er spricht noch nicht perfekt."
            ],
            [
              "oder",
              "or (alternative)",
              "Trinkst du einen Kaffee",
              ", oder",
              "möchtest du einen Tee?"
            ]
          ]
        }
      },
      {
        "title": "2. Kommasetzung bei Konnektoren",
        "description": "Punctuation rules in German writing:",
        "items": [
          {
            "term": "aber (immer mit Komma!)",
            "meaning": "Always place a comma before 'aber' when linking two clauses",
            "example": "Die Wohnung ist schön, aber sie ist teuer."
          },
          {
            "term": "und / oder (meist ohne Komma bei kurzem Subjekt)",
            "meaning": "When subjects are identical, you can omit the repeated subject",
            "example": "Ich heiße Paco und komme aus Spanien."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Freizeitplanung am Wochenende (Netzwerk A1 Kapitel 2):",
      "lines": [
        {
          "speaker": "Nina",
          "german": "Gregor, gehen wir am Samstag ins Kino oder hast du schon etwas vor?",
          "english": "Gregor, are we going to the cinema on Saturday or do you already have plans?"
        },
        {
          "speaker": "Gregor",
          "german": "Ich habe Zeit, aber der Film beginnt erst um 20 Uhr.",
          "english": "I have time, but the movie doesn't start until 8 PM."
        },
        {
          "speaker": "Nina",
          "german": "Kein Problem! Wir können vorher etwas essen und dann gehen wir zusammen ins Kino.",
          "english": "No problem! We can eat something beforehand and then we'll go to the cinema together."
        },
        {
          "speaker": "Gregor",
          "german": "Super Idee, so machen wir das!",
          "english": "Super idea, that's what we'll do!"
        }
      ]
    },
    "funFact": {
      "title": "The Acronym ADUSO",
      "content": "German teachers teach the acronym ADUSO for the five Position 0 conjunctions: Aber (but), Denn (because), Und (and), Sondern (but rather), Oder (or). None of these five change the word order of the following clause!"
    },
    "practice": [
      {
        "question": "Which sentence is grammatically correct with 'aber'?",
        "options": [
          "Ich habe Zeit, aber ich lerne heute.",
          "Ich habe Zeit, aber lerne ich heute.",
          "Ich habe Zeit, aber heute ich lerne."
        ],
        "answer": "Ich habe Zeit, aber ich lerne heute.",
        "explanation": "'aber' is Position 0. The next clause follows normal word order: 'ich' (Pos 1) + 'lerne' (Pos 2)."
      },
      {
        "question": "What is the meaning of 'oder'?",
        "options": [
          "and",
          "or",
          "but"
        ],
        "answer": "or",
        "explanation": "'oder' means 'or'."
      }
    ]
  },
  "a1-ch6-l28": {
    "overview": "Expressing what you like, what you enjoy doing, and what you prefer is the key to engaging conversations about hobbies, food, and travel. In German, there is a clear distinction between 'mögen' (verb used with nouns) and 'gern / lieber / am liebsten' (adverbs used with verbs).",
    "canDo": "Can state likes with 'mögen', express enjoyment of activities with 'gern', and make comparisons with 'lieber' (prefer) and 'am liebsten' (favorite).",
    "teacherNote": "English uses 'to like' for both nouns ('I like pizza') and verbs ('I like swimming'). German uses TWO different tools: For nouns, use the verb MÖGEN ('Ich mag Pizza'). For activities/verbs, use the adverb GERN ('Ich schwimme gern')!",
    "sections": [
      {
        "title": "1. Der Vergleich: 'mögen' vs. 'gern'",
        "description": "When to use the verb vs. the adverb:",
        "table": {
          "headers": [
            "Werkzeug (Tool)",
            "Wann benutzt man es?",
            "Konstruktion",
            "Beispiel (Netzwerk A1)"
          ],
          "rows": [
            [
              "mögen (Verb)",
              "Mit Nomen (Sachen, Personen, Essen)",
              "Subjekt + mag / magst... + Nomen",
              "Ich mag Musik. / Magst du Pizza?"
            ],
            [
              "gern (Adverb)",
              "Mit Verben (Aktivitäten, Hobbys)",
              "Subjekt + Verb + GERN",
              "Ich höre gern Musik. / Ich koche gern."
            ]
          ]
        }
      },
      {
        "title": "2. Die Steigerung: gern -> lieber -> am liebsten",
        "description": "Expressing preferences and favorites from Netzwerk Kapitel 2 & 4:",
        "table": {
          "headers": [
            "Stufe (Degree)",
            "Wort",
            "Bedeutung",
            "Beispielsatz"
          ],
          "rows": [
            [
              "Grundstufe (Positive)",
              "gern",
              "like doing (gladly)",
              "Ich trinke gern Tee."
            ],
            [
              "Vergleichsstufe (Comparative)",
              "lieber",
              "prefer doing (rather)",
              "Aber ich trinke lieber Kaffee."
            ],
            [
              "Höchststufe (Superlative)",
              "am liebsten",
              "like doing most (favorite)",
              "Am liebsten trinke ich Orangensaft!"
            ]
          ]
        }
      }
    ],
    "dialogue": {
      "context": "Über Hobbys und Freizeit sprechen (Netzwerk A1 Kapitel 2):",
      "lines": [
        {
          "speaker": "Julia",
          "german": "Gregor, was machst du gern in deiner Freizeit?",
          "english": "Gregor, what do you like doing in your free time?"
        },
        {
          "speaker": "Gregor",
          "german": "Ich spiele gern Fußball und lese gern Romane. Und du?",
          "english": "I like playing football and enjoy reading novels. And you?"
        },
        {
          "speaker": "Julia",
          "german": "Ich reise sehr gern! Aber am liebsten koche ich mit Freunden.",
          "english": "I really like travelling! But most of all I love cooking with friends."
        },
        {
          "speaker": "Gregor",
          "german": "Toll! Kochst du lieber italienisch oder asiatisch?",
          "english": "Great! Do you prefer cooking Italian or Asian food?"
        },
        {
          "speaker": "Julia",
          "german": "Lieber italienisch, Pasta ist mein Lieblingsessen.",
          "english": "Preferably Italian, pasta is my favorite food."
        }
      ]
    },
    "funFact": {
      "title": "'Lieblings-' as a Prefix",
      "content": "To say 'my favorite X' in German, attach the word 'Lieblings-' directly to the front of any noun: das Lieblingsessen (favorite food), das Lieblingsbuch (favorite book), die Lieblingsfarbe (favorite color), der Lieblingsfilm (favorite movie)!"
    },
    "practice": [
      {
        "question": "How do you say: 'I like swimming' in natural German?",
        "options": [
          "Ich mag schwimmen.",
          "Ich schwimme gern.",
          "Ich liebe schwimmen."
        ],
        "answer": "Ich schwimme gern.",
        "explanation": "To express enjoying an activity, German places the adverb 'gern' after the conjugated verb: Ich schwimme gern."
      },
      {
        "question": "What is the comparative form of 'gern' meaning 'prefer'?",
        "options": [
          "gerner",
          "lieber",
          "besser"
        ],
        "answer": "lieber",
        "explanation": "The comparative form of 'gern' is 'lieber' (prefer / would rather)."
      }
    ]
  }
};
