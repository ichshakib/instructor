import { LessonContent } from "../../types/course.types";

export const CHAPTER_10_LESSONS: Record<string, LessonContent> = {
  "a1-ch10-l44": {
    overview:
      "Describing what you wear, favorite outfits, colors, and seasonal clothing is a frequent everyday conversation topic. In this lesson from Netzwerk A1 Kapitel 10 ('Kleidung und Mode'), you will learn essential clothing items, articles, colors, and adjectives to describe personal style.",
    canDo:
      "Can name everyday clothing items with their correct genders, describe garments by color and pattern, and state what someone is wearing using the verb 'tragen' (trägt).",
    teacherNote:
      "Remember that 'tragen' (to wear/carry) is a stem-changing verb: 'ich trage', but 'du trägst' and 'er/sie/es trägt'! Also pay attention to noun genders: 'der Pullover' (m), 'die Jacke' (f), 'das Hemd' (n), 'die Schuhe' (pl).",
    sections: [
      {
        title: "1. Kleidung & Accessoires (Wardrobe Essentials)",
        description: "Standard clothing items categorized by grammatical gender:",
        table: {
          headers: [
            "Artikel & Nomen",
            "Pluralform",
            "Englische Bedeutung",
            "Beispielsatz",
          ],
          rows: [
            [
              "der Pullover / Pulli",
              "die Pullover",
              "sweater / jumper",
              "Der Pullover ist warm.",
            ],
            [
              "der Mantel",
              "die Mäntel",
              "overcoat / coat",
              "Im Winter brauche ich einen Mantel.",
            ],
            [
              "der Anzug",
              "die Anzüge",
              "man's suit",
              "Er trägt einen schwarzen Anzug.",
            ],
            [
              "die Hose",
              "die Hosen",
              "trousers / pants",
              "Die blaue Hose gefällt mir.",
            ],
            [
              "die Jacke",
              "die Jacken",
              "jacket",
              "Zieh deine Jacke an!",
            ],
            [
              "das Hemd",
              "die Hemden",
              "collared shirt",
              "Das weiße Hemd passt gut.",
            ],
            [
              "das T-Shirt",
              "die T-Shirts",
              "T-shirt",
              "Ich kaufe ein neues T-Shirt.",
            ],
            [
              "das Kleid",
              "die Kleider",
              "dress",
              "Sie trägt ein rotes Kleid.",
            ],
            [
              "die Schuhe (Pl.)",
              "der Schuh",
              "shoes",
              "Die Schuhe sind sehr bequem.",
            ],
          ],
        },
      },
      {
        title: "2. Farben & Muster (Colors & Patterns)",
        description: "Describing shades and styles:",
        items: [
          {
            term: "Farben (Colors)",
            meaning: "blau (blue), rot (red), gelb (yellow), grün (green), schwarz (black), weiß (white), grau (grey), braun (brown)",
            example: "Der Pullover ist dunkelblau.",
          },
          {
            term: "hell- / dunkel-",
            meaning: "light / dark prefixes for colors",
            example: "hellgrün (light green), dunkelgrau (dark grey)",
          },
          {
            term: "gestreift / kariert",
            meaning: "striped / checkered",
            example: "ein gestreiftes Hemd / eine karierte Hose",
          },
          {
            term: "einfarbig / bunt",
            meaning: "monochrome / colorful",
            example: "Das Kleid ist bunt und modern.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Zwei Freundinnen verabreden sich vor der Party:",
      lines: [
        {
          speaker: "Hannah",
          german: "Sophia, was ziehst du heute Abend zur Party an?",
          english: "Sophia, what are you wearing to the party tonight?",
        },
        {
          speaker: "Sophia",
          german: "Ich weiß noch nicht genau. Vielleicht meine schwarze Hose und die rote Seidenbluse.",
          english: "I'm not sure yet. Maybe my black trousers and the red silk blouse.",
        },
        {
          speaker: "Hannah",
          german: "Das sieht bestimmt elegant aus! Und welche Schuhe nimmst du?",
          english: "That will definitely look elegant! And which shoes are you taking?",
        },
        {
          speaker: "Sophia",
          german: "Meine bequemen Lederstiefel. Und du? Was trägst du?",
          english: "My comfortable leather boots. And you? What are you wearing?",
        },
        {
          speaker: "Hannah",
          german: "Ich ziehe mein neues blaues Kleid und eine warme Wollstrickjacke an.",
          english: "I'm putting on my new blue dress and a warm woolen cardigan.",
        },
      ],
    },
    funFact: {
      title: "German Singular 'Die Hose' vs. English 'Pants'",
      content:
        "In English, pants/trousers are always plural ('these pants are great'). In German, a pair of trousers is singular: 'Die Hose ist schön' (literally: 'The pant is pretty'). Only when talking about multiple pairs of pants do you use the plural 'die Hosen'!",
    },
    practice: [
      {
        question: "How do you correctly conjugate 'tragen' for 'er' (he)?",
        options: ["er tragt", "er trägte", "er trägt", "er trugen"],
        answer: "er trägt",
        explanation:
          "'tragen' has an a -> ä vowel change in the 2nd and 3rd person singular: du trägst, er/sie/es trägt.",
      },
      {
        question: "What is the German word for a collared dress shirt?",
        options: ["die Bluse", "das Hemd", "der Rock", "die Hose"],
        answer: "das Hemd",
        explanation:
          "'das Hemd' is a man's collared shirt (plural: die Hemden). 'die Bluse' is a woman's blouse.",
      },
      {
        question: "How do you say 'light blue' in German?",
        options: ["hellblau", "dunkelblau", "weißblau", "lichtblau"],
        answer: "hellblau",
        explanation:
          "The prefix 'hell-' means light/bright, so 'hellblau' is light blue ('dunkelblau' is dark blue).",
      },
    ],
  },

  "a1-ch10-l45": {
    overview:
      "Navigating large German department stores (Kaufhäuser) like KaDeWe in Berlin or Galeria requires knowing store floor layouts, asking sales clerks for assistance, and knowing how to return or exchange an item with a receipt (Kassenbon).",
    canDo:
      "Can find departments in a department store using floor indicators (EG, 1. OG, UG), ask store assistants for help, and request an exchange (Umtausch) using a receipt.",
    teacherNote:
      "Floor numbering in German-speaking countries follows European standards: The street level is 'das Erdgeschoss' (EG). The floor above is 'der 1. Stock / das 1. Obergeschoss' (1. OG = 2nd floor in US English!). The basement floor is 'das Untergeschoss' (UG).",
    sections: [
      {
        title: "1. Etagen & Abteilungen im Kaufhaus (Department Store Layout)",
        description: "Floor directory abbreviations and departments:",
        table: {
          headers: [
            "Etage (Abkürzung)",
            "Bezeichnung",
            "Abteilungen & Waren",
            "Englisch",
          ],
          rows: [
            [
              "3. OG",
              "3. Obergeschoss",
              "Kinderkleidung & Spielwaren",
              "3rd floor: Children's wear & toys",
            ],
            [
              "2. OG",
              "2. Obergeschoss",
              "Herrenmode & Sportabteilung",
              "2nd floor: Men's wear & sports",
            ],
            [
              "1. OG",
              "1. Obergeschoss",
              "Damenmode & Schuhe",
              "1st floor: Women's wear & shoes",
            ],
            [
              "EG",
              "Erdgeschoss",
              "Kosmetik, Parfümerie, Schmuck",
              "Ground floor: Cosmetics & jewelry",
            ],
            [
              "UG",
              "Untergeschoss",
              "Haushaltswaren & Feinkost",
              "Basement: Home goods & gourmet food",
            ],
          ],
        },
      },
      {
        title: "2. Redemittel für Beratung & Umtausch (Phrases for Shopping & Returns)",
        description: "Essential phrases when talking to sales clerks:",
        table: {
          headers: [
            "Situation",
            "Deutscher Ausdruck",
            "Bedeutung",
            "Antwort der Verkäuferin",
          ],
          rows: [
            [
              "Hilfe suchen",
              "Entschuldigung, wo finde ich Herrenjacken?",
              "Excuse me, where do I find men's jackets?",
              "In der 2. Etage, gleich neben den Rolltreppen.",
            ],
            [
              "Nur schauen",
              "Danke, ich möchte mich nur umsehen.",
              "Thanks, I'm just browsing / looking around.",
              "Gern, sagen Sie Bescheid, wenn Sie Hilfe brauchen.",
            ],
            [
              "Umtausch (Exchange)",
              "Ich möchte diese Bluse umtauschen.",
              "I would like to exchange this blouse.",
              "Haben Sie den Kassenbon dabei?",
            ],
            [
              "Defekt reklamieren",
              "Der Reißverschluss ist leider kaputt.",
              "The zipper is unfortunately broken.",
              "Wir tauschen die Jacke natürlich sofort um.",
            ],
            [
              "Zahlung",
              "Kann ich mit Kreditkarte / kontaktlos zahlen?",
              "Can I pay by credit card / contactless?",
              "Ja natürlich, bitte hier auflegen.",
            ],
          ],
        },
      },
    ],
    dialogue: {
      context: "Kundenservice im Kaufhaus am Alexanderplatz in Berlin:",
      lines: [
        {
          speaker: "Kunde",
          german: "Guten Tag! Ich habe gestern diesen Pullover gekauft, aber er ist zu klein.",
          english: "Good day! I bought this sweater yesterday, but it is too small.",
        },
        {
          speaker: "Verkäuferin",
          german: "Guten Tag! Möchten Sie den Pullover in einer größeren Größe oder suchen Sie ein anderes Modell?",
          english: "Good day! Would you like the sweater in a larger size or are you looking for another model?",
        },
        {
          speaker: "Kunde",
          german: "Ich hätte ihn gern in Größe L, wenn Sie ihn noch vorrätig haben.",
          english: "I would like it in size L, if you still have it in stock.",
        },
        {
          speaker: "Verkäuferin",
          german: "Ja, in Dunkelblau haben wir noch ein Stück in L. Haben Sie den Kassenbon?",
          english: "Yes, in dark blue we still have one piece in L. Do you have the receipt?",
        },
        {
          speaker: "Kunde",
          german: "Ja, hier ist der Beleg. Vielen Dank für Ihre schnelle Hilfe!",
          english: "Yes, here is the receipt. Thank you very much for your prompt help!",
        },
        {
          speaker: "Verkäuferin",
          german: "Sehr gern geschehen. Hier ist Ihr neuer Pullover. Schönen Tag noch!",
          english: "You're very welcome. Here is your new sweater. Have a nice day!",
        },
      ],
    },
    funFact: {
      title: "Germany's Legendary KaDeWe",
      content:
        "Berlin's 'Kaufhaus des Westens' (KaDeWe), founded in 1907, is the largest department store in continental Europe, spanning over 60,000 square meters. Its 6th floor is world-famous as the 'Feinschmeckeretage' (Gourmet Floor), featuring over 30 culinary bars and 35,000 delicacies.",
    },
    practice: [
      {
        question: "What does 'EG' stand for on an elevator panel in a German department store?",
        options: ["Einkaufsgruppe", "Erdgeschoss", "Erste Gerade", "Endstation"],
        answer: "Erdgeschoss",
        explanation:
          "'EG' stands for 'das Erdgeschoss' (ground / street floor).",
      },
      {
        question: "What document is typically required when you want to exchange (umtauschen) an item?",
        options: ["der Reisepass", "der Kassenbon", "der Führerschein", "das Zeugnis"],
        answer: "der Kassenbon",
        explanation:
          "'der Kassenbon' (or 'der Beleg' / 'die Quittung') is the purchase receipt required for store returns and exchanges.",
      },
      {
        question: "What is the polite phrase to say when you are just browsing in a store?",
        options: [
          "Ich habe kein Geld.",
          "Ich möchte mich nur umsehen, danke.",
          "Verlassen Sie das Geschäft!",
          "Geben Sie mir Rabatt!",
        ],
        answer: "Ich möchte mich nur umsehen, danke.",
        explanation:
          "'Ich möchte mich nur umsehen, danke' politely informs the sales assistant that you are just looking around.",
      },
    ],
  },

  "a1-ch10-l46": {
    overview:
      "Trying on clothes and evaluating how they fit is a practical communicative scenario. In this lesson, you will learn to ask for clothing sizes, locate the fitting room ('die Umkleidekabine'), and express whether clothes fit well, are too tight, too loose, too short, or too long.",
    canDo:
      "Can ask for and state clothing sizes (Größe 38, S/M/L/XL), request to try garments on, and describe fit accurately (passt gut, zu eng, zu weit).",
    teacherNote:
      "Notice how the verb 'passen' works: 'Die Hose passt mir gut' (The pants fit me well). Here 'mir' is in the Dative case! If an item looks great on someone aesthetically, Germans use 'stehen': 'Das Kleid steht dir ausgezeichnet!' (The dress looks magnificent on you!).",
    sections: [
      {
        title: "1. Größen & Anprobe (Sizes & Fitting)",
        description: "Essential terms for trying on clothes:",
        table: {
          headers: [
            "Deutscher Begriff",
            "Bedeutung",
            "Typischer Beispielsatz",
          ],
          rows: [
            [
              "die Umkleidekabine (-n)",
              "fitting room / changing cubicle",
              "Wo sind die Umkleidekabinen bitte?",
            ],
            [
              "anprobieren (trennbar!)",
              "to try on (clothes)",
              "Kann ich diese Jacke anprobieren?",
            ],
            [
              "die Konfektionsgröße (-n)",
              "clothing size",
              "Welche Größe tragen Sie? — Größe 40.",
            ],
            [
              "die Schuhgröße (-n)",
              "shoe size",
              "Ich habe Schuhgröße 42.",
            ],
            [
              "die Nummer / Größe kleiner/größer",
              "a size smaller / larger",
              "Haben Sie das eine Nummer größer?",
            ],
          ],
        },
      },
      {
        title: "2. Passform beurteilen: 'passen' vs. 'stehen'",
        description: "Distinguishing physical fit from aesthetic suitability:",
        table: {
          headers: [
            "Ausdruck",
            "Bedeutung",
            "Verwendung",
            "Beispiel",
          ],
          rows: [
            [
              "passen (+ Dativ)",
              "to fit (size / dimensions)",
              "Physical size matches",
              "Die Schuhe passen mir perfekt.",
            ],
            [
              "stehen (+ Dativ)",
              "to suit / look good on",
              "Appearance / style matches",
              "Blau steht dir wirklich gut!",
            ],
            [
              "zu eng / zu weit",
              "too tight / too loose (baggy)",
              "Fit issue",
              "Die Hose ist leider etwas zu eng.",
            ],
            [
              "zu kurz / zu lang",
              "too short / too long",
              "Length issue",
              "Die Ärmel sind mir zu lang.",
            ],
          ],
        },
      },
    ],
    dialogue: {
      context: "Im Modegeschäft vor den Umkleidekabinen (Netzwerk A1):",
      lines: [
        {
          speaker: "Verkäufer",
          german: "Kann ich Ihnen behilflich sein?",
          english: "May I help you?",
        },
        {
          speaker: "Kundin",
          german: "Ja, gern. Ich möchte diesen dunkelgrünen Mantel anprobieren. Wo ist die Umkleidekabine?",
          english: "Yes, please. I'd like to try on this dark green coat. Where is the fitting room?",
        },
        {
          speaker: "Verkäufer",
          german: "Dort drüben auf der linken Seite. Welche Größe haben Sie?",
          english: "Over there on the left side. What size do you take?",
        },
        {
          speaker: "Kundin",
          german: "Normalerweise Größe 38. Ich probiere ihn gleich an.",
          english: "Usually size 38. I'll try it on right away.",
        },
        {
          speaker: "Verkäufer",
          german: "Und? Wie passt der Mantel?",
          english: "And? How does the coat fit?",
        },
        {
          speaker: "Kundin",
          german: "An den Schultern passt er perfekt, aber die Farbe gefällt mir besonders gut!",
          english: "At the shoulders it fits perfectly, but I especially love the color!",
        },
        {
          speaker: "Verkäufer",
          german: "Grün steht Ihnen wirklich hervorragend!",
          english: "Green really suits you wonderfully!",
        },
        {
          speaker: "Kundin",
          german: "Vielen Dank! Den nehme ich.",
          english: "Thank you very much! I'll take it.",
        },
      ],
    },
    funFact: {
      title: "European Clothing Sizes Explained",
      content:
        "German women's clothing sizes typically run from 34 (XS) to 46+ (XXL), while men's suit sizes run from 46 to 58. For shoes, standard German sizing uses the Paris point system: size 38 is roughly a US women's 7.5, and size 43 is roughly a US men's 9.5.",
    },
    practice: [
      {
        question: "How do you ask: 'Can I try this on?' in German?",
        options: [
          "Kann ich das anprobieren?",
          "Kann ich das essen?",
          "Darf ich das verkaufen?",
          "Muss ich das tragen?",
        ],
        answer: "Kann ich das anprobieren?",
        explanation:
          "'anprobieren' specifically means to try on garments to check the fit.",
      },
      {
        question: "What is the difference between 'Die Jacke passt mir' and 'Die Jacke steht mir'?",
        options: [
          "'passen' refers to physical size/fit, while 'stehen' means it looks flattering/suits you.",
          "'stehen' refers to size, while 'passen' means color.",
          "There is no difference; they are exact synonyms.",
          "'passen' is only used for shoes.",
        ],
        answer: "'passen' refers to physical size/fit, while 'stehen' means it looks flattering/suits you.",
        explanation:
          "'passen' measures physical dimensions (too tight/loose), whereas 'stehen' describes visual aesthetic harmony ('That color suits you!').",
      },
      {
        question: "How would you tell the shop assistant: 'The trousers are too tight'?",
        options: [
          "Die Hose ist zu eng.",
          "Die Hose ist zu weit.",
          "Die Hose ist zu billig.",
          "Die Hose ist zu hell.",
        ],
        answer: "Die Hose ist zu eng.",
        explanation:
          "'zu eng' means too tight. ('zu weit' means too loose/baggy).",
      },
    ],
  },

  "a1-ch10-l47": {
    overview:
      "When pointing out specific items while shopping ('Which coat do you want? — This coat here!'), German uses the interrogative pronoun 'welch-' (which) and demonstrative pronouns 'dies-' (this/these). In this lesson from Netzwerk A1 Kapitel 10, you will master their case endings in both Nominative and Accusative.",
    canDo:
      "Can ask which item someone prefers using 'Welcher / Welche / Welches / Welchen' and point to specific items using 'Dieser / Diese / Dieses / Diesen'.",
    teacherNote:
      "Good news: The endings for 'welch-' and 'dies-' follow the EXACT same endings as the definite article 'der, die, das, den'! For example: der -> welch-er / dies-er; das -> welch-es / dies-es; die -> welch-e / dies-e; and in Akkusativ: den -> welch-en / dies-en!",
    sections: [
      {
        title: "1. Endungen im Nominativ (Subject)",
        description: "Pointing out items as the sentence subject:",
        table: {
          headers: [
            "Genus",
            "Frageartikel (Which?)",
            "Demonstrativartikel (This)",
            "Beispielsatz",
          ],
          rows: [
            [
              "Maskulin (der)",
              "Welch-er?",
              "dies-er",
              "Welcher Pullover ist wärmer? — Dieser Pullover.",
            ],
            [
              "Feminin (die)",
              "Welch-e?",
              "dies-e",
              "Welche Jacke gefällt dir? — Diese Jacke.",
            ],
            [
              "Neutral (das)",
              "Welch-es?",
              "dies-es",
              "Welches Kleid ist schöner? — Dieses Kleid.",
            ],
            [
              "Plural (die)",
              "Welch-e?",
              "dies-e",
              "Welche Schuhe sind bequemer? — Diese Schuhe.",
            ],
          ],
        },
      },
      {
        title: "2. Endungen im Akkusativ (Direct Object)",
        description: "Remember: only the masculine form changes to -en!",
        table: {
          headers: [
            "Genus",
            "Frageartikel im Akkusativ",
            "Demonstrativartikel im Akkusativ",
            "Beispielsatz",
          ],
          rows: [
            [
              "Maskulin (den)",
              "Welch-en?",
              "dies-en",
              "Welchen Mantel kaufst du? — Diesen Mantel hier.",
            ],
            [
              "Feminin (die)",
              "Welch-e?",
              "dies-e",
              "Welche Hose probierst du an? — Diese Hose.",
            ],
            [
              "Neutral (das)",
              "Welch-es?",
              "dies-es",
              "Welches T-Shirt nimmst du? — Dieses T-Shirt.",
            ],
            [
              "Plural (die)",
              "Welch-e?",
              "dies-e",
              "Welche Stiefel möchtest du? — Diese Stiefel.",
            ],
          ],
        },
      },
    ],
    dialogue: {
      context: "Entscheidungshilfe beim Einkaufen (Netzwerk A1):",
      lines: [
        {
          speaker: "Marco",
          german: "Schau mal, Laura! Welcher Mantel gefällt dir besser?",
          english: "Look, Laura! Which coat do you like better?",
        },
        {
          speaker: "Laura",
          german: "Dieser schwarze Mantel hier ist sehr schick, aber jener graue ist moderner.",
          english: "This black coat here is very chic, but that grey one is more modern.",
        },
        {
          speaker: "Marco",
          german: "Und welchen Pullover soll ich dazu nehmen?",
          english: "And which sweater should I take with it?",
        },
        {
          speaker: "Laura",
          german: "Diesen dunkelblauen Wollpullover! Der passt farblich perfekt zum Mantel.",
          english: "This dark blue wool sweater! It matches the coat color perfectly.",
        },
        {
          speaker: "Marco",
          german: "Gut! Dann nehme ich diesen Mantel und diesen Pullover.",
          english: "Good! Then I'll take this coat and this sweater.",
        },
      ],
    },
    funFact: {
      title: "Pointing Fingers with 'der da' & 'die hier'",
      content:
        "In casual everyday spoken German, native speakers often replace 'dieser / diese / dieses' with the definite article plus 'da' or 'hier': 'Welchen willst du? — Den hier!' (This one here!) or 'Die da!' (That one there!). It is quick, punchy, and heard constantly in shops.",
    },
    practice: [
      {
        question: "Complete the sentence in the Accusative case: '___ Rock möchten Sie kaufen?' (der Rock)",
        options: ["Welcher", "Welchen", "Welches", "Welchem"],
        answer: "Welchen",
        explanation:
          "'der Rock' is masculine. In the Accusative (direct object of 'kaufen'), masculine takes '-en': 'Welchen Rock...'.",
      },
      {
        question: "Complete the response: 'Welches T-Shirt gefällt dir? — ___ T-Shirt hier.'",
        options: ["Dieser", "Dieses", "Diesen", "Diese"],
        answer: "Dieses",
        explanation:
          "'das T-Shirt' is neuter. In the Nominative, neuter takes '-es': 'Dieses T-Shirt hier'.",
      },
      {
        question: "Which question asks which shoes (plural) someone is trying on?",
        options: [
          "Welche Schuhe probierst du an?",
          "Welcher Schuhe probierst du an?",
          "Welchen Schuhe probierst du an?",
          "Welches Schuhe probierst du an?",
        ],
        answer: "Welche Schuhe probierst du an?",
        explanation:
          "'die Schuhe' is plural, so both Nominative and Accusative take 'Welche Schuhe'.",
      },
    ],
  },
};
