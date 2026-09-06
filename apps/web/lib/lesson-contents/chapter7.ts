import { LessonContent } from "../api";

export const CHAPTER_7_LESSONS: Record<string, LessonContent> = {
  "a1-ch7-l29": {
    "overview": "The Dative case (der Dativ) marks the indirect object—the beneficiary or recipient of an action (answering 'Wem?' / To whom?). In this lesson, you will master the article transformations in Dativ (dem, der, dem, den + n) and learn verbs that inherently require a Dative object.",
    "canDo": "Can identify the recipient of an action by asking 'Wem?' and apply correct Dative articles (dem, der, dem, den + n) to nouns.",
    "teacherNote": "Remember this quick rhyme for Dative definite articles: 'DEM - DER - DEM - DEN plus N'! Notice that in the plural, you not only change the article to 'den', but you ALSO add an '-n' to the end of the noun if it doesn't already have one (den Kindern, den Freunden)!",
    "sections": [
      {
        "title": "1. Die Artikel im Dativ (Dative Article Shifts)",
        "description": "How articles change to mark the indirect object:",
        "table": {
          "headers": [
            "Genus",
            "Nominativ (Subjekt)",
            "Dativ (Empfänger / Wem?)",
            "Indefinit / Negativ im Dativ"
          ],
          "rows": [
            [
              "Maskulin (m)",
              "der Mann",
              "DEM Mann",
              "einem / keinem Mann"
            ],
            [
              "Feminin (f)",
              "die Frau",
              "DER Frau",
              "einer / keiner Frau"
            ],
            [
              "Neutral (n)",
              "das Kind",
              "DEM Kind",
              "einem / keinem Kind"
            ],
            [
              "Plural (pl)",
              "die Freunde",
              "DEN FreundeN (+n)",
              "keinen FreundeN"
            ]
          ]
        }
      },
      {
        "title": "2. Verben mit Dativ (Verbs Triggering Dative)",
        "description": "These common verbs always take a Dative partner:",
        "items": [
          {
            "term": "helfen (to help)",
            "meaning": "Ich helfe + Dativ (I help someone)",
            "example": "Ich helfe dem Mann / der Kollegin."
          },
          {
            "term": "danken (to thank)",
            "meaning": "Ich danke + Dativ (I thank someone)",
            "example": "Ich danke Ihnen herzlich für Ihre Unterstützung."
          },
          {
            "term": "gefallen (to be pleasing / like)",
            "meaning": "Das gefällt + Dativ (Someone likes that)",
            "example": "Das Buch gefällt dem Studenten sehr."
          },
          {
            "term": "gehören (to belong to)",
            "meaning": "Das gehört + Dativ (That belongs to someone)",
            "example": "Der Stift gehört der Lehrerin."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Unterstützung im Sprachinstitut (Netzwerk A1 Kapitel 7):",
      "lines": [
        {
          "speaker": "Gregor",
          "german": "Hallo Paco! Kann ich dir bei der Hausaufgabe helfen?",
          "english": "Hello Paco! Can I help you with the homework?"
        },
        {
          "speaker": "Paco",
          "german": "Ja, bitte! Ich verstehe diese Übung mit dem Dativ nicht ganz.",
          "english": "Yes, please! I don't quite understand this exercise with the dative."
        },
        {
          "speaker": "Gregor",
          "german": "Kein Problem. Schau mal: 'Ich gebe der Lehrerin das Buch'. Die Lehrerin bekommt das Buch, also Dativ!",
          "english": "No problem. Look: 'I give the teacher the book'. The teacher receives the book, so Dative!"
        },
        {
          "speaker": "Paco",
          "german": "Ah, jetzt verstehe ich es! Vielen Dank für deine Hilfe, Gregor.",
          "english": "Ah, now I understand it! Thank you very much for your help, Gregor."
        }
      ]
    },
    "funFact": {
      "title": "'Wie geht es dir?' is Literally Dative!",
      "content": "Why do Germans ask 'Wie geht es dir?' (How goes it *to you*?) instead of 'Wie bist du?'. Because health and well-being are viewed as happening TO you! That is why the answer is 'Es geht MIR gut' (It goes well *to me*), using the Dative pronoun 'mir'!"
    },
    "practice": [
      {
        "question": "Choose the correct article: 'Ich helfe _____ (die) Frau.'",
        "options": [
          "die",
          "der",
          "dem"
        ],
        "answer": "der",
        "explanation": "'helfen' takes the dative case. The feminine article 'die' changes to 'der' in Dative."
      },
      {
        "question": "What happens to plural nouns in the Dative case?",
        "options": [
          "The article becomes 'den' and the noun adds '-n'",
          "The article becomes 'die'",
          "Nothing changes"
        ],
        "answer": "The article becomes 'den' and the noun adds '-n'",
        "explanation": "Dative plural takes the article 'den' and adds an '-n' to the noun (z.B. den Kindern)."
      }
    ]
  },
  "a1-ch7-l30": {
    "overview": "Certain prepositions in German are strictly linked to the Dative case, no matter what. Whenever you use one of these prepositions, the noun following it MUST be in the Dativ case. In this lesson, you will master the 7 fixed Dative prepositions: aus, bei, mit, nach, seit, von, zu.",
    "canDo": "Can use the fixed Dative prepositions to talk about travel methods (mit dem Bus), origins (aus dem Kurs), workplace (bei Siemens), and appointments (beim Arzt, zum Kurs).",
    "teacherNote": "Learn the musical Dative preposition rhyme: 'Aus - bei - mit - nach - seit - von - zu, immer mit dem Dativ, weißt du!'. Also memorize contractions: bei + dem = beim, zu + dem = zum, zu + der = zur, von + dem = vom!",
    "sections": [
      {
        "title": "1. Die festen Dativ-Präpositionen (Fixed Dative Prepositions)",
        "description": "These 7 prepositions always trigger Dative:",
        "table": {
          "headers": [
            "Präposition",
            "Hauptbedeutung",
            "Beispiel mit Dativ (Netzwerk A1)",
            "Typische Kontraktion"
          ],
          "rows": [
            [
              "aus",
              "out of / from",
              "Ich komme aus der Schweiz.",
              "—"
            ],
            [
              "bei",
              "at / with (company/person)",
              "Er arbeitet bei einer Bank / beim Arzt.",
              "bei + dem = beim"
            ],
            [
              "mit",
              "with / by means of (transport)",
              "Ich fahre mit dem Bus / mit der Bahn.",
              "—"
            ],
            [
              "nach",
              "after / to (cities & countries)",
              "Nach dem Unterricht fahre ich nach Berlin.",
              "—"
            ],
            [
              "seit",
              "since / for (ongoing time)",
              "Sie lernt seit einem Monat Deutsch.",
              "—"
            ],
            [
              "von",
              "from / of",
              "Ich komme gerade vom Bahnhof.",
              "von + dem = vom"
            ],
            [
              "zu",
              "to (places & people)",
              "Gehst du heute zum Deutschkurs / zur Post?",
              "zu + dem = zum, zu + der = zur"
            ]
          ]
        }
      },
      {
        "title": "2. Verkehrsmittel mit 'mit dem / mit der' (Modes of Transport)",
        "description": "How to say how you travel in German from Netzwerk Kapitel 3:",
        "items": [
          {
            "term": "mit dem Bus / mit dem Zug / mit dem Auto",
            "meaning": "By bus / by train / by car (masculine & neuter take 'dem')",
            "example": "Ich fahre jeden Tag mit dem Bus zur Arbeit."
          },
          {
            "term": "mit der U-Bahn / mit der S-Bahn / mit der Tram",
            "meaning": "By subway / by suburban train / by tram (feminine takes 'der')",
            "example": "Wir fahren mit der U-Bahn ins Zentrum."
          },
          {
            "term": "zu Fuß (gegangen)",
            "meaning": "On foot (fixed expression without article)",
            "example": "Der Marktplatz ist nah, wir gehen zu Fuß."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Unterwegs zur Arbeit in München (Netzwerk A1 Kapitel 3):",
      "lines": [
        {
          "speaker": "Julia",
          "german": "Guten Morgen, Gregor! Wie fährst du heute zur Arbeit?",
          "english": "Good morning, Gregor! How are you travelling to work today?"
        },
        {
          "speaker": "Gregor",
          "german": "Ich fahre meistens mit dem Fahrrad, aber heute regnet es. Also fahre ich mit der U-Bahn.",
          "english": "I mostly ride by bicycle, but today it is raining. So I am taking the subway."
        },
        {
          "speaker": "Julia",
          "german": "Gute Idee! Und fährst du nach der Arbeit direkt nach Hause?",
          "english": "Good idea! And are you going directly home after work?"
        },
        {
          "speaker": "Gregor",
          "german": "Nein, um 17 Uhr gehe ich noch zum Arzt und dann zum Supermarkt.",
          "english": "No, at 5 PM I am going to the doctor and then to the supermarket."
        }
      ]
    },
    "funFact": {
      "title": "The Magic Contractions (beim, zum, zur, vom)",
      "content": "Native speakers almost never say 'bei dem Arzt' or 'zu der Post'. They combine the preposition and article into smooth contractions: bei + dem = beim, zu + dem = zum, zu + der = zur, von + dem = vom. Using these contractions immediately makes you sound natural!"
    },
    "practice": [
      {
        "question": "How do you say: 'I travel by train' in German? (der Zug)",
        "options": [
          "Ich fahre mit den Zug.",
          "Ich fahre mit dem Zug.",
          "Ich fahre mit der Zug."
        ],
        "answer": "Ich fahre mit dem Zug.",
        "explanation": "'mit' always triggers Dative: der Zug becomes 'dem Zug'."
      },
      {
        "question": "What is the contraction of 'zu + der'?",
        "options": [
          "zum",
          "zur",
          "zudem"
        ],
        "answer": "zur",
        "explanation": "'zu + der' contracts to 'zur' (z.B. zur Schule, zur Post)."
      }
    ]
  },
  "a1-ch7-l31": {
    "overview": "Stating when an event takes place and where you are located requires temporal and spatial prepositions. In this lesson, you will master the three temporal giants (um, am, im) and understand static location with Dative.",
    "canDo": "Can use time prepositions (um, am, im, von... bis) to state clock times, days of the week, months, and describe static locations.",
    "teacherNote": "Remember this formula for time: UM for exact hours (um 8 Uhr), AM for days and parts of the day (am Montag, am Abend), IM for months and seasons (im Juli, im Sommer)!",
    "sections": [
      {
        "title": "1. Die Zeit-Präpositionen: UM, AM, IM (Wann?)",
        "description": "The golden trio for answering 'Wann?' (When?):",
        "table": {
          "headers": [
            "Präposition",
            "Verwendung (Usage)",
            "Beispiele (Netzwerk A1)",
            "Signalwort"
          ],
          "rows": [
            [
              "um",
              "Uhrzeiten (Exact clock times)",
              "um 9 Uhr, um 14:30 Uhr, um Viertel nach drei",
              "Uhrzeit"
            ],
            [
              "am (an + dem)",
              "Wochentage & Tageszeiten",
              "am Montag, am Wochenende, am Morgen, am Abend",
              "Tage / Tageszeit"
            ],
            [
              "im (in + dem)",
              "Monate & Jahreszeiten",
              "im Januar, im Mai, im Sommer, im Winter",
              "Monat / Saison"
            ],
            [
              "von ... bis",
              "Zeitspanne (From ... until)",
              "von Montag bis Freitag, von 9 bis 17 Uhr",
              "Dauer"
            ]
          ]
        }
      },
      {
        "title": "2. Ort-Präpositionen bei Ruhe (Wo? + Dativ)",
        "description": "Answering 'Wo?' (Where?) when staying in one place:",
        "items": [
          {
            "term": "in + Dativ (in / inside)",
            "meaning": "Inside buildings, rooms, cities, and countries",
            "example": "in der Schule, im Kursraum, in München, in Deutschland"
          },
          {
            "term": "an + Dativ (at / on the edge of)",
            "meaning": "Bordering water, at the window, or on the board",
            "example": "am Meer (at the sea), am Bahnhof, an der Haltestelle"
          },
          {
            "term": "auf + Dativ (on / on top of)",
            "meaning": "On horizontal surfaces or open public spaces",
            "example": "auf dem Marktplatz, auf dem Tisch, auf der Straße"
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Termine absprechen für das Wochenende (Netzwerk A1 Kapitel 5):",
      "lines": [
        {
          "speaker": "Paco",
          "german": "Wann hast du am Wochenende Zeit, Christian?",
          "english": "When do you have time on the weekend, Christian?"
        },
        {
          "speaker": "Christian",
          "german": "Am Samstag arbeite ich von 10 bis 14 Uhr. Aber am Abend habe ich frei!",
          "english": "On Saturday I work from 10 to 2 PM. But in the evening I am free!"
        },
        {
          "speaker": "Paco",
          "german": "Perfekt! Treffen wir uns um 19 Uhr im Café am Marktplatz?",
          "english": "Perfect! Shall we meet at 7 PM in the café at the marketplace?"
        },
        {
          "speaker": "Christian",
          "german": "Ja, super! Um sieben Uhr am Marktplatz. Bis Samstag!",
          "english": "Yes, super! At seven o'clock at the marketplace. See you Saturday!"
        }
      ]
    },
    "funFact": {
      "title": "The One Exception: In der Nacht!",
      "content": "All parts of the day use 'am' (am Morgen, am Vormittag, am Nachmittag, am Abend)—EXCEPT night! Because 'die Nacht' is feminine, Germans say 'in der Nacht' (during the night). Always remember: 'am Abend', but 'in der Nacht'!"
    },
    "practice": [
      {
        "question": "Which preposition completes the sentence: 'Der Kurs beginnt _____ 9 Uhr.'?",
        "options": [
          "am",
          "im",
          "um"
        ],
        "answer": "um",
        "explanation": "Exact clock times always take 'um' (um 9 Uhr)."
      },
      {
        "question": "How do you say: 'on Friday' in German?",
        "options": [
          "im Freitag",
          "am Freitag",
          "um Freitag"
        ],
        "answer": "am Freitag",
        "explanation": "Days of the week always take 'am' (am Freitag)."
      }
    ]
  },
  "a1-ch7-l32": {
    "overview": "Modal verbs express possibility, necessity, permission, intention, and desire. In German, modal verbs create the famous 'sentence bracket' (die Satzklammer): the conjugated modal verb stands in Position 2, while the main action verb is sent all the way to the very end of the sentence in its infinitive form!",
    "canDo": "Can conjugate and use the 6 German modal verbs (können, müssen, wollen, möchten, dürfen, sollen) with infinitive verbs at the end of the sentence.",
    "teacherNote": "Golden rule of modal sentences: 'Two verbs, one sentence -> Modal verb in Position 2, Infinitive verb at the Satzende (sentence end)!'. For example: 'Ich KANN sehr gut Deutsch SPRECHEN'.",
    "sections": [
      {
        "title": "1. Die 6 Modalverben im Präsens (The 6 Modal Verbs)",
        "description": "Notice that 'ich' and 'er/sie/es' have identical forms and drop endings:",
        "table": {
          "headers": [
            "Pronomen",
            "können (can/able)",
            "müssen (must/have to)",
            "wollen (want to)",
            "möchten (would like)",
            "dürfen (allowed/may)",
            "sollen (should)"
          ],
          "rows": [
            [
              "ich",
              "kann",
              "muss",
              "will",
              "möchte",
              "darf",
              "soll"
            ],
            [
              "du",
              "kannst",
              "musst",
              "willst",
              "möchtest",
              "darfst",
              "sollst"
            ],
            [
              "er / sie / es",
              "kann",
              "muss",
              "will",
              "möchte",
              "darf",
              "soll"
            ],
            [
              "wir",
              "können",
              "müssen",
              "wollen",
              "möchten",
              "dürfen",
              "sollen"
            ],
            [
              "ihr",
              "könnt",
              "müsst",
              "wollt",
              "möchtet",
              "dürft",
              "sollt"
            ],
            [
              "sie / Sie",
              "können",
              "müssen",
              "wollen",
              "möchten",
              "dürfen",
              "sollen"
            ]
          ]
        }
      },
      {
        "title": "2. Die Satzklammer (Sentence Bracket Structure)",
        "description": "The conjugated modal in Position 2 and the infinitive at the end bracket the sentence:",
        "table": {
          "headers": [
            "Position 1",
            "Position 2 (Modalverb)",
            "Mittelfeld (Information)",
            "Satzende (Infinitiv)"
          ],
          "rows": [
            [
              "Ich",
              "kann",
              "heute leider nicht",
              "kommen."
            ],
            [
              "Wir",
              "müssen",
              "für die Prüfung",
              "lernen."
            ],
            [
              "Paco",
              "möchte",
              "einen Kaffee",
              "trinken."
            ],
            [
              "Hier",
              "darf",
              "man nicht",
              "rauchen!"
            ]
          ]
        }
      }
    ],
    "dialogue": {
      "context": "Absprachen am Arbeitsplatz im Büro (Netzwerk A1 Kapitel 9):",
      "lines": [
        {
          "speaker": "Chef",
          "german": "Herr Schubert, können Sie heute den Bericht fertig schreiben?",
          "english": "Mr. Schubert, can you finish writing the report today?"
        },
        {
          "speaker": "Gregor",
          "german": "Ja, natürlich. Ich muss nur noch die Zahlen überprüfen.",
          "english": "Yes, of course. I just have to verify the numbers."
        },
        {
          "speaker": "Chef",
          "german": "Sehr gut! Möchten Sie heute früher Feierabend machen?",
          "english": "Very good! Would you like to finish work earlier today?"
        },
        {
          "speaker": "Gregor",
          "german": "Das wäre wunderbar! Ich will um 16 Uhr zum Sport gehen.",
          "english": "That would be wonderful! I want to go to sports at 4 PM."
        }
      ]
    },
    "funFact": {
      "title": "'Dürfen' vs. 'Müssen' with Negation",
      "content": "Pay close attention to negative modals: 'Du MUSST NICHT' means 'You don't have to' (it is optional). But 'Du DARFST NICHT' means 'You are NOT allowed to / You must not!' (it is strictly forbidden by law or rule)!"
    },
    "practice": [
      {
        "question": "Where does the main verb go in a sentence with a modal verb?",
        "options": [
          "Immediately after the modal verb",
          "At the very end of the sentence as an infinitive",
          "At the beginning"
        ],
        "answer": "At the very end of the sentence as an infinitive",
        "explanation": "German modal sentence structure places the infinitive at the end: 'Ich möchte Deutsch lernen'."
      },
      {
        "question": "What is the correct form: 'Er _____ heute lange arbeiten.' (müssen)",
        "options": [
          "muss",
          "müsst",
          "musst"
        ],
        "answer": "muss",
        "explanation": "The 3rd person singular of 'müssen' is 'muss' (identical to 'ich muss')."
      }
    ]
  },
  "a1-ch7-l33": {
    "overview": "The Imperative form (der Imperativ) is used for giving instructions, directions, polite requests, and medical advice. In German, there are three distinct imperative forms depending on whether you are commanding one friend (du), a group of friends (ihr), or addressing someone formally (Sie).",
    "canDo": "Can form commands and polite requests for 'du', 'ihr', and formal 'Sie', and understand instructions from doctors, teachers, and signs.",
    "teacherNote": "For formal 'Sie', making an imperative is effortless: take the verb, add 'Sie', and add 'bitte': 'Kommen Sie bitte!', 'Lesen Sie bitte!'. It is impossible to get wrong!",
    "sections": [
      {
        "title": "1. Die 3 Formen des Imperativs (The 3 Imperative Forms)",
        "description": "How to address one friend, multiple friends, or a formal partner:",
        "table": {
          "headers": [
            "Form",
            "Bildung (Formation Rule)",
            "Beispiel: kommen",
            "Beispiel: lesen (e->ie)",
            "Beispiel: sein"
          ],
          "rows": [
            [
              "du (informell singular)",
              "Verbstamm ohne '-st', kein Pronomen!",
              "Komm!",
              "Lies!",
              "Sei ruhig!"
            ],
            [
              "ihr (informell plural)",
              "Gleiche Form wie 'ihr', kein Pronomen!",
              "Kommt!",
              "Lest!",
              "Seid pünktlich!"
            ],
            [
              "Sie (formell)",
              "Verb an Position 1 + 'Sie' + 'bitte'",
              "Kommen Sie bitte!",
              "Lesen Sie bitte!",
              "Seien Sie bitte leise!"
            ]
          ]
        }
      },
      {
        "title": "2. Ratschläge beim Arzt & im Unterricht (Netzwerk A1)",
        "description": "Everyday imperative instructions:",
        "items": [
          {
            "term": "Trinken Sie viel Wasser / Tee!",
            "meaning": "Drink plenty of water / tea! (doctor's advice)",
            "example": "Bleiben Sie im Bett und trinken Sie viel Tee."
          },
          {
            "term": "Öffnen Sie das Buch auf Seite 20!",
            "meaning": "Open the book to page 20! (teacher instruction)",
            "example": "Lesen Sie bitte den Text laut vor."
          },
          {
            "term": "Steigen Sie hier um!",
            "meaning": "Transfer / change trains here! (travel direction)",
            "example": "Fahren Sie zwei Stationen und steigen Sie dann um."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "In der Praxis bei der Ärztin in München (Netzwerk A1 Kapitel 11):",
      "lines": [
        {
          "speaker": "Ärztin",
          "german": "Guten Tag, Herr Schubert. Nehmen Sie bitte Platz! Was fehlt Ihnen denn?",
          "english": "Good day, Mr. Schubert. Please take a seat! What seems to be the problem?"
        },
        {
          "speaker": "Gregor",
          "german": "Guten Tag, Frau Doktor. Ich habe starke Halsschmerzen und Fieber.",
          "english": "Good day, doctor. I have a severe sore throat and fever."
        },
        {
          "speaker": "Ärztin",
          "german": "Machen Sie bitte den Mund auf und sagen Sie 'Aah'. Ja, der Hals ist rot.",
          "english": "Please open your mouth and say 'Aah'. Yes, the throat is red."
        },
        {
          "speaker": "Ärztin",
          "german": "Bleiben Sie drei Tage zu Hause im Bett und nehmen Sie diese Tabletten dreimal täglich!",
          "english": "Stay home in bed for three days and take these tablets three times daily!"
        },
        {
          "speaker": "Gregor",
          "german": "Vielen Dank, Frau Doktor. Das mache ich.",
          "english": "Thank you very much, doctor. I will do that."
        }
      ]
    },
    "funFact": {
      "title": "Softening Commands with 'mal' and 'doch'",
      "content": "A German imperative like 'Komm!' can sound very direct. To make commands sound friendly and warm, native speakers insert little particle words like 'mal' or 'doch': 'Komm mal her!' (Just come over here!), 'Schau mal!' (Take a look!), 'Hilf mir doch mal bitte!' (Could you just help me please?)."
    },
    "practice": [
      {
        "question": "How do you politely tell someone (formal) to drink more water?",
        "options": [
          "Trinken Sie bitte mehr Wasser!",
          "Trinkst du bitte mehr Wasser!",
          "Trink mehr Wasser!"
        ],
        "answer": "Trinken Sie bitte mehr Wasser!",
        "explanation": "Formal imperative: Verb + Sie + bitte (Trinken Sie bitte...)."
      },
      {
        "question": "What is the informal 'du' imperative of 'hören' (to listen)?",
        "options": [
          "Hörst!",
          "Hör!",
          "Hören!"
        ],
        "answer": "Hör!",
        "explanation": "The 'du' imperative removes the ending '-st' and the pronoun: Hör! (Listen!)."
      }
    ]
  }
};
