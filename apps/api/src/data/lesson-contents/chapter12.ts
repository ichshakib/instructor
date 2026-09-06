import { LessonContent } from "../../types/course.types";

export const CHAPTER_12_LESSONS: Record<string, LessonContent> = {
  "a1-ch12-l52": {
    overview:
      "Vacations (Urlaub und Reisen) are a favorite topic of conversation across German-speaking countries. In this lesson inspired by Netzwerk A1 Kapitel 12 ('Ab in den Urlaub!'), you will learn to talk about holiday destinations (sea, mountains, cities), modes of travel, and booking train and plane journeys.",
    canDo:
      "Can discuss vacation destinations using accurate prepositions ('an die Ostsee', 'in die Berge', 'nach Wien'), describe transport choices, and buy tickets.",
    teacherNote:
      "German travel prepositions depend on the destination: For cities and countries without articles, use 'nach' ('nach Berlin', 'nach Deutschland'). For bodies of water, use 'an' + Akkusativ ('ans Meer', 'an die Nordsee'). For mountain ranges, use 'in' + Akkusativ ('in die Berge', 'in die Alpen')!",
    sections: [
      {
        title: "1. Wohin fährst du in den Urlaub? (Travel Destinations)",
        description: "Prepositions for direction of travel (Wohin? + Akkusativ):",
        table: {
          headers: [
            "Ziel (Destination)",
            "Präpositionalphrase",
            "Bedeutung",
            "Beispielsatz",
          ],
          rows: [
            [
              "Länder & Städte (ohne Artikel)",
              "nach + Stadt / Land",
              "to [city/country]",
              "Wir fahren im Sommer nach Österreich.",
            ],
            [
              "Gewässer (Meer / See / Küste)",
              "ans Meer / an den See / an die Ostsee",
              "to the sea / to the lake / to the Baltic",
              "Familie Müller fährt ans Meer.",
            ],
            [
              "Gebirge (Berge / Alpen)",
              "in die Berge / in die Alpen / in den Wald",
              "to the mountains / Alps / forest",
              "Wir wandern gern in den Bergen.",
            ],
            [
              "Länder mit femininem Artikel",
              "in die Schweiz / in die Türkei",
              "to Switzerland / to Turkey",
              "Fliegst du dieses Jahr in die Schweiz?",
            ],
            [
              "Zu Hause bleiben",
              "zu Hause (Ort) / nach Hause (Richtung)",
              "at home / (heading) home",
              "Ich bleibe dieses Jahr zu Hause.",
            ],
          ],
        },
      },
      {
        title: "2. Verkehrsmittel & Fahrkarten (Transportation & Tickets)",
        description: "How to travel and buy train tickets:",
        items: [
          {
            term: "mit dem Zug / mit der Bahn (mit + Dativ)",
            meaning: "by train / by railway",
            example: "Ich fahre am liebsten mit dem ICE-Zug.",
          },
          {
            term: "mit dem Flugzeug / mit dem Auto",
            meaning: "by plane / by car",
            example: "Sie reisen mit dem Flugzeug nach Mallorca.",
          },
          {
            term: "die einfache Fahrt / hin und zurück",
            meaning: "one-way / round trip (return ticket)",
            example: "Einmal Berlin hin und zurück, bitte.",
          },
          {
            term: "das Gleis (-e) / der Bahnsteig",
            meaning: "track / platform",
            example: "Der Zug nach München fährt von Gleis 7 ab.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Reiseplanung am Schalter der Deutschen Bahn (Netzwerk A1):",
      lines: [
        {
          speaker: "Bahnbeamter",
          german: "Guten Tag! Wie kann ich Ihnen helfen?",
          english: "Good day! How can I help you?",
        },
        {
          speaker: "Reisender",
          german: "Guten Tag! Ich möchte eine Fahrkarte nach Salzburg für kommenden Freitag.",
          english: "Good day! I would like a train ticket to Salzburg for next Friday.",
        },
        {
          speaker: "Bahnbeamter",
          german: "Einfache Fahrt oder hin und zurück?",
          english: "One-way or round trip?",
        },
        {
          speaker: "Reisender",
          german: "Hin und zurück bitte. Ich fahre am Sonntagabend zurück.",
          english: "Round trip please. I will return on Sunday evening.",
        },
        {
          speaker: "Bahnbeamter",
          german: "Möchten Sie eine Sitzplatzreservierung im Großraumwagen oder im Abteil?",
          english: "Would you like a seat reservation in the open coach or in a compartment?",
        },
        {
          speaker: "Reisender",
          german: "Im Großraumwagen am Fenster, bitte. Haben Sie eine Direktverbindung?",
          english: "In the open coach by the window, please. Do you have a direct connection?",
        },
        {
          speaker: "Bahnbeamter",
          german: "Ja, der ICE um 09:18 Uhr fährt ohne Umsteigen durch. Das macht 89 Euro.",
          english: "Yes, the ICE at 9:18 AM travels straight through without transfers. That comes to 89 euros.",
        },
      ],
    },
    funFact: {
      title: "Germany's Iconic 'Wanderlust'",
      content:
        "Did you know that the English word 'wanderlust' is taken directly from German? Germans are statistically among the world's most avid travelers (der Reiseweltmeister). Hiking through the Alps or vacationing on the beaches of the Baltic Sea (die Ostsee) is a cherished national tradition.",
    },
    practice: [
      {
        question: "Which preposition correctly completes: 'Im August fliegen wir ___ die Schweiz'?",
        options: ["nach", "in", "an", "zu"],
        answer: "in",
        explanation:
          "'die Schweiz' has a feminine article, so direction of travel uses 'in die Schweiz' ('nach' is only for countries without an article).",
      },
      {
        question: "How do you ask for a round-trip train ticket at a German ticket counter?",
        options: [
          "Eine einfache Fahrt, bitte.",
          "Hin und zurück, bitte.",
          "Nur hin, bitte.",
          "Ein Gleis, bitte.",
        ],
        answer: "Hin und zurück, bitte.",
        explanation:
          "'hin und zurück' means round-trip / return ticket.",
      },
      {
        question: "What is the German term for the train track/platform number?",
        options: ["die Tür", "das Gleis", "der Fahrstuhl", "der Koffer"],
        answer: "das Gleis",
        explanation:
          "'das Gleis' (plural: die Gleise) is the train track indicated on ticket timetables and station announcements (e.g. 'Gleis 4').",
      },
    ],
  },

  "a1-ch12-l53": {
    overview:
      "Describing the weather (Das Wetter) and writing cheerful holiday postcards or short vacation messages to friends are classic A1 communication tasks. In this lesson, you will master weather terminology, temperatures, and the standard format for writing a handwritten vacation postcard.",
    canDo:
      "Can understand and describe weather conditions (rain, sun, snow, wind, clouds), state the temperature, and write a standard German holiday postcard.",
    teacherNote:
      "Notice how German weather uses the impersonal subject 'es' (it): 'Es regnet' (It rains), 'Es schneit' (It snows), 'Es ist sonnig' (It is sunny), 'Es ist kalt/warm' (It is cold/warm). When stating how you personally feel temperature, use the dative: 'Mir ist kalt' (I am cold), NOT 'Ich bin kalt'!",
    sections: [
      {
        title: "1. Das Wetter & Die Temperaturen (Weather & Temperatures)",
        description: "Everyday weather phrases across the seasons:",
        table: {
          headers: [
            "Deutscher Ausdruck",
            "Wortart",
            "Englische Bedeutung",
            "Beispiel",
          ],
          rows: [
            [
              "Es ist sonnig.",
              "Adjektiv",
              "It is sunny.",
              "Heute ist es den ganzen Tag sonnig.",
            ],
            [
              "Es regnet.",
              "Verb (regnen)",
              "It is raining.",
              "Nimm einen Schirm mit, es regnet!",
            ],
            [
              "Es schneit.",
              "Verb (schneien)",
              "It is snowing.",
              "In den Bergen schneit es seit gestern.",
            ],
            [
              "Es ist bewölkt / wolkig.",
              "Adjektiv",
              "It is cloudy / overcast.",
              "Der Himmel ist komplett bewölkt.",
            ],
            [
              "Es ist windig / stürmisch.",
              "Adjektiv",
              "It is windy / stormy.",
              "An der Nordsee ist es oft sehr windig.",
            ],
            [
              "Es ist warm / heiß.",
              "Adjektiv",
              "It is warm / hot.",
              "Im Sommer ist es hier bis zu 32 Grad heiß.",
            ],
            [
              "Es ist kühl / kalt.",
              "Adjektiv",
              "It is chilly / cold.",
              "Zieh eine Jacke an, es ist kühl draußen.",
            ],
          ],
        },
      },
      {
        title: "2. Eine Urlaubspostkarte schreiben (Writing a Postcard)",
        description: "The 4-part structure of a German holiday greeting:",
        items: [
          {
            term: "1. Anrede (Greeting)",
            meaning: "Liebe Anna, / Lieber Lukas, (Dear...)",
            example: "Liebe Familie Schmidt,",
          },
          {
            term: "2. Ort & Wetter (Location & Weather)",
            meaning: "State where you are and how the weather is",
            example: "Viele Grüße aus Wien! Das Wetter ist traumhaft und die Sonne scheint.",
          },
          {
            term: "3. Aktivitäten (Activities)",
            meaning: "What you have done or are doing",
            example: "Wir haben das Schloss Schönbrunn besucht und köstliche Sachertorte gegessen.",
          },
          {
            term: "4. Grußformel (Sign-off)",
            meaning: "Herzliche Grüße / Bis bald, dein(e)...",
            example: "Herzliche Grüße und bis nächste Woche, deine Sandra",
          },
        ],
      },
    ],
    dialogue: {
      context: "Wetterbericht und Postkarte aus den österreichischen Alpen:",
      lines: [
        {
          speaker: "Postkarte Text",
          german: "Lieber David,",
          english: "Dear David,",
        },
        {
          speaker: "Postkarte Text",
          german: "viele sonnige Grüße aus Tirol! Das Wetter hier in den Bergen ist fantastisch. Es ist warm, der Himmel ist blau und wir haben gestern eine fünfstündige Bergtour gemacht.",
          english: "warm sunny greetings from Tyrol! The weather here in the mountains is fantastic. It is warm, the sky is blue and yesterday we did a five-hour alpine hike.",
        },
        {
          speaker: "Postkarte Text",
          german: "Das Essen auf der Almhütte war köstlich. Morgen fahren wir an den Achensee zum Schwimmen.",
          english: "The food at the alpine hut was delicious. Tomorrow we are driving to Lake Achen for swimming.",
        },
        {
          speaker: "Postkarte Text",
          german: "Wie ist das Wetter in Hamburg? Ich hoffe, dir geht es gut. Bis bald!",
          english: "How is the weather in Hamburg? I hope you are doing well. See you soon!",
        },
        {
          speaker: "Postkarte Text",
          german: "Herzliche Grüße, dein Philipp",
          english: "Warm regards, your Philipp",
        },
      ],
    },
    funFact: {
      title: "'Kaiserwetter' (Emperor's Weather)",
      content:
        "In Austria and Southern Germany, a cloudless, sparkling sunny day is called 'Kaiserwetter' (Emperor's weather). The phrase originates from Austrian Emperor Franz Joseph I (1830–1916), because on his birthdays and public appearances, the sun famously shone brightly without a single cloud!",
    },
    practice: [
      {
        question: "How do you tell someone 'I am cold' in correct natural German?",
        options: [
          "Ich bin kalt.",
          "Mir ist kalt.",
          "Ich habe kalt.",
          "Mich ist Kälte.",
        ],
        answer: "Mir ist kalt.",
        explanation:
          "'Mir ist kalt' (Dative 'mir') is the correct expression for feeling cold. 'Ich bin kalt' means you are cold-hearted or physically cold to the touch like a statue.",
      },
      {
        question: "Which German word means 'It is raining'?",
        options: [
          "Es schneit.",
          "Es regnet.",
          "Es scheint.",
          "Es weht.",
        ],
        answer: "Es regnet.",
        explanation:
          "'Es regnet' (from the verb regnen) means 'It is raining'.",
      },
      {
        question: "What is the standard informal salutation when writing a postcard to a female friend named Maria?",
        options: [
          "Lieber Maria,",
          "Liebe Maria,",
          "Sehr geehrte Maria,",
          "Guten Tag Maria!",
        ],
        answer: "Liebe Maria,",
        explanation:
          "'Liebe [Name]' is the feminine informal salutation ('Lieber [Name]' is used for males).",
      },
    ],
  },

  "a1-ch12-l54": {
    overview:
      "Arriving at a hotel, checking in at the front desk (die Rezeption), requesting amenities, and politely reporting problems in your room ('Die Heizung geht nicht', 'Es gibt kein warmes Wasser') are essential practical skills covered in Netzwerk A1 Kapitel 12.",
    canDo:
      "Can check in at a hotel, confirm room features and breakfast times, report maintenance issues or room problems politely, and ask for assistance.",
    teacherNote:
      "When complaining politely in German, use the modal construction 'funktioniert nicht' (doesn't work) or 'geht nicht': 'Die Klimaanlage funktioniert leider nicht' (Unfortunately the air conditioning doesn't work). Add 'leider' (unfortunately) to soften complaints and keep conversations pleasant.",
    sections: [
      {
        title: "1. An der Rezeption: Einchecken & Auschecken (Hotel Front Desk)",
        description: "Standard interactions upon arriving at accommodation:",
        table: {
          headers: [
            "Deutscher Begriff",
            "Bedeutung",
            "Typischer Beispielsatz",
          ],
          rows: [
            [
              "die Rezeption / der Empfang",
              "front desk / reception",
              "Guten Tag! Ich habe eine Reservierung auf den Namen Weber.",
            ],
            [
              "das Einzelzimmer (EZ)",
              "single room (one guest)",
              "Ein Einzelzimmer mit Dusche und WC.",
            ],
            [
              "das Doppelzimmer (DZ)",
              "double room (two guests)",
              "Wir haben ein Doppelzimmer mit Doppelbett gebucht.",
            ],
            [
              "das Frühstücksbuffet",
              "breakfast buffet",
              "Frühstück gibt es von 7:00 bis 10:30 Uhr im Erdgeschoss.",
            ],
            [
              "der Zimmerschlüssel / die Schlüsselkarte",
              "room key / keycard",
              "Hier ist Ihre Schlüsselkarte für Zimmer 304.",
            ],
            [
              "das WLAN-Passwort",
              "Wi-Fi password",
              "Das WLAN-Passwort steht auf der Schlüsselkarte.",
            ],
          ],
        },
      },
      {
        title: "2. Reklamationen & Probleme im Hotel (Hotel Room Issues)",
        description: "How to report issues politely to hotel staff:",
        table: {
          headers: [
            "Problem",
            "Deutscher Ausdruck",
            "Englische Bedeutung",
            "Antwort der Rezeption",
          ],
          rows: [
            [
              "Heizung",
              "Die Heizung funktioniert leider nicht.",
              "The heating unfortunately doesn't work.",
              "Wir schicken sofort den Hausmeister.",
            ],
            [
              "Warmwasser",
              "Es gibt kein warmes Wasser in der Dusche.",
              "There is no hot water in the shower.",
              "Oh, Entschuldigung! Wir prüfen das gleich.",
            ],
            [
              "Handtücher",
              "Es fehlen Handtücher im Badezimmer.",
              "Towels are missing in the bathroom.",
              "Der Zimmerservice bringt Ihnen sofort frische Handtücher.",
            ],
            [
              "Lärm",
              "Das Zimmer zur Straße ist sehr laut.",
              "The street-facing room is very noisy.",
              "Können wir Ihnen ein ruhiges Zimmer zum Hof geben?",
            ],
          ],
        },
      },
    ],
    dialogue: {
      context: "Problemlösung an der Rezeption des Hotels 'Stadt München' (Netzwerk A1):",
      lines: [
        {
          speaker: "Gast",
          german: "Guten Abend! Entschuldigen Sie bitte die Störung.",
          english: "Good evening! Please excuse the disturbance.",
        },
        {
          speaker: "Rezeptionistin",
          german: "Guten Abend! Was kann ich für Sie tun, Herr Meier?",
          english: "Good evening! What can I do for you, Mr. Meier?",
        },
        {
          speaker: "Gast",
          german: "Ich bin in Zimmer 214. Die Fernbedienung vom Fernseher geht nicht und die Heizung bleibt kalt.",
          english: "I'm in room 214. The TV remote doesn't work and the heating remains cold.",
        },
        {
          speaker: "Rezeptionistin",
          german: "Das tut mir sehr leid! Hier sind sofort neue Batterien für die Fernbedienung. Und wegen der Heizung rufe ich gleich unseren Haustechniker.",
          english: "I'm very sorry about that! Here are fresh batteries right away for the remote. And regarding the heating, I'll call our maintenance technician immediately.",
        },
        {
          speaker: "Gast",
          german: "Vielen Dank! Wie lange wird das ungefähr dauern?",
          english: "Thank you very much! Approximately how long will that take?",
        },
        {
          speaker: "Rezeptionistin",
          german: "In etwa zehn Minuten klopft er bei Ihnen. Falls es nicht klappt, geben wir Ihnen selbstverständlich ein anderes Zimmer.",
          english: "He'll knock at your door in about ten minutes. If it cannot be resolved, we will of course give you another room.",
        },
      ],
    },
    funFact: {
      title: "German 'Kurtaxe' (Tourist Tax)",
      content:
        "When staying in German spa towns ('Kurorte', like Baden-Baden) or resort destinations, your hotel bill will usually include a small daily fee called 'die Kurtaxe' (€ 1.50 to € 3.50). This tax funds the maintenance of local parks, beach promenades, and clean trails!",
    },
    practice: [
      {
        question: "How do you politely tell the receptionist that the shower in your room is not working?",
        options: [
          "Die Dusche ist sehr schön.",
          "Die Dusche funktioniert leider nicht.",
          "Ich brauche keine Dusche.",
          "Wo ist die Dusche?",
        ],
        answer: "Die Dusche funktioniert leider nicht.",
        explanation:
          "'... funktioniert leider nicht' (unfortunately doesn't work) is the standard polite phrase to report a technical defect.",
      },
      {
        question: "What is the German abbreviation for a double room in hotel listings?",
        options: ["EZ", "DZ", "WZ", "KZ"],
        answer: "DZ",
        explanation:
          "'DZ' stands for 'das Doppelzimmer' (double room). 'EZ' stands for 'das Einzelzimmer' (single room).",
      },
      {
        question: "What does 'Es gibt kein warmes Wasser' mean?",
        options: [
          "There is no cold water.",
          "There is no hot water.",
          "The water is very delicious.",
          "Water is included in the price.",
        ],
        answer: "There is no hot water.",
        explanation:
          "'Es gibt kein warmes Wasser' means 'There is no hot/warm water'.",
      },
    ],
  },

  "a1-ch12-l55": {
    overview:
      "Congratulations on reaching the final lesson of German A1! In this comprehensive capstone lesson, you will review the complete architecture of the international Goethe-Zertifikat A1 ('Start Deutsch 1') and telc Deutsch A1 exams, master strategies for all four modules (Hören, Lesen, Schreiben, Sprechen), and celebrate your breakthrough into German proficiency.",
    canDo:
      "Can demonstrate full CEFR A1 proficiency across listening, reading, writing, and speaking, introduce yourself fluently, formulate requests with picture cards, and pass the Goethe / TELC A1 exam.",
    teacherNote:
      "The Goethe-Zertifikat A1 exam has a maximum of 100 points (25 points for each of the 4 parts: Hören, Lesen, Schreiben, Sprechen). You only need 60 points (60%) to pass! Stay calm, speak clearly, remember Verb Position 2, and use polite phrases like 'Bitte' and 'Entschuldigung'. You are ready!",
    sections: [
      {
        title: "1. Das Prüfungsformat: Goethe-Zertifikat A1 (Start Deutsch 1)",
        description: "The 4 test modules and their point breakdown:",
        table: {
          headers: [
            "Modul (Section)",
            "Dauer",
            "Aufgaben & Format",
            "Max. Punkte",
          ],
          rows: [
            [
              "1. Hören (Listening)",
              "ca. 20 Minuten",
              "Teil 1: Kurze Alltagsdialoge; Teil 2: Ansagen am Bahnhof/Kaufhaus; Teil 3: Telefonansagen",
              "25 Punkte",
            ],
            [
              "2. Lesen (Reading)",
              "ca. 25 Minuten",
              "Teil 1: Kurze E-Mails/Briefe; Teil 2: Anzeigen & Websites vergleichen; Teil 3: Schilder & Hinweise",
              "25 Punkte",
            ],
            [
              "3. Schreiben (Writing)",
              "ca. 20 Minuten",
              "Teil 1: Ein Formular mit 5 Feldern ausfüllen; Teil 2: Eine kurze E-Mail schreiben (ca. 30 Wörter)",
              "25 Punkte",
            ],
            [
              "4. Sprechen (Speaking)",
              "ca. 15 Minuten",
              "Teil 1: Sich vorstellen & buchstabieren; Teil 2: Fragen mit Wortkarten; Teil 3: Bitten mit Bildkarten",
              "25 Punkte",
            ],
          ],
        },
      },
      {
        title: "2. Sprechen Teil 1: Die perfekte Selbstvorstellung",
        description: "The 7 required prompt items for the speaking self-presentation:",
        table: {
          headers: [
            "Stichwort (Prompt)",
            "Musterantwort auf Deutsch",
            "Englische Übersetzung",
          ],
          rows: [
            [
              "Name",
              "Mein Name ist Marco Rossi. / Ich heiße Marco.",
              "My name is Marco Rossi.",
            ],
            [
              "Alter",
              "Ich bin 28 Jahre alt.",
              "I am 28 years old.",
            ],
            [
              "Land (Herkunft)",
              "Ich komme aus Italien.",
              "I come from Italy.",
            ],
            [
              "Wohnort",
              "Ich wohne jetzt in Frankfurt am Main.",
              "I live in Frankfurt now.",
            ],
            [
              "Sprachen",
              "Ich spreche Italienisch, Englisch und ein bisschen Deutsch.",
              "I speak Italian, English, and a little German.",
            ],
            [
              "Beruf",
              "Von Beruf bin ich Software-Entwickler.",
              "By profession I am a software developer.",
            ],
            [
              "Hobby",
              "Meine Hobbys sind Fußball spielen und Musik hören.",
              "My hobbies are playing football and listening to music.",
            ],
          ],
        },
        notes: [
          "Be prepared for the examiner's follow-up questions: 'Können Sie bitte Ihren Nachnamen buchstabieren?' (Can you spell your last name?) and 'Wie ist Ihre Telefonnummer / Postleitzahl?' (What is your phone number / postal code?).",
        ],
      },
    ],
    dialogue: {
      context: "Simulation: Goethe-Zertifikat A1 Mündliche Prüfung (Sprechen Teil 1 & 3):",
      lines: [
        {
          speaker: "Prüferin",
          german: "Guten Tag! Herzlich willkommen zur Prüfung Start Deutsch 1. Bitte stellen Sie sich kurz vor.",
          english: "Good day! Welcome to the Start Deutsch 1 exam. Please introduce yourself briefly.",
        },
        {
          speaker: "Kandidat",
          german: "Guten Tag! Mein Name ist Elena Ramos. Ich bin 26 Jahre alt und komme aus Spanien. Ich wohne in Berlin und arbeite als Grafikdesignerin. Meine Hobbys sind Kochen und Fotografieren.",
          english: "Good day! My name is Elena Ramos. I am 26 years old and come from Spain. I live in Berlin and work as a graphic designer. My hobbies are cooking and photography.",
        },
        {
          speaker: "Prüferin",
          german: "Sehr schön, danke Frau Ramos. Können Sie bitte Ihren Familiennamen buchstabieren?",
          english: "Very nice, thank you Ms. Ramos. Could you please spell your family name?",
        },
        {
          speaker: "Kandidat",
          german: "Ja, gern: R - A - M - O - S.",
          english: "Yes, gladly: R - A - M - O - S.",
        },
        {
          speaker: "Prüferin",
          german: "Vielen Dank. Nun zu Teil 3: Hier ist eine Bildkarte mit einem Glas Wasser. Formulieren Sie bitte eine Bitte an Ihren Partner.",
          english: "Thank you very much. Now to Part 3: Here is a picture card showing a glass of water. Please formulate a request to your partner.",
        },
        {
          speaker: "Kandidat",
          german: "Könnten Sie mir bitte ein Glas Wasser bringen? Ich habe großen Durst.",
          english: "Could you please bring me a glass of water? I am very thirsty.",
        },
        {
          speaker: "Partner",
          german: "Ja natürlich, sehr gern! Hier bitte schön.",
          english: "Yes of course, gladly! Here you are.",
        },
      ],
    },
    funFact: {
      title: "Herzlichen Glückwunsch! (Congratulations!)",
      content:
        "Reaching the end of CEFR A1 is a tremendous milestone! You can now understand and use familiar everyday expressions, introduce yourself and others, ask and answer personal questions, order food, navigate cities, talk about past experiences in Das Perfekt, and interact with native speakers when they speak slowly and clearly. You are officially ready for German A2!",
    },
    practice: [
      {
        question: "What minimum overall percentage is required to pass the Goethe-Zertifikat A1 exam?",
        options: ["50%", "60%", "75%", "85%"],
        answer: "60%",
        explanation:
          "To pass the Goethe Start Deutsch 1 exam, you need at least 60 points out of 100 (60%).",
      },
      {
        question: "In the Speaking exam (Sprechen Teil 1), what two questions do examiners almost always ask after your self-introduction?",
        options: [
          "Spelling your name and reciting your phone number or postal code",
          "Translating a novel and singing a German song",
          "Explaining the German tax system and political history",
          "Solving a math equation and drawing a map",
        ],
        answer: "Spelling your name and reciting your phone number or postal code",
        explanation:
          "Examiners routinely ask candidates to spell their last name ('Buchstabieren Sie bitte...') and state numbers like their phone number or postal code.",
      },
      {
        question: "How do you politely formulate a request when shown a picture of a pen in Sprechen Teil 3?",
        options: [
          "Das ist ein Stift.",
          "Geben Sie mir bitte den Stift!",
          "Stift ist blau.",
          "Ich mag keinen Stift.",
        ],
        answer: "Geben Sie mir bitte den Stift!",
        explanation:
          "Part 3 tests formulating polite requests using imperatives with 'bitte' or polite modal phrasing ('Könnten Sie mir bitte den Stift geben?').",
      },
    ],
  },
};
