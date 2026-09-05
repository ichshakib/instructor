import { Course } from "../types/course.types";

export const COURSES_DATA: Course[] = [
  {
    id: "german-language-course",
    title: "German Language Learning Course",
    category: "Language",
    type: "Mastery Track • Certified",
    typeIcon: "path",
    tag1: "German (Deutsch)",
    tag2: "A1 - C2 CEFR",
    badgeCount: "6 CEFR Levels",
    coverVariant: "german-language",
    buttonLabel: "Start",
    description:
      "Comprehensive German language learning from absolute beginner (A1) to native-level fluency (C2), structured according to official CEFR standards with interactive chapters, grammar mastery, and practical dialogues.",
    featured: true,
    totalChapters: 13,
    totalLessons: 29,
    progressStatus: {
      type: "status",
      statusText: "Enrolled",
    },
    curriculum: [
      {
        level: "A1",
        title: "A1 • Absolute Beginner",
        description: "Foundations of German: Alphabet, basic greetings, core grammar, sentence structure, and daily survival vocabulary.",
        chapters: [
          {
            id: "a1-ch1",
            title: "Chapter 1: Einführung & Grundlagen (Basics & Pronunciation)",
            lessons: [
              {
                id: "a1-ch1-l1",
                title: "Lesson 1: Das Deutsche Alphabet & German Phonetics",
                duration: "15 mins",
                description: "Pronouncing umlauts (ä, ö, ü), diphthongs (ei, ie, eu), and the Eszett (ß).",
              },
              {
                id: "a1-ch1-l2",
                title: "Lesson 2: Greetings, Introductions & Formality (Du vs. Sie)",
                duration: "20 mins",
                description: "Essential greetings: Hallo, Guten Morgen, Wie geht es Ihnen?, and self-introduction.",
              },
              {
                id: "a1-ch1-l3",
                title: "Lesson 3: Numbers (0 - 100) & Telling Time (Uhrzeit)",
                duration: "25 mins",
                description: "Cardinal numbers, telephone numbers, and formal vs. informal time expressions.",
              },
            ],
          },
          {
            id: "a1-ch2",
            title: "Chapter 2: Essential Grammar & Verb Conjugation",
            lessons: [
              {
                id: "a1-ch2-l4",
                title: "Lesson 4: Personal Pronouns (ich, du, er/sie/es, wir, ihr, sie/Sie)",
                duration: "18 mins",
                description: "Subject pronouns and their grammatical roles in German statements.",
              },
              {
                id: "a1-ch2-l5",
                title: "Lesson 5: Regular Present Tense Verb Endings (-e, -st, -t, -en)",
                duration: "22 mins",
                description: "Conjugating core regular verbs: kommen, wohnen, lernen, machen, heißen.",
              },
              {
                id: "a1-ch2-l6",
                title: "Lesson 6: The Irregular Pillar Verbs: 'sein' & 'haben'",
                duration: "20 mins",
                description: "Full conjugations and essential usage patterns for being and having.",
              },
            ],
          },
          {
            id: "a1-ch3",
            title: "Chapter 3: Nouns, Articles & The Accusative Case",
            lessons: [
              {
                id: "a1-ch3-l7",
                title: "Lesson 7: Gender & Definite Articles: Der, Die, Das",
                duration: "25 mins",
                description: "Recognizing masculine, feminine, and neuter nouns through typical endings.",
              },
              {
                id: "a1-ch3-l8",
                title: "Lesson 8: Indefinite Articles (ein, eine) & Negation (kein, nicht)",
                duration: "20 mins",
                description: "Expressing 'a/an', indefinite items, and when to use kein vs. nicht.",
              },
              {
                id: "a1-ch3-l9",
                title: "Lesson 9: Introduction to the Accusative Case (Direct Objects)",
                duration: "30 mins",
                description: "How masculine articles change (der -> den, ein -> einen) with action verbs.",
              },
            ],
          },
          {
            id: "a1-ch4",
            title: "Chapter 4: Daily Life & Practical Situations",
            lessons: [
              {
                id: "a1-ch4-l10",
                title: "Lesson 10: Ordering Food & Drinks at a Café or Restaurant",
                duration: "22 mins",
                description: "Common phrases: 'Ich möchte...', 'Die Rechnung, bitte', and polite inquiries.",
              },
              {
                id: "a1-ch4-l11",
                title: "Lesson 11: Asking for Directions & Navigating the City",
                duration: "20 mins",
                description: "Prepositions of direction: links, rechts, geradeaus, and asking 'Wo ist...?'",
              },
            ],
          },
        ],
      },
      {
        level: "A2",
        title: "A2 • Elementary German",
        description: "Expand conversations: Past tense (Perfekt), modal verbs, separable verbs, and dative case.",
        chapters: [
          {
            id: "a2-ch1",
            title: "Chapter 1: Talking About the Past (Das Perfekt)",
            lessons: [
              {
                id: "a2-ch1-l1",
                title: "Lesson 1: Past Participles with 'haben' (ge- ... -t / -en)",
                duration: "25 mins",
                description: "Constructing conversational past tense sentences for completed actions.",
              },
              {
                id: "a2-ch1-l2",
                title: "Lesson 2: Past Participles with 'sein' (Movement & Change of State)",
                duration: "25 mins",
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
                duration: "30 mins",
                description: "Expressing ability, obligation, permission, and desire with bracket sentence structure.",
              },
              {
                id: "a2-ch2-l4",
                title: "Lesson 4: Trennbare Verben (Separable Prefix Verbs)",
                duration: "25 mins",
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
                duration: "30 mins",
                description: "Giving and helping: 'geben', 'helfen', 'gefallen', and personal dative pronouns.",
              },
              {
                id: "a2-ch3-l6",
                title: "Lesson 6: Wechselpräpositionen (Two-Way Prepositions: Wo vs. Wohin)",
                duration: "35 mins",
                description: "Location (Dative) vs. Direction/Movement (Accusative): in, an, auf, unter, vor, hinter.",
              },
            ],
          },
        ],
      },
      {
        level: "B1",
        title: "B1 • Intermediate German",
        description: "Independent language use: Subordinate clauses, passive voice, adjective declensions, and storytelling.",
        chapters: [
          {
            id: "b1-ch1",
            title: "Chapter 1: Complex Sentence Structures & Subordinate Clauses",
            lessons: [
              {
                id: "b1-ch1-l1",
                title: "Lesson 1: Subordinating Conjunctions: weil, dass, wenn, obwohl",
                duration: "30 mins",
                description: "Verb-final word order and expressing causes, conditions, and concessions.",
              },
              {
                id: "b1-ch1-l2",
                title: "Lesson 2: Relative Clauses (Relativsätze in Nominativ & Akkusativ)",
                duration: "35 mins",
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
                duration: "35 mins",
                description: "Focusing on actions rather than agents: 'Das Auto wird repariert'.",
              },
              {
                id: "b1-ch2-l4",
                title: "Lesson 4: Narrative Past Tense in Formal & Written Contexts",
                duration: "30 mins",
                description: "Mastering Präteritum forms used in news, books, and professional correspondence.",
              },
            ],
          },
        ],
      },
      {
        level: "B2",
        title: "B2 • Upper Intermediate",
        description: "Fluent communication: Subjunctive II (Konjunktiv II), advanced prepositions, and professional German.",
        chapters: [
          {
            id: "b2-ch1",
            title: "Chapter 1: Hypotheticals & Politeness (Konjunktiv II)",
            lessons: [
              {
                id: "b2-ch1-l1",
                title: "Lesson 1: Expressing Wishes, Polite Requests & Hypotheticals",
                duration: "40 mins",
                description: "'Würde + Infinitiv' versus real subjunctive forms: wäre, hätte, könnte, müsste.",
              },
              {
                id: "b2-ch1-l2",
                title: "Lesson 2: Past Hypotheticals ('Hätte ich das gewusst...')",
                duration: "35 mins",
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
                duration: "40 mins",
                description: "Formal correspondence formulas: 'Sehr geehrte Damen und Herren', negotiations.",
              },
              {
                id: "b2-ch2-l4",
                title: "Lesson 4: Fixed Preposition-Verb Combinations (achten auf, abhängen von)",
                duration: "45 mins",
                description: "Mastering the 50 most critical verb-preposition pairings and pronominal adverbs.",
              },
            ],
          },
        ],
      },
      {
        level: "C1",
        title: "C1 • Advanced German",
        description: "Sophisticated communication: Nominalization style, participle constructions, and nuances.",
        chapters: [
          {
            id: "c1-ch1",
            title: "Chapter 1: Nominalstil & Scientific Discourse",
            lessons: [
              {
                id: "c1-ch1-l1",
                title: "Lesson 1: Transforming Verbal Clauses into Nominal Style",
                duration: "45 mins",
                description: "Prepositions of Genitive and turning subordinate clauses into dense academic structures.",
              },
              {
                id: "c1-ch1-l2",
                title: "Lesson 2: Extended Participle Attributes (Erweiterte Partizipialattribute)",
                duration: "50 mins",
                description: "Deconstructing and constructing complex modifier phrases before nouns.",
              },
            ],
          },
        ],
      },
      {
        level: "C2",
        title: "C2 • Mastery & Native Fluency",
        description: "Near-native precision: Idiomatic nuance, cultural depth, and advanced rhetoric.",
        chapters: [
          {
            id: "c2-ch1",
            title: "Chapter 1: Rhetoric, Stylistics & Idiomatic Expression",
            lessons: [
              {
                id: "c2-ch1-l1",
                title: "Lesson 1: Redewendungen, Metaphors & Cultural Idioms",
                duration: "45 mins",
                description: "Mastering nuanced idiomatic figures of speech across high-register German.",
              },
              {
                id: "c2-ch1-l2",
                title: "Lesson 2: Dialectal Variations & Advanced Stylistic Analysis",
                duration: "50 mins",
                description: "Recognizing regional standards in Germany, Austria, and Switzerland.",
              },
            ],
          },
        ],
      },
    ],
  },
];
