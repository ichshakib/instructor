import { Course, Lesson } from "../../../types/course.types";
import { EVERYDAY_IDIOMS_CONTENT } from "./everyday-idioms.content";

const RAW_LESSONS: Lesson[] = [
  {
    id: "idiom-1-break-the-ice",
    title: "Lesson 1: 'Break the ice' — Starting Comfortable Conversations",
    description: "Meaning, origin, and natural conversational examples for initiating dialogue in awkward or unfamiliar settings.",
  },
  {
    id: "idiom-2-hit-the-ground-running",
    title: "Lesson 2: 'Hit the ground running' — Immediate Momentum",
    description: "How to use this idiom in job interviews and project launch meetings to demonstrate day-one value.",
  },
  {
    id: "idiom-3-see-eye-to-eye",
    title: "Lesson 3: 'See eye to eye' — Agreement & Alignment",
    description: "Expressing shared views, building consensus, and phrasing diplomatic disagreement in team discussions.",
  },
  {
    id: "idiom-4-call-it-a-day",
    title: "Lesson 4: 'Call it a day' — Concluding Work Smoothly",
    description: "Polite ways to wrap up long meetings, intensive work sessions, or hackathons without burnout.",
  },
  {
    id: "idiom-5-bite-the-bullet",
    title: "Lesson 5: 'Bite the bullet' — Facing Hard Decisions",
    description: "Using this phrase when overcoming procrastination or addressing inevitable, tough corporate challenges.",
  },
  {
    id: "idiom-6-on-the-same-page",
    title: "Lesson 6: 'On the same page' — Team Clarity & Consensus",
    description: "Ensuring cross-functional team members and stakeholders share identical project assumptions and goals.",
  },
  {
    id: "idiom-7-play-it-by-ear",
    title: "Lesson 7: 'Play it by ear' — Flexibility & Spontaneity",
    description: "How to adapt dynamically and keep options open when schedules or external variables are unpredictable.",
  },
  {
    id: "idiom-8-touch-base",
    title: "Lesson 8: 'Touch base' — Brief Follow-ups",
    description: "The classic workplace expression for quick, low-pressure status checks, async syncs, and client updates.",
  },
];

const LESSONS_WITH_CONTENT: Lesson[] = RAW_LESSONS.map((lesson) => ({
  ...lesson,
  content: EVERYDAY_IDIOMS_CONTENT[lesson.id],
}));

export const everydayIdiomsCourse: Course = {
  id: "everyday-english-idioms",
  title: "Essential Everyday English Idioms & Phrases",
  category: "Language",
  type: "Short Course",
  typeIcon: "page",
  structureType: "lessons-only",
  tag1: "English",
  tag2: "Expressions & Idioms",
  badgeCount: "",
  coverVariant: "metrics-growth",
  buttonLabel: "Start",
  description:
    "A deep, comprehensive sprint through 8 vital native English expressions with etymological histories, real-world workplace dialogues, and executive communication playbooks.",
  featured: false,
  totalLessons: 8,
  progressStatus: {
    type: "status",
    statusText: "Enrolled",
  },
  lessons: LESSONS_WITH_CONTENT,
};
