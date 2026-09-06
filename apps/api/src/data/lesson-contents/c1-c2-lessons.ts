import { LessonContent } from "../../types/course.types";

export const C1_C2_LESSONS_CONTENT: Record<string, LessonContent> = {
  // C1 Chapter 1 Lesson 1: Nominal Style & Genitive Prepositions
  "c1-ch1-l1": {
    overview:
      "At the CEFR C1 level, language use evolves from conversational fluency to academic and administrative mastery. The defining syntactic characteristic of high-register German (Wissenschaftssprache & Amtssprache) is the Nominal Style (Nominalstil). Instead of using subordinate clauses with verbs ('Weil das Wetter sich änderte...'), C1 German condenses complex actions into noun phrases coupled with Genitive prepositions ('Infolge des Wetterumschwungs...').",
    canDo:
      "Can effortlessly transform complex verbal clauses into concise academic nominal style and apply Genitive prepositions with precision.",
    teacherNote:
      "The four quintessential C1 Genitive prepositions are: aufgrund / infolge (due to), trotz / ungeachtet (despite), während (during), and anlässlich / zwecks (on the occasion of / for the purpose of). In C1 writing, avoid colloquial Dative substitution ('trotz dem'); the Genitive case is non-negotiable.",
    sections: [
      {
        title: "1. Systematic Transformation: Verbalstil → Nominalstil",
        description:
          "Observe how multi-clause sentences transform into dense academic noun phrases:",
        table: {
          headers: ["Verbalstil (Subordinate Clause)", "Genitive Preposition", "Nominalstil (C1 Scientific Style)", "English Translation"],
          rows: [
            ["Weil die Zinsen gestiegen sind...", "infolge (+ Gen)", "Infolge des Zinsanstiegs...", "As a result of the interest rate increase..."],
            ["Obwohl die Kosten hoch waren...", "ungeachtet (+ Gen)", "Ungeachtet der hohen Kosten...", "Regardless of the high costs..."],
            ["Bevor das Gesetz in Kraft trat...", "vor (+ Dat / Gen)", "Vor dem Inkrafttreten des Gesetzes...", "Prior to the enactment of the law..."],
            ["Damit die Daten geschützt werden...", "zwecks (+ Gen)", "Zwecks Gewährleistung des Datenschutzes...", "For the purpose of ensuring data privacy..."],
            ["Während der Minister sprach...", "während (+ Gen)", "Während der Rede des Ministers...", "During the minister's speech..."],
          ],
        },
      },
      {
        title: "2. Master Class Noun Formations (-ung, -heit, -keit, -tion)",
        description:
          "Converting complex verbs into concise academic abstract nouns:",
        items: [
          {
            term: "verhandeln → die Verhandlung",
            pronunciation: "[fer-HAND-lung]",
            meaning: "negotiation (from to negotiate)",
            example: "Nach Abschluss der Verhandlungen... (Upon conclusion of negotiations...).",
          },
          {
            term: "einführen → die Einführung",
            pronunciation: "[EYEN-füh-rung]",
            meaning: "implementation / rollout (from to introduce)",
            example: "Anlässlich der Einführung des neuen Systems... (On the occasion of the rollout...).",
          },
          {
            term: "überprüfen → die Überprüfung",
            pronunciation: "[ü-ber-PRÜ-fung]",
            meaning: "audit / verification",
            example: "Zur Vermeidung von Risiken bedarf es stetiger Überprüfung.",
          },
        ],
      },
    ],
    dialogue: {
      context: "At a legal and economic symposium in Zurich, Dr. Althaus and Dr. von Berg critique a constitutional reform proposal.",
      lines: [
        {
          speaker: "Dr. Althaus",
          german: "Frau Kollegin, ungeachtet der anfänglichen Bedenken plädiert die Kommission für eine zügige Verabschiedung der Reform.",
          english: "Colleague, regardless of initial concerns, the commission is pleading for swift adoption of the reform.",
        },
        {
          speaker: "Dr. von Berg",
          german: "Allerdings wirft die Novellierung infolge unzureichender Übergangsfristen erhebliche verfassungsrechtliche Fragen auf.",
          english: "However, due to insufficient transitional deadlines, the amendment raises considerable constitutional questions.",
        },
        {
          speaker: "Dr. Althaus",
          german: "Zwecks Vermeidung juristischer Unwägbarkeiten sollte das Gutachten noch vor Inkrafttreten der Richtlinie nachgebessert werden.",
          english: "For the purpose of avoiding legal uncertainties, the expert opinion should be revised prior to the directive's entry into force.",
        },
        {
          speaker: "Dr. von Berg",
          german: "Dem stimme ich vollumfänglich zu. Anlässlich des nächsten Plenums werden wir diesen Einwand zur Abstimmung stellen.",
          english: "I agree with that in full. On the occasion of the next plenary session, we will put this objection to a vote.",
        },
      ],
    },
    funFact: {
      title: "German Bureaucratic Compound Nouns (Beamtendeutsch)",
      content:
        "The nominal style is responsible for world-famous German multi-word compound nouns found in legal statutes, such as 'Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz' (Beef labeling monitoring task delegation law). While ridiculed by comedians, it represents extreme syntactic compression where an entire relative clause is welded into a single noun!",
    },
  },

  // C1 Chapter 1 Lesson 2: Extended Participle Attributes
  "c1-ch1-l2": {
    overview:
      "Extended Participle Attributes (Erweiterte Partizipialattribute) represent the pinnacle of German structural compression. Instead of placing a relative clause after a noun ('Die Dokumente, die von der Behörde sorgfältig geprüft wurden'), C1 German inserts the entire modifier string between the article and the noun ('Die [von der Behörde sorgfältig geprüften] Dokumente'). Deconstructing and synthesizing these structures is essential for academic reading and C1 exams.",
    canDo:
      "Can parse and construct extended participial modifiers with Participle I (active/simultaneous) and Participle II (passive/completed) with native ease.",
    teacherNote:
      "Use the 'bracket method' (Klammer-Methode) when reading: The article (e.g., 'Die') opens the bracket, and the noun (e.g., 'Maßnahmen') closes it. Everything sandwiched inside is an embedded descriptive clause that must be read backwards towards the noun.",
    sections: [
      {
        title: "1. Partizip I vs. Partizip II as Adjectival Modifiers",
        description:
          "Participle I (Verb + -d) expresses an active or ongoing process; Participle II expresses a completed or passive state:",
        table: {
          headers: ["Type", "Source Clause", "Extended Attribute (Erweitertes Partizip)", "English Meaning"],
          rows: [
            ["Partizip I (Active)", "Kosten, die kontinuierlich steigen", "die kontinuierlich steigenden Kosten", "the continuously rising costs"],
            ["Partizip I (Active)", "Forscher, die im Labor arbeiten", "die im Labor arbeitenden Forscher", "the researchers working in the lab"],
            ["Partizip II (Passive)", "Daten, die gestern erhoben wurden", "die gestern erhobenen Daten", "the data collected yesterday"],
            ["Partizip II (Passive)", "Ein Problem, das bisher ungelöst blieb", "ein bisher ungelöst gebliebenes Problem", "a hitherto unsolved problem"],
          ],
        },
      },
      {
        title: "2. The Gerundive with 'zu' (Partizip I + zu = Modality / Must be done)",
        description:
          "Adding 'zu' before Participle I creates a passive necessity or possibility attribute ('that which must be...'):",
        items: [
          {
            term: "die zu treffenden Entscheidungen",
            pronunciation: "[dee tsoo TREF-fen-den Ent-SHY-dun-gen]",
            meaning: "the decisions that must / ought to be made",
            example: "Equivalent to: 'die Entscheidungen, die getroffen werden müssen'.",
          },
          {
            term: "die nicht zu unterschätzende Gefahr",
            pronunciation: "[dee nikht tsoo un-ter-SHET-tsen-de Ge-FAHR]",
            meaning: "the danger that cannot / must not be underestimated",
            example: "Equivalent to: 'die Gefahr, die man nicht unterschätzen darf'.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Chief editor Wolfgang and senior science journalist Beate review a feature article on climate mitigation technologies.",
      lines: [
        {
          speaker: "Wolfgang",
          german: "Beate, der von dir verfasste Artikel über die im Tiefseebergbau eingesetzten Roboter ist stilistisch herausragend.",
          english: "Beate, the article composed by you on the robots deployed in deep-sea mining is stylistically outstanding.",
        },
        {
          speaker: "Beate",
          german: "Danke, Wolfgang. Die zu berücksichtigenden ökologischen Risiken bedürfen jedoch noch einer präziseren Differenzierung.",
          english: "Thank you, Wolfgang. However, the ecological risks that must be taken into account still require more precise differentiation.",
        },
        {
          speaker: "Wolfgang",
          german: "Insbesondere die von internationalen Wissenschaftlern erhobenen Bedenken sollten im Hauptteil stärker akzentuiert werden.",
          english: "In particular, the concerns raised by international scientists should be accentuated more strongly in the main body.",
        },
        {
          speaker: "Beate",
          german: "Ich werde die neu eingegangenen Daten unverzüglich einarbeiten und das überarbeitete Manuskript vorlegen.",
          english: "I will incorporate the newly arrived data immediately and submit the revised manuscript.",
        },
      ],
    },
    funFact: {
      title: "The Ultimate German Sentence Bracket",
      content:
        "Extended participle attributes represent the pinnacle of the Germanic 'Satzklammer' (sentence bracket). A sentence can span four lines where the subject's article 'Die' appears in line 1 and the noun 'Maßnahmen' only appears in line 4, separated by twenty words of nested participial qualifiers! Non-native readers must train their eyes to locate the closing noun first.",
    },
  },

  // C2 Chapter 1 Lesson 1: Redewendungen, Metaphors & Cultural Idioms
  "c2-ch1-l1": {
    overview:
      "CEFR C2 signifies full native-level fluency, characterized by effortless command of figurative idioms (Redewendungen), cultural allegories, and nuanced rhetorical subtext. At this tier, communication transcends literal dictionary definitions: you grasp historical connotations, regional idioms, and metaphorical wit seamlessly woven into intellectual and socio-political discourse.",
    canDo:
      "Can effortlessly integrate and decipher rich German idioms, metaphorical subtleties, and cultural allegories across high-register discussions.",
    teacherNote:
      "Never translate idioms word-for-word! Idioms like 'ins Gras beißen' (to bite the dust / die) or 'die Katze im Sack kaufen' (to buy a pig in a poke) reflect centuries of German agrarian, medieval, and guild history. Focus on the emotional color and social register of each expression.",
    sections: [
      {
        title: "1. High-Frequency German Cultural Idioms (Redewendungen)",
        description:
          "Essential figures of speech used in intellectual debates, editorial journalism, and daily life:",
        table: {
          headers: ["Redewendung", "Literal Meaning", "Figurative Meaning", "Example in Context"],
          rows: [
            ["jemandem auf den Zahn fühlen", "to feel someone's tooth", "to scrutinize / cross-examine someone thoroughly", "Der Ausschuss fühlte dem Vorstandsvorsitzenden gründlich auf den Zahn."],
            ["die Spreu vom Weizen trennen", "to separate the chaff from wheat", "to separate the high quality from the inferior", "In Krisenzeiten trennt sich die Spreu vom Weizen."],
            ["reinen Tisch machen", "to make a clean table", "to clear the air / come clean / resolve disputes", "Es ist an der Zeit, reinen Tisch zu machen und alle Fakten offenzulegen."],
            ["das Zünglein an der Waage sein", "to be the tongue on the scale", "to be the decisive tipping factor", "Die parteilosen Abgeordneten bildeten das Zünglein an der Waage."],
            ["den Teufel an die Wand malen", "to paint the devil on the wall", "to cry wolf / catastrophize needlessly", "Wir sollten vorsichtig sein, aber man muss nicht gleich den Teufel an die Wand malen."],
            ["in den sauren Apfel beißen", "to bite into the sour apple", "to bite the bullet / accept an unpleasant necessity", "Wir müssen in den sauren Apfel beißen und das Budget kürzen."],
          ],
        },
      },
      {
        title: "2. Nuanced Idiomatic Register: Elevated vs. Colloquial",
        description:
          "Recognizing the tonal register of German figurative expressions:",
        items: [
          {
            term: "das Handtuch werfen",
            pronunciation: "[dahs HAHND-tookh VER-fen]",
            meaning: "to throw in the towel / concede defeat",
            example: "Trotz des immensen Drucks weigerte sich der Parteichef, das Handtuch zu werfen.",
          },
          {
            term: "aus der Reihe tanzen",
            pronunciation: "[ous der RYE-he TAHN-tsen]",
            meaning: "to step out of line / deviate from norms",
            example: "In einem derart disziplinierten Orchester darf niemand aus der Reihe tanzen.",
          },
          {
            term: "Öl ins Feuer gießen",
            pronunciation: "[ÖL ins FOY-er GEE-sen]",
            meaning: "to add fuel to the fire / exacerbate tensions",
            example: "Mit seinen provokanten Äußerungen goss der Minister nur noch mehr Öl ins Feuer.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Political commentators Helene and Albrecht debate the outcome of a contentious coalition negotiation in Berlin.",
      lines: [
        {
          speaker: "Helene",
          german: "Albrecht, die Verhandlungspartner haben gestern bis zum Morgengrauen gerungen, um endlich reinen Tisch zu machen.",
          english: "Albrecht, the negotiating partners wrestled until dawn yesterday to finally clear the air.",
        },
        {
          speaker: "Albrecht",
          german: "In der Tat. Am Ende bildete die Steuerfrage das Zünglein an der Waage, bei dem beide Seiten in den sauren Apfel beißen mussten.",
          english: "Indeed. In the end, the tax question proved to be the decisive factor where both sides had to bite the bullet.",
        },
        {
          speaker: "Helene",
          german: "Gleichwohl sollten die Medienvertreter vorsichtig sein und nicht voreilig den Teufel an die Wand malen.",
          english: "Nevertheless, media representatives should be cautious and not prematurely catastrophize.",
        },
        {
          speaker: "Albrecht",
          german: "Zweifellos. Die kommenden Monate werden die Spreu vom Weizen trennen und zeigen, wie tragfähig dieser Kompromiss wirklich ist.",
          english: "Undoubtedly. The coming months will separate the wheat from the chaff and show how viable this compromise truly is.",
        },
      ],
    },
    funFact: {
      title: "Origin of 'Jemandem auf den Zahn fühlen'",
      content:
        "The idiom 'jemandem auf den Zahn fühlen' (to scrutinize someone thoroughly) traces back to medieval horse markets. Prospective buyers would inspect a horse's teeth and tap them with their knuckles to determine the animal's true age and health, regardless of what the trader claimed. Today it means rigorously testing someone's competence or claims.",
    },
  },

  // C2 Chapter 1 Lesson 2: Dialectal Variations & Stylistic Nuance (DACH-Sprachraum)
  "c2-ch1-l2": {
    overview:
      "German is a pluricentric language (Plurizentrische Sprache) with three codominant national standard varieties: German Standard German (Bundesdeutsches Hochdeutsch), Austrian German (Österreichisches Deutsch), and Swiss High German (Schweizer Hochdeutsch) across the DACH region. True C2 mastery requires differentiating national lexical standards (Helvetisms, Austriacisms, Teutonisms) and fluidly navigating between sociolinguistic registers from street vernacular to formal literary prose.",
    canDo:
      "Can comprehend regional standard lexical differences across Germany, Austria, and Switzerland and calibrate stylistics to any communicative register.",
    teacherNote:
      "Switzerland does not use the letter 'ß'! In Swiss High German (and in the Neue Zürcher Zeitung), 'ß' is always replaced with 'ss' (e.g., 'schliessen', 'Strasse'). In Austria, official state documents use specific culinary and administrative terms (e.g., Jänner instead of Januar, Matura instead of Abitur). Neither is a 'dialect'; both are fully codified official standard languages.",
    sections: [
      {
        title: "1. Lexical Triplets across the DACH Region (Deutschland, Österreich, Schweiz)",
        description:
          "Official standard vocabulary differences across the three German-speaking nations:",
        table: {
          headers: ["Concept (English)", "Bundesdeutsch (Germany)", "Österreichisch (Austria)", "Schweizer Hochdeutsch (Switzerland)"],
          rows: [
            ["January", "der Januar", "der Jänner", "der Januar"],
            ["High School Diploma", "das Abitur", "die Matura", "die Matura"],
            ["Tomato", "die Tomate", "die Paradeiser", "die Tomate"],
            ["Potato", "die Kartoffel", "der Erdapfel", "die Kartoffel / der Herdöpfel"],
            ["Whipped Cream", "die Schlagsahne", "das Schlagobers", "der Schlagrahm"],
            ["Sidewalk / Pavement", "der Bürgersteig / Gehweg", "das Trottoir / Gehsteig", "das Trottoir"],
            ["Hospital", "das Krankenhaus", "das Spital", "das Spital"],
            ["Bicycle", "das Fahrrad", "das Fahrrad / Rad", "das Velo"],
            ["Ticket (transit/fine)", "die Fahrkarte / der Strafzettel", "der Fahrschein / der Strafzettel", "das Billet / die Busse"],
          ],
        },
      },
      {
        title: "2. Syntactic & Phonetic DACH Nuances",
        description:
          "Grammatical variations between national standards:",
        items: [
          {
            term: "Perfekt Auxiliary Variations (stehen, sitzen, liegen)",
            pronunciation: "[ich bin gestanden vs. ich habe gestanden]",
            meaning: "I stood / was standing",
            example: "In Southern Germany, Austria, and Switzerland, 'stehen', 'sitzen', and 'liegen' take SEIN in Perfekt: 'Ich bin am Bahnhof gestanden' (Standard in Austria/South Germany; Northern Germany says 'Ich habe gestanden').",
          },
          {
            term: "Diminutives across DACH: -chen, -erl, -li",
            pronunciation: "[Brötchen vs. Semmel vs. Brötli]",
            meaning: "Bread roll",
            example: "Germany: das Brötchen; Austria/Bavaria: das Semmerl / die Semmel; Switzerland: das Brötli / Weggli.",
          },
        ],
      },
    ],
    dialogue: {
      context: "At an international literary conference in Basel, authors from Zurich, Vienna, and Berlin discuss the pluricentric beauty of German.",
      lines: [
        {
          speaker: "Urs (Zürich)",
          german: "Grüezi mitenand! Ich bin mit dem Velo durch das Quartier gefahren und habe mir am Kiosk ein Billet fürs Spital-Symposium besorgt.",
          english: "Hello everyone! I rode through the neighborhood on my bike and got myself a ticket for the hospital symposium at the kiosk.",
        },
        {
          speaker: "Valerie (Wien)",
          german: "Servus Urs! Ich bin heute schon um sieben Uhr in der Früh aufgestanden und habe erst ein feines Frühstück mit frischem Schlagobers genossen.",
          english: "Hello Urs! I got up at seven in the morning today and first enjoyed a fine breakfast with fresh whipped cream.",
        },
        {
          speaker: "Konstantin (Berlin)",
          german: "Guten Tag euch beiden! Es fasziniert mich immer wieder, wie reichhaltig und nuanciert unsere gemeinsame Sprache im DACH-Raum ist.",
          english: "Good day to you both! It constantly fascinates me how rich and nuanced our shared language across the DACH region is.",
        },
        {
          speaker: "Urs (Zürich)",
          german: "Ganz genau. Diese sprachliche Vielfalt ist kein Hindernis, sondern der größte kulturelle Reichtum des deutschen Sprachraums.",
          english: "Exactly. This linguistic diversity is not an obstacle, but the greatest cultural wealth of the German-speaking realm.",
        },
      ],
    },
    funFact: {
      title: "The Official Austrian Dictionary: Österreichisches Wörterbuch (ÖWB)",
      content:
        "While Germany considers 'Duden' its leading spelling authority, the Republic of Austria maintains its own official state dictionary: the 'Österreichisches Wörterbuch' (ÖWB). Established in 1951 by the Federal Ministry of Education, it officially codifies Austrian German vocabulary and pronunciation for all Austrian schools, courts, and civil service.",
    },
  },
};
