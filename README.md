# CASK React Native Case

# Cask Case 🚀

A React Native application built to demonstrate push notification handling, navigation logic, and dynamic screen rendering based on notification type. This project was developed as part of the [Cask](https://www.cask.com.tr) challenge case.

## 🔗 Repository

<https://github.com/berkaypacal/cask-case>

---

## 📁 Folder Structure

```
src/
├── api/               # API requests
├── components/        # Shared UI components
├── constants/         # Static labels and enums
├── context/           # NotificationContext
├── firebase/          # FCM & Notifee setup
├── hooks/             # Custom React hooks
├── navigation/        # AppNavigator setup
├── screens/           # Tab and stack screens
└── utility/           # Helpers (e.g. formatters, extractors)
```

---

## 📱 Features

- ✅ Firebase Cloud Messaging (FCM) integration
- ✅ Notifee integration for advanced push notifications
- ✅ Notification data handling via Context API
- ✅ Dynamic navigation based on notification type:
  - Type 1: Text screen
  - Type 2: Image screen
  - Type 3: YouTube video screen
- ✅ React Query for API interactions
- ✅ Layout abstraction for consistent UI
- ✅ Environment configuration via `.env`

---

## 🔧 Tech Stack

- React Native
- React Navigation
- Firebase (Messaging)
- Notifee
- React Query
- Context API
- TypeScript-ready structure (optional)

---

## 📦 Setup

```bash
git clone https://github.com/berkaypacal/cask-case.git
cd cask-case

npm install
# or
yarn
```

---

## 📄 Environment Variables

After cloning the repository, create a `.env` file manually in the project root directory:

```env
BASE_URL=https://cask-api-url.com
SCOPE=
ADMMDLID=
```

> ⚠️ The `.env` file is required for the app to run properly and must be manually created after cloning the repo. Ensure it is not committed by verifying it's listed in `.gitignore`.

---

## ▶️ Running the App

```bash
npx react-native run-android
# or
npx react-native run-ios
```

Don't forget to start Metro:

```bash
npx react-native start
```

---

## 🔔 Push Notification Flow

1. FCM token is retrieved and displayed.
2. User picks the PN type (1 - Text, 2 - Image, 3 - YouTube).
3. Sends a request to the backend via `/api`.
4. Notification is handled (foreground/background).
5. Based on `pn_type`, navigates to the corresponding screen.
