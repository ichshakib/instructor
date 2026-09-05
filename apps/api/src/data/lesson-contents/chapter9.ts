import { LessonContent } from "../../types/course.types";

export const CHAPTER_9_LESSONS: Record<string, LessonContent> = {
  "a1-ch9-l39": {
    overview:
      "Shopping at a German supermarket or weekly market (Wochenmarkt) is a rich sensory and linguistic experience. You will learn food vocabulary, units of weight and volume, asking for prices, and navigating the German cash register.",
    canDo:
      "Can ask for food items, specify quantities (Kilo, Gramm, Flasche, Stück), ask prices ('Was kostet...?'), and handle supermarket checkout interactions.",
    teacherNote:
      "German cashiers are famously fast! Be prepared to pack your own bags rapidly at the register, as German supermarkets do not have baggers and bag charges apply if you don't bring your own reusable bag (*Stoffbeutel*).",
    sections: [
      {
        title: "1. Food & Groceries (Lebensmittel)",
        description: "Master the most common food items by category:",
        table: {
          headers: ["Category", "German Item (with article)", "Plural Form", "English Meaning"],
          rows: [
            ["Bakery", "das Brot / das Brötchen", "die Brote / die Brötchen", "bread / bread roll"],
            ["Produce", "der Apfel / die Banane", "die Äpfel / die Bananen", "apple / banana"],
            ["Vegetables", "die Tomate / die Kartoffel", "die Tomaten / die Kartoffeln", "tomato / potato"],
            ["Dairy", "die Milch / der Käse / die Butter", "— / die Käsesorten / —", "milk / cheese / butter"],
            ["Meat", "das Fleisch / das Hähnchen", "—", "meat / chicken"],
            ["Beverages", "das Wasser / der Orangensaft", "die Wasser / die Säfte", "water / orange juice"],
          ],
        },
      },
      {
        title: "2. Quantities & Asking Prices",
        description: "Formulas for purchasing by weight or piece:",
        items: [
          {
            term: "ein Kilo (1 kg) / ein halbes Kilo (500g)",
            meaning: "Ich hätte gern ein Kilo Äpfel, bitte.",
            example: "Hundert Gramm Käse, bitte.",
          },
          {
            term: "eine Flasche / eine Packung / ein Stück",
            meaning: "a bottle of / a pack of / a piece of",
            example: "Eine Flasche Mineralwasser / ein Stück Kuchen.",
          },
          {
            term: "Was kostet...? / Wie viel kostet...?",
            meaning: "How much does X cost?",
            example: "Was kostet ein Kilo Tomaten? -> Das kostet zwei Euro fünfzig.",
          },
        ],
      },
    ],
    dialogue: {
      context: "At a weekly farmer's market in Freiburg buying fresh fruit and cheese:",
      lines: [
        {
          speaker: "Marktfrau",
          german: "Guten Tag! Was darf es sein?",
          english: "Good day! What can I get for you?",
        },
        {
          speaker: "Kunde",
          german: "Guten Tag. Ich hätte gern ein Kilo Äpfel und zweihundert Gramm von dem Bergkäse.",
          english: "Good day. I would like a kilo of apples and 200 grams of the mountain cheese.",
        },
        {
          speaker: "Marktfrau",
          german: "Gerne. Sonst noch etwas?",
          english: "With pleasure. Anything else?",
        },
        {
          speaker: "Kunde",
          german: "Nein danke, das ist alles. Wie viel macht das zusammen?",
          english: "No thank you, that is all. How much does that come to altogether?",
        },
        {
          speaker: "Marktfrau",
          german: "Das macht genau sechs Euro zwanzig, bitte.",
          english: "That comes to exactly six euros twenty, please.",
        },
      ],
    },
    funFact: {
      title: "The Legendary German Pfandsystem (Bottle Deposit)",
      content:
        "Never throw plastic bottles or cans into the trash in Germany! Almost all beverage containers carry a deposit (**Pfand**) between €0.08 and €0.25. When you finish your drink, take the empty bottles back to the automated reverse vending machine (*Pfandautomat*) inside any supermarket to collect your cash voucher!",
    },
    practice: [
      {
        question: "How do you ask 'How much do the bananas cost?'",
        options: ["Wie viel sind die Bananen?", "Was kosten die Bananen?", "Wo kosten die Bananen?"],
        answer: "Was kosten die Bananen?",
        explanation: "'Was kosten [Plural]?' or 'Wie viel kostet [Singular]?' are the standard price inquiries.",
      },
    ],
  },

  "a1-ch9-l40": {
    overview:
      "Dining out in a German restaurant, Biergarten, or traditional Gasthaus is an authentic cultural ritual. In this lesson, you will master polite ordering formulas, asking for recommendations, and the famous payment question.",
    canDo:
      "Can reserve a table, order meals and beverages politely, ask for the bill, and understand the waiter's question: 'Zusammen oder getrennt?'.",
    teacherNote:
      "When ordering in a restaurant, native speakers rarely use 'Ich will'. Instead, use the ultra-polite subjunctive formula: **'Ich hätte gern...'** (I would like to have...) or **'Ich möchte bitte...'**.",
    sections: [
      {
        title: "1. Core Phrases for Dining Out",
        description: "Navigate the restaurant experience from start to finish:",
        table: {
          headers: ["Phase", "German Phrase", "English Meaning", "When to Use"],
          rows: [
            ["Arrival", "Einen Tisch für zwei Personen, bitte.", "A table for two people, please.", "Entering the restaurant"],
            ["Menu", "Die Speisekarte, bitte!", "The menu, please!", "At the table"],
            ["Ordering", "Ich hätte gern das Schnitzel mit Pommes.", "I'd like the schnitzel with fries.", "Speaking to the waiter"],
            ["Beverage", "Für mich ein stilles Wasser, bitte.", "For me a still water, please.", "Drink orders"],
            ["Toast", "Prost! / Zum Wohl!", "Cheers! / To your health!", "Clinking glasses (make eye contact!)"],
            ["Compliment", "Es schmeckt sehr lecker!", "It tastes very delicious!", "During the meal"],
            ["Bill", "Wir möchten bitte zahlen.", "We would like to pay, please.", "At the end"],
          ],
        },
      },
      {
        title: "2. The Magic Payment Question: 'Zusammen oder getrennt?'",
        description:
          "In German restaurants, servers expect table parties to split the bill individually:",
        items: [
          {
            term: "Zusammen (Together)",
            meaning: "One person pays for the entire table",
            example: "Zusammen, bitte. Das macht fünfzig Euro.",
          },
          {
            term: "Getrennt (Separately)",
            meaning: "Each guest pays only for what they ordered down to the cent!",
            example: "Getrennt, bitte. Ich hatte das Schnitzel und ein Bier.",
          },
          {
            term: "Stimmt so! (Keep the change)",
            meaning: "Standard tipping phrase when handing cash to the server",
            example: "Das macht 18 Euro. -> 'Hier sind 20, stimmt so!'",
          },
        ],
      },
    ],
    dialogue: {
      context: "Paying the bill at a traditional Brauhaus in Cologne:",
      lines: [
        {
          speaker: "Gast",
          german: "Entschuldigung, wir möchten bitte zahlen!",
          english: "Excuse me, we would like to pay, please!",
        },
        {
          speaker: "Kellner",
          german: "Sehr gerne! Zusammen oder getrennt?",
          english: "Very gladly! Together or separately?",
        },
        {
          speaker: "Gast 1",
          german: "Getrennt, bitte. Ich hatte den Salat und eine Apfelschorle.",
          english: "Separately, please. I had the salad and an apple spritzer.",
        },
        {
          speaker: "Kellner",
          german: "Das macht elf Euro fünfzig.",
          english: "That comes to eleven euros fifty.",
        },
        {
          speaker: "Gast 1",
          german: "Hier sind dreizehn Euro, stimmt so!",
          english: "Here is thirteen euros, keep the change (stimmt so)!",
        },
      ],
    },
    funFact: {
      title: "UNESCO Intangible Cultural Heritage: German Bread Culture",
      content:
        "Germany has over 3,000 officially registered specialty breads, recognized by UNESCO! A traditional German evening meal is known as **'Abendbrot'** (literally: evening bread), where families gather around a cutting board of hearty dark sourdough bread, butter, cold meats, cheeses, and pickles rather than cooking a warm dinner.",
    },
    practice: [
      {
        question: "What does 'Stimmt so!' mean when paying in a German restaurant?",
        options: ["Is that correct?", "Keep the change (tip included).", "Please bring the receipt."],
        answer: "Keep the change (tip included).",
        explanation: "'Stimmt so!' is the idiomatic way to tell the server to keep the difference as a tip.",
      },
    ],
  },

  "a1-ch9-l41": {
    overview:
      "Discussing the weather, seasons, and clothing choices is the universal small-talk skill. In this lesson, you will learn weather expressions using the dummy subject 'es' (es regnet, es schneit) and key clothing items.",
    canDo:
      "Can describe the day's weather, name essential clothing items and colors, and express personal physical comfort ('Mir ist kalt / warm').",
    teacherNote:
      "⚠️ A famous cultural false friend: In German, NEVER say 'Ich bin heiß' or 'Ich bin kalt'—that has sexual connotations! Always use the Dative phrase: **'Mir ist warm'** (I feel warm) or **'Mir ist kalt'** (I feel cold)!",
    sections: [
      {
        title: "1. Weather Expressions with 'Es'",
        description: "German uses the impersonal pronoun 'es' for atmospheric conditions:",
        table: {
          headers: ["German Weather Phrase", "Literal Meaning", "English Meaning", "Icon / Context"],
          rows: [
            ["Die Sonne scheint.", "The sun shines.", "It is sunny.", "☀️ Sunny"],
            ["Es regnet.", "It rains.", "It is raining.", "🌧️ Rain"],
            ["Es schneit.", "It snows.", "It is snowing.", "❄️ Snow"],
            ["Es ist windig.", "It is windy.", "It is windy.", "💨 Wind"],
            ["Es ist bewölkt.", "It is clouded.", "It is cloudy / overcast.", "☁️ Clouds"],
            ["Es ist warm / kalt.", "It is warm / cold.", "The temperature is warm / cold.", "🌡️ Temperature"],
            ["Wie ist das Wetter heute?", "How is the weather today?", "What is the weather like today?", "Question"],
          ],
        },
      },
      {
        title: "2. Clothes & Colors (Kleidung und Farben)",
        description: "Master everyday garments and color descriptions:",
        items: [
          {
            term: "die Jacke / der Mantel / der Pullover",
            meaning: "jacket (f) / coat (m) / sweater (m)",
            example: "Ich ziehe eine warme Jacke an.",
          },
          {
            term: "die Hose / das T-Shirt / die Schuhe",
            meaning: "pants/trousers (f) / T-shirt (n) / shoes (pl)",
            example: "Die Schuhe sind schwarz.",
          },
          {
            term: "Farben: rot, blau, grün, gelb, schwarz, weiß, grau",
            meaning: "red, blue, green, yellow, black, white, gray",
            example: "Mein Pullover ist blau.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Checking the morning forecast before going for a walk in Hamburg:",
      lines: [
        {
          speaker: "Jannik",
          german: "Wie ist das Wetter draußen?",
          english: "What is the weather like outside?",
        },
        {
          speaker: "Nele",
          german: "Es ist ziemlich kalt und es regnet ein bisschen.",
          english: "It is quite cold and it is raining a bit.",
        },
        {
          speaker: "Jannik",
          german: "Dann ziehe ich meinen dicken Mantel und feste Schuhe an!",
          english: "Then I'll put on my thick coat and sturdy shoes!",
        },
      ],
    },
    funFact: {
      title: "'Es gibt kein schlechtes Wetter...'",
      content:
        "There is a famous German saying known to every child: *'Es gibt kein schlechtes Wetter, es gibt nur falsche Kleidung!'* (There is no bad weather, only wrong clothing!). Germans love outdoor activities regardless of rain or snow—as long as you have a proper weatherproof jacket (*Regenjacke*)!",
    },
    practice: [
      {
        question: "How do you correctly say 'I am feeling cold' in German?",
        options: ["Ich bin kalt.", "Mir ist kalt.", "Ich habe kalt."],
        answer: "Mir ist kalt.",
        explanation: "Physical sensation takes the Dative personal pronoun: 'Mir ist kalt' (literally: to me it is cold).",
      },
    ],
  },

  "a1-ch9-l42": {
    overview:
      "When you fall ill or need medical care while living or traveling in Germany, knowing how to describe symptoms and book an appointment (Termin) at a clinic is crucial.",
    canDo:
      "Can name core body parts, express aches and pains using 'wehtun' and 'Schmerzen haben', and schedule a doctor's appointment.",
    teacherNote:
      "In Germany, you cannot simply walk into most specialist doctors without a prior scheduled time: you must always make an appointment (**einen Termin vereinbaren**) with the medical receptionist (*Arzthelferin*).",
    sections: [
      {
        title: "1. Core Body Parts (Körperteile)",
        description: "Learn body parts with their articles:",
        table: {
          headers: ["Body Part", "German (with article)", "Plural Form", "English Meaning"],
          rows: [
            ["Head", "der Kopf", "die Köpfe", "head"],
            ["Throat / Neck", "der Hals", "die Hälse", "throat / neck"],
            ["Stomach / Belly", "der Bauch", "die Bäuche", "stomach"],
            ["Back", "der Rücken", "die Rücken", "back"],
            ["Eye", "das Auge", "die Augen", "eye"],
            ["Ear", "das Ohr", "die Ohren", "ear"],
            ["Arm / Leg / Foot", "der Arm / das Bein / der Fuß", "die Arme / Beine / Füße", "arm / leg / foot"],
            ["Hand", "die Hand", "die Hände", "hand"],
          ],
        },
      },
      {
        title: "2. Two Ways to Express Pain",
        description: "Both formulas are natural and common:",
        items: [
          {
            term: "1. [Body Part] + Schmerzen haben",
            meaning: "Ich habe Kopfschmerzen / Halsschmerzen / Bauchschmerzen.",
            example: "Hast du Rückenschmerzen? (Do you have back pain?)",
          },
          {
            term: "2. [Body Part] tut weh (wehtun)",
            meaning: "Mein Kopf tut weh. (My head hurts.) / Meine Augen tun weh (plural).",
            example: "Der Fuß tut mir weh.",
          },
        ],
      },
    ],
    dialogue: {
      context: "Calling a general practitioner's office (Hausarzt) in Munich to schedule an appointment:",
      lines: [
        {
          speaker: "Praxis",
          german: "Praxis Dr. Bergmann, guten Tag!",
          english: "Dr. Bergmann's practice, good day!",
        },
        {
          speaker: "Patient",
          german: "Guten Tag. Ich brauche bitte einen Termin. Ich bin krank.",
          english: "Good day. I need an appointment, please. I am sick.",
        },
        {
          speaker: "Praxis",
          german: "Was fehlt Ihnen denn?",
          english: "What is ailing you? (What are your symptoms?)",
        },
        {
          speaker: "Patient",
          german: "Ich habe seit gestern hohes Fieber und starke Halsschmerzen.",
          english: "Since yesterday I have a high fever and severe sore throat.",
        },
        {
          speaker: "Praxis",
          german: "Kommen Sie heute um elf Uhr vorbei und bringen Sie Ihre Versichertenkarte mit.",
          english: "Come by today at eleven o'clock and bring your health insurance card along.",
        },
      ],
    },
    funFact: {
      title: "The Golden Apotheke Sign",
      content:
        "In Germany, you cannot buy basic pain medications (like aspirin or ibuprofen) at a grocery store or gas station. All medications must be purchased at a licensed **Apotheke** (pharmacy), easily recognized across every German city by a giant red gothic letter 'A' with a bowl of Hygieia!",
    },
    practice: [
      {
        question: "How do you say 'My head hurts' using 'wehtun'?",
        options: ["Mein Kopf tut weh.", "Mein Kopf hat weh.", "Mein Kopf ist weh."],
        answer: "Mein Kopf tut weh.",
        explanation: "The separable verb 'wehtun' conjugates with the body part: 'Mein Kopf tut weh'.",
      },
    ],
  },

  "a1-ch9-l43": {
    overview:
      "Navigating German cities by foot, tram, U-Bahn, and S-Bahn requires asking for directions, understanding landmarks, and buying transit tickets at automated ticket kiosks.",
    canDo:
      "Can ask for and give walking directions (straight ahead, left, right), identify city landmarks, and purchase public transport tickets.",
    teacherNote:
      "Notice how German direction words are crisp: **geradeaus** (straight ahead), **nach links** (to the left), **nach rechts** (to the right). When asking where something is, always start with 'Entschuldigung, wo ist...?'",
    sections: [
      {
        title: "1. Giving & Following Directions",
        description: "Key spatial directions in city navigation:",
        table: {
          headers: ["Direction", "German Phrase", "English Meaning", "Example in Context"],
          rows: [
            ["Straight ahead", "immer geradeaus", "straight ahead", "Gehen Sie immer geradeaus."],
            ["Turn left", "nach links / links abbiegen", "to the left / turn left", "Biegen Sie an der Kreuzung nach links ab."],
            ["Turn right", "nach rechts / rechts abbiegen", "to the right / turn right", "Die Apotheke ist gleich rechts."],
            ["Around the corner", "um die Ecke", "around the corner", "Der Bäcker ist direkt um die Ecke."],
            ["At the traffic light", "an der Ampel", "at the traffic light", "An der Ampel gehen Sie nach rechts."],
          ],
        },
      },
      {
        title: "2. City Landmarks & Public Transit (ÖPNV)",
        description: "Essential locations in every German town:",
        items: [
          {
            term: "der Hauptbahnhof (Hbf)",
            meaning: "Central train station (hub of city transit)",
            example: "Der ICE fährt vom Hauptbahnhof ab.",
          },
          {
            term: "die U-Bahn / die S-Bahn / die Straßenbahn",
            meaning: "Subway (underground) / Suburban commuter rail / Tram",
            example: "Wir nehmen die U2 Richtung Alexanderplatz.",
          },
          {
            term: "eine Fahrkarte / ein Ticket entwerten",
            meaning: "To validate/stamp a ticket in the little stamping box before boarding!",
            example: "Vergessen Sie nicht, das Ticket zu entwerten!",
          },
        ],
      },
    ],
    dialogue: {
      context: "A tourist asking a pedestrian for directions to the museum in Dresden:",
      lines: [
        {
          speaker: "Tourist",
          german: "Entschuldigung, wie komme ich zum Kunstmuseum?",
          english: "Excuse me, how do I get to the art museum?",
        },
        {
          speaker: "Passant",
          german: "Gehen Sie diese Straße geradeaus bis zur Ampel, dann nach links.",
          english: "Go straight ahead down this street until the traffic light, then to the left.",
        },
        {
          speaker: "Tourist",
          german: "Ist es weit von hier?",
          english: "Is it far from here?",
        },
        {
          speaker: "Passant",
          german: "Nein, überhaupt nicht—nur etwa fünf Minuten zu Fuß.",
          english: "No, not at all—only about five minutes on foot.",
        },
      ],
    },
    funFact: {
      title: "No Ticket Turnstiles in Germany: Validate Your Ticket!",
      content:
        "Unlike the London Tube or New York Subway, German train and subway stations do not have physical barrier turnstiles! You can walk straight onto the train platform. However, you MUST buy a ticket and punch it in the little red or yellow stamping machine (**entwerten**) before boarding. Plainclothes inspectors (*Fahrkartenkontrolleure*) conduct random checks, and traveling without a validated ticket carries a hefty €60 fine (*Schwarzfahren*)!",
    },
    practice: [
      {
        question: "What does 'Gehen Sie geradeaus' mean?",
        options: ["Turn left", "Turn right", "Go straight ahead"],
        answer: "Go straight ahead",
        explanation: "'geradeaus' means 'straight ahead'.",
      },
    ],
  },
};
