import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function NewListingButton({ onPress }) {
   return (
      <TouchableWithoutFeedback onPress={onPress}>
         <View style={styles.container}>
            <MaterialCommunityIcons name="plus-circle" size={40} color={colors.white} />
         </View>
      </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      backgroundColor: colors.primary,
      height: 80,
      justifyContent: 'center',
      width: 80,
      borderRadius: 40,
      bottom: 25,
      borderWidth: 10,
      borderColor: colors.white
   }
});

export default NewListingButton;