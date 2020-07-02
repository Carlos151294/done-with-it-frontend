import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import colors from '../config/colors';
import Icon from './Icon';

function ListItem({ title, subTitle, image, onPress, renderRightActions, style, IconComponent }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={[styles.container, style]}>
                    { image && <Image style={styles.image} source={image} /> }
                    { IconComponent }
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15
    },
    image: {
        borderRadius: 35,
        width: 70,
        height: 70,
    },
    icon: {
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsContainer: {
        justifyContent: 'center',
        marginLeft: 10
    },
    title: {
        fontWeight: 'bold'
    },
    subTitle: {
        color: colors.medium
    }
})

export default ListItem;