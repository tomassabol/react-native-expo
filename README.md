# React Native Expo template

Welcome to the **React Native Expo** template project! This repository contains a mobile application template built using React Native and Expo for quick development and testing. It leverages modern JavaScript features and native mobile components, making it easier to build cross-platform mobile applications.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Running on Expo](#running-on-expo)

## Overview

This project is aimed at providing a clean and modular React Native setup that can be quickly deployed using Expo. The application is built with:

- **React Native** for mobile development.
- **Expo** for a hassle-free development workflow.
- **Context API** for state management.

## Features

- Cross-platform (iOS and Android) support using React Native.
- Fast prototyping and testing using Expo's developer tools.
- A global state is managed using the Context API, enabling efficient state sharing across components.
- Easy integration with external APIs and services.

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tomassabol/react-native-expo.git
   cd react-native-expo

   ```

2. **Install dependencies:**

   Make sure you have Node.js installed. Then, run the following command to install the required packages:

   ```sh
   npm install
   ```

3. **Install Expo CLI:**

   If you don't have Expo CLI installed globally, install it using:

   ```sh
   npm install -g expo-cli
   ```

## Usage

1. **Start the development server:**

   To run the project, start the Expo development server using:

   ```sh
   expo start
   ```

2. **Run the app on your device:**

   - Install the Expo Go app on your Android or iOS device.
   - Scan the QR code from the Expo CLI in your terminal or browser.
   - The app will open on your mobile device via Expo Go.

3. **Build the app for production:**

   You can build the app for production using Expo's build service:

   ```sh
   expo build:android
   expo build:ios
   ```

   Follow the instructions to get APK (Android) or IPA (iOS) files for distribution.

## Running on Expo

Expo provides an easy way to develop and preview your app on both Android and iOS devices without needing a simulator or emulator. With Expo Go, you can instantly view changes made in your code:

1. Start the Expo development server:

```sh
expo start
```

2. Scan the QR code using the Expo Go app on your phone.
