import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import ImageInputList from '../image/ImageInputList';

function FormImagePicker({ name }) {
   const { errors, setFieldValue, touched, values } = useFormikContext();

   const handleAddImage = selectedUri => {
      setFieldValue(name, [...values[name], selectedUri])
   };

   const handleRemoveImage = selectedUri => {
      setFieldValue(name, values[name].filter(uri => uri !== selectedUri));
   };

   return (
      <React.Fragment>
         <View style={styles.container}>
            <ImageInputList 
               imageUris={values[name]} 
               onAddImage={handleAddImage}
               onRemoveImage={handleRemoveImage} />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
         </View>
      </React.Fragment>
   );
}

const styles = StyleSheet.create({
   container: {}
});

export default FormImagePicker;