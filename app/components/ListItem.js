import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function ListItem({ title, subTitle, image }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        borderRadius: 35,
        width: 70,
        height: 70,
        marginRight: 10
    },
    detailsContainer: {
        flexDirection: 'column',
        paddingTop: 5
    },
    title: {
        fontWeight: 'bold'
    },
    subTitle: {
        color: colors.medium
    }
})

export default ListItem;