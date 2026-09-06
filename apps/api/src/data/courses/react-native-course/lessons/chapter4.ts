import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_4_LESSONS: Record<string, LessonContent> = {
  "rn-ch4-l10": {
    overview:
      "Capturing user finger taps requires components equipped with touch responder systems. In this lesson, based on 'Fullstack React Native' Chapter 5, we compare legacy touchables (`TouchableOpacity`, `TouchableHighlight`) with the modern `Pressable` component. We study touch states (pressed state styling functions), configuring hitSlop to expand touchable targets for small icons, and long press gestures.",
    canDo:
      "Can implement accessible touch interactions using Pressable, style pressed states dynamically, and expand tap hitboxes using hitSlop.",
    teacherNote:
      "Always prefer `<Pressable>` over `TouchableOpacity` in modern React Native! `Pressable` provides a functional style prop `style={({ pressed }) => [...]}` that lets you customize pressed opacity, scale, and colors cleanly without hardcoded opacity defaults, and supports hitSlop for thumb friendliness.",
    sections: [
      {
        title: "1. TouchableOpacity vs Pressable",
        description: "Modern touch primitives compared:",
        table: {
          headers: ["Component", "Customizable Feedback", "Hit Slop Support?", "Status"],
          rows: [
            ["TouchableOpacity", "Only fades opacity to 0.2", "Yes", "Legacy (pre-configured opacity only)"],
            ["TouchableHighlight", "Darkens underlay background color", "Yes", "Legacy (requires extra underlay view)"],
            ["Pressable", "Full control: opacity, scale, color changes via ({ pressed }) function", "Yes (with press retention bounds)", "Recommended (Modern Standard)"],
          ],
        },
      },
      {
        title: "2. The hitSlop Target Expansion Pattern",
        description: "Making small icons easy to tap on physical mobile touchscreens:",
        items: [
          {
            term: "hitSlop Prop",
            meaning: "Expands the active touch detection area beyond visual boundaries without altering layout spacing",
            example: "<Pressable\n  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}\n  onPress={handleClose}\n  style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1.0 }]}>\n  <Icon name=\"close\" size={16} />\n</Pressable>",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why should developers use the `hitSlop` prop on small touchable elements (like a 16px close icon)?",
        options: [
          "To make the icon visually larger on screen",
          "To expand the invisible touchable hitbox around the icon so users can easily tap it with a thumb without altering screen layout",
          "To increase font size",
          "To animate the icon on tap",
        ],
        answer: "To expand the invisible touchable hitbox around the icon so users can easily tap it with a thumb without altering screen layout",
        explanation:
          "hitSlop increases the interactive touch coordinates outward in pixels without changing the component's visual dimensions or affecting sibling layout.",
      },
      {
        question: "How does `Pressable` allow developers to style the active pressed state in modern React Native?",
        options: [
          "Using CSS :hover pseudo-classes",
          "By passing a function to the `style` prop that receives `{ pressed }` boolean: `style={({ pressed }) => ...}`",
          "By adding a separate CSS file",
          "Using window.onTouchStart",
        ],
        answer: "By passing a function to the `style` prop that receives `{ pressed }` boolean: `style={({ pressed }) => ...}`",
        explanation:
          "Pressable accepts a function for both style and children that receives ({ pressed }) => [...], enabling custom feedback animations.",
      },
    ],
  },

  "rn-ch4-l11": {
    overview:
      "Capturing mobile user text input involves managing virtual software keyboards, input constraints, and native autocorrection. In this lesson, we master `<TextInput>`, configuring specialized keyboards (`keyboardType`: 'email-address', 'numeric', 'phone-pad'), password masking with `secureTextEntry`, return keys with `returnKeyType`, and handling submission events.",
    canDo:
      "Can build mobile form inputs with TextInput, customize virtual keyboards for emails and phone numbers, mask passwords, and submit forms on return key tap.",
    teacherNote:
      "When building email or username inputs, always set `autoCapitalize='none'` and `autoCorrect={false}`! Mobile operating systems default to auto-capitalizing the first letter, which corrupts user email inputs like 'User@example.com'.",
    sections: [
      {
        title: "1. TextInput Essential Props",
        description: "Controlling the native mobile virtual keyboard:",
        table: {
          headers: ["Prop", "Values", "Purpose"],
          rows: [
            ["keyboardType", "'default' | 'email-address' | 'numeric' | 'phone-pad'", "Displays specialized virtual keyboard layout with @ or numbers."],
            ["secureTextEntry", "boolean (true / false)", "Masks characters with dots for passwords and sensitive credentials."],
            ["autoCapitalize", "'none' | 'sentences' | 'words' | 'characters'", "Controls automatic platform text capitalization."],
            ["returnKeyType", "'done' | 'go' | 'next' | 'search' | 'send'", "Labels and styles the primary keyboard action button."],
          ],
        },
      },
      {
        title: "2. Form Submission with onSubmitEditing",
        description: "Advancing focus across input fields:",
        items: [
          {
            term: "Input Chaining via Refs",
            meaning: "Tapping 'next' on email keyboard automatically moves focus to password input",
            example: "<TextInput\n  returnKeyType=\"next\"\n  onSubmitEditing={() => passwordInputRef.current?.focus()}\n/>",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why should you configure `autoCapitalize='none'` and `autoCorrect={false}` on email address text inputs?",
        options: [
          "To prevent the mobile OS from capitalizing the first character or autocorrecting domain names, avoiding invalid email inputs",
          "Because emails cannot contain consonants",
          "To encrypt the email address",
          "Because React Native crashes if an email is capitalized",
        ],
        answer: "To prevent the mobile OS from capitalizing the first character or autocorrecting domain names, avoiding invalid email inputs",
        explanation:
          "Smartphones aggressively auto-capitalize the first letter and autocorrect words, which corrupts emails and usernames unless explicitly disabled.",
      },
      {
        question: "Which prop obscures entered characters with black dots for password entry?",
        options: ["passwordMode", "secureTextEntry={true}", "hiddenText", "mask='dots'"],
        answer: "secureTextEntry={true}",
        explanation:
          "secureTextEntry={true} triggers the native platform password field behavior, masking input characters.",
      },
    ],
  },

  "rn-ch4-l12": {
    overview:
      "On mobile devices, opening the software keyboard slides up an overlay that can cover form fields and submit buttons. This lesson covers `<KeyboardAvoidingView>`, configuring behavior modes (`behavior`: 'padding' vs 'height' vs 'position'), dismissing keyboards on tap outside with `TouchableWithoutFeedback` and `Keyboard.dismiss()`, and using keyboard listeners.",
    canDo:
      "Can prevent virtual keyboard occlusion using KeyboardAvoidingView, adjust behavior per platform, and dismiss keyboards cleanly on background tap.",
    teacherNote:
      "PLATFORM KEYBOARD BEHAVIOR DIFFERENCE: On iOS, always set `behavior={Platform.OS === 'ios' ? 'padding' : 'height'}` (or leave Android to native windowSoftInputMode: adjustResize). On iOS without 'padding', the keyboard will slide directly on top of your input fields!",
    sections: [
      {
        title: "1. KeyboardAvoidingView Behavior Matrix",
        description: "Configuring how views adjust when the virtual keyboard opens:",
        table: {
          headers: ["Behavior", "Platform Best For", "How It Shifts Layout"],
          rows: [
            ["padding", "iOS", "Adds bottom padding equal to keyboard height, pushing inputs upward."],
            ["height", "Android (or fallback)", "Shrinks the container's height to match the visible screen area."],
            ["position", "Specialized static screens", "Shifts entire screen position upward."],
          ],
        },
      },
      {
        title: "2. Tap to Dismiss Keyboard Pattern",
        description: "Dismissing keyboard when user taps empty background space:",
        items: [
          {
            term: "Dismiss on Tap Outside",
            meaning: "Wrapping form screen in TouchableWithoutFeedback connected to Keyboard.dismiss",
            example: "<TouchableWithoutFeedback onPress={Keyboard.dismiss}>\n  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>\n    <LoginForm />\n  </KeyboardAvoidingView>\n</TouchableWithoutFeedback>",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What issue does `<KeyboardAvoidingView>` solve on mobile applications?",
        options: [
          "It blocks spam keyboards",
          "It prevents the virtual software keyboard from sliding up over and occluding text inputs and submit buttons",
          "It types text automatically",
          "It makes the keyboard translucent",
        ],
        answer: "It prevents the virtual software keyboard from sliding up over and occluding text inputs and submit buttons",
        explanation:
          "KeyboardAvoidingView automatically adjusts screen height or bottom padding when the software keyboard appears so inputs remain in view.",
      },
      {
        question: "How do you programmatically dismiss the mobile keyboard in React Native when a user taps outside an input?",
        options: [
          "Keyboard.dismiss()",
          "window.hideKeyboard()",
          "document.activeElement.blur()",
          "Input.close()",
        ],
        answer: "Keyboard.dismiss()",
        explanation:
          "The Keyboard module provides Keyboard.dismiss() to dismiss the active software keyboard and clear focus.",
      },
    ],
  },
};
