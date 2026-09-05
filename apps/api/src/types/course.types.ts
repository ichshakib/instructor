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

export interface Lesson {
  id: string;
  title: string;
  duration?: string;
  description?: string;
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
