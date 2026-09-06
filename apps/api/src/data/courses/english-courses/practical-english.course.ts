import { Course } from "../../../types/course.types";

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
      "A modular, non-CEFR English course focused on practical daily workplace communication, team meetings, email etiquette, and natural conversational idioms.",
    featured: false,
    totalChapters: 3,
    totalLessons: 6,
    progressStatus: {
      type: "status",
      statusText: "New",
    },
    chapters: [
      {
        id: "eng-ch1",
        title: "Chapter 1: Workplace Communication & Meetings",
        lessons: [
          {
            id: "eng-ch1-l1",
            title: "Lesson 1: Leading Effective Team Standups & Updates",
            description: "Key formulas for facilitating team check-ins, reporting blockers, and summarizing progress.",
          },
          {
            id: "eng-ch1-l2",
            title: "Lesson 2: Constructive Disagreement & Collaboration",
            description: "How to challenge ideas diplomatically and propose alternative perspectives.",
          },
        ],
      },
      {
        id: "eng-ch2",
        title: "Chapter 2: Professional Email & Digital Chats",
        lessons: [
          {
            id: "eng-ch2-l3",
            title: "Lesson 3: Clear and Actionable Emails",
            description: "Writing concise emails with compelling subject lines and clear calls to action.",
          },
          {
            id: "eng-ch2-l4",
            title: "Lesson 4: Tone and Etiquette in Slack & Teams",
            description: "Balancing speed, brevity, and courtesy in instant messaging channels.",
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
            description: "Approaching groups, initiating engaging conversations, and exchanging contact details.",
          },
          {
            id: "eng-ch3-l6",
            title: "Lesson 6: Cross-Cultural Nuances in Global Teams",
            description: "Adapting communication styles when working with international colleagues.",
          },
        ],
      },
    ],
  };
