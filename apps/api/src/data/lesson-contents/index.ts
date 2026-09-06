import { LessonContent } from "../../types/course.types";
import { CHAPTER_1_LESSONS } from "./chapter1";
import { CHAPTER_2_LESSONS } from "./chapter2";
import { CHAPTER_3_LESSONS } from "./chapter3";
import { CHAPTER_4_LESSONS } from "./chapter4";
import { CHAPTER_5_LESSONS } from "./chapter5";
import { CHAPTER_6_LESSONS } from "./chapter6";
import { CHAPTER_7_LESSONS } from "./chapter7";
import { CHAPTER_8_LESSONS } from "./chapter8";
import { CHAPTER_9_LESSONS } from "./chapter9";
import { CHAPTER_10_LESSONS } from "./chapter10";
import { CHAPTER_11_LESSONS } from "./chapter11";
import { CHAPTER_12_LESSONS } from "./chapter12";
import { A2_LESSONS_CONTENT } from "./a2-lessons";
import { B1_LESSONS_CONTENT } from "./b1-lessons";
import { B2_LESSONS_CONTENT } from "./b2-lessons";
import { C1_C2_LESSONS_CONTENT } from "./c1-c2-lessons";

export const ALL_A1_LESSONS_CONTENT: Record<string, LessonContent> = {
  ...CHAPTER_1_LESSONS,
  ...CHAPTER_2_LESSONS,
  ...CHAPTER_3_LESSONS,
  ...CHAPTER_4_LESSONS,
  ...CHAPTER_5_LESSONS,
  ...CHAPTER_6_LESSONS,
  ...CHAPTER_7_LESSONS,
  ...CHAPTER_8_LESSONS,
  ...CHAPTER_9_LESSONS,
  ...CHAPTER_10_LESSONS,
  ...CHAPTER_11_LESSONS,
  ...CHAPTER_12_LESSONS,
};

export const ALL_GERMAN_LESSONS_CONTENT: Record<string, LessonContent> = {
  ...ALL_A1_LESSONS_CONTENT,
  ...A2_LESSONS_CONTENT,
  ...B1_LESSONS_CONTENT,
  ...B2_LESSONS_CONTENT,
  ...C1_C2_LESSONS_CONTENT,
};

export { A2_LESSONS_CONTENT, B1_LESSONS_CONTENT, B2_LESSONS_CONTENT, C1_C2_LESSONS_CONTENT };

export function getLessonContent(lessonId: string): LessonContent | undefined {
  return ALL_GERMAN_LESSONS_CONTENT[lessonId];
}

