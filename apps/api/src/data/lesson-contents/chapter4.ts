import { LessonContent } from "../../types/course.types";

export const CHAPTER_4_LESSONS: Record<string, LessonContent> = {
  "a1-ch4-l16": {
    overview:
      "Every German noun has one of three grammatical genders: masculine (der), feminine (die), or neuter (das). While gender often feels arbitrary to English speakers, learning the article with the noun from day one turns this challenge into second nature.",
    canDo:
      "Can identify the three definite articles (der, die, das) and indefinite articles (ein, eine, ein), and apply common gender ending clues.",
    teacherNote:
      "Never memorize a German noun by itself! Always learn the article attached like a prefix: don't memorize 'Tisch' (table), memorize 'der Tisch'. Don't memorize 'Lampe', memorize 'die Lampe'. Blue for der, red for die, green for das!",
    sections: [
      {
        title: "1. The Three Genders & Articles in Nominative",
        description: "German has definite articles ('the') and indefinite articles ('a/an'):",
        table: {
          headers: ["Gender", "Definite Article ('the')", "Indefinite Article ('a/an')", "Negative Article ('no/none')", "Example"],
          rows: [
            ["Masculine (m)", "der", "ein", "kein", "der Tisch / ein Tisch (the/a table)"],
            ["Feminine (f)", "die", "eine", "keine", "die Lampe / eine Lampe (the/a lamp)"],
            ["Neuter (n)", "das", "ein", "kein", "das Buch / ein Buch (the/a book)"],
            ["Plural (pl)", "die", "— (no indefinite plural)", "keine", "die Bücher / keine Bücher (the/no books)"],
          ],
        },
      },
      {
        title: "2. Reliable Gender Clues (Suffix Rules)",
        description:
          "You don't have to guess blind! Look at the ending of the noun:",
        items: [
          {
            term: "Feminine (-ung, -heit, -keit, -schaft, -tion, -e)",
            meaning: "99% of nouns with these endings are DIE (feminine)",
            example: "die Wohnung (apartment), die Freiheit (freedom), die Nation, die Lampe.",
          },
          {
            term: "Masculine (-er, -ling, -or, -ist, days & months)",
            meaning: "Most masculine nouns refer to male agents or end in -er/-or",
            example: "der Lehrer (teacher), der Motor (engine), der Montag (Monday).",
          },
          {
            term: "Neuter (-chen, -lein, -ment, -um, infinitives as nouns)",
            meaning: "Diminutives and foreign roots are DAS (neuter)",
            example: "das Mädchen (girl), das Instrument, das Museum, das Essen (food/eating).",
          },
        ],
      },
    ],
    dialogue: {
      context: "Browsing furniture at an IKEA store in Cologne:",
      lines: [
        {
          speaker: "Tim",
          german: "Schau mal, ist das ein Tisch oder ein Schreibtisch?",
          english: "Look, is that a table or a desk?",
        },
        {
          speaker: "Laura",
          german: "Das ist ein Schreibtisch. Der Tisch hier drüben ist viel größer.",
          english: "That is a desk. The table over here is much bigger.",
        },
        {
          speaker: "Tim",
          german: "Und wie findest du die Lampe?",
          english: "And what do you think of the lamp?",
        },
        {
          speaker: "Laura",
          german: "Die Lampe ist super. Das ist eine schöne Farbe!",
          english: "The lamp is great. That is a beautiful color!",
        },
      ],
    },
    funFact: {
      title: "Why 'Das Mädchen' is Neuter!",
      content:
        "Beginners are often shocked that 'das Mädchen' (the girl) is grammatically neuter rather than feminine! The reason is purely grammatical: the suffix '-chen' is a diminutive meaning 'little' (originally 'little maid'). In German grammar, *all* words ending in '-chen' or '-lein' become automatically neuter (das Brötchen, das Hündchen, das Mädchen)!",
    },
    practice: [
      {
        question: "What is the indefinite article for a feminine noun like 'Zeitung' (newspaper)?",
        options: ["ein", "eine", "einer"],
        answer: "eine",
        explanation: "Feminine nouns take 'eine' (die Zeitung -> eine Zeitung).",
      },
    ],
  },

  "a1-ch4-l17": {
    overview:
      "Unlike English, where making plurals is almost always adding '-s' (book -> books), German has several plural patterns. In this lesson, we break down the 5 primary plural groups and explore the joy of German compound nouns.",
    canDo:
      "Can recognize the 5 main plural patterns, apply the universal plural article 'die', and deconstruct German compound words.",
    teacherNote:
      "Here is the best rule of all: In the Nominative case, ALL plurals take the exact same definite article: **DIE**! Whether masculine, feminine, or neuter in singular, in plural they all share 'die'.",
    sections: [
      {
        title: "1. The 5 German Plural Groups",
        description: "Most German nouns form their plural in one of these five ways:",
        table: {
          headers: ["Pattern", "Singular", "Plural (all take 'die'!)", "Meaning"],
          rows: [
            ["Group 1: -e (often with Umlaut)", "der Tag / der Stuhl", "die Tage / die Stühle", "days / chairs"],
            ["Group 2: -(e)n (most feminine nouns)", "die Frau / die Lampe", "die Frauen / die Lampen", "women / lamps"],
            ["Group 3: -er (often with Umlaut)", "das Kind / das Buch", "die Kinder / die Bücher", "children / books"],
            ["Group 4: No ending (sound changes or unchanged)", "der Apfel / der Lehrer", "die Äpfel / die Lehrer", "apples / teachers"],
            ["Group 5: -s (loanwords & abbreviations)", "das Auto / das Handy", "die Autos / die Handys", "cars / cell phones"],
          ],
        },
      },
      {
        title: "2. Compound Nouns (Komposita)",
        description:
          "German loves snapping nouns together like Lego bricks. The gender of the entire word is ALWAYS decided by the very last component:",
        items: [
          {
            term: "das Haus + die Tür = DIE Haustür",
            meaning: "house + door = front door (takes 'die' from die Tür)",
            example: "Die Haustür ist neu.",
          },
          {
            term: "kühl + der Schrank = DER Kühlschrank",
            meaning: "cool + cupboard = refrigerator (takes 'der' from der Schrank)",
            example: "Der Kühlschrank ist voll.",
          },
          {
            term: "die Hand + der Schuh = DER Handschuh",
            meaning: "hand + shoe = glove (takes 'der' from der Schuh)",
            example: "Ich brauche meine Handschuhe.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Ordering at a bakery in Nuremberg:",
      lines: [
        {
          speaker: "Kunde",
          german: "Guten Tag, ich möchte bitte drei Brötchen und zwei Äpfel.",
          english: "Good day, I would like three rolls and two apples, please.",
        },
        {
          speaker: "Verkäufer",
          german: "Gerne! Möchten Sie auch die Zeitungen hier?",
          english: "With pleasure! Would you also like the newspapers here?",
        },
        {
          speaker: "Kunde",
          german: "Nein danke, nur die Brötchen und die Äpfel.",
          english: "No thank you, just the rolls and the apples.",
        },
      ],
    },
    funFact: {
      title: "The Longest German Word",
      content:
        "German compound nouns can theoretically go on forever! One famous official legal term was: *Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz* (63 letters!), referring to the law on beef labeling duties. Notice how even with 63 letters, its gender is simply 'das Gesetz' (the law)!",
    },
    practice: [
      {
        question: "What is the gender of 'das Wörterbuch' (dictionary)?",
        options: ["Masculine (der)", "Feminine (die)", "Neuter (das)"],
        answer: "Neuter (das)",
        explanation: "Compound nouns always take the gender of the last word: 'das Buch' -> 'das Wörterbuch'.",
      },
    ],
  },

  "a1-ch4-l18": {
    overview:
      "The Nominative case (der Nominativ) is the starting point of German grammar. It identifies the grammatical subject—the person or thing that is performing the action or being described.",
    canDo:
      "Can identify the subject of any sentence by asking 'Wer oder was?' (Who or what?), and maintain correct subject-verb agreement.",
    teacherNote:
      "Whenever you use the verb 'sein' (to be) or 'werden' (to become), both sides of the sentence stay in the Nominative case! Example: *Der Mann ist ein Lehrer* (both are Nominative).",
    sections: [
      {
        title: "1. The Question for Nominativ: 'Wer oder was?'",
        description: "Ask 'Who or what is doing the action?' to reveal the subject:",
        table: {
          headers: ["Sentence", "Question to ask", "Identified Subject", "Case"],
          rows: [
            ["Der Hund schläft.", "Wer oder was schläft?", "Der Hund", "Nominativ Masculine"],
            ["Die Studentin lernt viel.", "Wer oder was lernt?", "Die Studentin", "Nominativ Feminine"],
            ["Das Kind spielt im Garten.", "Wer oder was spielt?", "Das Kind", "Nominativ Neuter"],
            ["Die Bücher sind interessant.", "Wer oder was ist interessant?", "Die Bücher", "Nominativ Plural"],
          ],
        },
      },
      {
        title: "2. Full Nominative Article Chart",
        description: "Review your baseline reference chart for the Nominative case:",
        table: {
          headers: ["Category", "Masculine", "Feminine", "Neuter", "Plural"],
          rows: [
            ["Definite ('the')", "der", "die", "das", "die"],
            ["Indefinite ('a/an')", "ein", "eine", "ein", "—"],
            ["Negative ('no/none')", "kein", "keine", "kein", "keine"],
            ["Possessive ('my')", "mein", "meine", "mein", "meine"],
          ],
        },
      },
    ],
    dialogue: {
      context: "A student introducing friends in a university cafeteria in Bonn:",
      lines: [
        {
          speaker: "Nico",
          german: "Das ist Jan. Der Junge dort ist sein Bruder.",
          english: "That is Jan. The boy over there is his brother.",
        },
        {
          speaker: "Sarah",
          german: "Und wer ist das Mädchen neben ihm?",
          english: "And who is the girl next to him?",
        },
        {
          speaker: "Nico",
          german: "Das ist Lisa. Sie ist eine Freundin von uns.",
          english: "That is Lisa. She is a friend of ours.",
        },
      ],
    },
    funFact: {
      title: "Why German Keeps the Nominativ Pure",
      content:
        "The word 'Nominativ' comes from Latin 'nomen' (name). It simply names the subject. In ancient Germanic tribes, the subject was viewed as the master of the action. Even today, the subject is the only element in the sentence that dictates how the verb must conjugate!",
    },
    practice: [
      {
        question: "In the sentence 'Morgen kommt der Arzt', who or what is the subject in Nominativ?",
        options: ["Morgen", "kommt", "der Arzt"],
        answer: "der Arzt",
        explanation: "Ask: 'Wer oder was kommt?' -> 'Der Arzt kommt'. Therefore, 'der Arzt' is the subject in Nominativ.",
      },
    ],
  },

  "a1-ch4-l19": {
    overview:
      "Describing things, people, and places makes your German rich and vivid. When adjectives follow the verb 'sein' (predicative adjectives), they are wonderfully easy: they take ZERO extra endings!",
    canDo:
      "Can describe people, places, and objects using common adjectives and their opposites after the verb 'sein'.",
    teacherNote:
      "Good news: When an adjective comes *after* 'sein' (e.g., Das Haus ist groß / Der Kaffee ist heiß), you don't add any endings! It stays in its basic dictionary form. You only add adjective endings when the adjective sits directly in front of the noun.",
    sections: [
      {
        title: "1. Core Adjectives & Opposites (Gegenteile)",
        description: "Master these high-frequency descriptive pairs:",
        table: {
          headers: ["Adjective", "Opposite", "Meaning Pair", "Example Sentence"],
          rows: [
            ["groß", "klein", "big / small", "Die Wohnung ist groß, aber das Zimmer ist klein."],
            ["alt", "neu / jung", "old / new / young", "Das Auto ist alt, aber das Handy ist neu."],
            ["gut", "schlecht", "good / bad", "Das Wetter ist gut, aber der Film ist schlecht."],
            ["billig", "teuer", "cheap / expensive", "Der Kaffee ist billig, aber der Wein ist teuer."],
            ["schön", "hässlich", "beautiful / ugly", "Die Stadt ist sehr schön."],
            ["schnell", "langsam", "fast / slow", "Der Zug ist schnell, der Bus ist langsam."],
            ["warm / heiß", "kalt", "warm / hot / cold", "Der Tee ist heiß."],
            ["hell", "dunkel", "bright / dark", "Das Zimmer ist sehr hell."],
          ],
        },
      },
    ],
    dialogue: {
      context: "Viewing an apartment for rent in Leipzig:",
      lines: [
        {
          speaker: "Interessent",
          german: "Die Wohnung ist wirklich sehr schön und hell!",
          english: "The apartment is really very beautiful and bright!",
        },
        {
          speaker: "Vermieter",
          german: "Ja, und die Miete ist nicht teuer. Die Küche ist neu.",
          english: "Yes, and the rent is not expensive. The kitchen is new.",
        },
        {
          speaker: "Interessent",
          german: "Perfekt! Das Badezimmer ist zwar klein, aber sehr sauber.",
          english: "Perfect! The bathroom is indeed small, but very clean.",
        },
      ],
    },
    funFact: {
      title: "The Super-Useful Word 'Sehr' & 'Ziemlich'",
      content:
        "To modulate your descriptions in German, use 'sehr' (very) or 'ziemlich' (quite/rather): *Das ist sehr schön* (That is very beautiful) or *Der Zug ist ziemlich schnell* (The train is quite fast). Adding 'nicht' simply negates it: *Das ist nicht teuer*!",
    },
    practice: [
      {
        question: "What is the opposite of 'teuer' (expensive)?",
        options: ["groß", "billig", "schön"],
        answer: "billig",
        explanation: "'billig' (or 'günstig') means cheap / affordable.",
      },
    ],
  },
};
