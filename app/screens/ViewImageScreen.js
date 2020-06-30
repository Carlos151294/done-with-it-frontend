import React from 'react';

import { StyleSheet, View, StatusBar, Image } from 'react-native';
import colors from '../config/colors';

export function ViewImageScreen() {
    return (
        <View style={styles.windowContainer}>
            <View style={styles.bodyContainer}>
                <View style={styles.buttonsContainer}>
                    <View style={styles.closeIcon}></View>
                    <View style={styles.deleteIcon}></View>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        resizeMode='contain'
                        source={require('../assets/chair.jpg')}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    windowContainer: {
        flex: 1,
        backgroundColor: colors.black
    },
    bodyContainer: {
        marginTop: StatusBar.currentHeight,
        flex: 1
    },
    buttonsContainer: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    closeIcon: {
        backgroundColor: colors.primary,
        width: 50,
        height: 50
    },
    deleteIcon: {
        backgroundColor: colors.secondary,
        width: 50,
        height: 50
    },
    image: {
        width: '100%',
        height: '100%'
    }
});