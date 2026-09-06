import { Course, Chapter } from "../../../types/course.types";
import { ALL_GERMAN_LESSONS_CONTENT } from "../../lesson-contents";

const A1_RAW_CHAPTERS: Chapter[] = [
  {
    id: "a1-ch1",
    title: "Chapter 1: Einführung, Aussprache & Grundverben (Sounds, Pronouns & Core Verbs)",
    lessons: [
              {
                id: "a1-ch1-l1",
                title: "Lesson 1: Das Deutsche Alphabet & German Phonetics",
                description: "Alphabet letters A–Z, letter-by-letter phonetic reading, letters with German-specific sounds (W, V, J, Z).",
              },
              {
                id: "a1-ch1-l2",
                title: "Lesson 2: The Umlauts (ä, ö, ü), Diphthongs & Special Consonants (ß, ch, sch)",
                description: "Pronouncing umlauts (ä, ö, ü), diphthongs (ei, ie, eu, äu), the Eszett (ß), and hard vs. soft ch.",
              },
              {
                id: "a1-ch1-l3",
                title: "Lesson 3: Personal Pronouns & Formality (du vs. Sie)",
                description: "Subject pronouns (ich, du, er, sie, es, wir, ihr, sie, Sie) and formal vs. informal etiquette.",
              },
              {
                id: "a1-ch1-l4",
                title: "Lesson 4: The Pillar Verb 'sein' (to be)",
                description: "Full present tense conjugation of sein (bin, bist, ist, sind, seid, sind) and identity statements.",
              },
              {
                id: "a1-ch1-l5",
                title: "Lesson 5: The Pillar Verb 'haben' (to have)",
                description: "Full conjugation of haben (habe, hast, hat, haben, habt, haben) and expressing possession.",
              },
            ],
          },
          {
            id: "a1-ch2",
            title: "Chapter 2: Präsens & Satzstruktur (Present Tense & Sentence Logic)",
            lessons: [
              {
                id: "a1-ch2-l6",
                title: "Lesson 6: Regular Verb Conjugation in Präsens",
                description: "Standard personal endings (-e, -st, -t, -en) with verbs: lernen, machen, wohnen, arbeiten.",
              },
              {
                id: "a1-ch2-l7",
                title: "Lesson 7: Essential Stem-Changing / Irregular Verbs",
                description: "Vowel shifts in 2nd/3rd person: e -> i/ie (sehen, lesen, sprechen, essen, nehmen) and a -> ä (fahren).",
              },
              {
                id: "a1-ch2-l8",
                title: "Lesson 8: German Word Order & Verb Position",
                description: "The golden rule: Verb always in Position 2; subject-first statements vs. element-first inversion.",
              },
              {
                id: "a1-ch2-l9",
                title: "Lesson 9: Ja/Nein Questions & Negation Answers",
                description: "Verb-first questions ('Kommst du aus Deutschland?'), answering with Ja, Nein, and Doch.",
              },
              {
                id: "a1-ch2-l10",
                title: "Lesson 10: W-Questions (W-Fragen)",
                description: "Interrogative pronouns: Wer?, Was?, Wo?, Woher?, Wohin?, Wie?, Wann?, Warum?.",
              },
            ],
          },
          {
            id: "a1-ch3",
            title: "Chapter 3: Erste Kommunikation & Angaben zur Person (First Communication & Personal Info)",
            lessons: [
              {
                id: "a1-ch3-l11",
                title: "Lesson 11: Greetings, Goodbyes & Daily Politeness",
                description: "Essential greetings: Hallo, Guten Morgen, Guten Tag, Auf Wiedersehen, Tschüss, Bitte, Danke, Entschuldigung.",
              },
              {
                id: "a1-ch3-l12",
                title: "Lesson 12: Self-Introduction: Name, Origin & Residence",
                description: "'Ich heiße...', 'Ich komme aus...', 'Ich wohne in...', and asking others for their information.",
              },
              {
                id: "a1-ch3-l13",
                title: "Lesson 13: Countries, Languages & Nationalities",
                description: "Country names with/without articles, languages (Deutsch, Englisch), and nationality suffixes.",
              },
              {
                id: "a1-ch3-l14",
                title: "Lesson 14: Numbers (0–100), Phone Numbers & Email Addresses",
                description: "Counting 0–100, spelling names aloud (Buchstabieren), phone numbers, email syntax (@, .).",
              },
              {
                id: "a1-ch3-l15",
                title: "Lesson 15: Classroom German & Survival Phrases",
                description: "Classroom interaction: 'Wie bitte?', 'Ich verstehe nicht', 'Langsam, bitte', 'Was bedeutet das?'.",
              },
            ],
          },
          {
            id: "a1-ch4",
            title: "Chapter 4: Artikel, Nomen & Adjektive (Articles, Nouns & Descriptive Adjectives)",
            lessons: [
              {
                id: "a1-ch4-l16",
                title: "Lesson 16: Definite Articles (der, die, das) & Indefinite Articles (ein, eine)",
                description: "Recognizing masculine (der/ein), feminine (die/eine), and neuter (das/ein) noun categories.",
              },
              {
                id: "a1-ch4-l17",
                title: "Lesson 17: German Noun Rules: Capitalization & Plural Forms",
                description: "Universal noun capitalization; common plural endings (-e, -er, -en, -s, Umlaut).",
              },
              {
                id: "a1-ch4-l18",
                title: "Lesson 18: The Nominative Case (Nominativ: The Subject)",
                description: "Identifying the sentence subject (Wer oder was?), subject-verb agreement in statements.",
              },
              {
                id: "a1-ch4-l19",
                title: "Lesson 19: Descriptive Adjectives & Common Opposites (with sein)",
                description: "Predicative adjectives: groß/klein, alt/neu, gut/schlecht, billig/teuer, schön/hässlich.",
              },
            ],
          },
          {
            id: "a1-ch5",
            title: "Chapter 5: Der Akkusativ & Adjektiv-Grundlagen (The Accusative Case & Direct Objects)",
            lessons: [
              {
                id: "a1-ch5-l20",
                title: "Lesson 20: Akkusativ Introduction & Masculine Article Shifts",
                description: "Direct objects (Wen oder was?); key masculine shift: der -> den, ein -> einen, kein -> keinen.",
              },
              {
                id: "a1-ch5-l21",
                title: "Lesson 21: High-Frequency Akkusativ Verbs",
                description: "Verbs triggering direct objects: haben, brauchen, suchen, sehen, kaufen, nehmen, besuchen.",
              },
              {
                id: "a1-ch5-l22",
                title: "Lesson 22: Akkusativ Personal Pronouns",
                description: "Object pronouns: mich, dich, ihn, sie, es, uns, euch, sie/Sie ('Liebst du mich?', 'Ich sehe ihn').",
              },
              {
                id: "a1-ch5-l23",
                title: "Lesson 23: Basic Adjective Endings before Nouns in Akkusativ",
                description: "Attribute adjectives before direct objects ('Ich kaufe einen neuen Tisch', 'Sie trinkt kalte Milch').",
              },
            ],
          },
          {
            id: "a1-ch6",
            title: "Chapter 6: Verneinung, Possessivartikel & Natürliche Muster (Negation, Possessives & Connectors)",
            lessons: [
              {
                id: "a1-ch6-l24",
                title: "Lesson 24: Negation in German: 'nicht' vs. 'kein'",
                description: "Rules of negation: kein/keine for nouns with indefinite/zero articles; nicht for verbs & adjectives.",
              },
              {
                id: "a1-ch6-l25",
                title: "Lesson 25: Possessive Articles in Nominativ & Akkusativ (mein, dein, sein, ihr)",
                description: "Expressing 'my, your, his, her' (mein Buch, meine Mutter, meinen Bruder).",
              },
              {
                id: "a1-ch6-l26",
                title: "Lesson 26: Expressing Existence with 'es gibt' (+ Akkusativ)",
                description: "Describing availability: 'Es gibt einen Supermarkt', 'Hier gibt es viele Bücher'.",
              },
              {
                id: "a1-ch6-l27",
                title: "Lesson 27: Sentence Connectors: und, aber, oder",
                description: "Position 0 coordinating conjunctions linking two independent clauses without verb shift.",
              },
              {
                id: "a1-ch6-l28",
                title: "Lesson 28: Expressing Likes & Preferences: mögen, gern, lieber",
                description: "Differences between liking nouns (mögen), doing actions (gern), and preferring (lieber).",
              },
            ],
          },
          {
            id: "a1-ch7",
            title: "Chapter 7: Der Dativ, Präpositionen & Modalverben (Dative, Prepositions & Modals)",
            lessons: [
              {
                id: "a1-ch7-l29",
                title: "Lesson 29: Dativ Introduction & Article Transformations",
                description: "Indirect objects (Wem?); Dative articles: der/das -> dem, die -> der, die Plural -> den + n.",
              },
              {
                id: "a1-ch7-l30",
                title: "Lesson 30: Common Dativ Prepositions",
                description: "Fixed Dative prepositions: aus, bei, mit, nach, seit, von, zu ('Ich fahre mit dem Bus').",
              },
              {
                id: "a1-ch7-l31",
                title: "Lesson 31: Place & Time Prepositions: Wo vs. Wann",
                description: "Temporal prepositions (um, am, im, von... bis) and static location (in, an, auf).",
              },
              {
                id: "a1-ch7-l32",
                title: "Lesson 32: The 6 German Modal Verbs (Modalverben)",
                description: "Bracket structure: können (can), müssen (must), wollen (want), möchten (would like), dürfen (may), sollen (should).",
              },
              {
                id: "a1-ch7-l33",
                title: "Lesson 33: The Imperative Form & Polite Requests",
                description: "Formulating commands and polite requests for du, ihr, and Sie ('Geh!', 'Kommen Sie bitte!').",
              },
            ],
          },
          {
            id: "a1-ch8",
            title: "Chapter 8: Zeit, Tagesablauf, Familie & Wohnen (Time, Daily Routine, Family & Home)",
            lessons: [
              {
                id: "a1-ch8-l34",
                title: "Lesson 34: Telling Clock Time (Die Uhrzeit - Formal & Informal)",
                description: "24-hour official time (14:30 = vierzehn Uhr dreißig) and casual 12-hour phrasing (halb drei, Viertel vor).",
              },
              {
                id: "a1-ch8-l35",
                title: "Lesson 35: Days of the Week, Months, Seasons & Dates",
                description: "Montag bis Sonntag, 12 months, 4 seasons, and ordinal numbers for calendar dates ('am ersten Mai').",
              },
              {
                id: "a1-ch8-l36",
                title: "Lesson 36: Daily Routine & Separable Verbs (Trennbare Verben)",
                description: "Prefix separation: aufstehen, anrufen, einkaufen, fernsehen, einschlafen, vorbereiten.",
              },
              {
                id: "a1-ch8-l37",
                title: "Lesson 37: Family Members & Describing People",
                description: "Family vocabulary (Eltern, Geschwister, Kind), describing appearance, traits, and stating age.",
              },
              {
                id: "a1-ch8-l38",
                title: "Lesson 38: Housing, Rooms & Furniture",
                description: "Housing types (Wohnung, Haus), rooms (Wohnzimmer, Küche, Bad), and furniture (Tisch, Bett, Schrank).",
              },
            ],
          },
          {
            id: "a1-ch9",
            title: "Chapter 9: Alles Arbeit? & Das Perfekt (Work, Career & Past Tense)",
            lessons: [
              {
                id: "a1-ch9-l39",
                title: "Lesson 39: Job Profiles, Work Routines & German Workplace Culture",
                description: "German job titles in masculine and feminine forms, workplace routines, and work schedule vocabulary (Gleitzeit, Feierabend).",
              },
              {
                id: "a1-ch9-l40",
                title: "Lesson 40: Das Perfekt with 'haben': Regular Past Participles",
                description: "Constructing conversational past tense with 'haben' and regular participles (ge-...-t) in the sentence bracket (Satzklammer).",
              },
              {
                id: "a1-ch9-l41",
                title: "Lesson 41: Das Perfekt with 'sein': Movement & Change of State",
                description: "Mastering 'sein' in the past tense for motion (fahren, gehen, fliegen) and state transitions (aufstehen, einschlafen, bleiben).",
              },
              {
                id: "a1-ch9-l42",
                title: "Lesson 42: Essential Irregular Participles & Past Tense of 'sein'/'haben'",
                description: "High-frequency irregular participles (gesprochen, gegessen, gelesen) and spoken Präteritum for sein (war) and haben (hatte).",
              },
              {
                id: "a1-ch9-l43",
                title: "Lesson 43: Workplace Phone Calls & Professional Messages",
                description: "Standard business telephone etiquette ('Hier spricht...', 'Auf Wiederhören'), taking phone notes, and leaving messages.",
              },
            ],
          },
          {
            id: "a1-ch10",
            title: "Chapter 10: Kleidung und Mode (Clothing, Shopping & Demonstratives)",
            lessons: [
              {
                id: "a1-ch10-l44",
                title: "Lesson 44: Clothes, Colors & Personal Style",
                description: "Everyday garments with articles and plurals, colors, patterns, and describing outfits using 'tragen' (er trägt).",
              },
              {
                id: "a1-ch10-l45",
                title: "Lesson 45: Shopping in the Department Store & Exchanging Items",
                description: "Navigating store floor layouts (EG, OG, UG), asking sales assistants for help, and exchanging items (Umtausch mit Kassenbon).",
              },
              {
                id: "a1-ch10-l46",
                title: "Lesson 46: Sizing, Trying On & Fit (passen vs. stehen)",
                description: "Asking for clothing and shoe sizes, locating fitting rooms (Umkleidekabine), and describing fit (passt gut, zu eng, zu weit).",
              },
              {
                id: "a1-ch10-l47",
                title: "Lesson 47: Question Words & Demonstratives: 'Welch-?' and 'Dies-?'",
                description: "Targeted shopping queries using 'Welcher / Welche / Welches / Welchen' and pointing out items with 'Dieser / Diese / Dieses / Diesen'.",
              },
            ],
          },
          {
            id: "a1-ch11",
            title: "Chapter 11: Gesund und munter (Health, Body Parts & Doctor Visits)",
            lessons: [
              {
                id: "a1-ch11-l48",
                title: "Lesson 48: Body Parts & Anatomy (Körperteile)",
                description: "Anatomy with articles and plurals, and expressing physical pain using 'tut weh' (singular) and 'tun weh' (plural).",
              },
              {
                id: "a1-ch11-l49",
                title: "Lesson 49: Expressing Ailments, Symptoms & Pain",
                description: "Describing illnesses (Fieber, Husten, Schnupfen, Erkältung), stating duration with 'seit + Dativ', and wishing 'Gute Besserung!'.",
              },
              {
                id: "a1-ch11-l50",
                title: "Lesson 50: At the Doctor's Office (Beim Arzt & in der Apotheke)",
                description: "Doctor consultation dialogues ('Was fehlt Ihnen?'), prescriptions (Rezept), sick leave notes (Krankschreibung), and pharmacy visits.",
              },
              {
                id: "a1-ch11-l51",
                title: "Lesson 51: Giving Health Advice: Modal Verb 'sollen' & Imperative",
                description: "Conveying medical instructions and doctor's orders with 'sollen' ('Du sollst im Bett bleiben') and helpful imperatives.",
              },
            ],
          },
          {
            id: "a1-ch12",
            title: "Chapter 12: Ab in den Urlaub & A1 Finale (Travel, Hotel & Exam Prep)",
            lessons: [
              {
                id: "a1-ch12-l52",
                title: "Lesson 52: Vacation Planning, Transport & Travel Destinations",
                description: "Travel prepositions (nach Wien, ans Meer, in die Berge, in die Schweiz), booking train tickets, and station announcements.",
              },
              {
                id: "a1-ch12-l53",
                title: "Lesson 53: Weather Forecasts & Writing a Holiday Postcard",
                description: "Describing weather conditions (Es regnet, sonnig, bewölkt, warm/kalt) and writing a 4-part German holiday postcard.",
              },
              {
                id: "a1-ch12-l54",
                title: "Lesson 54: Hotel Check-In & Handling Room Problems",
                description: "Front desk check-in (Einzel-/Doppelzimmer), breakfast times, and politely reporting room complaints ('Die Heizung geht nicht').",
              },
              {
                id: "a1-ch12-l55",
                title: "Lesson 55: Comprehensive A1 Exam Mastery: Goethe & TELC A1",
                description: "Full walkthrough of Goethe-Zertifikat A1 (Start Deutsch 1) & telc Deutsch A1: Hören, Lesen, Schreiben, and Sprechen simulations.",
              },
            ],
          },
        ];

const attachLessonContent = (chapters: Chapter[]): Chapter[] =>
  chapters.map((chapter) => ({
    ...chapter,
    lessons: chapter.lessons.map((lesson) => ({
      ...lesson,
      content: ALL_GERMAN_LESSONS_CONTENT[lesson.id] || lesson.content,
    })),
  }));

export const germanCourse: Course = {
    id: "german-language-course",
    title: "German Language Learning Course",
    category: "Language",
    type: "Language Course",
    typeIcon: "path",
    structureType: "cefr-levels",
    tag1: "German (Deutsch)",
    tag2: "Beginner to Advanced",
    badgeCount: "",
    coverVariant: "german-language",
    imageUrl: "/course-images/german-language-course.jpg",
    buttonLabel: "Start",
    description:
      "Comprehensive German language learning from absolute beginner to advanced fluency, with interactive chapters, practical dialogues, audio pronunciation, and real-world examples.",
    featured: true,
    totalChapters: 21,
    totalLessons: 73,
    progressStatus: {
      type: "status",
      statusText: "Enrolled",
    },
    curriculum: [
      {
        level: "A1",
        title: "A1 • Absolute Beginner",
        description: "Foundations of German: Alphabet, basic greetings, core grammar, sentence structure, and daily survival vocabulary.",
        chapters: attachLessonContent(A1_RAW_CHAPTERS),
      },
      {
        level: "A2",
        title: "A2 • Elementary German",
        description: "Expand conversations: Past tense (Perfekt), modal verbs, separable verbs, and dative case.",
        chapters: attachLessonContent([
          {
            id: "a2-ch1",
            title: "Chapter 1: Talking About the Past (Das Perfekt)",
            lessons: [
              {
                id: "a2-ch1-l1",
                title: "Lesson 1: Past Participles with 'haben' (ge- ... -t / -en)",
                description: "Constructing conversational past tense sentences for completed actions.",
              },
              {
                id: "a2-ch1-l2",
                title: "Lesson 2: Past Participles with 'sein' (Movement & Change of State)",
                description: "Verbs taking sein: gehen, fahren, fliegen, aufstehen, passieren.",
              },
            ],
          },
          {
            id: "a2-ch2",
            title: "Chapter 2: Modal Verbs & Separable Verbs",
            lessons: [
              {
                id: "a2-ch2-l3",
                title: "Lesson 3: Modal Verbs (können, müssen, dürfen, wollen, sollen)",
                description: "Expressing ability, obligation, permission, and desire with bracket sentence structure.",
              },
              {
                id: "a2-ch2-l4",
                title: "Lesson 4: Trennbare Verben (Separable Prefix Verbs)",
                description: "Understanding separable prefixes (auf-, an-, mit-, aus-) in main clauses.",
              },
            ],
          },
          {
            id: "a2-ch3",
            title: "Chapter 3: The Dative Case & Two-Way Prepositions",
            lessons: [
              {
                id: "a2-ch3-l5",
                title: "Lesson 5: Indirect Objects & Dative Articles (dem, der, dem, den+n)",
                description: "Giving and helping: 'geben', 'helfen', 'gefallen', and personal dative pronouns.",
              },
              {
                id: "a2-ch3-l6",
                title: "Lesson 6: Wechselpräpositionen (Two-Way Prepositions: Wo vs. Wohin)",
                description: "Location (Dative) vs. Direction/Movement (Accusative): in, an, auf, unter, vor, hinter.",
              },
            ],
          },
        ]),
      },
      {
        level: "B1",
        title: "B1 • Intermediate German",
        description: "Independent language use: Subordinate clauses, passive voice, adjective declensions, and storytelling.",
        chapters: attachLessonContent([
          {
            id: "b1-ch1",
            title: "Chapter 1: Complex Sentence Structures & Subordinate Clauses",
            lessons: [
              {
                id: "b1-ch1-l1",
                title: "Lesson 1: Subordinating Conjunctions: weil, dass, wenn, obwohl",
                description: "Verb-final word order and expressing causes, conditions, and concessions.",
              },
              {
                id: "b1-ch1-l2",
                title: "Lesson 2: Relative Clauses (Relativsätze in Nominativ & Akkusativ)",
                description: "Connecting ideas smoothly using relative pronouns and descriptive clauses.",
              },
            ],
          },
          {
            id: "b1-ch2",
            title: "Chapter 2: The Passive Voice & Written Past (Präteritum)",
            lessons: [
              {
                id: "b1-ch2-l3",
                title: "Lesson 3: Das Vorgangspassiv (werden + Partizip II)",
                description: "Focusing on actions rather than agents: 'Das Auto wird repariert'.",
              },
              {
                id: "b1-ch2-l4",
                title: "Lesson 4: Narrative Past Tense in Formal & Written Contexts",
                description: "Mastering Präteritum forms used in news, books, and professional correspondence.",
              },
            ],
          },
        ]),
      },
      {
        level: "B2",
        title: "B2 • Upper Intermediate",
        description: "Fluent communication: Subjunctive II (Konjunktiv II), advanced prepositions, and professional German.",
        chapters: attachLessonContent([
          {
            id: "b2-ch1",
            title: "Chapter 1: Hypotheticals & Politeness (Konjunktiv II)",
            lessons: [
              {
                id: "b2-ch1-l1",
                title: "Lesson 1: Expressing Wishes, Polite Requests & Hypotheticals",
                description: "'Würde + Infinitiv' versus real subjunctive forms: wäre, hätte, könnte, müsste.",
              },
              {
                id: "b2-ch1-l2",
                title: "Lesson 2: Past Hypotheticals ('Hätte ich das gewusst...')",
                description: "Expressing regrets, past possibilities, and counterfactual scenarios.",
              },
            ],
          },
          {
            id: "b2-ch2",
            title: "Chapter 2: Professional & Academic German (Berufssprache)",
            lessons: [
              {
                id: "b2-ch2-l3",
                title: "Lesson 3: Formal Business Emails, Inquiries & Phone Etiquette",
                description: "Formal correspondence formulas: 'Sehr geehrte Damen und Herren', negotiations.",
              },
              {
                id: "b2-ch2-l4",
                title: "Lesson 4: Fixed Preposition-Verb Combinations (achten auf, abhängen von)",
                description: "Mastering the 50 most critical verb-preposition pairings and pronominal adverbs.",
              },
            ],
          },
        ]),
      },
      {
        level: "C1",
        title: "C1 • Advanced German",
        description: "Sophisticated communication: Nominalization style, participle constructions, and nuances.",
        chapters: attachLessonContent([
          {
            id: "c1-ch1",
            title: "Chapter 1: Nominalstil & Scientific Discourse",
            lessons: [
              {
                id: "c1-ch1-l1",
                title: "Lesson 1: Transforming Verbal Clauses into Nominal Style",
                description: "Prepositions of Genitive and turning subordinate clauses into dense academic structures.",
              },
              {
                id: "c1-ch1-l2",
                title: "Lesson 2: Extended Participle Attributes (Erweiterte Partizipialattribute)",
                description: "Deconstructing and constructing complex modifier phrases before nouns.",
              },
            ],
          },
        ]),
      },
      {
        level: "C2",
        title: "C2 • Mastery & Native Fluency",
        description: "Near-native precision: Idiomatic nuance, cultural depth, and advanced rhetoric.",
        chapters: attachLessonContent([
          {
            id: "c2-ch1",
            title: "Chapter 1: Rhetoric, Stylistics & Idiomatic Expression",
            lessons: [
              {
                id: "c2-ch1-l1",
                title: "Lesson 1: Redewendungen, Metaphors & Cultural Idioms",
                description: "Mastering nuanced idiomatic figures of speech across high-register German.",
              },
              {
                id: "c2-ch1-l2",
                title: "Lesson 2: Dialectal Variations & Advanced Stylistic Analysis",
                description: "Recognizing regional standards in Germany, Austria, and Switzerland.",
              },
            ],
          },
        ]),
      },
    ],
  };

