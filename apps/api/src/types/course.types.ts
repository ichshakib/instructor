export type CourseCategory = "Development" | "AI & Data" | "Design" | "Business";

export type CourseTypeIcon = "quiz" | "page" | "path" | "lab";

export type CourseCoverVariant =
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
  progressStatus?: CourseProgressStatus;
}
