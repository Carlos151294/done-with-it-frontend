import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { Form, FormField, FormPicker, FormImagePicker, SubmitButton } from '../components/forms';
import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listings';
// import AppFormPicker from '../components/forms/AppFormPicker';

const validationSchema = Yup.object().shape({
   title: Yup.string().required().min(1).label('Title'),
   price: Yup.number().required().min(1).max(10000).label("Price"),
   category: Yup.string().required().nullable().label("Category"),
   description: Yup.string().label("Description"),
   imageList: Yup.array().min(1, "Please select at least one image").of(Yup.string())
});

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

const imageUrisList = [
   'file:/data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FDoneWithIt-75972a8a-27f7-477d-97ba-b56bb197c1fd/ImagePicker/6575f3cb-aa15-4f5a-97ed-e7e3737d2e50.jpg',
   'file:/data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FDoneWithIt-75972a8a-27f7-477d-97ba-b56bb197c1fd/ImagePicker/ba3f35f6-e28a-4d08-a635-bd3ee7f27454.jpg'
];

function RegisterScreen() {
   const location = useLocation();

   const handleSubmit = async (listing) => {
      const result = await listingsApi.addListing({ ...listing, location });
      if (!result.ok) return alert('Could not save the listing');
      alert('Success');
   };

   return (
      <Screen style={styles.container}>
         <Form 
            initialValues={{imageList: [], title: '', price: '', category: null, description: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}>
            <FormImagePicker name="imageList" />
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