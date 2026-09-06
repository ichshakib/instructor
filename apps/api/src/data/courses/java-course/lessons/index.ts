import { LessonContent } from "../../../../types/course.types";
import { CHAPTER_1_LESSONS } from "./chapter1";
import { CHAPTER_2_LESSONS } from "./chapter2";
import { CHAPTER_3_LESSONS } from "./chapter3";
import { CHAPTER_4_LESSONS } from "./chapter4";
import { CHAPTER_5_LESSONS } from "./chapter5";
import { CHAPTER_6_LESSONS } from "./chapter6";
import { CHAPTER_7_LESSONS } from "./chapter7";
import { CHAPTER_8_LESSONS } from "./chapter8";

export const ALL_JAVA_LESSONS_CONTENT: Record<string, LessonContent> = {
  ...CHAPTER_1_LESSONS,
  ...CHAPTER_2_LESSONS,
  ...CHAPTER_3_LESSONS,
  ...CHAPTER_4_LESSONS,
  ...CHAPTER_5_LESSONS,
  ...CHAPTER_6_LESSONS,
  ...CHAPTER_7_LESSONS,
  ...CHAPTER_8_LESSONS,
};
