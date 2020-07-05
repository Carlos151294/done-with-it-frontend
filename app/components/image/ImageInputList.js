import React, { useRef } from 'react';
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';

import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
   const scrollView = useRef();

   return (
      <View>
         <ScrollView horizontal ref={scrollView} onContentSizeChange={() => scrollView.current.scrollToEnd()}>
            <View style={styles.container}>
               {
                  imageUris.map(uri => (
                     <View key={uri} style={styles.image}>
                        <ImageInput imageUri={uri} onSelectImage={uri => onRemoveImage(uri)} />
                     </View>
                  ))
               }
               <ImageInput onSelectImage={uri => onAddImage(uri)} />
            </View>
         </ScrollView>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row'
   },
   image: {
      margin: 5
   }
});

export default ImageInputList;