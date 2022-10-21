import React from "react";
import { Field, ErrorMessage } from "formik";

import React from "react";

function Textarea() {
  const { label, name, ...rest } = props;
    return <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field as='textarea' id={name} name={name} {...rest}></Field>
        <ErrorMessage name={name} component={textError}/>
    </div>;
}

export default Textarea;
