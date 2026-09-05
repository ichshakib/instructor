import { LessonContent } from "../../types/course.types";

export const CHAPTER_8_LESSONS: Record<string, LessonContent> = {
  "a1-ch8-l34": {
    overview:
      "Telling time accurately in German is an essential daily skill. German has two systems: official 24-hour time (used on train boards, TV schedules, and official appointments) and conversational 12-hour time (used with friends and family).",
    canDo:
      "Can ask for and tell the time in both official 24-hour format and colloquial 12-hour format, avoiding the famous 'halb' trap.",
    teacherNote:
      "⚠️ DANGER ZONE: The word **'halb'**! In German, 'halb drei' does NOT mean 3:30. It means 'halfway to three'—which is **2:30**! Always remember: 'halb' looks forward to the next hour!",
    sections: [
      {
        title: "1. Official 24-Hour Time vs. Casual 12-Hour Time",
        description: "Compare how the two systems describe the exact same hour:",
        table: {
          headers: ["Time", "Official 24-Hour Format", "Casual 12-Hour Format", "Literal Meaning of Casual"],
          rows: [
            ["08:00", "acht Uhr", "acht Uhr", "eight o'clock"],
            ["08:15", "acht Uhr fünfzehn", "Viertel nach acht", "quarter past eight"],
            ["08:30", "acht Uhr dreißig", "HALB NEUN! (Watch out!)", "halfway to nine!"],
            ["08:45", "acht Uhr fünfundvierzig", "Viertel vor neun", "quarter to nine"],
            ["14:20", "vierzehn Uhr zwanzig", "zwanzig nach zwei", "twenty past two"],
            ["17:50", "siebzehn Uhr fünfzig", "zehn vor sechs", "ten to six"],
          ],
        },
      },
      {
        title: "2. How to Ask the Time",
        description: "Two equivalent ways to ask 'What time is it?' in German:",
        items: [
          {
            term: "Wie spät ist es?",
            meaning: "Literally: 'How late is it?' (Most common)",
            example: "Entschuldigung, wie spät ist es? -> Es ist halb vier.",
          },
          {
            term: "Wie viel Uhr ist es?",
            meaning: "Literally: 'How much clock is it?'",
            example: "Wie viel Uhr ist es bitte? -> Es ist genau zehn Uhr.",
          },
        ],
      },
    ],
    dialogue: {
      context: "At the central train station in Nuremberg waiting for the ICE to Munich:",
      lines: [
        {
          speaker: "Reisender",
          german: "Entschuldigung, wie viel Uhr ist es jetzt?",
          english: "Excuse me, what time is it right now?",
        },
        {
          speaker: "Bahnbeamter",
          german: "Es ist genau Viertel vor drei.",
          english: "It is exactly a quarter to three (2:45).",
        },
        {
          speaker: "Reisender",
          german: "Danke! Wann fährt der Zug nach München ab?",
          english: "Thank you! When does the train to Munich depart?",
        },
        {
          speaker: "Bahnbeamter",
          german: "Um vierzehn Uhr fünfzig von Gleis sieben.",
          english: "At 14:50 from platform seven.",
        },
      ],
    },
    funFact: {
      title: "German Pünktlichkeit (Punctuality)",
      content:
        "The German proverb states: *'Fünf Minuten vor der Zeit ist des Deutschen Pünktlichkeit'* (Five minutes before time is the German's punctuality). Arriving late to a professional or personal meeting without calling ahead is seen as deeply inconsiderate. Always aim to be 5 minutes early!",
    },
    practice: [
      {
        question: "If someone says 'Es ist halb sechs', what time is it?",
        options: ["6:30", "5:30", "4:30"],
        answer: "5:30",
        explanation: "'halb sechs' means halfway to six, which is 5:30!",
      },
    ],
  },

  "a1-ch8-l35": {
    overview:
      "Planning appointments, celebrating birthdays, and understanding store opening hours requires the days of the week, months of the year, seasons, and calendar dates.",
    canDo:
      "Can name all 7 days of the week, 12 months, 4 seasons, and express dates using ordinal numbers (am ersten Mai).",
    teacherNote:
      "All 7 days of the week and all 12 months in German are **DER** (masculine)! That means they all take the preposition **AM** for days (*am Montag*) and **IM** for months (*im Januar*).",
    sections: [
      {
        title: "1. The 7 Days of the Week (Die Wochentage)",
        description: "Monday through Sunday in German-speaking countries:",
        table: {
          headers: ["Day", "German Word", "Preposition with Days", "English"],
          rows: [
            ["Monday", "der Montag", "am Montag", "on Monday"],
            ["Tuesday", "der Dienstag", "am Dienstag", "on Tuesday"],
            ["Wednesday", "der Mittwoch", "am Mittwoch", "on Wednesday (literally: mid-week!)"],
            ["Thursday", "der Donnerstag", "am Donnerstag", "on Thursday"],
            ["Friday", "der Freitag", "am Freitag", "on Friday"],
            ["Saturday", "der Samstag / Sonnabend", "am Samstag", "on Saturday"],
            ["Sunday", "der Sonntag", "am Sonntag", "on Sunday"],
            ["Weekend", "das Wochenende", "am Wochenende", "on the weekend"],
          ],
        },
      },
      {
        title: "2. The 12 Months & 4 Seasons",
        description: "Months take 'im' (im Januar, im Juli):",
        table: {
          headers: ["Season", "German Season", "Months in German"],
          rows: [
            ["Spring", "der Frühling (im Frühling)", "März, April, Mai"],
            ["Summer", "der Sommer (im Sommer)", "Juni, Juli, August"],
            ["Autumn", "der Herbst (im Herbst)", "September, Oktober, November"],
            ["Winter", "der Winter (im Winter)", "Dezember, Januar, Februar"],
          ],
        },
      },
      {
        title: "3. Calendar Dates with Ordinal Numbers",
        description: "For dates, add '-ten' after 'am':",
        items: [
          {
            term: "am ersten (1st)",
            meaning: "am ersten Mai (on the first of May)",
            example: "Heute ist der erste Mai.",
          },
          {
            term: "am dritten (3rd)",
            meaning: "am dritten Oktober (German Unity Day)",
            example: "Mein Geburtstag ist am dritten Oktober.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Checking a friend's birthday and weekend plans in Basel:",
      lines: [
        {
          speaker: "Hannah",
          german: "Wann hast du Geburtstag, Lukas?",
          english: "When is your birthday, Lukas?",
        },
        {
          speaker: "Lukas",
          german: "Am zwanzigsten Juli, also im Sommer! Feiern wir am Samstag?",
          english: "On the twentieth of July (am zwanzigsten), so in the summer! Shall we celebrate on Saturday?",
        },
        {
          speaker: "Hannah",
          german: "Ja gerne! Am Wochenende habe ich Zeit.",
          english: "Yes gladly! On the weekend I have time.",
        },
      ],
    },
    funFact: {
      title: "Sonntagsruhe: Quiet Sundays by Law",
      content:
        "In Germany, Austria, and Switzerland, Sunday is protected by the constitution as a day of rest (*Sonntagsruhe*). Almost all supermarkets, clothing stores, and offices are completely closed. Vacuuming, mowing the lawn, or drilling holes in your apartment on Sunday can lead to a formal complaint from neighbors!",
    },
    practice: [
      {
        question: "Which preposition is used with days of the week (e.g. Monday)?",
        options: ["im", "am", "um"],
        answer: "am",
        explanation: "Days of the week always take 'am' (am Montag, am Dienstag).",
      },
    ],
  },

  "a1-ch8-l36": {
    overview:
      "Separable prefix verbs (trennbare Verben) are one of German's most exciting characteristics. A tiny prefix snaps off the verb and flies all the way to the end of the sentence!",
    canDo:
      "Can recognize separable prefixes (auf-, an-, ein-, aus-, mit-, fern-) and split the verb cleanly in main clauses.",
    teacherNote:
      "Think of separable verbs as a pair of magnets: the main verb stem conjugates normally in Position 2, while the prefix snaps off and lands at the very end of the sentence! Example: *Ich STEHE um sieben Uhr AUF*.",
    sections: [
      {
        title: "1. High-Frequency Separable Verbs for Daily Routine",
        description: "Notice how the prefix separates in the present tense:",
        table: {
          headers: ["Infinitive", "Meaning", "Prefix", "Example Sentence with Split!"],
          rows: [
            ["aufstehen", "to get up / wake up", "auf-", "Ich STEHE um 7:00 Uhr AUF."],
            ["einkaufen", "to go grocery shopping", "ein-", "Wir KAUFEN am Samstag im Supermarkt EIN."],
            ["anrufen", "to call on phone", "an-", "Er RUFT seine Mutter AN."],
            ["fernsehen", "to watch TV", "fern-", "Sie SIEHT am Abend FERN."],
            ["mitkommen", "to come along", "mit-", "KOMMST du heute Abend MIT?"],
            ["vorbereiten", "to prepare", "vor-", "Ich BEREITE das Abendessen VOR."],
            ["einschlafen", "to fall asleep", "ein-", "Das Kind SCHLÄFT um 20:00 Uhr EIN."],
          ],
        },
      },
    ],
    dialogue: {
      context: "Describing a typical workday to a classmate in Berlin:",
      lines: [
        {
          speaker: "Simon",
          german: "Wie sieht dein normaler Tag aus?",
          english: "What does your normal day look like?",
        },
        {
          speaker: "Marie",
          german: "Ich stehe um halb sieben auf, trinke Kaffee und fahre zur Arbeit.",
          english: "I get up at 6:30 (stehe... auf), drink coffee, and travel to work.",
        },
        {
          speaker: "Simon",
          german: "Und was machst du am Abend?",
          english: "And what do you do in the evening?",
        },
        {
          speaker: "Marie",
          german: "Ich kaufe schnell ein, koche etwas und sehe ein bisschen fern.",
          english: "I shop quickly (kaufe... ein), cook something, and watch a bit of TV (sehe... fern).",
        },
      ],
    },
    funFact: {
      title: "Listen for the Stress!",
      content:
        "How can you tell if a German prefix is separable? Listen to where the voice emphasizes the word! In separable verbs, the prefix is ALWAYS stressed heavily: **AUF**stehen, **EIN**kaufen, **AN**rufen. If the prefix is stressed, it separates!",
    },
    practice: [
      {
        question: "How do you say: 'I am calling my friend' (anrufen)?",
        options: ["Ich anrufe meinen Freund.", "Ich rufe meinen Freund an.", "Ich rufe an meinen Freund."],
        answer: "Ich rufe meinen Freund an.",
        explanation: "In main clauses, the prefix 'an-' must move to the very end: 'Ich rufe meinen Freund an'.",
      },
    ],
  },

  "a1-ch8-l37": {
    overview:
      "Family and relationships are frequent conversation topics in A1 exams and social introductions. In this lesson, you will learn the names of family members, how to state age, and how to describe character and appearance.",
    canDo:
      "Can talk about family relationships, describe physical appearance (hair, height) and traits, and ask about others' families.",
    teacherNote:
      "Notice the German collective words: 'die Eltern' (the parents) and 'die Geschwister' (the siblings). English doesn't use the word 'siblings' nearly as casually as German uses 'Geschwister'!",
    sections: [
      {
        title: "1. The Family Tree (Der Stammbaum)",
        description: "Master the members of the family:",
        table: {
          headers: ["Family Member", "German (with article)", "Plural Form", "English Meaning"],
          rows: [
            ["Parents", "die Eltern", "— (plural only)", "parents"],
            ["Father / Mother", "der Vater / die Mutter", "die Väter / die Mütter", "father / mother"],
            ["Siblings", "die Geschwister", "— (plural only)", "siblings (brothers & sisters)"],
            ["Brother / Sister", "der Bruder / die Schwester", "die Brüder / die Schwestern", "brother / sister"],
            ["Son / Daughter", "der Sohn / die Tochter", "die Söhne / die Töchter", "son / daughter"],
            ["Grandparents", "die Großeltern", "— (plural only)", "grandparents"],
            ["Grandfather / Grandmother", "der Großvater (Opa) / die Großmutter (Oma)", "die Großväter / Großmütter", "grandpa / grandma"],
            ["Husband / Wife", "der Ehemann / die Ehefrau", "die Ehemänner / Ehefrauen", "husband / wife"],
          ],
        },
      },
      {
        title: "2. Describing Appearance & Age",
        description: "Formulas for describing people:",
        items: [
          {
            term: "Stating Age (with 'sein')",
            meaning: "Mein Bruder ist 25 Jahre alt. (My brother is 25 years old.)",
            example: "Wie alt ist dein Kind? -> Er ist drei Jahre alt.",
          },
          {
            term: "Hair & Eyes (with 'haben')",
            meaning: "Er hat blaue Augen und kurze, blonde Haare.",
            example: "Sie hat lange braune Haare.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Two friends sharing family updates over coffee in Vienna:",
      lines: [
        {
          speaker: "Paul",
          german: "Hast du Geschwister, Claudia?",
          english: "Do you have siblings, Claudia?",
        },
        {
          speaker: "Claudia",
          german: "Ja, ich habe einen älteren Bruder und eine jüngere Schwester.",
          english: "Yes, I have an older brother and a younger sister.",
        },
        {
          speaker: "Paul",
          german: "Und wie alt sind deine Geschwister?",
          english: "And how old are your siblings?",
        },
        {
          speaker: "Claudia",
          german: "Mein Bruder ist achtundzwanzig und meine Schwester ist einundzwanzig.",
          english: "My brother is twenty-eight and my sister is twenty-one.",
        },
      ],
    },
    funFact: {
      title: "'Oma' & 'Opa' Are Universally Cherished",
      content:
        "While 'Großvater' and 'Großmutter' are the official dictionary words, almost nobody in Germany addresses their grandparents that formally. Nearly everyone affectionately says 'Oma' and 'Opa', even in formal books and television!",
    },
    practice: [
      {
        question: "What does 'Ich habe keine Geschwister' mean?",
        options: ["I have no children.", "I have no siblings (I am an only child).", "I have no parents."],
        answer: "I have no siblings (I am an only child).",
        explanation: "'Geschwister' refers to brothers and sisters (siblings).",
      },
    ],
  },

  "a1-ch8-l38": {
    overview:
      "Whether hunting for a flat in Berlin, describing your home, or shopping for furniture, housing vocabulary is critical. German housing ads use specific abbreviations that you will decipher in this lesson.",
    canDo:
      "Can name rooms in a house, identify key pieces of furniture with their genders, and describe your living situation.",
    teacherNote:
      "Notice that most rooms in German are NEUTER (das Zimmer): *das Wohnzimmer* (living room), *das Schlafzimmer* (bedroom), *das Badezimmer* (bathroom). The two main exceptions are *die Küche* (kitchen - feminine) and *der Flur* (hallway - masculine)!",
    sections: [
      {
        title: "1. The Rooms in a Home (Die Räume)",
        description: "Learn the parts of a German flat (die Wohnung):",
        table: {
          headers: ["Room", "German Word", "Gender", "English Meaning"],
          rows: [
            ["Living Room", "das Wohnzimmer", "Neuter (das)", "living room"],
            ["Bedroom", "das Schlafzimmer", "Neuter (das)", "bedroom"],
            ["Kitchen", "die Küche", "Feminine (die)", "kitchen"],
            ["Bathroom", "das Badezimmer / das Bad", "Neuter (das)", "bathroom"],
            ["Hallway", "der Flur", "Masculine (der)", "hallway / corridor"],
            ["Balcony", "der Balkon", "Masculine (der)", "balcony"],
            ["Garden", "der Garten", "Masculine (der)", "garden"],
          ],
        },
      },
      {
        title: "2. Essential Furniture (Die Möbel)",
        description: "Master furniture items and their colors:",
        items: [
          {
            term: "der Tisch / der Stuhl / der Schrank / das Bett",
            meaning: "table (m) / chair (m) / wardrobe (m) / bed (n)",
            example: "Der Schrank steht im Schlafzimmer.",
          },
          {
            term: "das Sofa / der Schreibtisch / die Lampe",
            meaning: "sofa (n) / desk (m) / lamp (f)",
            example: "Auf dem Tisch steht eine schöne Lampe.",
          },
        ],
      },
    ],
    dialogue: {
      context: "A tenant showing their new apartment in Munich to a visiting friend:",
      lines: [
        {
          speaker: "Besucher",
          german: "Gratuliere zur neuen Wohnung! Wie viele Zimmer hat sie?",
          english: "Congratulations on the new apartment! How many rooms does it have?",
        },
        {
          speaker: "Mieter",
          german: "Sie hat drei Zimmer: ein Wohnzimmer, ein Schlafzimmer und ein Arbeitszimmer.",
          english: "It has three rooms: a living room, a bedroom, and a study.",
        },
        {
          speaker: "Besucher",
          german: "Und gibt es auch einen Balkon?",
          english: "And is there also a balcony?",
        },
        {
          speaker: "Mieter",
          german: "Ja, vom Wohnzimmer aus kommt man direkt auf den Balkon.",
          english: "Yes, from the living room you go directly out onto the balcony.",
        },
      ],
    },
    funFact: {
      title: "Warmmiete vs. Kaltmiete in German Housing",
      content:
        "When renting an apartment in Germany, you will always encounter two prices: **Kaltmiete** (cold rent = basic rent for the space only) and **Warmmiete** (warm rent = includes heating, water, and building maintenance). Always check the Warmmiete before signing a contract!",
    },
    practice: [
      {
        question: "What is the gender of 'Küche' (kitchen)?",
        options: ["der", "die", "das"],
        answer: "die",
        explanation: "'Küche' is feminine: die Küche.",
      },
    ],
  },
};
