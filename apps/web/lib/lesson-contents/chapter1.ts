import { LessonContent } from "../api";

export const CHAPTER_1_LESSONS: Record<string, LessonContent> = {
  "a1-ch1-l1": {
    overview:
      "Welcome to your first step into German! German pronunciation is famously logical and consistent. Unlike English, where the same letter can be pronounced in five different ways, German letters almost always correspond to the exact same sound once you learn their core rules.",
    canDo:
      "Can spell your own name using the German alphabet, recognize key consonant sounds (W, V, J, Z), and pronounce simple German words letter-by-letter.",
    teacherNote:
      "Herzlich willkommen! When reading German, never guess—trust the letters. Once you remember that 'W' sounds like English 'V', 'V' often sounds like 'F', and 'Z' sounds like 'ts', you can already read hundreds of street signs, brand names, and menu items across Germany, Austria, and Switzerland.",
    sections: [
      {
        title: "1. The German Alphabet (Das Deutsche Alphabet)",
        description:
          "The German alphabet contains the standard 26 Latin letters plus special characters. Practice saying them aloud with the phonetic guides below:",
        table: {
          headers: ["Letter", "German Name", "English Sound Equivalent", "Word Example"],
          rows: [
            ["A a", "aah", "like 'a' in father", "der Abend (evening)"],
            ["B b", "beh", "like 'b' in bed", "das Buch (book)"],
            ["C c", "tseh", "like 'ts' in cats before e/i", "das Café (café)"],
            ["D d", "deh", "like 'd' in door", "der Danke (thanks)"],
            ["E e", "eeh", "like 'e' in pet or 'ay' in say", "das Essen (food)"],
            ["F f", "eff", "like 'f' in find", "der Freund (friend)"],
            ["G g", "geh", "always hard like 'g' in go", "gut (good)"],
            ["H h", "hah", "breathed 'h' at start; silent after vowel", "Hallo (hello)"],
            ["I i", "iih", "like 'ee' in see", "die Idee (idea)"],
            ["J j", "yott", "sounds like English 'y' in yes!", "ja (yes)"],
            ["K k", "kah", "like 'k' in kite", "der Kaffee (coffee)"],
            ["L l", "ell", "clear European 'l' on upper gums", "die Lampe (lamp)"],
            ["M m", "emm", "like 'm' in mother", "die Musik (music)"],
            ["N n", "enn", "like 'n' in no", "der Name (name)"],
            ["O o", "ohh", "pure round 'o' like in so", "die Oper (opera)"],
            ["P p", "peh", "crisp 'p' like in park", "die Post (post office)"],
            ["Q q", "kuh", "always followed by u: sounds like 'kv'", "bequem (comfortable)"],
            ["R r", "err", "throat-trilled or softly tapped", "das Radio (radio)"],
            ["S s", "ess", "voiced like 'z' before vowels; 's' at end", "die Sonne (sun) / das Glas (glass)"],
            ["T t", "teh", "sharp 't' like in tea", "der Tag (day)"],
            ["U u", "uuh", "like 'oo' in moon", "die Uhr (clock)"],
            ["V v", "fau", "mostly sounds like 'f' in father!", "der Vater (father)"],
            ["W w", "veh", "sounds like English 'v' in victory!", "das Wasser (water)"],
            ["X x", "iks", "like 'ks' in taxi", "das Taxi (taxi)"],
            ["Y y", "üpsilon", "sounds like 'ü' or 'y'", "das Yoga (yoga)"],
            ["Z z", "tsett", "always sharp 'ts' like in cats!", "die Zeit (time)"],
          ],
        },
      },
      {
        title: "2. The 4 Essential Consonant Shifts to Remember",
        description:
          "Keep these four mental anchors in mind whenever you see a new German word:",
        items: [
          {
            term: "W = [V]",
            pronunciation: "veh",
            meaning: "Pronounced like English 'V'. German does not have the English 'W' sound!",
            example: "das Wasser (water), Wien (Vienna)",
          },
          {
            term: "V = [F]",
            pronunciation: "fau",
            meaning: "Pronounced like English 'F' in native German words.",
            example: "der Vater (father), vier (four)",
          },
          {
            term: "J = [Y]",
            pronunciation: "yott",
            meaning: "Pronounced like English 'Y' in yes.",
            example: "ja (yes), das Jahr (year)",
          },
          {
            term: "Z = [TS]",
            pronunciation: "tsett",
            meaning: "Pronounced like a sharp 'ts' in cats. Never soft like the English Z!",
            example: "die Zeit (time), zehn (ten)",
          },
        ],
      },
    ],
    dialogue: {
      context: "At a hotel reception desk in Frankfurt, checking in and spelling a name aloud:",
      lines: [
        {
          speaker: "Rezeptionist",
          german: "Guten Tag! Wie heißen Sie bitte?",
          english: "Good day! What is your name, please?",
        },
        {
          speaker: "Gast",
          german: "Guten Tag. Mein Name ist David Müller.",
          english: "Good day. My name is David Müller.",
        },
        {
          speaker: "Rezeptionist",
          german: "Können Sie den Nachnamen bitte buchstabieren?",
          english: "Can you please spell the last name?",
        },
        {
          speaker: "Gast",
          german: "Ja, natürlich: M - Ü - L - L - E - R.",
          english: "Yes, of course: M - Ü - L - L - E - R.",
        },
      ],
    },
    funFact: {
      title: "The DACH Region & Universal Capitalization",
      content:
        "German is spoken by over 100 million native speakers across the DACH countries: Deutschland (D), Österreich / Austria (A), and die Schweiz / Switzerland (CH). Notice how in German every single noun begins with a capital letter (der Name, das Hotel, der Abend). This unique rule was standardized to make reading faster and sentences clearer!",
    },
    practice: [
      {
        question: "How is the German word 'Wasser' (water) pronounced in its initial letter?",
        options: ["With an English 'W' sound like 'wash'", "With an English 'V' sound like 'vase'", "With a silent 'W'"],
        answer: "With an English 'V' sound like 'vase'",
        explanation: "In German, the letter 'W' is always pronounced like the English 'V'.",
      },
      {
        question: "How do you pronounce the number 'zehn' (ten) in German?",
        options: ["Like English 'zen'", "Like 'tsehn' with a sharp 'ts'", "Like 'kehn'"],
        answer: "Like 'tsehn' with a sharp 'ts'",
        explanation: "The German letter 'Z' always produces a crisp 'ts' sound, exactly like the end of the word 'cats'.",
      },
    ],
  },

  "a1-ch1-l2": {
    overview:
      "German features four characters you won't find in the standard English alphabet: the three Umlauts (ä, ö, ü) and the unique ligature Eszett (ß). In this lesson, we demystify how your lips and tongue produce these authentic sounds.",
    canDo:
      "Can articulate ä, ö, ü accurately, pronounce diphthongs (ei, ie, eu), and distinguish between hard and soft 'ch'.",
    teacherNote:
      "The two dots above ä, ö, and ü aren't decorations—they are historical shorthand for a tiny letter 'e' placed above the vowel! If you ever don't have a German keyboard, you can write 'ae', 'oe', and 'ue' instead.",
    sections: [
      {
        title: "1. The 3 Umlauts (Die Umlaute)",
        description:
          "Position your mouth to say one sound, then adjust your lips to form the Umlaut:",
        table: {
          headers: ["Umlaut", "How to Shape Your Mouth", "Key Example", "Meaning"],
          rows: [
            ["Ä ä", "Open mouth wide, say 'eh' like in 'air'", "das Mädchen / der Bär", "girl / bear"],
            ["Ö ö", "Shape lips to say 'oh', then try to say 'ay'", "schön / das Öl / Köln", "beautiful / oil / Cologne"],
            ["Ü ü", "Pucker lips as if to whistle, then say 'ee'", "die Tür / fünf / über", "door / five / over"],
          ],
        },
      },
      {
        title: "2. The Golden Pair: 'ei' vs. 'ie'",
        description:
          "This is the #1 vowel trap for beginners. Remember the golden memory rule: pronounce the SECOND letter!",
        items: [
          {
            term: "ei = [eye]",
            pronunciation: "ay",
            meaning: "Sounds like English 'eye' or 'pie'",
            example: "mein (my), das Eis (ice cream), eins (one).",
          },
          {
            term: "ie = [ee]",
            pronunciation: "ee",
            meaning: "Sounds like English 'ee' in see or cheese",
            example: "die Liebe (love), sieben (seven), hier (here).",
          },
          {
            term: "eu / äu = [oy]",
            pronunciation: "oy",
            meaning: "Both sound like English 'oy' in boy",
            example: "neu (new), heute (today), die Häuser (houses).",
          },
        ],
      },
      {
        title: "3. The Eszett (ß) & The Two Faces of 'ch'",
        description:
          "The ligature ß represents an unvoiced double-s. Meanwhile, 'ch' has a soft whisper and a throat scratch:",
        table: {
          headers: ["Sound", "Rule", "Examples"],
          rows: [
            ["ß (Eszett)", "Pronounced as a sharp, unvoiced 's' after long vowels & diphthongs.", "die Straße (street), groß (big), heiß (hot)"],
            ["Soft 'ch' (Ich-Laut)", "Whispered tongue hiss against roof of mouth after e, i, ä, ö, ü, l, n, r.", "ich (I), nicht (not), das Mädchen (girl)"],
            ["Hard 'ch' (Ach-Laut)", "Gently cleared throat sound in back of throat after a, o, u, au.", "das Buch (book), die Nacht (night), auch (also)"],
          ],
        },
      },
    ],
    dialogue: {
      context: "Ordering ice cream and asking for directions on a warm afternoon in Vienna:",
      lines: [
        {
          speaker: "Anna",
          german: "Entschuldigung, gibt es hier in der Straße ein Café mit Eis?",
          english: "Excuse me, is there a café with ice cream here on the street?",
        },
        {
          speaker: "Passant",
          german: "Ja, geradeaus! Das Café heißt 'Schöne Zeit'. Sehr lecker!",
          english: "Yes, straight ahead! The café is called 'Schöne Zeit' (Beautiful Time). Very delicious!",
        },
      ],
    },
    funFact: {
      title: "The Swiss 'ß' Mystery",
      content:
        "Did you know? Switzerland and Liechtenstein completely stopped using the letter 'ß' back in the 1930s! Swiss newspapers and street signs write 'Strasse' and 'gross' with double 'ss'. However, in Germany and Austria, 'ß' remains standard after long vowels (Straße) to distinguish it from short vowels (Masse).",
    },
    practice: [
      {
        question: "How do you pronounce the word 'Wein' (wine) compared to 'Wien' (Vienna)?",
        options: ["Wein sounds like 'Veen', Wien sounds like 'Vine'", "Wein sounds like 'Vine', Wien sounds like 'Veen'", "Both sound identical"],
        answer: "Wein sounds like 'Vine', Wien sounds like 'Veen'",
        explanation: "Remember: pronounce the second letter! In 'ei' the second letter is i (sounds like eye). In 'ie' the second letter is e (sounds like ee).",
      },
      {
        question: "Which of the following contains the soft 'ch' (whispered hiss)?",
        options: ["das Buch", "die Nacht", "ich"],
        answer: "ich",
        explanation: "After 'i' and 'e', 'ch' produces the soft whispered hiss (Ich-Laut), whereas after 'a', 'o', 'u' it makes the throat sound.",
      },
    ],
  },

  "a1-ch1-l3": {
    overview:
      "To communicate naturally, you need subject pronouns to refer to yourself, friends, and colleagues. In German, there is a crucial social distinction between the informal 'du' and the formal 'Sie'.",
    canDo:
      "Can list all 9 German personal pronouns and know precisely when to use informal 'du' versus respectful formal 'Sie'.",
    teacherNote:
      "Pay special attention to 'Sie' with a capital 'S'. Whenever you see 'Sie' capitalized, it means formal 'you' (whether talking to one person or twenty). Lowercase 'sie' means 'she' or 'they', depending on the verb!",
    sections: [
      {
        title: "1. The 9 German Subject Pronouns",
        description: "These are the subjects that drive all German sentences:",
        table: {
          headers: ["Pronoun", "Meaning", "Grammatical Person", "Pronunciation Tip"],
          rows: [
            ["ich", "I", "1st person singular", "Soft ch sound (whisper)"],
            ["du", "you (informal singular)", "2nd person singular", "Sounds like 'doo'"],
            ["er", "he", "3rd person singular masculine", "Short crisp vowel"],
            ["sie", "she", "3rd person singular feminine", "Sounds like 'zee'"],
            ["es", "it", "3rd person singular neuter", "Sounds like 'ess'"],
            ["wir", "we", "1st person plural", "Sounds like 'veer'"],
            ["ihr", "you all (informal plural)", "2nd person plural", "Sounds like 'eer'"],
            ["sie", "they", "3rd person plural", "Sounds like 'zee'"],
            ["Sie", "you (formal singular & plural)", "Polite address", "Always capitalized! Sounds like 'zee'"],
          ],
        },
      },
      {
        title: "2. The Cultural Etiquette: 'du' vs. 'Sie'",
        description:
          "Choosing the right pronoun shows respect and understanding of cultural boundaries in the German-speaking world:",
        items: [
          {
            term: "du (Informal You)",
            meaning: "Family, close friends, fellow university students, children under 15, and pets.",
            example: "Wie heißt du? (What's your name? - casual)",
          },
          {
            term: "Sie (Formal You - Capitalized)",
            meaning: "Adult strangers, shopkeepers, doctors, business partners, professors, and government officials.",
            example: "Wie heißen Sie? (What is your name? - polite/formal)",
          },
          {
            term: "ihr (Informal Group You)",
            meaning: "Addressing a group of friends, classmates, or children.",
            example: "Wo seid ihr? (Where are you guys?)",
          },
        ],
      },
    ],
    dialogue: {
      context: "A young professional meeting a senior manager at an office in Hamburg:",
      lines: [
        {
          speaker: "Herr Hoffmann",
          german: "Guten Tag, Frau Weber! Wie geht es Ihnen?",
          english: "Good day, Ms. Weber! How are you doing?",
        },
        {
          speaker: "Frau Weber",
          german: "Guten Tag, Herr Hoffmann. Sehr gut, danke! Und wie geht es Ihnen?",
          english: "Good day, Mr. Hoffmann. Very well, thank you! And how are you?",
        },
      ],
    },
    funFact: {
      title: "Das 'Du' Anbieten (Offering the Informal 'Du')",
      content:
        "In Germany, colleagues often work alongside each other for years using formal 'Sie' and last names (*Herr Schmidt, Frau Wagner*). It is a cherished milestone when the older or higher-ranking person formally says: 'Wir können uns gerne duzen!' (We can gladly use 'du'). Once offered, you transition to first names and informal conversation!",
    },
    practice: [
      {
        question: "You are speaking to a police officer or doctor in Munich. Which pronoun do you use?",
        options: ["du", "ihr", "Sie (capitalized)"],
        answer: "Sie (capitalized)",
        explanation: "Always use formal 'Sie' when addressing adult strangers, officials, or professionals in Germany.",
      },
      {
        question: "What does lowercase 'wir' mean?",
        options: ["You all", "We", "They"],
        answer: "We",
        explanation: "'wir' is the first person plural pronoun meaning 'we'.",
      },
    ],
  },

  "a1-ch1-l4": {
    overview:
      "The verb 'sein' (to be) is the foundational cornerstone of the German language. Just like in English (am, is, are), it is irregular, so mastering its conjugation opens the door to expressing who you are, your nationality, and your feelings.",
    canDo:
      "Can conjugate 'sein' across all persons and form simple identity, origin, and condition statements.",
    teacherNote:
      "Because 'sein' is irregular, memorize it rhythmically: ich bin, du bist, er ist, wir sind, ihr seid, sie sind. Say it aloud five times in a row!",
    sections: [
      {
        title: "1. Conjugation Table of 'sein' (to be)",
        description: "Present tense (Präsens) forms of 'sein':",
        table: {
          headers: ["Pronoun", "Form of 'sein'", "English", "Example Sentence"],
          rows: [
            ["ich", "bin", "I am", "Ich bin Maria. (I am Maria.)"],
            ["du", "bist", "you are (informal)", "Du bist sehr nett. (You are very kind.)"],
            ["er / sie / es", "ist", "he / she / it is", "Er ist Student. / Das Wetter ist gut."],
            ["wir", "sind", "we are", "Wir sind hier in Berlin. (We are here in Berlin.)"],
            ["ihr", "seid", "you all are", "Seid ihr bereit? (Are you all ready?)"],
            ["sie / Sie", "sind", "they are / You are (formal)", "Sie sind sehr freundlich. (You are very friendly.)"],
          ],
        },
      },
      {
        title: "2. Key Sentence Patterns with 'sein'",
        description: "You can use 'sein' to state three core things:",
        items: [
          {
            term: "Identity & Profession",
            meaning: "State who you are or your occupation (no 'a' needed before jobs!)",
            example: "Ich bin Arzt. (I am a doctor.) / Sie ist Lehrerin. (She is a teacher.)",
          },
          {
            term: "Condition & Mood",
            meaning: "Describe how things are with adjectives",
            example: "Der Kaffee ist warm. (The coffee is warm.) / Wir sind müde. (We are tired.)",
          },
          {
            term: "Origin & Location",
            meaning: "State where you are right now",
            example: "Ich bin in Deutschland. (I am in Germany.)",
          },
        ],
      },
    ],
    dialogue: {
      context: "Two new students meeting in the lecture hall at Humboldt University in Berlin:",
      lines: [
        {
          speaker: "Felix",
          german: "Hallo! Ich bin Felix. Bist du auch neu hier?",
          english: "Hello! I am Felix. Are you also new here?",
        },
        {
          speaker: "Elena",
          german: "Ja, ich bin Elena. Wir sind in derselben Gruppe!",
          english: "Yes, I am Elena. We are in the same group!",
        },
        {
          speaker: "Felix",
          german: "Super! Das ist fantastisch.",
          english: "Great! That is fantastic.",
        },
      ],
    },
    funFact: {
      title: "No Articles with Professions!",
      content:
        "In English, we say 'I am *a* doctor' or 'She is *an* architect'. In German, saying 'Ich bin ein Arzt' sounds unnatural! Germans drop the article when stating professions: simply say 'Ich bin Arzt' or 'Ich bin Studentin'.",
    },
    practice: [
      {
        question: "Complete the sentence: 'Wir _____ heute in München.'",
        options: ["seid", "sind", "ist"],
        answer: "sind",
        explanation: "The correct form of 'sein' for 'wir' (we) is 'sind'.",
      },
      {
        question: "How do you ask a friend: 'Are you ready?'",
        options: ["Bist du bereit?", "Ist du bereit?", "Seid du bereit?"],
        answer: "Bist du bereit?",
        explanation: "'du' always pairs with 'bist' (Du bist -> Bist du?).",
      },
    ],
  },

  "a1-ch1-l5": {
    overview:
      "Alongside 'sein', the verb 'haben' (to have) is the second powerhouse verb in German. It allows you to express possession, physical needs (hunger, thirst), and will later serve as the auxiliary verb for the past tense.",
    canDo:
      "Can conjugate 'haben' fluently and use it to express possession, age inquiries, and basic physical sensations.",
    teacherNote:
      "Notice the stem change in 'du hast' and 'er/sie/es hat'—the letter 'b' disappears! This slight shortening makes spoken German faster and more melodic.",
    sections: [
      {
        title: "1. Conjugation Table of 'haben' (to have)",
        description: "Present tense forms of 'haben':",
        table: {
          headers: ["Pronoun", "Form of 'haben'", "English", "Example Sentence"],
          rows: [
            ["ich", "habe", "I have", "Ich habe ein Buch. (I have a book.)"],
            ["du", "hast", "you have (informal)", "Hast du Zeit? (Do you have time?)"],
            ["er / sie / es", "hat", "he / she / it has", "Er hat eine Frage. (He has a question.)"],
            ["wir", "haben", "we have", "Wir haben Glück! (We are lucky! / We have luck!)"],
            ["ihr", "habt", "you all have", "Habt ihr Hunger? (Are you all hungry?)"],
            ["sie / Sie", "haben", "they have / You have (formal)", "Haben Sie ein Ticket? (Do you have a ticket?)"],
          ],
        },
      },
      {
        title: "2. Common German Expressions with 'haben'",
        description:
          "Where English uses 'to be', German often uses 'haben' (to have):",
        items: [
          {
            term: "Hunger haben",
            meaning: "To be hungry (literally: to have hunger)",
            example: "Ich habe Hunger. (I am hungry.)",
          },
          {
            term: "Durst haben",
            meaning: "To be thirsty (literally: to have thirst)",
            example: "Hast du Durst? (Are you thirsty?)",
          },
          {
            term: "Zeit haben",
            meaning: "To have time / to be free",
            example: "Wir haben morgen Zeit. (We have time tomorrow.)",
          },
          {
            term: "Recht haben",
            meaning: "To be right (literally: to have right)",
            example: "Du hast absolut recht! (You are absolutely right!)",
          },
        ],
      },
    ],
    dialogue: {
      context: "Two friends taking a break in a university cafeteria in Zurich:",
      lines: [
        {
          speaker: "Jonas",
          german: "Hast du Hunger oder Durst?",
          english: "Are you hungry or thirsty?",
        },
        {
          speaker: "Sophie",
          german: "Ja, ich habe großen Hunger! Hast du etwas Geld dabei?",
          english: "Yes, I am very hungry! Do you have some cash on you?",
        },
        {
          speaker: "Jonas",
          german: "Kein Problem, ich habe zwanzig Euro.",
          english: "No problem, I have twenty euros.",
        },
      ],
    },
    funFact: {
      title: "German Has Hunger, But Age Takes 'sein'!",
      content:
        "While Romance languages like French or Spanish say 'I have 20 years', German uses 'sein' for age: 'Ich bin zwanzig Jahre alt' (I *am* 20 years old). But when it comes to hunger, thirst, or luck, Germans say 'Ich habe Hunger' and 'Ich habe Glück'!",
    },
    practice: [
      {
        question: "Which form completes: 'Herr Becker, _____ Sie heute Zeit?'",
        options: ["hast", "habt", "haben"],
        answer: "haben",
        explanation: "Formal 'Sie' always takes the infinitive-like form 'haben'.",
      },
      {
        question: "How do you say 'I am thirsty' in natural German?",
        options: ["Ich bin Durst.", "Ich habe Durst.", "Ich bist Durst."],
        answer: "Ich habe Durst.",
        explanation: "In German, hunger and thirst are treated as things you 'have' (Ich habe Durst).",
      },
    ],
  },
};
