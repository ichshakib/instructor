import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_6_LESSONS: Record<string, LessonContent> = {
  "rn-ch6-l16": {
    overview:
      "Unlike browsers which manage a continuous URL history, mobile operating systems navigate screens using push/pop screen stacks. React Navigation is the de facto routing library for React Native. In this lesson, based on 'Fullstack React Native' Chapter 7, we explore `<NavigationContainer>`, `@react-navigation/native-stack` (backed by native UINavigationController on iOS and Fragment on Android), screen transitions, and header configuration.",
    canDo:
      "Can configure NavigationContainer, declare native stack navigators, push and pop screens, and customize navigation headers.",
    teacherNote:
      "Always use `@react-navigation/native-stack` rather than the JavaScript-based `@react-navigation/stack`! `native-stack` leverages true native operating system view controllers (UINavigationController on iOS and Android Fragments via react-native-screens), achieving authentic hardware-accelerated slide animations and swipe-to-back gestures!",
    sections: [
      {
        title: "1. Native Stack Navigator Architecture",
        description: "Components that drive native mobile screen transitions:",
        table: {
          headers: ["Component / Hook", "Source Library", "Role in App"],
          rows: [
            ["NavigationContainer", "@react-navigation/native", "Root provider managing navigation state and linking."],
            ["createNativeStackNavigator()", "@react-navigation/native-stack", "Creates NativeStack.Navigator and NativeStack.Screen."],
            ["navigation.navigate('Screen')", "useNavigation()", "Pushes screen onto stack or focuses existing instance."],
            ["navigation.goBack()", "useNavigation()", "Pops the current screen off the stack, returning to previous."],
          ],
        },
      },
      {
        title: "2. Native Stack Configuration",
        description: "Setting up a typed mobile navigation stack:",
        items: [
          {
            term: "Native Stack Setup",
            meaning: "Wrapping screens in Navigator and configuring header options",
            example: "const Stack = createNativeStackNavigator();\n\nexport function AppNavigator() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#111' }, headerTintColor: '#fff' }}>\n        <Stack.Screen name=\"Home\" component={HomeScreen} options={{ title: 'Feed' }} />\n        <Stack.Screen name=\"Details\" component={DetailsScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why is `@react-navigation/native-stack` preferred over standard `@react-navigation/stack`?",
        options: [
          "It uses less CSS",
          "It uses real native platform view controllers (UINavigationController and Android Fragments), delivering authentic gesture animations and superior performance",
          "It works without JavaScript",
          "It requires no installation",
        ],
        answer: "It uses real native platform view controllers (UINavigationController and Android Fragments), delivering authentic gesture animations and superior performance",
        explanation:
          "native-stack wraps native platform navigation primitives directly via react-native-screens, ensuring 100% authentic platform transition physics and optimal memory handling.",
      },
      {
        question: "Which method pops the current screen off the navigation stack to return to the preceding screen?",
        options: ["navigation.goBack()", "navigation.popRoot()", "navigation.close()", "navigation.exit()"],
        answer: "navigation.goBack()",
        explanation:
          "navigation.goBack() pops the top-most screen from the active stack navigator, revealing the screen underneath.",
      },
    ],
  },

  "rn-ch6-l17": {
    overview:
      "Bottom tab bars are the most common primary navigation pattern in mobile applications. In this lesson, we explore `@react-navigation/bottom-tabs`, building persistent bottom tab bars, integrating vector icon libraries (`@expo/vector-icons`), displaying notification badge counts on tabs, and nesting native stack navigators inside individual tab screens.",
    canDo:
      "Can construct multi-tab mobile layouts with createBottomTabNavigator, render icon sets dynamically based on focus state, and nest stack navigators inside tabs.",
    teacherNote:
      "PRO ARCHITECTURE PATTERN: Nest Stack Navigators INSIDE Tab Navigators! For example, your 'Feed' tab should hold a `FeedStack` (FeedList -> ProductDetail -> Reviews), and your 'Profile' tab holds a `ProfileStack`. This keeps the bottom tab bar visible while users drill deep into detail pages.",
    sections: [
      {
        title: "1. Bottom Tab Bar Architecture",
        description: "Configuring persistent thumb-friendly navigation:",
        table: {
          headers: ["Tab Option Prop", "Type", "Visual Result"],
          rows: [
            ["tabBarIcon", "({ focused, color, size }) => JSX", "Renders custom icons dynamically tinted when active/inactive."],
            ["tabBarBadge", "string | number | undefined", "Displays a red notification counter over the tab icon."],
            ["tabBarActiveTintColor", "Color string (e.g. '#0066cc')", "Color applied to the active tab label and icon."],
            ["headerShown", "boolean (false to hide)", "Disables default tab header when nesting a child stack navigator."],
          ],
        },
      },
      {
        title: "2. Dynamic Tab Icon Pattern",
        description: "Switching outline vs filled icons on focus:",
        items: [
          {
            term: "Focused Icon Selector",
            meaning: "Renders filled icon when active, outline icon when inactive",
            example: "screenOptions={({ route }) => ({\n  tabBarIcon: ({ focused, color, size }) => {\n    const iconName = route.name === 'Home'\n      ? (focused ? 'home' : 'home-outline')\n      : (focused ? 'person' : 'person-outline');\n    return <Ionicons name={iconName} size={size} color={color} />;\n  },\n})}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why should developers nest Stack Navigators inside Tab Navigators?",
        options: [
          "To allow each tab to maintain its own independent navigation history and stack while keeping the bottom bar visible",
          "Because React Navigation throws an error otherwise",
          "To make the app run faster",
          "To avoid writing TypeScript types",
        ],
        answer: "To allow each tab to maintain its own independent navigation history and stack while keeping the bottom bar visible",
        explanation:
          "Nesting stacks inside tabs allows each tab (e.g., Home, Search, Profile) to drill down into detail screens independently without losing the other tabs' current scroll and stack state.",
      },
      {
        question: "How do you display a badge (like unread notifications count) on a bottom tab?",
        options: [
          "tabBarBadge: 5 in screen options",
          "badge={5} on NavigationContainer",
          "add a <Badge> component to the status bar",
          "use BadgeManager.show()",
        ],
        answer: "tabBarBadge: 5 in screen options",
        explanation:
          "The tabBarBadge screen option takes a number or string and automatically renders a native notification badge over the tab's icon.",
      },
    ],
  },

  "rn-ch6-l18": {
    overview:
      "Navigating between screens often requires passing parameters (e.g. selecting an item from a list and passing its ID to a detail screen). In this lesson, we study type-safe route parameters (`route.params`), configuring dynamic navigation header titles based on parameters, handling deep linking from external URLs and push notifications, and typing navigation with TypeScript.",
    canDo:
      "Can pass parameters across screens, extract params using useRoute(), dynamically update header titles with navigation.setOptions(), and configure deep link URL prefixes.",
    teacherNote:
      "Always pass the MINIMAL identifier in route params (e.g. `navigation.navigate('Details', { id: '123' })`) rather than passing massive complex object payloads! The target screen should use the ID to query its cache or store, ensuring data remains fresh and serializable for deep linking.",
    sections: [
      {
        title: "1. Passing & Reading Route Parameters",
        description: "Data flow between navigation screens:",
        table: {
          headers: ["Action", "Syntax Example", "Where Executed"],
          rows: [
            ["Passing Params", "navigation.navigate('Details', { itemId: item.id, title: item.name });", "Source Screen (Sender)"],
            ["Reading Params", "const { itemId, title } = route.params;", "Destination Screen (Receiver via useRoute())"],
            ["Dynamic Header Title", "navigation.setOptions({ title: route.params.title });", "Destination Screen inside useLayoutEffect"],
          ],
        },
      },
      {
        title: "2. Deep Linking Configuration",
        description: "Enabling app opening from web links and push notifications:",
        items: [
          {
            term: "linking Configuration Object",
            meaning: "Maps URL path segments to screen routes",
            example: "const linking = {\n  prefixes: ['myapp://', 'https://myapp.com'],\n  config: {\n    screens: {\n      Home: 'feed',\n      Details: 'product/:itemId',\n    },\n  },\n};\n// Passed to <NavigationContainer linking={linking}>",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the best practice for passing data to a detail screen in React Navigation?",
        options: [
          "Passing the entire massive JSON object through route params",
          "Passing only the unique identifier (e.g. { id: 42 }) and having the detail screen fetch or select data from a store",
          "Writing the data to a temporary text file on disk",
          "Passing data via global window variables",
        ],
        answer: "Passing only the unique identifier (e.g. { id: 42 }) and having the detail screen fetch or select data from a store",
        explanation:
          "Passing lightweight IDs preserves fresh data, ensures clean deep link URL serialization (e.g. app://details/42), and avoids state desynchronization.",
      },
      {
        question: "Which hook extracts parameters passed to the current screen in React Navigation?",
        options: ["useRoute()", "useParams()", "useNavigationParams()", "useScreenData()"],
        answer: "useRoute()",
        explanation:
          "useRoute() returns the route object for the active screen, which contains `route.params` holding all arguments passed during navigation.",
      },
    ],
  },
};
