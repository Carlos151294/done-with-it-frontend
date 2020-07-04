import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

export default function AppTextInput({ icon, width, ...otherProps }) {
   return (
      <View style={[styles.container, { width }]}>
         { icon &&  <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.medium} />}
         <TextInput style={defaultStyles.text} {...otherProps} placeholderTextColor={defaultStyles.colors.medium} />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: defaultStyles.colors.light,
      borderRadius: 25,
      width: '100%',
      padding: 15,
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center'
   },
   icon: {
      marginHorizontal: 10
   }
})
