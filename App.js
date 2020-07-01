import React from 'react';
import { StyleSheet, View } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons'

import { WelcomeScreen } from './app/screens/WelcomeScreen';
// import { ViewImageScreen } from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

// import CustomButton from './app/components/CustomButton';
import Card from './app/components/Card';
// import colors from './app/config/colors';

export default function App() {
  return (
    <ListingDetailsScreen />
    // <View style={styles.container}>
    //   <Card
    //     title="Couch"
    //     subTitle="Best couch ever <3 !"
    //     image={require('./app/assets/jacket.jpg')}
    //   />
    // </View>

    // <WelcomeScreen />
    // <ViewImageScreen />
    // <View style={{
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center'
    // }}>
    //   <CustomButton
    //     title="LOGIN"
    //     color={colors.primary}
    //     onPress={() => console.log('Button pressed!')} />
    //   <CustomButton title="REGISTER" color={colors.secondary} />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    paddingHorizontal: 20,
    paddingVertical: 60,
    height: 400,
    width: '100%'
  }
});