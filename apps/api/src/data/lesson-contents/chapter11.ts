import { LessonContent } from "../../types/course.types";

export const CHAPTER_11_LESSONS: Record<string, LessonContent> = {
  "a1-ch11-l48": {
    overview:
      "Knowing the names of body parts (Körperteile) in German is essential for describing physical fitness, visiting the doctor, and explaining where it hurts. In this lesson from Netzwerk A1 Kapitel 11 ('Gesund und munter'), you will learn human anatomy with articles, plural forms, and the core pain expressions 'tut weh' (singular) and 'tun weh' (plural).",
    canDo:
      "Can name human body parts with correct grammatical genders and plurals, and state which body part hurts using 'Mein Kopf tut weh' or 'Meine Beine tun weh'.",
    teacherNote:
      "Pay attention to the difference between singular and plural pain: For ONE body part, use singular: 'Mein Kopf tut weh' (My head hurts). For MULTIPLE body parts (e.g., eyes, ears, legs), use plural: 'Meine Augen tun weh' (My eyes hurt). 'wehtun' is a separable verb: 'tut ... weh'!",
    sections: [
      {
        title: "1. Die Körperteile (Human Body Parts & Plurals)",
        description: "Standard body parts categorized by gender with plural forms:",
        table: {
          headers: [
            "Artikel & Nomen",
            "Pluralform",
            "Englische Bedeutung",
            "Beispielsatz mit Schmerzen",
          ],
          rows: [
            [
              "der Kopf",
              "die Köpfe",
              "head",
              "Mein Kopf tut weh.",
            ],
            [
              "das Auge",
              "die Augen",
              "eye",
              "Meine Augen tun weh.",
            ],
            [
              "das Ohr",
              "die Ohren",
              "ear",
              "Mein linkes Ohr tut weh.",
            ],
            [
              "die Nase",
              "die Nasen",
              "nose",
              "Meine Nase läuft.",
            ],
            [
              "der Mund / die Zähne",
              "der Zahn / die Zähne",
              "mouth / teeth",
              "Mein Zahn tut weh.",
            ],
            [
              "der Hals",
              "die Hälse",
              "throat / neck",
              "Mein Hals ist rot und tut weh.",
            ],
            [
              "der Rücken",
              "die Rücken",
              "back",
              "Mein Rücken tut vom Sitzen weh.",
            ],
            [
              "der Bauch",
              "die Bäuche",
              "stomach / belly",
              "Er hat starke Bauchschmerzen.",
            ],
            [
              "der Arm / die Hand",
              "die Arme / die Hände",
              "arm / hand",
              "Mein rechter Arm tut weh.",
            ],
            [
              "das Bein / der Fuß",
              "die Beine / die Füße",
              "leg / foot",
              "Meine Füße tun nach dem Wandern weh.",
            ],
          ],
        },
      },
      {
        title: "2. Schmerzen ausdrücken: 'tut weh' vs. 'tun weh'",
        description: "Expressing physical pain accurately:",
        items: [
          {
            term: "tut weh (Singular)",
            meaning: "hurts / aches (one body part)",
            example: "Mein Knie tut weh.",
          },
          {
            term: "tun weh (Plural)",
            meaning: "hurt / ache (multiple body parts)",
            example: "Meine Ohren tun weh.",
          },
          {
            term: "Schmerzen haben (+ Akkusativ)",
            meaning: "to have aches/pains",
            example: "Ich habe Rückenschmerzen. / Hast du Kopfschmerzen?",
          },
        ],
      },
    ],
    dialogue: {
      context: "Nach dem intensiven Training im Fitnessstudio:",
      lines: [
        {
          speaker: "Trainer",
          german: "Hallo Jan! Wie war dein Workout heute?",
          english: "Hello Jan! How was your workout today?",
        },
        {
          speaker: "Jan",
          german: "Puh, ziemlich anstrengend! Meine Beine und meine Füße tun echt weh.",
          english: "Phew, quite exhausting! My legs and feet really hurt.",
        },
        {
          speaker: "Trainer",
          german: "Hast du dich vor dem Laufen gut aufgewärmt?",
          english: "Did you warm up well before running?",
        },
        {
          speaker: "Jan",
          german: "Nicht so lange, fürchte ich. Jetzt tut auch noch mein Rücken weh.",
          english: "Not very long, I'm afraid. Now my back is hurting as well.",
        },
        {
          speaker: "Trainer",
          german: "Dann mach jetzt lieber eine Pause und dehne deinen Körper sanft.",
          english: "Then you'd better take a break now and stretch your body gently.",
        },
      ],
    },
    funFact: {
      title: "German Compound Words for Pain: '-schmerzen'",
      content:
        "German has a wonderfully logical way of naming ailments: simply attach '-schmerzen' (pains) directly to the body part! Kopf + Schmerzen = Kopfschmerzen (headache); Hals + Schmerzen = Halsschmerzen (sore throat); Bauch + Schmerzen = Bauchschmerzen (stomachache); Zahn + Schmerzen = Zahnschmerzen (toothache).",
    },
    practice: [
      {
        question: "Which form correctly completes: 'Meine Augen ___ weh'?",
        options: ["tut", "tun", "macht", "haben"],
        answer: "tun",
        explanation:
          "'Meine Augen' is plural, so it requires the plural verb form: 'tun weh'. (Singular would be 'Mein Auge tut weh').",
      },
      {
        question: "What is the German word for 'back'?",
        options: ["der Bauch", "der Rücken", "die Brust", "das Bein"],
        answer: "der Rücken",
        explanation:
          "'der Rücken' means back. 'der Bauch' is stomach, and 'das Bein' is leg.",
      },
      {
        question: "How do you say 'I have a sore throat' using compound nouns?",
        options: [
          "Ich habe Halsschmerzen.",
          "Ich habe Halswehschmerz.",
          "Mein Hals tut nicht weh.",
          "Ich bin Halsschmerz.",
        ],
        answer: "Ich habe Halsschmerzen.",
        explanation:
          "'Halsschmerzen' (Hals + Schmerzen) is the standard German word for sore throat.",
      },
    ],
  },

  "a1-ch11-l49": {
    overview:
      "When you catch a cold or feel sick, you must be able to describe your symptoms clearly. In this lesson, you will master vocabulary for fever, coughing, chills, and common ailments, and learn how to ask someone with concern: 'Was ist los?' or 'Geht es dir nicht gut?'.",
    canDo:
      "Can explain common symptoms of illness (fever, cough, cold, fatigue), state how long you have been sick using 'seit', and express sympathy with 'Gute Besserung!'.",
    teacherNote:
      "To express how long you have had an illness, German uses the preposition 'seit' (+ Dative) with the PRESENT tense, because the illness is still ongoing! 'Ich habe seit zwei Tagen Fieber' (I have had a fever for two days). Never use the past tense here!",
    sections: [
      {
        title: "1. Häufige Krankheiten & Symptome (Ailments & Symptoms)",
        description: "Key medical terms for describing illnesses:",
        table: {
          headers: [
            "Symptom / Krankheit",
            "Englische Bedeutung",
            "Beispielsatz",
          ],
          rows: [
            [
              "das Fieber (hohes Fieber)",
              "fever (high fever)",
              "Ich habe 39 Grad Fieber.",
            ],
            [
              "der Husten",
              "cough",
              "Er hat starken Husten.",
            ],
            [
              "der Schnupfen",
              "runny nose / head cold",
              "Sie hat Schnupfen und niest oft.",
            ],
            [
              "die Erkältung (erkältet sein)",
              "common cold (to have a cold)",
              "Ich habe eine schlimme Erkältung.",
            ],
            [
              "die Grippe (Influenza)",
              "the flu",
              "Mein Kollege liegt mit Grippe im Bett.",
            ],
            [
              "die Müdigkeit / erschöpft sein",
              "fatigue / to be exhausted",
              "Ich fühle mich schwach und müde.",
            ],
            [
              "schlecht / übel sein (+ Dativ)",
              "to feel nauseous / sick",
              "Mir ist übel / Mir ist schlecht.",
            ],
          ],
        },
      },
      {
        title: "2. Zeitangaben mit 'seit' + Dativ (Duration of Illness)",
        description: "Expressing how long symptoms have persisted:",
        table: {
          headers: [
            "Ausdruck",
            "Grammatik",
            "Bedeutung",
            "Beispiel",
          ],
          rows: [
            [
              "seit einem Tag",
              "seit + Dativ Maskulin",
              "for a day / since yesterday",
              "Ich habe seit einem Tag Halsschmerzen.",
            ],
            [
              "seit einer Woche",
              "seit + Dativ Feminin",
              "for a week",
              "Sie hustet schon seit einer Woche.",
            ],
            [
              "seit drei Tagen",
              "seit + Dativ Plural (+n)",
              "for three days",
              "Er liegt seit drei Tagen mit Fieber im Bett.",
            ],
            [
              "Gute Besserung!",
              "Idiom",
              "Get well soon!",
              "Erhol dich gut und gute Besserung!",
            ],
          ],
        },
      },
    ],
    dialogue: {
      context: "Ein Telefonat zwischen zwei Arbeitskolleginnen:",
      lines: [
        {
          speaker: "Monika",
          german: "Hallo Sarah! Du bist heute gar nicht im Büro. Ist etwas passiert?",
          english: "Hello Sarah! You're not in the office today. Did something happen?",
        },
        {
          speaker: "Sarah",
          german: "Hallo Monika. Leider ja, ich bin ziemlich krank. Ich habe seit gestern hohes Fieber und Halsschmerzen.",
          english: "Hello Monika. Unfortunately yes, I'm quite sick. I've had a high fever and a sore throat since yesterday.",
        },
        {
          speaker: "Monika",
          german: "Oh je, das tut mir leid! Warst du schon beim Arzt?",
          english: "Oh dear, I'm sorry to hear that! Have you seen a doctor yet?",
        },
        {
          speaker: "Sarah",
          german: "Ich habe heute um 11:30 Uhr einen Termin in der Praxis.",
          english: "I have an appointment at the doctor's office at 11:30.",
        },
        {
          speaker: "Monika",
          german: "Sehr vernünftig. Ruh dich gut aus und melde dich danach. Gute Besserung!",
          english: "Very sensible. Rest up well and check in afterwards. Get well soon!",
        },
        {
          speaker: "Sarah",
          german: "Vielen Dank, Monika! Bis bald.",
          english: "Thank you very much, Monika! See you soon.",
        },
      ],
    },
    funFact: {
      title: "'Mir ist schlecht' vs. 'Ich bin schlecht'",
      content:
        "Be careful with this famous false friend! If you feel sick to your stomach, you must use the dative pronoun: 'Mir ist schlecht' (literally: 'To me it is bad'). If you say 'Ich bin schlecht', native speakers will laugh because that means 'I am a bad person / evil'!",
    },
    practice: [
      {
        question: "How do you correctly say 'Get well soon!' in German?",
        options: [
          "Guten Appetit!",
          "Gute Besserung!",
          "Herzlichen Glückwunsch!",
          "Viel Vergnügen!",
        ],
        answer: "Gute Besserung!",
        explanation:
          "'Gute Besserung!' is the universal German expression for 'Get well soon!'.",
      },
      {
        question: "Which sentence correctly says: 'I have had a fever for two days'?",
        options: [
          "Ich habe seit zwei Tagen Fieber.",
          "Ich habe vor zwei Tagen Fieber gehabt.",
          "Ich bin seit zwei Tage Fieber.",
          "Fieber hat mich seit zwei Tag.",
        ],
        answer: "Ich habe seit zwei Tagen Fieber.",
        explanation:
          "'seit' takes the Dative case and the present tense for ongoing situations: seit + zwei Tag-en = 'seit zwei Tagen'.",
      },
      {
        question: "How do you tell someone you feel nauseous/sick?",
        options: [
          "Ich bin schlecht.",
          "Mir ist schlecht.",
          "Ich habe schlecht.",
          "Mich ist krank.",
        ],
        answer: "Mir ist schlecht.",
        explanation:
          "'Mir ist schlecht' (Dative 'mir') means 'I feel sick/nauseous'. 'Ich bin schlecht' would mean 'I am a bad person'.",
      },
    ],
  },

  "a1-ch11-l50": {
    overview:
      "Visiting a doctor's office (die Arztpraxis) in Germany requires scheduling an appointment, presenting your health insurance card ('die Versichertenkarte'), describing symptoms to the doctor, and picking up medication at a pharmacy ('die Apotheke'). In this lesson, you will practice authentic medical dialogues from Netzwerk A1 Kapitel 11.",
    canDo:
      "Can book an appointment at a medical clinic, answer the doctor's questions ('Was fehlt Ihnen?'), understand medication instructions, and pick up a prescription at the pharmacy.",
    teacherNote:
      "In Germany, medicines (even basic painkillers like ibuprofen or paracetamol) are sold exclusively at pharmacies (die Apotheke, marked with a giant red 'A'), NOT at general supermarkets! The doctor will hand you a prescription called 'das Rezept', and an official sick leave certificate called 'die Krankschreibung' (or 'das Attest').",
    sections: [
      {
        title: "1. In der Arztpraxis (At the Medical Clinic)",
        description: "Key terms and steps during a doctor visit:",
        table: {
          headers: [
            "Deutscher Begriff",
            "Bedeutung",
            "Bedeutung im Alltag",
          ],
          rows: [
            [
              "die Praxis / die Arztpraxis",
              "doctor's office / clinic",
              "Dr. med. Weber — Allgemeinmedizin",
            ],
            [
              "die Versichertenkarte (-n)",
              "health insurance smartcard",
              "Haben Sie Ihre Versichertenkarte dabei?",
            ],
            [
              "das Wartezimmer (-)",
              "waiting room",
              "Nehmen Sie bitte im Wartezimmer Platz.",
            ],
            [
              "Was fehlt Ihnen?",
              "What seems to be the problem? (Doctor's prompt)",
              "Standard question from German physicians",
            ],
            [
              "untersuchen",
              "to examine (physically)",
              "Ich untersuche jetzt Ihren Hals und Ihre Lunge.",
            ],
            [
              "das Rezept (-e)",
              "medical prescription",
              "Hier ist Ihr Rezept für die Apotheke.",
            ],
            [
              "die Krankschreibung / das Attest",
              "sick note for the employer",
              "Ich schreibe Sie für drei Tage krank.",
            ],
            [
              "die Apotheke (-n)",
              "pharmacy / chemist's shop",
              "Die Medikamente bekommen Sie in der Apotheke.",
            ],
          ],
        },
      },
      {
        title: "2. Medikamente einnehmen (Taking Medication)",
        description: "How to read dosage instructions on prescriptions:",
        items: [
          {
            term: "dreimal täglich vor/nach dem Essen",
            meaning: "three times daily before/after meals",
            example: "Nehmen Sie die Tabletten dreimal täglich nach dem Essen.",
          },
          {
            term: "eine Tablette morgens und abends",
            meaning: "one pill in the morning and evening",
            example: "Morgens und abends je eine Tablette mit Wasser einnehmen.",
          },
          {
            term: "der Hustensaft / die Tropfen",
            meaning: "cough syrup / drops",
            example: "Nehmen Sie 20 Tropfen vor dem Schlafen.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Das Arztgespräch in der Praxis von Dr. Schneider (Netzwerk A1):",
      lines: [
        {
          speaker: "Dr. Schneider",
          german: "Guten Tag, Herr Fischer. Nehmen Sie bitte Platz. Was fehlt Ihnen denn?",
          english: "Good day, Mr. Fischer. Please take a seat. What seems to be the problem?",
        },
        {
          speaker: "Herr Fischer",
          german: "Guten Tag, Herr Doktor. Ich fühle mich seit vorgestern elend. Mein Hals tut weh und ich habe Reizhusten.",
          english: "Good day, Doctor. I've been feeling miserable since the day before yesterday. My throat hurts and I have a dry cough.",
        },
        {
          speaker: "Dr. Schneider",
          german: "Haben Sie auch Fieber gemessen?",
          english: "Have you measured your fever as well?",
        },
        {
          speaker: "Herr Fischer",
          german: "Ja, heute früh hatte ich 38,4 Grad.",
          english: "Yes, this morning I had 38.4 degrees.",
        },
        {
          speaker: "Dr. Schneider",
          german: "Machen Sie bitte den Mund weit auf und sagen Sie 'Aah'... Ja, Ihr Rachen ist stark entzündet. Sie haben eine akute Mandelentzündung.",
          english: "Please open your mouth wide and say 'Aah'... Yes, your throat is heavily inflamed. You have acute tonsillitis.",
        },
        {
          speaker: "Herr Fischer",
          german: "Brauche ich Antibiotika?",
          english: "Do I need antibiotics?",
        },
        {
          speaker: "Dr. Schneider",
          german: "Ja. Hier ist das Rezept für die Apotheke. Und hier ist Ihre Krankschreibung für den Arbeitgeber bis Freitag.",
          english: "Yes. Here is the prescription for the pharmacy. And here is your sick leave note for your employer until Friday.",
        },
      ],
    },
    funFact: {
      title: "The Big Red 'A' of German Pharmacies",
      content:
        "Every certified pharmacy in Germany, Austria, and Switzerland displays a prominent red Gothic letter 'A' (Apotheke) with the staff of Asclepius and a goblet. By law, there must always be a designated 'Notdienst-Apotheke' (emergency night pharmacy) open 24/7 in every district!",
    },
    practice: [
      {
        question: "What does a German doctor typically ask at the start of a consultation?",
        options: [
          "Wie viel Geld haben Sie?",
          "Was fehlt Ihnen?",
          "Wohin fahren Sie?",
          "Wer kocht heute?",
        ],
        answer: "Was fehlt Ihnen?",
        explanation:
          "'Was fehlt Ihnen?' (literally: 'What is missing for you?') is the classic, empathetic German medical inquiry meaning 'What seems to be the problem?'.",
      },
      {
        question: "Where do you pick up prescription medication in Germany?",
        options: [
          "Im Supermarkt",
          "In der Drogerie",
          "In der Apotheke",
          "Im Kaufhaus",
        ],
        answer: "In der Apotheke",
        explanation:
          "Prescriptions (Rezepte) can only be redeemed at licensed pharmacies ('in der Apotheke').",
      },
      {
        question: "What is an official sick note for an employer called?",
        options: [
          "die Krankschreibung / das Attest",
          "die Speisekarte",
          "der Fahrplan",
          "die Quittung",
        ],
        answer: "die Krankschreibung / das Attest",
        explanation:
          "'die Krankschreibung' (or 'das ärztliche Attest') is the official medical certificate confirming an employee is unfit to work.",
      },
    ],
  },

  "a1-ch11-l51": {
    overview:
      "When giving health recommendations or passing on a doctor's orders ('The doctor says you should stay in bed!'), German uses the modal verb 'sollen' (should / supposed to) along with the imperative mood for direct friendly advice ('Drink plenty of herbal tea!').",
    canDo:
      "Can give and understand health advice using the modal verb 'sollen' (e.g., 'Du sollst viel Wasser trinken') and form helpful imperative suggestions.",
    teacherNote:
      "Understand the key difference between 'müssen' (must/obligation) and 'sollen' (should / conveying someone else's order): When a doctor recommends something, native speakers say: 'Der Arzt sagt, ich SOLL viel schlafen' (The doctor says I should / am supposed to sleep a lot).",
    sections: [
      {
        title: "1. Das Modalverb 'sollen' (Conjugation & Bracket Structure)",
        description: "Notice that 1st and 3rd person singular have no ending (soll):",
        table: {
          headers: [
            "Pronomen",
            "sollen Konjugation",
            "Beispielsatz",
            "Bedeutung",
          ],
          rows: [
            [
              "ich",
              "soll",
              "Ich soll im Bett bleiben.",
              "I should / am supposed to stay in bed.",
            ],
            [
              "du",
              "sollst",
              "Du sollst viel Kamillentee trinken.",
              "You should drink plenty of chamomile tea.",
            ],
            [
              "er / sie / es",
              "soll",
              "Er soll drei Tabletten täglich nehmen.",
              "He is supposed to take three pills daily.",
            ],
            [
              "wir",
              "sollen",
              "Wir sollen an die frische Luft gehen.",
              "We should go get some fresh air.",
            ],
            [
              "ihr",
              "sollt",
              "Ihr sollt euch warm anziehen.",
              "You all should dress warmly.",
            ],
            [
              "sie / Sie",
              "sollen",
              "Sie sollen sich schonen, Herr Meyer.",
              "You should take it easy, Mr. Meyer.",
            ],
          ],
        },
      },
      {
        title: "2. Ratschläge mit dem Imperativ (Direct Health Advice)",
        description: "Friendly commands and suggestions for du, ihr, and Sie:",
        table: {
          headers: [
            "Form",
            "Verbform (Imperativ)",
            "Beispiel",
            "Englische Übersetzung",
          ],
          rows: [
            [
              "du (informal sg.)",
              "Stamm ohne -st",
              "Trink viel Wasser! Ruh dich aus!",
              "Drink plenty of water! Rest!",
            ],
            [
              "ihr (informal pl.)",
              "normale ihr-Form",
              "Nehmt die Vitamine regelmäßig!",
              "Take the vitamins regularly!",
            ],
            [
              "Sie (formal)",
              "Infinitiv + Sie",
              "Bleiben Sie bitte im Bett!",
              "Please stay in bed!",
            ],
          ],
        },
      },
    ],
    dialogue: {
      context: "Gute Ratschläge unter Freunden bei einer Erkältung (Netzwerk A1):",
      lines: [
        {
          speaker: "Tim",
          german: "Hatschi! Entschuldigung...",
          english: "Achoo! Excuse me...",
        },
        {
          speaker: "Laura",
          german: "Gesundheit, Tim! Du siehst wirklich blass aus.",
          english: "Bless you, Tim! You really look pale.",
        },
        {
          speaker: "Tim",
          german: "Ich fühle mich auch elend. Mein Kopf hämmert und der Hals kratzt.",
          english: "I feel miserable too. My head is pounding and my throat is scratchy.",
        },
        {
          speaker: "Laura",
          german: "Was hat die Ärztin heute Morgen gesagt?",
          english: "What did the doctor say this morning?",
        },
        {
          speaker: "Tim",
          german: "Sie hat gesagt, ich soll drei Tage im Bett bleiben und mich schonen.",
          english: "She said I should stay in bed for three days and rest.",
        },
        {
          speaker: "Laura",
          german: "Dann geh sofort nach Hause! Trink heißen Tee mit Zitrone und schlaf viel. Gute Besserung!",
          english: "Then go home immediately! Drink hot tea with lemon and sleep a lot. Get well soon!",
        },
      ],
    },
    funFact: {
      title: "'Gesundheit!' — The Universal Sneeze Response",
      content:
        "When someone sneezes in Germany, Austria, or Switzerland, the immediate courteous response is always: 'Gesundheit!' (literally: 'Health!'). The person who sneezed politely replies: 'Danke!' (Thank you!). In fact, English speakers frequently borrow this exact German word!",
    },
    practice: [
      {
        question: "Which form of 'sollen' completes: 'Der Arzt sagt, du ___ viel schlafen'?",
        options: ["sollst", "sollt", "sollen", "soll"],
        answer: "sollst",
        explanation:
          "For 'du', the conjugation of 'sollen' is 'sollst': 'du sollst viel schlafen'.",
      },
      {
        question: "What is the polite formal imperative of 'im Bett bleiben' for 'Sie'?",
        options: [
          "Bleib im Bett!",
          "Bleibt im Bett!",
          "Bleiben Sie im Bett!",
          "Sie bleiben im Bett?",
        ],
        answer: "Bleiben Sie im Bett!",
        explanation:
          "The formal imperative inverts the infinitive and the pronoun 'Sie': 'Bleiben Sie im Bett!'.",
      },
      {
        question: "What is the customary response when someone sneezes in German?",
        options: [
          "Guten Tag!",
          "Gesundheit!",
          "Auf Wiedersehen!",
          "Prost!",
        ],
        answer: "Gesundheit!",
        explanation:
          "'Gesundheit!' is said immediately when someone sneezes.",
      },
    ],
  },
};
