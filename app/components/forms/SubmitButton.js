import React from 'react';
import { useFormikContext } from 'formik';

import Button from '../Button';

function SubmitButton({ ...props }) {
   const { handleSubmit } = useFormikContext();
   
   return (
      <Button {...props} onPress={handleSubmit}/>
   );
}

export default SubmitButton;