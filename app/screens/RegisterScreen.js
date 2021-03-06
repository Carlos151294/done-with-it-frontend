import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { ErrorMessage, Form, FormField, SubmitButton } from '../components/forms';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
import ActivityIndicator from '../components/ActivityIndicator';
import logger from '../utility/logger';

const validationSchema = Yup.object().shape({
   name: Yup.string().required().label('Name'),
   email: Yup.string().required().email().label("Email"),
   password: Yup.string().required().min(4).label("Password")
});

function RegisterScreen() {
   const registerApi = useApi(authApi.register);
   const loginApi = useApi(authApi.login);
   const { login } = useAuth();
   const [registerFailed, setRegisterFailed] = useState({ status: false, message: '' });

   const handleRegister = async ({ name, email, password }) => {
      try {
         const result = await registerApi.request(name, email, password);
         
         if (!result.ok) return setRegisterFailed({ status: true, message: result.data ? result.data.error : result.problem});
         setRegisterFailed(false); 

         const { data: token } = await loginApi.request(email, password);
         login(token);
      } catch (error) {
         logger.log(error);
      }
   };

   return (
      <>
         <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
         <Screen style={styles.container}>
            <Form 
               initialValues={{name: '', email: '', password: ''}}
               onSubmit={handleRegister}
               validationSchema={validationSchema}>
               <ErrorMessage error={registerFailed.message} visible={registerFailed.status} />
               <FormField 
               autoCapitalize="none"
               autoCorrect={false}
               icon="account"
               name="name"
               placeholder="Name"/>
               <FormField 
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="email"
                  keyboardType="email-address"
                  name="email"
                  placeholder="Email"
                  textContentType="emailAddress"/>
               <FormField 
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  name="password"
                  placeholder="Password"
                  secureTextEntry
                  textContentType="password"/>
               <SubmitButton title="Register"/>
            </Form>
         </Screen>
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      padding: 10
   }
})

export default RegisterScreen;