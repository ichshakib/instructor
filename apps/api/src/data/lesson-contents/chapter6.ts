import { LessonContent } from "../../types/course.types";

export const CHAPTER_6_LESSONS: Record<string, LessonContent> = {
  "a1-ch6-l24": {
    overview:
      "Knowing how to say 'no' accurately is vital. German has two main tools for negation: 'kein' and 'nicht'. Mixing them up is one of the most common beginner errors, but the rule distinguishing them is crystal clear.",
    canDo:
      "Can negate nouns using 'kein/keine' and negate verbs, adjectives, proper names, and whole sentences using 'nicht'.",
    teacherNote:
      "Here is the golden rule: If a noun in the positive sentence takes 'ein/eine' or has NO article at all, negate it with **kein/keine**! For everything else (verbs, adjectives, adverbs, definite articles like 'der/die/das', names), use **nicht**.",
    sections: [
      {
        title: "1. The Clear Divide: 'kein' vs. 'nicht'",
        description: "Study how the positive sentence determines the negation tool:",
        table: {
          headers: ["Category", "Positive Statement", "Negated Statement", "Rule applied"],
          rows: [
            ["Noun with indefinite article", "Ich habe ein Auto.", "Ich habe KEIN Auto.", "ein -> kein"],
            ["Noun with no article (zero article)", "Ich trinke Milch.", "Ich trinke KEINE Milch.", "zero article -> kein/keine"],
            ["Noun with definite article (der/die/das)", "Ich kenne den Mann.", "Ich kenne den Mann NICHT.", "Definite article -> nicht"],
            ["Verb / Action", "Er arbeitet heute.", "Er arbeitet heute NICHT.", "Action negated -> nicht"],
            ["Adjective / Description", "Das Zimmer ist groß.", "Das Zimmer ist NICHT groß.", "Adjective negated -> nicht"],
            ["Proper names & Places", "Das ist Peter.", "Das ist NICHT Peter.", "Proper name -> nicht"],
          ],
        },
      },
      {
        title: "2. The Forms of 'kein' (Declined like 'ein')",
        description: "Notice how 'kein' has the exact same endings as 'ein':",
        table: {
          headers: ["Case", "Masculine", "Feminine", "Neuter", "Plural"],
          rows: [
            ["Nominativ", "kein Hund", "keine Katze", "kein Kind", "keine Kinder"],
            ["Akkusativ", "KEINEN Hund", "keine Katze", "kein Kind", "keine Kinder"],
          ],
        },
      },
    ],
    dialogue: {
      context: "At a coffee shop counter in Zurich:",
      lines: [
        {
          speaker: "Barista",
          german: "Möchten Sie Zucker oder Milch in Ihren Kaffee?",
          english: "Would you like sugar or milk in your coffee?",
        },
        {
          speaker: "Gast",
          german: "Nein danke, ich nehme keinen Zucker und keine Milch.",
          english: "No thank you, I take no sugar and no milk (kein/keine for nouns).",
        },
        {
          speaker: "Barista",
          german: "Alles klar! Ist der Kuchen hier auch für Sie?",
          english: "All right! Is the cake here also for you?",
        },
        {
          speaker: "Gast",
          german: "Nein, das ist nicht mein Kuchen!",
          english: "No, that is not my cake (nicht for possessives)!",
        },
      ],
    },
    funFact: {
      title: "German Directness & Precision",
      content:
        "German speakers place immense value on precision. The distinction between 'kein' (none of something) and 'nicht' (not doing something) reflects this mindset. Saying 'Ich trinke nicht Kaffee' sounds like an unfinished thought to a native speaker—they immediately expect: 'Ich trinke keinen Kaffee!'",
    },
    practice: [
      {
        question: "How do you negate: 'Ich habe Zeit' (I have time)?",
        options: ["Ich habe nicht Zeit.", "Ich habe keine Zeit.", "Ich habe kein Zeit."],
        answer: "Ich habe keine Zeit.",
        explanation: "'die Zeit' has no article in the positive statement, so it takes feminine 'keine': 'Ich habe keine Zeit'.",
      },
      {
        question: "How do you negate: 'Das Auto ist teuer' (The car is expensive)?",
        options: ["Das Auto ist kein teuer.", "Das Auto ist nicht teuer.", "Das Auto ist keine teuer."],
        answer: "Das Auto ist nicht teuer.",
        explanation: "Adjectives (teuer) are always negated using 'nicht'.",
      },
    ],
  },

  "a1-ch6-l25": {
    overview:
      "Expressing relationships, belonging, and ownership (my car, your dog, her mother) requires possessive articles. In German, possessives match both the owner (who possesses) and the gender/case of the noun being possessed!",
    canDo:
      "Can use possessive articles (mein, dein, sein, ihr, unser, euer, ihr/Ihr) in both Nominative and Accusative cases.",
    teacherNote:
      "Think of possessive articles as having two sides: the ROOT shows who owns it (mein = my, dein = your, sein = his, ihr = her), while the ENDING matches the noun (just like ein/eine/einen)!",
    sections: [
      {
        title: "1. The Possessive Stems by Person",
        description: "These stems correspond to the subject pronouns:",
        table: {
          headers: ["Owner", "German Stem", "English Meaning", "Example in Nominative"],
          rows: [
            ["ich (I)", "mein-", "my", "mein Vater / meine Mutter / mein Kind"],
            ["du (you - informal)", "dein-", "your", "dein Bruder / deine Schwester / dein Buch"],
            ["er (he)", "sein-", "his", "sein Handy / seine Tasche"],
            ["es (it)", "sein-", "its", "seine Farbe (its color)"],
            ["sie (she)", "ihr-", "her", "ihr Auto / ihre Freundin"],
            ["wir (we)", "unser-", "our", "unser Haus / unsere Familie"],
            ["ihr (you all)", "euer- / eure", "your (plural)", "euer Zimmer / eure Freunde"],
            ["sie (they)", "ihr-", "their", "ihr Garten / ihre Wohnung"],
            ["Sie (you - formal)", "Ihr- (capitalized!)", "your (formal)", "Ihr Pass / Ihre Adresse"],
          ],
        },
      },
      {
        title: "2. Possessives in the Accusative Case",
        description: "Just like 'ein' becomes 'einen', masculine possessives take '-en' in Accusative:",
        items: [
          {
            term: "Masculine (Changes to -en!)",
            meaning: "Ich besuche meinEN Bruder. / Suchst du deinEN Schlüssel?",
            example: "Masculine direct objects always take -en!",
          },
          {
            term: "Feminine (Takes -e)",
            meaning: "Ich liebe meinE Familie. / Er ruft seinE Mutter an.",
            example: "Identical to Nominative.",
          },
          {
            term: "Neuter (No ending)",
            meaning: "Wir verkaufen unser Haus. / Sie sucht ihr Buch.",
            example: "Identical to Nominative.",
          },
        ],
      },
    ],
    dialogue: {
      context: "At a family gathering in Vienna, looking at family photographs:",
      lines: [
        {
          speaker: "Jonas",
          german: "Ist das dein Hund auf dem Foto?",
          english: "Is that your dog in the photo?",
        },
        {
          speaker: "Eva",
          german: "Ja, das ist mein Hund Bello. Und hier siehst du meine Eltern und meinen Bruder.",
          english: "Yes, that is my dog Bello. And here you see my parents and my brother (meinen Bruder).",
        },
        {
          speaker: "Jonas",
          german: "Eine schöne Familie! Wo wohnt dein Bruder?",
          english: "A lovely family! Where does your brother live?",
        },
      ],
    },
    funFact: {
      title: "Watch Out for 'sein' vs. 'ihr'!",
      content:
        "In English, we say 'his mother' and 'her mother'. In German, 'his' is 'sein-' and 'her' is 'ihr-'. But beginners sometimes get confused because 'sein' is also the verb 'to be'! Context always makes it obvious: 'Er ist hier' (He is here) vs 'Das ist sein Hund' (That is his dog).",
    },
    practice: [
      {
        question: "How do you say 'I am looking for my key' (der Schlüssel)?",
        options: ["Ich suche mein Schlüssel.", "Ich suche meinen Schlüssel.", "Ich suche meine Schlüssel."],
        answer: "Ich suche meinen Schlüssel.",
        explanation: "'der Schlüssel' is masculine and an Accusative direct object, so 'mein' becomes 'meinen'.",
      },
    ],
  },

  "a1-ch6-l26": {
    overview:
      "Describing what exists in a room, a city, or an area is essential. German uses the universal phrase 'es gibt' (there is / there are). Crucially, 'es gibt' ALWAYS requires the Accusative case for the noun that follows!",
    canDo:
      "Can describe availability, amenities, and surroundings using 'es gibt' followed by Accusative nouns.",
    teacherNote:
      "'Es gibt' works for both singular AND plural! Unlike English, where you must switch between 'there is' and 'there are', German stays 'es gibt' for everything: *Es gibt einen Park* (There is a park) and *Es gibt viele Parks* (There are many parks).",
    sections: [
      {
        title: "1. 'Es gibt' + Akkusativ",
        description: "Study how masculine nouns change after 'es gibt':",
        table: {
          headers: ["Gender", "Pattern after 'es gibt'", "German Example", "English Meaning"],
          rows: [
            ["Masculine (m)", "es gibt einen / keinen", "In der Stadt gibt es EINEN Bahnhof.", "In the city there is a train station."],
            ["Feminine (f)", "es gibt eine / keine", "Hier gibt es EINE Bäckerei.", "Here there is a bakery."],
            ["Neuter (n)", "es gibt ein / kein", "In der Nähe gibt es EIN Kino.", "Nearby there is a cinema."],
            ["Plural (pl)", "es gibt viele / keine", "Es gibt hier VIELE Restaurants.", "There are many restaurants here."],
          ],
        },
      },
      {
        title: "2. Questions with 'Gibt es...?'",
        description: "To ask if something exists, invert to Position 1: 'Gibt es...?'",
        items: [
          {
            term: "Gibt es hier WLAN?",
            meaning: "Is there Wi-Fi here?",
            example: "Ja, es gibt kostenloses WLAN.",
          },
          {
            term: "Gibt es einen Supermarkt in der Nähe?",
            meaning: "Is there a supermarket nearby?",
            example: "Ja, an der Ecke gibt es einen.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Checking into an Airbnb apartment in Munich and asking about the neighborhood:",
      lines: [
        {
          speaker: "Gast",
          german: "Entschuldigung, gibt es hier in der Nähe einen Supermarkt?",
          english: "Excuse me, is there a supermarket nearby (der Supermarkt -> einen)?",
        },
        {
          speaker: "Vermieter",
          german: "Ja, direkt um die Ecke gibt es einen Edeka und eine Apotheke.",
          english: "Yes, right around the corner there is an Edeka and a pharmacy.",
        },
        {
          speaker: "Gast",
          german: "Wunderbar! Und gibt es auch eine U-Bahn-Station?",
          english: "Wonderful! And is there also a subway station?",
        },
        {
          speaker: "Vermieter",
          german: "Ja, nur fünf Minuten zu Fuß.",
          english: "Yes, only five minutes on foot.",
        },
      ],
    },
    funFact: {
      title: "Literal Meaning of 'Es gibt'",
      content:
        "Linguistically, 'es gibt' literally translates to 'it gives'! When you say 'Es gibt einen Supermarkt', old Germanic phrasing is essentially saying: 'Nature / the world gives a supermarket'. Today, it simply means 'there is / there exists'.",
    },
    practice: [
      {
        question: "Complete the question: 'Gibt es hier _____ Geldautomaten?' (der Geldautomat - ATM)",
        options: ["ein", "einen", "eine"],
        answer: "einen",
        explanation: "'der Geldautomat' is masculine and follows 'es gibt' (Accusative), so it becomes 'einen'.",
      },
    ],
  },

  "a1-ch6-l27": {
    overview:
      "To connect two thoughts together smoothly without repeating sentences, you need coordinating conjunctions. In German, the three most important connectors are 'und' (and), 'aber' (but), and 'oder' (or).",
    canDo:
      "Can link two main clauses using coordinating conjunctions (und, aber, oder) without changing verb position (Position 0).",
    teacherNote:
      "These connectors are called 'Position 0 Conjunctions' because they do NOT count as a position in the sentence! The sentence after 'und' or 'aber' starts fresh: Subject in Position 1, Verb in Position 2.",
    sections: [
      {
        title: "1. The Position 0 Rule (ADUSO Connectors)",
        description: "Connectors link clauses while keeping both verbs in Position 2:",
        table: {
          headers: ["Clause 1", "Connector (Pos 0)", "Subject (Pos 1)", "Verb (Pos 2)", "Rest of Clause 2"],
          rows: [
            ["Ich lerne Deutsch", "und", "ich", "wohne", "in Berlin."],
            ["Er möchte kommen,", "aber", "er", "hat", "heute keine Zeit."],
            ["Trinken wir Tee", "oder", "gehen", "wir", "in ein Café?"],
            ["Ich esse gerne Pizza,", "aber", "meine Schwester", "mag", "Salat."],
          ],
        },
      },
    ],
    dialogue: {
      context: "Two friends deciding on evening plans in Hamburg:",
      lines: [
        {
          speaker: "Daniel",
          german: "Gehen wir heute Abend ins Kino oder bleiben wir zu Hause?",
          english: "Are we going to the movies tonight or staying at home?",
        },
        {
          speaker: "Sophie",
          german: "Ich bin müde, aber ich möchte trotzdem rausgehen!",
          english: "I am tired, but I want to go out anyway!",
        },
        {
          speaker: "Daniel",
          german: "Toll, dann essen wir eine Pizza und sehen danach den neuen Film.",
          english: "Great, then we'll eat a pizza and watch the new movie afterwards.",
        },
      ],
    },
    funFact: {
      title: "The Comma Before 'Aber' is Mandatory!",
      content:
        "German punctuation is governed by strict grammatical rules. Unlike in English where a comma before 'but' is often optional, in German you **must always place a comma** before 'aber' and 'denn' when linking two full sentences!",
    },
    practice: [
      {
        question: "Which connector means 'but' and requires a comma before it?",
        options: ["und", "aber", "oder"],
        answer: "aber",
        explanation: "'aber' means 'but' and connects contrasting statements, always preceded by a comma.",
      },
    ],
  },

  "a1-ch6-l28": {
    overview:
      "Talking about what you love doing, what you like, and what you prefer is the heart of casual conversation. German makes a clear grammatical distinction between liking nouns (verb 'mögen') and liking actions (adverb 'gern').",
    canDo:
      "Can express likes using 'mögen' for things and 'gern' for activities, and express preferences using 'lieber'.",
    teacherNote:
      "Remember this split: To like a THING (coffee, pizza, music), use the verb **mögen** (*Ich mag Kaffee*). To like an ACTION (reading, traveling, cooking), use the verb + **gern** (*Ich reise gern / Ich koche gern*)!",
    sections: [
      {
        title: "1. The Verb 'mögen' (To like things/nouns)",
        description: "Conjugation of 'mögen' in present tense (stem changes to mag- in singular):",
        table: {
          headers: ["Pronoun", "Form of mögen", "Example Sentence", "Meaning"],
          rows: [
            ["ich", "mag", "Ich mag deutsche Musik.", "I like German music."],
            ["du", "magst", "Magst du Schokolade?", "Do you like chocolate?"],
            ["er / sie / es", "mag", "Er mag keinen Fisch.", "He doesn't like fish."],
            ["wir", "mögen", "Wir mögen Berlin sehr.", "We like Berlin very much."],
            ["ihr", "mögt", "Mögt ihr Fußball?", "Do you all like soccer?"],
            ["sie / Sie", "mögen", "Mögen Sie Kaffee?", "Do you like coffee (formal)?"],
          ],
        },
      },
      {
        title: "2. The Magic Adverb: 'gern' & 'lieber' (For Actions)",
        description: "Place 'gern' after the verb to mean 'I like doing X':",
        items: [
          {
            term: "gern / gerne (gladly / like doing)",
            meaning: "Ich lese gern. (I like reading.) / Ich koche gern. (I like cooking.)",
            example: "Wir reisen gern nach Österreich.",
          },
          {
            term: "lieber (rather / prefer doing)",
            meaning: "Trinkst du Tee? -> Nein, ich trinke lieber Kaffee. (I prefer drinking coffee.)",
            example: "Ich fahre lieber mit dem Zug als mit dem Bus.",
          },
          {
            term: "am liebsten (most of all / favorite)",
            meaning: "Am liebsten esse ich Pizza. (Most of all, I love eating pizza.)",
            example: "Superlative preference.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Discussing hobbies and free time in an evening German course:",
      lines: [
        {
          speaker: "Tom",
          german: "Was machst du am Wochenende gern?",
          english: "What do you like doing on the weekend?",
        },
        {
          speaker: "Maja",
          german: "Ich koche gern mit Freunden. Und du? Magst du Sport?",
          english: "I like cooking with friends. And you? Do you like sports?",
        },
        {
          speaker: "Tom",
          german: "Ja, ich spiele gern Fußball, aber ich fahre lieber Fahrrad!",
          english: "Yes, I like playing soccer, but I prefer riding my bicycle!",
        },
      ],
    },
    funFact: {
      title: "The Concept of 'Feierabend'",
      content:
        "When Germans finish work and transition to doing what they like (gern machen), they announce: 'Ich mache jetzt Feierabend!'. *Feierabend* literally translates to 'celebration evening'. It signifies the sacred boundary where all work stops, and personal relaxation, hobbies, and family time begin!",
    },
    practice: [
      {
        question: "How do you say 'I like traveling'?",
        options: ["Ich mag reisen.", "Ich reise gern.", "Ich bin gern reisen."],
        answer: "Ich reise gern.",
        explanation: "For activities and actions, pair the conjugated verb with the adverb 'gern' (Ich reise gern).",
      },
    ],
  },
};
