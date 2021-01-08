import React from 'react';
import { StyleSheet, Platform, View, StatusBar } from 'react-native';
import Constants from 'expo-constants';

const Screen = ({ children, style }) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    }
})


export default Screen;