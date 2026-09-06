import { LessonContent } from "../api";

export const CHAPTER_5_LESSONS: Record<string, LessonContent> = {
  "a1-ch5-l20": {
    "overview": "The Accusative case (der Akkusativ) marks the direct object of an action—the person or thing directly affected by the verb. In this lesson, you will master the fundamental rule of Akkusativ: ONLY masculine articles change! Feminine, neuter, and plural stay completely unchanged.",
    "canDo": "Can identify direct objects by asking 'Wen oder was?' (Whom or what?), and apply the masculine article shifts (der -> den, ein -> einen, kein -> keinen).",
    "teacherNote": "Remember this golden rule: Masculine is the ONLY rebel in Akkusativ! Feminine remains 'die / eine', neuter remains 'das / ein', and plural remains 'die / keine'. Only masculine changes: der becomes DEN, ein becomes EINEN, kein becomes KEINEN!",
    "sections": [
      {
        "title": "1. Der Akkusativ-Artikelwechsel (The Masculine Shift)",
        "description": "Compare Nominative (Subject) and Accusative (Direct Object):",
        "table": {
          "headers": [
            "Genus (Gender)",
            "Nominativ (Subjekt)",
            "Akkusativ (Objekt)",
            "Signal-Endung"
          ],
          "rows": [
            [
              "Maskulin (m)",
              "der / ein / kein",
              "DEN / EINEN / KEINEN",
              "-en (Masculine Shift!)"
            ],
            [
              "Feminin (f)",
              "die / eine / keine",
              "die / eine / keine",
              "-e (Unverändert / No change)"
            ],
            [
              "Neutral (n)",
              "das / ein / kein",
              "das / ein / kein",
              "- (Unverändert / No change)"
            ],
            [
              "Plural (pl)",
              "die / — / keine",
              "die / — / keine",
              "-e (Unverändert / No change)"
            ]
          ]
        }
      },
      {
        "title": "2. Die Frage nach dem Akkusativ: 'Wen oder was?'",
        "description": "Test any sentence to see which item is the direct object:",
        "table": {
          "headers": [
            "Satz (Netzwerk A1)",
            "Akkusativ-Frage",
            "Akkusativ-Objekt"
          ],
          "rows": [
            [
              "Ich trinke den Kaffee.",
              "Wen oder was trinke ich?",
              "den Kaffee (maskulin)"
            ],
            [
              "Gregor kauft einen Apfel.",
              "Wen oder was kauft Gregor?",
              "einen Apfel (maskulin)"
            ],
            [
              "Julia isst eine Pizza.",
              "Wen oder was isst Julia?",
              "eine Pizza (feminin)"
            ],
            [
              "Wir bestellen das Wasser.",
              "Wen oder was bestellen wir?",
              "das Wasser (neutral)"
            ]
          ]
        }
      }
    ],
    "dialogue": {
      "context": "Einkaufen auf dem Wochenmarkt in München (Netzwerk A1 Kapitel 4):",
      "lines": [
        {
          "speaker": "Marktfrau",
          "german": "Guten Morgen! Was darf es sein?",
          "english": "Good morning! What can I get for you?"
        },
        {
          "speaker": "Kunde",
          "german": "Guten Morgen. Ich nehme bitte einen Apfel und einen Salat.",
          "english": "Good morning. I'll take an apple and a salad, please."
        },
        {
          "speaker": "Marktfrau",
          "german": "Sehr gern. Möchten Sie auch diesen Käse probieren?",
          "english": "Very gladly. Would you also like to try this cheese?"
        },
        {
          "speaker": "Kunde",
          "german": "Ja, gern! Ich kaufe auch den Käse. Was kostet das zusammen?",
          "english": "Yes, gladly! I will also buy the cheese. How much is that together?"
        },
        {
          "speaker": "Marktfrau",
          "german": "Das macht genau vier Euro fünfzig, bitte.",
          "english": "That comes to exactly four euros fifty, please."
        }
      ]
    },
    "funFact": {
      "title": "Why Only Masculine Changes",
      "content": "In Proto-Indo-European (the ancient ancestor of English and German), masculine and feminine nouns marked objects with '-m' or '-n' (like English 'who -> whom' and 'he -> him'). German preserved this accusative '-n' ending specifically in masculine forms ('den', 'einen', 'ihn', 'meinen')!"
    },
    "practice": [
      {
        "question": "Fill in the blank: 'Ich kaufe _____ (der) Computer.'",
        "options": [
          "der",
          "den",
          "dem"
        ],
        "answer": "den",
        "explanation": "'Computer' is masculine, and because it is the direct object of 'kaufen', 'der' changes to 'den'."
      },
      {
        "question": "What is the accusative form of 'ein Apfel' (masculine)?",
        "options": [
          "ein Apfel",
          "einen Apfel",
          "einem Apfel"
        ],
        "answer": "einen Apfel",
        "explanation": "Masculine indefinite article 'ein' becomes 'einen' in the accusative case."
      }
    ]
  },
  "a1-ch5-l21": {
    "overview": "Certain verbs naturally require a direct object to complete their meaning. In this lesson, you will master the most common high-frequency Akkusativ verbs used in shopping, eating, and daily tasks from Netzwerk A1 Kapitel 4 ('Guten Appetit!').",
    "canDo": "Can use high-frequency accusative verbs (haben, brauchen, kaufen, suchen, nehmen, essen, trinken) correctly with direct objects.",
    "teacherNote": "Whenever you use 'haben' (to have) or 'brauchen' (to need), mentally trigger the accusative masculine shift: 'Ich habe einen...', 'Ich brauche einen...'. This single habit will make you sound 10x more fluent!",
    "sections": [
      {
        "title": "1. Typische Verben mit Akkusativ (Akkusativ-Verben)",
        "description": "Essential verbs that always take a direct object:",
        "table": {
          "headers": [
            "Verb",
            "Bedeutung",
            "Beispielsatz mit Maskulin (Akkusativ)",
            "Beispiel mit Feminin / Neutral"
          ],
          "rows": [
            [
              "haben",
              "to have",
              "Ich habe einen Bruder.",
              "Ich habe eine Schwester / ein Auto."
            ],
            [
              "brauchen",
              "to need",
              "Brauchst du einen Stift?",
              "Wir brauchen eine Lampe / ein Buch."
            ],
            [
              "kaufen",
              "to buy",
              "Er kauft einen Pullover.",
              "Sie kauft eine Jacke / ein Brot."
            ],
            [
              "suchen",
              "to look for",
              "Ich suche den Bahnhof.",
              "Suchst du die Post / das Café?"
            ],
            [
              "nehmen",
              "to take / order",
              "Ich nehme einen Kaffee.",
              "Ich nehme eine Suppe / ein Wasser."
            ],
            [
              "essen",
              "to eat",
              "Er isst einen Apfel.",
              "Er isst eine Banane / ein Brötchen."
            ],
            [
              "trinken",
              "to drink",
              "Wir trinken einen Tee.",
              "Wir trinken eine Limonade / ein Bier."
            ],
            [
              "sehen",
              "to see",
              "Siehst du den Mann dort?",
              "Siehst du die Frau / das Schild?"
            ]
          ]
        }
      },
      {
        "title": "2. Redemittel beim Einkaufen & Bestellen (Netzwerk A1)",
        "description": "Phrases for ordering food and buying groceries:",
        "items": [
          {
            "term": "Ich hätte gern... (+ Akkusativ)",
            "meaning": "I would like to have... (polite ordering phrase)",
            "example": "Ich hätte gern einen Cappuccino und ein Stück Kuchen."
          },
          {
            "term": "Was kostet...? / Was kosten...?",
            "meaning": "How much does ... cost? (singular vs. plural)",
            "example": "Was kostet der Orangensaft? / Was kosten die Tomaten?"
          },
          {
            "term": "Sonst noch etwas?",
            "meaning": "Anything else? (standard shopkeeper question)",
            "example": "Sonst noch etwas? - Nein danke, das ist alles."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Im Supermarkt an der Kasse (Netzwerk A1 Kapitel 4):",
      "lines": [
        {
          "speaker": "Kassiererin",
          "german": "Guten Tag! Haben Sie eine Kundenkarte?",
          "english": "Good day! Do you have a loyalty card?"
        },
        {
          "speaker": "Paco",
          "german": "Nein, leider nicht. Ich brauche noch eine Tüte bitte.",
          "english": "No, unfortunately not. I still need a bag, please."
        },
        {
          "speaker": "Kassiererin",
          "german": "Hier ist eine Papiertüte. Möchten Sie den Beleg mitnehmen?",
          "english": "Here is a paper bag. Would you like to take the receipt?"
        },
        {
          "speaker": "Paco",
          "german": "Ja, bitte. Vielen Dank und einen schönen Feierabend!",
          "english": "Yes, please. Thank you very much and have a nice evening!"
        }
      ]
    },
    "funFact": {
      "title": "German Grocery Bag Etiquette",
      "content": "In German supermarkets, cashiers scan items at lightning speed, and bags are never given out for free! Shoppers always bring their own cloth bags ('der Stoffbeutel') and pack their groceries themselves. Be ready to pack quickly!"
    },
    "practice": [
      {
        "question": "Complete the sentence: 'Wir brauchen noch _____ (der) Schlüssel.'",
        "options": [
          "der",
          "den",
          "dem"
        ],
        "answer": "den",
        "explanation": "'brauchen' requires an accusative direct object: der Schlüssel -> den Schlüssel."
      },
      {
        "question": "What is the polite phrase for 'I would like to have...' in German?",
        "options": [
          "Ich will...",
          "Ich hätte gern...",
          "Ich habe..."
        ],
        "answer": "Ich hätte gern...",
        "explanation": "'Ich hätte gern...' is the standard, courteous phrase used when ordering food or goods."
      }
    ]
  },
  "a1-ch5-l22": {
    "overview": "Just as nouns change in the Accusative case, subject pronouns have corresponding object forms. In English, 'I' becomes 'me' and 'he' becomes 'him'. In this lesson, you will master all 9 German accusative pronouns (mich, dich, ihn, sie, es, uns, euch, sie, Sie).",
    "canDo": "Can use accusative personal pronouns in conversation to refer to people and objects without repeating nouns.",
    "teacherNote": "Notice the direct parallels with the articles: 'der' becomes 'den' -> 'er' becomes 'ihn'. 'das' stays 'das' -> 'es' stays 'es'. 'die' stays 'die' -> 'sie' stays 'sie'!",
    "sections": [
      {
        "title": "1. Die Personalpronomen im Akkusativ (Accusative Pronouns)",
        "description": "Object pronouns answering 'Wen?' (Whom?):",
        "table": {
          "headers": [
            "Nominativ (Subjekt)",
            "Akkusativ (Objekt)",
            "Englisch",
            "Beispielsatz (Netzwerk A1)"
          ],
          "rows": [
            [
              "ich (I)",
              "mich",
              "me",
              "Liebst du mich? / Hörst du mich?"
            ],
            [
              "du (you informal)",
              "dich",
              "you",
              "Ich rufe dich heute Abend an."
            ],
            [
              "er (he)",
              "ihn",
              "him / it (m)",
              "Ich kenne Herrn Schubert. Kennst du ihn auch?"
            ],
            [
              "sie (she)",
              "sie",
              "her / it (f)",
              "Wo ist Julia? Ich sehe sie dort drüben."
            ],
            [
              "es (it)",
              "es",
              "it (n)",
              "Das Buch ist super. Ich lese es gerade."
            ],
            [
              "wir (we)",
              "uns",
              "us",
              "Der Lehrer fragt uns."
            ],
            [
              "ihr (you all)",
              "euch",
              "you all",
              "Ich lade euch zur Party ein!"
            ],
            [
              "sie (they)",
              "sie",
              "them",
              "Paco und Christian kommen. Siehst du sie?"
            ],
            [
              "Sie (you formal)",
              "Sie",
              "you (formal)",
              "Herr Kaiser, ich informiere Sie morgen."
            ]
          ]
        }
      },
      {
        "title": "2. Pronouns Replacing Things (ihn, sie, es)",
        "description": "In German, 'it' is not always 'es'! The pronoun must match the noun's gender:",
        "items": [
          {
            "term": "ihn (for masculine objects)",
            "meaning": "Replaces masculine nouns in accusative",
            "example": "Kaufst du den Pullover? - Ja, ich kaufe ihn."
          },
          {
            "term": "sie (for feminine objects)",
            "meaning": "Replaces feminine nouns in accusative",
            "example": "Magst du die Suppe? - Ja, ich mag sie sehr."
          },
          {
            "term": "es (for neuter objects)",
            "meaning": "Replaces neuter nouns in accusative",
            "example": "Trinkst du das Bier? - Nein, ich trinke es nicht."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Suche nach Freunden am Bahnhof in Frankfurt (Netzwerk A1):",
      "lines": [
        {
          "speaker": "Julia",
          "german": "Hallo Gregor! Wo bist du? Ich sehe dich nicht.",
          "english": "Hello Gregor! Where are you? I don't see you."
        },
        {
          "speaker": "Gregor",
          "german": "Ich stehe an Gleis 4. Siehst du mich jetzt?",
          "english": "I am standing at platform 4. Do you see me now?"
        },
        {
          "speaker": "Julia",
          "german": "Ah ja, jetzt sehe ich dich! Und wo ist Paco? Hast du ihn gesehen?",
          "english": "Ah yes, now I see you! And where is Paco? Have you seen him?"
        },
        {
          "speaker": "Gregor",
          "german": "Paco kommt gleich. Er holt noch einen Kaffee.",
          "english": "Paco is coming right away. He is getting a coffee."
        }
      ]
    },
    "funFact": {
      "title": "German Objects Have Personalities",
      "content": "Because German objects carry gender, native speakers naturally refer to objects as 'he' or 'she'! For example: 'Wo ist der Schlüssel?' - 'Ich habe IHN!' (Where is the key? - I have HIM!). It takes a little practice, but soon it becomes second nature."
    },
    "practice": [
      {
        "question": "Which pronoun replaces 'den Kuchen' (masculine cake) in the sentence: 'Ich esse _____ gern.'?",
        "options": [
          "es",
          "ihn",
          "sie"
        ],
        "answer": "ihn",
        "explanation": "'der Kuchen' is masculine, so its accusative pronoun is 'ihn'."
      },
      {
        "question": "How do you say to a friend: 'I will call you today'?",
        "options": [
          "Ich rufe du heute an.",
          "Ich rufe dich heute an.",
          "Ich rufe dir heute an."
        ],
        "answer": "Ich rufe dich heute an.",
        "explanation": "'anrufen' takes the accusative pronoun: du -> dich."
      }
    ]
  },
  "a1-ch5-l23": {
    "overview": "When you describe an object directly before the noun (e.g. 'a hot coffee', 'a cold beer'), the adjective takes an ending. In this lesson, you will learn the most practical A1 adjective endings in the Accusative case.",
    "canDo": "Can apply basic adjective endings in the accusative case when ordering food, shopping, or describing everyday items.",
    "teacherNote": "Focus on the masculine shift: whenever you describe a masculine noun with 'einen' or 'den' in accusative, the adjective ALWAYS ends in '-en'! (einen heißEN Kaffee, einen frischEN Salat).",
    "sections": [
      {
        "title": "1. Adjektivendungen nach unbestimmtem Artikel (ein / eine / ein)",
        "description": "Adjective endings when describing new items with 'ein-':",
        "table": {
          "headers": [
            "Genus",
            "Akkusativ-Muster",
            "Beispiel (Netzwerk A1)",
            "Bedeutung"
          ],
          "rows": [
            [
              "Maskulin (m)",
              "einen + [Adjektiv]-EN",
              "Ich trinke einen heißEN Tee.",
              "a hot tea"
            ],
            [
              "Feminin (f)",
              "eine + [Adjektiv]-E",
              "Ich esse eine frischE Pizza.",
              "a fresh pizza"
            ],
            [
              "Neutral (n)",
              "ein + [Adjektiv]-ES",
              "Ich nehme ein kaltES Mineralwasser.",
              "a cold mineral water"
            ],
            [
              "Plural (pl)",
              "keine / viele + [Adjektiv]-EN",
              "Wir kaufen frischE Brötchen.",
              "fresh rolls"
            ]
          ]
        }
      },
      {
        "title": "2. Adjektivendungen nach bestimmtem Artikel (den / die / das)",
        "description": "When referring to a specific item with 'der / die / das':",
        "items": [
          {
            "term": "den + Adjektiv-en (m)",
            "meaning": "Masculine specific direct object",
            "example": "Ich nehme den großen Tisch."
          },
          {
            "term": "die + Adjektiv-e (f)",
            "meaning": "Feminine specific direct object",
            "example": "Gefällt dir die rote Jacke?"
          },
          {
            "term": "das + Adjektiv-e (n)",
            "meaning": "Neuter specific direct object",
            "example": "Wir buchen das moderne Zimmer."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Bestellung im Café in Köln (Netzwerk A1 Kapitel 4):",
      "lines": [
        {
          "speaker": "Kellnerin",
          "german": "Guten Tag! Was darf ich Ihnen bringen?",
          "english": "Good day! What may I bring you?"
        },
        {
          "speaker": "Sarah",
          "german": "Ich hätte gern einen großen Cappuccino und ein leckeres Stück Käsekuchen.",
          "english": "I would like a large cappuccino and a delicious piece of cheesecake."
        },
        {
          "speaker": "Kellnerin",
          "german": "Sehr gern. Möchten Sie auch ein kaltes Wasser dazu?",
          "english": "Very gladly. Would you also like a cold water with that?"
        },
        {
          "speaker": "Sarah",
          "german": "Ja, bitte ein kleines Mineralwasser mit Kohlensäure.",
          "english": "Yes, please a small sparkling mineral water."
        }
      ]
    },
    "funFact": {
      "title": "'Mit oder ohne Kohlensäure?'",
      "content": "When you order 'Wasser' in Germany, you will almost always be asked: 'Mit oder ohne Kohlensäure?' (Sparkling or still?). By default, Germans love sparkling water ('Sprudel' / 'Medium'). If you prefer flat tap-style water, ask specifically for 'Stilles Wasser'!"
    },
    "practice": [
      {
        "question": "Which ending is correct: 'Ich trinke einen stark_____ Espresso.' (der Espresso)",
        "options": [
          "-e",
          "-en",
          "-es"
        ],
        "answer": "-en",
        "explanation": "Masculine accusative after 'einen' always takes '-en': einen starken Espresso."
      },
      {
        "question": "Choose the correct phrase: 'Sie möchte ein _____ (kalt) Bier.'",
        "options": [
          "kaltes",
          "kalten",
          "kalte"
        ],
        "answer": "kaltes",
        "explanation": "'das Bier' is neuter, so after 'ein' in accusative it takes '-es': ein kaltes Bier."
      }
    ]
  }
};
