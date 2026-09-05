import { LessonContent } from "../../types/course.types";

export const CHAPTER_10_LESSONS: Record<string, LessonContent> = {
  "a1-ch10-l44": {
    overview:
      "Answering the phone, leaving a brief voicemail, and texting friends in German involves standard cultural conventions that differ significantly from English.",
    canDo:
      "Can answer a telephone formally and informally, state who is speaking, leave a callback request, and read basic German SMS/WhatsApp abbreviations.",
    teacherNote:
      "In Germany, when picking up the phone, never just say 'Hallo?'. You immediately state your family name: 'Schmidt, guten Tag!' or 'Hier ist Thomas'. Answering without your name sounds unprofessional to Germans.",
    sections: [
      {
        title: "1. Phone Call Etiquette & Key Formulas",
        description: "Standard German telephone exchanges:",
        table: {
          headers: ["Call Stage", "German Phrase", "English Meaning", "Context"],
          rows: [
            ["Answering (Formal)", "[Nachname], guten Tag!", "Schmidt, good day!", "Standard professional opening"],
            ["Answering (Informal)", "Hallo, hier ist [Vorname].", "Hello, here is [First Name].", "Calling friends"],
            ["Connecting", "Kann ich bitte Herrn Braun sprechen?", "May I speak to Mr. Braun, please?", "Asking for someone"],
            ["Availability", "Er ist im Moment nicht da.", "He is not there at the moment.", "Unavailable"],
            ["Message", "Kann ich eine Nachricht hinterlassen?", "Can I leave a message?", "Leaving a note"],
            ["Callback request", "Können Sie mich bitte zurückrufen?", "Could you please call me back?", "Requesting callback"],
            ["Farewell", "Auf Wiederhören!", "Goodbye (telephone only)!", "Formal sign-off"],
          ],
        },
      },
      {
        title: "2. Common Text & Chat Phrases (SMS / WhatsApp)",
        description: "Everyday shorthand used in German texting:",
        items: [
          {
            term: "LG = Liebe Grüße",
            meaning: "Kind regards (most popular friendly sign-off)",
            example: "Bis morgen! LG, Anna",
          },
          {
            term: "VG = Viele Grüße",
            meaning: "Many regards (friendly/semi-formal)",
            example: "Danke für die Info! VG, Michael",
          },
          {
            term: "Gleich da! / Bin unterwegs!",
            meaning: "Almost there! / On my way!",
            example: "Entschuldigung, Bus hatte Verspätung, bin gleich da!",
          },
        ],
      },
    ],
    dialogue: {
      context: "Calling an office to inquire about a German language course schedule:",
      lines: [
        {
          speaker: "Sprachschule",
          german: "Sprachschule Lingua, Becker, guten Tag!",
          english: "Lingua Language School, Becker speaking, good day!",
        },
        {
          speaker: "Anrufer",
          german: "Guten Tag, mein Name ist David Miller. Ich habe eine Frage zum A1-Kurs.",
          english: "Good day, my name is David Miller. I have a question about the A1 course.",
        },
        {
          speaker: "Sprachschule",
          german: "Sehr gerne, Herr Miller. Frau Sommer leitet den Kurs. Einen kleinen Moment, ich verbinde Sie.",
          english: "Very gladly, Mr. Miller. Ms. Sommer runs the course. Just a moment, I'll connect you.",
        },
      ],
    },
    funFact: {
      title: "The German Office Lunch Greeting: 'Mahlzeit!'",
      content:
        "If you walk through any German office, university, or workshop hallway between 11:30 and 13:30, coworkers will greet you with a single cheerful word: **'Mahlzeit!'** (literally: 'mealtime'). It serves simultaneously as hello, enjoy your lunch, and have a good break!",
    },
    practice: [
      {
        question: "When answering the phone in a German company, what do you say first?",
        options: ["Was gibt's?", "Hallo, wer ist da?", "Your last name + 'guten Tag'"],
        answer: "Your last name + 'guten Tag'",
        explanation: "German professional etiquette dictates stating your last name immediately upon answering.",
      },
    ],
  },

  "a1-ch10-l45": {
    overview:
      "Writing short emails and letters is tested directly in Part 2 of the Goethe-Zertifikat A1 writing exam (*Schreiben Teil 2*). Mastering formal and informal salutations and closings guarantees you high marks.",
    canDo:
      "Can structure and write a simple formal or informal email with correct opening salutations, clear communicative body, and polite closing formulas.",
    teacherNote:
      "⚠️ Grammatical trap in German letters: After the salutation comma (e.g. *Liebe Anna,* or *Sehr geehrte Frau Müller,*), you DO NOT capitalize the next word! The first word of your letter body begins with a **lowercase letter** unless it is a noun!",
    sections: [
      {
        title: "1. Formal vs. Informal Letter Layout",
        description: "Match the salutation to the recipient:",
        table: {
          headers: ["Element", "Formal Correspondence (Boss, Landlord, Office)", "Informal Correspondence (Friend, Classmate)"],
          rows: [
            ["Salutation (Male)", "Sehr geehrter Herr [Nachname],", "Lieber [Vorname],"],
            ["Salutation (Female)", "Sehr geehrte Frau [Nachname],", "Liebe [Vorname],"],
            ["Salutation (Unknown)", "Sehr geehrte Damen und Herren,", "Hallo zusammen! / Liebe Freunde,"],
            ["Starting line", "ich schreibe Ihnen, weil...", "wie geht es dir? Ich schreibe dir, weil..."],
            ["Sign-off (Closing)", "Mit freundlichen Grüßen", "Herzliche Grüße / Viele Grüße / Dein(e)..."],
          ],
        },
      },
      {
        title: "2. Sample Goethe A1 Writing Model",
        description: "Study this model for an official exam writing prompt:",
        items: [
          {
            term: "Prompt",
            meaning: "Write an email to your German teacher, Frau Berg. Say you are sick and cannot come to class today.",
            example: "See sample email below.",
          },
          {
            term: "Model Answer",
            meaning: "Sehr geehrte Frau Berg,\n\nich kann heute leider nicht zum Deutschkurs kommen, weil ich krank bin. Ich habe Fieber. Können Sie mir bitte die Hausaufgaben per E-Mail schicken?\n\nVielen Dank und mit freundlichen Grüßen,\nDavid Miller",
            example: "30 words, complete sentences, covers all 3 prompt points!",
          },
        ],
      },
    ],
    dialogue: {
      context: "A learner reviewing an email draft with their study buddy:",
      lines: [
        {
          speaker: "Lukas",
          german: "Hast du den Brief an die Hausverwaltung schon geschrieben?",
          english: "Have you already written the letter to the property management?",
        },
        {
          speaker: "Elena",
          german: "Ja, ich habe geschrieben: 'Sehr geehrte Damen und Herren, die Heizung in meiner Wohnung ist kaputt.'",
          english: "Yes, I wrote: 'Dear Sir or Madam, the heating in my apartment is broken.'",
        },
        {
          speaker: "Lukas",
          german: "Sehr gut! Hast du mit 'Mit freundlichen Grüßen' beendet?",
          english: "Very good! Did you conclude with 'Mit freundlichen Grüßen'?",
        },
        {
          speaker: "Elena",
          german: "Ja, genau. Jetzt schicke ich die E-Mail ab.",
          english: "Yes, exactly. Now I'll send off the email.",
        },
      ],
    },
    funFact: {
      title: "Never Abbreviate 'Mit freundlichen Grüßen' in Official Letters!",
      content:
        "While Germans casually text 'MfG' on internal instant messengers, writing 'MfG' on a formal letter, job application, or email to a landlord is considered sloppy and disrespectful. Always spell out the full phrase: **'Mit freundlichen Grüßen'**!",
    },
    practice: [
      {
        question: "How should you address an unknown official or customer service team formally?",
        options: ["Hallo Leute,", "Sehr geehrte Damen und Herren,", "Lieber Herr und Frau,"],
        answer: "Sehr geehrte Damen und Herren,",
        explanation: "'Sehr geehrte Damen und Herren,' is the universal German formal opening when names are unknown.",
      },
    ],
  },

  "a1-ch10-l46": {
    overview:
      "Social life revolves around inviting people over, accepting or declining invitations politely, and agreeing on suitable times to meet.",
    canDo:
      "Can invite someone to a party or event, express acceptance or polite regret, and propose alternative dates and times.",
    teacherNote:
      "When declining an invitation in German, always give a short polite reason: *'Es tut mir leid, ich kann leider nicht kommen, weil ich arbeiten muss'* (I'm sorry, I unfortunately can't come because I have to work). Adding 'leider' (unfortunately) makes any refusal gracious.",
    sections: [
      {
        title: "1. The Invitation Toolbox",
        description: "Formulas for extending, accepting, and declining invitations:",
        table: {
          headers: ["Goal", "German Expression", "English Meaning", "Response Option"],
          rows: [
            ["Invite", "Ich lade dich herzlich zu meiner Party ein!", "I cordially invite you to my party!", "Gerne! Ich komme sehr gerne."],
            ["Propose date", "Hast du am Samstag Zeit?", "Do you have time on Saturday?", "Ja, am Samstag passt es mir gut."],
            ["Propose activity", "Wollen wir zusammen ins Kino gehen?", "Shall we go to the movies together?", "Tolle Idee! Welcher Film?"],
            ["Accept", "Vielen Dank für die Einladung! Ich freue mich.", "Thanks for the invitation! I look forward to it.", "Super, bis dann!"],
            ["Decline politely", "Es tut mir leid, aber ich habe leider keine Zeit.", "I'm sorry, but unfortunately I don't have time.", "Schade, vielleicht nächstes Mal."],
            ["Reschedule", "Geht es vielleicht am Sonntag um 15 Uhr?", "Is Sunday at 3 PM possible perhaps?", "Ja, das passt perfekt."],
          ],
        },
      },
    ],
    dialogue: {
      context: "Inviting a friend to a birthday celebration in Cologne:",
      lines: [
        {
          speaker: "Markus",
          german: "Hallo Leon! Ich habe am Freitag Geburtstag und mache eine kleine Party. Hast du Zeit?",
          english: "Hello Leon! It's my birthday on Friday and I'm having a small party. Do you have time?",
        },
        {
          speaker: "Leon",
          german: "Herzlichen Glückwunsch schon mal! Am Freitag arbeite ich bis 20 Uhr, aber danach komme ich gerne vorbei.",
          english: "Happy birthday in advance! On Friday I work until 8 PM, but after that I'd love to drop by.",
        },
        {
          speaker: "Markus",
          german: "Perfekt! Bring einfach gute Laune mit!",
          english: "Perfect! Just bring a good mood along!",
        },
      ],
    },
    funFact: {
      title: "Never Congratulate Before the Actual Birthday!",
      content:
        "In German culture, wishing someone a happy birthday BEFORE the actual day (*Vorfeiern* / *vorzeitig gratulieren*) is considered very bad luck! Even if you see a friend the day before, wait until midnight or the exact date to say: **'Herzlichen Glückwunsch zum Geburtstag!'**",
    },
    practice: [
      {
        question: "How do you politely decline an invitation because you have to work?",
        options: ["Ich will nicht kommen.", "Ich kann leider nicht kommen, ich muss arbeiten.", "Komm nicht."],
        answer: "Ich kann leider nicht kommen, ich muss arbeiten.",
        explanation: "Using 'leider' (unfortunately) creates a respectful, polite decline.",
      },
    ],
  },

  "a1-ch10-l47": {
    overview:
      "Herzlichen Glückwunsch! You have arrived at the capstone lesson of German Level A1. In this module, we conduct a full review of all 10 chapters and walk through the exact structure of the official Goethe-Zertifikat A1 / telc Deutsch A1 exam.",
    canDo:
      "Can demonstrate comprehensive A1 mastery across all 4 CEFR competencies: Hören (Listening), Lesen (Reading), Schreiben (Writing), and Sprechen (Speaking), and successfully pass the A1 exam simulation.",
    teacherNote:
      "Take a moment to be proud of how far you have come! From learning the alphabet and Umlauts in Chapter 1, you now understand German sentence architecture, the Accusative and Dative cases, modal verbs, everyday transit, dining, and writing correspondence. You are fully ready for the Goethe-Zertifikat A1!",
    sections: [
      {
        title: "1. The 4 Components of the Goethe / TELC A1 Exam",
        description: "Breakdown of the official 60-point exam:",
        table: {
          headers: ["Exam Section", "Duration", "Points", "What is Tested"],
          rows: [
            ["1. Hören (Listening)", "20 mins", "15 pts (25%)", "Short everyday announcements, phone messages, public transit voice broadcasts."],
            ["2. Lesen (Reading)", "25 mins", "15 pts (25%)", "Short emails, classified ads, notice boards, signs in public buildings."],
            ["3. Schreiben (Writing)", "20 mins", "15 pts (25%)", "Part 1: Fill out a personal registration form. Part 2: Write a short 30-word email."],
            ["4. Sprechen (Speaking)", "15 mins", "15 pts (25%)", "Part 1: Self-introduction. Part 2: Asking and answering with flashcards. Part 3: Formulating requests with objects."],
          ],
        },
      },
      {
        title: "2. The Golden Rules for Passing Start Deutsch 1",
        description: "Essential tips to maximize your score on exam day:",
        items: [
          {
            term: "Pass Mark",
            meaning: "You need 60% overall (36 out of 60 points) to earn your official Goethe-Zertifikat A1.",
            example: "Recognized worldwide for visa applications, study prep, and employment.",
          },
          {
            term: "Speaking Part 1 Formula",
            meaning: "Memorize your personal card points: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby.",
            example: "Practice spelling your last name and reciting your phone number smoothly.",
          },
          {
            term: "Word Order Anchor",
            meaning: "Always keep your conjugated verb in Position 2 in statements, Position 1 in yes/no questions, and at the end with modal verbs!",
            example: "Grammar accuracy on verb placement earns top marks in writing.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Celebration after completing the final A1 speaking examination:",
      lines: [
        {
          speaker: "Prüfer (Examiner)",
          german: "Herzlichen Glückwunsch! Sie haben die A1-Prüfung erfolgreich bestanden.",
          english: "Congratulations! You have successfully passed the A1 examination.",
        },
        {
          speaker: "Kandidat",
          german: "Vielen herzlichen Dank! Das freut mich wirklich sehr.",
          english: "Thank you very much! That truly makes me very happy.",
        },
        {
          speaker: "Prüfer",
          german: "Ihr Deutsch ist schon sehr gut. Viel Erfolg beim Weiterlernen auf Level A2!",
          english: "Your German is already very good. Much success in continuing your studies on Level A2!",
        },
      ],
    },
    funFact: {
      title: "The CEFR Journey: From A1 to C2",
      content:
        "Passing Level A1 is the monumental first milestone on the Common European Framework of Reference for Languages (CEFR). With these 47 lessons and 10 chapters, you have built the permanent grammar skeleton and active vocabulary that will power your journey through A2, B1, and beyond into fluent German!",
    },
    practice: [
      {
        question: "What overall percentage is required to pass the official Goethe-Zertifikat A1 exam?",
        options: ["50%", "60%", "75%"],
        answer: "60%",
        explanation: "A score of 60% (36 out of 60 points) is the official passing grade for the Goethe-Zertifikat A1.",
      },
      {
        question: "Which of the following is true regarding verb placement in standard German main clauses?",
        options: ["The verb always goes at the beginning.", "The conjugated verb is always in Position 2.", "The verb is placed randomly."],
        answer: "The conjugated verb is always in Position 2.",
        explanation: "The conjugated verb's fixed anchor in Position 2 (Verbzweitstellung) is the fundamental rule of German syntax.",
      },
    ],
  },
};
