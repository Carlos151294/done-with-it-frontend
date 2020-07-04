import React, { useState } from 'react';
import { View, StyleSheet, Modal, Button, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import Text from './Text';
import Screen from './Screen';
import PickerItem from './PickerItem';
import Icon from './Icon';

export default function Picker({ icon, iconsMode, items, selectedItem, onSelectItem, placeholder, width }) {
   const [modalVisible, setModalVisible] = useState(false);

   return (
      <React.Fragment>
         <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={[styles.container, { width }]}>
               { icon &&  <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.medium} /> }
               { selectedItem && <Text style={styles.text}>{selectedItem.label}</Text> }
               { !selectedItem && <Text style={styles.placeholder}>{placeholder}</Text> }
               <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
            </View>
         </TouchableWithoutFeedback>
         <Modal visible={modalVisible} animationType="slide">
            <Screen>
               <Button title="Close" onPress={() => setModalVisible(false)} />
               { 
                  iconsMode &&
                  <FlatList 
                     data={items}
                     keyExtractor={item => item.value.toString()}
                     numColumns={3}
                     renderItem={({ item }) => (
                        <TouchableOpacity 
                           style={styles.itemContainer} 
                           onPress={() =>{
                              setModalVisible(false);
                              onSelectItem(item);
                           }}>
                           <Icon name={item.icon} size={80} backgroundColor={item.color} color="white" />
                           <PickerItem 
                              style={styles.pickerItem}
                              label={item.label}/>
                        </TouchableOpacity>
                     )}
                  />
               }
               { 
                  !iconsMode &&
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
               }
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
   itemContainer: {
      paddingTop: 20,
      width: '33.33%',
      alignItems: 'center'
   },
   pickerItem: {
      paddingVertical: 10,
      textAlign: 'center'
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
