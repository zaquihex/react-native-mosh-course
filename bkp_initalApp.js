import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, Dimensions, StyleSheet, Text, TouchableWithoutFeedback, Button, View,Alert, Image, SafeAreaView } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  // useDeviceOrientation() {landscape: true, portrait: false}
    const { landscape } = useDeviceOrientation()
  const handlePress = () => console.log(Dimensions.get('screen'));

  return (
    // SafeAreaView only works in IOS
    <SafeAreaView style={[styles.container, containerStyle, styleSubView.subView, {width: landscape ? "100%" : "50%"}]}>
      <Text numberOfLines={1} onPress={handlePress}>Hello World!</Text>
        {<TouchableWithoutFeedback onPress={()=> console.log("image tapped")}>
            <Image
                fadeDuration={1000} // This only works on ANDROID
                source={{
                    uri: "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",
                    width: 200,
                    height: 300,
                }} width="10px" height="10px"/>
        </TouchableWithoutFeedback>}
        <Button title="click me"  color="darkgreen" onPress={()=> {
            Alert.alert('alert example', 'example of my first alert', [
                {
                    text: 'yes',
                    onPress: () => console.log('yes')
                }, {
                    text: 'no',
                    onPress: () => console.log('no')
                }
            ]);
            /*Alert.prompt("My title", "My message", text => console.log("text"));*/
        }}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styleSubView = StyleSheet.create({
    subView: {
        backgroundColor: 'orange'
    }
});

const containerStyle = {
    backgroundColor: 'lightblue',
    height: '50%'
};

//We create an object of this way because it has validations (you can't write a bad variable or an invalid valid for one of the variables of the object)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
