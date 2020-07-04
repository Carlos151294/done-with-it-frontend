import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Text from './Text';
import colors from '../config/colors';

function ListItem({ title, subTitle, image, onPress, renderRightActions, style, IconComponent, showChevrons }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={[styles.container, style]}>
                    { image && <Image style={styles.image} source={image} /> }
                    { IconComponent }
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title} numberOfLines={1}>{title}</Text>
                        {subTitle && <Text numberOfLines={2}>{subTitle}</Text>}
                    </View>
                    { showChevrons && <View style={styles.arrowRight}><MaterialCommunityIcons name="chevron-right" size={25} /></View>}
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    arrowRight: {
        justifyContent: 'center'
    },
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
        flex: 1,
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