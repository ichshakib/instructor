import { LessonContent } from "../api";

export const CHAPTER_3_LESSONS: Record<string, LessonContent> = {
  "a1-ch3-l11": {
    overview:
      "Politeness and friendly greetings form the backbone of daily social life in German-speaking countries. In this lesson, you will learn the essential time-of-day greetings, parting phrases, and the essential magic words: 'Bitte' and 'Danke'.",
    canDo:
      "Can greet people appropriately at any time of day, bid farewell formally and informally, and navigate basic polite interactions with 'Bitte', 'Danke', and 'Entschuldigung'.",
    teacherNote:
      "Notice regional variations! In Southern Germany and Austria, you will hear 'Grüß Gott' or 'Servus'. In Northern Germany, people greet each other with 'Moin' at any hour of the day or night.",
    sections: [
      {
        title: "1. Time-of-Day Greetings & Goodbyes",
        description: "Choose the appropriate phrase depending on time and formality:",
        table: {
          headers: ["German Phrase", "Meaning", "Time / Context", "Register"],
          rows: [
            ["Guten Morgen", "Good morning", "Until approx. 11:00 AM", "Formal & Neutral"],
            ["Guten Tag", "Good day / Hello", "11:00 AM until approx. 6:00 PM", "Formal & Standard"],
            ["Guten Abend", "Good evening", "From 6:00 PM onwards", "Formal & Standard"],
            ["Hallo", "Hello / Hi", "Anytime", "Informal & Friendly"],
            ["Gute Nacht", "Good night", "When going to sleep / late parting", "Informal & Neutral"],
            ["Auf Wiedersehen", "Goodbye", "Formal face-to-face farewell", "Formal"],
            ["Auf Wiederhören", "Goodbye (on the phone)", "Used strictly on telephone calls", "Formal Phone"],
            ["Tschüss / Ciao", "Bye!", "Casual farewell with friends & family", "Informal"],
          ],
        },
      },
      {
        title: "2. The Magic Politeness Words",
        description: "These three words will make you beloved across Germany:",
        items: [
          {
            term: "Bitte (Please / You're welcome)",
            meaning: "Used when making a request ('Ein Wasser, bitte') AND when answering 'Danke' ('Gern geschehen' or simply 'Bitte!').",
            example: "Einen Kaffee, bitte! -> Bitte schön!",
          },
          {
            term: "Danke / Vielen Dank (Thank you / Many thanks)",
            meaning: "Expressing genuine gratitude. Adding 'sehr' (Danke sehr) or 'vielmals' elevates politeness.",
            example: "Vielen Dank für Ihre Hilfe!",
          },
          {
            term: "Entschuldigung (Excuse me / Sorry)",
            meaning: "Used to get someone's attention or apologize for bumping into someone.",
            example: "Entschuldigung, wo ist die U-Bahn?",
          },
        ],
      },
    ],
    dialogue: {
      context: "Stepping into a local bakery (Bäckerei) in Dresden in the morning:",
      lines: [
        {
          speaker: "Bäckerin",
          german: "Guten Morgen! Was darf es sein?",
          english: "Good morning! What can I get for you?",
        },
        {
          speaker: "Kunde",
          german: "Guten Morgen! Zwei Brötchen, bitte.",
          english: "Good morning! Two bread rolls, please.",
        },
        {
          speaker: "Bäckerin",
          german: "Gerne. Das macht einen Euro achtzig.",
          english: "With pleasure. That comes to one euro eighty.",
        },
        {
          speaker: "Kunde",
          german: "Hier bitte. Vielen Dank und einen schönen Tag!",
          english: "Here you go. Thank you very much and have a nice day!",
        },
        {
          speaker: "Bäckerin",
          german: "Danke ebenfalls, auf Wiedersehen!",
          english: "Thank you as well, goodbye!",
        },
      ],
    },
    funFact: {
      title: "The Handshake & Direct Eye Contact",
      content:
        "When greeting someone in person in Germany, a firm handshake accompanied by direct eye contact is expected business and social etiquette. A weak handshake or looking away can be perceived as insincere. Casual air-kisses or hugs are reserved solely for very close friends.",
    },
    practice: [
      {
        question: "You are ending a formal phone call with a German client. Which goodbye should you say?",
        options: ["Auf Wiedersehen", "Auf Wiederhören", "Tschüss"],
        answer: "Auf Wiederhören",
        explanation: "'Auf Wiederhören' specifically translates to 'until we hear each other again' and is the standard formal telephone farewell.",
      },
    ],
  },

  "a1-ch3-l12": {
    overview:
      "Introducing yourself with confidence is the core goal of CEFR A1 Speaking Part 1. In this lesson, you will master the three foundational self-introduction questions: your name, where you are from, and where you live.",
    canDo:
      "Can introduce yourself, state your full name, country of origin, current city of residence, and ask conversation partners for their personal details.",
    teacherNote:
      "Pay attention to the prepositions: 'aus' (from) is used for your country/city of origin (*Ich komme aus...*), while 'in' is used for your current residence (*Ich wohne in...*).",
    sections: [
      {
        title: "1. Three Ways to State Your Name",
        description: "All three are natural and widely used:",
        table: {
          headers: ["Pattern", "German", "English", "Register"],
          rows: [
            ["heißen", "Ich heiße Michael Bauer.", "I am called Michael Bauer.", "Universal & Standard"],
            ["sein", "Ich bin Michael.", "I am Michael.", "Friendly & Direct"],
            ["mein Name", "Mein Name ist Michael Bauer.", "My name is Michael Bauer.", "Polite & Professional"],
          ],
        },
      },
      {
        title: "2. Asking & Answering Origin and Residence",
        description: "Master these paired questions and answers:",
        table: {
          headers: ["Topic", "Informal (du)", "Formal (Sie)", "Your Answer"],
          rows: [
            ["Name", "Wie heißt du?", "Wie heißen Sie?", "Ich heiße [Name]. / Mein Name ist [Name]."],
            ["Origin", "Woher kommst du?", "Woher kommen Sie?", "Ich komme aus [Land/Stadt]."],
            ["Residence", "Wo wohnst du?", "Wo wohnen Sie?", "Ich wohne in [Stadt]."],
            ["Profession", "Was bist du von Beruf?", "Was sind Sie von Beruf?", "Ich bin Ingenieur / Lehrerin."],
          ],
        },
      },
    ],
    dialogue: {
      context: "First day of German language class in Frankfurt, meeting your desk partner:",
      lines: [
        {
          speaker: "Lina",
          german: "Hallo, ich bin Lina! Und wie heißt du?",
          english: "Hello, I am Lina! And what is your name?",
        },
        {
          speaker: "Tariq",
          german: "Hallo Lina. Ich heiße Tariq. Woher kommst du?",
          english: "Hello Lina. I am called Tariq. Where are you from?",
        },
        {
          speaker: "Lina",
          german: "Ich komme aus Spanien, aber ich wohne jetzt hier in Frankfurt.",
          english: "I come from Spain, but I live here in Frankfurt now.",
        },
        {
          speaker: "Tariq",
          german: "Schön! Ich komme aus Marokko und wohne auch in Frankfurt.",
          english: "Nice! I come from Morocco and also live in Frankfurt.",
        },
      ],
    },
    funFact: {
      title: "Goethe A1 Exam Speaking Part 1",
      content:
        "In the official Goethe-Zertifikat A1 exam, Part 1 of the speaking test requires you to introduce yourself using seven prompt cards: Name, Alter (Age), Land (Country), Wohnort (Residence), Sprachen (Languages), Beruf (Job), and Hobby. Practicing this dialogue prepares you for 100% of that exam station!",
    },
    practice: [
      {
        question: "How do you ask a new neighbor politely (formal) where they live?",
        options: ["Wo wohnst du?", "Wo wohnen Sie?", "Woher wohnen Sie?"],
        answer: "Wo wohnen Sie?",
        explanation: "Formal address uses 'Sie' with the verb 'wohnen': 'Wo wohnen Sie?'.",
      },
    ],
  },

  "a1-ch3-l13": {
    overview:
      "Discussing geography, what languages you speak, and where people originate expands your horizons. Most countries in German have no grammatical article, but a few famous exceptions require one!",
    canDo:
      "Can name major world countries and languages in German, state nationalities, and correctly use the countries that require articles (die Schweiz, die Türkei, die USA).",
    teacherNote:
      "Notice the pattern for languages: almost all languages end in '-isch' (Deutsch, Englisch, Spanisch, Französisch, Arabisch). And remember that when you speak a language, no article is used: *Ich spreche Deutsch*.",
    sections: [
      {
        title: "1. Countries Without Articles (The Standard Rule)",
        description: "Over 90% of countries take no article after 'aus':",
        table: {
          headers: ["Country", "Coming from... (aus)", "Language", "Language in German"],
          rows: [
            ["Deutschland", "aus Deutschland", "German", "Deutsch"],
            ["Österreich", "aus Österreich", "German", "Deutsch"],
            ["Spanien", "aus Spanien", "Spanish", "Spanisch"],
            ["Frankreich", "aus Frankreich", "French", "Französisch"],
            ["Italien", "aus Italien", "Italian", "Italienisch"],
            ["Polen", "aus Polen", "Polish", "Polnisch"],
            ["Japan", "aus Japan", "Japanese", "Japanisch"],
            ["Kanada", "aus Kanada", "English/French", "Englisch / Französisch"],
          ],
        },
      },
      {
        title: "2. The Crucial Exceptions: Countries with Articles!",
        description:
          "These few countries have grammatical gender. After 'aus', feminine countries become 'der', and plurals become 'den':",
        items: [
          {
            term: "die Schweiz (Switzerland - Feminine)",
            meaning: "Ich komme aus DER Schweiz. (I come from Switzerland.)",
            example: "Sie wohnt in der Schweiz.",
          },
          {
            term: "die Türkei (Turkey - Feminine)",
            meaning: "Ich komme aus DER Türkei. (I come from Turkey.)",
            example: "Er spricht Türkisch und Deutsch.",
          },
          {
            term: "die USA (United States - Plural)",
            meaning: "Ich komme aus DEN USA. (I come from the USA.)",
            example: "Wir reisen in die USA.",
          },
        ],
      },
    ],
    dialogue: {
      context: "International student orientation dinner in Heidelberg:",
      lines: [
        {
          speaker: "Moderator",
          german: "Guten Abend zusammen! Welche Sprachen sprechen Sie?",
          english: "Good evening everyone! Which languages do you speak?",
        },
        {
          speaker: "Studentin",
          german: "Ich komme aus der Schweiz. Ich spreche Deutsch, Französisch und ein bisschen Italienisch.",
          english: "I come from Switzerland. I speak German, French, and a bit of Italian.",
        },
      ],
    },
    funFact: {
      title: "Switzerland's Four National Languages",
      content:
        "Switzerland (die Schweiz) officially has four national languages: German (Deutsch, spoken by ~62%), French (Französisch, ~23%), Italian (Italienisch, ~8%), and Romansh (Rätoromanisch, <1%). The Swiss German dialect is called 'Schwiizerdütsch'!",
    },
    practice: [
      {
        question: "How do you say 'I come from Switzerland'?",
        options: ["Ich komme aus Schweiz.", "Ich komme aus der Schweiz.", "Ich komme in Schweiz."],
        answer: "Ich komme aus der Schweiz.",
        explanation: "'Schweiz' is a feminine noun and requires the dative article 'der' after the preposition 'aus'.",
      },
    ],
  },

  "a1-ch3-l14": {
    overview:
      "Whether buying groceries, giving your phone number, or checking train departure times, numbers are indispensable. German numbers from 21 to 99 follow an inverted pattern that is famous worldwide: you say the ones before the tens!",
    canDo:
      "Can count from 0 to 100, exchange telephone numbers digit by digit, and dictate email addresses in German.",
    teacherNote:
      "For numbers 21–99, German says: 'one-and-twenty' (einundzwanzig), 'two-and-twenty' (zweiundzwanzig). Think of it like reading the last digit first, then adding 'und' and the tens!",
    sections: [
      {
        title: "1. Numbers 0 to 20 (Die Grundzahlen)",
        description: "Master these foundational building blocks:",
        table: {
          headers: ["0–5", "6–10", "11–15", "16–20"],
          rows: [
            ["0 null", "6 sechs", "11 elf", "16 sechzehn (drops 's')"],
            ["1 eins", "7 sieben", "12 zwölf", "17 siebzehn (drops 'en')"],
            ["2 zwei", "8 acht", "13 dreizehn", "18 achtzehn"],
            ["3 drei", "9 neun", "14 vierzehn", "19 neunzehn"],
            ["4 vier", "10 zehn", "15 fünfzehn", "20 zwanzig"],
            ["5 fünf", "", "", ""],
          ],
        },
      },
      {
        title: "2. The Tens & The 'Ones-First' Rule (21–99)",
        description: "Notice how the tens end in '-zig' (except dreißig with ß):",
        table: {
          headers: ["The Tens", "Example Combo", "Literal Breakdown", "English"],
          rows: [
            ["20 zwanzig", "21 einundzwanzig", "one-and-twenty", "twenty-one"],
            ["30 dreißig", "35 fünfunddreißig", "five-and-thirty", "thirty-five"],
            ["40 vierzig", "48 achtundvierzig", "eight-and-forty", "forty-eight"],
            ["50 fünfzig", "59 neunundfünfzig", "nine-and-fifty", "fifty-nine"],
            ["60 sechzig", "64 vierundsechzig", "four-and-sixty", "sixty-four"],
            ["70 siebzig", "77 siebenundsiebzig", "seven-and-seventy", "seventy-seven"],
            ["80 achtzig", "82 zweiundachtzig", "two-and-eighty", "eighty-two"],
            ["90 neunzig", "99 neunundneunzig", "nine-and-ninety", "ninety-nine"],
            ["100 (ein)hundert", "100", "one hundred", "one hundred"],
          ],
        },
      },
      {
        title: "3. Email & Phone Symbols",
        description: "How to read symbols aloud when giving contact info:",
        items: [
          {
            term: "@ (At symbol)",
            meaning: "Pronounced 'ät' (like English at)",
            example: "info@beispiel.de -> info ät beispiel punkt de",
          },
          {
            term: ". (Dot / Period)",
            meaning: "Pronounced 'Punkt'",
            example: "lernen.de -> lernen punkt de",
          },
          {
            term: "- (Hyphen / Dash)",
            meaning: "Pronounced 'Bindestrich'",
            example: "anna-meier -> anna bindestrich meier",
          },
          {
            term: "_ (Underscore)",
            meaning: "Pronounced 'Unterstrich'",
            example: "max_berlin -> max unterstrich berlin",
          },
        ],
      },
    ],
    dialogue: {
      context: "Exchanging phone numbers and email after class in Berlin:",
      lines: [
        {
          speaker: "Sven",
          german: "Wie ist deine Handynummer?",
          english: "What is your mobile number?",
        },
        {
          speaker: "Sara",
          german: "Meine Nummer ist 0176 - 45 82 91 30.",
          english: "My number is 0176 - 45 82 91 30.",
        },
        {
          speaker: "Sven",
          german: "Und deine E-Mail-Adresse?",
          english: "And your email address?",
        },
        {
          speaker: "Sara",
          german: "sara punkt meier ät web punkt de.",
          english: "sara dot meier at web dot de.",
        },
      ],
    },
    funFact: {
      title: "Counting Starts on the Thumb!",
      content:
        "If you want to blend in with locals in a German café or beer garden, always indicate the number one with your **thumb**, not your index finger! Showing the index finger is interpreted as the number two (thumb + index). This famously served as a major plot point in the movie *Inglourious Basterds*!",
    },
    practice: [
      {
        question: "How is the number 54 constructed in German?",
        options: ["fünfzigvier", "vierundfünfzig", "fünfundvierzig"],
        answer: "vierundfünfzig",
        explanation: "German says ones first: vier (4) + und + fünfzig (50) = vierundfünfzig.",
      },
    ],
  },

  "a1-ch3-l15": {
    overview:
      "When learning German, you don't need to understand every word immediately. Having a toolkit of survival phrases empowers you to ask people to slow down, repeat, or clarify without feeling lost.",
    canDo:
      "Can navigate a German language classroom, ask someone to repeat or speak slowly, and express that you don't understand something.",
    teacherNote:
      "Never be shy to say 'Wie bitte?' (Pardon / What did you say?). It is the most polite and natural way to ask someone to repeat themselves in German.",
    sections: [
      {
        title: "1. The Essential Survival Expressions",
        description: "Keep these phrases ready whenever you need clarification:",
        table: {
          headers: ["German Phrase", "Literal Meaning", "English Function", "Usage Tip"],
          rows: [
            ["Wie bitte?", "How please?", "Pardon? Could you repeat that?", "Infinitely more polite than saying 'Was?'"],
            ["Ich verstehe nicht.", "I understand not.", "I don't understand.", "Clear and direct"],
            ["Sprechen Sie bitte langsamer.", "Speak you please slower.", "Please speak more slowly.", "Essential with native speakers"],
            ["Können Sie das wiederholen?", "Can you that repeat?", "Could you repeat that?", "Polite request"],
            ["Wie heißt das auf Deutsch?", "How is called that in German?", "What is that called in German?", "Great for expanding vocabulary"],
            ["Was bedeutet das?", "What means that?", "What does that mean?", "Asking for explanations"],
            ["Können Sie das bitte anschreiben?", "Can you that please write down?", "Could you please write that down?", "Great in classrooms & shops"],
          ],
        },
      },
    ],
    dialogue: {
      context: "In a German language class with an instructor in Leipzig:",
      lines: [
        {
          speaker: "Lehrer",
          german: "Bitte schlagen Sie das Kursbuch auf Seite 24 auf!",
          english: "Please open the coursebook to page 24!",
        },
        {
          speaker: "Schüler",
          german: "Entschuldigung, wie bitte? Welche Seite?",
          english: "Excuse me, pardon? Which page?",
        },
        {
          speaker: "Lehrer",
          german: "Seite vierundzwanzig, bitte.",
          english: "Page twenty-four, please.",
        },
        {
          speaker: "Schüler",
          german: "Vielen Dank!",
          english: "Thank you very much!",
        },
      ],
    },
    funFact: {
      title: "'Wie bitte?' vs. 'Was?'",
      content:
        "In English, answering 'What?' when you didn't hear someone can sound slightly curt. In German, saying just 'Was?' to a teacher, elder, or customer is considered quite rude! Always use the gentle, courteous phrase: **'Wie bitte?'**.",
    },
    practice: [
      {
        question: "You didn't catch what a train conductor said. What is the most polite phrase to use?",
        options: ["Was?", "Hä?", "Wie bitte?"],
        answer: "Wie bitte?",
        explanation: "'Wie bitte?' is the polite, standard German equivalent of 'Pardon me?'.",
      },
    ],
  },
};
