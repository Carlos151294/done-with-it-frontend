import React from 'react';
import { StyleSheet, View, StatusBar, Image } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

export function ViewImageScreen() {
    return (
        <View style={styles.windowContainer}>
            <View style={styles.bodyContainer}>
                <View style={styles.buttonsContainer}>
                    <View style={styles.closeIcon}>
                        <MaterialCommunityIcons name="close" size={30} color="white" />
                    </View>
                    <View style={styles.deleteIcon}>
                        <MaterialCommunityIcons name="trash-can-outline" size={30} color="white" />
                    </View>
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
        paddingHorizontal: 10,
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
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteIcon: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    }
});