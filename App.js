import React from 'react';
import { StyleSheet } from 'react-native';

import ListingEditScreen from './app/screens/ListingEditScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import { ViewImageScreen } from './app/screens/ViewImageScreen';
import { WelcomeScreen } from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <RegisterScreen />
  );
}

const styles = StyleSheet.create({
});