import React from 'react';
import { Formik } from 'formik';

function Form({ children, initialValues, onSubmit, validationSchema }) {
   return (
      <Formik
         initialValues={initialValues}
         onSubmit={onSubmit}
         validationSchema={validationSchema}>
         { () => (
            <React.Fragment>{children}</React.Fragment>
         )}
      </Formik>
   );
}

export default Form;