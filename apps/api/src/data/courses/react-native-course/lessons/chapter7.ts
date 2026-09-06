import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_7_LESSONS: Record<string, LessonContent> = {
  "rn-ch7-l19": {
    overview:
      "Mobile applications must function offline and persist user preferences across app restarts. In this lesson, based on 'Fullstack React Native' Chapter 8 and 'Mastering React Native', we cover `@react-native-async-storage/async-storage` (unencrypted key-value storage) and `expo-secure-store` (encrypted hardware-backed storage for authentication tokens and credentials using iOS Keychain and Android KeyStore).",
    canDo:
      "Can persist offline data using AsyncStorage, encrypt sensitive credentials using SecureStore, and serialize/deserialize JSON data models safely.",
    teacherNote:
      "NEVER store sensitive auth tokens, passwords, or encryption keys in AsyncStorage! AsyncStorage is unencrypted plain-text storage on disk. For secrets, always use `expo-secure-store` (or `react-native-keychain`), which leverages the device's hardware Secure Enclave (iOS Keychain / Android Keystore)!",
    sections: [
      {
        title: "1. AsyncStorage vs SecureStore",
        description: "Selecting appropriate storage mechanisms based on security sensitivity:",
        table: {
          headers: ["Storage Library", "Encrypted?", "Hardware Backing", "Best For", "Capacity"],
          rows: [
            ["AsyncStorage", "No (Plain text SQLite / RocksDB)", "Standard flash filesystem", "UI preferences, drafts, cached feeds, theme settings.", "6MB+ (expandable)"],
            ["SecureStore / Keychain", "Yes (Hardware AES-256)", "iOS Keychain / Android Keystore (TEE)", "JWT auth tokens, API secrets, user passwords.", "Small (< 2KB per item)"],
          ],
        },
      },
      {
        title: "2. JSON Serialization Wrapper Pattern",
        description: "Safely reading and writing objects to AsyncStorage:",
        items: [
          {
            term: "Type-Safe Storage Helper",
            meaning: "Serializes objects with JSON.stringify and handles parse fallbacks",
            example: "export const storage = {\n  async set<T>(key: string, value: T): Promise<void> {\n    await AsyncStorage.setItem(key, JSON.stringify(value));\n  },\n  async get<T>(key: string): Promise<T | null> {\n    const data = await AsyncStorage.getItem(key);\n    return data ? JSON.parse(data) : null;\n  },\n};",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Where should sensitive authentication tokens (like JWTs or refresh tokens) be stored on a mobile device?",
        options: [
          "In a global JavaScript variable only",
          "In an encrypted secure store backed by iOS Keychain / Android Keystore (e.g. expo-secure-store)",
          "In an unencrypted text file on the SD card",
          "Inside AsyncStorage",
        ],
        answer: "In an encrypted secure store backed by iOS Keychain / Android Keystore (e.g. expo-secure-store)",
        explanation:
          "Sensitive secrets should always be stored in hardware-encrypted secure storage (Keychain on iOS and Keystore on Android), not plain-text AsyncStorage.",
      },
      {
        question: "Why does AsyncStorage require calling `JSON.stringify()` when saving objects?",
        options: [
          "Because AsyncStorage only stores string values",
          "To compress the images",
          "Because JavaScript cannot save objects to RAM",
          "It is optional",
        ],
        answer: "Because AsyncStorage only stores string values",
        explanation:
          "AsyncStorage is an asynchronous, unencrypted, persistent key-value storage system that only accepts string values.",
      },
    ],
  },

  "rn-ch7-l20": {
    overview:
      "Accessing hardware sensors like the camera and photo library requires requesting user permissions at runtime. In this lesson, we cover `expo-image-picker` and `expo-camera`, requesting platform permissions (`requestCameraPermissionsAsync`), handling permission denial states, capturing photos, and selecting images from the device gallery.",
    canDo:
      "Can request camera and gallery permissions gracefully, launch image pickers, capture camera photos, and display chosen media in Image components.",
    teacherNote:
      "Both Apple and Google require explicit permission description strings in app manifests (`NSCameraUsageDescription` in Info.plist and `CAMERA` in AndroidManifest.xml). If you try to open the camera without these permission descriptions, the operating system will crash your app immediately!",
    sections: [
      {
        title: "1. The Permission Request Flow",
        description: "Best practices for mobile hardware permission requests:",
        table: {
          headers: ["Stage", "API Call", "User Experience", "Fallback if Denied"],
          rows: [
            ["1. Check Existing", "ImagePicker.getCameraPermissionsAsync()", "Checks if user previously granted access.", "Proceed immediately if granted."],
            ["2. Request Prompt", "ImagePicker.requestCameraPermissionsAsync()", "Presents native system permission dialog.", "Explains why permission is required."],
            ["3. Handle Denial", "status !== 'granted'", "Presents alert explaining functionality is disabled.", "Direct user to device Settings via Linking.openSettings()."],
          ],
        },
      },
      {
        title: "2. Image Picker Launch Example",
        description: "Opening the device photo library:",
        items: [
          {
            term: "launchImageLibraryAsync",
            meaning: "Launches the native photo picker with aspect ratio cropping options",
            example: "const result = await ImagePicker.launchImageLibraryAsync({\n  mediaTypes: ImagePicker.MediaTypeOptions.Images,\n  allowsEditing: true,\n  aspect: [1, 1],\n  quality: 0.8,\n});\nif (!result.canceled) {\n  setImageUri(result.assets[0].uri);\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What happens on iOS if an application attempts to access the camera without defining `NSCameraUsageDescription` in its Info.plist / app.json?",
        options: [
          "iOS displays a default camera icon",
          "The operating system terminates (crashes) the app immediately for security policy violation",
          "The camera opens in black-and-white mode",
          "The photo library is opened instead",
        ],
        answer: "The operating system terminates (crashes) the app immediately for security policy violation",
        explanation:
          "Apple enforces strict privacy declarations. Accessing protected hardware without a defined usage explanation causes iOS to kill the app process instantly.",
      },
      {
        question: "What should an app do if a user permanently denies camera permissions?",
        options: [
          "Crash the application",
          "Display an informative UI explaining that the feature requires the camera, with a button directing the user to device Settings via Linking.openSettings()",
          "Repeatedly pop up the permission dialog every second",
          "Restart the mobile phone",
        ],
        answer: "Display an informative UI explaining that the feature requires the camera, with a button directing the user to device Settings via Linking.openSettings()",
        explanation:
          "Once denied permanently, the OS will not show the system prompt again; guiding the user to the device Settings page allows them to re-enable it manually.",
      },
    ],
  },

  "rn-ch7-l21": {
    overview:
      "Location awareness and network connectivity allow apps to adapt to environmental contexts. In this lesson, we cover `expo-location` (requesting foreground vs background GPS permissions, querying current GPS coordinates, reverse geocoding addresses) and `@react-native-community/netinfo` (detecting online/offline status and connection types: WiFi vs Cellular).",
    canDo:
      "Can query GPS coordinates with expo-location, perform forward/reverse geocoding, monitor live network connectivity with NetInfo, and display offline banners.",
    teacherNote:
      "Differentiate between Foreground and Background location! Request ONLY foreground location (`requestForegroundPermissionsAsync`) unless your app is a navigation or workout tracker that genuinely needs to track users when the app is closed. App store reviewers heavily scrutinize background location requests!",
    sections: [
      {
        title: "1. Location Services: Accuracy vs Battery Drain",
        description: "Balancing precision with device battery consumption:",
        table: {
          headers: ["Accuracy Preset", "GPS Precision", "Battery Consumption", "Recommended Use Case"],
          rows: [
            ["LocationAccuracy.Lowest", "~3 kilometers", "Extremely Low", "Country / City level localization."],
            ["LocationAccuracy.Balanced", "~100 meters", "Low", "Local weather, neighborhood recommendations."],
            ["LocationAccuracy.High", "~10 meters", "Moderate", "Address drop-off, store locators."],
            ["LocationAccuracy.BestForNavigation", "~1 - 2 meters", "High", "Turn-by-turn vehicle navigation only."],
          ],
        },
      },
      {
        title: "2. Live Network Status Monitoring",
        description: "Detecting internet connectivity changes in real time:",
        items: [
          {
            term: "NetInfo Event Listener",
            meaning: "Subscribes to native connection changes to toggle offline mode banners",
            example: "useEffect(() => {\n  const unsubscribe = NetInfo.addEventListener(state => {\n    setIsConnected(state.isConnected ?? false);\n  });\n  return () => unsubscribe();\n}, []);",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the difference between foreground and background location permissions in mobile apps?",
        options: [
          "Foreground is only for Android; background is for iOS",
          "Foreground tracks location only while the app is actively open and visible on screen; background tracks location even when the app is minimized or the screen is locked",
          "Foreground uses Bluetooth; background uses GPS",
          "There is no difference",
        ],
        answer: "Foreground tracks location only while the app is actively open and visible on screen; background tracks location even when the app is minimized or the screen is locked",
        explanation:
          "Foreground permissions only grant access when the user is actively viewing the app. Background tracking requires stringent app store justification and drains battery faster.",
      },
      {
        question: "How should an app react when NetInfo reports `isConnected: false`?",
        options: [
          "Close the app immediately",
          "Display a non-intrusive offline indicator and switch to cached local data from storage",
          "Continuously reload the app",
          "Format the device storage",
        ],
        answer: "Display a non-intrusive offline indicator and switch to cached local data from storage",
        explanation:
          "Graceful offline handling displays an indicator and reads data from local caches (like AsyncStorage or SQLite) until connectivity is restored.",
      },
    ],
  },
};
