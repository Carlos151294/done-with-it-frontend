import React from 'react';
import { StyleSheet, Platform, View } from 'react-native';
import colors from '../config/colors';

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
        paddingTop: Platform.OS === 'android' ? 25 : 50
    }
})


export default Screen;