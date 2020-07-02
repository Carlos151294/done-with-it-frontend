import React from 'react';
import { StyleSheet } from 'react-native';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';

export default function App() {
  // return <MessagesScreen />;
  // return <ListingsScreen />;
  return <AccountScreen />
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   paddingTop: StatusBar.currentHeight
  // }
});