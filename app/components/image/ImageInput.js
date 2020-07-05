import React, { useEffect } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Image, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import defaultStyles from '../../config/styles';

function ImageInput({ imageUri, onSelectImage }) {
   useEffect(() => {
      requestCameraPermission();
   }, []);
   
   const requestCameraPermission = async () => {
      const { granted } = await ImagePicker.requestCameraPermissionsAsync();
      if (!granted) {
         alert('You need to enable permission to access the library.')
      }
   };

   const selectImage = async () => { 
      if (imageUri) {
         Alert.alert('Delete', 'Are you sure you want to delete this image?', [
            { text: 'Yes', onPress: () => onSelectImage(imageUri)},
            { text: 'No' }
         ]);
         return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.Images,
         quality: 0.5
      });

      if (!result.cancelled) {
         onSelectImage(result.uri);
      }
   };

   return (
      <TouchableWithoutFeedback onPress={selectImage}>
         <View style={styles.container}>
            { imageUri && <Image style={styles.image} source={{ uri: imageUri }}/>}
            { !imageUri && <MaterialCommunityIcons name="camera" size={40} color={defaultStyles.colors.medium} />}
         </View>
      </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
   container: {
      width: 80,
      height: 80,
      borderRadius: 20,
      overflow: 'hidden',
      backgroundColor: defaultStyles.colors.light,
      justifyContent: 'center',
      alignItems: 'center'
   },
   image: {
      width: '100%',
      height: '100%'
   }
});

export default ImageInput;