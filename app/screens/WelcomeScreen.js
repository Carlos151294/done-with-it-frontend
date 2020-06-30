import React from 'react';

import { StyleSheet, View, ImageBackground, StatusBar, Image, Text } from 'react-native';
import colors from '../config/colors';

export function WelcomeScreen() {
    return (
        <ImageBackground
            source={require('../assets/background.jpg')}
            style={styles.backgroundContainer}>
            <View style={styles.welcomeContainer}>
                <View style={styles.titleContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/logo-red.png')}
                    />
                    <Text>Sell What You Don't Need</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.loginBackground}></View>
                    <View style={styles.registerBackground}></View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1
    },
    welcomeContainer: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleContainer: {
        top: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsContainer: {
        width: '100%',
        height: 120
    },
    logo: {
        width: 100,
        height: 100
    },
    loginBackground: {
        backgroundColor: colors.primary,
        width: '100%',
        height: '50%'
    },
    registerBackground: {
        backgroundColor: colors.secondary,
        width: '100%',
        height: '50%'
    }
});
