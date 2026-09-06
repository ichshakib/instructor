import { Course } from "../types/course.types";
import { germanCourse } from "./courses/german-language/german.course";
import { htmlCourse } from "./courses/html-course/html.course";
import { cssCourse } from "./courses/css-course/css.course";
import { javascriptCourse } from "./courses/javascript-course/javascript.course";
import { pythonCourse } from "./courses/python-course/python.course";
import { practicalEnglishCourse } from "./courses/english-courses/practical-english.course";
import { everydayIdiomsCourse } from "./courses/english-courses/everyday-idioms.course";
import { javaCourse } from "./courses/java-course/java.course";
import { promptEngineeringCourse } from "./courses/prompt-engineering-course/prompt-engineering.course";
import { reactCourse } from "./courses/react-course/react.course";
import { reactNativeCourse } from "./courses/react-native-course/react-native.course";

export * from "./courses/german-language/german.course";
export * from "./courses/html-course/html.course";
export * from "./courses/css-course/css.course";
export * from "./courses/javascript-course/javascript.course";
export * from "./courses/python-course/python.course";
export * from "./courses/english-courses/practical-english.course";
export * from "./courses/english-courses/everyday-idioms.course";
export * from "./courses/java-course/java.course";
export * from "./courses/prompt-engineering-course/prompt-engineering.course";
export * from "./courses/react-course/react.course";
export * from "./courses/react-native-course/react-native.course";

export const COURSES_DATA: Course[] = [
  pythonCourse,
  javascriptCourse,
  germanCourse,
  htmlCourse,
  cssCourse,
  practicalEnglishCourse,
  everydayIdiomsCourse,
  javaCourse,
  promptEngineeringCourse,
  reactCourse,
  reactNativeCourse,
];


