import React, { useState } from 'react';
import { View, StyleSheet, Modal, Button } from 'react-native';
import { TouchableWithoutFeedback, FlatList } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import AppText from '../components/AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';
import colors from '../config/colors';

export default function AppPicker({ icon, items, selectedItem, onSelectItem, placeholder,  }) {
   const [modalVisible, setModalVisible] = useState(false);

   return (
      <React.Fragment>
         <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={styles.container}>
               { icon &&  <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.medium} /> }
               { selectedItem && <AppText style={styles.text}>{selectedItem.label}</AppText> }
               { !selectedItem && <AppText style={styles.placeholder}>{placeholder}</AppText> }
               <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
            </View>
         </TouchableWithoutFeedback>
         <Modal visible={modalVisible} animationType="slide">
            <Screen>
               <Button title="Close" onPress={() => setModalVisible(false)} />
               <FlatList 
                  data={items}
                  keyExtractor={item => item.value.toString()}
                  renderItem={({ item }) => (
                     <PickerItem 
                        label={item.label}
                        onPress={() =>{
                           setModalVisible(false);
                           onSelectItem(item);
                        }} 
                     />
                  )}
               />
            </Screen>
         </Modal>
      </React.Fragment>
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
   },
   placeholder: {
      flex: 1,
      color: defaultStyles.colors.medium
   },
   text: {
      flex: 1,
      color: defaultStyles.colors.dark
   }
})
