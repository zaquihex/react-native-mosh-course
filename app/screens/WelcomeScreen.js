import React from 'react';
import colors from '../config/colors';
import {ImageBackground, StyleSheet,Text, Image, View, SafeAreaView} from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={10}
            style={[styles.background]}
            source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
                <Text style={styles.tagLine}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={()=>{console.log("Login tapped");}}/>
                <AppButton title="Register" color="secondary" onPress={()=>{console.log("Register tapped");}}/>
            </View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    logo:{
        width: 100,
        height: 100,

    },
    tagLine: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20
    },
    buttonContainer: {
        padding: 20,
        width: '100%'
    },
});

export default WelcomeScreen;
