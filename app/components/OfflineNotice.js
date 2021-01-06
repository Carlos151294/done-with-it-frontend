import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import {useNetInfo} from "@react-native-community/netinfo";
import Constants from 'expo-constants';

import Text from './Text';
import colors from '../config/colors';

const OfflineNotice = () => {
    const netInfo = useNetInfo();
    
    if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
        return (
            !netInfo.isInternetReachable && 
            <View style={styles.container}>
                <Text style={styles.text}>No internet conection</Text>
            </View>
        );
    }

    return null;
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        position: 'absolute',
        top: Constants.statusBarHeight,
        height: 50,
        width: '100%',
        zIndex: 1
    },
    text: {
        color: colors.white
    }
});

export default OfflineNotice;