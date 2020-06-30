import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { WelcomeScreen } from './app/screens/WelcomeScreen';
import { ViewImageScreen } from './app/screens/ViewImageScreen';

import AppText from './app/components/AppText';

export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <MaterialCommunityIcons name="email" size={30} color="dodgerblue" />
      <AppText>I love React!</AppText>
    </View>
  );
}