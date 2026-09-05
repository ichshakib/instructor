export type CourseCategory =
  | "Language"
  | "Development"
  | "AI & Data"
  | "Design"
  | "Business";

export type CourseTypeIcon = "quiz" | "page" | "path" | "lab";

export type CourseCoverVariant =
  | "german-language"
  | "quiz-clipboard"
  | "video-chapters"
  | "layout-wireframe"
  | "code-architecture"
  | "cloud-backend"
  | "metrics-growth";

export type CourseButtonLabel = "View" | "Continue" | "Start";

export interface CourseProgressStatus {
  type: "points" | "progress" | "status";
  points?: number;
  subLabel?: string;
  percentage?: number;
  statusText?: string;
}

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
  overview: string;
  canDo: string;
  teacherNote?: string;
  sections: LessonSection[];
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

export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface LevelCurriculum {
  level: CEFRLevel;
  title: string;
  description: string;
  chapters: Chapter[];
}

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  type: string;
  typeIcon: CourseTypeIcon;
  tag1: string;
  tag2: string;
  badgeCount: string;
  coverVariant: CourseCoverVariant;
  buttonLabel: CourseButtonLabel;
  description: string;
  featured?: boolean;
  totalChapters?: number;
  totalLessons?: number;
  progressStatus?: CourseProgressStatus;
  curriculum?: LevelCurriculum[];
}
