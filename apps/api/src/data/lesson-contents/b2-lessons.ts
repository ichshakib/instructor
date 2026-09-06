import { LessonContent } from "../../types/course.types";

export const B2_LESSONS_CONTENT: Record<string, LessonContent> = {
  // B2 Chapter 1 Lesson 1: Konjunktiv II der Gegenwart
  "b2-ch1-l1": {
    overview:
      "The Subjunctive II (Der Konjunktiv II) is the hallmark of sophisticated, diplomatic, and polite German. It is used to express hypothetical scenarios, unreal wishes ('If I only had...'), polite advice ('You should...'), and diplomatic requests ('Could you please...'). In modern German, you form Konjunktiv II either with the auxiliary 'würde + Infinitiv' or using authentic irregular subjunctive stems (wäre, hätte, könnte, müsste, wüsste).",
    canDo:
      "Can articulate diplomatic suggestions, hypothetical conditions, polite business requests, and unreal wishes with precision.",
    teacherNote:
      "Never use 'würde sein' or 'würde haben'! Native German speakers and professional contexts strictly require 'wäre' (from sein) and 'hätte' (from haben). Similarly, modal verbs always use their dedicated umlauted forms: könnte (not würde können), müsste (not würde müssen), dürfte (not würde dürfen).",
    sections: [
      {
        title: "1. The 5 Indispensable Irregular Konjunktiv II Stems",
        description:
          "These verbs are almost never used with 'würde'; learn their direct subjunctive forms:",
        table: {
          headers: ["Infinitiv", "ich / er / sie / es", "du", "wir / sie / Sie", "ihr"],
          rows: [
            ["sein (would be)", "wäre", "wärest / wärst", "wären", "wäret / wärt"],
            ["haben (would have)", "hätte", "hättest", "hätten", "hättet"],
            ["können (could / be able to)", "könnte", "könntest", "könnten", "könntet"],
            ["müssen (would have to)", "müsste", "müsstest", "müssten", "müsstet"],
            ["wissen (would know)", "wüsste", "wüsstest", "wüssten", "wüsstet"],
          ],
        },
      },
      {
        title: "2. The 'würde + Infinitiv' Pattern for Most Other Verbs",
        description:
          "For regular and most strong action verbs, modern German uses 'würde' + Infinitiv at the end of the clause:",
        items: [
          {
            term: "Polite Request (Höfliche Bitte)",
            pronunciation: "[Würden Sie mir bitte den Bericht weiterleiten?]",
            meaning: "Would you please forward the report to me?",
            example: "Diplomatic alternative to imperative 'Leiten Sie mir den Bericht weiter!'",
          },
          {
            term: "Unreal Conditional (Irrealer Konditionalsatz)",
            pronunciation: "[Wenn ich mehr Zeit hätte, würde ich jeden Tag Sport treiben.]",
            meaning: "If I had more time, I would exercise every day.",
            example: "Subordinate clause with 'hätte' (end); main clause begins with 'würde'.",
          },
          {
            term: "Giving Tactful Advice (Ratschläge erteilen)",
            pronunciation: "[An deiner Stelle würde ich noch einmal mit dem Chef sprechen.]",
            meaning: "In your place, I would speak with the boss once more.",
            example: "Standard B2 conversational phrase for tactful guidance.",
          },
        ],
      },
    ],
    dialogue: {
      context: "During a project alignment meeting, product manager Tanja and senior architect Sven discuss rescheduling a release.",
      lines: [
        {
          speaker: "Tanja",
          german: "Sven, wäre es denkbar, dass wir den Software-Release um zwei Wochen verschieben?",
          english: "Sven, would it be conceivable for us to postpone the software release by two weeks?",
        },
        {
          speaker: "Sven",
          german: "Das wäre technisch durchaus sinnvoll. Dann könnten wir alle Sicherheitsüberprüfungen gründlicher durchführen.",
          english: "That would certainly make technical sense. Then we could conduct all security audits more thoroughly.",
        },
        {
          speaker: "Tanja",
          german: "Könntest du mir bis morgen einen überarbeiteten Meilensteinplan zusammenstellen?",
          english: "Could you put together a revised milestone schedule for me by tomorrow?",
        },
        {
          speaker: "Sven",
          german: "Gerne. Ich würde auch vorschlagen, dass wir das Feedback der Pilotkunden gleich mit einbeziehen.",
          english: "Gladly. I would also suggest that we directly incorporate the pilot clients' feedback as well.",
        },
        {
          speaker: "Tanja",
          german: "Hervorragend. Wenn wir so vorgehen, hätten wir das beste Ergebnis für das gesamte Team.",
          english: "Outstanding. If we proceed this way, we would have the best outcome for the entire team.",
        },
      ],
    },
    funFact: {
      title: "Why German Business Relies on Konjunktiv II",
      content:
        "In German corporate culture, direct orders ('Machen Sie das!') are perceived as aggressive unless between emergency services. Using Konjunktiv II ('Könnten Sie bitte...', 'Es wäre vorteilhaft, wenn...') demonstrates respect, emotional intelligence, and professional tact.",
    },
  },

  // B2 Chapter 1 Lesson 2: Past Hypotheticals (Konjunktiv II der Vergangenheit)
  "b2-ch1-l2": {
    overview:
      "When expressing past regrets, missed opportunities, or counterfactual history ('If only I had known!', 'He would have come if...'), German uses the Konjunktiv II of the past (Irreale Vergangenheit). The formula is elegant and uniform: conjugated 'wäre' or 'hätte' + Partizip II at the end of the clause.",
    canDo:
      "Can analyze past events, evaluate alternatives, express constructive regrets, and articulate counterfactual hypotheses in professional contexts.",
    teacherNote:
      "The choice of auxiliary ('wäre' vs. 'hätte') follows the exact same rule as the Perfekt! Movement or change of state takes 'wäre' ('Ich wäre gekommen'), while transitive or state-holding verbs take 'hätte' ('Ich hätte angerufen').",
    sections: [
      {
        title: "1. Formula for Past Counterfactuals (Irreale Vergangenheit)",
        description:
          "Form: Subjekt + wäre / hätte (Position 2) + ... + Partizip II (Satzende):",
        table: {
          headers: ["Real Event (Fakt in Vergangenheit)", "Counterfactual (Konjunktiv II der Vergangenheit)", "English Translation"],
          rows: [
            ["Ich habe den Wecker nicht gehört.", "Hätte ich den Wecker gehört, wäre ich pünktlich gewesen.", "Had I heard the alarm, I would have been on time."],
            ["Der Zug hatte Verspätung.", "Wäre der Zug pünktlich gewesen, hätten wir den Flug erreicht.", "Had the train been on time, we would have caught the flight."],
            ["Sie hat uns nicht gewarnt.", "Hätte sie uns gewarnt, hätten wir den Fehler vermieden.", "Had she warned us, we would have avoided the mistake."],
            ["Wir haben das Haus nicht gekauft.", "Wir hätten das Haus damals kaufen sollen.", "We should have bought the house back then."],
          ],
        },
      },
      {
        title: "2. Counterfactual Wishes with 'Fast' and 'Beinahe'",
        description:
          "To describe near-accidents or events that almost happened:",
        items: [
          {
            term: "fast / beinahe + Konjunktiv II",
            pronunciation: "[FAHST / by-NAH-he]",
            meaning: "almost / nearly occurred",
            example: "Ich wäre auf dem Glatteis fast ausgerutscht! (I almost slipped on the black ice!)",
          },
          {
            term: "Hätte ich doch nur...",
            pronunciation: "[HET-te ikh dokh noor]",
            meaning: "If only I had...",
            example: "Hätte ich doch nur auf deinen Rat gehört! (If only I had listened to your advice!)",
          },
        ],
      },
    ],
    dialogue: {
      context: "Financial analysts Simon and Claudia conduct a post-mortem review on an investment decision in Frankfurt.",
      lines: [
        {
          speaker: "Simon",
          german: "Claudia, wenn wir die Marktdaten im dritten Quartal genauer analysiert hätten, hätten wir den Kurseinbruch vorhersehen können.",
          english: "Claudia, if we had analyzed the market data in Q3 more precisely, we could have anticipated the market slump.",
        },
        {
          speaker: "Claudia",
          german: "Richtig. Hätten wir früher diversifiziert, wären unsere Verluste im Portfolio deutlich geringer ausgefallen.",
          english: "Right. Had we diversified earlier, our portfolio losses would have turned out significantly lower.",
        },
        {
          speaker: "Simon",
          german: "Was hätten wir deiner Meinung nach anders machen sollen?",
          english: "What should we have done differently in your opinion?",
        },
        {
          speaker: "Claudia",
          german: "Wir hätten das Risikomanagement-Team früher hinzuziehen müssen, anstatt uns allein auf historische Trends zu verlassen.",
          english: "We should have consulted the risk management team earlier instead of relying solely on historical trends.",
        },
      ],
    },
    funFact: {
      title: "Dropping 'Wenn' in German Hypothetical Clauses",
      content:
        "In German, you can drop the conjunction 'wenn' entirely by placing the verb 'hätte' or 'wäre' in Position 1: 'Hätte ich Zeit...' is identical in meaning to 'Wenn ich Zeit hätte...'. It mirrors the literary English 'Had I known...' and sounds exceptionally elegant in B2/C1 discourse.",
    },
  },

  // B2 Chapter 2 Lesson 3: Formal Business Emails & Professional German
  "b2-ch2-l3": {
    overview:
      "German business correspondence (Berufssprache / Geschäftskorrespondenz) is governed by rigorous etiquette, precise salutations, formal complimentary closes, and distinct functional phrasing (Redemittel). Mastering this register is mandatory for passing Goethe B2, telc B2 Beruf, and working in German-speaking enterprises.",
    canDo:
      "Can compose professional business inquiries, formal complaints, meeting follow-ups, and negotiation emails adhering to German business conventions.",
    teacherNote:
      "Notice the capitalization rule: in German correspondence, when addressing someone with 'Sie', 'Ihnen', or 'Ihr', ALL associated pronouns and possessives MUST be capitalized! Furthermore, in German emails, the line after the salutation starts with a LOWERCASE letter because the salutation ends with a comma!",
    sections: [
      {
        title: "1. Salutations & Closings in German Business Letters",
        description:
          "Standard formal formulas for opening and concluding written correspondence:",
        table: {
          headers: ["Situation", "Anrede (Salutation)", "Grußformel (Closing)"],
          rows: [
            ["Recipient unknown", "Sehr geehrte Damen und Herren,", "Mit freundlichen Grüßen"],
            ["Formal to a male contact", "Sehr geehrter Herr Dr. Müller,", "Mit freundlichen Grüßen"],
            ["Formal to a female contact", "Sehr geehrte Frau Schmidt,", "Mit freundlichen Grüßen"],
            ["Established professional contact", "Guten Tag, Herr Weber, / Liebe Frau Meier,", "Herzliche Grüße / Beste Grüße"],
          ],
        },
      },
      {
        title: "2. Key Business Email Formulas (Geschäftliche Redemittel)",
        description:
          "Essential phrases used by German professionals daily:",
        items: [
          {
            term: "Bezugnahme (Referring to previous contact)",
            pronunciation: "[Ich beziehe mich auf unser Telefonat vom...]",
            meaning: "I refer to our phone conversation from [date]...",
            example: "Bezug nehmend auf Ihre Anfrage vom 12. Mai senden wir Ihnen unser Angebot.",
          },
          {
            term: "Anhang (Referring to attachments)",
            pronunciation: "[Im Anhang finden Sie...]",
            meaning: "In the attachment you will find...",
            example: "Im Anhang finden Sie den überarbeiteten Kostenplan sowie das Protokoll.",
          },
          {
            term: "Rückfragen (Inviting questions)",
            pronunciation: "[Für Rückfragen stehe ich Ihnen gerne zur Verfügung.]",
            meaning: "For any further questions, I remain gladly at your disposal.",
            example: "Sollten Sie noch Rückfragen haben, zögern Sie bitte nicht, mich zu kontaktieren.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Key account manager Katharina drafts a formal contract proposal email and reviews it with her team director Herr Dr. Lindner.",
      lines: [
        {
          speaker: "Katharina",
          german: "Herr Dr. Lindner, ich habe das offizielle Angebot für die Siemens AG fertiggestellt.",
          english: "Dr. Lindner, I have finalized the official quotation for Siemens AG.",
        },
        {
          speaker: "Dr. Lindner",
          german: "Sehr gut, Frau König. Haben Sie die Zahlungsmodalitäten und Lieferfristen präzise aufgeführt?",
          english: "Very good, Ms. König. Did you list the payment terms and delivery deadlines precisely?",
        },
        {
          speaker: "Katharina",
          german: "Ja, im Anschreiben beziehe ich mich auf die Vereinbarungen der Vorstandssitzung und verweise auf die Anhänge.",
          english: "Yes, in the cover letter I reference the agreements from the board meeting and point to the attachments.",
        },
        {
          speaker: "Dr. Lindner",
          german: "Ausgezeichnet. Bitte formulieren Sie die Abschlussklausel verbindlich und bitten Sie um Bestätigung bis zum Monatsende.",
          english: "Excellent. Please formulate the closing clause bindingly and request confirmation by the end of the month.",
        },
      ],
    },
    funFact: {
      title: "German Punctuation in Emails: The Lowercase Opener",
      content:
        "English speakers opening an email write: 'Dear Mr. Smith,\nI am writing to...'. Notice the capital 'I'. In German, because the salutation ends with a comma, the next line is grammatically a continuation of the sentence: 'Sehr geehrte Damen und Herren,\nich beziehe mich auf...' – starting with a lowercase 'ich'!",
    },
  },

  // B2 Chapter 2 Lesson 4: Fixed Preposition-Verb Combinations
  "b2-ch2-l4": {
    overview:
      "One of the decisive criteria separating beginner German from upper-intermediate fluency is mastering verbs with fixed prepositions (Verben mit festen Präpositionen). In German, verbs like 'warten' (to wait) do not take arbitrary prepositions; 'warten' strictly pairs with 'auf + Akkusativ'. Additionally, questions and references to things require pronominal adverbs (Da- und Wo-Komposita: worauf / darauf, wovon / davon).",
    canDo:
      "Can accurately employ fixed preposition-verb pairings and construct Da-/Wo-compounds in complex discussions and negotiations.",
    teacherNote:
      "Remember the golden rule for people vs. things: When referring to THINGS, use 'da(r)- + Preposition' (darauf, daran, dafür). When referring to PEOPLE, use the preposition + pronoun (auf ihn, an sie, für uns)!",
    sections: [
      {
        title: "1. The Most Important Verbs with Fixed Prepositions",
        description:
          "Study these essential combinations and their respective required cases:",
        table: {
          headers: ["Verb + Präposition", "Kasus", "English Meaning", "Example Sentence"],
          rows: [
            ["warten auf", "Akkusativ", "to wait for", "Wir warten seit 20 Minuten auf den Bus."],
            ["sich interessieren für", "Akkusativ", "to be interested in", "Er interessiert sich sehr für künstliche Intelligenz."],
            ["sich freuen auf", "Akkusativ", "to look forward to (future)", "Ich freue mich auf den Sommerurlaub."],
            ["sich freuen über", "Akkusativ", "to be glad about (present/past)", "Sie hat sich sehr über das Geschenk gefreut."],
            ["abhängen von", "Dativ", "to depend on", "Der Erfolg hängt vom Engagement des Teams ab."],
            ["sich beschäftigen mit", "Dativ", "to deal with / engage in", "Wir beschäftigen uns mit der neuen Datenschutzrichtlinie."],
            ["achten auf", "Akkusativ", "to pay attention to", "Bitte achten Sie auf die Durchsagen am Bahnsteig."],
            ["zweifeln an", "Dativ", "to doubt", "Niemand zweifelt an seinen Fähigkeiten."],
          ],
        },
      },
      {
        title: "2. Da- and Wo-Compounds (Pronominaladverbien)",
        description:
          "When asking about things or pointing back to a concept or clause:",
        items: [
          {
            term: "worauf? vs. woran? (Questions for Things)",
            pronunciation: "[VO-rouf / vo-RAHN]",
            meaning: "what... for? / what... about?",
            example: "Worauf wartest du? – Auf den Feierabend! (What are you waiting for? – For closing time!)",
          },
          {
            term: "darauf vs. daran (Pronouns for Things)",
            pronunciation: "[da-ROUF / da-RAHN]",
            meaning: "for it / at it / about it",
            example: "Ich habe nicht daran gedacht. (I didn't think about it.)",
          },
          {
            term: "Contrast with People: Auf wen? vs. Worauf?",
            pronunciation: "[OUF VEN vs. VO-ROUF]",
            meaning: "Whom are you waiting for? vs. What are you waiting for?",
            example: "Auf wen wartest du? – Auf Peter! (Person: Prep + Acc pronoun).",
          },
        ],
      },
    ],
    dialogue: {
      context: "Two university students, Charlotte and Leon, discuss their thesis topics and professors in Munich.",
      lines: [
        {
          speaker: "Charlotte",
          german: "Leon, wovon hängt die Genehmigung deines Masterarbeits-Exposés ab?",
          english: "Leon, what does the approval of your master's thesis proposal depend on?",
        },
        {
          speaker: "Leon",
          german: "Das hängt hauptsächlich von der Machbarkeit der empirischen Studie ab.",
          english: "That depends primarily on the feasibility of the empirical study.",
        },
        {
          speaker: "Charlotte",
          german: "Hast du schon mit Professor Dr. Hartmann darüber gesprochen?",
          english: "Have you already spoken with Professor Hartmann about it?",
        },
        {
          speaker: "Leon",
          german: "Ja, ich habe gestern mit ihm diskutiert. Er achtet besonders auf die Methodik.",
          english: "Yes, I discussed it with him yesterday. He pays particular attention to the methodology.",
        },
        {
          speaker: "Charlotte",
          german: "Klingt anspruchsvoll. Aber ich zweifle nicht daran, dass du das hervorragend meisterst!",
          english: "Sounds demanding. But I don't doubt that you will master it outstandingly!",
        },
      ],
    },
    funFact: {
      title: "The Euphonic 'r' in 'darauf' and 'worauf'",
      content:
        "Ever wondered why it is 'daran' instead of 'da-an'? When the preposition begins with a vowel (an, auf, in, über, unter), German inserts an acoustic bridge 'r' to prevent vowel collision: da + r + auf = darauf; wo + r + an = woran. If the preposition begins with a consonant, no 'r' is added: da + von = davon.",
    },
  },
};
