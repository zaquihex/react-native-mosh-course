import React from "react";
import { Formik } from "formik";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;


/*
 {
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "eject": "expo eject"
  },
  "dependencies": {
    "@react-native-community/masked-view": "0.1.10",
    "@react-native-community/netinfo": "5.9.6",

    "@react-navigation/bottom-tabs": "^5.4.4",
    "@react-navigation/stack": "^5.3.5",

    "@react-navigation/native": "^5.3.2",
    "apisauce": "^1.1.1",
    "expo": "~37.0.3",
    "expo-blur": "~9.1.1",
    "expo-constants": "^9.0.0",
    "expo-image-picker": "~8.1.0",
    "expo-location": "~9.0.0",
    "expo-permissions": "~9.3.0",
    "expo-secure-store": "~9.2.0",
    "formik": "^2.1.4",
    "jwt-decode": "^2.2.0",
    "lottie-react-native": "~2.6.1",
    "moment": "^2.26.0",
    "react": "~16.9.0",
    "react-dom": "~16.9.0",
    "react-native": "https://github.com/expo/react-native/archive/sdk-39.0.4.tar.gz",
    "react-native-expo-image-cache": "^4.1.0",
    "react-native-gesture-handler": "~1.7.0",
    "react-native-progress": "^4.1.2",
    "react-native-reanimated": "~1.13.0",
    "react-native-safe-area-context": "3.1.4",
    "react-native-screens": "~2.10.1",
    "react-native-web": "~0.11.7",
    "yup": "^0.28.5"
  },
  "devDependencies": {
    "@babel/core": "^7.8.6",
    "babel-preset-expo": "~8.1.0"
  },
  "private": true
}


 */
