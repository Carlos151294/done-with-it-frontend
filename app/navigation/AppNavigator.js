
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import NewListingButton from './NewListingButton';
import routes from './routes';

const Tabs = createBottomTabNavigator();

const AppNavigator = () => (
  <Tabs.Navigator>
    <Tabs.Screen 
      name="Feed" 
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />
      }} /> 
    <Tabs.Screen 
      name="ListingEdit" 
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
            <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />
        )
      })} />
    <Tabs.Screen 
      name="Account" 
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />
      }} />
  </Tabs.Navigator>
);

export default AppNavigator;