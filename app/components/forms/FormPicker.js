import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import Picker from '../Picker';

function FormPicker({ iconsMode, items, name, placeholder, width }) {
   const { errors, setFieldValue, touched, values } = useFormikContext();
   return (
      <React.Fragment>
         <Picker
            iconsMode={iconsMode}
            items={items}
            onSelectItem={item => setFieldValue(name, item)} 
            placeholder={placeholder}
            selectedItem={values[name]}
            width={width}
         />
         <ErrorMessage error={errors[name]} visible={touched[name]}/>
      </React.Fragment>
   );
}

export default FormPicker;