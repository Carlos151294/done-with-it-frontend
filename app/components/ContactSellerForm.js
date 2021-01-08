import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import { Form, FormField, SubmitButton } from './forms';
import messagesApi from '../api/messages';
import { Notifications } from 'expo';

const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(1).label('Message'),
 });

export default ({ listing }) => {
    const handleSubmit = async ({ message }, { resetForm }) => {
        try {
            const result = await messagesApi.send(message, listing.id);

            if (!result.ok) {
                console.log('Error', result);
                return Alert.alert('Error', 'Could not send the message');
            };

            resetForm();

            Notifications.presentLocalNotificationAsync({
                title: 'Awesome!',
                body: 'Your message was sent to the seller.',
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Form 
                initialValues={{ message: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>
                <FormField 
                    maxLength={255}
                    name="message"
                    placeholder="Message..."/>
                <SubmitButton title="Contact Seller"/>
            </Form>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingBottom: 50
    }
});