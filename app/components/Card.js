import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import colors from '../config/colors';

function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.cardContainer}>
                <Image
                    style={styles.image}
                    tint="light"
                    preview={{ uri: thumbnailUrl }}
                    uri={imageUrl} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.textTitle}>{title}</Text>
                    <Text style={styles.textsubTitle}>{subTitle}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.white,
        borderRadius: 15,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    detailsContainer: {
        padding: 20
    },
    textTitle: {
        color: colors.black,
        fontSize: 20,
        marginBottom: 7
    },
    textsubTitle: {
        color: colors.secondary,
        fontSize: 18,
        fontWeight: 'bold'
    }
})


export default Card;