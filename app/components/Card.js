import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import colors from '../config/colors';

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.cardContainer}>
            <Image
                style={styles.image}
                source={image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.textsubTitle}>{subTitle}</Text>
            </View>
        </View>
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