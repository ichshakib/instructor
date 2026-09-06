import { Course, Chapter } from "../../../types/course.types";
import { PRACTICAL_ENGLISH_CONTENT } from "./practical-english.content";

const RAW_CHAPTERS: Chapter[] = [
  {
    id: "eng-ch1",
    title: "Chapter 1: Workplace Communication & Meetings",
    lessons: [
      {
        id: "eng-ch1-l1",
        title: "Lesson 1: Leading Effective Team Standups & Updates",
        description: "Key formulas for facilitating team check-ins, reporting blockers, and summarizing progress with executive brevity.",
      },
      {
        id: "eng-ch1-l2",
        title: "Lesson 2: Constructive Disagreement & Collaboration",
        description: "How to challenge ideas diplomatically, use verbal cushions, and propose alternative perspectives without friction.",
      },
    ],
  },
  {
    id: "eng-ch2",
    title: "Chapter 2: Professional Email & Digital Chats",
    lessons: [
      {
        id: "eng-ch2-l3",
        title: "Lesson 3: Clear and Actionable Emails (BLUF Methodology)",
        description: "Writing concise emails with Bottom Line Up Front, high-conversion subject lines, and unambiguous calls to action.",
      },
      {
        id: "eng-ch2-l4",
        title: "Lesson 4: Tone and Etiquette in Slack & Teams",
        description: "Balancing speed, brevity, and courtesy in instant messaging channels while eliminating communication anti-patterns.",
      },
    ],
  },
  {
    id: "eng-ch3",
    title: "Chapter 3: Networking & Casual Social Small Talk",
    lessons: [
      {
        id: "eng-ch3-l5",
        title: "Lesson 5: Icebreakers at Conferences & Meetups",
        description: "Approaching groups, initiating engaging conversations, active listening prompts, and executing graceful exits.",
      },
      {
        id: "eng-ch3-l6",
        title: "Lesson 6: Cross-Cultural Nuances in Global Teams",
        description: "Adapting communication styles between high-context and low-context cultures and decoding subtle indirect feedback.",
      },
    ],
  },
];

const CHAPTERS_WITH_CONTENT: Chapter[] = RAW_CHAPTERS.map((ch) => ({
  ...ch,
  lessons: ch.lessons.map((lesson) => ({
    ...lesson,
    content: PRACTICAL_ENGLISH_CONTENT[lesson.id],
  })),
}));

export const practicalEnglishCourse: Course = {
  id: "practical-english-conversations",
  title: "Everyday English & Workplace Communication",
  category: "Language",
  type: "Modular Language Track",
  typeIcon: "lab",
  structureType: "chapters-and-lessons",
  tag1: "English",
  tag2: "Daily & Professional",
  badgeCount: "",
  coverVariant: "video-chapters",
  buttonLabel: "Start",
  description:
    "A modular, comprehensive English course focused on practical daily workplace communication, team meetings, email etiquette, and natural conversational idioms.",
  featured: false,
  totalChapters: 3,
  totalLessons: 6,
  progressStatus: {
    type: "status",
    statusText: "Enrolled",
  },
  chapters: CHAPTERS_WITH_CONTENT,
};
