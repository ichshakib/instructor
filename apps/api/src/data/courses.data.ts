import { Course } from "../types/course.types";
import { germanCourse } from "./courses/german-language/german.course";
import { htmlCourse } from "./courses/html-course/html.course";
import { cssCourse } from "./courses/css-course/css.course";
import { javascriptCourse } from "./courses/javascript-course/javascript.course";
import { pythonCourse } from "./courses/python-course/python.course";
import { practicalEnglishCourse } from "./courses/english-courses/practical-english.course";
import { everydayIdiomsCourse } from "./courses/english-courses/everyday-idioms.course";

export * from "./courses/german-language/german.course";
export * from "./courses/html-course/html.course";
export * from "./courses/css-course/css.course";
export * from "./courses/javascript-course/javascript.course";
export * from "./courses/python-course/python.course";
export * from "./courses/english-courses/practical-english.course";
export * from "./courses/english-courses/everyday-idioms.course";

export const COURSES_DATA: Course[] = [
  pythonCourse,
  javascriptCourse,
  germanCourse,
  htmlCourse,
  cssCourse,
  practicalEnglishCourse,
  everydayIdiomsCourse,
];

