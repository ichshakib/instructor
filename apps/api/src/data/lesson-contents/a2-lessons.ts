import { LessonContent } from "../../types/course.types";

export const A2_LESSONS_CONTENT: Record<string, LessonContent> = {
  // A2 Chapter 1 Lesson 1: Past Participles with 'haben'
  "a2-ch1-l1": {
    overview:
      "In spoken German, the conversational past (Das Perfekt) is used in more than 90% of all everyday conversations about past events. The Perfekt tense is formed with an auxiliary verb in Position 2 ('haben' or 'sein') plus the past participle (Partizip II) at the very end of the sentence (Satzklammer / sentence bracket). In this lesson, you will master regular and irregular weak/strong participles with 'haben'.",
    canDo:
      "Can narrate weekend activities, work tasks, and completed actions using 'haben' + Partizip II in natural everyday conversations.",
    teacherNote:
      "Keep the sentence bracket intact! The conjugated form of 'haben' sits in Position 2, and the Partizip II waits at the very end of the clause: 'Ich HABE gestern bis 18 Uhr GEFAHREN/GEARBEITET.' Never place the participle immediately after 'haben' in German!",
    sections: [
      {
        title: "1. Formation of Regular (Weak) Participles: ge- ... -(e)t",
        description:
          "Regular verbs form Partizip II with the prefix ge-, the verb stem, and the ending -t (or -et if the stem ends in -d, -t, -m, -n preceded by a consonant):",
        table: {
          headers: ["Infinitiv", "Präsens (er/sie)", "Partizip II", "Beispielsatz (Perfekt)"],
          rows: [
            ["lernen", "er lernt", "gelernt", "Ich habe drei Stunden Deutsch gelernt."],
            ["machen", "er macht", "gemacht", "Was hast du am Wochenende gemacht?"],
            ["kaufen", "er kauft", "gekauft", "Wir haben frisches Brot gekauft."],
            ["arbeiten", "er arbeitet", "gearbeitet", "Sie hat gestern im Büro gearbeitet."],
            ["wohnen", "er wohnt", "gewohnt", "Er hat fünf Jahre in Berlin gewohnt."],
            ["hören", "er hört", "gehört", "Habt ihr die neue Podcast-Folge gehört?"],
          ],
        },
      },
      {
        title: "2. Verbs ending in -ieren (No 'ge-' prefix)",
        description:
          "Verbs borrowed from French or Latin that end in -ieren NEVER take the ge- prefix in Partizip II. They simply end in -t:",
        items: [
          {
            term: "studieren → studiert",
            pronunciation: "[shtu-DEE-ren → shtu-DEERT]",
            meaning: "to study at university",
            example: "Er hat Medizin an der Charité studiert. (He studied medicine at Charité.)",
          },
          {
            term: "reservieren → reserviert",
            pronunciation: "[re-zer-VEE-ren → re-zer-VEERT]",
            meaning: "to reserve / book",
            example: "Ich habe einen Tisch für zwei reserviert. (I reserved a table for two.)",
          },
          {
            term: "telefonieren → telefoniert",
            pronunciation: "[te-le-fo-NEE-ren → te-le-fo-NEERT]",
            meaning: "to talk on the phone",
            example: "Wir haben eine Stunde telefoniert. (We talked on the phone for an hour.)",
          },
          {
            term: "reparieren → repariert",
            pronunciation: "[re-pa-REE-ren → re-pa-REERT]",
            meaning: "to repair / fix",
            example: "Der Mechaniker hat den Motor repariert. (The mechanic repaired the engine.)",
          },
        ],
        notes: [
          "Verbs ending in -ieren are always regular (weak) in their participle ending: stem + -t.",
          "Common trap: never say 'gestudiert' or 'gereserviert'!",
        ],
      },
      {
        title: "3. Irregular & Strong Verbs with 'haben' (ge- ... -en with vowel shift)",
        description:
          "Strong verbs keep the ending -en in Partizip II and frequently change their root vowel (Ablaut):",
        table: {
          headers: ["Infinitiv", "Vowel Shift", "Partizip II", "English Meaning & Example"],
          rows: [
            ["trinken", "i → u", "getrunken", "drank (Ich habe Wasser getrunken.)"],
            ["finden", "i → u", "gefunden", "found (Wir haben den Schlüssel gefunden.)"],
            ["schreiben", "ei → ie", "geschrieben", "wrote (Er hat eine E-Mail geschrieben.)"],
            ["lesen", "e → e (no shift)", "gelesen", "read (Hast du den Artikel gelesen?)"],
            ["sehen", "e → e (no shift)", "gesehen", "saw / watched (Wir haben einen Film gesehen.)"],
            ["sprechen", "e → o", "gesprochen", "spoke (Sie hat mit dem Chef gesprochen.)"],
            ["essen", "e → e", "gegessen", "ate (Ich habe eine Brezel gegessen.)"],
          ],
        },
      },
    ],
    dialogue: {
      context: "Two colleagues, Lukas and Mia, meet by the coffee machine on Monday morning to discuss their weekend.",
      lines: [
        {
          speaker: "Lukas",
          german: "Guten Morgen, Mia! Hast du ein schönes Wochenende gehabt?",
          english: "Good morning, Mia! Did you have a nice weekend?",
        },
        {
          speaker: "Mia",
          german: "Ja, wunderbar! Ich habe am Samstag einen alten Freund in München getroffen.",
          english: "Yes, wonderful! On Saturday I met an old friend in Munich.",
        },
        {
          speaker: "Lukas",
          german: "Toll! Was habt ihr dort gemacht?",
          english: "Great! What did you two do there?",
        },
        {
          speaker: "Mia",
          german: "Wir haben ein neues Museum besucht und danach bayerische Spezialitäten gegessen.",
          english: "We visited a new museum and ate Bavarian specialties afterwards.",
        },
        {
          speaker: "Lukas",
          german: "Das klingt fantastisch. Ich habe das ganze Wochenende für die Deutschprüfung gelernt.",
          english: "That sounds fantastic. I studied for the German exam the entire weekend.",
        },
        {
          speaker: "Mia",
          german: "Fleißig! Du hast bestimmt alle Grammatikregeln gemeistert.",
          english: "Hardworking! You definitely mastered all the grammar rules.",
        },
      ],
    },
    funFact: {
      title: "The Spoken Past vs. Written Past Divide",
      content:
        "In Southern Germany, Austria, and Switzerland, people almost exclusively use the Perfekt ('Ich habe gemacht') even when speaking about events that happened decades ago. The simple past (Präteritum, 'Ich machte') is perceived as overly literary or bookish in southern vernacular, except for the modal verbs and 'sein/haben'.",
    },
  },

  // A2 Chapter 1 Lesson 2: Past Participles with 'sein'
  "a2-ch1-l2": {
    overview:
      "While most German verbs form the Perfekt tense with 'haben', an essential group of verbs requires 'sein' as the auxiliary. These verbs describe a change of location (movement from A to B), a change of physical or mental state, or belong to three unique exceptions: sein (gewesen), werden (geworden), and bleiben (geblieben).",
    canDo:
      "Can accurately describe travels, arrivals, departures, life events, and changes of state using 'sein' + Partizip II.",
    teacherNote:
      "Remember the golden rule: movement alone does not trigger 'sein' unless there is a change of place from point A to point B! For example: 'schwimmen' can take 'sein' when crossing a lake ('Ich bin über den See geschwommen'), but takes 'haben' when referring to swimming as an exercise activity without destination ('Ich habe 30 Minuten geschwommen').",
    sections: [
      {
        title: "1. Verbs of Movement (Ortsveränderung: Point A to Point B)",
        description:
          "Verbs that describe traveling, walking, driving, running, or flying require 'sein' in the Perfekt:",
        table: {
          headers: ["Infinitiv", "Partizip II", "Präsens von 'sein'", "Beispielsatz (Perfekt)"],
          rows: [
            ["gehen", "gegangen", "ich bin / wir sind", "Wir sind nach Hause gegangen."],
            ["fahren", "gefahren", "du bist / ihr seid", "Bist du mit dem Zug gefahren?"],
            ["fliegen", "geflogen", "er ist / sie sind", "Das Flugzeug ist pünktlich abgeflogen."],
            ["kommen", "gekommen", "er ist", "Herr Weber ist gerade angekommen."],
            ["laufen", "gelaufen", "ich bin", "Ich bin heute 5 Kilometer gelaufen."],
            ["reisen", "gereist", "wir sind", "Sie sind durch ganz Europa gereist."],
          ],
        },
      },
      {
        title: "2. Verbs of Change of State (Zustandsveränderung)",
        description:
          "Verbs where the subject transitions from one condition or state into another also conjugate with 'sein':",
        items: [
          {
            term: "aufstehen → aufgestanden",
            pronunciation: "[OUF-shte-hen → ouf-ge-SHTAN-den]",
            meaning: "to get up / rise (transition from sleep/lying to standing)",
            example: "Heute Morgen bin ich um 6 Uhr aufgestanden. (This morning I got up at 6 AM.)",
          },
          {
            term: "einschlafen → eingeschlafen",
            pronunciation: "[EYEN-shla-fen → eyen-ge-SHLA-fen]",
            meaning: "to fall asleep (transition from awake to asleep)",
            example: "Das Kind ist sofort eingeschlafen. (The child fell asleep immediately.)",
          },
          {
            term: "sterben → gestorben",
            pronunciation: "[SHTER-ben → ge-SHTOR-ben]",
            meaning: "to die (transition from life to death)",
            example: "Der Dichter ist im Jahr 1832 gestorben. (The poet died in the year 1832.)",
          },
          {
            term: "wachsen → gewachsen",
            pronunciation: "[VAHK-sen → ge-VAHK-sen]",
            meaning: "to grow",
            example: "Die Pflanze ist sehr schnell gewachsen. (The plant grew very quickly.)",
          },
        ],
      },
      {
        title: "3. The 3 Crucial Exceptions: sein, bleiben, werden",
        description:
          "These three foundational verbs always take 'sein' as their auxiliary, even though 'bleiben' specifically denotes staying in one place:",
        table: {
          headers: ["Infinitiv", "Partizip II", "Regel", "Beispielsatz"],
          rows: [
            ["sein (to be)", "gewesen", "Always takes sein", "Ich bin gestern in Frankfurt gewesen."],
            ["bleiben (to stay)", "geblieben", "Defies movement rule; takes sein", "Wir sind wegen des Regens zu Hause geblieben."],
            ["werden (to become)", "geworden", "State change; takes sein", "Er ist vor zwei Wochen Vater geworden."],
          ],
        },
      },
    ],
    dialogue: {
      context: "Julian arrives at work breathless and explains his chaotic morning commute to his supervisor Frau Krause.",
      lines: [
        {
          speaker: "Frau Krause",
          german: "Guten Morgen, Julian! Alles in Ordnung? Du bist ziemlich spät.",
          english: "Good morning, Julian! Everything alright? You are quite late.",
        },
        {
          speaker: "Julian",
          german: "Entschuldigung, Frau Krause! Der Wecker hat nicht geklingelt und ich bin erst um 8 Uhr aufgewacht.",
          english: "Excuse me, Frau Krause! The alarm did not ring and I only woke up at 8 AM.",
        },
        {
          speaker: "Frau Krause",
          german: "Oh je. Und wie bist du dann hergekommen?",
          english: "Oh dear. And how did you get here then?",
        },
        {
          speaker: "Julian",
          german: "Ich bin schnell zur U-Bahn gerannt, aber der Zug ist ausgefallen. Dann bin ich mit dem Bus gefahren.",
          english: "I quickly ran to the subway, but the train was canceled. Then I rode with the bus.",
        },
        {
          speaker: "Frau Krause",
          german: "Hauptsache, du bist heil angekommen. Nimm dir erst einen Kaffee!",
          english: "The main thing is that you arrived safely. Grab a coffee first!",
        },
      ],
    },
    funFact: {
      title: "Why Does 'Bleiben' (To Stay) Take 'Sein'?",
      content:
        "German students often ask: If 'sein' verbs are verbs of movement, why does 'bleiben' (to stay in one place) use 'sein'? In Historical Germanic grammar, 'bleiben' represented remaining in a persistent existential state, tightly binding it linguistically to 'sein' (to be) and 'werden' (to become).",
    },
  },

  // A2 Chapter 2 Lesson 3: Modal Verbs
  "a2-ch2-l3": {
    overview:
      "Modal verbs express modality: ability (können), necessity (müssen), permission (dürfen), desire (wollen), advice/obligation (sollen), and polite preference (möchten). In a German clause, the modal verb conjugates in Position 2, pushing the main action verb in its unconjugated infinitive form to the absolute end of the clause.",
    canDo:
      "Can articulate rules, obligations, permissions, capabilities, and personal wishes in formal and informal situations.",
    teacherNote:
      "Beware of the false friend 'müssen nicht'! In English, 'must not' means forbidden. In German, 'nicht müssen' simply means 'do not have to' (not necessary). If something is strictly forbidden, German uses 'nicht dürfen' ('Du darfst hier nicht rauchen' = You must not smoke here).",
    sections: [
      {
        title: "1. The 6 German Modal Verbs & Present Conjugations",
        description:
          "All modal verbs share a unique pattern in singular: the 1st person (ich) and 3rd person (er/sie/es) are identical and have NO personal ending (-t or -e):",
        table: {
          headers: ["Pronoun", "können (can)", "müssen (must)", "dürfen (may)", "wollen (want)", "sollen (should)", "möchten (would like)"],
          rows: [
            ["ich", "kann", "muss", "darf", "will", "soll", "möchte"],
            ["du", "kannst", "musst", "darfst", "willst", "sollst", "möchtest"],
            ["er / sie / es", "kann", "muss", "darf", "will", "soll", "möchte"],
            ["wir", "können", "müssen", "dürfen", "wollen", "sollen", "möchten"],
            ["ihr", "könnt", "müsst", "dürft", "wollt", "sollt", "möchtet"],
            ["sie / Sie", "können", "müssen", "dürfen", "wollen", "sollen", "möchten"],
          ],
        },
      },
      {
        title: "2. Sentence Bracket (Satzklammer) with Modals",
        description:
          "The conjugated modal verb takes Position 2. The main verb stays in the infinitive and locks at the sentence end:",
        items: [
          {
            term: "können (ability / possibility)",
            pronunciation: "[KÖN-nen]",
            meaning: "can / to be able to",
            example: "Ich kann fließend Deutsch und Englisch sprechen. (I can speak German and English fluently.)",
          },
          {
            term: "müssen (necessity / obligation)",
            pronunciation: "[MÜS-sen]",
            meaning: "must / to have to",
            example: "Wir müssen das Projekt bis Freitag abgeben. (We must hand in the project by Friday.)",
          },
          {
            term: "dürfen (permission / prohibition)",
            pronunciation: "[DÜR-fen]",
            meaning: "may / to be allowed to",
            example: "Hier darf man nicht parken. (One is not allowed to park here / No parking.)",
          },
          {
            term: "wollen (strong intention / willpower)",
            pronunciation: "[VOL-len]",
            meaning: "want to / to intend to",
            example: "Lukas will nächstes Jahr nach Wien umziehen. (Lukas wants to move to Vienna next year.)",
          },
          {
            term: "sollen (moral duty / external instruction)",
            pronunciation: "[ZOL-len]",
            meaning: "should / supposed to",
            example: "Der Arzt sagt, ich soll viel Wasser trinken. (The doctor says I should drink plenty of water.)",
          },
        ],
      },
    ],
    dialogue: {
      context: "Sophie is visiting a German library in Munich and asks the librarian, Herr Wagner, about the facility's rules.",
      lines: [
        {
          speaker: "Sophie",
          german: "Entschuldigung, kann ich mir diesen Laptop hier für zwei Stunden ausleihen?",
          english: "Excuse me, can I borrow this laptop here for two hours?",
        },
        {
          speaker: "Herr Wagner",
          german: "Ja, natürlich. Aber Sie müssen zuerst Ihren Bibliotheksausweis vorzeigen.",
          english: "Yes, of course. But you must show your library card first.",
        },
        {
          speaker: "Sophie",
          german: "Hier ist er. Darf ich hier drinnen auch Kaffee trinken?",
          english: "Here it is. Am I allowed to drink coffee in here as well?",
        },
        {
          speaker: "Herr Wagner",
          german: "Nein, im Lesesaal dürfen Sie keine Getränke mitnehmen. Sie müssen den Becher draußen lassen.",
          english: "No, in the reading room you are not allowed to bring drinks. You must leave the cup outside.",
        },
        {
          speaker: "Sophie",
          german: "Verstehe. Und bis wann muss ich das Gerät zurückbringen?",
          english: "Understood. And by when do I have to bring the device back?",
        },
        {
          speaker: "Herr Wagner",
          german: "Sie sollen es spätestens um 18 Uhr an der Theke abgeben.",
          english: "You should return it to the counter at 6 PM at the latest.",
        },
      ],
    },
    funFact: {
      title: "'Möchten' Is Technically Not an Independent Verb!",
      content:
        "Many German textbooks treat 'möchten' as a 7th modal verb. Linguistically, 'möchten' is actually the Konjunktiv II (subjunctive) form of 'mögen' (to like). Because 'ich will' sounds blunt and demanding in German bakeries and restaurants, Germans use 'ich möchte' (I would like) as the universal polite request form.",
    },
  },

  // A2 Chapter 2 Lesson 4: Separable Prefix Verbs
  "a2-ch2-l4": {
    overview:
      "Separable verbs (trennbare Verben) consist of a base verb combined with a prefix (such as auf-, an-, ab-, mit-, ein-, aus-, vor-). In the present tense (Präsens) and simple past, the prefix detaches from the verb and moves to the very end of the main clause. In the Perfekt tense, '-ge-' is inserted between the prefix and the participle stem (e.g., auf + ge + standen).",
    canDo:
      "Can structure daily routine sentences with separable verbs, correctly placing prefixes in main clauses, questions, and past participles.",
    teacherNote:
      "Stress is your auditory compass! In German, separable prefixes ALWAYS carry the primary acoustic stress (e.g., ÁUFstehen, ÉINkaufen, ÁBfahren). Inseparable prefixes (be-, ver-, zer-, ent-, emp-, ge-, miss-) are never stressed (e.g., verSTÉhen, beGÍNNEN). Listen to where the voice punches the word.",
    sections: [
      {
        title: "1. Most Common Separable Prefixes & Their Directional Meanings",
        description:
          "Separable prefixes give spatial, directional, or functional shifts to common root verbs:",
        table: {
          headers: ["Prefix", "Core Meaning", "Example Verb", "English Translation"],
          rows: [
            ["auf-", "up / open", "aufstehen / aufmachen", "to get up / to open"],
            ["zu-", "closed / towards", "zumachen / zuhören", "to close / to listen to"],
            ["an-", "on / at / to contact", "anrufen / ankommen", "to call (phone) / to arrive"],
            ["aus-", "out / off", "aussteigen / ausmachen", "to disembark / to switch off"],
            ["ein-", "in / into", "einkaufen / einsteigen", "to shop / to board (train)"],
            ["mit-", "along / with", "mitkommen / mitbringen", "to come along / to bring along"],
            ["ab-", "off / departing", "abfahren / abholen", "to depart / to pick up someone"],
            ["vor-", "forward / demo", "vorstellen / vorbereiten", "to introduce / to prepare"],
          ],
        },
      },
      {
        title: "2. Sentence Construction: Present Tense vs. Perfekt vs. Modal Verb",
        description:
          "Observe how the prefix shifts depending on the grammatical structure:",
        items: [
          {
            term: "1. Main Clause (Präsens): Prefix to end",
            pronunciation: "[Der Zug fährt um 09:15 Uhr ab.]",
            meaning: "The train departs at 09:15 AM.",
            example: "Base verb 'fährt' in Position 2; separable prefix 'ab' at the very end.",
          },
          {
            term: "2. Perfekt Tense: -ge- inserted in the middle",
            pronunciation: "[Der Zug ist um 09:15 Uhr abgefahren.]",
            meaning: "The train departed at 09:15 AM.",
            example: "ab + ge + fahren = abgefahren (takes 'sein' for movement).",
          },
          {
            term: "3. With Modal Verb: Verb reunites in infinitive at end",
            pronunciation: "[Der Zug muss pünktlich abfahren.]",
            meaning: "The train must depart on time.",
            example: "Modal 'muss' takes Position 2; 'abfahren' stays whole at the end.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Maximilian and Lea organize dinner and discuss who handles the groceries and picks up the guest.",
      lines: [
        {
          speaker: "Maximilian",
          german: "Lea, kaufst du heute nach der Arbeit für das Abendessen ein?",
          english: "Lea, are you doing the grocery shopping for dinner after work today?",
        },
        {
          speaker: "Lea",
          german: "Ja, ich kaufe im Biomarkt ein. Wann kommt unser Gast Sarah am Hauptbahnhof an?",
          english: "Yes, I will shop at the organic supermarket. When does our guest Sarah arrive at the central station?",
        },
        {
          speaker: "Maximilian",
          german: "Ihr Zug kommt um 17:45 Uhr an. Ich hole sie direkt vom Bahnsteig ab.",
          english: "Her train arrives at 5:45 PM. I will pick her up directly from the platform.",
        },
        {
          speaker: "Lea",
          german: "Perfekt! Bringst du bitte auch noch eine Flasche Mineralwasser mit?",
          english: "Perfect! Could you also bring along a bottle of sparkling water, please?",
        },
        {
          speaker: "Maximilian",
          german: "Klar, mache ich. Ich bereite alles rechtzeitig vor.",
          english: "Sure, will do. I will prepare everything in good time.",
        },
      ],
    },
    funFact: {
      title: "The Mark Twain Satire on German Separable Verbs",
      content:
        "American author Mark Twain famously mocked German separable verbs in his essay 'The Awful German Language'. He complained that a German speaker can start a sentence, speak for ten minutes, and leave the listener in unbearable suspense until they finally drop the detached prefix ('aus!', 'auf!', 'ab!') at the very end to reveal what happened.",
    },
  },

  // A2 Chapter 3 Lesson 5: The Dative Case
  "a2-ch3-l5": {
    overview:
      "The Dative Case (Der Dativ) is the case of the indirect object: the recipient or beneficiary of an action ('to whom?' or 'for whom?' = Wem?). In this lesson, you will master the transformation of masculine, neuter, feminine, and plural articles, the dative plural '-n' suffix, and the most common verbs that strictly demand the Dative case.",
    canDo:
      "Can correctly express giving, helping, thanking, and answering using Dative articles and personal pronouns.",
    teacherNote:
      "Learn the dative articles as a rhythmic chant: 'dem, der, dem, den (+n)'. Note that in the dative plural, nouns also receive an extra -n at the end unless the noun already ends in -n or -s (e.g., die Kinder → den Kindern, die Freunde → den Freunden).",
    sections: [
      {
        title: "1. Nominative, Accusative & Dative Article Comparison",
        description:
          "See how the definite and indefinite articles change when transitioning into the Dative case:",
        table: {
          headers: ["Gender", "Nominativ (Subject)", "Akkusativ (Direct Obj)", "Dativ (Indirect Obj)", "Indefinite Dative"],
          rows: [
            ["Maskulin", "der Mann", "den Mann", "dem Mann", "einem Mann"],
            ["Neutrum", "das Kind", "das Kind", "dem Kind", "einem Kind"],
            ["Feminin", "die Frau", "die Frau", "der Frau", "einer Frau"],
            ["Plural", "die Freunde", "die Freunde", "den Freunden (+n)", "meinen Freunden"],
          ],
        },
      },
      {
        title: "2. Verbs That Exclusively Demand Dative (Dativ-Verben)",
        description:
          "Unlike English where 'help' or 'thank' take direct objects, in German these verbs strictly require the Dative case:",
        items: [
          {
            term: "helfen (to help)",
            pronunciation: "[HEL-fen + Dativ]",
            meaning: "helps someone",
            example: "Ich helfe dem Touristen bei der Wegbeschreibung. (I help the tourist with directions.)",
          },
          {
            term: "danken (to thank)",
            pronunciation: "[DAN-ken + Dativ]",
            meaning: "thanks someone",
            example: "Wir danken der Lehrerin für ihre Geduld. (We thank the teacher for her patience.)",
          },
          {
            term: "gefallen (to appeal to / to like)",
            pronunciation: "[ge-FAL-len + Dativ]",
            meaning: "appeals to someone",
            example: "Die Stadt gefällt dem Studenten sehr. (The city pleases the student / The student likes the city.)",
          },
          {
            term: "gehören (to belong to)",
            pronunciation: "[ge-HÖ-ren + Dativ]",
            meaning: "belongs to someone",
            example: "Das Fahrrad gehört meinem Nachbarn. (The bicycle belongs to my neighbor.)",
          },
          {
            term: "passen (to fit / suit)",
            pronunciation: "[PAS-sen + Dativ]",
            meaning: "suits / fits someone",
            example: "Passt Ihnen der Termin am Dienstag? (Does the appointment on Tuesday suit you?)",
          },
        ],
      },
      {
        title: "3. Personal Pronouns in the Dative Case",
        description:
          "When replacing nouns with pronouns in dative sentences, use these personal dative forms:",
        table: {
          headers: ["Nominative", "Dative Pronoun", "English", "Example Sentence"],
          rows: [
            ["ich", "mir", "to/for me", "Wie geht es dir? – Es geht mir gut."],
            ["du", "dir", "to/for you", "Ich gebe dir das Buch morgen zurück."],
            ["er / es", "ihm", "to/for him/it", "Das Hemd passt ihm perfekt."],
            ["sie (she)", "ihr", "to/for her", "Wir gratulieren ihr zum Geburtstag."],
            ["wir", "uns", "to/for us", "Können Sie uns bitte helfen?"],
            ["ihr", "euch", "to/for you all", "Ich wünsche euch einen schönen Urlaub."],
            ["sie / Sie", "ihnen / Ihnen", "to them / to You", "Ich danke Ihnen für das Gespräch."],
          ],
        },
      },
    ],
    dialogue: {
      context: "At a boutique in Vienna, customer Markus asks sales assistant Frau Bauer for advice on gifts.",
      lines: [
        {
          speaker: "Markus",
          german: "Guten Tag! Können Sie mir bitte helfen? Ich suche ein Geschenk für meine Schwester.",
          english: "Good day! Could you please help me? I am looking for a gift for my sister.",
        },
        {
          speaker: "Frau Bauer",
          german: "Sehr gerne! Was gefällt Ihrer Schwester denn besonders?",
          english: "With pleasure! What does your sister like in particular?",
        },
        {
          speaker: "Markus",
          german: "Sie liest viel und ihr gefällt klassisches Design. Dieser Lederschal gefällt mir.",
          english: "She reads a lot and classic design appeals to her. I like this leather scarf.",
        },
        {
          speaker: "Frau Bauer",
          german: "Dieser Schal steht ihr bestimmt ausgezeichnet. Soll ich ihn der Dame als Geschenk verpacken?",
          english: "This scarf will definitely suit her excellently. Shall I wrap it for the lady as a gift?",
        },
        {
          speaker: "Markus",
          german: "Ja, bitte! Ich danke Ihnen herzlich für die freundliche Beratung.",
          english: "Yes, please! I thank you warmly for the friendly consultation.",
        },
      ],
    },
    funFact: {
      title: "'Wie geht es dir?' Is Pure Dative!",
      content:
        "The standard German greeting 'Wie geht es dir?' literally translates to 'How goes it to you?'. You answer with 'Es geht mir gut' (It goes well to me). Saying 'Ich bin gut' does NOT mean 'I am doing well'—to native German speakers, 'Ich bin gut' means 'I am good at something' or 'I am morally virtuous'!",
    },
  },

  // A2 Chapter 3 Lesson 6: Two-Way Prepositions (Wechselpräpositionen)
  "a2-ch3-l6": {
    overview:
      "The 9 Two-Way Prepositions (Wechselpräpositionen) are among the most celebrated pillars of German spatial logic: an, auf, hinter, in, neben, über, unter, vor, zwischen. When expressing a static location or position without movement across boundaries ('Where?' = Wo?), they demand the DATIVE case. When describing a directed movement or change of position ('Where to?' = Wohin?), they demand the ACCUSATIVE case.",
    canDo:
      "Can flawlessly distinguish and apply Dative (static location) vs. Accusative (directional movement) with all 9 two-way prepositions.",
    teacherNote:
      "Pair your verbs with their cases! Static position verbs (stehen, liegen, sitzen, hängen) describe WHERE something is located → DATIVE. Action placement verbs (stellen, legen, setzen, hängen) describe WHERETO someone puts something → ACCUSATIVE.",
    sections: [
      {
        title: "1. The 9 Two-Way Prepositions (Die 9 Wechselpräpositionen)",
        description:
          "Memorize the 9 prepositions that fluctuate between Dative (Wo) and Accusative (Wohin):",
        table: {
          headers: ["Preposition", "English Meaning", "Wo? + Dativ (Static Location)", "Wohin? + Akkusativ (Direction)"],
          rows: [
            ["in", "in / inside / into", "im Zimmer (in dem)", "in das Zimmer (ins)"],
            ["an", "at / on (vertical surface)", "an der Wand", "an die Wand"],
            ["auf", "on / on top (horizontal)", "auf dem Tisch", "auf den Tisch"],
            ["neben", "next to / beside", "neben dem Stuhl", "neben den Stuhl"],
            ["hinter", "behind", "hinter dem Haus", "hinter das Haus"],
            ["vor", "in front of", "vor der Tür", "vor die Tür"],
            ["über", "above / over", "über der Lampe", "über die Straße"],
            ["unter", "under / below", "unter dem Bett", "unter das Bett"],
            ["zwischen", "between", "zwischen den Autos (Dat. Pl)", "zwischen die Autos"],
          ],
        },
      },
      {
        title: "2. The Positional Verb Pairs (Lageverben vs. Richtungsverben)",
        description:
          "German possesses distinct verb pairs for positioning objects vs. where they sit:",
        items: [
          {
            term: "stellen (Akk.) vs. stehen (Dat.)",
            pronunciation: "[SHTEL-len vs. SHTE-hen]",
            meaning: "to put upright (action) vs. to stand upright (static)",
            example: "Ich stelle die Vase auf den Tisch (Akk). / Die Vase steht auf dem Tisch (Dat).",
          },
          {
            term: "legen (Akk.) vs. liegen (Dat.)",
            pronunciation: "[LE-gen vs. LEE-gen]",
            meaning: "to lay flat (action) vs. to lie flat (static)",
            example: "Er legt das Buch auf das Bett (Akk). / Das Buch liegt auf dem Bett (Dat).",
          },
          {
            term: "setzen (Akk.) vs. sitzen (Dat.)",
            pronunciation: "[ZET-sen vs. ZIT-sen]",
            meaning: "to set / seat (action) vs. to sit (static)",
            example: "Sie setzt sich auf den Stuhl (Akk). / Sie sitzt auf dem Stuhl (Dat).",
          },
          {
            term: "hängen (Akk.) vs. hängen (Dat.)",
            pronunciation: "[HENG-en]",
            meaning: "to hang up something (action) vs. to be hanging (static)",
            example: "Wir hängen das Bild an die Wand (Akk). / Das Bild hängt an der Wand (Dat).",
          },
        ],
      },
    ],
    dialogue: {
      context: "Felix is moving into his new shared apartment (WG) in Berlin and asks his flatmate Jonas where to put his belongings.",
      lines: [
        {
          speaker: "Felix",
          german: "Jonas, wohin soll ich diese Umzugskartons stellen?",
          english: "Jonas, where should I put these moving boxes?",
        },
        {
          speaker: "Jonas",
          german: "Stell sie am besten in die Ecke neben den Schreibtisch.",
          english: "Put them in the corner next to the desk, ideally.",
        },
        {
          speaker: "Felix",
          german: "Und wo liegt eigentlich das WLAN-Passwort?",
          english: "And where is the Wi-Fi password located, actually?",
        },
        {
          speaker: "Jonas",
          german: "Der Zettel mit dem Code hängt an der Pinnwand in der Küche.",
          english: "The note with the code is hanging on the pinboard in the kitchen.",
        },
        {
          speaker: "Felix",
          german: "Super, danke! Ich lege mein Notizbuch gleich auf den Küchentisch.",
          english: "Great, thanks! I'll lay my notebook right onto the kitchen table.",
        },
        {
          speaker: "Jonas",
          german: "Mach das. Dann machen wir eine Pause und setzen uns auf den Balkon!",
          english: "Do that. Then we'll take a break and sit down on the balcony!",
        },
      ],
    },
    funFact: {
      title: "Contractions: 'im', 'am', 'ins', 'ans'",
      content:
        "German speakers constantly contract two-way prepositions with definite articles in spoken and written German: in + dem = im, an + dem = am, in + das = ins, an + das = ans. Using 'in dem' instead of 'im' sounds unnatural unless you want to emphasize that specific room over another.",
    },
  },
};
