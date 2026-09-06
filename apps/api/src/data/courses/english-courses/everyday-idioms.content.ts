import { LessonContent } from "../../../types/course.types";

export const EVERYDAY_IDIOMS_CONTENT: Record<string, LessonContent> = {
  // Lesson 1: Break the ice
  "idiom-1-break-the-ice": {
    overview:
      "To 'break the ice' means to initiate social interaction, dissolve tension, and make people feel comfortable in an unfamiliar or awkward setting. In native English conversation, psychological safety begins with the icebreaker. Whether entering an executive boardroom, meeting an international client for dinner, or welcoming a new team member on their first day, understanding how native speakers deploy verbal icebreakers without sounding staged or corny is an essential social and professional capability.",
    canDo:
      "Can deploy conversational icebreakers naturally, explain the origin of 'breaking the ice', and distinguish between effective and counterproductive social openers.",
    teacherNote:
      "Context is everything! A good icebreaker relies on situational awareness (the environment, shared weather, recent industry news, or event logistics). Avoid deeply polarizing topics like politics, religion, or unsolicited personal advice. Keep your opening lightweight, self-effacing, and observational.",
    sections: [
      {
        title: "1. Etymological Origin & Modern Conceptual Meaning",
        description:
          "Understanding where the metaphor originates deepens your intuition for its proper usage:",
        table: {
          headers: ["Attribute", "Historical Detail / Modern Usage"],
          rows: [
            ["Literal Origin", "Originates from polar and river navigation in the 17th and 18th centuries, where specialized icebreaker ships carved channels through frozen waterways to allow merchant vessels safe passage into port."],
            ["First Literary Attestation", "Recorded in Samuel Butler's satirical poem 'Hudibras' (1663) and popularized in Shakespeare's 'The Taming of the Shrew' ('If you break the ice and do this feat...')."],
            ["Modern Figurative Meaning", "To relieve initial social awkwardness, stiffness, or unfamiliarity between people meeting for the first time."],
            ["Common Grammatical Forms", "to break the ice (verb phrase); an icebreaker (noun: an activity, joke, or introductory prompt)."],
          ],
        },
      },
      {
        title: "2. Register & Contextual Nuance Matrix",
        description:
          "How 'break the ice' manifests across different social and professional tiers:",
        table: {
          headers: ["Communication Setting", "Natural Icebreaker Formula", "Linguistic Objective"],
          rows: [
            [
              "Virtual Team Sync (Remote)",
              "'Before we jump into the sprint backlog, what's one piece of good news from everyone's weekend?'",
              "Warms up camera-shy remote colleagues and establishes human rapport before diving into tickets.",
            ],
            [
              "Client Dinner / Executive Networking",
              "'How did you find the conference keynote this morning? It sparked quite an active debate in the hall.'",
              "Uses shared intellectual context rather than intrusive personal inquiries.",
            ],
            [
              "Workshop / Training Session",
              "'Let's do a quick round of two-word check-ins to break the ice.'",
              "Lowers the barrier to participation for junior attendees.",
            ],
          ],
        },
      },
      {
        title: "3. Related Collocations & Native Expressions",
        description:
          "Enhance your vocabulary with related idioms and phrases that native speakers pair with this concept:",
        items: [
          {
            term: "To warm up to someone",
            pronunciation: "[worm up too SUM-wun]",
            meaning: "To gradually become friendlier and more comfortable with a person after initial hesitation.",
            example: "The stakeholders were skeptical during the kickoff, but they quickly warmed up to our design team once we showed live user test results.",
          },
          {
            term: "To clear the air",
            pronunciation: "[kleer the AIR]",
            meaning: "To openly address past misunderstandings or lingering tension so everyone can collaborate freely.",
            example: "Before starting the new roadmap, our team leads had a private meeting to clear the air regarding last quarter's deployment miscommunication.",
          },
          {
            term: "Small talk",
            pronunciation: "[SMAWL tawk]",
            meaning: "Polite, informal conversation about ordinary everyday matters used to establish rapport.",
            example: "Never underestimate the power of five minutes of casual small talk before negotiating a multi-million-dollar software licensing contract.",
          },
        ],
        notes: [
          "Do not force elaborate 'icebreaker games' on senior executives; subtle conversational small talk is the preferred adult icebreaker.",
          "Pay attention to body language: uncrossed arms and eye contact signal that the ice has successfully broken.",
        ],
      },
    ],
    dialogue: {
      context: "At a cross-company technical seminar in London, product director Marcus notices newly arrived European partners standing awkwardly in silence before the presentation begins.",
      lines: [
        {
          speaker: "Marcus (Host)",
          text: "Good morning everyone! Help yourselves to the pastries and flat whites over at the counter. Finding good coffee in London rain is always a triumph!",
          notes: "Lighthearted observational opener that puts attendees at ease.",
        },
        {
          speaker: "Karin (Partner Lead)",
          text: "Thank goodness! We had an early flight from Stockholm and were desperately hunting for espresso near the tube station.",
          notes: "Responds enthusiastically to the low-pressure prompt.",
        },
        {
          speaker: "Marcus (Host)",
          text: "I know that flight well; the 6 AM departure from Arlanda is brutal. How was your commute into the city center this morning?",
          notes: "Validates travel fatigue and builds immediate empathetic connection.",
        },
        {
          speaker: "Karin (Partner Lead)",
          text: "Surprisingly smooth on the Elizabeth line. It definitely broke the ice for our team to see London without the usual traffic gridlock!",
          notes: "Uses the idiom naturally in conversation to describe initial relief.",
        },
        {
          speaker: "Marcus (Host)",
          text: "Glad to hear it. Well, since we're all here and caffeinated, let's gather around the screen and take a look at the prototype roadmap.",
          notes: "Effortlessly transitions from warm social opening into productive business agenda.",
        },
      ],
    },
    funFact: {
      title: "The World's First Nuclear-Powered Icebreaker",
      content:
        "The literal ships that inspired the metaphor were revolutionized in 1957 with the launch of the 'Lenin', the world's first nuclear-powered icebreaker ship. It was designed to crush through sea ice over 2.5 meters thick in the Arctic Ocean, clearing sea lanes for merchant fleets throughout the dead of winter.",
    },
  },

  // Lesson 2: Hit the ground running
  "idiom-2-hit-the-ground-running": {
    overview:
      "To 'hit the ground running' means to start a new job, project, or role immediately with high energy, enthusiasm, and full productivity without needing extensive training or onboarding delays. In modern fast-paced corporate environments, job recruiters, hiring managers, and department heads prize candidates who demonstrate the competence and agility to contribute from day one.",
    canDo:
      "Can articulate immediate onboarding value in job interviews, describe project momentum, and understand the historical military origins of the phrase.",
    teacherNote:
      "A staple of executive job interviews! When an interviewer asks: 'How would your first 30 days look?', stating that you are prepared to 'hit the ground running' by reviewing existing codebase architectures, meeting key stakeholders, and delivering quick wins conveys confidence and self-sufficiency.",
    sections: [
      {
        title: "1. Meaning, Etymology & Tactical Usage",
        description:
          "The origins and exact communicative function of the idiom:",
        table: {
          headers: ["Dimension", "Explanation & Professional Application"],
          rows: [
            ["Military Airborne Origin", "Traced to paratroopers in World War II who had to literally start running the split second their boots touched the battlefield drop zone to avoid enemy fire and secure strategic positions."],
            ["Mid-20th Century Corporate Adoption", "Adopted by business executives in the 1960s to describe new hires or consultants who execute immediately without hand-holding."],
            ["Core Professional Nuance", "Signifies proactive initiative, pre-existing domain expertise, and rapid time-to-value."],
            ["Grammatical Function", "Idiomatic verb phrase (often used in future intent: 'ready to hit the ground running')."],
          ],
        },
      },
      {
        title: "2. Strategic Interview Applications: Demonstrating Day-One Value",
        description:
          "How to incorporate this phrase into high-stakes career conversations:",
        items: [
          {
            term: "In Executive Job Interviews",
            pronunciation: "[hit the ground RUN-ning]",
            meaning: "Communicates that you will not be a drain on management bandwidth during your first sprint.",
            example: "Because I have five years of hands-on experience with Kubernetes and Terraform, I'll be able to hit the ground running on your platform migration.",
          },
          {
            term: "In Project Kickoff Meetings",
            pronunciation: "[hit the ground RUN-ning]",
            meaning: "Aligns a team around immediate execution rather than endless conceptual debate.",
            example: "Now that the specifications are approved, our engineering sprint hits the ground running tomorrow morning at 9 AM.",
          },
        ],
        notes: [
          "Back up the idiom with concrete proof: follow up with specific actions you will take in Week 1 (e.g., auditing logs, reviewing PRs, shadow interviewing clients).",
          "Avoid using it if you genuinely require extensive training, as it sets high performance expectations from day one.",
        ],
      },
    ],
    dialogue: {
      context: "Senior engineering candidate Maya interviews with VP of Technology Brian for a Principal Architect position.",
      lines: [
        {
          speaker: "Brian (VP Tech)",
          text: "Maya, our payment infrastructure is scaling from 2 million to 20 million transactions a month. We don't have time for a three-month ramp-up period. How would you approach your first month?",
          notes: "High-pressure interview question testing autonomy and immediate impact.",
        },
        {
          speaker: "Maya (Candidate)",
          text: "I completely understand the urgency, Brian. In my last role at Stripe, I led a similar scale-out. I'm prepared to hit the ground running from day one.",
          notes: "Confident, grounded deployment of the idiom backed by domain credentials.",
        },
        {
          speaker: "Brian (VP Tech)",
          text: "What would that look like in practice during Week 1?",
          notes: "Interviewer asks for concrete tactical substantiation.",
        },
        {
          speaker: "Maya (Candidate)",
          text: "In the first 48 hours, I'll audit your latency telemetry and database query bottlenecks. By Friday, I'll deliver a prioritized risk matrix so the team can eliminate downtime risks before Black Friday.",
          notes: "Provides precise deliverables proving she will indeed hit the ground running.",
        },
        {
          speaker: "Brian (VP Tech)",
          text: "That is exactly the level of proactive ownership this department needs.",
          notes: "Candidate wins strong stakeholder confidence.",
        },
      ],
    },
    funFact: {
      title: "Pony Express Couriers",
      content:
        "Another historical theory traces the phrase to 1860s American Pony Express riders and dispatch messengers. Couriers would jump off their galloping horses before coming to a complete standstill, literally hitting the ground running to hand over the mail bag to the next rider in under two seconds!",
    },
  },

  // Lesson 3: See eye to eye
  "idiom-3-see-eye-to-eye": {
    overview:
      "To 'see eye to eye' with someone means to agree fully, share the exact same perspective, or hold aligned values on an issue. In English, this idiom is most frequently utilized in negative constructions ('We don't always see eye to eye, but...') to acknowledge healthy intellectual divergence or diplomatic disagreement without personal animosity.",
    canDo:
      "Can articulate alignment and respectful disagreement, use diplomatic qualifiers, and explain the ancient biblical roots of the phrase.",
    teacherNote:
      "The power of this idiom lies in its negative form: 'Although we don't see eye to eye on the framework choice, we both agree on the delivery timeline.' It acknowledges differences with grace while pivoting toward shared goals.",
    sections: [
      {
        title: "1. Linguistic Anatomy & Historical Heritage",
        description:
          "The origins and nuances of this universal agreement idiom:",
        table: {
          headers: ["Linguistic Element", "Detail"],
          rows: [
            ["Ancient Origin", "Found in the King James Bible (Isaiah 52:8): 'Thy watchmen shall lift up the voice; with the voice together shall they sing: for they shall see eye to eye...'."],
            ["Core Metaphor", "Two people standing at the exact same height and angle, looking at a physical object from the identical optical vantage point."],
            ["Grammatical Pattern", "to see eye to eye (with someone) (on something)."],
            ["Predominant Usage", "Frequently used with 'don't', 'rarely', or 'finally' to frame the evolution of consensus."],
          ],
        },
      },
      {
        title: "2. Diplomatic Corporate Applications",
        description:
          "Formulas for acknowledging tension and building alignment:",
        items: [
          {
            term: "We don't see eye to eye on [X], but we agree on [Y]",
            pronunciation: "[see EYE too EYE]",
            meaning: "Validates different technical or strategic perspectives while anchoring on common business goals.",
            example: "We don't see eye to eye on whether to build in-house or buy SaaS, but we both agree we must launch before Q4.",
          },
          {
            term: "To finally see eye to eye",
            pronunciation: "[FY-nuh-lee see EYE too EYE]",
            meaning: "Reaching hard-won consensus after prolonged negotiation or technical friction.",
            example: "After three rounds of architecture reviews, product and engineering finally see eye to eye on the API schema.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Chief Technology Officer Daniel and Chief Marketing Officer Laura debrief after a contentious budget alignment meeting.",
      lines: [
        {
          speaker: "Laura (CMO)",
          text: "Daniel, that was an intense meeting. I was worried our departments were going to end up in a deadlock over the redesign budget.",
          notes: "Addresses tension directly with candor.",
        },
        {
          speaker: "Daniel (CTO)",
          text: "We certainly don't see eye to eye on every feature priority, Laura, but I've always respected your focus on the user experience.",
          notes: "Uses the idiom gracefully to acknowledge disagreement while expressing respect.",
        },
        {
          speaker: "Laura (CMO)",
          text: "I appreciate that. At the end of the day, we both want the application to be lightning fast and visually stunning.",
          notes: "Refocuses on shared high-level strategic alignment.",
        },
        {
          speaker: "Daniel (CTO)",
          text: "Exactly. Now that we see eye to eye on the core milestones, my engineering team can start sprint planning with full confidence.",
          notes: "Confirms that alignment has been successfully achieved.",
        },
      ],
    },
    funFact: {
      title: "Visual Contact Across Anthropological Studies",
      content:
        "Anthropological research shows that direct eye-to-eye gaze in primates can trigger threat responses, but in humans, sustained mutual gaze synchronizes heart rates and neural firing in the frontal cortex, scientifically explaining why shared eye alignment became synonymous with mutual understanding and agreement across world cultures.",
    },
  },

  // Lesson 4: Call it a day
  "idiom-4-call-it-a-day": {
    overview:
      "To 'call it a day' means to stop working on an activity, meeting, or task for the rest of the day because enough progress has been achieved, fatigue has set in, or further effort would yield diminishing returns. In workplace culture, knowing when to call it a day is a sign of mature project leadership, healthy burnout prevention, and team empathy.",
    canDo:
      "Can politely wrap up intensive work sessions, summarize closing achievements, and suggest healthy project milestones.",
    teacherNote:
      "Compare 'call it a day' with 'call it quits'! 'Call it a day' means pausing work until tomorrow with the expectation of resuming fresh. 'Call it quits' often implies permanent surrender or abandoning a project completely.",
    sections: [
      {
        title: "1. Meaning, Etymology & Evolution",
        description:
          "Tracing the phrase from 19th-century trade workers to modern tech hubs:",
        table: {
          headers: ["Evolutionary Stage", "Historical Detail"],
          rows: [
            ["1830s: 'Call it half a day'", "Early recorded use among maritime dockworkers and factory artisans who left early when daylight or raw materials ran out."],
            ["Early 1900s: 'Call it a day'", "Standardized across British and American industrial workers when shift bells sounded to mark completed labor quotas."],
            ["Modern Knowledge Work", "Used by leaders to signal satisfaction with a team's output and protect them from exhaustion: 'We've solved the core bug; let's call it a day.'"],
          ],
        },
      },
      {
        title: "2. Strategic Closing Formulas for Meetings and Deep Work",
        description:
          "Phrases to bring long sessions to a satisfying, structured close:",
        items: [
          {
            term: "'Let's call it a day here'",
            pronunciation: "[lets cawl it a DAY heer]",
            meaning: "Signals that a logical stopping point has been reached and further work should resume tomorrow.",
            example: "We've migrated four out of the five microservices without a single error. Let's call it a day here and tackle the final service tomorrow morning with fresh eyes.",
          },
          {
            term: "'Call it a night'",
            pronunciation: "[cawl it a NYTE]",
            meaning: "Variation used when work, hackathons, or social events extend late into the evening.",
            example: "It's already 11 PM and the build is green. Let's call it a night, team.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Security engineers Leo and Nina have spent eight hours diagnosing an elusive SSL certificate expiration glitch.",
      lines: [
        {
          speaker: "Leo",
          text: "Nina, I just verified the automated renewal cron job. The staging environment is finally passing all SSL handshakes.",
          notes: "Reports milestone achievement after prolonged troubleshooting.",
        },
        {
          speaker: "Nina",
          text: "What a relief! That was one of the trickiest edge cases we've seen all month.",
          notes: "Acknowledges collective effort and cognitive exhaustion.",
        },
        {
          speaker: "Leo",
          text: "Should we start writing the post-mortem document now, or is it better to wait?",
          notes: "Contemplates pushing through exhaustion.",
        },
        {
          speaker: "Nina",
          text: "Our brains are fried, Leo. Let's call it a day, get some dinner, and draft the post-mortem tomorrow morning with a cup of coffee.",
          notes: "Mature leadership decision to call it a day and avoid tired errors.",
        },
        {
          speaker: "Leo",
          text: "Agreed. Good work today Nina. See you at 9 AM!",
          notes: "Healthy closure and positive team morale.",
        },
      ],
    },
    funFact: {
      title: "The Diminishing Returns of Late-Night Coding",
      content:
        "A famous software engineering study by Cambridge researchers discovered that code written after 10 PM by fatigued developers contains nearly 4 times more syntax and architectural bugs than code written in the morning, proving the objective wisdom of knowing when to 'call it a day'!",
    },
  },

  // Lesson 5: Bite the bullet
  "idiom-5-bite-the-bullet": {
    overview:
      "To 'bite the bullet' means to face a grim, painful, or inevitable situation with courage and stoicism after delaying or dreading it. In corporate and personal contexts, it describes taking decisive, uncomfortable action—such as terminating an unprofitable project, paying an unexpected fee, having a difficult performance discussion, or performing a massive legacy system refactoring.",
    canDo:
      "Can express decisive executive resolution when confronting tough choices and understand the grim military surgery origin of the phrase.",
    teacherNote:
      "Use this idiom when you have been hesitating or dreading something, but finally decide to confront it directly: 'We've been postponing this database upgrade for six months; it's time to bite the bullet and do it this weekend.'",
    sections: [
      {
        title: "1. Grim Battlefield Surgery Origin",
        description:
          "The visceral military history behind this famous expression:",
        table: {
          headers: ["Attribute", "Historical Detail"],
          rows: [
            ["19th-Century Battlefield Surgery", "Before the invention of modern clinical anesthesia (such as ether or chloroform), wounded soldiers undergoing emergency battlefield amputations were given a soft lead musket bullet to bite down on to cope with agonizing pain without screaming or biting through their tongues."],
            ["Lead Properties", "Lead was relatively soft compared to human teeth, meaning soldiers could bite into it firmly without shattering their dental enamel."],
            ["First Literary Appearance", "Appeared in Rudyard Kipling's 1891 novel 'The Light That Failed' ('Bite on the bullet, old man, and don't let them think you're afraid.')."],
          ],
        },
      },
      {
        title: "2. Strategic Corporate Usage",
        description:
          "How leaders deploy this expression to overcome organizational paralysis:",
        items: [
          {
            term: "To bite the bullet and [do something painful]",
            pronunciation: "[BYTE the BOOL-it]",
            meaning: "To summon the resolve to execute an unpleasant but mandatory decision.",
            example: "Our legacy monolith is causing three outages a week. We have to bite the bullet, pause feature development for one sprint, and refactor the core architecture.",
          },
          {
            term: "To rip off the band-aid",
            pronunciation: "[rip off the BAND-ayd]",
            meaning: "Close synonym meaning to get an inevitable painful experience over with quickly rather than prolonging it.",
            example: "Let's rip off the band-aid and announce the price adjustment to clients today.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Startup co-founders Sarah and Tariq discuss migrating away from an expensive legacy vendor that has been dragging down their margins.",
      lines: [
        {
          speaker: "Sarah",
          text: "Tariq, our cloud hosting bill went up another 25% this month. If this continues, our runway drops below nine months.",
          notes: "Highlights financial emergency requiring tough choices.",
        },
        {
          speaker: "Tariq",
          text: "I know, but migrating our 50 terabytes of data to AWS or GCP will take at least 80 hours of intense engineering work.",
          notes: "Expresses dread at the sheer effort and disruption involved.",
        },
        {
          speaker: "Sarah",
          text: "We've been avoiding this decision for half a year because it's painful. We just have to bite the bullet, schedule the migration window for Saturday night, and get it done.",
          notes: "Decisive deployment of the idiom to cut through hesitation.",
        },
        {
          speaker: "Tariq",
          text: "You're right. It's going to be a stressful weekend, but saving $15,000 every single month afterwards makes it 100% worth it.",
          notes: "Embraces the tough decision for long-term strategic benefit.",
        },
      ],
    },
    funFact: {
      title: "Civil War Relics with Human Tooth Marks",
      content:
        "American Civil War battlefield archaeologists around Gettysburg and Antietam have excavated dozens of authentic 19th-century lead Minie balls with deep, visible human tooth impressions embedded in the metal, preserved as physical relics of wounded soldiers biting the bullet during emergency surgeries.",
    },
  },

  // Lesson 6: On the same page
  "idiom-6-on-the-same-page": {
    overview:
      "To be 'on the same page' means that all parties possess a shared understanding, hold identical expectations, and agree on goals, timelines, and responsibilities. In cross-functional collaboration between engineering, sales, product, and legal, misalignment is the number one cause of project failure. Ensuring that everyone is 'on the same page' is a fundamental project management necessity.",
    canDo:
      "Can confirm team consensus, align stakeholders across departments, and verify shared project assumptions.",
    teacherNote:
      "Use this idiom as an alignment check before concluding a meeting: 'Just to make sure we're all on the same page, Alice owns the frontend mockups and Bob delivers the API endpoints by Thursday, correct?' It prevents costly misunderstandings.",
    sections: [
      {
        title: "1. Metaphorical Heritage & Conceptual Model",
        description:
          "The origins and mechanics of shared cognitive alignment:",
        table: {
          headers: ["Component", "Context"],
          rows: [
            ["Choir / Orchestral Roots", "Originates from vocal choirs, church congregations, and orchestral musicians who must all literally open their sheet music hymnal or score to the exact same page number to play harmony together without chaotic discord."],
            ["Modern Metaphor", "If one person is on page 42 and another is on page 87, they are reading completely different texts. In business, being on the same page means sharing the same context."],
            ["Frequent Synonyms", "Aligned, in lockstep, in sync, of one mind, singing from the same hymn sheet."],
          ],
        },
      },
      {
        title: "2. The Executive Alignment Checklist",
        description:
          "Formulas to verify that stakeholders are truly on the same page:",
        items: [
          {
            term: "'Just to ensure we're all on the same page...'",
            pronunciation: "[on the saym PAYJ]",
            meaning: "A polite preface used before summarizing key takeaways, deliverables, and owners.",
            example: "Just to ensure we're all on the same page, we are freezing code deployments on December 15th for the holidays.",
          },
          {
            term: "'To get everyone on the same page'",
            pronunciation: "[too get EV-ree-wun on the saym PAYJ]",
            meaning: "Bringing disparate stakeholders into a single room or document to align fragmented understandings.",
            example: "I've scheduled a 20-minute sync with marketing and legal to get everyone on the same page regarding the new privacy policy.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Project Manager Amanda aligns cross-functional leads before launching a global e-commerce feature.",
      lines: [
        {
          speaker: "Amanda (PM)",
          text: "Before we wrap up this launch readiness review, I want to make sure everyone is on the same page regarding rollback procedures if anything goes wrong during deployment.",
          notes: "Proactively checks alignment on critical risk mitigation.",
        },
        {
          speaker: "Carlos (DevOps)",
          text: "From infrastructure, we have automated canary deployments configured. If error rates exceed 0.5%, traffic automatically rolls back to the previous stable build.",
          notes: "Confirms technical alignment with concrete metrics.",
        },
        {
          speaker: "Jenna (Customer Support)",
          text: "And our tier-1 support agents have the updated troubleshooting macros ready in Zendesk.",
          notes: "Confirms operational readiness.",
        },
        {
          speaker: "Amanda (PM)",
          text: "Fantastic. It sounds like we're 100% on the same page. Deployment is authorized for 2 AM UTC.",
          notes: "Validates unanimous consensus and authorizes project execution.",
        },
      ],
    },
    funFact: {
      title: "'Singing from the Same Hymn Sheet'",
      content:
        "In British and Australian corporate English, the direct equivalent of 'on the same page' is 'singing from the same hymn sheet' (or 'hymn book'). Both idioms trace directly back to musical rehearsals where unity of page and voice was mandatory for harmony.",
    },
  },

  // Lesson 7: Play it by ear
  "idiom-7-play-it-by-ear": {
    overview:
      "To 'play it by ear' means to handle a situation spontaneously and adapt dynamically as events unfold, rather than adhering rigidly to a predetermined plan or rigid agenda. In an unpredictable business and travel environment where external factors (weather, client delays, market shifts) fluctuate rapidly, 'playing it by ear' signifies flexible, resilient agility.",
    canDo:
      "Can propose flexible, adaptable plans when circumstances are tentative and explain the musical improvisation roots of the phrase.",
    teacherNote:
      "Be careful of the context! 'Playing it by ear' is perfect for casual meetups, tentative dinner plans, or brainstorming sessions. However, never say you will 'play it by ear' regarding hospital surgery, cybersecurity protocols, or legal contracts, where strict planning is mandatory!",
    sections: [
      {
        title: "1. Musical Improvisation Roots",
        description:
          "The performing arts history behind this famous phrase:",
        table: {
          headers: ["Attribute", "Historical Detail"],
          rows: [
            ["Musical Origin", "Originates in the late 18th and early 19th centuries with musicians who could perform melodies purely by auditory memory and instinct without reading printed sheet music notation."],
            ["Ear vs. Eye", "Playing by eye meant reading notes strictly off paper; playing by ear meant trusting one's intuitive listening skills to harmonize with the band."],
            ["20th-Century Colloquial Spread", "Broadened in colloquial English by the 1930s to mean improvising any non-musical situation according to unfolding circumstances."],
          ],
        },
      },
      {
        title: "2. How to Propose Spontaneity Professionally",
        description:
          "Formulas for keeping options open without sounding disorganized:",
        items: [
          {
            term: "'Let's play it by ear'",
            pronunciation: "[play it by EER]",
            meaning: "Suggests deciding on details later once more information or environmental clarity is available.",
            example: "We don't know exactly what time the client's flight lands, so let's play it by ear regarding dinner reservations.",
          },
          {
            term: "To see how things play out",
            pronunciation: "[see how things play OUT]",
            meaning: "Close synonym meaning to observe developments before committing to a rigid course of action.",
            example: "Let's release the beta feature to 5% of users first and see how things play out before committing our full marketing budget.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Account executives Nathan and Grace plan their schedule during an upcoming client conference trip in Chicago.",
      lines: [
        {
          speaker: "Nathan",
          text: "Grace, should we book a table for 8 PM on Thursday with the prospective clients from Acme Corp?",
          notes: "Attempts to establish rigid scheduling.",
        },
        {
          speaker: "Grace",
          text: "Their team lead told me their executive board meeting might run late that evening, so they can't commit to a fixed hour.",
          notes: "Explains the external dependency and unpredictability.",
        },
        {
          speaker: "Nathan",
          text: "What do you suggest we do instead?",
          notes: "Inquires about alternative approach.",
        },
        {
          speaker: "Grace",
          text: "Let's play it by ear. We can invite them to join us at the conference rooftop lounge whenever their meeting wraps up. It's low-pressure and keeps our options flexible.",
          notes: "Proposes adaptive, agile solution that accommodates client schedule.",
        },
        {
          speaker: "Nathan",
          text: "Great idea. That takes the stress off them and still gives us an opportunity to connect face-to-face.",
          notes: "Recognizes the strategic value of flexibility.",
        },
      ],
    },
    funFact: {
      title: "Mozart's Prodigious 'Ear'",
      content:
        "At age 14, Wolfgang Amadeus Mozart visited the Sistine Chapel in Rome and heard Gregorio Allegri's famous 'Miserere'—a closely guarded musical score that the Vatican forbade anyone from transcribing on pain of excommunication. Mozart listened once, returned to his lodging, and wrote down the entire nine-part choral composition from memory—the ultimate historical feat of 'playing it by ear'!",
    },
  },

  // Lesson 8: Touch base
  "idiom-8-touch-base": {
    overview:
      "To 'touch base' with someone means to make brief, informal contact to check progress, exchange status updates, or reaffirm communication lines. It is arguably the single most ubiquitous corporate expression in the English-speaking business world. Mastering when and how to suggest 'touching base' conveys professional warmth, accessibility, and proactive collaboration without scheduling heavy, calendar-clogging meetings.",
    canDo:
      "Can initiate low-friction professional follow-ups, propose brief asynchronous or synchronous syncs, and understand the baseball origins of the phrase.",
    teacherNote:
      "A golden phrase for polite client follow-ups! Instead of sending an abrasive 'Where is that contract?', writing: 'Hi David, just wanted to touch base regarding the contract draft' softens the inquiry while effectively eliciting a prompt response.",
    sections: [
      {
        title: "1. American Baseball Roots & Modern Workplace Spread",
        description:
          "The sports origins and corporate evolution of 'touching base':",
        table: {
          headers: ["Attribute", "Historical Detail"],
          rows: [
            ["Baseball Origin", "In American baseball, a baserunner must physically touch each base (first, second, third, home) with their foot or hand to remain safe and validate a run. Touching the base establishes contact with safety."],
            ["Early 1900s Slang", "Spread from baseball diamonds into general American vernacular by World War I, signifying touching in with headquarters or reconnecting with family."],
            ["Modern Global Enterprise", "Adopted internationally across the tech, consulting, and finance sectors as the standard polite formula for a quick status check."],
          ],
        },
      },
      {
        title: "2. The 3 Most Effective 'Touch Base' Email & Chat Formulas",
        description:
          "How to deploy this idiom in written outreach for maximum response rates:",
        items: [
          {
            term: "'Just wanted to touch base on [topic]...'",
            pronunciation: "[tuch BAYS on]",
            meaning: "Gentle, non-aggressive reminder to check progress on an ongoing project.",
            example: "Hi Laura, just wanted to touch base on the vendor security audit before our Thursday all-hands call.",
          },
          {
            term: "'Let's touch base early next week'",
            pronunciation: "[lets tuch BAYS ER-lee nekst week]",
            meaning: "Defers discussion to a future timeframe while maintaining proactive momentum.",
            example: "I know you're swamped with the quarterly close right now; let's touch base early next week once the dust settles.",
          },
          {
            term: "'A quick touchpoint'",
            pronunciation: "[a kwik TUCH-poynt]",
            meaning: "Noun variation referring to a 5-minute conversation or check-in message.",
            example: "We don't need a full hour meeting; a quick 5-minute touchpoint on Slack will give us all the clarity we need.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Consultant Raymond follows up with Enterprise Client Director Brenda regarding a proposed software audit.",
      lines: [
        {
          speaker: "Raymond (Consultant)",
          text: "Hi Brenda! Hope you had a restful weekend. Just wanted to touch base regarding the cloud migration proposal we sent over last Wednesday.",
          notes: "Warm, non-demanding opening that brings the proposal back to top of mind.",
        },
        {
          speaker: "Brenda (Client)",
          text: "Hi Raymond! Thanks for checking in. Our executive committee met on Friday to review the numbers, and the feedback was overwhelmingly positive.",
          notes: "Client responds promptly to the low-pressure check-in.",
        },
        {
          speaker: "Raymond (Consultant)",
          text: "That's fantastic news! Do you need any additional compliance data from our architects before formal sign-off?",
          notes: "Proactively offers unblocking assistance.",
        },
        {
          speaker: "Brenda (Client)",
          text: "Legal just needs one clarification on the EU data privacy addendum. Let's touch base for ten minutes tomorrow morning, and I should have the signed agreement ready for you by midday.",
          notes: "Agrees to a brief sync and commits to final contract delivery.",
        },
        {
          speaker: "Raymond (Consultant)",
          text: "Sounds great Brenda. I'll send a 10-minute calendar invite for 10:30 AM. Talk tomorrow!",
          notes: "Efficient, professional closure that solidifies the arrangement.",
        },
      ],
    },
    funFact: {
      title: "The Satirical War on Corporate 'Touch Base'",
      content:
        "Despite its immense utility, 'touch base' frequently tops annual corporate buzzword satire lists alongside 'synergy', 'circle back', and 'move the needle'. In 2018, a Forbes survey of 2,000 office workers found that 62% of respondents used 'touch base' at least once a week—making it one of the most complained about, yet universally indispensable, phrases in modern business!",
    },
  },
};
