import { LessonContent } from "../../types/course.types";

export const CHAPTER_9_LESSONS: Record<string, LessonContent> = {
  "a1-ch9-l39": {
    overview:
      "Work and career form a central theme of adult life. In this lesson, inspired by Netzwerk A1 Kapitel 9 ('Alles Arbeit?'), you will master job titles in both masculine and feminine forms, vocabulary for workplace routines, and everyday German office expressions.",
    canDo:
      "Can name common professions in German (masculine and feminine forms with -in), describe daily job activities, and discuss working hours and typical office routines.",
    teacherNote:
      "In German, almost every profession has a masculine form and a feminine form ending in '-in' (plural: '-innen'). For example: 'der Lehrer' (male teacher) -> 'die Lehrerin' (female teacher, plural: die Lehrerinnen). When asking someone what they do for a living, ask: 'Was sind Sie von Beruf?' or 'Was machst du beruflich?'.",
    sections: [
      {
        title: "1. Berufe auf Deutsch (Professions - Masculine & Feminine)",
        description: "Standard German job titles with their correct articles:",
        table: {
          headers: [
            "Männlich (Maskulin)",
            "Weiblich (Feminin)",
            "Plural (Feminine)",
            "Englische Bedeutung",
          ],
          rows: [
            [
              "der Arzt",
              "die Ärztin",
              "die Ärztinnen",
              "doctor / physician",
            ],
            [
              "der Lehrer",
              "die Lehrerin",
              "die Lehrerinnen",
              "teacher",
            ],
            [
              "der Ingenieur",
              "die Ingenieurin",
              "die Ingenieurinnen",
              "engineer",
            ],
            [
              "der Informatiker",
              "die Informatikerin",
              "die Informatikerinnen",
              "software developer / IT specialist",
            ],
            [
              "der Kellner",
              "die Kellnerin",
              "die Kellnerinnen",
              "waiter / waitress",
            ],
            [
              "der Verkäufer",
              "die Verkäuferin",
              "die Verkäuferinnen",
              "salesperson / shop assistant",
            ],
            [
              "der Mechatroniker",
              "die Mechatronikerin",
              "die Mechatronikerinnen",
              "automotive / mechanical technician",
            ],
            [
              "der Student",
              "die Studentin",
              "die Studentinnen",
              "university student",
            ],
          ],
        },
      },
      {
        title: "2. Arbeitsplatz & Arbeitszeiten (Workplace & Schedule)",
        description: "Essential terms for discussing your work schedule and workplace:",
        items: [
          {
            term: "die Arbeitszeit (-en)",
            meaning: "working hours / schedule",
            example: "Meine Arbeitszeit ist von 9 bis 17 Uhr.",
          },
          {
            term: "der Feierabend",
            meaning: "quitting time / end of the working day",
            example: "Schönen Feierabend! (Have a nice evening after work!)",
          },
          {
            term: "die Gleitzeit / feste Arbeitszeiten",
            meaning: "flexible working hours / fixed working hours",
            example: "Wir haben Gleitzeit im Büro.",
          },
          {
            term: "die Vollzeit / die Teilzeit",
            meaning: "full-time / part-time employment",
            example: "Sie arbeitet in Teilzeit (30 Stunden pro Woche).",
          },
          {
            term: "arbeiten bei / als",
            meaning: "to work at [company] / as [profession]",
            example: "Ich arbeite bei Siemens als Informatiker.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Kennenlernen beim Mittagessen in der Firmenkantine:",
      lines: [
        {
          speaker: "Markus",
          german: "Hallo! Ich bin Markus. Bist du neu im Team?",
          english: "Hello! I'm Markus. Are you new on the team?",
        },
        {
          speaker: "Elena",
          german: "Ja, guten Tag! Mein Name ist Elena. Ich arbeite hier als UI-Designerin.",
          english: "Yes, hello! My name is Elena. I work here as a UI designer.",
        },
        {
          speaker: "Markus",
          german: "Willkommen bei uns! Wie sind deine Arbeitszeiten?",
          english: "Welcome to our team! What are your working hours like?",
        },
        {
          speaker: "Elena",
          german: "Ich habe Gleitzeit und arbeite meistens von 8:30 bis 17:00 Uhr.",
          english: "I have flextime and usually work from 8:30 to 17:00.",
        },
        {
          speaker: "Markus",
          german: "Das ist praktisch. Wann machst du heute Feierabend?",
          english: "That's practical. When are you calling it a day today?",
        },
        {
          speaker: "Elena",
          german: "Heute mache ich um Punkt 17 Uhr Feierabend. Bis später!",
          english: "Today I'm finishing work at 5 PM sharp. See you later!",
        },
      ],
    },
    funFact: {
      title: "The Untranslatable German Word: 'Feierabend'",
      content:
        "'Feierabend' literally means 'celebration evening'. In German workplace culture, it marks the sacred moment when your workday officially ends, work emails are shut off, and your personal leisure begins. Colleagues greet each other warmly with: 'Schönen Feierabend!'.",
    },
    practice: [
      {
        question: "How do you correctly ask someone what they do for a living in formal German?",
        options: [
          "Was machst du gestern?",
          "Was sind Sie von Beruf?",
          "Wo arbeiten du gerne?",
          "Wer bist Sie heute?",
        ],
        answer: "Was sind Sie von Beruf?",
        explanation:
          "'Was sind Sie von Beruf?' (or informally 'Was machst du beruflich?') is the standard polite German question to ask someone's profession.",
      },
      {
        question: "What is the correct feminine form of 'der Arzt'?",
        options: [
          "die Arztin",
          "die Ärztin",
          "die Arztesse",
          "die Ärztin-Frau",
        ],
        answer: "die Ärztin",
        explanation:
          "Many feminine profession titles take an Umlaut shift in addition to the '-in' suffix: der Arzt -> die Ärztin (plural: die Ärztinnen).",
      },
      {
        question: "Which German phrase means 'Have a great evening after work!'?",
        options: [
          "Guten Morgen!",
          "Schönen Feierabend!",
          "Viel Spaß beim Arbeiten!",
          "Auf Wiederhören!",
        ],
        answer: "Schönen Feierabend!",
        explanation:
          "'Schönen Feierabend!' is the quintessential German expression said to colleagues when leaving work at the end of the day.",
      },
    ],
  },

  "a1-ch9-l40": {
    overview:
      "To converse naturally about what happened earlier today or over the weekend, you need 'Das Perfekt'—the conversational past tense in German. In this lesson from Netzwerk A1 Kapitel 9, you will learn how regular verbs form their past participle (Partizip II) and how they combine with the auxiliary verb 'haben' in the sentence bracket (Satzklammer).",
    canDo:
      "Can construct sentences in Das Perfekt with regular verbs using 'haben' (e.g., 'Ich habe Deutsch gelernt', 'Wir haben gearbeitet') and position the participle at the end of the clause.",
    teacherNote:
      "In spoken German, almost all past actions are expressed using Das Perfekt. Notice the sentence bracket: 'haben' goes in Position 2 (conjugated to the subject), and the past participle 'ge-...-t' goes right at the very end of the sentence!",
    sections: [
      {
        title: "1. Das Perfekt-Prinzip: Subjekt + haben + ... + Partizip II",
        description: "The sentence structure creates a verbal bracket (Satzklammer):",
        table: {
          headers: [
            "Position 1",
            "Position 2 (haben konjugiert)",
            "Mittelfeld (Details / Zeit / Objekt)",
            "Satzende (Partizip II)",
          ],
          rows: [
            ["Ich", "habe", "heute viel Deutsch", "gelernt."],
            ["Lukas", "hat", "am Samstag Fußball", "gespielt."],
            ["Wir", "haben", "gestern bis 18 Uhr", "gearbeitet."],
            ["Was", "hast", "du am Wochenende", "gemacht?"],
          ],
        },
      },
      {
        title: "2. Bildung des Partizip II für regelmäßige Verben",
        description: "How regular weak verbs build their past participle:",
        table: {
          headers: [
            "Infinitiv",
            "Muster (Formula)",
            "Partizip II",
            "Beispielsatz im Perfekt",
          ],
          rows: [
            [
              "lernen (to learn)",
              "ge- + lern + -t",
              "gelernt",
              "Ich habe Grammatik gelernt.",
            ],
            [
              "machen (to do/make)",
              "ge- + mach + -t",
              "gemacht",
              "Was hast du heute gemacht?",
            ],
            [
              "arbeiten (to work)",
              "ge- + arbeit + -et",
              "gearbeitet",
              "Er hat 8 Stunden gearbeitet.",
            ],
            [
              "kochen (to cook)",
              "ge- + koch + -t",
              "gekocht",
              "Wir haben eine Suppe gekocht.",
            ],
            [
              "hören (to hear/listen)",
              "ge- + hör + -t",
              "gehört",
              "Hast du die Musik gehört?",
            ],
            [
              "einkaufen (separable!)",
              "ein + ge- + kauf + -t",
              "eingekauft",
              "Ich habe im Supermarkt eingekauft.",
            ],
          ],
        },
        notes: [
          "For verbs ending in -d or -t (like arbeiten, warten), insert an 'e' before -t for easier pronunciation: gearbeitet, gewartet.",
          "Separable verbs insert '-ge-' between the prefix and the stem: einkaufen -> eingekauft, aufhören -> aufgehört.",
        ],
      },
    ],
    dialogue: {
      context: "Zwei Kollegen sprechen am Montagmorgen über das Wochenende:",
      lines: [
        {
          speaker: "Jonas",
          german: "Guten Morgen, Julia! Wie war dein Wochenende?",
          english: "Good morning, Julia! How was your weekend?",
        },
        {
          speaker: "Julia",
          german: "Sehr schön, danke! Ich habe am Samstag lange geschlafen und dann die Wohnung geputzt.",
          english: "Very nice, thanks! I slept in on Saturday and then cleaned the apartment.",
        },
        {
          speaker: "Jonas",
          german: "Und hast du am Sonntag etwas Besonderes gemacht?",
          english: "And did you do anything special on Sunday?",
        },
        {
          speaker: "Julia",
          german: "Ja, ich habe für Freunde gekocht und wir haben zusammen Musik gehört. Und du?",
          english: "Yes, I cooked for friends and we listened to music together. And you?",
        },
        {
          speaker: "Jonas",
          german: "Ich habe leider fast den ganzen Sonntag für die Prüfung gelernt!",
          english: "Unfortunately I studied almost all of Sunday for the exam!",
        },
      ],
    },
    funFact: {
      title: "Spoken German vs. English Past Tense",
      content:
        "While English speakers frequently say 'I learned' (simple past) or 'I have learned' (present perfect) with subtle grammatical differences, German everyday speech uses 'Das Perfekt' for BOTH! When telling a friend about yesterday, you virtually always use: 'Ich habe gelernt' (I learned / I have learned).",
    },
    practice: [
      {
        question: "What is the correct sentence order for: 'Gestern / ich / gearbeitet / habe / viel'?",
        options: [
          "Gestern ich gearbeitet habe viel.",
          "Gestern habe ich viel gearbeitet.",
          "Ich habe gearbeitet gestern viel.",
          "Gestern habe gearbeitet ich viel.",
        ],
        answer: "Gestern habe ich viel gearbeitet.",
        explanation:
          "The conjugated verb 'habe' takes Position 2 (after 'Gestern'), the subject 'ich' follows immediately, and the past participle 'gearbeitet' must go to the very end of the clause.",
      },
      {
        question: "What is the past participle (Partizip II) of the verb 'kochen'?",
        options: ["gekochen", "gekocht", "kochtest", "kochend"],
        answer: "gekocht",
        explanation:
          "For regular verbs: ge- + verb stem (koch) + -t = gekocht.",
      },
      {
        question: "How does the separable verb 'einkaufen' build its past participle?",
        options: ["geeinkauft", "einkauft", "eingekauft", "einkaufte"],
        answer: "eingekauft",
        explanation:
          "Separable verbs insert '-ge-' between the separable prefix ('ein-') and the verb stem: ein + ge + kauf + t = eingekauft.",
      },
    ],
  },

  "a1-ch9-l41": {
    overview:
      "While most German verbs form Das Perfekt with 'haben', a crucial group of verbs takes 'sein' (to be) as its helping verb! In this lesson from Netzwerk A1 Kapitel 9, you will learn the exact rule for verbs of movement (gehen, fahren, fliegen) and state change (aufstehen, einschlafen), and master past conversations about trips and daily mobility.",
    canDo:
      "Can construct sentences in Das Perfekt using 'sein' for verbs of movement and change of state (e.g., 'Ich bin nach Hamburg gefahren', 'Wann bist du aufgestanden?').",
    teacherNote:
      "Here is the simple mnemonic for 'sein' in Perfekt: (1) Does the verb involve physical movement from point A to point B? (gehen, fahren, fliegen, kommen) -> USE SEIN! (2) Does it involve a transformation or state change? (aufstehen, aufwachen, einschlafen) -> USE SEIN! Plus the special verbs: sein (ist gewesen) and bleiben (ist geblieben).",
    sections: [
      {
        title: "1. Wann bildet man das Perfekt mit 'sein'?",
        description: "The two main categories that require 'sein':",
        table: {
          headers: [
            "Kategorie",
            "Bedeutung / Regel",
            "Typische Verben",
            "Beispielsatz",
          ],
          rows: [
            [
              "Ortswechsel (Movement A -> B)",
              "Physical motion from one location to another",
              "gehen, fahren, fliegen, kommen, reisen",
              "Ich bin nach Berlin gefahren.",
            ],
            [
              "Zustandswechsel (Change of State)",
              "Transition from one physical condition to another",
              "aufstehen, aufwachen, einschlafen",
              "Er ist um 7 Uhr aufgestanden.",
            ],
            [
              "Ausnahmen (Special Verbs)",
              "Core existential verbs taking sein",
              "sein (ist gewesen), bleiben (ist geblieben)",
              "Wir sind zu Hause geblieben.",
            ],
          ],
        },
      },
      {
        title: "2. Verben der Bewegung im Perfekt (Movement Verbs)",
        description: "Subject + konjugiertes 'sein' + ... + Partizip II:",
        table: {
          headers: [
            "Infinitiv",
            "sein-Form (ich / er)",
            "Partizip II",
            "Beispielsatz im Perfekt",
          ],
          rows: [
            [
              "fahren (to drive/ride)",
              "ich bin / er ist",
              "gefahren",
              "Ich bin mit dem Zug gefahren.",
            ],
            [
              "gehen (to go/walk)",
              "ich bin / er ist",
              "gegangen",
              "Sie ist in die Stadt gegangen.",
            ],
            [
              "fliegen (to fly)",
              "ich bin / er ist",
              "geflogen",
              "Wir sind nach Wien geflogen.",
            ],
            [
              "kommen (to come)",
              "ich bin / er ist",
              "gekommen",
              "Paco ist pünktlich gekommen.",
            ],
            [
              "aufstehen (to get up)",
              "ich bin / er ist",
              "aufgestanden",
              "Wann bist du heute aufgestanden?",
            ],
          ],
        },
      },
    ],
    dialogue: {
      context: "Ein Telefongespräch zwischen zwei Freunden über eine Wochenendreise:",
      lines: [
        {
          speaker: "Florian",
          german: "Hallo Leon! Na, wie war dein Ausflug nach Frankfurt?",
          english: "Hello Leon! Well, how was your trip to Frankfurt?",
        },
        {
          speaker: "Leon",
          german: "Fantastisch! Ich bin am Freitagnachmittag mit dem ICE gefahren.",
          english: "Fantastic! I traveled on Friday afternoon with the ICE train.",
        },
        {
          speaker: "Florian",
          german: "Bist du allein gefahren oder ist deine Schwester mitgekommen?",
          english: "Did you travel alone or did your sister come along?",
        },
        {
          speaker: "Leon",
          german: "Meine Schwester ist mitgekommen. Wir sind stundenlang durch das Museumsufer spaziert.",
          english: "My sister came along. We strolled for hours along the museum embankment.",
        },
        {
          speaker: "Florian",
          german: "Wann seid ihr gestern zurückgekommen?",
          english: "When did you guys get back yesterday?",
        },
        {
          speaker: "Leon",
          german: "Wir sind erst spät in der Nacht angekommen, aber es war wunderschön!",
          english: "We arrived quite late at night, but it was wonderful!",
        },
      ],
    },
    funFact: {
      title: "The Curious Verb 'bleiben' (to stay)",
      content:
        "Even though 'bleiben' (to stay / remain) means the exact OPPOSITE of motion, it grammatically takes 'sein' in Das Perfekt! 'Ich bin zu Hause geblieben' (I stayed at home). Remember: 'sein' and 'bleiben' are grammatical best friends—they both take 'sein'.",
    },
    practice: [
      {
        question: "Which auxiliary verb (Hilfsverb) completes: 'Wir ___ gestern nach München gefahren'?",
        options: ["haben", "sind", "hat", "waren"],
        answer: "sind",
        explanation:
          "'fahren' indicates movement from one place to another, so it requires 'sein'. For 'wir', the present form of sein is 'sind': 'Wir sind ... gefahren'.",
      },
      {
        question: "Why does the verb 'aufstehen' (to get up) take 'sein' in Das Perfekt?",
        options: [
          "Because it is an irregular verb",
          "Because it indicates a change of state (from sleeping to standing)",
          "Because all separable verbs take sein",
          "Because it ends in -en",
        ],
        answer: "Because it indicates a change of state (from sleeping to standing)",
        explanation:
          "Verbs indicating a change of state or physical condition (e.g., aufstehen, aufwachen, einschlafen) take 'sein' in the past tense.",
      },
      {
        question: "Which of the following sentences is grammatically correct?",
        options: [
          "Ich habe heute um 7 Uhr aufgestanden.",
          "Ich bin heute um 7 Uhr aufgestanden.",
          "Ich bin aufgestanden heute um 7 Uhr.",
          "Heute habe ich um 7 Uhr aufstehen.",
        ],
        answer: "Ich bin heute um 7 Uhr aufgestanden.",
        explanation:
          "'aufstehen' takes 'sein' ('ich bin') and the past participle 'aufgestanden' must stay at the very end of the sentence.",
      },
    ],
  },

  "a1-ch9-l42": {
    overview:
      "Some of the most frequent verbs in the German language are irregular in their past participle (ge- ... -en with vowel shifts). In this lesson, you will master the top irregular participles needed for everyday conversation and discover why native speakers prefer the Präteritum (simple past) for 'sein' (war) and 'haben' (hatte).",
    canDo:
      "Can recognize and use essential irregular past participles (gesprochen, gegessen, getrunken, gelesen, geschrieben), and naturally use 'war' and 'hatte' in conversation.",
    teacherNote:
      "Listen closely to native German speakers: while they use Das Perfekt for almost every action verb ('Ich habe gegessen', 'Er hat gearbeitet'), for 'sein' and 'haben' they almost ALWAYS use the short Präteritum: 'Ich war müde' (instead of 'Ich bin müde gewesen') and 'Ich hatte keine Zeit' (instead of 'Ich habe keine Zeit gehabt'). Adopting this makes you sound instantly natural!",
    sections: [
      {
        title: "1. Häufige unregelmäßige Partizipien (High-Frequency Irregulars)",
        description: "Core verbs where the vowel stem shifts in the past participle:",
        table: {
          headers: [
            "Infinitiv",
            "Partizip II",
            "Hilfsverb",
            "Bedeutung",
            "Beispielsatz",
          ],
          rows: [
            [
              "sprechen",
              "gesprochen",
              "haben",
              "to speak",
              "Ich habe mit dem Chef gesprochen.",
            ],
            [
              "essen",
              "gegessen",
              "haben",
              "to eat",
              "Wir haben Pizza gegessen.",
            ],
            [
              "trinken",
              "getrunken",
              "haben",
              "to drink",
              "Er hat einen Kaffee getrunken.",
            ],
            [
              "lesen",
              "gelesen",
              "haben",
              "to read",
              "Hast du die E-Mail gelesen?",
            ],
            [
              "schreiben",
              "geschrieben",
              "haben",
              "to write",
              "Sie hat einen Bericht geschrieben.",
            ],
            [
              "sehen",
              "gesehen",
              "haben",
              "to see",
              "Ich habe den Film gesehen.",
            ],
            [
              "treffen",
              "getroffen",
              "haben",
              "to meet",
              "Wir haben Freunde getroffen.",
            ],
          ],
        },
      },
      {
        title: "2. Die Ausnahme der Umgangssprache: 'war' & 'hatte'",
        description: "Instead of complex Perfekt, use Präteritum for sein and haben:",
        table: {
          headers: [
            "Pronomen",
            "sein im Präteritum ('was')",
            "haben im Präteritum ('had')",
            "Beispielsatz",
          ],
          rows: [
            [
              "ich",
              "war",
              "hatte",
              "Ich war gestern krank. / Ich hatte Kopfschmerzen.",
            ],
            [
              "du",
              "warst",
              "hattest",
              "Wo warst du? / Hattest du gestern Zeit?",
            ],
            [
              "er / sie / es",
              "war",
              "hatte",
              "Das Wetter war schön. / Er hatte viel Stress.",
            ],
            [
              "wir",
              "waren",
              "hatten",
              "Wir waren in Berlin. / Wir hatten Glück!",
            ],
            [
              "ihr",
              "wart",
              "hattet",
              "Wart ihr im Kino? / Hattet ihr Hunger?",
            ],
            [
              "sie / Sie",
              "waren",
              "hatten",
              "Sie waren sehr freundlich. / Hatten Sie Termine?",
            ],
          ],
        },
      },
    ],
    dialogue: {
      context: "Rückblick auf ein arbeitsreiches Wochenende:",
      lines: [
        {
          speaker: "Katja",
          german: "Hallo David! Wie war deine Geschäftsreise nach Zürich?",
          english: "Hello David! How was your business trip to Zurich?",
        },
        {
          speaker: "David",
          german: "Sie war sehr produktiv, aber ich hatte kaum Freizeit.",
          english: "It was very productive, but I had hardly any free time.",
        },
        {
          speaker: "Katja",
          german: "Hast du mit den Schweizer Kunden gesprochen?",
          english: "Did you speak with the Swiss clients?",
        },
        {
          speaker: "David",
          german: "Ja, wir haben am Vormittag gesprochen und zu Mittag im Restaurant gegessen.",
          english: "Yes, we spoke in the morning and ate lunch at the restaurant.",
        },
        {
          speaker: "Katja",
          german: "Und warst du abends am Zürichsee?",
          english: "And were you at Lake Zurich in the evening?",
        },
        {
          speaker: "David",
          german: "Ja, für eine halbe Stunde! Das Wetter war herrlich und ich habe einen Kaffee getrunken.",
          english: "Yes, for half an hour! The weather was marvelous and I drank a coffee.",
        },
      ],
    },
    funFact: {
      title: "Why German Children Say 'Ich war' instead of 'Ich bin gewesen'",
      content:
        "Even though 'Ich bin gewesen' is 100% grammatically correct in Das Perfekt, saying 'Ich war' is much shorter, crisper, and sounds far more natural. In fact, over 95% of native German speakers use 'war' and 'hatte' exclusively in spoken conversations.",
    },
    practice: [
      {
        question: "What is the past participle of 'schreiben' (to write)?",
        options: ["geschreibt", "geschrieben", "geschriebt", "schrieb"],
        answer: "geschrieben",
        explanation:
          "'schreiben' is an irregular verb with vowel shift ei -> ie: schreiben -> geschrieben.",
      },
      {
        question: "Which form is most natural in spoken German to say: 'I was very tired yesterday'?",
        options: [
          "Ich bin gestern sehr müde gewesen.",
          "Ich war gestern sehr müde.",
          "Ich habe gestern sehr müde geworden.",
          "Ich werde gestern müde.",
        ],
        answer: "Ich war gestern sehr müde.",
        explanation:
          "In spoken German, 'ich war' (Präteritum of sein) is universally preferred over the clumsy 'ich bin gewesen'.",
      },
      {
        question: "Fill in the blank: 'Gestern ___ wir keine Zeit für das Meeting.'",
        options: ["hatten", "haben gehabt", "waren", "seid"],
        answer: "hatten",
        explanation:
          "'Wir hatten keine Zeit' (We had no time) is the natural Präteritum form of haben for 'wir'.",
      },
    ],
  },

  "a1-ch9-l43": {
    overview:
      "Communicating effectively on the phone and leaving concise professional messages is a vital workplace skill. In this lesson, synthesized from Netzwerk A1 Kapitel 7 & 9, you will master telephone introductions ('Hier spricht...'), asking for colleagues politely, taking and leaving phone notes, and standard German business phone etiquette.",
    canDo:
      "Can answer the phone professionally, introduce yourself, ask to speak with someone, leave a callback number, and understand simple telephone notes.",
    teacherNote:
      "When answering the phone in a German company or home, state your name immediately! Answering with just 'Hallo?' is considered impolite or informal. In a company: 'Firma Schmidt, mein Name ist Weber, guten Tag!'. At home: 'Weber, hallo!'.",
    sections: [
      {
        title: "1. Redemittel am Telefon (Telephone Etiquette Phrase Bank)",
        description: "Essential phrases from initial greeting to saying goodbye:",
        table: {
          headers: [
            "Schritt (Step)",
            "Deutscher Ausdruck",
            "Bedeutung",
            "Mögliche Antwort",
          ],
          rows: [
            [
              "Sich melden (Answering)",
              "Firma TechSolutions, mein Name ist Meyer, guten Tag!",
              "Company TechSolutions, my name is Meyer, good day!",
              "Guten Tag, hier spricht Thomas Beck.",
            ],
            [
              "Gesprächspartner verlangen",
              "Kann ich bitte Frau Dr. Vogel sprechen?",
              "May I please speak with Dr. Vogel?",
              "Einen Moment bitte, ich verbinde Sie.",
            ],
            [
              "Nicht erreichbar sein",
              "Frau Vogel ist gerade in einer Besprechung.",
              "Ms. Vogel is currently in a meeting.",
              "Wann kann ich sie am besten erreichen?",
            ],
            [
              "Nachricht hinterlassen",
              "Kann ich ihr etwas ausrichten?",
              "Can I take a message for her?",
              "Ja, bitte. Könnte sie mich zurückrufen?",
            ],
            [
              "Telefonnummer angeben",
              "Meine Telefonnummer ist 0171 456 78 90.",
              "My phone number is...",
              "Ich habe die Nummer notiert.",
            ],
            [
              "Verabschiedung am Telefon",
              "Auf Wiederhören, Herr Beck!",
              "Goodbye (on the phone), Mr. Beck!",
              "Vielen Dank für Ihre Hilfe. Auf Wiederhören!",
            ],
          ],
        },
      },
      {
        title: "2. Telefonnotiz (Taking a Phone Note)",
        description: "Standard fields in a German office telephone memo:",
        items: [
          {
            term: "Anruf für:",
            meaning: "Call for (the recipient colleague)",
            example: "Anruf für: Frau Dr. Vogel",
          },
          {
            term: "Anrufer / Firma:",
            meaning: "Caller name and organization",
            example: "Herr Thomas Beck (Firma Klett)",
          },
          {
            term: "Datum & Uhrzeit:",
            meaning: "Date and time of the call",
            example: "06.09., 14:30 Uhr",
          },
          {
            term: "Bitte um Rückruf:",
            meaning: "Please call back under the specified number",
            example: "Bitte dringend zurückrufen: 0171-4567890",
          },
        ],
      },
    ],
    dialogue: {
      context: "Ein geschäftlicher Telefonanruf im Büro (Netzwerk A1):",
      lines: [
        {
          speaker: "Sekretariat",
          german: "Verlag Schneider & Partner, guten Tag! Mein Name ist Susanne Braun.",
          english: "Schneider & Partner Publishing, good day! My name is Susanne Braun.",
        },
        {
          speaker: "Herr Bauer",
          german: "Guten Tag, Frau Braun. Mein Name ist Bauer von der Druckerei Mainz. Kann ich bitte Herrn Schneider sprechen?",
          english: "Good day, Ms. Braun. My name is Bauer from Mainz Print Shop. Could I please speak with Mr. Schneider?",
        },
        {
          speaker: "Sekretariat",
          german: "Herr Schneider ist heute leider außer Haus. Kann ich ihm eine Nachricht hinterlassen?",
          english: "Mr. Schneider is unfortunately out of the office today. Can I leave a message for him?",
        },
        {
          speaker: "Herr Bauer",
          german: "Ja, gern. Es geht um das neue Lehrbuch. Er soll mich bitte heute noch zurückrufen.",
          english: "Yes, gladly. It's regarding the new textbook. Could he please call me back today?",
        },
        {
          speaker: "Sekretariat",
          german: "Sehr gern, Herr Bauer. Wie ist Ihre direkte Durchwahl?",
          english: "Very gladly, Mr. Bauer. What is your direct extension?",
        },
        {
          speaker: "Herr Bauer",
          german: "Das ist die 06131 88 44 20. Vielen Dank für Ihre Hilfe!",
          english: "That is 06131 88 44 20. Thank you very much for your help!",
        },
        {
          speaker: "Sekretariat",
          german: "Gern geschehen. Ich richte es ihm sofort aus. Auf Wiederhören!",
          english: "You're welcome. I'll pass it on immediately. Goodbye!",
        },
      ],
    },
    funFact: {
      title: "'Auf Wiedersehen' vs. 'Auf Wiederhören'",
      content:
        "German has a dedicated farewell specifically for the phone! While 'Auf Wiedersehen' literally means 'until we SEE each other again' (face-to-face), when speaking on the phone you say: 'Auf Wiederhören' (until we HEAR each other again!). Using this is a hallmark of good German etiquette.",
    },
    practice: [
      {
        question: "What is the proper polite farewell when finishing a telephone conversation?",
        options: [
          "Auf Wiedersehen!",
          "Auf Wiederhören!",
          "Gute Nacht!",
          "Bis gestern!",
        ],
        answer: "Auf Wiederhören!",
        explanation:
          "On the telephone, Germans say 'Auf Wiederhören' because you are hearing each other, not seeing each other.",
      },
      {
        question: "How do you state your identity when answering a phone call in German?",
        options: [
          "Ich bin Susanne Braun.",
          "Hier spricht Susanne Braun.",
          "Wer da ist?",
          "Ich habe Susanne Braun.",
        ],
        answer: "Hier spricht Susanne Braun.",
        explanation:
          "'Hier spricht [Name]' (Here speaks [Name]) or '[Nachname], guten Tag' is the standard polite telephone self-identification in German.",
      },
      {
        question: "What does 'Herr Weber ist außer Haus' mean?",
        options: [
          "Mr. Weber is at home.",
          "Mr. Weber is currently out of the office / away.",
          "Mr. Weber has bought a house.",
          "Mr. Weber is on the roof.",
        ],
        answer: "Mr. Weber is currently out of the office / away.",
        explanation:
          "'Außer Haus' is a standard business idiom meaning 'out of the office' or 'away on business'.",
      },
    ],
  },
};
