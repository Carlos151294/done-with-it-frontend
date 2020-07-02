import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

export default function Icon({ name, backgroundColor = 'white', size = 30, color = 'black'}) {
  return (  
    <View 
        style={[styles.icon, { 
            borderRadius: size / 2,
            width: size,
            height: size,
            backgroundColor: colors[backgroundColor] 
        }]}>
      <MaterialCommunityIcons name={name} size={size * 0.5} color={colors[color]} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
