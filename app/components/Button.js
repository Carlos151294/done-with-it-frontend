import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

const AppButton = ({ title, color = 'primary', onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, { backgroundColor: colors[color] }]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        width: '100%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    text: {
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})

export default AppButton;