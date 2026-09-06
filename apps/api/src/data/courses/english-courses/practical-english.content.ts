import { LessonContent } from "../../../types/course.types";

export const PRACTICAL_ENGLISH_CONTENT: Record<string, LessonContent> = {
  // Chapter 1 Lesson 1: Leading Effective Team Standups & Updates
  "eng-ch1-l1": {
    overview:
      "Daily standups, asynchronous check-ins, and sprint status meetings are the operational backbone of modern engineering, product, and cross-functional teams. A high-impact standup update is neither a laundry list of trivial tasks nor a vague summary; it is a crisp, three-part narrative answering: What value did you deliver yesterday? What is your primary commitment today? And what blockers or dependencies are standing in your path? Mastering executive brevity, active voice, and clear ownership phrases transforms you from a passive participant into a trusted team anchor.",
    canDo:
      "Can deliver crisp 90-second status reports, articulate technical and cross-functional blockers with urgency and tact, and facilitate team standups adhering to Agile best practices.",
    teacherNote:
      "Avoid the 'task dumping' trap! Nobody in a standup needs to hear that you checked email or attended three recurring syncs. Anchor every update in tangible outcomes: use action verbs like 'finalized', 'shipped', 'diagnosed', and 'aligned with'. If you have a blocker, state who or what you need directly without apologizing.",
    sections: [
      {
        title: "1. The 3-Part Golden Standup Framework",
        description:
          "High-performing professionals structure their check-ins around three crisp pillars to maximize team visibility and eliminate meeting drag:",
        table: {
          headers: ["Pillar", "Core Objective", "High-Impact Opening Formula", "Anti-Pattern (Avoid)"],
          rows: [
            [
              "1. Yesterday's Value",
              "Showcase delivered outcomes and finished milestones.",
              "'Yesterday, I finalized the API rate-limiting middleware and pushed it to staging.'",
              "'Yesterday, I just worked on tickets and answered messages.' (Too vague)",
            ],
            [
              "2. Today's Commitment",
              "Declare primary focus and expected impact before end-of-day.",
              "'Today, my main priority is resolving the database connection pool leak before the client demo.'",
              "'Today, I'll see what comes in from QA.' (Passive, reactive)",
            ],
            [
              "3. Blockers & Dependencies",
              "Highlight bottlenecks immediately to invite unblocking help.",
              "'I'm currently blocked on the Stripe webhook secret keys from DevOps; David, could we sync for 5 mins after this?'",
              "'Everything's fine, just waiting on someone.' (Hides risk until too late)",
            ],
          ],
        },
      },
      {
        title: "2. Crucial Verbal Formulas for Daily Agile Syncs",
        description:
          "Use these proven sentence starters to sound clear, authoritative, and collaborative:",
        items: [
          {
            term: "To pivot to next topic: 'Let's take this offline'",
            pronunciation: "[lets tayk this OFF-lyne]",
            meaning: "Suggest moving a deep technical rabbit-hole into a separate 1-on-1 discussion to respect the broader team's time.",
            example: "That's a critical architecture point, Sarah. Let's take that offline right after standup so we don't hold up the rest of the group.",
          },
          {
            term: "To report dependencies: 'I'm blocked on...'",
            pronunciation: "[eyem BLOKT on]",
            meaning: "Clearly flags that work cannot proceed until an external dependency, access credential, or review is fulfilled.",
            example: "I'm currently blocked on security review clearance for the authentication microservice.",
          },
          {
            term: "To offer bandwidth: 'I have extra cycles'",
            pronunciation: "[eyev EKS-tra SY-kuls]",
            meaning: "Signals available capacity to assist teammates or take on newly surfaced urgent backlog items.",
            example: "I wrapped up the onboarding flow early, so I have extra cycles this afternoon if anyone needs pair-programming support.",
          },
          {
            term: "To pass the floor: 'Passing it over to...'",
            pronunciation: "[PASS-ing it OH-ver too]",
            meaning: "Polite, seamless handover of speaking turns in remote video calls and hybrid conference rooms.",
            example: "That's everything from my end. Passing it over to Marcus for the frontend updates.",
          },
        ],
        notes: [
          "Keep updates strictly under 90 seconds. Standups are for coordination, not problem-solving.",
          "When naming blockers, mention specific names and required deliverables rather than generic departments.",
        ],
      },
      {
        title: "3. Facilitating and Keeping Standups on Schedule",
        description:
          "If you are leading or rotating as scrum master, use these diplomatic nudges:",
        table: {
          headers: ["Facilitation Challenge", "Diplomatic Verbal Nudge", "Context / Nuance"],
          rows: [
            [
              "Teammate oversharing technical minutiae",
              "'Let's park that topic in the parking lot and circle back at the end of the meeting.'",
              "Respectfully pauses tangential technical debates without invalidating the speaker.",
            ],
            [
              "Awkward silence between updates",
              "'Who wants to jump in next? Elena, are you ready to share?'",
              "Gently prompts the next participant without putting them on the spot aggressively.",
            ],
            [
              "Vague blockers mentioned",
              "'What do you need from the team right now to get across the finish line?'",
              "Pushes for actionable resolution and specifies clear ownership.",
            ],
          ],
        },
      },
    ],
    dialogue: {
      context: "A distributed sprint team conducts their 15-minute daily standup on Zoom. Engineering Lead Rachel facilitates updates with developers Daniel and Priya.",
      lines: [
        {
          speaker: "Rachel (Team Lead)",
          text: "Morning everyone! Let's kick off our daily sync. Daniel, you're up first on the board.",
          notes: "Positive, time-conscious opener that directs the team's visual focus to the project board.",
        },
        {
          speaker: "Daniel (Fullstack)",
          text: "Morning! Yesterday, I merged the PR for the checkout flow redesign and addressed the QA feedback. Today, I'm diving into the international currency conversion logic.",
          notes: "Concise outcome-focused update covering what was completed and what is committed today.",
        },
        {
          speaker: "Daniel (Fullstack)",
          text: "I do have one blocker: I need updated API documentation from the payments team regarding sandbox test credentials.",
          notes: "Explicit callout of a blocker with clear specification of what is missing.",
        },
        {
          speaker: "Rachel (Team Lead)",
          text: "Got it. I spoke with payments this morning; I'll ping their lead right after this call to unblock you. Priya, over to you.",
          notes: "Lead takes immediate ownership of clearing the blocker and hands off the floor.",
        },
        {
          speaker: "Priya (Mobile Dev)",
          text: "Thanks Rachel. Yesterday, I benchmarked our cold startup times on iOS and identified a 400ms delay in token parsing. Today, I'm refactoring the splash screen cache to shave off that latency.",
          notes: "Specific metrics-driven update demonstrating measurable value.",
        },
        {
          speaker: "Priya (Mobile Dev)",
          text: "No blockers on my end, and I should have extra cycles this afternoon to review any pending PRs.",
          notes: "Proactively offers available bandwidth to teammates.",
        },
        {
          speaker: "Rachel (Team Lead)",
          text: "Brilliant. Daniel, let's stay on for two minutes to sync on those payment keys. Everyone else, have a productive day!",
          notes: "Wraps up the standup within 10 minutes and keeps deep-dive discussions offline.",
        },
      ],
    },
    funFact: {
      title: "Why Is It Literally Called a 'Standup'?",
      content:
        "The term originates from Extreme Programming (XP) and Agile methodology in the late 1990s. Teams were required to hold the daily meeting standing up in a circle without chairs or laptops. The mild physical discomfort of standing ensured that updates remained concise and prevented meetings from ballooning past 15 minutes!",
    },
  },

  // Chapter 1 Lesson 2: Constructive Disagreement & Collaboration
  "eng-ch1-l2": {
    overview:
      "In high-performing organizations, disagreement is not conflict; it is the catalyst for better strategic decisions. However, unrefined disagreement can sound confrontational, dismissive, or passive-aggressive. Mastering diplomatic pushback, cognitive empathy, and Socratic questioning allows you to challenge flawed assumptions, protect project timelines, and advocate for superior technical architectures while strengthening interpersonal rapport.",
    canDo:
      "Can challenge proposals and architectural designs constructively, use diplomatic softening language ('cushions'), and guide conflicting stakeholders toward consensus.",
    teacherNote:
      "Separate the idea from the person! Never say 'Your plan doesn't work' or 'You forgot about X'. Frame all critique around shared project objectives: 'If we implement this approach, how do we mitigate the risk of X?' or 'My main concern with this timeline is...'. Question the mechanics, never the competence.",
    sections: [
      {
        title: "1. The 3-Tier Diplomatic Softener Matrix",
        description:
          "Professional English relies on verbal 'cushions' to validate your colleague's intent before presenting an alternative viewpoint:",
        table: {
          headers: ["Strategy", "Formula", "Why It Works", "Example in Executive Context"],
          rows: [
            [
              "1. Validate & Reframe",
              "'I see where you're coming from, and...' (never 'but')",
              "Replaces the polarizing word 'but' with 'and', framing your critique as an addition rather than a rebuttal.",
              "'I see where you're coming from regarding speed, and I want to ensure we don't accrue unsustainable technical debt.'",
            ],
            [
              "2. Socratic Inversion",
              "'How are we thinking about...?'",
              "Positions your objection as an exploratory question rather than an accusation, prompting the other person to spot the flaw.",
              "'How are we thinking about handling peak traffic spikes if we bypass caching on that endpoint?'",
            ],
            [
              "3. Third-Party Anchor",
              "'My concern from a reliability standpoint is...'",
              "Anchors the objection in objective business constraints (data, user experience, budget) rather than personal taste.",
              "'From a compliance perspective, storing plain-text tokens poses an audit risk we can't accept.'",
            ],
          ],
        },
      },
      {
        title: "2. Key Idiomatic Expressions for Collaborative Debate",
        description:
          "High-level phrases for managing friction and aligning opinions:",
        items: [
          {
            term: "To play devil's advocate",
            pronunciation: "[play DEV-ulz AD-voh-kit]",
            meaning: "To test an argument by presenting an opposing viewpoint, even if you do not personally believe it.",
            example: "Just to play devil's advocate for a moment: what happens if our key supplier increases prices by 15% next quarter?",
          },
          {
            term: "To meet halfway / split the difference",
            pronunciation: "[meet HAF-way]",
            meaning: "To compromise so that both sides concede equal ground in an impasse.",
            example: "We want four weeks for testing, and product wants release in two; could we meet halfway at three weeks with automated sanity checks?",
          },
          {
            term: "To agree to disagree (and commit)",
            pronunciation: "[ah-GREE too dis-ah-GREE]",
            meaning: "Acknowledging irreconcilable opinions while agreeing to execute the agreed decision cohesively (Amazon's 'Disagree and Commit').",
            example: "We have different architectural philosophies here, but we need to move forward. Let's agree to disagree, commit to the microservice approach, and review metrics in 60 days.",
          },
        ],
      },
    ],
    dialogue: {
      context: "During a product strategy review, Senior Engineer Alex and Product Manager Chloe debate whether to compress the release schedule for a major feature.",
      lines: [
        {
          speaker: "Chloe (Product Manager)",
          text: "Alex, marketing wants to pull forward the release date by two weeks to capitalize on the upcoming trade show. Can we cut the QA cycle in half?",
          notes: "Aggressive timeline request driven by commercial pressure.",
        },
        {
          speaker: "Alex (Senior Engineer)",
          text: "I completely understand the trade show opportunity, Chloe. However, cutting testing right now introduces substantial risk to our core checkout stability.",
          notes: "Validates commercial intent first before clearly stating the objective risk.",
        },
        {
          speaker: "Chloe (Product Manager)",
          text: "We can't miss this window. Competitors are launching similar tools next month!",
          notes: "Reiterates urgency with competitive pressure.",
        },
        {
          speaker: "Alex (Senior Engineer)",
          text: "I hear you. What if we took a phased approach instead? We could launch a beta to an invite-only cohort of 50 power users at the trade show, while keeping the full rollout on our original quality timeline.",
          notes: "Proposes an actionable creative compromise ('meet halfway') that satisfies both goals.",
        },
        {
          speaker: "Chloe (Product Manager)",
          text: "That actually solves our demo requirement without exposing the entire customer base to runtime glitches. Let's run with that compromise.",
          notes: "Collaborative agreement reached without bruised egos.",
        },
      ],
    },
    funFact: {
      title: "The Linguistic Power of 'Yes, and...' in Executive Rooms",
      content:
        "The improvisational comedy rule of 'Yes, and...' has become standard leadership training at Fortune 500 companies. Studies show that when a manager responds with 'Yes, but...', the listener's amygdala triggers a micro-defensive response because 'but' emotionally negates everything said before it. Replacing 'but' with 'and' keeps discussions in collaborative problem-solving mode.",
    },
  },

  // Chapter 2 Lesson 3: Clear and Actionable Emails
  "eng-ch2-l3": {
    overview:
      "The average professional receives over 120 emails daily and spends less than 11 seconds skimming each message. To ensure your written communication gets read, understood, and acted upon, you must master the BLUF methodology (Bottom Line Up Front). Long, meandering narrative emails result in delayed responses, misunderstandings, and ignored requests. This lesson provides the exact frameworks, subject line formulas, and call-to-action structures used by top executive communicators.",
    canDo:
      "Can craft high-impact workplace emails using the BLUF framework, write compelling subject lines, and formulate unambiguous Calls to Action (CTAs).",
    teacherNote:
      "Never bury your request in paragraph four! State your ask in the first two sentences. If the recipient must read four paragraphs just to discover what you need them to do, your email has failed. Use bold font strategically for deadlines and action owners.",
    sections: [
      {
        title: "1. The BLUF Methodology (Bottom Line Up Front)",
        description:
          "Originating in military communication, BLUF requires placing your conclusion, recommendation, or request directly at the opening of the message:",
        table: {
          headers: ["Email Component", "Standard Meandering Style (Avoid)", "BLUF Executive Style (Implement)"],
          rows: [
            [
              "Subject Line",
              "'Quick question about our meeting yesterday'",
              "'[Action Required] Approval Needed: Q3 Cloud Infrastructure Budget ($45k)'",
            ],
            [
              "First Sentence",
              "'I hope you had a great weekend. As you know, we have been discussing various options...'",
              "'Hi Sarah — I am requesting your approval for a $45,000 cloud infrastructure upgrade by Friday, Oct 12.'",
            ],
            [
              "Body Structure",
              "Three dense, unformatted paragraphs of backstory.",
              "Three bulleted takeaways highlighting Context, Proposed Solution, and Financial Impact.",
            ],
            [
              "Call to Action (CTA)",
              "'Let me know what you think when you get a chance.'",
              "'Next Step: Please reply with 'Approved' or leave notes on Slide 4 by Thursday at 3 PM.'",
            ],
          ],
        },
      },
      {
        title: "2. The 5 High-Conversion Subject Line Prefixes",
        description:
          "Tagging your subject line sets explicit expectations before the recipient even clicks:",
        items: [
          {
            term: "[Action Required]",
            pronunciation: "[AK-shun re-KWY-erd]",
            meaning: "Indicates the recipient must perform a specific task, submit an approval, or provide explicit sign-off.",
            example: "[Action Required] Sign-off on Vendor Security Questionnaire by 5 PM",
          },
          {
            term: "[Decision Needed]",
            pronunciation: "[di-SIZH-un NEE-ded]",
            meaning: "Signals that a project is blocked pending an executive or architectural choice between outlined options.",
            example: "[Decision Needed] Microservice vs Monolith Approach for Billing Engine",
          },
          {
            term: "[FYI / No Action]",
            pronunciation: "[F-Y-I / noh AK-shun]",
            meaning: "Informs teammates of updates or completed milestones without imposing homework or response obligations.",
            example: "[FYI] Q2 Customer Retention Metrics Summary — No Action Needed",
          },
          {
            term: "[Time-Sensitive]",
            pronunciation: "[TYME SEN-si-tiv]",
            meaning: "Reserved strictly for urgent issues requiring turnaround within 2 to 4 hours.",
            example: "[Time-Sensitive] Production Gateway Outage Post-Mortem Draft",
          },
        ],
      },
    ],
    dialogue: {
      context: "Operations Lead Kevin helps Associate Manager Lisa rewrite an important email to the Vice President of Engineering.",
      lines: [
        {
          speaker: "Lisa",
          text: "Kevin, the VP hasn't answered my email from Monday regarding the hiring headcount for our DevOps team. Should I resend it?",
          notes: "Common frustration caused by ineffective email drafting.",
        },
        {
          speaker: "Kevin",
          text: "Let's look at your draft. Your subject line says 'A few thoughts on staffing' and the actual budget request is at the bottom of page two.",
          notes: "Diagnoses the structural defect immediately.",
        },
        {
          speaker: "Lisa",
          text: "I wanted to provide all the background data first so he understood the context!",
          notes: "Classic mistake: putting the justification before the ask.",
        },
        {
          speaker: "Kevin",
          text: "VPs don't have time to dig. Change the subject to '[Decision Needed] Approval for 2 Senior DevOps Hires'. Put the request in sentence one, and bullet the salary and revenue impact right below it.",
          notes: "Applies executive BLUF principles.",
        },
        {
          speaker: "Lisa",
          text: "That cut my email from 400 words down to 80 words. It's so much clearer!",
          notes: "Realization that brevity enhances authority and clarity.",
        },
      ],
    },
    funFact: {
      title: "The Psychology of Executive Scannability",
      content:
        "Eye-tracking studies conducted by Nielsen Norman Group demonstrate that busy professionals read emails in an 'F-shaped pattern': they read the subject line, the first two lines of text, and then scan only the left margin looking for bold headings and bullet points. If your key decision isn't anchored on the left margin within the first 100 pixels, chances are it won't be read.",
    },
  },

  // Chapter 2 Lesson 4: Tone and Etiquette in Slack & Teams
  "eng-ch2-l4": {
    overview:
      "Enterprise instant messaging platforms (Slack, Microsoft Teams, Discord) have replaced 80% of internal workplace emails. However, the casual, rapid nature of chat creates frequent communication traps: unintentional passive aggression, notification fatigue, lack of context ('Hey, you there?'), and lost institutional knowledge. Mastering high-velocity, respectful digital collaboration is a superpower in remote and hybrid workplaces.",
    canDo:
      "Can communicate with clarity and emotional intelligence on Slack/Teams, eliminate the 'no-hello' anti-pattern, and choose the right medium (chat vs. call vs. email).",
    teacherNote:
      "Kill the 'Hey!' ping! Never send an isolated 'Hi John' and wait for a response before stating your request. This is known as the 'no-hello' anti-pattern; it forces the recipient into anxious suspense. Send your greeting AND your complete, actionable question in a single message.",
    sections: [
      {
        title: "1. The 5 Cardinal Rules of Workplace Chat Etiquette",
        description:
          "Follow these modern norms to be universally appreciated by colleagues across time zones:",
        table: {
          headers: ["Rule", "Anti-Pattern (Avoid)", "Best Practice (Adopt)", "Impact"],
          rows: [
            [
              "1. Zero 'No-Hello'",
              "Sending: 'Hi David' ... [10 minutes of silence] ... 'Are you free?'",
              "Sending: 'Hi David! When you have a moment, could you share the Figma link for the checkout modal? No rush!'",
              "Saves context switching and allows asynchronous response.",
            ],
            [
              "2. Thread Discipline",
              "Replying to a topic in the main public channel.",
              "Always click 'Reply in thread' to keep the channel clean.",
              "Prevents notification spam for 50 other channel members.",
            ],
            [
              "3. Emoji Reactions (Reacjis)",
              "Replying 'Thanks', 'Got it', 'Will do' with separate text messages.",
              "Use standard emojis: 👀 (looking into it), ✅ (completed), 👍 (acknowledged).",
              "Reduces alert fatigue by 70%.",
            ],
            [
              "4. Asynchronous Respect",
              "Messaging @channel or tagging colleagues at 10 PM for non-emergencies.",
              "Use scheduled send: 'Scheduled for 9:00 AM tomorrow'.",
              "Demonstrates respect for healthy work-life boundaries.",
            ],
          ],
        },
      },
      {
        title: "2. The Medium Selection Matrix: When to Chat vs. Meet vs. Email",
        description:
          "Choosing the incorrect communication channel is the primary cause of workplace miscommunication:",
        items: [
          {
            term: "Slack / Teams Channel",
            pronunciation: "[slak / teemz]",
            meaning: "Quick status questions, team-wide public announcements, PR reviews, and low-friction coordination.",
            example: "Best for: 'Anyone know where the updated API endpoint specs live?'",
          },
          {
            term: "5-Minute Huddle / Video Call",
            pronunciation: "[HUD-ul]",
            meaning: "When a text thread exceeds 5 back-and-forth messages without consensus, or for sensitive feedback.",
            example: "Rule of Thumb: If you have exchanged 4 paragraphs and are still debating, jump on a 5-minute huddle immediately.",
          },
          {
            term: "Email",
            pronunciation: "[EE-mayl]",
            meaning: "External partners, formal executive approvals, official HR/contract documentation, permanent audit trail.",
            example: "Best for: Client contracts, quarterly financial reporting, official customer communication.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Two remote developers, Sam in London and Kenji in Tokyo, resolve a code review question asynchronously on Slack.",
      lines: [
        {
          speaker: "Sam",
          text: "Hey Kenji! 👋 Hope your day is going well. On PR #412 (user auth), I noticed we're caching JWTs in localStorage instead of httpOnly cookies. Is that intentional for the mobile webview, or should we switch to httpOnly for security?",
          notes: "Exemplary chat opener: warm greeting, links the PR directly, outlines the issue, and offers specific alternatives.",
        },
        {
          speaker: "Kenji",
          text: "👀",
          notes: "Quick reacji acknowledging receipt and signaling active investigation without typing a full sentence.",
        },
        {
          speaker: "Kenji",
          text: "Great catch, Sam. That was a legacy fallback for the old Cordova wrapper. Since we migrated to React Native last month, we can safely upgrade to httpOnly cookies. I'll push an update to the branch by 2 PM JST. ✅",
          notes: "Clear, direct, and concludes with an explicit delivery commitment.",
        },
        {
          speaker: "Sam",
          text: "🚀 Awesome, thanks Kenji! I'll review and merge as soon as it's up.",
          notes: "Positive, encouraging closure that closes the feedback loop.",
        },
      ],
    },
    funFact: {
      title: "The Website Dedicated to Stopping 'Hey': nohello.net",
      content:
        "Software engineers around the world were so frustrated by colleagues typing 'Hi' and waiting several minutes before explaining what they wanted that they created an open-source manifesto at nohello.net. The site explains the productivity loss caused by synchronous greetings in asynchronous chat tools and has been translated into over 30 languages.",
    },
  },

  // Chapter 3 Lesson 5: Icebreakers at Conferences & Meetups
  "eng-ch3-l5": {
    overview:
      "Professional networking is often viewed with dread because people confuse it with aggressive sales pitching. True networking is simply authentic curiosity about what other professionals are building, learning, and struggling with. Mastering natural conversation starters, active listening cues, and graceful exits allows you to enter any conference hall, meet-up, or client dinner with poise and leave with high-value professional relationships.",
    canDo:
      "Can initiate authentic small talk with strangers, transition from casual chat to professional topics, and conclude networking conversations gracefully.",
    teacherNote:
      "Avoid the generic 'What do you do?' as your opening question! It immediately puts people into rehearsed elevator-pitch mode. Instead, start with contextual observation: 'What brought you to this session?' or 'How are you finding the conference so far?'. Connect as human beings first.",
    sections: [
      {
        title: "1. The 3-Stage Networking Conversation Arc",
        description:
          "A natural professional conversation follows an organic, non-transactional progression:",
        table: {
          headers: ["Stage", "Primary Purpose", "Go-To Verbal Formula", "Key Tip"],
          rows: [
            [
              "1. The Contextual Opener",
              "Break the ice without pressure using shared surroundings.",
              "'Mind if I join you at this table? How are you finding the keynote talks today?'",
              "Comment on the venue, the speaker, or the coffee — shared experience builds immediate rapport.",
            ],
            [
              "2. The Professional Pivot",
              "Transition smoothly from small talk into meaningful domain discussion.",
              "'What kind of projects are keeping you busy at your company these days?'",
              "Ask open-ended questions starting with 'What' or 'How' rather than yes/no questions.",
            ],
            [
              "3. The Graceful Exit",
              "Conclude the chat warmly and exchange contact details before energy lags.",
              "'I know you want to catch the next workshop, but I'd love to stay in touch. Do you have a LinkedIn or QR code handy?'",
              "Always leave on a conversational high note; never wait until awkward silence settles in.",
            ],
          ],
        },
      },
      {
        title: "2. Active Listening Prompts & Conversational Glue",
        description:
          "Keep the other person speaking enthusiastically using active vocal affirmations:",
        items: [
          {
            term: "'That's fascinating — how did you navigate that?'",
            pronunciation: "[thaths FAS-i-nay-ting]",
            meaning: "Invites the speaker to share their problem-solving journey, which everyone enjoys talking about.",
            example: "You scaled from 10k to 500k users in six months? That's fascinating — how did you navigate the infrastructure bottlenecks?",
          },
          {
            term: "'Small world!'",
            pronunciation: "[SMAWL WURLD]",
            meaning: "Expresses pleasant surprise when discovering a mutual colleague, previous employer, or shared background.",
            example: "You worked at Spotify in Stockholm in 2021? Small world! My old team lead was in that engineering group.",
          },
          {
            term: "'I won't monopolize all your time'",
            pronunciation: "[eyel wont moh-NOP-oh-lyze]",
            meaning: "The most courteous executive exit phrase for allowing both parties to circulate freely at events.",
            example: "I know you have colleagues waiting to say hello, so I won't monopolize all your time. Let's connect on LinkedIn!",
          },
        ],
      },
    ],
    dialogue: {
      context: "At a tech summit in San Francisco during the afternoon coffee break, attendee Jason strikes up a conversation with attendee Megan by the espresso station.",
      lines: [
        {
          speaker: "Jason",
          text: "Excuse me, do you know if there's an oat milk pitcher around here? Finding milk at these conferences is always an adventure!",
          notes: "Lighthearted contextual opener based on shared surroundings.",
        },
        {
          speaker: "Megan",
          text: "Haha, yes! It's right on the second counter over there. I had to hunt for it myself five minutes ago.",
          notes: "Responds warmly with shared empathy.",
        },
        {
          speaker: "Jason",
          text: "Lifesaver, thank you! I'm Jason, by the way. I work on cloud infrastructure at Datadog. What brought you out to the summit?",
          notes: "Introduces himself naturally and asks an open-ended professional pivot question.",
        },
        {
          speaker: "Megan",
          text: "Nice to meet you Jason, I'm Megan. I lead data engineering at a health-tech startup in Boston. We're currently evaluating real-time observability tools.",
          notes: "Shares domain context and current technical priorities.",
        },
        {
          speaker: "Jason",
          text: "Health-tech compliance must make real-time streaming quite complex. How are you handling HIPAA requirements with third-party telemetry?",
          notes: "Demonstrates deep active listening by asking an insightful follow-up question.",
        },
        {
          speaker: "Megan",
          text: "That's our biggest headache right now! We actually built custom token anonymizers before sending metrics upstream.",
          notes: "Engaged response discussing real technical challenges.",
        },
        {
          speaker: "Jason",
          text: "That sounds like a brilliant architecture. Listen, the next session is starting in two minutes and I don't want to monopolize your time, but could we connect on LinkedIn? I'd love to follow your team's rollout.",
          notes: "Graceful, courteous exit that establishes ongoing professional connection.",
        },
        {
          speaker: "Megan",
          text: "Absolutely! Here is my QR code. Let's definitely grab coffee if you're around tomorrow.",
          notes: "Warm mutual agreement and contact exchange.",
        },
      ],
    },
    funFact: {
      title: "The 'Liking Gap' in Social Psychology",
      content:
        "Research published in Psychological Science revealed the 'Liking Gap': after meeting someone new, people consistently underestimate how much the other person liked them and enjoyed the conversation. In reality, conversational partners find you significantly more interesting and pleasant than your internal self-critic tells you. Don't hesitate to say hello!",
    },
  },

  // Chapter 3 Lesson 6: Cross-Cultural Nuances in Global Teams
  "eng-ch3-l6": {
    overview:
      "In modern multinational companies, English is the global lingua franca (business language). However, sharing the English language does not mean sharing the same cultural communication rules. Different cultures interpret directness, silence, hierarchy, and criticism in vastly different ways. Erin Meyer's renowned Culture Map research reveals that what sounds like 'clear feedback' to a Dutch or German colleague might sound like an insulting personal attack to a colleague in Japan or Singapore. Conversely, subtle British or American understatement can be completely missed by direct communicators. This lesson equips you to calibrate your language across diverse global teams.",
    canDo:
      "Can adjust communication directness between high-context and low-context cultures, decode subtle indirect criticism, and lead inclusive cross-cultural meetings.",
    teacherNote:
      "Master the art of 'upgraders' and 'downgraders'! Direct cultures use upgraders that amplify words (e.g., 'totally unacceptable', 'absolutely critical'). Indirect cultures use downgraders that soften impact (e.g., 'perhaps we could consider', 'maybe a minor tweak'). Learn to decode what is truly being communicated underneath the cultural wrapping.",
    sections: [
      {
        title: "1. The Direct vs. Indirect Feedback Spectrum",
        description:
          "How different international cultures phrase the exact same critical observation:",
        table: {
          headers: ["Culture Archetype", "How They Say It", "What They Actually Mean", "Linguistic Technique"],
          rows: [
            [
              "Direct Communicator (e.g., Netherlands, Germany, Israel)",
              "'This architectural approach is flawed and will not scale.'",
              "'This approach will not scale; we must re-engineer it immediately.'",
              "Uses explicit, unambiguous language with zero emotional malice intended.",
            ],
            [
              "Subtle / Downgraded (e.g., UK, Australia)",
              "'With greatest respect, perhaps we might look at that once more.'",
              "'I strongly disagree and this will cause major problems.'",
              "Uses ironic understatement ('a bit of a hiccup' = a complete disaster).",
            ],
            [
              "High-Context / Harmony (e.g., Japan, Thailand, Brazil)",
              "'That is a very interesting idea. It may take some further internal study.'",
              "'This proposal is unworkable and we cannot approve it.'",
              "Protects professional 'face' and social harmony by avoiding direct verbal refusal.",
            ],
          ],
        },
      },
      {
        title: "2. The Multi-Cultural Collaboration Playbook",
        description:
          "Practical strategies for facilitating frictionless global cooperation:",
        items: [
          {
            term: "Put key decisions in writing afterwards",
            pronunciation: "[put key di-SIZH-uns in RY-ting]",
            meaning: "Non-native English speakers process written English with significantly higher comprehension than fast spoken conference speech.",
            example: "Always publish a 3-bullet summary in Slack after every Zoom call: 'Decisions Made, Action Items, Owner & Deadlines'.",
          },
          {
            term: "Practice 'Explicit Over-Communication'",
            pronunciation: "[ik-SPLIS-it oh-ver-kuh-myoo-ni-KAY-shun]",
            meaning: "Never assume silence equals agreement. In many Asian and Nordic cultures, silence is a sign of contemplation, not consent.",
            example: "Instead of 'Any questions?' (which produces silence), ask: 'Ken, what potential blockers do you foresee from the Tokyo supply chain perspective?'",
          },
          {
            term: "Calibrate email formality",
            pronunciation: "[KAL-i-brayt for-MAL-i-tee]",
            meaning: "Avoid overly casual slang ('Sup guys!') with partners in Germany, France, or Japan until a collaborative bond has been established.",
            example: "Begin with professional courtesy ('Dear Dr. Becker') and mirror their transition to first names when they invite it.",
          },
        ],
      },
    ],
    dialogue: {
      context: "British project lead Oliver and American marketing director Claire discuss feedback they received from their engineering partners in Munich and Tokyo.",
      lines: [
        {
          speaker: "Claire (US)",
          text: "Oliver, I reviewed the feedback from our German lead Hans on the website rollout. He wrote: 'The navigation hierarchy is completely illogical and must be redone.' Isn't that extraordinarily harsh?",
          notes: "American colleague interprets German directness as hostility.",
        },
        {
          speaker: "Oliver (UK)",
          text: "Actually Claire, having worked with Hans for two years, that's just standard low-context German communication. He isn't criticizing you personally; he's giving honest, objective feedback so the product succeeds.",
          notes: "Accurately contextualizes cultural communication norms.",
        },
        {
          speaker: "Claire (US)",
          text: "That's good to know. And what about Kenji in Tokyo? He said: 'The mobile design is quite creative, but we might encounter some difficulties in the payment flow.'",
          notes: "Interprets Japanese indirect feedback as minor praise.",
        },
        {
          speaker: "Oliver (UK)",
          text: "Ah, that is the exact opposite! In Japanese business culture, 'might encounter some difficulties' usually means the payment flow is fundamentally broken. We need to prioritize that fix immediately.",
          notes: "Decodes high-context Japanese polite understatement.",
        },
        {
          speaker: "Claire (US)",
          text: "Fascinating. So Hans says exactly what he means with no padding, while Kenji wraps critical feedback in polite cushions. I need to calibrate my antennas!",
          notes: "Embraces cross-cultural awareness for global leadership.",
        },
      ],
    },
    funFact: {
      title: "The British 'Very Interesting' Paradox",
      content:
        "The Anglo-EU Translation Guide famously compiled a chart of what British people say versus what foreigners understand. When a British colleague says: 'That is a very interesting proposal', non-British listeners often think: 'They are impressed!'. To a British speaker, however, 'very interesting' often means: 'That is completely absurd and I will never approve it.'",
    },
  },
};
