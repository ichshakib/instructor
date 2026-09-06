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
];

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
    const timeoutId = setTimeout(() => controller.abort(), 4000);

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
    return json.data || json;
  } catch (error) {
    console.warn("Could not fetch courses from backend API at", API_BASE_URL, error);
    return FALLBACK_COURSES;
  }
}

export async function fetchCourseById(id: string): Promise<CourseItem | null> {
  try {
    const url = `${API_BASE_URL}/courses/${id}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

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
    return json.data || json;
  } catch (error) {
    console.warn("Could not fetch course details from backend API at", API_BASE_URL, error);
    const found = FALLBACK_COURSES.find((c) => c.id === id);
    return found || FALLBACK_COURSES[0] || null;
  }
}

export async function fetchLessonById(
  courseId: string,
  lessonId: string
): Promise<{ lesson: Lesson; chapter?: Chapter; course?: CourseItem } | null> {
  try {
    const course = await fetchCourseById(courseId);
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
  } catch (error) {
    console.warn("Could not fetch lesson details:", error);
    return null;
  }
}

