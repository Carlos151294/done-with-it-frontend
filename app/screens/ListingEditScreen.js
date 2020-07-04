import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { Form, FormField, FormPicker, SubmitButton } from '../components/forms';
// import AppFormPicker from '../components/forms/AppFormPicker';

const validationSchema = Yup.object().shape({
   title: Yup.string().required().min(1).label('Title'),
   price: Yup.number().required().min(1).max(10000).label("Price"),
   category: Yup.string().required().nullable().label("Category"),
   description: Yup.string().label("Description")
});

const categories = [
   { label: "Forniture", value: 1 },
   { label: "Cars", value: 2 },
   { label: "Cameras", value: 3 },
   { label: "Games", value: 4 },
   { label: "Clothing", value: 5 },
   { label: "Sports", value: 6 },
   { label: "Movies & Music", value: 7 },
   { label: "Books", value: 8 }
   // { label: "Ohter", value: 9 }
];

const categoriesLastEdition = [
   { label: "Forniture", value: 1, icon: 'floor-lamp', color: '#fc5c65' },
   { label: "Cars", value: 2, icon: 'car', color: '#fd9644' },
   { label: "Cameras", value: 3, icon: 'camera', color: '#fed330' },
   { label: "Games", value: 4, icon: 'cards', color: '#26de81' },
   { label: "Clothing", value: 5, icon: 'shoe-heel', color: '#2bcbba' },
   { label: "Sports", value: 6, icon: 'basketball', color: '#45aaf2' },
   { label: "Movies & Music", value: 7, icon: 'headphones', color: '#4b7bec' },
   { label: "Books", value: 8, icon: 'book-open-variant', color: '#C24EF9' },
   { label: "Ohter", value: 9, icon: 'bookmark-outline', color: '#A9A9A9' }
 ];

function RegisterScreen() {
   return (
      <Screen style={styles.container}>
         <Form 
            initialValues={{title: '', price: '', category: null, description: ''}}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}>
            <FormField 
              maxLength={255}
              name="title"
              placeholder="Title"/>
            <FormField 
               keyboardType="numeric"
               maxLength={8}
               name="price"
               placeholder="Price"
               width="30%"/>
            <FormPicker 
               iconsMode
               items={categoriesLastEdition} 
               name="category"
               placeholder="Category"
               width="50%"/>
            <FormField 
               maxLength={255}
               multiline
               name="description"
               numberOfLines={3}
               placeholder="Description"/>
            <SubmitButton title="Post"/>
         </Form>
      </Screen>
   );
}

const styles = StyleSheet.create({
   container: {
      padding: 10
   }
})

export default RegisterScreen;