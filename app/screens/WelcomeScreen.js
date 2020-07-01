import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Image, Text } from 'react-native';

import CustomButton from '../components/CustomButton';

import colors from '../config/colors';

export function WelcomeScreen() {
    return (
        <ImageBackground
            blurRadius={2}
            source={require('../assets/background.jpg')}
            style={styles.backgroundContainer}>
            <View style={styles.welcomeContainer}>
                <View style={styles.titleContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/logo-red.png')}
                    />
                    <Text style={styles.slogan}>Sell What You Don't Need</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <CustomButton
                        title="LOGIN"
                        color="primary"
                        onPress={() => console.log('Button pressed!')} />
                    <CustomButton
                        title="REGISTER"
                        color="secondary"
                        onPress={() => console.log('Button pressed!')} />
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
        paddingHorizontal: 20,
        width: '100%',
        height: 150,
        justifyContent: 'space-evenly'
    },
    logo: {
        width: 100,
        height: 100
    },
    slogan: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: '600'
    }
});
