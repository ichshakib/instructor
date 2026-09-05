import { LessonContent } from "../../types/course.types";

export const CHAPTER_2_LESSONS: Record<string, LessonContent> = {
  "a1-ch2-l6": {
    overview:
      "German regular verbs follow a beautifully predictable pattern. Every regular verb in German consists of a root (stem) and an ending (-en). Once you master the 4 core personal endings, you can instantly conjugate over 80% of all German verbs.",
    canDo:
      "Can strip a verb to its stem and attach correct present-tense personal endings (-e, -st, -t, -en, -t, -en) for any regular verb.",
    teacherNote:
      "Here is the secret mnemonic acronym: E - ST - T - EN - T - EN. Think of it like a rhythmic chant: ich -e, du -st, er -t, wir -en, ihr -t, sie -en. Notice that 'wir' and 'sie/Sie' always look identical to the dictionary infinitive!",
    sections: [
      {
        title: "1. The Anatomy of a German Verb",
        description:
          "Take the verb 'lernen' (to learn). Strip off the infinitive ending '-en' to find the stem: lern-. Now add the personal endings:",
        table: {
          headers: ["Subject Pronoun", "Personal Ending", "Conjugated Form (lernen)", "Meaning"],
          rows: [
            ["ich", "-e", "ich lerne", "I learn / I am learning"],
            ["du", "-st", "du lernst", "you learn (informal)"],
            ["er / sie / es", "-t", "er / sie / es lernt", "he / she / it learns"],
            ["wir", "-en", "wir lernen", "we learn"],
            ["ihr", "-t", "ihr lernt", "you all learn"],
            ["sie / Sie", "-en", "sie / Sie lernen", "they learn / You learn (formal)"],
          ],
        },
      },
      {
        title: "2. The Most Useful Regular Verbs in A1",
        description: "These work exactly like 'lernen':",
        items: [
          {
            term: "machen (to make / do)",
            meaning: "ich mache, du machst, er macht, wir machen, ihr macht, sie machen",
            example: "Was machst du heute? (What are you doing today?)",
          },
          {
            term: "wohnen (to reside / live)",
            meaning: "ich wohne, du wohnst, er wohnt, wir wohnen, ihr wohnt, sie wohnen",
            example: "Ich wohne in Köln. (I live in Cologne.)",
          },
          {
            term: "arbeiten (to work)",
            meaning: "Stem ends in -t! Insert extra '-e-' for pronunciation: du arbeitest, er arbeitet",
            example: "Er arbeitet bei Siemens. (He works at Siemens.)",
          },
          {
            term: "trinken (to drink)",
            meaning: "ich trinke, du trinkst, er trinkt, wir trinken",
            example: "Wir trinken Mineralwasser. (We drink mineral water.)",
          },
        ],
      },
    ],
    dialogue: {
      context: "Two new acquaintances chatting at a language café in Munich:",
      lines: [
        {
          speaker: "Lukas",
          german: "Hallo! Was machst du beruflich?",
          english: "Hello! What do you do for a living?",
        },
        {
          speaker: "Sarah",
          german: "Ich arbeite als Designerin und lerne jetzt Deutsch.",
          english: "I work as a designer and am now learning German.",
        },
        {
          speaker: "Lukas",
          german: "Toll! Ich wohne hier in München und studiere Informatik.",
          english: "Great! I live here in Munich and study computer science.",
        },
      ],
    },
    funFact: {
      title: "No Continuous Tense in German!",
      content:
        "English speakers often struggle trying to translate 'I am learning' vs 'I learn'. Good news: German does NOT have continuous '-ing' forms! 'Ich lerne' covers both 'I learn' and 'I am learning'. To say you are doing it right now, simply add the word 'gerade' (*Ich lerne gerade Deutsch*).",
    },
    practice: [
      {
        question: "How do you conjugate 'wohnen' for 'du'?",
        options: ["du wohnt", "du wohnst", "du wohne"],
        answer: "du wohnst",
        explanation: "The personal ending for 'du' is always '-st', making it 'wohnst'.",
      },
      {
        question: "Why does 'du arbeitest' have an extra 'e'?",
        options: ["It is an irregular verb", "Because stems ending in -d or -t need an 'e' to be pronounceable", "It is an older dialect"],
        answer: "Because stems ending in -d or -t need an 'e' to be pronounceable",
        explanation: "Trying to say 'arbeitst' with three consonants in a row is too difficult, so German phonetically inserts an 'e': arbeitest.",
      },
    ],
  },

  "a1-ch2-l7": {
    overview:
      "While most German verbs are regular, a small group of extremely frequent everyday verbs experience a vowel change in the 2nd and 3rd person singular (du and er/sie/es). Once you spot this pattern, irregular verbs become intuitive.",
    canDo:
      "Can recognize stem-changing patterns (e -> i/ie and a -> ä) in high-frequency verbs like sprechen, sehen, lesen, essen, and fahren.",
    teacherNote:
      "Crucial rule: Stem vowel changes ONLY occur in 'du' and 'er/sie/es'! The forms for 'ich', 'wir', 'ihr', and 'sie/Sie' stay completely regular with the original vowel.",
    sections: [
      {
        title: "1. The Two Main Vowel Shift Patterns",
        description: "Focus on these two shifts in 2nd/3rd person singular:",
        table: {
          headers: ["Pattern", "Infinitive", "ich form", "du form (shifted!)", "er/sie/es (shifted!)"],
          rows: [
            ["e -> i", "sprechen (to speak)", "ich spreche", "du sprichst", "er spricht"],
            ["e -> i", "essen (to eat)", "ich esse", "du isst", "sie isst"],
            ["e -> i", "helfen (to help)", "ich helfe", "du hilfst", "er hilft"],
            ["e -> ie", "sehen (to see)", "ich sehe", "du siehst", "er sieht"],
            ["e -> ie", "lesen (to read)", "ich lese", "du liest", "er liest"],
            ["a -> ä", "fahren (to drive/travel)", "ich fahre", "du fährst", "er fährt"],
            ["a -> ä", "schlafen (to sleep)", "ich schlafe", "du schläfst", "er schläft"],
          ],
        },
      },
      {
        title: "2. Plural Forms Stay Regular!",
        description: "Notice how the plural forms never take the vowel change:",
        items: [
          {
            term: "wir sprechen",
            meaning: "we speak (regular 'e')",
            example: "Wir sprechen Deutsch und Englisch.",
          },
          {
            term: "ihr sprecht",
            meaning: "you all speak (regular 'e', ending -t)",
            example: "Sprecht ihr Deutsch?",
          },
          {
            term: "sie / Sie sprechen",
            meaning: "they / You speak (regular 'e', ending -en)",
            example: "Sprechen Sie Deutsch?",
          },
        ],
      },
    ],
    dialogue: {
      context: "At a breakfast table in a hotel in Salzburg:",
      lines: [
        {
          speaker: "Klaus",
          german: "Guten Morgen! Was isst du zum Frühstück?",
          english: "Good morning! What are you eating for breakfast?",
        },
        {
          speaker: "Mia",
          german: "Ich esse ein Brötchen mit Käse. Liest du die Zeitung?",
          english: "I am eating a bread roll with cheese. Are you reading the newspaper?",
        },
        {
          speaker: "Klaus",
          german: "Ja, ich lese die Nachrichten aus Österreich.",
          english: "Yes, I am reading the news from Austria.",
        },
      ],
    },
    funFact: {
      title: "Stem Changes Are Universal Germanic Heritage",
      content:
        "Did you know that English has the same stem changes from our shared Germanic ancestry? Think of English 'speak' -> 'spoke', 'see' -> 'saw', or 'eat' -> 'ate'. German kept vowel changes active in the present tense, making it vibrant and expressive!",
    },
    practice: [
      {
        question: "Fill in the blank: 'Er _____ sehr gut Deutsch.' (sprechen)",
        options: ["sprecht", "spricht", "spreche"],
        answer: "spricht",
        explanation: "'sprechen' has an e -> i vowel change for er/sie/es, resulting in 'er spricht'.",
      },
      {
        question: "Which form is correct for 'du' with the verb 'fahren'?",
        options: ["du fahrst", "du fährst", "du fährt"],
        answer: "du fährst",
        explanation: "'fahren' undergoes an a -> ä vowel change and takes the '-st' ending: 'du fährst'.",
      },
    ],
  },

  "a1-ch2-l8": {
    overview:
      "If you learn only one rule about German syntax, make it this one: **The conjugated verb is always in Position 2 in main clauses**. Mastering this rule unlocks the entire architecture of German sentences.",
    canDo:
      "Can construct sentences with the verb securely in Position 2, whether beginning with the subject or an element of time/location (inversion).",
    teacherNote:
      "Position 2 does NOT mean the second *word*; it means the second *grammatical unit*! For example, 'Heute Nachmittag' (this afternoon) is two words, but it counts as Position 1. The verb immediately takes Position 2.",
    sections: [
      {
        title: "1. The Golden Rule: Verb in Position 2",
        description: "Study how the verb stays anchored while other pieces swap around it:",
        table: {
          headers: ["Position 1 (Subject or Time)", "Position 2 (Conjugated Verb!)", "Position 3", "Rest of Sentence"],
          rows: [
            ["Ich", "lerne", "heute", "Deutsch in Berlin."],
            ["Heute", "lerne", "ich", "Deutsch in Berlin. (Inversion!)"],
            ["In Berlin", "lerne", "ich", "heute Deutsch."],
            ["Wir", "trinken", "jetzt", "einen Kaffee."],
            ["Jetzt", "trinken", "wir", "einen Kaffee."],
          ],
        },
      },
      {
        title: "2. Subject-Verb Inversion",
        description:
          "In English, starting with time sounds like: 'Today I learn German.' In German, the moment you put something other than the subject first, the subject jumps to Position 3 behind the verb:",
        items: [
          {
            term: "Normal Word Order",
            meaning: "Subject (Pos 1) + Verb (Pos 2)",
            example: "Ich komme morgen. (I am coming tomorrow.)",
          },
          {
            term: "Inverted Word Order",
            meaning: "Time / Place (Pos 1) + Verb (Pos 2) + Subject (Pos 3)",
            example: "Morgen komme ich. (Tomorrow I am coming.)",
          },
        ],
      },
    ],
    dialogue: {
      context: "Two colleagues planning their work schedule in Stuttgart:",
      lines: [
        {
          speaker: "Leon",
          german: "Wann arbeitest du morgen?",
          english: "When are you working tomorrow?",
        },
        {
          speaker: "Jan",
          german: "Morgen arbeite ich von acht bis fünf Uhr.",
          english: "Tomorrow I work from eight to five o'clock.",
        },
        {
          speaker: "Leon",
          german: "Perfekt, dann trinken wir um sechs Uhr einen Kaffee zusammen!",
          english: "Perfect, then we'll drink a coffee together at six o'clock!",
        },
      ],
    },
    funFact: {
      title: "German's Lego-like Sentence Architecture",
      content:
        "Because German fixes the verb in Position 2, speakers have immense freedom to highlight what's important! If the day is important, start with 'Morgen' (Tomorrow). If the city is key, start with 'In Berlin'. The verb acts as the steady pillar holding the sentence together.",
    },
    practice: [
      {
        question: "Which of the following sentences has the correct German word order?",
        options: ["Heute ich spiele Fußball.", "Heute spiele ich Fußball.", "Spiele heute ich Fußball."],
        answer: "Heute spiele ich Fußball.",
        explanation: "When 'Heute' occupies Position 1, the verb 'spiele' must immediately take Position 2, followed by the subject 'ich' in Position 3.",
      },
    ],
  },

  "a1-ch2-l9": {
    overview:
      "In daily German life, you need to ask straightforward yes/no questions and answer them clearly. German handles this with verb-first syntax, and introduces a linguistic superpower word: 'Doch'.",
    canDo:
      "Can form yes/no questions by placing the verb in Position 1, and reply using Ja, Nein, and Doch.",
    teacherNote:
      "Pay special attention to 'Doch'! It contradicts a negative question. If someone asks: 'Kommst du nicht?' (Aren't you coming?), answering 'Ja' causes confusion. Answering 'Doch!' means 'Yes, I AM coming!'",
    sections: [
      {
        title: "1. Forming Ja/Nein Questions (Verb in Position 1)",
        description: "Simply move the conjugated verb to the very front of the sentence:",
        table: {
          headers: ["Statement (Verb in Pos 2)", "Ja/Nein Question (Verb in Pos 1)", "English Question"],
          rows: [
            ["Du kommst aus Deutschland.", "Kommst du aus Deutschland?", "Do you come from Germany?"],
            ["Sie trinken Kaffee.", "Trinken Sie Kaffee?", "Do you drink coffee?"],
            ["Er wohnt in Wien.", "Wohnt er in Wien?", "Does he live in Vienna?"],
            ["Ihr habt Zeit.", "Habt ihr Zeit?", "Do you all have time?"],
          ],
        },
      },
      {
        title: "2. The Three Answers: Ja, Nein, and DOCH!",
        description: "German has three distinct ways to respond:",
        items: [
          {
            term: "Ja (Yes)",
            meaning: "Agrees with a positive question",
            example: "Lernst du Deutsch? -> Ja, ich lerne Deutsch.",
          },
          {
            term: "Nein (No)",
            meaning: "Negates or denies any question",
            example: "Kommst du aus Spanien? -> Nein, aus Italien.",
          },
          {
            term: "Doch! (On the contrary! Yes, I do!)",
            meaning: "Contradicts a question containing 'nicht' or 'kein'",
            example: "Hast du keinen Hunger? -> Doch! (Yes, I *do* have hunger!)",
          },
        ],
      },
    ],
    dialogue: {
      context: "At an office lunch break discussing lunch plans:",
      lines: [
        {
          speaker: "Markus",
          german: "Kommst du nicht mit zum Restaurant?",
          english: "Aren't you coming along to the restaurant?",
        },
        {
          speaker: "Julia",
          german: "Doch! Ich hole nur schnell meine Jacke.",
          english: "Yes, I am! I'm just quickly grabbing my jacket.",
        },
        {
          speaker: "Markus",
          german: "Super, hast du schon einen Tisch reserviert?",
          english: "Super, have you already reserved a table?",
        },
        {
          speaker: "Julia",
          german: "Ja, für vier Personen.",
          english: "Yes, for four people.",
        },
      ],
    },
    funFact: {
      title: "The Superpower Word 'Doch'",
      content:
        "Linguists often call 'doch' one of the most untranslatable words in the world! While English needs an awkward multi-word phrase ('Yes, I actually do!' or 'On the contrary!'), German expresses pure confident contradiction in a single crisp syllable: Doch!",
    },
    practice: [
      {
        question: "Someone asks you: 'Trinkst du keinen Kaffee?' (Don't you drink coffee?), but you DO drink coffee. What do you reply?",
        options: ["Ja!", "Nein!", "Doch!"],
        answer: "Doch!",
        explanation: "'Doch' is specifically used to contradict a negative question and affirm the action.",
      },
      {
        question: "How do you turn 'Sie arbeiten hier' into a question?",
        options: ["Hier arbeiten Sie?", "Arbeiten Sie hier?", "Sie arbeiten hier?"],
        answer: "Arbeiten Sie hier?",
        explanation: "Yes/No questions place the conjugated verb in Position 1: 'Arbeiten Sie hier?'.",
      },
    ],
  },

  "a1-ch2-l10": {
    overview:
      "When you need specific information—names, locations, times, or reasons—you use German question words, known as 'W-Fragen' because almost all of them start with the letter W.",
    canDo:
      "Can recognize and ask questions using all 8 core question words: Wer, Was, Wo, Woher, Wohin, Wie, Wann, and Warum.",
    teacherNote:
      "In W-questions, the question word is in Position 1, and the conjugated verb is immediately in Position 2! (e.g. Wo [1] wohnst [2] du?).",
    sections: [
      {
        title: "1. The 8 Core German Question Words",
        description: "Master this table of essential interrogative pronouns:",
        table: {
          headers: ["German Word", "English Meaning", "Example Question", "Translation"],
          rows: [
            ["Wer?", "Who?", "Wer ist das?", "Who is that?"],
            ["Was?", "What?", "Was machst du?", "What are you doing?"],
            ["Wo?", "Where? (location)", "Wo wohnst du?", "Where do you live?"],
            ["Woher?", "Where from? (origin)", "Woher kommst du?", "Where do you come from?"],
            ["Wohin?", "Where to? (direction)", "Wohin fährst du?", "Where are you traveling to?"],
            ["Wie?", "How? / What? (name)", "Wie heißen Sie?", "What is your name? (How are you called?)"],
            ["Wann?", "When?", "Wann beginnt der Kurs?", "When does the course begin?"],
            ["Warum?", "Why?", "Warum lernst du Deutsch?", "Why are you learning German?"],
          ],
        },
      },
      {
        title: "2. The Location Trio: Wo, Woher, and Wohin",
        description: "Keep these clear in your mind:",
        items: [
          {
            term: "Wo (Static Location)",
            meaning: "Asking where something is right now (no movement)",
            example: "Wo ist der Bahnhof? (Where is the train station?)",
          },
          {
            term: "Woher (Source / Origin)",
            meaning: "Asking where someone or something comes from",
            example: "Woher kommst du? -> Aus Deutschland.",
          },
          {
            term: "Wohin (Destination / Movement)",
            meaning: "Asking where someone is going to",
            example: "Wohin gehst du? -> Nach Hause.",
          },
        ],
      },
    ],
    dialogue: {
      context: "A newcomer asking questions at the citizen registration office in Berlin:",
      lines: [
        {
          speaker: "Beamter",
          german: "Guten Tag. Wie ist Ihr Name und woher kommen Sie?",
          english: "Good day. What is your name and where do you come from?",
        },
        {
          speaker: "Bürger",
          german: "Mein Name ist Alex Chen und ich komme aus Kanada.",
          english: "My name is Alex Chen and I come from Canada.",
        },
        {
          speaker: "Beamter",
          german: "Wo wohnen Sie jetzt in Berlin?",
          english: "Where do you live now in Berlin?",
        },
        {
          speaker: "Bürger",
          german: "Ich wohne in der Kantstraße 12.",
          english: "I live at Kantstraße 12.",
        },
      ],
    },
    funFact: {
      title: "'Wie' Means 'How', But Asks for Names!",
      content:
        "English speakers often expect 'What is your name?' to start with 'Was'. In German, we ask: 'Wie heißen Sie?' (literally: *How are you called?*) and 'Wie ist Ihre Adresse?' (literally: *How is your address?*). Whenever asking about personal data, 'Wie' is your best friend!",
    },
    practice: [
      {
        question: "You want to ask where someone is traveling to. Which word do you choose?",
        options: ["Wo?", "Wohin?", "Woher?"],
        answer: "Wohin?",
        explanation: "'Wohin' specifically asks for destination or direction of travel ('Where to?').",
      },
      {
        question: "What does 'Wann beginnt der Film?' mean?",
        options: ["Where does the film start?", "When does the film begin?", "Why does the film start?"],
        answer: "When does the film begin?",
        explanation: "'Wann' translates to 'When'.",
      },
    ],
  },
};
