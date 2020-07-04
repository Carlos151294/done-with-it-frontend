import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Text from './Text';

const PickerItem = ({ label, onPress, style }) => {
   return (
      <TouchableOpacity onPress={onPress}>
         <Text style={[styles.text, style]}>{label}</Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   text: {
      padding: 20
   }
})

export default PickerItem;