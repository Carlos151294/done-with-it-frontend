import React from 'react';
import { useFormikContext } from 'formik';

import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, ...otherProps }) {
   const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext();
   return (
      <React.Fragment>
         <TextInput 
            onBlur={() => setFieldTouched(name)}
            onChangeText={text => setFieldValue(name, text)}
            value={values[name]}
            {...otherProps}
         />
         <ErrorMessage error={errors[name]} visible={touched[name]}/>
      </React.Fragment>
   );
}

export default AppFormField;