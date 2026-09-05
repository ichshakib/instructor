import { LessonContent } from "../api";

export const CHAPTER_5_LESSONS: Record<string, LessonContent> = {
  "a1-ch5-l20": {
    overview:
      "The Accusative case (der Akkusativ) is where German becomes active! Whenever a verb acts upon a direct object—what you buy, what you eat, who you see, or what you need—that object is placed into the Accusative case.",
    canDo:
      "Can identify direct objects by asking 'Wen oder was?' (Whom or what?), and execute the famous masculine article shift (der -> den, ein -> einen).",
    teacherNote:
      "Here is the great secret of the Accusative case: **ONLY the masculine gender changes!** Feminine (die/eine), neuter (das/ein), and plural (die/keine) stay 100% identical to Nominative. Only masculine shifts from -r to -n: *der -> den*, *ein -> einen*, *kein -> keinen*, *mein -> meinen*.",
    sections: [
      {
        title: "1. The Accusative Article Shift",
        description: "Notice how only the masculine column transforms:",
        table: {
          headers: ["Case", "Masculine (The only one that changes!)", "Feminine (No change)", "Neuter (No change)", "Plural (No change)"],
          rows: [
            ["Nominativ (Subject)", "der / ein / kein / mein", "die / eine / keine / meine", "das / ein / kein / mein", "die / — / keine / meine"],
            ["Akkusativ (Direct Object)", "DEN / EINEN / KEINEN / MEINEN", "die / eine / keine / meine", "das / ein / kein / mein", "die / — / keine / meine"],
          ],
        },
      },
      {
        title: "2. The Question for Akkusativ: 'Wen oder was?'",
        description: "Ask: 'Whom or what is the subject acting upon?'",
        items: [
          {
            term: "Masculine Example (Changes!)",
            meaning: "Ich habe EINEN Hund. (der Hund -> einen Hund)",
            example: "Wen oder was habe ich? -> Einen Hund (Direct Object).",
          },
          {
            term: "Feminine Example (Stays identical)",
            meaning: "Ich trinke EINE Limonade. (die Limonade -> eine Limonade)",
            example: "Wen oder was trinke ich? -> Eine Limonade.",
          },
          {
            term: "Neuter Example (Stays identical)",
            meaning: "Er kauft EIN Buch. (das Buch -> ein Buch)",
            example: "Wen oder was kauft er? -> Ein Buch.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Ordering at a traditional German Imbiss (snack stand) in Berlin:",
      lines: [
        {
          speaker: "Verkäufer",
          german: "Guten Tag! Was möchten Sie bestellen?",
          english: "Good day! What would you like to order?",
        },
        {
          speaker: "Kunde",
          german: "Ich nehme einen Kaffee und eine Currywurst, bitte.",
          english: "I'll take a coffee (der Kaffee -> einen) and a currywurst (die), please.",
        },
        {
          speaker: "Verkäufer",
          german: "Möchten Sie auch ein Brötchen dazu?",
          english: "Would you also like a bread roll (das) with that?",
        },
        {
          speaker: "Kunde",
          german: "Ja gerne, ein Brötchen nehme ich auch!",
          english: "Yes please, I'll take a roll too!",
        },
      ],
    },
    funFact: {
      title: "Why Cases Make German Word Order Free",
      content:
        "Because masculine nouns change to 'den' in Akkusativ, German can invert the sentence completely for stylistic punch: 'Den Kaffee trinkt der Mann!' In English, saying 'The coffee drinks the man' would mean a mutant coffee drank a human. In German, 'den' tells your brain with 100% mathematical certainty that the coffee is the object being drank!",
    },
    practice: [
      {
        question: "How do you say 'I need a table' (der Tisch)?",
        options: ["Ich brauche ein Tisch.", "Ich brauche einen Tisch.", "Ich brauche der Tisch."],
        answer: "Ich brauche einen Tisch.",
        explanation: "'der Tisch' is masculine and the direct object of 'brauchen', so 'ein' shifts to 'einen'.",
      },
      {
        question: "How do you say 'She is reading the newspaper' (die Zeitung)?",
        options: ["Sie liest den Zeitung.", "Sie liest die Zeitung.", "Sie liest das Zeitung."],
        answer: "Sie liest die Zeitung.",
        explanation: "Feminine nouns do NOT change in the Accusative case; 'die Zeitung' remains 'die Zeitung'.",
      },
    ],
  },

  "a1-ch5-l21": {
    overview:
      "Almost all standard transitive action verbs in German require the Accusative case for their direct object. In this lesson, we memorize the top 10 most common Akkusativ verbs that you will use in every conversation.",
    canDo:
      "Can apply the Accusative case automatically with high-frequency verbs: haben, brauchen, suchen, kaufen, sehen, essen, trinken, nehmen, and finden.",
    teacherNote:
      "A classic beginner mistake is saying 'Ich habe ein Bruder'. Remember: 'der Bruder' is masculine! Because you 'have' him, he is an Accusative direct object: *Ich habe einen Bruder*.",
    sections: [
      {
        title: "1. The Top 10 Akkusativ Verbs",
        description: "These verbs trigger an immediate direct object in Akkusativ:",
        table: {
          headers: ["Verb", "Meaning", "Example with Masculine Noun", "Translation"],
          rows: [
            ["haben", "to have", "Ich habe einen Computer.", "I have a computer (der Computer)."],
            ["brauchen", "to need", "Wir brauchen einen Schlüssel.", "We need a key (der Schlüssel)."],
            ["suchen", "to search / look for", "Suchst du den Bahnhof?", "Are you looking for the station (der Bahnhof)?"],
            ["kaufen", "to buy", "Er kauft einen Pullover.", "He buys a sweater (der Pullover)."],
            ["sehen", "to see", "Ich sehe den Bus.", "I see the bus (der Bus)."],
            ["nehmen", "to take", "Ich nehme den Tee.", "I take the tea (der Tee)."],
            ["finden", "to find / think of", "Wie findest du den Film?", "How do you find/like the movie (der Film)?"],
            ["essen", "to eat", "Sie isst einen Apfel.", "She eats an apple (der Apfel)."],
            ["trinken", "to drink", "Er trinkt einen Saft.", "He drinks a juice (der Saft)."],
            ["besuchen", "to visit", "Wir besuchen den Zoo.", "We visit the zoo (der Zoo)."],
          ],
        },
      },
    ],
    dialogue: {
      context: "Packing a suitcase before a flight from Vienna Airport:",
      lines: [
        {
          speaker: "Moritz",
          german: "Hast du deinen Reisepass?",
          english: "Do you have your passport (der Pass -> deinen)?",
        },
        {
          speaker: "Anna",
          german: "Ja, ich habe den Pass in meiner Tasche. Aber ich suche meinen Koffer!",
          english: "Yes, I have the passport in my bag. But I am looking for my suitcase (der Koffer -> meinen)!",
        },
        {
          speaker: "Moritz",
          german: "Dort drüben steht er! Wir nehmen jetzt ein Taxi.",
          english: "There it is over there! We'll take a taxi (das Taxi) now.",
        },
      ],
    },
    funFact: {
      title: "'Finden' Means Both 'To Find' and 'To Have an Opinion'!",
      content:
        "In German, the verb 'finden' means both physically finding something (*Ich finde meinen Schlüssel* - I find my key) and expressing an opinion (*Ich finde den Film super!* - I think the movie is great!). It's the most common way Germans ask for feedback: *Wie findest du das?*",
    },
    practice: [
      {
        question: "Which sentence correctly says 'I need a pen' (der Stift)?",
        options: ["Ich brauche ein Stift.", "Ich brauche einen Stift.", "Ich brauche eine Stift."],
        answer: "Ich brauche einen Stift.",
        explanation: "'der Stift' is masculine and becomes 'einen Stift' in the Accusative with 'brauchen'.",
      },
    ],
  },

  "a1-ch5-l22": {
    overview:
      "Just as nouns change into direct objects, personal pronouns have distinct direct object forms in German. Saying 'Do you love me?' or 'I see him' requires Accusative personal pronouns.",
    canDo:
      "Can replace nouns with Accusative pronouns (mich, dich, ihn, sie, es, uns, euch, sie/Sie) in spoken and written German.",
    teacherNote:
      "Notice the exact parallel: in English 'he' becomes 'him', and in German 'er' becomes 'ihn'! 'ich' becomes 'mich', and 'du' becomes 'dich'.",
    sections: [
      {
        title: "1. Nominative vs. Accusative Pronouns",
        description: "Compare the subject form with the direct object form:",
        table: {
          headers: ["Nominativ (Subject)", "Akkusativ (Object)", "English Meaning", "Example in Context"],
          rows: [
            ["ich", "mich", "me", "Hörst du mich? (Do you hear me?)"],
            ["du", "dich", "you (informal)", "Ich liebe dich. (I love you.)"],
            ["er", "ihn", "him", "Ich kenne ihn gut. (I know him well.)"],
            ["sie", "sie", "her", "Wir besuchen sie morgen. (We visit her tomorrow.)"],
            ["es", "es", "it", "Ich sehe es nicht. (I don't see it.)"],
            ["wir", "uns", "us", "Er ruft uns an. (He calls us.)"],
            ["ihr", "euch", "you all", "Ich vermisse euch. (I miss you all.)"],
            ["sie", "sie", "them", "Ich frage sie. (I ask them.)"],
            ["Sie", "Sie", "you (formal)", "Ich verstehe Sie sehr gut. (I understand you very well.)"],
          ],
        },
      },
    ],
    dialogue: {
      context: "Two friends trying to spot each other in a crowded train station in Munich:",
      lines: [
        {
          speaker: "Fabian (am Telefon)",
          german: "Hallo Clara! Wo bist du? Siehst du mich?",
          english: "Hello Clara! Where are you? Do you see me (mich)?",
        },
        {
          speaker: "Clara",
          german: "Nein, ich sehe dich noch nicht. Ich stehe vor dem Info-Point.",
          english: "No, I don't see you (dich) yet. I am standing in front of the info point.",
        },
        {
          speaker: "Fabian",
          german: "Ah, jetzt sehe ich dich! Ich komme zu dir.",
          english: "Ah, now I see you! I'm coming to you.",
        },
      ],
    },
    funFact: {
      title: "'Ich liebe dich' - The Famous Cultural Line",
      content:
        "The globally famous phrase 'Ich liebe dich' (I love you) is a pure textbook demonstration of the Accusative case: 'Ich' (Subject/Nominativ) + 'liebe' (Verb in Pos 2) + 'dich' (Direct Object/Akkusativ). Germans reserve this phrase for serious romantic relationships, preferring 'Ich hab dich lieb' for family and close friends!",
    },
    practice: [
      {
        question: "How do you translate: 'We know him'?",
        options: ["Wir kennen er.", "Wir kennen ihn.", "Wir kennen ihm."],
        answer: "Wir kennen ihn.",
        explanation: "'er' becomes 'ihn' in the Accusative direct object position.",
      },
    ],
  },

  "a1-ch5-l23": {
    overview:
      "When adjectives stand directly in front of a noun (attributive adjectives), they take specific grammatical endings to show case and gender. At Level A1, the most critical pattern to master is the masculine Accusative ending '-en'.",
    canDo:
      "Can add correct basic adjective endings in the Accusative case, especially the universal masculine '-en' ending (einen neuen Tisch, einen kalten Saft).",
    teacherNote:
      "The 'Akkusativ Masculine Rule' is bulletproof: in the Accusative case with masculine nouns, EVERYTHING ends in -en! *den neuEN Tisch*, *einen kaltEN Kaffee*, *meinen gutEN Freund*.",
    sections: [
      {
        title: "1. Adjectives in the Accusative Case",
        description: "Notice how masculine adjectives consistently adopt the '-en' ending:",
        table: {
          headers: ["Gender", "With Indefinite Article (ein/eine)", "Example", "Meaning"],
          rows: [
            ["Masculine (m)", "einen + [Adjective]-EN", "Ich kaufe einen neuen Schrank.", "I buy a new cupboard."],
            ["Feminine (f)", "eine + [Adjective]-E", "Ich trinke eine heiße Schokolade.", "I drink a hot chocolate."],
            ["Neuter (n)", "ein + [Adjective]-ES", "Er liest ein interessantes Buch.", "He reads an interesting book."],
            ["Plural (pl)", "keine / viele + [Adjective]-EN", "Wir haben viele gute Freunde.", "We have many good friends."],
          ],
        },
      },
    ],
    dialogue: {
      context: "Shopping for electronics in a department store in Berlin:",
      lines: [
        {
          speaker: "Kunde",
          german: "Guten Tag, ich suche einen schnellen Laptop für die Universität.",
          english: "Good day, I am looking for a fast laptop (der Laptop -> einen schnellen) for university.",
        },
        {
          speaker: "Verkäufer",
          german: "Wir haben hier ein sehr gutes Modell mit einem großen Bildschirm.",
          english: "We have a very good model (das Modell -> ein gutes) here with a large screen.",
        },
        {
          speaker: "Kunde",
          german: "Das sieht super aus. Ich nehme ihn!",
          english: "That looks super. I'll take it!",
        },
      ],
    },
    funFact: {
      title: "Mark Twain's Battle with German Adjective Endings",
      content:
        "In his famous 1880 essay *The Awful German Language*, Mark Twain wrote: 'When a German gets his hands on an adjective, he declines it, and inflects it, until all its common sense is completely gone.' Fortunately, at A1, remembering that masculine direct objects take '-en' solves 90% of all practical situations!",
    },
    practice: [
      {
        question: "Complete the sentence: 'Er trinkt einen _____ Kaffee.' (kalt)",
        options: ["kalte", "kaltes", "kalten"],
        answer: "kalten",
        explanation: "Because 'Kaffee' is masculine and in the Accusative case ('einen'), the adjective takes '-en': 'kalten'.",
      },
    ],
  },
};
