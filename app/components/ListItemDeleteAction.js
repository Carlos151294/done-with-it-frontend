import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const ListItemDeleteAction = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.deleteContainer}>
                <MaterialCommunityIcons
                    name="trash-can"
                    size={35}
                    color={colors.white} />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    deleteContainer: {
        backgroundColor: colors.danger,
        width: 70,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ListItemDeleteAction;