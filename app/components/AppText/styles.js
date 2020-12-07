import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
    text: {
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: 'Avenir'
            },
            android: {
                fontSize: 18,
                fontFamily: 'Roboto'
            }
        })
    }
});
