import { LessonContent } from "../api";

export const CHAPTER_7_LESSONS: Record<string, LessonContent> = {
  "a1-ch7-l29": {
    overview:
      "The Dative case (der Dativ) introduces indirect objects—the person or recipient who benefits from an action (e.g. giving, answering, helping). It also serves as the default case for some of the most vital prepositions in everyday German.",
    canDo:
      "Can identify indirect objects by asking 'Wem?' (To whom?), and apply the Dative article transformations (dem, der, dem, den + n).",
    teacherNote:
      "Here is the musical rhyme that German schoolchildren learn to remember the Dative articles: 'Aus dem, aus der, aus dem, aus den!' Notice that masculine and neuter both change to DEM, feminine becomes DER, and plural becomes DEN with an extra 'n' added to the noun!",
    sections: [
      {
        title: "1. The Dative Article Transformations",
        description: "Study how all genders transform in the Dative case:",
        table: {
          headers: ["Gender", "Nominativ", "Akkusativ", "DATIV (Recipient / Wem?)", "Indefinite Dativ"],
          rows: [
            ["Masculine (m)", "der Mann", "den Mann", "DEM Mann", "einem Mann"],
            ["Feminine (f)", "die Frau", "die Frau", "DER Frau", "einer Frau"],
            ["Neuter (n)", "das Kind", "das Kind", "DEM Kind", "einem Kind"],
            ["Plural (pl)", "die Kinder", "die Kinder", "DEN Kindern (+n!)", "keinen Kindern"],
          ],
        },
      },
      {
        title: "2. The Question for Dativ: 'Wem?' (To whom?)",
        description: "Dative answers the question 'Wem?' (To whom do you give/help/show?):",
        items: [
          {
            term: "geben (to give)",
            meaning: "Ich gebe DEM Mann das Buch. (I give the man the book.)",
            example: "Wem gebe ich das Buch? -> Dem Mann (Indirect Object).",
          },
          {
            term: "helfen (to help)",
            meaning: "Ich helfe DER Frau. (I help the woman.)",
            example: "Wem helfe ich? -> Der Frau.",
          },
          {
            term: "antworten (to answer)",
            meaning: "Er antwortet DEM Lehrer. (He answers the teacher.)",
            example: "Wem antwortet er? -> Dem Lehrer.",
          },
        ],
      },
    ],
    dialogue: {
      context: "A tourist asking for help and giving thanks in central Vienna:",
      lines: [
        {
          speaker: "Tourist",
          german: "Entschuldigung, können Sie mir helfen?",
          english: "Excuse me, can you help me (mir - Dativ)?",
        },
        {
          speaker: "Wiener",
          german: "Ja gerne! Ich helfe Ihnen gerne. Was suchen Sie?",
          english: "Yes gladly! I gladly help you (Ihnen - Dativ). What are you looking for?",
        },
        {
          speaker: "Tourist",
          german: "Ich gebe dem Taxifahrer diese Adresse, aber er findet sie nicht.",
          english: "I am giving the taxi driver (dem Taxifahrer) this address, but he cannot find it.",
        },
      ],
    },
    funFact: {
      title: "The Plural '+ n' Rule",
      content:
        "In the Dative plural, German not only changes the article to 'den', but also adds a final letter '-n' to the end of the noun if it doesn't already have one! For example: *die Kinder* -> *den Kindern*, *die Freunde* -> *den Freunden*. This is the famous 'Dativ-Plural-n'!",
    },
    practice: [
      {
        question: "What is the Dative form of 'die Mutter'?",
        options: ["dem Mutter", "der Mutter", "den Mutter"],
        answer: "der Mutter",
        explanation: "Feminine nouns shift from 'die' to 'der' in the Dative case ('Ich helfe der Mutter').",
      },
    ],
  },

  "a1-ch7-l30": {
    overview:
      "A select group of German prepositions ALWAYS trigger the Dative case, no matter what verb is in the sentence. Learning this fixed list is one of the highest return-on-investment topics in beginner German.",
    canDo:
      "Can apply the fixed Dative prepositions: aus, bei, mit, nach, seit, von, zu in everyday travel and conversational contexts.",
    teacherNote:
      "Sing this to the tune of 'The Blue Danube' or chant it aloud: 'Aus, bei, mit, nach, seit, von, zu — immer mit dem Dativ, du!'. The moment you see one of these seven words, the very next noun MUST be in Dativ.",
    sections: [
      {
        title: "1. The 7 Fixed Dative Prepositions",
        description: "Every single one of these words locks the noun into Dativ:",
        table: {
          headers: ["Preposition", "Primary Meaning", "Example in Dativ", "Translation"],
          rows: [
            ["aus", "out of / from", "Er kommt aus DEM Haus.", "He comes out of the house."],
            ["bei", "at / with / near", "Ich wohne bei MEINEN Eltern.", "I live with my parents."],
            ["mit", "with / by (transit)", "Wir fahren mit DEM Bus / Zug.", "We travel by bus / train."],
            ["nach", "to (cities/countries) / after", "Nach DER Arbeit trinken wir Kaffee.", "After work we drink coffee."],
            ["seit", "since / for (time)", "Ich lerne seit EINEM Monat Deutsch.", "I've been learning German for a month."],
            ["von", "from / of", "Das ist ein Geschenk von MEINEM Bruder.", "That is a gift from my brother."],
            ["zu", "to (places/people)", "Ich gehe zu DEM Arzt (zum Arzt).", "I am going to the doctor."],
          ],
        },
      },
      {
        title: "2. Common Contractions with Prepositions",
        description: "In spoken and written German, prepositions blend with the Dative article:",
        items: [
          {
            term: "bei + dem = BEIM",
            meaning: "Ich bin beim Arzt. (I am at the doctor's.)",
            example: "Beim Essen sprechen wir nicht.",
          },
          {
            term: "zu + dem = ZUM",
            meaning: "Ich gehe zum Bahnhof. (I am going to the train station.)",
            example: "Zum Frühstück esse ich Brot.",
          },
          {
            term: "zu + der = ZUR",
            meaning: "Ich gehe zur Post / Schule. (I am going to the post office / school.)",
            example: "Zur Arbeit fahre ich mit dem Rad.",
          },
          {
            term: "von + dem = VOM",
            meaning: "Er kommt gerade vom Flughafen. (He's just coming from the airport.)",
            example: "Vom Bahnhof sind es fünf Minuten.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Discussing how to commute to work in Munich:",
      lines: [
        {
          speaker: "Mark",
          german: "Wie fährst du morgens zur Arbeit?",
          english: "How do you travel to work (zur Arbeit) in the morning?",
        },
        {
          speaker: "Lisa",
          german: "Ich fahre meistens mit der U-Bahn oder mit dem Fahrrad.",
          english: "I usually travel by subway (mit der) or by bicycle (mit dem).",
        },
        {
          speaker: "Mark",
          german: "Und wie lange brauchst du von deiner Wohnung zum Büro?",
          english: "And how long do you need from your apartment (von deiner) to the office (zum Büro)?",
        },
        {
          speaker: "Lisa",
          german: "Etwa zwanzig Minuten.",
          english: "About twenty minutes.",
        },
      ],
    },
    funFact: {
      title: "'Mit dem Bus' - German Transit Etiquette",
      content:
        "Whenever talking about taking transit in German, you always use 'mit dem' (with the): *mit dem Bus, mit dem Zug, mit dem Auto, mit dem Flugzeug*. Only 'die Bahn' (train/subway) is feminine, so you say *mit der Bahn*!",
    },
    practice: [
      {
        question: "How do you say: 'I am traveling by train' (der Zug)?",
        options: ["Ich fahre mit den Zug.", "Ich fahre mit dem Zug.", "Ich fahre mit das Zug."],
        answer: "Ich fahre mit dem Zug.",
        explanation: "'mit' always takes the Dative case; masculine 'der Zug' becomes 'dem Zug'.",
      },
    ],
  },

  "a1-ch7-l31": {
    overview:
      "Answering 'Where?' (Wo?) and 'When?' (Wann?) requires location and time prepositions. In this lesson, you will master the foundational static prepositions (in, an, auf) and time markers (um, am, im).",
    canDo:
      "Can tell where things are located using static Dative prepositions (in, an, auf) and indicate times and dates using um, am, and im.",
    teacherNote:
      "Remember the time formula: **UM** for clock times (um 8 Uhr), **AM** for days and parts of the day (am Montag, am Morgen), and **IM** for months and seasons (im Juli, im Sommer).",
    sections: [
      {
        title: "1. The Time Prepositions Formula: UM - AM - IM",
        description: "Never guess time prepositions again with this 3-step hierarchy:",
        table: {
          headers: ["Preposition", "Used for...", "Examples", "English"],
          rows: [
            ["UM", "Precise clock times", "um 8 Uhr / um halb drei", "at 8 o'clock / at 2:30"],
            ["AM (an + dem)", "Days of the week, dates & day parts", "am Montag / am Wochenende / am Abend", "on Monday / on the weekend / in the evening"],
            ["IM (in + dem)", "Months, seasons & years with 'Jahr'", "im Januar / im Sommer / im Jahr 2026", "in January / in summer / in the year 2026"],
          ],
        },
      },
      {
        title: "2. Static Location (Wo? + Dativ)",
        description: "When answering 'Where?' (no movement, stationary), use Dativ:",
        items: [
          {
            term: "in + dem = IM (inside a space/city)",
            meaning: "Ich bin im Supermarkt / im Park / in der Stadt.",
            example: "Er sitzt im Café.",
          },
          {
            term: "an + dem = AM (at the edge/wall/water)",
            meaning: "Wir stehen am Bahnhof / am Strand / an der Wand.",
            example: "Das Bild hängt an der Wand.",
          },
          {
            term: "auf + dem = AUF DEM (on a horizontal surface/square)",
            meaning: "Das Buch liegt auf dem Tisch / auf dem Marktplatz.",
            example: "Die Kinder spielen auf der Straße.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Scheduling an appointment at a doctor's clinic in Berlin:",
      lines: [
        {
          speaker: "Arzthelferin",
          german: "Praxis Dr. Schneider, guten Tag! Wann möchten Sie kommen?",
          english: "Dr. Schneider's clinic, good day! When would you like to come?",
        },
        {
          speaker: "Patient",
          german: "Guten Tag. Geht es am Freitag um zehn Uhr?",
          english: "Good day. Is Friday (am Freitag) at ten o'clock (um zehn Uhr) possible?",
        },
        {
          speaker: "Arzthelferin",
          german: "Ja, am Freitag um zehn Uhr haben wir einen freien Termin für Sie.",
          english: "Yes, on Friday at ten o'clock we have an open appointment for you.",
        },
      ],
    },
    funFact: {
      title: "'In der Nacht' - The One Exception!",
      content:
        "All parts of the day in German use 'am' (*am Morgen, am Vormittag, am Nachmittag, am Abend*) because they are all grammatically masculine (der Morgen, der Abend). The only exception is night, which is feminine (die Nacht), so Germans say: **in der Nacht**!",
    },
    practice: [
      {
        question: "Which preposition correctly fills the blank: 'Der Kurs beginnt _____ 19:00 Uhr.'?",
        options: ["am", "im", "um"],
        answer: "um",
        explanation: "Precise clock hours always use the preposition 'um' (um 19:00 Uhr).",
      },
    ],
  },

  "a1-ch7-l32": {
    overview:
      "Modal verbs (Modalverben) express ability, necessity, permission, intention, and desire. German has 6 modal verbs, and they create the famous 'Satzklammer' (sentence bracket), sending the main action verb all the way to the end of the sentence in the infinitive!",
    canDo:
      "Can conjugate and use the 6 German modal verbs (können, müssen, wollen, möchten, dürfen, sollen) with the second verb at the end.",
    teacherNote:
      "The 'Sentence Bracket' (Satzklammer) is a hallmark of German: Modal verb goes in Position 2, and the second verb is kicked all the way to the VERY END of the clause in its unconjugated infinitive form! Example: *Ich MUSS heute für die Prüfung LERNEN*.",
    sections: [
      {
        title: "1. The 6 German Modal Verbs & Their Meanings",
        description: "Notice that in singular (ich, du, er/sie/es), modals change their stem vowel, and 'ich' and 'er' share the exact same ending (no -t!):",
        table: {
          headers: ["Modal Verb", "Meaning", "ich form", "du form", "er/sie/es form", "wir / sie form"],
          rows: [
            ["können", "can / to be able to", "ich kann", "du kannst", "er kann", "wir können"],
            ["müssen", "must / to have to", "ich muss", "du musst", "er muss", "wir müssen"],
            ["wollen", "to want to (strong will)", "ich will", "du willst", "er will", "wir wollen"],
            ["möchten", "would like to (polite wish)", "ich möchte", "du möchtest", "er möchte", "wir möchten"],
            ["dürfen", "may / to be allowed to", "ich darf", "du darfst", "er darf", "wir dürfen"],
            ["sollen", "should / supposed to", "ich soll", "du sollst", "er soll", "wir sollen"],
          ],
        },
      },
      {
        title: "2. The Sentence Bracket (Die Satzklammer)",
        description: "The modal verb and the infinitive hug the rest of the sentence:",
        items: [
          {
            term: "Position 2: Conjugated Modal",
            meaning: "Ich KANN sehr gut Deutsch sprechen.",
            example: "kann (Pos 2) ... sprechen (End of sentence).",
          },
          {
            term: "Negation inside the bracket",
            meaning: "Hier DARF man nicht RAUCHEN.",
            example: "You are not allowed to smoke here.",
          },
          {
            term: "Questions with modals",
            meaning: "KÖNNEN Sie mir bitte HELFEN?",
            example: "Modal in Pos 1, infinitive at the very end.",
          },
        ],
      },
    ],
    dialogue: {
      context: "A café guest ordering politely in Frankfurt:",
      lines: [
        {
          speaker: "Kellner",
          german: "Guten Tag! Was darf ich Ihnen bringen?",
          english: "Good day! What may I bring you (dürfen)?",
        },
        {
          speaker: "Gast",
          german: "Ich möchte bitte einen Cappuccino und ein Stück Apfelkuchen haben.",
          english: "I would like to have (möchten... haben) a cappuccino and a piece of apple cake, please.",
        },
        {
          speaker: "Kellner",
          german: "Sehr gerne! Kommt sofort.",
          english: "Very gladly! Coming right up.",
        },
      ],
    },
    funFact: {
      title: "'Wollen' vs. 'Möchten' in German Etiquette",
      content:
        "In a German bakery or restaurant, saying 'Ich will einen Kaffee' sounds blunt and demanding (like 'I demand a coffee!'). German culture highly values politeness when ordering—always use: **'Ich möchte bitte einen Kaffee'** (I would like a coffee, please) or **'Ich hätte gern einen Kaffee'**!",
    },
    practice: [
      {
        question: "Where does the second verb go in a sentence with a modal verb?",
        options: ["Immediately after the modal verb in Position 3", "At the very end of the sentence in the infinitive", "At the start of the sentence"],
        answer: "At the very end of the sentence in the infinitive",
        explanation: "Modal verbs create the 'Satzklammer'—the infinitive is pushed to the very end of the sentence.",
      },
    ],
  },

  "a1-ch7-l33": {
    overview:
      "Whether giving instructions, telling a friend to hurry, or asking a stranger for help, you need the Imperative mood (der Imperativ). German creates three distinct forms depending on whether you are addressing 'du', 'ihr', or formal 'Sie'.",
    canDo:
      "Can formulate commands, polite requests, and instructions for 'du', 'ihr', and 'Sie' using the word 'bitte'.",
    teacherNote:
      "The easiest imperative is the formal 'Sie': simply swap the order and add 'bitte': *Kommen Sie bitte!*, *Warten Sie bitte!* It is polite, easy, and universally safe.",
    sections: [
      {
        title: "1. The 3 Imperative Forms",
        description: "Study how imperative forms are constructed:",
        table: {
          headers: ["Addressee", "How to form", "Infinitive: kommen", "Infinitive: lesen", "Example Request"],
          rows: [
            ["du (one friend)", "Drop 'du' and the '-st' ending", "Komm!", "Lies! (keeps e->ie)", "Komm bitte hierher! (Come here please!)"],
            ["ihr (group of friends)", "Drop 'ihr', keep regular '-t'", "Kommt!", "Lest!", "Kommt schnell! (Come quickly, guys!)"],
            ["Sie (formal - any number)", "Verb + Sie + bitte", "Kommen Sie bitte!", "Lesen Sie bitte!", "Kommen Sie bitte herein! (Please come in!)"],
          ],
        },
      },
    ],
    dialogue: {
      context: "At a doctor's office waiting room in Berlin:",
      lines: [
        {
          speaker: "Arzt",
          german: "Herr Meyer, kommen Sie bitte herein und nehmen Sie Platz!",
          english: "Mr. Meyer, please come in and take a seat!",
        },
        {
          speaker: "Patient",
          german: "Guten Tag, Herr Doktor. Vielen Dank.",
          english: "Good day, doctor. Thank you very much.",
        },
        {
          speaker: "Arzt",
          german: "Bitte beschreiben Sie: Wo haben Sie Schmerzen?",
          english: "Please describe: Where do you have pain?",
        },
      ],
    },
    funFact: {
      title: "The Magic Power of 'Bitte' in German Commands",
      content:
        "Without the word 'bitte', German imperatives can sound harsh or military-like to foreign ears (*Komm!*, *Warte!*). Adding 'bitte' (*Kommen Sie bitte*, *Warte mal bitte*) immediately transforms an order into a warm, polite, and respectful German request!",
    },
    practice: [
      {
        question: "How do you politely ask a stranger to wait?",
        options: ["Warte!", "Warten Sie bitte!", "Wartet Sie bitte!"],
        answer: "Warten Sie bitte!",
        explanation: "The polite formal imperative is formed by: Verb + Sie + bitte -> 'Warten Sie bitte!'.",
      },
    ],
  },
};
