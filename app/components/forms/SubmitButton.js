import React from 'react';
import { useFormikContext } from 'formik';

import CustomButton from '../CustomButton';

function SubmitButton({ ...props }) {
   const { handleSubmit } = useFormikContext();
   
   return (
      <CustomButton {...props} onPress={handleSubmit}/>
   );
}

export default SubmitButton;