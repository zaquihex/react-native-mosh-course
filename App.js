import { StatusBar } from 'expo-status-bar';
import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {View} from 'react-native';
import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton';

export default function App() {
    return <WelcomeScreen />;
  /*return (
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
            <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
            <AppText> Example of a text</AppText>
            <AppButton title="Login" onPress={()=>{console.log("Login tapped");}}/>
        </View>
  );*/
  // return <ViewImageScreen />
  //return <WelcomeScreen />;
}
