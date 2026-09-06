import { LessonContent } from "../api";

export const CHAPTER_9_LESSONS: Record<string, LessonContent> = {
  "a1-ch9-l39": {
    "overview": "Shopping for food at open-air markets and supermarkets requires practical knowledge of units of measurement (Kilo, Gramm, Liter), inquiring about prices, and courteous customer interactions from Netzwerk A1 Kapitel 4.",
    "canDo": "Can buy food items, ask for specific quantities and weights, inquire about prices, and interact politely with shopkeepers.",
    "teacherNote": "In German food shopping, 'ein Pfund' (a pound) is exactly 500 grams (half a kilo)! Native speakers frequently say: 'Ein Pfund Tomaten, bitte' (500 grams of tomatoes).",
    "sections": [
      {
        "title": "1. Maßeinheiten beim Lebensmitteleinkauf (Units of Measurement)",
        "description": "Standard weights and measures in German markets:",
        "table": {
          "headers": [
            "Maßeinheit",
            "Abkürzung",
            "Bedeutung",
            "Beispiel"
          ],
          "rows": [
            [
              "das Kilo / Kilogramm",
              "kg",
              "1000 Gramm",
              "ein Kilo Äpfel / zwei Kilo Kartoffeln"
            ],
            [
              "das Pfund",
              "Pfd",
              "500 Gramm (halbes Kilo)",
              "ein Pfund Butter / ein Pfund Erdbeeren"
            ],
            [
              "das Gramm",
              "g",
              "Gramm",
              "200 Gramm Käse / 150 Gramm Schinken"
            ],
            [
              "der Liter",
              "l",
              "Flüssigkeiten",
              "ein Liter Milch / zwei Liter Wasser"
            ],
            [
              "die Flasche / die Dose",
              "Fl. / D.",
              "Verpackung",
              "eine Flasche Saft / eine Dose Tomaten"
            ],
            [
              "das Stück",
              "Stk.",
              "Einzelartikel",
              "drei Stück Kuchen / ein Stück Käse"
            ]
          ]
        }
      },
      {
        "title": "2. Preise nennen und verstehen (Euros & Cents)",
        "description": "How to say prices aloud in German:",
        "items": [
          {
            "term": "€ 2,50 = zwei Euro fünfzig",
            "meaning": "Euro amount first, then 'Euro', then the cent amount",
            "example": "Das Brot kostet zwei Euro fünfzig."
          },
          {
            "term": "€ 0,89 = neunundachtzig Cent",
            "meaning": "Cent amounts under 1 Euro simply state the number + 'Cent'",
            "example": "Ein Brötchen kostet fünfundvierzig Cent."
          },
          {
            "term": "Was kostet...? / Was machen...?",
            "meaning": "How much does ... cost? / What does that come to?",
            "example": "Was kostet das Kilo Bananen? - Ein Euro neunundsiebzig."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Einkaufen am Marktstand in Dresden (Netzwerk A1 Kapitel 4):",
      "lines": [
        {
          "speaker": "Verkäufer",
          "german": "Guten Tag! Der Nächste bitte! Was darf ich Ihnen geben?",
          "english": "Good day! Next please! What can I get for you?"
        },
        {
          "speaker": "Kundin",
          "german": "Guten Tag. Ich hätte gern zwei Kilo Äpfel und ein Pfund Erdbeeren.",
          "english": "Good day. I would like two kilos of apples and a pound of strawberries."
        },
        {
          "speaker": "Verkäufer",
          "german": "Sehr gern, die Erdbeeren sind heute besonders süß. Sonst noch etwas?",
          "english": "Very gladly, the strawberries are especially sweet today. Anything else?"
        },
        {
          "speaker": "Kundin",
          "german": "Haben Sie auch frischen Bio-Käse?",
          "english": "Do you also have fresh organic cheese?"
        },
        {
          "speaker": "Verkäufer",
          "german": "Ja, der Bergkäse hier ist herrlich. 200 Gramm? Das macht zusammen 8 Euro 40.",
          "english": "Yes, this mountain cheese here is wonderful. 200 grams? That comes to 8 euros 40 altogether."
        }
      ]
    },
    "funFact": {
      "title": "Cash is Still King (Bargeld)",
      "content": "While card payments have grown rapidly, Germany and Austria remain famous for their love of cash ('Bargeld lacht' - cash laughs!). At bakeries, small kiosks, open-air markets, and traditional beer gardens, always carry cash, as signs often say: 'Keine Kartenzahlung' (No card payment)!"
    },
    "practice": [
      {
        "question": "How much is 'ein Pfund' in Germany?",
        "options": [
          "100 Gramm",
          "500 Gramm",
          "1000 Gramm"
        ],
        "answer": "500 Gramm",
        "explanation": "In German culinary and market tradition, 'ein Pfund' is exactly 500 grams."
      },
      {
        "question": "How do you pronounce € 3,80 in German?",
        "options": [
          "drei achtzig",
          "drei Euro achtzig",
          "achtzig Euro drei"
        ],
        "answer": "drei Euro achtzig",
        "explanation": "Prices are pronounced: [Euro amount] + Euro + [Cent amount]."
      }
    ]
  },
  "a1-ch9-l40": {
    "overview": "Visiting restaurants, cafes, and beer gardens is one of the greatest pleasures in the DACH countries. In this lesson, you will master reading a German menu (die Speisekarte), ordering food and drinks, and asking for the bill using authentic etiquette.",
    "canDo": "Can order meals and beverages politely in a restaurant, ask about menu recommendations, and settle the bill ('Zusammen oder getrennt?').",
    "teacherNote": "When paying in Germany, the server will almost always ask: 'Zusammen oder getrennt?' (Together or separately?). Splitting the bill item-by-item is completely normal and expected in German restaurant culture!",
    "sections": [
      {
        "title": "1. Redemittel im Restaurant (Restaurant Phrase Bank)",
        "description": "Step-by-step phrases for dining out:",
        "table": {
          "headers": [
            "Phase",
            "Deutscher Ausdruck",
            "Bedeutung",
            "Antwort des Kellners"
          ],
          "rows": [
            [
              "Ankunft",
              "Einen Tisch für zwei Personen, bitte.",
              "A table for two, please.",
              "Sehr gern, hier entlang bitte."
            ],
            [
              "Speisekarte",
              "Die Speisekarte bitte.",
              "The menu, please.",
              "Hier ist die Karte."
            ],
            [
              "Bestellen",
              "Ich nehme / Ich hätte gern...",
              "I'll take / I would like...",
              "Und was möchten Sie trinken?"
            ],
            [
              "Wohl bekomm's",
              "Guten Appetit! / Prost! / Zum Wohl!",
              "Enjoy your meal! / Cheers!",
              "Danke, gleichfalls! (Same to you!)"
            ],
            [
              "Rechnung",
              "Die Rechnung bitte! / Wir möchten zahlen.",
              "The bill, please! / We'd like to pay.",
              "Zusammen oder getrennt?"
            ]
          ]
        }
      },
      {
        "title": "2. Trinkgeld-Kultur (Tipping in Germany)",
        "description": "How tipping works in German-speaking countries:",
        "items": [
          {
            "term": "5% bis 10% Trinkgeld (Rounding Up)",
            "meaning": "Tipping is not obligatory by law, but 5% to 10% is standard for good service",
            "example": "If the bill is € 27,20, round up to € 29 or € 30."
          },
          {
            "term": "Stimmt so! (Keep the change)",
            "meaning": "Tell the server directly when handing over money if you don't need change",
            "example": "Hand over a € 20 note for an € 18 bill and say: 'Stimmt so!'."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Abendessen im traditionellen Gasthaus in Nürnberg (Netzwerk A1):",
      "lines": [
        {
          "speaker": "Kellner",
          "german": "Guten Abend! Haben Sie schon gewählt?",
          "english": "Good evening! Have you made your choices?"
        },
        {
          "speaker": "Paco",
          "german": "Ja, ich hätte gern die Bratwürste mit Sauerkraut und Kartoffelsalat.",
          "english": "Yes, I would like the sausages with sauerkraut and potato salad."
        },
        {
          "speaker": "Sarah",
          "german": "Und für mich bitte den vegetarischen Flammkuchen und ein Mineralwasser.",
          "english": "And for me please the vegetarian tarte flambée and a mineral water."
        },
        {
          "speaker": "Kellner",
          "german": "Sehr gern! War alles zu Ihrer Zufriedenheit?",
          "english": "Very gladly! Was everything to your satisfaction?"
        },
        {
          "speaker": "Paco",
          "german": "Ja, ausgezeichnet! Wir möchten bitte zahlen, getrennt.",
          "english": "Yes, excellent! We would like to pay please, separately."
        },
        {
          "speaker": "Kellner",
          "german": "Für Sie macht das 14 Euro 20.",
          "english": "For you that comes to 14 euros 20."
        },
        {
          "speaker": "Paco",
          "german": "Machen Sie 16 Euro. Stimmt so!",
          "english": "Make it 16 euros. Keep the change!"
        }
      ]
    },
    "funFact": {
      "title": "Never Leave Tips on the Table!",
      "content": "In the US and UK, people often leave cash tips on the table when leaving. In Germany, you ALWAYS state the tip directly to the server when paying! If the bill is € 18 and you want to tip € 2, hand over € 20 and say: 'Machen Sie 20' (Make it 20) or 'Stimmt so!'."
    },
    "practice": [
      {
        "question": "What does a server mean when asking: 'Zusammen oder getrennt?'",
        "options": [
          "Do you want indoor or outdoor seating?",
          "Paying together or separately on split bills?",
          "Cash or card?"
        ],
        "answer": "Paying together or separately on split bills?",
        "explanation": "'Zusammen oder getrennt' asks whether the party wants one combined bill or separate individual bills."
      },
      {
        "question": "What phrase tells the server to keep the change as a tip?",
        "options": [
          "Danke schön!",
          "Stimmt so!",
          "Auf Wiedersehen!"
        ],
        "answer": "Stimmt so!",
        "explanation": "'Stimmt so!' literally means 'It is correct like that' (keep the change)."
      }
    ]
  },
  "a1-ch9-l41": {
    "overview": "Knowing how to describe symptoms, visit a doctor's practice (die Arztpraxis), and obtain medication at a pharmacy (die Apotheke) is vital survival German. In this lesson, you will master body parts, common illnesses, and medical advice from Netzwerk Kapitel 11 ('Gesund und munter').",
    "canDo": "Can name core body parts, express physical symptoms ('Ich habe Kopfschmerzen / Fieber'), and understand medical recommendations.",
    "teacherNote": "In German, to say something hurts, you use the verb 'wehtun' (separable): 'Mein Kopf TUT WEH' (My head hurts), 'Meine Beine TUN WEH' (My legs hurt). Or simply use the compound with '-schmerzen': Kopfschmerzen, Halsschmerzen, Bauchschmerzen!",
    "sections": [
      {
        "title": "1. Die Körperteile (Body Parts)",
        "description": "Essential body parts from Netzwerk Kapitel 11:",
        "table": {
          "headers": [
            "Körperteil",
            "Artikel & Singular",
            "Plural",
            "Typisches Symptom"
          ],
          "rows": [
            [
              "Head",
              "der Kopf",
              "die Köpfe",
              "Kopfschmerzen (headache)"
            ],
            [
              "Throat / Neck",
              "der Hals",
              "die Hälse",
              "Halsschmerzen (sore throat)"
            ],
            [
              "Stomach",
              "der Bauch / der Magen",
              "die Bäuche",
              "Bauchschmerzen (stomach ache)"
            ],
            [
              "Back",
              "der Rücken",
              "die Rücken",
              "Rückenschmerzen (back pain)"
            ],
            [
              "Eye",
              "das Auge",
              "die Augen",
              "brennende Augen"
            ],
            [
              "Ear",
              "das Ohr",
              "die Ohren",
              "Ohrenschmerzen"
            ],
            [
              "Tooth",
              "der Zahn",
              "die Zähne",
              "Zahnschmerzen (toothache)"
            ],
            [
              "Hand / Arm",
              "die Hand / der Arm",
              "die Hände / die Arme",
              "Mein Arm tut weh."
            ],
            [
              "Foot / Leg",
              "der Fuß / das Bein",
              "die Füße / die Beine",
              "Mein Fuß tut weh."
            ]
          ]
        }
      },
      {
        "title": "2. Krankheiten & Ratschläge mit 'sollen'",
        "description": "Using modal verb 'sollen' (should) for doctor's instructions:",
        "items": [
          {
            "term": "Ich habe die Grippe / eine Erkältung",
            "meaning": "I have the flu / a cold",
            "example": "Ich fühle mich schwach und habe Fieber."
          },
          {
            "term": "Sie sollen im Bett bleiben",
            "meaning": "You should stay in bed (doctor's orders)",
            "example": "Die Ärztin sagt, ich soll viel schlafen."
          },
          {
            "term": "das Rezept / die Apotheke",
            "meaning": "Prescription / pharmacy (marked with a large red 'A')",
            "example": "Hier ist Ihr Rezept für die Apotheke."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Telefonat mit der Arztpraxis zur Terminvereinbarung (Netzwerk A1 Kapitel 11):",
      "lines": [
        {
          "speaker": "Arzthelferin",
          "german": "Praxis Dr. Schreyer, guten Tag! Was kann ich für Sie tun?",
          "english": "Dr. Schreyer's practice, good day! What can I do for you?"
        },
        {
          "speaker": "Gregor",
          "german": "Guten Tag, hier spricht Gregor Schubert. Ich brauche dringend einen Termin, ich bin krank.",
          "english": "Good day, this is Gregor Schubert speaking. I urgently need an appointment, I am sick."
        },
        {
          "speaker": "Arzthelferin",
          "german": "Was fehlt Ihnen denn, Herr Schubert?",
          "english": "What symptoms do you have, Mr. Schubert?"
        },
        {
          "speaker": "Gregor",
          "german": "Ich habe hohes Fieber, starken Husten und mein Hals tut sehr weh.",
          "english": "I have a high fever, severe cough, and my throat hurts very much."
        },
        {
          "speaker": "Arzthelferin",
          "german": "Kommen Sie bitte heute Vormittag um 11:30 Uhr vorbei. Bringen Sie Ihre Versichertenkarte mit!",
          "english": "Please come by this morning at 11:30 AM. Bring your health insurance card with you!"
        }
      ]
    },
    "funFact": {
      "title": "Apotheke vs. Drogerie",
      "content": "Germany strictly separates 'die Apotheke' (Pharmacy) from 'die Drogerie' (Drugstore like dm or Rossmann). In a Drogerie, you can buy shampoo, toothpaste, and vitamins, but ZERO medications—not even aspirin! All medicine must be bought at an Apotheke with a licensed pharmacist!"
    },
    "practice": [
      {
        "question": "How do you say: 'My head hurts' in German?",
        "options": [
          "Mein Kopf tut weh.",
          "Mein Kopf macht weh.",
          "Mein Kopf ist weh."
        ],
        "answer": "Mein Kopf tut weh.",
        "explanation": "'wehtun' is the verb for hurting: Mein Kopf tut weh."
      },
      {
        "question": "Where in Germany can you buy headache tablets like Ibuprofen?",
        "options": [
          "In the supermarket",
          "In a Drogerie (dm)",
          "Only in an Apotheke"
        ],
        "answer": "Only in an Apotheke",
        "explanation": "All medicinal pain relievers are strictly pharmacy-only (apothekenpflichtig) in Germany."
      }
    ]
  },
  "a1-ch9-l42": {
    "overview": "Shopping for clothes (Kleidung) involves asking for sizes, colors, trying items on in the fitting room, and expressing opinions. In this lesson, you will master wardrobe vocabulary, colors, and demonstrative pronouns (dieser, dieses, diese) from Netzwerk Kapitel 10 ('Kleidung und Mode').",
    "canDo": "Can name everyday clothing items, specify colors and sizes, ask for fitting rooms, and express whether clothes fit well.",
    "teacherNote": "To ask which item someone prefers, use 'Welcher? / Welches? / Welche?'. To point out a specific item, use 'Dieser / Dieses / Diese' (This one): 'Welche Jacke gefällt dir?' - 'Diese Jacke hier!'",
    "sections": [
      {
        "title": "1. Kleidungsstücke & Farben (Clothing & Colors)",
        "description": "Wardrobe vocabulary from Netzwerk Kapitel 10:",
        "table": {
          "headers": [
            "Kleidungsstück",
            "Artikel & Genus",
            "Plural",
            "Farbe (Color)"
          ],
          "rows": [
            [
              "die Hose (pants/trousers)",
              "feminin",
              "die Hosen",
              "schwarz / blau"
            ],
            [
              "die Jacke / der Mantel (jacket / coat)",
              "feminin / maskulin",
              "die Jacken / die Mäntel",
              "braun / grau"
            ],
            [
              "das Hemd / die Bluse (shirt / blouse)",
              "neutral / feminin",
              "die Hemden / die Blusen",
              "weiß / hellblau"
            ],
            [
              "das T-Shirt / das Kleid (t-shirt / dress)",
              "neutral",
              "die T-Shirts / die Kleider",
              "rot / grün"
            ],
            [
              "der Pullover (sweater)",
              "maskulin",
              "die Pullover",
              "gelb / dunkelblau"
            ],
            [
              "die Schuhe / die Stiefel (shoes / boots)",
              "plural",
              "die Schuhe",
              "schwarz / leder"
            ]
          ]
        }
      },
      {
        "title": "2. Redemittel beim Kleiderkauf (Shopping Phrases)",
        "description": "Phrases for trying on clothes in department stores:",
        "items": [
          {
            "term": "Welche Größe haben Sie? / Ich trage Größe M (38)",
            "meaning": "What size are you? / I wear size M (38)",
            "example": "Haben Sie diese Hose in Größe 40?"
          },
          {
            "term": "Wo sind die Umkleidekabinen?",
            "meaning": "Where are the fitting / changing rooms?",
            "example": "Die Umkleidekabinen sind dort hinten links."
          },
          {
            "term": "Das passt mir gut / Das steht dir gut!",
            "meaning": "That fits me well (size) / That suits you well (appearance)!",
            "example": "Die Farbe steht dir fantastisch!"
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Im Modegeschäft am Kudamm in Berlin (Netzwerk A1 Kapitel 10):",
      "lines": [
        {
          "speaker": "Verkäuferin",
          "german": "Guten Tag! Kann ich Ihnen helfen?",
          "english": "Good day! Can I help you?"
        },
        {
          "speaker": "Sarah",
          "german": "Ja gern. Ich suche eine warme Jacke für den Winter.",
          "english": "Yes gladly. I am looking for a warm jacket for the winter."
        },
        {
          "speaker": "Verkäuferin",
          "german": "Wie gefällt Ihnen diese blaue Jacke hier? Welche Größe tragen Sie?",
          "english": "How do you like this blue jacket here? What size do you wear?"
        },
        {
          "speaker": "Sarah",
          "german": "Die Farbe ist sehr schön! Ich trage Größe 38. Kann ich sie anprobieren?",
          "english": "The color is very nice! I wear size 38. Can I try it on?"
        },
        {
          "speaker": "Verkäuferin",
          "german": "Natürlich! Die Umkleidekabinen sind gleich da drüben.",
          "english": "Of course! The fitting rooms are right over there."
        }
      ]
    },
    "funFact": {
      "title": "Passen vs. Stehen",
      "content": "German makes an elegant distinction: 'Die Hose PASST mir' means the physical size fits your body. 'Die Hose STEHT mir' means the style and color look great on you! If a friend tries on a coat, say: 'Das steht dir super!'."
    },
    "practice": [
      {
        "question": "What does 'Wo ist die Umkleidekabine?' mean?",
        "options": [
          "Where is the cash register?",
          "Where is the fitting room?",
          "Where is the exit?"
        ],
        "answer": "Where is the fitting room?",
        "explanation": "'die Umkleidekabine' is the changing/fitting room in a store."
      },
      {
        "question": "How do you tell a friend that a jacket suits their appearance?",
        "options": [
          "Die Jacke passt dir.",
          "Die Jacke steht dir gut!",
          "Die Jacke ist teuer."
        ],
        "answer": "Die Jacke steht dir gut!",
        "explanation": "'stehen' (+ Dativ) means to look good / suit someone."
      }
    ]
  },
  "a1-ch9-l43": {
    "overview": "Public transportation (der öffentliche Nahverkehr - ÖPNV) in the DACH region is famous for its efficiency and punctuality. In this lesson, you will master navigating trains, subways, buying tickets at the automated machine (der Fahrkartenautomat), and finding your track (das Gleis).",
    "canDo": "Can buy transit tickets at machines or counters, understand platform announcements, and inquire about connections and delays.",
    "teacherNote": "Notice the difference: 'der Bahnsteig' is the physical platform you stand on, but 'das Gleis' is the track number printed on your ticket: 'Der Zug fährt von Gleis 7 ab'!",
    "sections": [
      {
        "title": "1. Verkehrsmittel im Nah- und Fernverkehr",
        "description": "Transit types from Netzwerk Kapitel 3 & 12:",
        "table": {
          "headers": [
            "Abkürzung / Begriff",
            "Voller Name",
            "Bedeutung",
            "Netz-Typ"
          ],
          "rows": [
            [
              "ICE",
              "Intercity Express",
              "High-speed German long-distance train",
              "Fernverkehr"
            ],
            [
              "RE / RB",
              "Regional-Express / Regionalbahn",
              "Regional commuter train between cities",
              "Regionalverkehr"
            ],
            [
              "S-Bahn",
              "Stadtschnellbahn",
              "Suburban above-ground transit train",
              "Stadtverkehr"
            ],
            [
              "U-Bahn",
              "Untergrundbahn",
              "Metro / subway network",
              "Stadtverkehr"
            ],
            [
              "Tram / Straßenbahn",
              "Straßenbahn",
              "Street-level light rail / tram",
              "Stadtverkehr"
            ]
          ]
        }
      },
      {
        "title": "2. Am Bahnhof: Anzeigen & Durchsagen verstehen",
        "description": "Key terms heard and read at train stations:",
        "items": [
          {
            "term": "die Abfahrt / die Ankunft",
            "meaning": "Departure / Arrival",
            "example": "Abfahrt: 14:12 Uhr von Gleis 5."
          },
          {
            "term": "die Verspätung",
            "meaning": "Delay (in minutes)",
            "example": "Heute circa 15 Minuten Verspätung."
          },
          {
            "term": "Einsteigen bitte! / Zurückbleiben bitte!",
            "meaning": "All aboard please! / Please stand back from the doors!",
            "example": "Vorsicht bei der Abfahrt des Zuges!"
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Fahrkartenkauf am Schalter im Berliner Hauptbahnhof (Netzwerk A1):",
      "lines": [
        {
          "speaker": "Bahn-Mitarbeiter",
          "german": "Guten Tag! Wie kann ich Ihnen helfen?",
          "english": "Good day! How can I help you?"
        },
        {
          "speaker": "Paco",
          "german": "Guten Tag. Ich möchte eine Fahrkarte nach Dresden, bitte.",
          "english": "Good day. I would like a train ticket to Dresden, please."
        },
        {
          "speaker": "Bahn-Mitarbeiter",
          "german": "Einfache Fahrt oder hin und zurück?",
          "english": "Single journey or round-trip?"
        },
        {
          "speaker": "Paco",
          "german": "Hin und zurück, bitte. Der nächste Zug um 11 Uhr.",
          "english": "Round-trip, please. The next train at 11 o'clock."
        },
        {
          "speaker": "Bahn-Mitarbeiter",
          "german": "Der ICE fährt um 11:05 Uhr von Gleis 3 ab. Hier ist Ihre Fahrkarte!",
          "english": "The ICE departs at 11:05 AM from track 3. Here is your ticket!"
        }
      ]
    },
    "funFact": {
      "title": "Validating Tickets (Entwerten)",
      "content": "In many German cities (like Berlin and Munich), buying a single transit ticket is not enough—you must validate it in a little stamping box ('entwerten') before boarding! If ticket controllers ('Fahrkartenkontrolle') catch you with an unstamped ticket, there is an immediate € 60 fine ('erhöhtes Beförderungsentgelt')!"
    },
    "practice": [
      {
        "question": "What does 'Gleis 4' mean on a German train ticket?",
        "options": [
          "Carriage 4",
          "Track / Platform 4",
          "Seat 4"
        ],
        "answer": "Track / Platform 4",
        "explanation": "'das Gleis' indicates the track number where your train arrives and departs."
      },
      {
        "question": "What is the German term for a 'round-trip ticket'?",
        "options": [
          "Einfache Fahrt",
          "Hin und zurück",
          "Tageskarte"
        ],
        "answer": "Hin und zurück",
        "explanation": "'hin und zurück' literally means 'there and back' (round-trip)."
      }
    ]
  }
};
