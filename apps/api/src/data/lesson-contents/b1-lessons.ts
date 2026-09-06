import { LessonContent } from "../../types/course.types";

export const B1_LESSONS_CONTENT: Record<string, LessonContent> = {
  // B1 Chapter 1 Lesson 1: Subordinating Conjunctions
  "b1-ch1-l1": {
    overview:
      "In CEFR B1, you graduate from simple coordination (und, aber, oder) to complex subordination. Subordinating conjunctions (Nebensätze) fundamentally change German syntax by sending the finite conjugated verb to the very end of the clause (Verb-Letzt-Stellung). In this lesson, you will master the five most frequent subordinating conjunctions: 'weil' (because), 'dass' (that), 'wenn' (if / whenever), 'obwohl' (although), and 'da' (since / given that).",
    canDo:
      "Can articulate complex arguments, motivations, conditions, and concessions using subordinate clauses with correct verb-final word order.",
    teacherNote:
      "Watch the comma! Every subordinate clause in German MUST be separated from the main clause by a comma. If the sentence begins with the subordinate clause ('Weil es regnet, ...'), the main clause begins immediately with its conjugated verb: 'Weil es regnet, BLEIBE ich zu Hause' (Verb-First in the following main clause!).",
    sections: [
      {
        title: "1. The 5 Core Subordinating Conjunctions (Kausale & Konditionale Nebensätze)",
        description:
          "Each conjunction establishes a specific logical relationship between ideas while locking the conjugated verb at the clause boundary:",
        table: {
          headers: ["Conjunction", "Function", "Example (Main Clause First)", "Example (Nebensatz First)"],
          rows: [
            ["weil", "Reason / Cause (because)", "Ich lerne Deutsch, weil ich in Wien arbeiten will.", "Weil ich in Wien arbeiten will, lerne ich Deutsch."],
            ["dass", "Content / Fact (that)", "Ich weiß, dass deutsche Grammatik logisch ist.", "Dass deutsche Grammatik logisch ist, weiß jeder."],
            ["wenn", "Condition / Time (if / when)", "Wir gehen spazieren, wenn die Sonne scheint.", "Wenn die Sonne scheint, gehen wir spazieren."],
            ["obwohl", "Concession (although)", "Er kommt zum Meeting, obwohl er erkältet ist.", "Obwohl er erkältet ist, kommt er zum Meeting."],
            ["da", "Given reason (since / as)", "Wir bleiben hier, da der Zug Verspätung hat.", "Da der Zug Verspätung hat, bleiben wir hier."],
          ],
        },
      },
      {
        title: "2. The 'Weil' vs. 'Denn' Contrast",
        description:
          "Both words translate to 'because' in English, but operate under completely different syntactic rules:",
        items: [
          {
            term: "weil (Subordinating Conjunction)",
            pronunciation: "[VEYEL]",
            meaning: "because (Verb goes to the end!)",
            example: "Ich esse nichts, weil ich keinen Hunger HABE. (Verb 'habe' at the end).",
          },
          {
            term: "denn (Coordinating Conjunction)",
            pronunciation: "[DENN]",
            meaning: "for / because (Position 0; normal SVO word order follows!)",
            example: "Ich esse nichts, denn ich HABE keinen Hunger. (Verb 'habe' stays in Position 2).",
          },
        ],
        notes: [
          "Never send the verb to the end after 'denn'.",
          "In formal German examinations (Goethe-Zertifikat B1 / telc B1), examiners look specifically for correct verb placement with 'weil' and 'obwohl'.",
        ],
      },
    ],
    dialogue: {
      context: "At a co-working space in Hamburg, software developer David explains his career decision to his mentor Elena.",
      lines: [
        {
          speaker: "Elena",
          german: "David, ich habe gehört, dass du ein Jobangebot aus Zürich bekommen hast!",
          english: "David, I heard that you received a job offer from Zurich!",
        },
        {
          speaker: "David",
          german: "Ja, das stimmt! Obwohl das Angebot sehr verlockend ist, zögere ich noch ein wenig.",
          english: "Yes, that is true! Although the offer is very tempting, I am still hesitating a little.",
        },
        {
          speaker: "Elena",
          german: "Warum zögerst du? Liegt es daran, weil deine Familie hier in Hamburg wohnt?",
          english: "Why are you hesitating? Is it because your family lives here in Hamburg?",
        },
        {
          speaker: "David",
          german: "Genau. Da meine Kinder hier zur Schule gehen, will ich nichts überstürzen.",
          english: "Exactly. Since my children attend school here, I don't want to rush anything.",
        },
        {
          speaker: "Elena",
          german: "Das verstehe ich vollkommen. Wenn man Familie hat, muss man solche Entscheidungen gemeinsam treffen.",
          english: "I understand that completely. When you have a family, you have to make such decisions together.",
        },
        {
          speaker: "David",
          german: "Ich werde mich am Wochenende mit meiner Frau beraten, damit wir die beste Lösung finden.",
          english: "I will consult with my wife over the weekend so that we find the best solution.",
        },
      ],
    },
    funFact: {
      title: "Spoken 'Weil' with Main Clause Word Order: A Modern Shift",
      content:
        "In colloquial spoken German across Berlin, Cologne, and Munich, native speakers frequently say: 'Ich gehe nach Hause, weil... ich bin müde' instead of '...weil ich müde bin.' While omnipresent in casual street dialogue, Duden and German exam boards strictly classify this as substandard German. In all exams and professional writing, verb-final is mandatory!",
    },
  },

  // B1 Chapter 1 Lesson 2: Relative Clauses
  "b1-ch1-l2": {
    overview:
      "Relative clauses (Relativsätze) allow you to describe and define nouns smoothly without repeating them across choppy, short sentences. A German relative pronoun matches the GENDER and NUMBER of the noun it refers to (antecedent), but receives its CASE (Nominativ, Akkusativ, Dativ, Genitiv) from its grammatical role inside the relative clause.",
    canDo:
      "Can formulate descriptive relative clauses in Nominative, Accusative, and Dative to provide details about people, objects, and concepts.",
    teacherNote:
      "Relative pronouns in Nominative and Accusative look almost identical to definite articles (der, die, das, den). But in Dative Plural, the relative pronoun is 'DENEN' (never 'den')! And in Genitive, they are 'dessen' (masc/neut) and 'deren' (fem/plural).",
    sections: [
      {
        title: "1. The Complete German Relative Pronoun Matrix",
        description:
          "Memorize the forms of relative pronouns across all 4 cases:",
        table: {
          headers: ["Kasus (Case)", "Maskulin", "Feminin", "Neutrum", "Plural"],
          rows: [
            ["Nominativ (Subject in rel. clause)", "der", "die", "das", "die"],
            ["Akkusativ (Object in rel. clause)", "den", "die", "das", "die"],
            ["Dativ (Indirect / after Dat. prep)", "dem", "der", "dem", "denen"],
            ["Genitiv (Possessive / 'whose')", "dessen", "deren", "dessen", "deren"],
          ],
        },
      },
      {
        title: "2. Case Function in Action",
        description:
          "Observe how the same noun (der Mann) changes its relative pronoun depending on its role in the relative clause:",
        items: [
          {
            term: "1. Nominative Relative Clause (Subject)",
            pronunciation: "[Der Mann, der dort drüben steht, ist mein Professor.]",
            meaning: "The man who is standing over there is my professor.",
            example: "'der Mann' is doing the standing → Nominative 'der'.",
          },
          {
            term: "2. Accusative Relative Clause (Direct Object)",
            pronunciation: "[Der Mann, den wir gestern getroffen haben, kommt aus Bern.]",
            meaning: "The man whom we met yesterday comes from Bern.",
            example: "We met him ('wir haben ihn getroffen') → Accusative 'den'.",
          },
          {
            term: "3. Dative Relative Clause (Indirect Object)",
            pronunciation: "[Der Mann, dem ich geholfen habe, war sehr dankbar.]",
            meaning: "The man whom I helped was very grateful.",
            example: "'helfen' triggers Dative ('ich helfe ihm') → Dative 'dem'.",
          },
          {
            term: "4. With Preposition inside Relative Clause",
            pronunciation: "[Der Kollege, mit dem ich arbeite, ist sehr kompetent.]",
            meaning: "The colleague with whom I work is very competent.",
            example: "'mit' is always Dative → 'mit dem'.",
          },
        ],
      },
    ],
    dialogue: {
      context: "At a tech startup in Frankfurt, recruiter Miriam introduces team lead Tim to candidate profiles.",
      lines: [
        {
          speaker: "Miriam",
          german: "Tim, hast du dir die Bewerbung von Frau Meier angesehen, die ich dir geschickt habe?",
          english: "Tim, did you look at the application from Ms. Meier that I sent you?",
        },
        {
          speaker: "Tim",
          german: "Ja! Sie ist die Kandidatin, deren Lebenslauf mich wirklich beeindruckt hat.",
          english: "Yes! She is the candidate whose CV really impressed me.",
        },
        {
          speaker: "Miriam",
          german: "Und wie steht es mit Herrn Brandt, mit dem du gestern das Telefoninterview geführt hast?",
          english: "And how about Mr. Brandt, with whom you conducted the phone interview yesterday?",
        },
        {
          speaker: "Tim",
          german: "Er hat fantastische Referenzen von den Kunden, denen er bei der Cloud-Migration geholfen hat.",
          english: "He has fantastic references from the clients whom he helped with cloud migration.",
        },
        {
          speaker: "Miriam",
          german: "Ausgezeichnet. Dann laden wir beide Kandidaten zu einer persönlichen Runde ein.",
          english: "Excellent. Then we will invite both candidates to an in-person round.",
        },
      ],
    },
    funFact: {
      title: "German Relative Clauses Always Require Commas",
      content:
        "In English, restrictive relative clauses often omit commas ('The book that I read was great'). In German, omitting the comma before or after a relative clause is considered a serious punctuation error: 'Das Buch, das ich gelesen habe, war großartig.' Commas in German serve as syntactic fences denoting clause boundaries.",
    },
  },

  // B1 Chapter 2 Lesson 3: The Passive Voice
  "b1-ch2-l3": {
    overview:
      "The Passive Voice (Das Passiv / Vorgangspassiv) shifts communicative focus from WHO performs the action to the ACTION itself or the OBJECT experiencing it. It is ubiquitous in German news broadcasts, technical manuals, recipes, and official legal documents. The passive is formed with the conjugated auxiliary 'werden' + Partizip II at the end of the clause.",
    canDo:
      "Can describe processes, technical procedures, rules, and news reports using the present and past passive voice with 'von' or 'durch'.",
    teacherNote:
      "Distinguish 'von' vs. 'durch'! If the agent performing the action is an active person, company, or institution, use 'von + Dativ' ('Der Brief wird von dem Anwalt geschrieben'). If the cause is an instrument, medium, or natural force, use 'durch + Akkusativ' ('Die Stadt wurde durch das Hochwasser zerstört').",
    sections: [
      {
        title: "1. Formula for the Present Passive (Präsens Passiv)",
        description:
          "Form: Subjekt + konjugiertes 'werden' (Position 2) + ... + Partizip II (Satzende):",
        table: {
          headers: ["Aktiv-Satz", "Passiv-Satz (Präsens)", "Agent (von + Dat)", "English Translation"],
          rows: [
            ["Der Mechaniker repariert das Auto.", "Das Auto wird repariert.", "(vom Mechaniker)", "The car is being repaired (by the mechanic)."],
            ["Der Koch bereitet das Essen zu.", "Das Essen wird zubereitet.", "(vom Koch)", "The meal is being prepared (by the chef)."],
            ["Die Firma baut neue Wohnungen.", "Neue Wohnungen werden gebaut.", "(von der Firma)", "New apartments are being built (by the company)."],
            ["Ein Arzt untersucht den Patienten.", "Der Patient wird untersucht.", "(vom Arzt)", "The patient is being examined (by a doctor)."],
            ["Man schließt die Bibliothek um 20 Uhr.", "Die Bibliothek wird um 20 Uhr geschlossen.", "–", "The library is closed at 8 PM."],
          ],
        },
      },
      {
        title: "2. The Präteritum Passive (Narrative Past Passive)",
        description:
          "In news reports and historical documents, the past passive is formed with 'wurden' (past of werden) + Partizip II:",
        items: [
          {
            term: "wurde gebaut",
            pronunciation: "[VUR-de ge-BOUT]",
            meaning: "was built",
            example: "Das Brandenburger Tor wurde 1791 fertiggestellt. (The Brandenburg Gate was completed in 1791.)",
          },
          {
            term: "wurde gegründet",
            pronunciation: "[VUR-de ge-GRÜN-det]",
            meaning: "was founded",
            example: "Die Universität Heidelberg wurde im Jahr 1386 gegründet. (Heidelberg University was founded in 1386.)",
          },
          {
            term: "wurde unterschrieben",
            pronunciation: "[VUR-de un-ter-SHREE-ben]",
            meaning: "was signed",
            example: "Der Vertrag wurde von beiden Partnern unterschrieben. (The contract was signed by both partners.)",
          },
        ],
      },
    ],
    dialogue: {
      context: "Car owner Sandra drops her vehicle off at a garage and asks master mechanic Herr Schuster about the repair timeline.",
      lines: [
        {
          speaker: "Sandra",
          german: "Guten Tag, Herr Schuster. Welche Arbeiten werden heute an meinem Wagen durchgeführt?",
          english: "Good day, Mr. Schuster. What work is being carried out on my car today?",
        },
        {
          speaker: "Herr Schuster",
          german: "Zuerst werden die Bremsbeläge überprüft und das Motoröl wird gewechselt.",
          english: "First the brake pads are inspected and the engine oil is changed.",
        },
        {
          speaker: "Sandra",
          german: "Wird die Hauptuntersuchung (TÜV) auch gleich gemacht?",
          english: "Is the roadworthiness inspection (TÜV) being done right away as well?",
        },
        {
          speaker: "Herr Schuster",
          german: "Ja, die Abgaswerte wurden bereits heute Morgen vom Prüfingenieur gemessen.",
          english: "Yes, the emissions values were already measured by the test engineer this morning.",
        },
        {
          speaker: "Sandra",
          german: "Wunderbar. Bis wann kann das Auto abgeholt werden?",
          english: "Wonderful. By when can the car be picked up?",
        },
        {
          speaker: "Herr Schuster",
          german: "Sobald alle Rechnungen gedruckt sind, werden Sie per SMS benachrichtigt. Etwa gegen 16 Uhr.",
          english: "As soon as all invoices are printed, you will be notified by SMS. Around 4 PM.",
        },
      ],
    },
    funFact: {
      title: "The Impersonal Passive: 'Hier wird gearbeitet!'",
      content:
        "German has a unique construction known as the Impersonal Passive (Subjektloses Passiv). Verbs that do not take an accusative object can still be made passive to express a general activity: 'Hier wird nicht geraucht!' (No smoking here!), 'Am Sonntag wird nicht getanzt!' (No dancing on Sunday!). It highlights German linguistic focus on societal order.",
    },
  },

  // B1 Chapter 2 Lesson 4: Narrative Past (Präteritum)
  "b1-ch2-l4": {
    overview:
      "While spoken German prefers the Perfekt ('Ich habe gearbeitet'), written German, news articles, literary novels, historical biographies, and formal business letters rely heavily on the simple past (Präteritum / Imperfekt). Additionally, even in everyday spoken conversation, modal verbs (musste, konnte) and the copula 'sein/haben' (war, hatte) are almost exclusively used in Präteritum.",
    canDo:
      "Can comprehend written news reports, narrate formal stories, and use Präteritum verbs accurately in written correspondence.",
    teacherNote:
      "Notice the symmetry: in Präteritum, the 1st person (ich) and 3rd person (er/sie/es) are ALWAYS identical across all weak and strong verbs (e.g., ich machte / er machte; ich ging / er ging).",
    sections: [
      {
        title: "1. Regular (Weak) Verbs in Präteritum: Stem + -te",
        description:
          "Regular verbs insert -te- between the verb stem and the personal ending:",
        table: {
          headers: ["Pronoun", "arbeiten (-tete-)", "lernen (-te-)", "wohnen (-te-)", "sagen (-te-)"],
          rows: [
            ["ich", "arbeitete", "lernte", "wohnte", "sagte"],
            ["du", "arbeitetest", "lerntest", "wohntest", "sagtest"],
            ["er / sie / es", "arbeitete", "lernte", "wohnte", "sagte"],
            ["wir", "arbeiteten", "lernten", "wohnten", "sagten"],
            ["ihr", "arbeitetet", "lerntet", "wohntet", "sagtet"],
            ["sie / Sie", "arbeiteten", "lernten", "wohnten", "sagten"],
          ],
        },
      },
      {
        title: "2. The Top 10 Strong Verbs in Präteritum",
        description:
          "Strong verbs change their root vowel (Ablaut) without any -te suffix:",
        table: {
          headers: ["Infinitiv", "Präteritum (ich/er)", "Perfekt (Spoken)", "English Meaning"],
          rows: [
            ["sein", "war", "ist gewesen", "was / were"],
            ["haben", "hatte", "hat gehabt", "had"],
            ["gehen", "ging", "ist gegangen", "went"],
            ["kommen", "kam", "ist gekommen", "came"],
            ["geben", "gab", "hat gegeben", "gave (Es gab = There was)"],
            ["sehen", "sah", "hat gesehen", "saw"],
            ["finden", "fand", "hat gefunden", "found"],
            ["schreiben", "schrieb", "hat geschrieben", "wrote"],
            ["sprechen", "sprach", "hat gesprochen", "spoke"],
            ["wissen", "wusste", "hat gewusst", "knew (fact)"],
          ],
        },
      },
    ],
    dialogue: {
      context: "Journalist Niklas interviews historian Dr. Steiner about the history of Berlin in the 1920s.",
      lines: [
        {
          speaker: "Niklas",
          german: "Dr. Steiner, wie lebten die Menschen in Berlin während der Goldenen Zwanziger Jahre?",
          english: "Dr. Steiner, how did people live in Berlin during the Golden Twenties?",
        },
        {
          speaker: "Dr. Steiner",
          german: "Berlin war damals eine pulsierende Weltmetropole. Tausende Künstler und Wissenschaftler zogen in die Stadt.",
          english: "Berlin was a pulsating global metropolis back then. Thousands of artists and scientists moved into the city.",
        },
        {
          speaker: "Niklas",
          german: "Gab es damals schon moderne öffentliche Verkehrsmittel?",
          english: "Were there already modern public transportation systems back then?",
        },
        {
          speaker: "Dr. Steiner",
          german: "Ja, die BVG entstand 1929 und modernisierte das gesamte Nahverkehrsnetz mit neuen U-Bahnen und Bussen.",
          english: "Yes, the BVG was formed in 1929 and modernized the entire public transit network with new subways and buses.",
        },
        {
          speaker: "Niklas",
          german: "Und welche sozialen Herausforderungen prägten das Jahrzehnt?",
          english: "And which social challenges shaped the decade?",
        },
        {
          speaker: "Dr. Steiner",
          german: "Trotz des kulturellen Aufschwungs litten viele Arbeiter unter großer Wohnungsnot und wirtschaftlicher Unsicherheit.",
          english: "Despite the cultural boom, many workers suffered from severe housing shortages and economic insecurity.",
        },
      ],
    },
    funFact: {
      title: "'Es war einmal...' (Once Upon a Time)",
      content:
        "Every single German fairy tale collected by the Brothers Grimm (Brüder Grimm) starts with: 'Es war einmal...' and is narrated 100% in the Präteritum tense. For German children, the Präteritum sounds inherently magical and evocative of storytelling.",
    },
  },
};
