import { LessonContent } from "../api";

export const CHAPTER_10_LESSONS: Record<string, LessonContent> = {
  "a1-ch10-l44": {
    "overview": "Speaking on the telephone and exchanging short digital messages requires specialized conversational etiquette. In this lesson, you will master introducing yourself on the phone ('Hier spricht...'), asking to speak with someone, leaving messages, and common German text abbreviations.",
    "canDo": "Can answer and conduct simple telephone calls, ask for people politely, leave brief messages, and understand short SMS and chat messages.",
    "teacherNote": "On the phone, Germans never say 'Ich bin Gregor'. They state their name directly as: 'Hier spricht Gregor Schubert' (Here speaks Gregor Schubert) or simply 'Schubert, guten Tag!'.",
    "sections": [
      {
        "title": "1. Redemittel am Telefon (Telephone Phrase Bank)",
        "description": "Standard telephone expressions from Netzwerk Kapitel 7:",
        "table": {
          "headers": [
            "Situation",
            "Deutscher Ausdruck",
            "Bedeutung",
            "Antwort"
          ],
          "rows": [
            [
              "Melden (Answering)",
              "Firma Müller, Meier am Apparat, guten Tag!",
              "Company Müller, Meier on the line, hello!",
              "Guten Tag, hier spricht..."
            ],
            [
              "Verbinden fragen",
              "Ich möchte bitte Herrn Schmidt sprechen.",
              "I would like to speak to Mr. Schmidt.",
              "Einen Moment, ich verbinde Sie."
            ],
            [
              "Nicht da",
              "Herr Schmidt ist leider nicht am Platz.",
              "Mr. Schmidt is unfortunately not at his desk.",
              "Kann ich eine Nachricht hinterlassen?"
            ],
            [
              "Rückruf",
              "Können Sie mich bitte zurückrufen?",
              "Could you please call me back?",
              "Ja, wie ist Ihre Nummer?"
            ],
            [
              "Verabschiedung",
              "Auf Wiederhören, Frau Weber!",
              "Goodbye (on the phone), Ms. Weber!",
              "Auf Wiederhören!"
            ]
          ]
        }
      },
      {
        "title": "2. Abkürzungen im Chat & SMS (Texting Shorthand)",
        "description": "Common informal abbreviations in German texting:",
        "items": [
          {
            "term": "VG / LG (Viele Grüße / Liebe Grüße)",
            "meaning": "Best regards / warm regards (standard friendly sign-off)",
            "example": "Bis morgen! LG, Nina"
          },
          {
            "term": "WE (Wochenende)",
            "meaning": "Weekend",
            "example": "Was machst du am WE?"
          },
          {
            "term": "hdl (hab dich lieb)",
            "meaning": "Love you / fond of you (used between close friends and couples)",
            "example": "Danke für alles, hdl!"
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Telefonanruf im Büro (Netzwerk A1 Kapitel 7):",
      "lines": [
        {
          "speaker": "Sekretärin",
          "german": "Klett Verlag, Rezeption, guten Tag! Was kann ich für Sie tun?",
          "english": "Klett Publishing, reception, good day! What can I do for you?"
        },
        {
          "speaker": "Gregor",
          "german": "Guten Tag, mein Name ist Gregor Schubert. Ich möchte gern Frau Kilimann sprechen.",
          "english": "Good day, my name is Gregor Schubert. I would like to speak to Ms. Kilimann."
        },
        {
          "speaker": "Sekretärin",
          "german": "Einen kleinen Moment bitte, ich verbinde Sie... Tut mir leid, sie ist gerade in einer Besprechung.",
          "english": "One moment please, I am connecting you... I am sorry, she is currently in a meeting."
        },
        {
          "speaker": "Gregor",
          "german": "Kann ich ihr eine kurze Nachricht hinterlassen? Sie soll mich bitte unter 0172-88492 zurückrufen.",
          "english": "Can I leave her a short message? Could she please call me back at 0172-88492."
        },
        {
          "speaker": "Sekretärin",
          "german": "Sehr gern, Herr Schubert. Ich gebe ihr die Nachricht weiter. Auf Wiederhören!",
          "english": "Very gladly, Mr. Schubert. I will pass the message along to her. Goodbye!"
        }
      ]
    },
    "funFact": {
      "title": "State Your Last Name First When Answering",
      "content": "When private landline phones or business phones ring in Germany, people almost never answer with a generic 'Hallo?'. Instead, they state their family name directly: 'Schubert!' or 'Schubert, guten Tag!'. It confirms immediately to the caller that they have reached the right household."
    },
    "practice": [
      {
        "question": "How do you correctly say: 'This is Gregor Schubert speaking' on the phone?",
        "options": [
          "Ich bin Gregor Schubert.",
          "Hier spricht Gregor Schubert.",
          "Das ist Gregor Schubert."
        ],
        "answer": "Hier spricht Gregor Schubert.",
        "explanation": "'Hier spricht [Name]' is the standard, professional phone introduction in German."
      },
      {
        "question": "What does the text abbreviation 'LG' stand for?",
        "options": [
          "Lange Grüße",
          "Liebe Grüße",
          "Letzter Gruß"
        ],
        "answer": "Liebe Grüße",
        "explanation": "'LG' stands for 'Liebe Grüße' (warm regards / best wishes)."
      }
    ]
  },
  "a1-ch10-l45": {
    "overview": "Writing simple letters and emails is tested directly in the Goethe-Zertifikat A1 exam (Writing Part 2). In this lesson, you will master the formal structure (Sehr geehrte Damen und Herren / Mit freundlichen Grüßen) and the informal structure (Liebe... / Viele Grüße).",
    "canDo": "Can write simple formal inquiries, registrations, and informal personal emails using correct salutations and closing formulas.",
    "teacherNote": "Punctuation alert: After a German email salutation, put a COMMA, and then start the next line with a LOWERCASE letter! For example: 'Liebe Julia, / ich danke dir für deine Einladung...'.",
    "sections": [
      {
        "title": "1. Formelle vs. Informelle E-Mail-Struktur",
        "description": "Standard letter layout required in the Goethe-Zertifikat A1 exam:",
        "table": {
          "headers": [
            "Baustein (Element)",
            "Formell (Ämter, Vermieter, Chefs)",
            "Informell (Freunde, Familie)"
          ],
          "rows": [
            [
              "Betreffzeile (Subject)",
              "Anmeldung zum Deutschkurs A1",
              "Party am Samstag!"
            ],
            [
              "Anrede (Salutation)",
              "Sehr geehrte Damen und Herren, / Sehr geehrte Frau...",
              "Liebe Julia, (f) / Lieber Paco, (m)"
            ],
            [
              "Erster Satz (First sentence)",
              "Beginnt KLEIN nach dem Komma!",
              "Beginnt KLEIN nach dem Komma!"
            ],
            [
              "Hauptteil (Body)",
              "Ich schreibe Ihnen, weil ich...",
              "Wie geht es dir? Ich möchte dich fragen..."
            ],
            [
              "Grußformel (Closing)",
              "Mit freundlichen Grüßen",
              "Viele Grüße / Liebe Grüße"
            ],
            [
              "Unterschrift (Signature)",
              "Vorname + Nachname",
              "Nur Vorname"
            ]
          ]
        }
      },
      {
        "title": "2. Typische Textbausteine (Email Building Blocks)",
        "description": "Phrases you can copy directly into your emails from Netzwerk A1:",
        "items": [
          {
            "term": "Ich schreibe Ihnen, weil...",
            "meaning": "I am writing to you because... (states the purpose of the email)",
            "example": "Ich schreibe Ihnen, weil ich mich für den Kurs anmelden möchte."
          },
          {
            "term": "Können Sie mir bitte mitteilen, ob...",
            "meaning": "Could you please let me know whether...",
            "example": "Können Sie mir bitte mitteilen, wann der Kurs beginnt?"
          },
          {
            "term": "Vielen Dank im Voraus für Ihre Antwort.",
            "meaning": "Thank you in advance for your reply.",
            "example": "Über eine baldige Antwort würde ich mich freuen."
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Eine formelle Anfrage an das Goethe-Institut (Netzwerk A1 Kapitel 7):",
      "lines": [
        {
          "speaker": "E-Mail Text",
          "german": "Betreff: Anfrage Deutschkurs A1 im Juli\n\nSehr geehrte Damen und Herren,\n\nich heiße Paco Garcia und möchte im Juli einen Intensivkurs A1 besuchen. Gibt es noch freie Plätze? Und wie viel kostet der Kurs inklusive Lehrbuch?\n\nVielen Dank im Voraus für Ihre Auskunft.\n\nMit freundlichen Grüßen\nPaco Garcia",
          "english": "Subject: Inquiry German Course A1 in July\n\nDear Sir or Madam,\n\nMy name is Paco Garcia and I would like to attend an intensive A1 course in July. Are there still free spots available? And how much does the course cost including the textbook?\n\nThank you in advance for your information.\n\nSincerely yours,\nPaco Garcia"
        }
      ]
    },
    "funFact": {
      "title": "Lower-Case First Word After Salutation",
      "content": "One of the most noticeable differences between English and German letter writing is that in German, the line immediately following the salutation begins with a lowercase letter! In English: 'Dear John, I am writing...'. In German: 'Lieber John, ich schreibe...'."
    },
    "practice": [
      {
        "question": "What is the standard formal sign-off for business emails in German?",
        "options": [
          "Viele Grüße",
          "Mit freundlichen Grüßen",
          "Tschüs!"
        ],
        "answer": "Mit freundlichen Grüßen",
        "explanation": "'Mit freundlichen Grüßen' (With kind regards) is the universal formal closing."
      },
      {
        "question": "How do you address a female teacher or manager formally?",
        "options": [
          "Lieber Frau Müller,",
          "Sehr geehrte Frau Müller,",
          "Hallo Frau Müller!"
        ],
        "answer": "Sehr geehrte Frau Müller,",
        "explanation": "'Sehr geehrte Frau [Nachname]' is the polite formal salutation for a woman."
      }
    ]
  },
  "a1-ch10-l46": {
    "overview": "Inviting friends to parties, accepting or declining invitations politely, and suggesting alternative dates are key social skills. In this lesson, you will work with an authentic party invitation from Netzwerk Kapitel 6 ('Psst - eine Überraschung für Sofia!') and practice social coordination.",
    "canDo": "Can understand party invitations, accept with enthusiasm, decline with polite justification, and propose alternative meeting times.",
    "teacherNote": "When declining an invitation in German, always follow the 'polite sandwich': 1. Thank them ('Danke für die Einladung'), 2. Give a brief reason ('Leider kann ich nicht, weil ich arbeiten muss'), 3. Propose another time ('Können wir uns nächste Woche treffen?').",
    "sections": [
      {
        "title": "1. Eine Einladung verstehen (Authentic Invitation from Netzwerk A1)",
        "description": "Read the authentic email from Netzwerk Kapitel 6:",
        "table": {
          "headers": [
            "Abschnitt",
            "Originaltext aus Netzwerk A1 (Kapitel 6)",
            "Bedeutung"
          ],
          "rows": [
            [
              "Betreff",
              "Psst – eine Überraschung für Sofia!",
              "Psst – a surprise for Sofia!"
            ],
            [
              "Anrede",
              "Hallo liebe Freunde von Sofia,",
              "Hello dear friends of Sofia,"
            ],
            [
              "Anlass (Occasion)",
              "Sofia hat Geburtstag und wir möchten ihr ein Geschenk machen!",
              "Sofia has a birthday and we want to give her a gift!"
            ],
            [
              "Treffpunkt & Zeit",
              "Am Samstag, den 18.07. um 10 Uhr am Bahnhof.",
              "On Saturday, July 18th at 10 AM at the station."
            ],
            [
              "Plan (Activity)",
              "Wir machen einen Ausflug mit dem Fahrrad und ein Picknick.",
              "We are doing a bike excursion and a picnic."
            ],
            [
              "Mitbringen (Bring)",
              "Wir bringen Essen und Getränke mit. Bitte gebt Bescheid!",
              "We bring food and drinks along. Please let us know!"
            ]
          ]
        }
      },
      {
        "title": "2. Zusagen und Absagen (Accepting & Declining)",
        "description": "How to respond to invitations:",
        "items": [
          {
            "term": "Zusagen (Accepting enthusiastically)",
            "meaning": "Ich komme sehr gern! / Ich bin auf jeden Fall dabei!",
            "example": "Vielen Dank für die Einladung, ich komme gern!"
          },
          {
            "term": "Absagen (Declining politely)",
            "meaning": "Leider kann ich nicht kommen. / Das geht leider nicht.",
            "example": "Es tut mir leid, aber am Samstag muss ich arbeiten."
          },
          {
            "term": "Bescheid geben",
            "meaning": "To let someone know / give notice",
            "example": "Ich gebe dir bis Freitag Bescheid!"
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Antwort auf die Einladung per WhatsApp (Netzwerk A1 Kapitel 6):",
      "lines": [
        {
          "speaker": "Gregor",
          "german": "Hallo Christian! Hast du die Mail über Sofias Überraschungstag gelesen?",
          "english": "Hello Christian! Did you read the email about Sofia's surprise day?"
        },
        {
          "speaker": "Christian",
          "german": "Ja, tolle Idee! Ich bin auf jeden Fall dabei. Ich bringe einen Kuchen und Musik mit.",
          "english": "Yes, great idea! I am definitely in. I'll bring a cake and music."
        },
        {
          "speaker": "Gregor",
          "german": "Perfekt! Und weißt du, ob Julia auch mitkommt?",
          "english": "Perfect! And do you know if Julia is coming along too?"
        },
        {
          "speaker": "Christian",
          "german": "Julia hat leider keine Zeit, weil sie ihre Großeltern besucht. Aber sie gibt Bescheid!",
          "english": "Julia unfortunately has no time because she is visiting her grandparents. But she will let us know!"
        }
      ]
    },
    "funFact": {
      "title": "'Bescheid sagen / Bescheid geben'",
      "content": "You will hear 'Bescheid geben' or 'Bescheid sagen' in almost every single German conversation! It simply means 'to let someone know / keep someone posted': 'Gib mir bitte Bescheid!' (Please let me know!)."
    },
    "practice": [
      {
        "question": "How do you accept an invitation with enthusiasm?",
        "options": [
          "Ich habe keine Lust.",
          "Ich bin auf jeden Fall dabei!",
          "Vielleicht später."
        ],
        "answer": "Ich bin auf jeden Fall dabei!",
        "explanation": "'Ich bin auf jeden Fall dabei!' means 'I am definitely joining / count me in!'."
      },
      {
        "question": "What does the expression 'Gib mir Bescheid' mean?",
        "options": [
          "Give me a ticket",
          "Let me know / keep me posted",
          "Pay the bill"
        ],
        "answer": "Let me know / keep me posted",
        "explanation": "'Bescheid geben' means to notify or let someone know."
      }
    ]
  },
  "a1-ch10-l47": {
    "overview": "Congratulations on completing the German A1 curriculum! In this final milestone lesson, you will review the complete architecture of the official Goethe-Zertifikat A1 (Start Deutsch 1) exam, understand scoring across the 4 modules (Hören, Lesen, Schreiben, Sprechen), and learn expert exam strategies to pass with confidence.",
    "canDo": "Understand the exact structure and time limits of the Goethe-Zertifikat A1 exam, know how to approach multiple-choice audio, short reading texts, email writing, and the group speaking test.",
    "teacherNote": "To pass the Goethe-Zertifikat A1, you need at least 60 points out of 100 (60%). Each of the 4 sections is weighted equally at 25%! Even if one section is challenging, strong performance in the other three will easily carry you over the passing line!",
    "sections": [
      {
        "title": "1. Die 4 Module der Goethe-Zertifikat A1 Prüfung",
        "description": "Exam structure, timing, and point distribution:",
        "table": {
          "headers": [
            "Modul",
            "Dauer (Time)",
            "Aufgaben (Tasks)",
            "Punkte (Points)"
          ],
          "rows": [
            [
              "1. Hören (Listening)",
              "ca. 20 Minuten",
              "3 Teile: kurze Alltagsgespräche, Durchsagen am Bahnhof, Anrufbeantworter",
              "25 Punkte (25%)"
            ],
            [
              "2. Lesen (Reading)",
              "ca. 25 Minuten",
              "3 Teile: E-Mails, Kleinanzeigen, Schilder & Hinweise im Kaufhaus",
              "25 Punkte (25%)"
            ],
            [
              "3. Schreiben (Writing)",
              "ca. 20 Minuten",
              "Teil 1: Ein Formular ausfüllen (5 Lücken). Teil 2: Eine kurze E-Mail (ca. 30 Wörter).",
              "25 Punkte (25%)"
            ],
            [
              "4. Sprechen (Speaking)",
              "ca. 15 Minuten",
              "Gruppe (3-4 Personen): Teil 1: Sich vorstellen & buchstabieren. Teil 2: Um Informationen bitten. Teil 3: Bitten formulieren.",
              "25 Punkte (25%)"
            ]
          ]
        }
      },
      {
        "title": "2. Erfolgsstrategien für das Modul 'Sprechen'",
        "description": "Tips for the group speaking exam from Netzwerk A1:",
        "items": [
          {
            "term": "Teil 1: Sich vorstellen",
            "meaning": "Be prepared to state: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby. Plus spell your name and say your phone number!",
            "example": "Ich heiße Paco Garcia. Ich bin 25 Jahre alt..."
          },
          {
            "term": "Teil 2: Thema & Wortkarte",
            "meaning": "You draw a card with a theme (e.g. Essen & Trinken) and a word (z.B. Kaffee). Formulate a question: 'Trinken Sie gern Kaffee?'.",
            "example": "Antwort: 'Ja, sehr gern mit Milch!'"
          },
          {
            "term": "Teil 3: Bildkarte & Bitte formulieren",
            "meaning": "You draw a picture card (e.g. an apple or a pencil) and make a polite request with imperative or 'Können Sie...?'",
            "example": "'Geben Sie mir bitte den Stift!' -> 'Hier, bitte sehr!'"
          }
        ]
      }
    ],
    "dialogue": {
      "context": "Simulierte Sprechprüfung A1 – Teil 2: Thema 'Essen und Trinken' (Netzwerk A1):",
      "lines": [
        {
          "speaker": "Prüfer",
          "german": "So, meine Damen und Herren, wir kommen zu Teil 2. Paco, ziehen Sie bitte eine Karte und stellen Sie Ihrem Nachbarn eine Frage!",
          "english": "So, ladies and gentlemen, we come to part 2. Paco, please draw a card and ask your neighbor a question!"
        },
        {
          "speaker": "Paco (Karte: Frühstück)",
          "german": "Gregor, was isst du normalerweise zum Frühstück?",
          "english": "Gregor, what do you normally eat for breakfast?"
        },
        {
          "speaker": "Gregor",
          "german": "Ich esse meistens ein Müsli mit Joghurt und trinke einen schwarzen Kaffee. Und du?",
          "english": "I mostly eat muesli with yogurt and drink a black coffee. And you?"
        },
        {
          "speaker": "Prüfer",
          "german": "Sehr gut! Danke schön. Jetzt ist Gregor an der Reihe.",
          "english": "Very good! Thank you. Now it is Gregor's turn."
        }
      ]
    },
    "funFact": {
      "title": "The Global Power of the Goethe-Zertifikat A1",
      "content": "The Goethe-Zertifikat A1 is legally recognized worldwide as proof of basic German proficiency. It fulfills the visa requirement for spouse reunification in Germany (Ehegattennachzug), working holiday visas, and au pair placements across the DACH region!"
    },
    "practice": [
      {
        "question": "What is the minimum passing score for the Goethe-Zertifikat A1?",
        "options": [
          "50% (50 points)",
          "60% (60 points)",
          "75% (75 points)"
        ],
        "answer": "60% (60 points)",
        "explanation": "You need at least 60% (60 out of 100 points) to pass the official exam."
      },
      {
        "question": "In the A1 speaking test (Teil 1), what additional task will the examiner ask after you introduce yourself?",
        "options": [
          "Sing a song in German",
          "Spell a word/name and dictate a number",
          "Translate an English text"
        ],
        "answer": "Spell a word/name and dictate a number",
        "explanation": "The examiner always asks candidates to spell a name or word (Buchstabieren) and recite a number (phone number or postal code)."
      }
    ]
  }
};
