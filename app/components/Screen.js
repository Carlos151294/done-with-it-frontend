import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import colors from '../config/colors';

const Screen = ({ children, backgroundColor }) => {
    return (
        <View style={[styles.container, { backgroundColor: colors[backgroundColor] }]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    }
})


export default Screen;