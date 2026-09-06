export interface LessonPracticeQuestion {
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
}

export interface LessonDialogueLine {
  speaker: string;
  german: string;
  english: string;
}

export interface LessonSectionItem {
  term: string;
  pronunciation?: string;
  meaning: string;
  example?: string;
}

export interface LessonTable {
  headers: string[];
  rows: string[][];
}

export interface LessonSection {
  title: string;
  description?: string;
  table?: LessonTable;
  items?: LessonSectionItem[];
  notes?: string[];
}

export interface LessonContent {
  overview?: string;
  canDo?: string;
  teacherNote?: string;
  sections?: LessonSection[];
  dialogue?: {
    context: string;
    lines: LessonDialogueLine[];
  };
  funFact?: {
    title: string;
    content: string;
  };
  practice?: LessonPracticeQuestion[];
}

export interface Lesson {
  id: string;
  title: string;
  duration?: string;
  description?: string;
  content?: LessonContent;
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface LevelCurriculum {
  level: string;
  title: string;
  description: string;
  chapters: Chapter[];
}

export interface CourseItem {
  id: string;
  title: string;
  category: string;
  type: string;
  typeIcon: "quiz" | "page" | "path" | "lab" | string;
  tag1: string;
  tag2: string;
  badgeCount: string;
  coverVariant: string;
  imageUrl?: string;
  buttonLabel: string;
  description: string;
  featured?: boolean;
  totalChapters?: number;
  totalLessons?: number;
  curriculum?: LevelCurriculum[];
  chapters?: Chapter[];
  progressStatus?: {
    type: "points" | "progress" | "status";
    statusText?: string;
  };
}

export const API_BASE_URL = "http://192.168.0.105:5000";

// Fallback course data in case backend is offline
const FALLBACK_COURSES: CourseItem[] = [
  {
    id: "german-language-course",
    title: "German Language Learning Course",
    category: "Language",
    type: "Language Course",
    typeIcon: "path",
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
        chapters: [
          {
            id: "a1-ch1",
            title: "Chapter 1: Einführung, Aussprache & Grundverben",
            lessons: [
              {
                id: "a1-ch1-l1",
                title: "Lesson 1: Das Deutsche Alphabet & German Phonetics",
                description: "Alphabet letters A–Z, letter-by-letter phonetic reading, letters with German-specific sounds.",
                content: {
                  overview: "Welcome to German! German pronunciation is remarkably logical and phonetic. Unlike English, where vowels and consonants shift unpredictably, German letters correspond reliably to consistent sounds. In this lesson, you will master the 26 letters of the German alphabet, crucial consonant shifts (W, V, J, Z), and the official German spelling alphabet (Buchstabier-Alphabet).",
                  canDo: "Can spell your first and last name aloud in German, recognize essential consonant sounds (W, V, J, Z), and understand spelling in official contexts like hotel check-in or course registration.",
                  teacherNote: "Herzlich willkommen! When reading German, never guess—trust the letters. Remember that 'W' always sounds like English 'V' (das Wasser), 'V' in native words sounds like 'F' (der Vater, vier), 'J' sounds like 'Y' in yes (ja, das Jahr), and 'Z' is always a sharp 'ts' (zehn, die Zeit).",
                  sections: [
                    {
                      title: "1. Das Deutsche Alphabet (A bis Z)",
                      description: "Listen to and pronounce each letter with its authentic German name:",
                      table: {
                        headers: ["Buchstabe", "Name", "Lautwert (Sound)", "Beispiel (Example)"],
                        rows: [
                          ["A a", "aah", "open 'a' like in father", "der Abend (evening)"],
                          ["B b", "beh", "like 'b' in bed", "das Buch (book)"],
                          ["C c", "tseh", "crisp 'ts' before e/i", "das Café (café)"],
                          ["D d", "deh", "like 'd' in door", "der Danke (thanks)"],
                          ["E e", "eeh", "open like 'e' in pet or long like 'ay'", "das Essen (food)"],
                          ["F f", "eff", "like 'f' in find", "der Freund (friend)"],
                          ["G g", "geh", "always hard like 'g' in go", "gut (good)"],
                          ["H h", "hah", "breathed 'h' at start; silent lengthener after vowel", "Hallo (hello)"],
                          ["I i", "iih", "like 'ee' in see", "die Idee (idea)"],
                          ["J j", "yott", "sounds like English 'y' in yes!", "ja (yes)"],
                          ["K k", "kah", "crisp 'k' like in kite", "der Kaffee (coffee)"],
                          ["L l", "ell", "clear European 'l' on upper gums", "die Lampe (lamp)"],
                          ["M m", "emm", "like 'm' in mother", "die Musik (music)"],
                          ["N n", "enn", "like 'n' in no", "der Name (name)"],
                          ["O o", "ohh", "pure round 'o' like in so", "die Oper (opera)"],
                          ["P p", "peh", "crisp 'p' like in park", "die Post (post office)"],
                          ["Q q", "kuh", "always followed by u: sounds like 'kv'", "bequem (comfortable)"],
                          ["R r", "err", "throat-trilled or softly tapped", "das Radio (radio)"],
                          ["S s", "ess", "voiced like 'z' before vowels; unvoiced at end", "die Sonne (sun) / das Glas"],
                          ["T t", "teh", "sharp 't' like in tea", "der Tag (day)"],
                          ["U u", "uuh", "deep 'oo' like in moon", "die Uhr (clock)"],
                          ["V v", "fau", "mostly sounds like 'f' in father!", "der Vater (father)"],
                          ["W w", "veh", "sounds like English 'v' in victory!", "das Wasser (water)"],
                          ["X x", "iks", "like 'ks' in taxi", "das Taxi (taxi)"],
                          ["Y y", "üpsilon", "sounds like 'ü' or 'y'", "das Yoga (yoga)"],
                          ["Z z", "tsett", "always sharp 'ts' like in cats!", "die Zeit (time)"],
                        ],
                      },
                    },
                    {
                      title: "2. The 4 Essential Consonant Shifts",
                      description: "These four mental anchors will prevent 90% of pronunciation errors for beginners:",
                      items: [
                        {
                          term: "W = [V]",
                          pronunciation: "veh",
                          meaning: "Pronounced like English 'V'. German does not have the English 'W' sound!",
                          example: "das Wasser, Wien, wer, wie, woher",
                        },
                        {
                          term: "V = [F]",
                          pronunciation: "fau",
                          meaning: "Pronounced like English 'F' in native words (Vater, vier, viel, voll).",
                          example: "der Vater, vier, vor, von",
                        },
                        {
                          term: "J = [Y]",
                          pronunciation: "yott",
                          meaning: "Pronounced like English 'Y' in yes.",
                          example: "ja, das Jahr, jetzt, jung",
                        },
                        {
                          term: "Z = [TS]",
                          pronunciation: "tsett",
                          meaning: "Always a sharp 'ts' sound, exactly like the end of 'cats'.",
                          example: "zehn, die Zeit, das Zimmer, zusammen",
                        },
                      ],
                    },
                    {
                      title: "3. Buchstabieren (Spelling Names Aloud)",
                      description: "In official registration and phone calls, you will frequently be asked: 'Wie schreibt man das?' (How do you spell that?). The standard German spelling alphabet pairs letters with well-known names:",
                      table: {
                        headers: ["Buchstabe", "Buchstabier-Name (DIN 5009)", "Beispiel im Alltag"],
                        rows: [
                          ["A wie Anton", "Anton", "A wie Anton"],
                          ["B wie Berta", "Berta", "B wie Berta"],
                          ["C wie Cäsar", "Cäsar", "C wie Cäsar"],
                          ["D wie Dora", "Dora", "D wie Dora"],
                          ["E wie Emil", "Emil", "E wie Emil"],
                          ["F wie Friedrich", "Friedrich", "F wie Friedrich"],
                          ["G wie Gustav", "Gustav", "G wie Gustav"],
                          ["H wie Heinrich", "Heinrich", "H wie Heinrich"],
                          ["I wie Ida", "Ida", "I wie Ida"],
                          ["J wie Julius", "Julius", "J wie Julius"],
                          ["K wie Kaufmann", "Kaufmann", "K wie Kaufmann"],
                          ["L wie Ludwig", "Ludwig", "L wie Ludwig"],
                          ["M wie Martha", "Martha", "M wie Martha"],
                          ["N wie Nordpol", "Nordpol", "N wie Nordpol"],
                          ["O wie Otto", "Otto", "O wie Otto"],
                          ["P wie Paula", "Paula", "P wie Paula"],
                          ["Q wie Quelle", "Quelle", "Q wie Quelle"],
                          ["R wie Richard", "Richard", "R wie Richard"],
                          ["S wie Samuel", "Samuel", "S wie Samuel"],
                          ["T wie Theodor", "Theodor", "T wie Theodor"],
                          ["U wie Ulrich", "Ulrich", "U wie Ulrich"],
                          ["V wie Viktor", "Viktor", "V wie Viktor"],
                          ["W wie Wilhelm", "Wilhelm", "W wie Wilhelm"],
                          ["X wie Xanthippe", "Xanthippe", "X wie Xanthippe"],
                          ["Y wie Ypsilon", "Ypsilon", "Y wie Ypsilon"],
                          ["Z wie Zacharias", "Zacharias", "Z wie Zacharias"],
                        ],
                      },
                    },
                  ],
                  dialogue: {
                    context: "Anmeldung am Empfang der Sprachschule in München (Netzwerk A1):",
                    lines: [
                      {
                        speaker: "Nina Weber",
                        german: "Guten Tag! Herzlich willkommen. Wie heißen Sie bitte?",
                        english: "Good day! Welcome. What is your name, please?",
                      },
                      {
                        speaker: "Gregor",
                        german: "Guten Tag. Ich heiße Gregor Schubert.",
                        english: "Good day. My name is Gregor Schubert.",
                      },
                      {
                        speaker: "Nina Weber",
                        german: "Entschuldigung, wie schreibt man den Nachnamen? Können Sie bitte buchstabieren?",
                        english: "Excuse me, how do you spell the last name? Could you please spell it?",
                      },
                      {
                        speaker: "Gregor",
                        german: "Ja, natürlich: S - C - H - U - B - E - R - T.",
                        english: "Yes, of course: S - C - H - U - B - E - R - T.",
                      },
                      {
                        speaker: "Nina Weber",
                        german: "Vielen Dank, Herr Schubert! Ihr Kursraum ist Nummer 12 im ersten Stock.",
                        english: "Thank you very much, Mr. Schubert! Your classroom is number 12 on the first floor.",
                      },
                    ],
                  },
                  funFact: {
                    title: "Universal Noun Capitalization in German",
                    content: "German is the only major world language where every single noun is capitalized! Whether it is 'der Name' (name), 'das Buch' (book), or 'die Musik' (music), capitalizing nouns was standardized in the 17th century to help readers instantly distinguish subjects and objects in long philosophical and literary texts.",
                  },
                  practice: [
                    {
                      question: "How is the German letter 'W' in 'Wasser' (water) pronounced?",
                      options: [
                        "Like English 'W' in 'water'",
                        "Like English 'V' in 'vase'",
                        "Silent",
                      ],
                      answer: "Like English 'V' in 'vase'",
                      explanation: "In German, the letter 'W' is consistently pronounced like the English 'V'.",
                    },
                    {
                      question: "How do you pronounce the number 'zehn' (ten)?",
                      options: [
                        "Like English 'zen'",
                        "Like 'tsehn' with a sharp 'ts'",
                        "Like 'kehn'",
                      ],
                      answer: "Like 'tsehn' with a sharp 'ts'",
                      explanation: "The letter 'Z' in German always makes a crisp 'ts' sound, exactly as in 'cats'.",
                    },
                    {
                      question: "Which question asks someone to spell their name?",
                      options: [
                        "Wie heißen Sie?",
                        "Woher kommen Sie?",
                        "Wie schreibt man das?",
                      ],
                      answer: "Wie schreibt man das?",
                      explanation: "'Wie schreibt man das?' means 'How do you spell/write that?' in German.",
                    },
                  ],
                },
              },
              {
                id: "a1-ch1-l2",
                title: "Lesson 2: The Umlauts (ä, ö, ü), Diphthongs & Special Consonants (ß, ch, sch)",
                description: "Pronouncing umlauts, diphthongs, Eszett, and hard vs soft ch.",
              },
              {
                id: "a1-ch1-l3",
                title: "Lesson 3: Personal Pronouns & Formality (du vs. Sie)",
                description: "Subject pronouns and formal vs informal etiquette.",
              },
              {
                id: "a1-ch1-l4",
                title: "Lesson 4: The Pillar Verb 'sein' (to be)",
                description: "Full present tense conjugation of sein and identity statements.",
              },
              {
                id: "a1-ch1-l5",
                title: "Lesson 5: The Pillar Verb 'haben' (to have)",
                description: "Full conjugation of haben and expressing possession.",
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
                description: "Standard personal endings with regular verbs.",
              },
              {
                id: "a1-ch2-l7",
                title: "Lesson 7: Essential Stem-Changing / Irregular Verbs",
                description: "Vowel shifts in 2nd and 3rd person singular.",
              },
              {
                id: "a1-ch2-l8",
                title: "Lesson 8: German Word Order & Verb Position",
                description: "The golden rule: Verb always in Position 2.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "python-complete-course",
    title: "Python Programming: From First Steps to Advanced Engineering",
    category: "Development",
    type: "Full Course",
    typeIcon: "path",
    tag1: "Python 3.10+",
    tag2: "Beginner to Advanced",
    badgeCount: "",
    coverVariant: "code-architecture",
    imageUrl: "/course-images/python-course.jpg",
    buttonLabel: "Start",
    description:
      "Master modern Python from foundational syntax to advanced software engineering, OOP, dunder protocols, and standard library powerhouses.",
    featured: true,
    totalChapters: 10,
    totalLessons: 30,
    progressStatus: {
      type: "status",
      statusText: "Popular",
    },
  },
  {
    id: "javascript-complete-course",
    title: "Modern JavaScript Mastery: From Fundamentals to Advanced ESNext",
    category: "Development",
    type: "Full Course",
    typeIcon: "lab",
    tag1: "JavaScript ESNext",
    tag2: "Web Development",
    badgeCount: "",
    coverVariant: "code-architecture",
    imageUrl: "/course-images/javascript-course.jpg",
    buttonLabel: "Start",
    description:
      "Comprehensive modern JavaScript covering event loops, closures, async/await, prototypes, and enterprise architecture.",
    featured: true,
    totalChapters: 10,
    totalLessons: 30,
    progressStatus: {
      type: "status",
      statusText: "Popular",
    },
  },
  {
    id: "react-complete-course",
    title: "React 19 & Next.js Full Stack Architecture",
    category: "Development",
    type: "Full Course",
    typeIcon: "path",
    tag1: "React 19",
    tag2: "Full Stack",
    badgeCount: "",
    coverVariant: "code-architecture",
    imageUrl: "/course-images/react-course.jpg",
    buttonLabel: "Start",
    description:
      "Modern React architecture, Server Components, server actions, hooks deep dive, and resilient UI design patterns.",
    featured: true,
    totalChapters: 8,
    totalLessons: 24,
    progressStatus: {
      type: "status",
      statusText: "Hot",
    },
  },
  {
    id: "prompt-engineering-course",
    title: "Prompt Engineering & LLM Application Design",
    category: "AI & Data",
    type: "Full Course",
    typeIcon: "quiz",
    tag1: "AI & LLMs",
    tag2: "Generative AI",
    badgeCount: "",
    coverVariant: "ai-systems",
    imageUrl: "/course-images/prompt-engineering-course.jpg",
    buttonLabel: "Start",
    description:
      "Master system prompts, few-shot conditioning, chain-of-thought, tool-calling agents, and enterprise AI workflows.",
    featured: true,
    totalChapters: 7,
    totalLessons: 21,
    progressStatus: {
      type: "status",
      statusText: "Trending",
    },
  },
  {
    id: "react-native-course",
    title: "React Native & Expo: Cross-Platform Mobile Engineering",
    category: "Development",
    type: "Full Course",
    typeIcon: "path",
    tag1: "React Native",
    tag2: "iOS & Android",
    badgeCount: "",
    coverVariant: "mobile-engineering",
    imageUrl: "/course-images/react-native-course.jpg",
    buttonLabel: "Start",
    description:
      "Build high-performance native iOS and Android applications with React Native, Expo Router, and gesture-driven animations.",
    featured: false,
    totalChapters: 8,
    totalLessons: 24,
    progressStatus: {
      type: "status",
      statusText: "New",
    },
  },
  {
    id: "java-programming-course",
    title: "Java Core & Enterprise Architecture",
    category: "Development",
    type: "Full Course",
    typeIcon: "path",
    tag1: "Java 21 LTS",
    tag2: "Enterprise Backend",
    badgeCount: "",
    coverVariant: "enterprise-backend",
    imageUrl: "/course-images/java-course.jpg",
    buttonLabel: "Start",
    description:
      "JVM internals, object-oriented design patterns, concurrency, Spring Boot concepts, and scalable cloud-ready backend microservices.",
    featured: false,
    totalChapters: 9,
    totalLessons: 27,
    progressStatus: {
      type: "status",
      statusText: "Popular",
    },
  },
];

// Fast In-Memory Course & Lesson Cache for 0ms Instant Page Transitions
const COURSE_CACHE = new Map<string, CourseItem>();

// Seed immediately with fallback courses so curriculum is available on frame 1
FALLBACK_COURSES.forEach((c) => {
  if (c.id) {
    COURSE_CACHE.set(c.id, c);
  }
});

export function getCachedCourse(id: string): CourseItem | null {
  return COURSE_CACHE.get(id) || FALLBACK_COURSES.find((c) => c.id === id) || null;
}

export function setCachedCourse(course: CourseItem) {
  if (course && course.id) {
    COURSE_CACHE.set(course.id, course);
  }
}

export function getCachedLesson(
  courseId: string,
  lessonId: string
): { lesson: Lesson; chapter?: Chapter; course?: CourseItem } | null {
  const course = getCachedCourse(courseId);
  if (!course) return null;

  let foundLesson: Lesson | null = null;
  let foundChapter: Chapter | undefined;

  if (Array.isArray(course.curriculum)) {
    for (const level of course.curriculum) {
      if (Array.isArray(level.chapters)) {
        for (const chapter of level.chapters) {
          const match = chapter.lessons?.find((l) => l.id === lessonId);
          if (match) {
            foundLesson = match;
            foundChapter = chapter;
            break;
          }
        }
      }
      if (foundLesson) break;
    }
  }

  if (!foundLesson && Array.isArray(course.chapters)) {
    for (const chapter of course.chapters) {
      const match = chapter.lessons?.find((l) => l.id === lessonId);
      if (match) {
        foundLesson = match;
        foundChapter = chapter;
        break;
      }
    }
  }

  if (foundLesson) {
    return { lesson: foundLesson, chapter: foundChapter, course };
  }
  return null;
}

export async function fetchCourses(options?: {
  category?: string;
  featured?: boolean;
  search?: string;
}): Promise<CourseItem[]> {
  try {
    const params = new URLSearchParams();
    if (options?.category && options.category !== "All" && options.category !== "All Courses") {
      params.set("category", options.category);
    }
    if (options?.featured !== undefined) {
      params.set("featured", String(options.featured));
    }
    if (options?.search) {
      params.set("search", options.search);
    }

    const queryString = params.toString();
    const url = `${API_BASE_URL}/courses${queryString ? `?${queryString}` : ""}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
      },
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const json = await res.json();
    const courses: CourseItem[] = json.data || json;
    if (Array.isArray(courses)) {
      courses.forEach((c) => setCachedCourse(c));
    }
    return courses;
  } catch (error) {
    console.warn("Could not fetch courses from backend API at", API_BASE_URL, error);
    return Array.from(COURSE_CACHE.values());
  }
}

export async function fetchCourseById(id: string): Promise<CourseItem | null> {
  // Check instant memory cache first (0ms latency!)
  const cached = getCachedCourse(id);
  if (cached && (cached.curriculum?.length || cached.chapters?.length)) {
    return cached;
  }

  try {
    const url = `${API_BASE_URL}/courses/${id}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
      },
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const json = await res.json();
    const course: CourseItem = json.data || json;
    if (course && course.id) {
      setCachedCourse(course);
      return course;
    }
  } catch (error) {
    console.warn("Could not fetch course details from backend API at", API_BASE_URL, error);
  }

  return cached || FALLBACK_COURSES.find((c) => c.id === id) || FALLBACK_COURSES[0] || null;
}

export async function fetchLessonById(
  courseId: string,
  lessonId: string
): Promise<{ lesson: Lesson; chapter?: Chapter; course?: CourseItem } | null> {
  // 1. Instant check from in-memory cache (0ms!)
  const cached = getCachedLesson(courseId, lessonId);
  if (cached && cached.lesson?.content) {
    return cached;
  }

  // 2. If not yet fully in cache, load course and extract
  try {
    const course = await fetchCourseById(courseId);
    if (!course) return cached;
    return getCachedLesson(courseId, lessonId) || cached;
  } catch (error) {
    console.warn("Could not fetch lesson details:", error);
    return cached;
  }
}


