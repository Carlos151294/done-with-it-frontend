import React from 'react';
import { Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Screen from './app/components/Screen';

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button title="Go to details" onPress={() => navigation.navigate('TweetDetails')} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Tweets</Text>
    <Button 
      title="View Tweet" 
      onPress={() => navigation.navigate('TweetDetails', { id: 15 })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Tweet Details</Text>
    <Text>Route Params: {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator 
    screenOptions={{
      headerStyle: { backgroundColor: 'dodgerblue' },
      headerTintColor: 'white'
    }}>
    <Stack.Screen 
      name="Tweets" 
      component={Tweets}
      options={{
        headerTitleAlign: 'center'
      }} />
    <Stack.Screen 
      name="TweetDetails" 
      component={TweetDetails}
      options={({ route }) => ({ 
        title: `Tweet ${route.params.id}`,
        headerStyle: { backgroundColor: 'tomato' }
      })} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}