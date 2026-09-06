import { LessonContent } from "../api";

export const CHAPTER_8_LESSONS: Record<string, LessonContent> = {
  "a1-ch8-l34": {
    "overview": "Telling the time (Die Uhrzeit) is essential for catching trains, scheduling meetings, and planning your day. German has two systems: the official 24-hour time used in announcements and work, and the conversational 12-hour phrasing used among friends and family.",
    "canDo": "Can ask for the time ('Wie spät ist es?'), understand official train and flight announcements, and use colloquial 12-hour phrasing (halb, Viertel vor, Viertel nach).",
    "teacherNote": "Beware of 'halb'! In English, 'half three' (British) means 3:30. In German, 'halb drei' means half-way TO three, which is 2:30! Think of it as: 'the clock is half-full on its way to hour 3'!",
    "sections": [
      {
        "title": "1. Offizielle Uhrzeit (24-Stunden-System)",
        "description": "Used at train stations, airports, news, and business appointments:",
        "table": {
          "headers": [
            "Uhrzeit",
            "Offizielle Aussprache",
            "Englische Bedeutung"
          ],
          "rows": [
            [
              "08:00 Uhr",
              "acht Uhr",
              "8:00 AM"
            ],
            [
              "14:15 Uhr",
              "vierzehn Uhr fünfzehn",
              "2:15 PM"
            ],
            [
              "17:30 Uhr",
              "siebzehn Uhr dreißig",
              "5:30 PM"
            ],
            [
              "20:45 Uhr",
              "zwanzig Uhr fünfundvierzig",
              "8:45 PM"
            ],
            [
              "22:10 Uhr",
              "zweiundzwanzig Uhr zehn",
              "10:10 PM"
            ]
          ]
        }
      },
      {
        "title": "2. Umgangssprachliche Uhrzeit (12-Stunden-System)",
        "description": "Conversational phrasing among friends and colleagues from Netzwerk Kapitel 5:",
        "table": {
          "headers": [
            "Uhrzeit",
            "Umgangssprachlich",
            "Wort-für-Wort Logik"
          ],
          "rows": [
            [
              "08:15",
              "Viertel nach acht",
              "Quarter past eight"
            ],
            [
              "08:30",
              "HALB NEUN (not half eight!)",
              "Half-way TO nine"
            ],
            [
              "08:45",
              "Viertel vor neun",
              "Quarter to nine"
            ],
            [
              "08:20",
              "zehn vor halb neun / zwanzig nach acht",
              "Ten before half nine"
            ],
            [
              "08:40",
              "zehn nach halb neun / zwanzig vor neun",
              "Ten after half nine"
            ]
          ]
        }
      },
      {
        "title": "3. Fragen nach der Uhrzeit (Asking the Time)",
        "description": "Two identical ways to ask what time it is:",
        "items": [
          {
            "term": "Wie spät ist es? / Wie viel Uhr ist es?",
            "meaning": "How late is it? / How much o'clock is it? (both mean 'What time is it?')",
            "example": "Entschuldigung, wie spät ist es bitte? - Es ist Viertel vor fünf."
          },
          {
            "term": "Um wie viel Uhr...? / Wann...?",
            "meaning": "At what time...? / When...?",
            "example": "Um wie viel Uhr beginnt der Film? - Um acht Uhr."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Verabredung am Hauptbahnhof in Hannover (Netzwerk A1 Kapitel 5):",
      "lines": [
        {
          "speaker": "Paco",
          "german": "Entschuldigung, Gregor, wie spät ist es jetzt?",
          "english": "Excuse me, Gregor, what time is it now?"
        },
        {
          "speaker": "Gregor",
          "german": "Es ist genau halb drei. Unser Zug fährt um Viertel nach drei ab.",
          "english": "It is exactly half-past two (2:30). Our train departs at a quarter past three (3:15)."
        },
        {
          "speaker": "Paco",
          "german": "Super, dann haben wir noch eine Dreiviertelstunde Zeit. Trinken wir einen Kaffee?",
          "english": "Great, then we still have 45 minutes. Shall we drink a coffee?"
        },
        {
          "speaker": "Gregor",
          "german": "Gute Idee! Da drüben ist ein schönes Café an Gleis 2.",
          "english": "Good idea! Over there is a nice café at platform 2."
        }
      ]
    },
    "funFact": {
      "title": "Punctuality (Pünktlichkeit) in Germany",
      "content": "Punctuality is a deeply ingrained cultural value in the DACH countries. Arriving 5 minutes early is considered on time. If you have an appointment at 15:00, arriving at 15:05 without sending a message is viewed as inconsiderate. When in doubt, always aim to arrive 5–10 minutes early!"
    },
    "practice": [
      {
        "question": "What time does 'halb sechs' mean in German?",
        "options": [
          "6:30",
          "5:30",
          "6:15"
        ],
        "answer": "5:30",
        "explanation": "'halb sechs' means half-way TO six o'clock, which is 5:30."
      },
      {
        "question": "How do you ask: 'At what time does the course start?'",
        "options": [
          "Um wie viel Uhr beginnt der Kurs?",
          "Wie spät beginnt der Kurs?",
          "Wo beginnt der Kurs?"
        ],
        "answer": "Um wie viel Uhr beginnt der Kurs?",
        "explanation": "'Um wie viel Uhr beginnt...?' means 'At what time does ... start?'."
      }
    ]
  },
  "a1-ch8-l35": {
    "overview": "Days of the week, months, seasons, and calendar dates structure all personal and professional planning. In this lesson, you will master the 7 days of the week, the 12 months, the 4 seasons, and how to write and speak dates using ordinal numbers ('am ersten Mai').",
    "canDo": "Can state days of the week, months, seasons, and formulate appointment dates and birthdays using ordinal numbers.",
    "teacherNote": "All days of the week, months, and seasons are MASCULINE (der Montag, der Januar, der Sommer)! That is why they all take 'am' (an dem Montag) and 'im' (in dem Sommer)!",
    "sections": [
      {
        "title": "1. Die Wochentage (Days of the Week)",
        "description": "Always paired with 'am' (on):",
        "table": {
          "headers": [
            "Wochentag",
            "Abkürzung",
            "Bedeutung",
            "Beispiel"
          ],
          "rows": [
            [
              "Montag",
              "Mo",
              "Monday",
              "am Montag"
            ],
            [
              "Dienstag",
              "Di",
              "Tuesday",
              "am Dienstag"
            ],
            [
              "Mittwoch",
              "Mi",
              "Wednesday (Mid-week)",
              "am Mittwoch"
            ],
            [
              "Donnerstag",
              "Do",
              "Thursday (Thor's day)",
              "am Donnerstag"
            ],
            [
              "Freitag",
              "Fr",
              "Friday",
              "am Freitag"
            ],
            [
              "Samstag / Sonnabend",
              "Sa",
              "Saturday",
              "am Samstag"
            ],
            [
              "Sonntag",
              "So",
              "Sunday",
              "am Sonntag"
            ],
            [
              "das Wochenende",
              "WE",
              "the weekend",
              "am Wochenende"
            ]
          ]
        }
      },
      {
        "title": "2. Die 4 Jahreszeiten & 12 Monate",
        "description": "Always paired with 'im' (in):",
        "table": {
          "headers": [
            "Jahreszeit (im...)",
            "Monate 1",
            "Monate 2",
            "Monate 3"
          ],
          "rows": [
            [
              "der Frühling (Spring)",
              "März",
              "April",
              "Mai"
            ],
            [
              "der Sommer (Summer)",
              "Juni",
              "Juli",
              "August"
            ],
            [
              "der Herbst (Autumn)",
              "September",
              "Oktober",
              "November"
            ],
            [
              "der Winter (Winter)",
              "Dezember",
              "Januar",
              "Februar"
            ]
          ]
        }
      },
      {
        "title": "3. Datum & Ordnungszahlen (Calendar Dates)",
        "description": "How to say dates aloud in German:",
        "items": [
          {
            "term": "Numbers 1–19: add '-ten'",
            "meaning": "am ersten (1st), am zweiten (2nd), am dritten (3rd), am siebten (7th)",
            "example": "Mein Geburtstag ist am vierten Mai."
          },
          {
            "term": "Numbers 20–31: add '-sten'",
            "meaning": "am zwanzigsten (20th), am einunddreißigsten (31st)",
            "example": "Der Kurs endet am dreißigsten Juni."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Geburtstagskalender im Büro (Netzwerk A1 Kapitel 5):",
      "lines": [
        {
          "speaker": "Nina",
          "german": "Paco, wann hast du eigentlich Geburtstag?",
          "english": "Paco, when is your birthday actually?"
        },
        {
          "speaker": "Paco",
          "german": "Ich habe am fünfzehnten Oktober Geburtstag, im Herbst. Und du?",
          "english": "My birthday is on the fifteenth of October, in autumn. And you?"
        },
        {
          "speaker": "Nina",
          "german": "Mein Geburtstag ist am dritten August, mitten im Sommer!",
          "english": "My birthday is on the third of August, right in the middle of summer!"
        },
        {
          "speaker": "Paco",
          "german": "Toll, da können wir eine Gartenparty feiern!",
          "english": "Great, then we can celebrate a garden party!"
        }
      ]
    },
    "funFact": {
      "title": "'Mittwoch' Has No 'Tag'!",
      "content": "Notice how all days of the week end in '-tag' (Montag, Dienstag, Donnerstag, Freitag, Samstag, Sonntag)—except Wednesday! In German, Wednesday is called 'Mittwoch', literally meaning 'mid-week' (Mitte der Woche). In ancient German, it was named after the god Wodan (like English Wednesday), but church reformers replaced it with 'Mittwoch' to remove the pagan reference!"
    },
    "practice": [
      {
        "question": "Which preposition do you use with months and seasons?",
        "options": [
          "am",
          "im",
          "um"
        ],
        "answer": "im",
        "explanation": "Months and seasons take 'im' (im Juli, im Sommer)."
      },
      {
        "question": "How do you pronounce the date 'am 1. Mai' aloud?",
        "options": [
          "am eins Mai",
          "am ersten Mai",
          "am erst Mai"
        ],
        "answer": "am ersten Mai",
        "explanation": "Dates after 'am' take ordinal endings: am ersten Mai."
      }
    ]
  },
  "a1-ch8-l36": {
    "overview": "Separable verbs (trennbare Verben) are one of the most distinctive features of the German language. In these verbs, a prefix detaches from the stem in the present tense and flies all the way to the very end of the clause. In this lesson, you will master daily routine timelines using separable verbs from Netzwerk Kapitel 5.",
    "canDo": "Can identify separable prefixes, conjugate separable verbs, and place the prefix accurately at the end of main clauses to describe daily routines.",
    "teacherNote": "Think of separable verbs as a rocket: the verb stem stays in Position 2, and the prefix detaches like a booster rocket and lands at the very END of the sentence! For example: 'aufstehen' -> 'Ich STEHE um 6 Uhr AUF.'",
    "sections": [
      {
        "title": "1. Typische trennbare Präfixe (Separable Prefixes)",
        "description": "Common separable prefixes from Netzwerk A1:",
        "table": {
          "headers": [
            "Präfix",
            "Infinitiv",
            "Bedeutung",
            "Beispielsatz im Präsens"
          ],
          "rows": [
            [
              "auf-",
              "aufstehen",
              "to get up / stand up",
              "Ich stehe jeden Tag um 7 Uhr AUF."
            ],
            [
              "an-",
              "anrufen",
              "to call on the phone",
              "Gregor ruft seine Mutter AN."
            ],
            [
              "ein-",
              "einkaufen",
              "to go grocery shopping",
              "Wir kaufen am Nachmittag EIN."
            ],
            [
              "fern-",
              "fernsehen",
              "to watch TV",
              "Er sieht am Abend gern FERN."
            ],
            [
              "aus-",
              "aussteigen",
              "to get off / disembark",
              "Wir steigen am Hauptbahnhof AUS."
            ],
            [
              "mit-",
              "mitbringen",
              "to bring along",
              "Paco bringt einen Kuchen MIT."
            ],
            [
              "vor-",
              "vorbereiten",
              "to prepare",
              "Sie bereitet die Präsentation VOR."
            ]
          ]
        }
      },
      {
        "title": "2. Der typische Tagesablauf (A Typical Daily Routine)",
        "description": "A timeline of daily activities using separable verbs:",
        "items": [
          {
            "term": "06:30 – aufstehen (to get up)",
            "meaning": "Ich stehe um halb sieben auf.",
            "example": "Wann stehst du morgens auf?"
          },
          {
            "term": "07:30 – losfahren (to depart / leave)",
            "meaning": "Ich fahre um halb acht los.",
            "example": "Er fährt mit dem Bus los."
          },
          {
            "term": "18:00 – einkaufen (to shop)",
            "meaning": "Ich kaufe im Supermarkt ein.",
            "example": "Wir kaufen für das Abendessen ein."
          },
          {
            "term": "23:00 – einschlafen (to fall asleep)",
            "meaning": "Ich schlafe um elf Uhr ein.",
            "example": "Sie schläft schnell ein."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Ein ganz normaler Arbeitstag – Interview (Netzwerk A1 Kapitel 5):",
      "lines": [
        {
          "speaker": "Julia",
          "german": "Paco, wie sieht ein typischer Tag bei dir aus?",
          "english": "Paco, what does a typical day look like for you?"
        },
        {
          "speaker": "Paco",
          "german": "Ich stehe um sieben Uhr auf und frühstücke gemütlich. Um acht Uhr fahre ich zum Deutschkurs.",
          "english": "I get up at seven o'clock and eat breakfast comfortably. At eight o'clock I leave for German class."
        },
        {
          "speaker": "Julia",
          "german": "Und was machst du am Nachmittag nach dem Kurs?",
          "english": "And what do you do in the afternoon after class?"
        },
        {
          "speaker": "Paco",
          "german": "Ich kaufe im Supermarkt ein, koche etwas und am Abend sehe ich gern mit Freunden fern.",
          "english": "I shop at the supermarket, cook something, and in the evening I like watching TV with friends."
        }
      ]
    },
    "funFact": {
      "title": "Stressed Prefixes are ALWAYS Separable!",
      "content": "How do you know if a verb is separable? Listen to the stress! If the prefix is STRESSED (louder), it is separable: ÁUFstehen, ÉINkaufen, ÁNrufen. If the prefix is unstressed (be-, ver-, zer-, ent-, ge-), it NEVER separates: verstehen, bezahlen, bekommen!"
    },
    "practice": [
      {
        "question": "Where does the prefix 'auf-' go in the sentence: 'Ich _____ jeden Morgen um 6 Uhr _____.'?",
        "options": [
          "stehe auf / —",
          "stehe / auf",
          "aufstehe / —"
        ],
        "answer": "stehe / auf",
        "explanation": "In main clauses, the conjugated verb stem goes in Position 2 and the separable prefix goes to the very end: 'Ich stehe ... auf'."
      },
      {
        "question": "Which of these verbs is separable?",
        "options": [
          "bezahlen",
          "einkaufen",
          "verstehen"
        ],
        "answer": "einkaufen",
        "explanation": "'ein-' is a separable prefix (Ich kaufe ein)."
      }
    ]
  },
  "a1-ch8-l37": {
    "overview": "Describing family members, relationships, and personal qualities is a central theme of A1 conversation. In this lesson, you will master German family vocabulary, learn terms for extended family, and practice describing appearance and character traits.",
    "canDo": "Can name family members, talk about your relatives and marital status, and describe people's appearance and character.",
    "teacherNote": "German has a wonderful collective word for siblings: 'die Geschwister' (meaning brothers and sisters together). If someone asks: 'Hast du Geschwister?', you can simply answer: 'Ja, einen Bruder und zwei Schwestern'!",
    "sections": [
      {
        "title": "1. Die Familie & Verwandtschaft (Family & Relatives)",
        "description": "Core family vocabulary from Netzwerk Kapitel 2:",
        "table": {
          "headers": [
            "Familienmitglied",
            "Maskulin (der)",
            "Feminin (die)",
            "Plural (die)"
          ],
          "rows": [
            [
              "Parents / Grandparents",
              "der Vater / der Großvater (Opa)",
              "die Mutter / die Großmutter (Oma)",
              "die Eltern / die Großeltern"
            ],
            [
              "Children / Grandchildren",
              "der Sohn / der Enkel",
              "die Tochter / die Enkelin",
              "die Kinder / die Enkelkinder"
            ],
            [
              "Siblings",
              "der Bruder",
              "die Schwester",
              "die Geschwister (siblings)"
            ],
            [
              "Spouses / Partners",
              "der Ehemann / der Partner",
              "die Ehefrau / die Partnerin",
              "die Eheleute / die Paare"
            ],
            [
              "Extended Family",
              "der Onkel / der Cousin",
              "die Tante / die Cousine",
              "die Onkel / die Tanten"
            ]
          ]
        }
      },
      {
        "title": "2. Familienstand & Eigenschaften (Marital Status & Traits)",
        "description": "Describing status and character:",
        "items": [
          {
            "term": "ledig / verheiratet / geschieden",
            "meaning": "single / married / divorced",
            "example": "Ich bin ledig, aber mein Bruder ist verheiratet."
          },
          {
            "term": "sympathisch / freundlich / nett",
            "meaning": "likeable / friendly / kind",
            "example": "Meine Kollegen sind sehr sympathisch."
          },
          {
            "term": "groß / klein / sportlich",
            "meaning": "tall / short / athletic",
            "example": "Mein Vater ist groß und sehr sportlich."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Familienfotos ansehen (Netzwerk A1 Kapitel 2):",
      "lines": [
        {
          "speaker": "Gregor",
          "german": "Das ist ein schönes Foto, Nina! Wer sind die Personen?",
          "english": "That is a nice photo, Nina! Who are the people?"
        },
        {
          "speaker": "Nina",
          "german": "Das sind meine Eltern und meine beiden Geschwister. Mein Bruder heißt Lukas.",
          "english": "Those are my parents and my two siblings. My brother is called Lukas."
        },
        {
          "speaker": "Gregor",
          "german": "Und wie alt ist deine Schwester?",
          "english": "And how old is your sister?"
        },
        {
          "speaker": "Nina",
          "german": "Sie ist 22 Jahre alt und studiert Medizin in Freiburg.",
          "english": "She is 22 years old and is studying medicine in Freiburg."
        }
      ]
    },
    "funFact": {
      "title": "'Opa' and 'Oma' are Universal",
      "content": "While the formal words are 'der Großvater' and 'die Großmutter', in actual German families practically everyone affectionately says 'der Opa' (Grandpa) and 'die Oma' (Grandma)!"
    },
    "practice": [
      {
        "question": "What does the German word 'Geschwister' mean?",
        "options": [
          "Grandparents",
          "Siblings (brothers & sisters)",
          "Cousins"
        ],
        "answer": "Siblings (brothers & sisters)",
        "explanation": "'Geschwister' is the collective plural noun for brothers and sisters."
      },
      {
        "question": "How do you say: 'I am married' in German?",
        "options": [
          "Ich bin ledig.",
          "Ich bin verheiratet.",
          "Ich bin geschieden."
        ],
        "answer": "Ich bin verheiratet.",
        "explanation": "'verheiratet' means married."
      }
    ]
  },
  "a1-ch8-l38": {
    "overview": "Finding an apartment, describing rooms, and discussing furniture are key communicative tasks in Germany. In this lesson, you will master housing vocabulary, rooms, furniture items, and understand rental ads (Kaltmiete vs. Warmmiete) from Netzwerk Kapitel 8 ('Meine Wohnung').",
    "canDo": "Can describe your home and rooms, name common furniture pieces, and understand German apartment rental terms (Zimmer, Küche, Bad, Balkon, Warmmiete).",
    "teacherNote": "German apartment listings count the TOTAL number of rooms, not just bedrooms! A '3-Zimmer-Wohnung' means: living room + bedroom + study/second bedroom (kitchen and bathroom are listed separately: '3 Zimmer, Küche, Bad')!",
    "sections": [
      {
        "title": "1. Die Räume im Haus (Rooms in the House)",
        "description": "Core room vocabulary from Netzwerk Kapitel 8:",
        "table": {
          "headers": [
            "Zimmer (Room)",
            "Genus & Artikel",
            "Typische Möbel / Ausstattung",
            "Bedeutung"
          ],
          "rows": [
            [
              "Wohnzimmer",
              "das Wohnzimmer",
              "das Sofa, der Sessel, der Fernseher",
              "Living room"
            ],
            [
              "Schlafzimmer",
              "das Schlafzimmer",
              "das Bett, der Kleiderschrank",
              "Bedroom"
            ],
            [
              "Küche",
              "die Küche",
              "der Herd, der Kühlschrank, der Tisch",
              "Kitchen"
            ],
            [
              "Badezimmer",
              "das Badezimmer / das Bad",
              "die Dusche, die Badewanne, die Toilette",
              "Bathroom"
            ],
            [
              "Flur / Diele",
              "der Flur",
              "die Garderobe, der Spiegel",
              "Hallway / corridor"
            ],
            [
              "Balkon / Garten",
              "der Balkon / der Garten",
              "die Pflanzen, die Gartenstühle",
              "Balcony / garden"
            ]
          ]
        }
      },
      {
        "title": "2. Wichtige Mietbegriffe (Rental Vocabulary)",
        "description": "Essential terms on German housing portals (ImmoScout24, WG-Gesucht):",
        "items": [
          {
            "term": "die Kaltmiete (Net Rent)",
            "meaning": "Base rent for the apartment space alone (without heating and utilities)",
            "example": "Die Kaltmiete beträgt 650 Euro pro Monat."
          },
          {
            "term": "die Nebenkosten (Utilities)",
            "meaning": "Heating, water, trash collection, and building maintenance",
            "example": "Nebenkosten: ca. 150 Euro."
          },
          {
            "term": "die Warmmiete (Gross Rent)",
            "meaning": "Total monthly rent including utilities (Kaltmiete + Nebenkosten)",
            "example": "Die Warmmiete ist 800 Euro."
          },
          {
            "term": "die WG (Wohngemeinschaft)",
            "meaning": "Shared apartment popular with students and young professionals",
            "example": "Ich wohne in einer 3er-WG in Berlin-Mitte."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Wohnungsbesichtigung in München (Netzwerk A1 Kapitel 8):",
      "lines": [
        {
          "speaker": "Vermieterin",
          "german": "Guten Tag, Herr Garcia! Kommen Sie bitte herein. Das ist die Wohnung.",
          "english": "Good day, Mr. Garcia! Please come in. This is the apartment."
        },
        {
          "speaker": "Paco",
          "german": "Guten Tag! Die Wohnung ist wirklich sehr hell und modern. Wie groß ist sie?",
          "english": "Good day! The apartment is really very bright and modern. How big is it?"
        },
        {
          "speaker": "Vermieterin",
          "german": "Sie hat 65 Quadratmeter: zwei Zimmer, eine Einbauküche, ein Bad und einen großen Balkon.",
          "english": "It has 65 square meters: two rooms, a fitted kitchen, a bathroom, and a large balcony."
        },
        {
          "speaker": "Paco",
          "german": "Sehr schön! Wie hoch ist die Warmmiete?",
          "english": "Very nice! How high is the total rent including heating?"
        },
        {
          "speaker": "Vermieterin",
          "german": "Die Kaltmiete ist 750 Euro plus 150 Euro Nebenkosten, also 900 Euro warm.",
          "english": "The base rent is 750 euros plus 150 euros utilities, so 900 euros total."
        }
      ]
    },
    "funFact": {
      "title": "Kitchens Don't Always Come with Apartments!",
      "content": "In Germany, many unfurnished apartments are rented out completely bare—without a stove, sink, or kitchen cabinets! Renters either buy and install their own kitchen ('Einbauküche' / EBK) or purchase it from the previous tenant ('die Ablöse'). Always check if the listing says 'mit Einbauküche'!"
    },
    "practice": [
      {
        "question": "What does a '3-Zimmer-Wohnung' mean in a German rental ad?",
        "options": [
          "An apartment with 3 bedrooms",
          "An apartment with 3 total living rooms/bedrooms plus kitchen and bath",
          "An apartment for 3 people"
        ],
        "answer": "An apartment with 3 total living rooms/bedrooms plus kitchen and bath",
        "explanation": "German apartment sizes count total living rooms and bedrooms (kitchen and bath are separate)."
      },
      {
        "question": "What is 'die Warmmiete'?",
        "options": [
          "The base rent without heating",
          "The total monthly rent including heating and utilities",
          "The deposit"
        ],
        "answer": "The total monthly rent including heating and utilities",
        "explanation": "Warmmiete = Kaltmiete + Nebenkosten (utilities/heating)."
      }
    ]
  }
};
