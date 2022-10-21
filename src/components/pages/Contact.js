import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useFormik, FormikProvider, useField, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import messageSchema from "../../utils/messageSchema";
import { Button } from "react-bootstrap";
import ContactForm from "../Form";

const styles = {
  contactStyles: {
    listStyleType: "none",
  },
};

const Contact = styled.div`
  margin-left: 2%;
  margin-right: 2%;
`;

// const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
//   const [field, meta] = useField(props);

//   const [didFocus, setDidFocus] = useState(false);
//   const handleFocus = () => setDidFocus(true);
//   const showFeedback =
//     (!didFocus && field.value.trim().length > 2) || meta.touched;

//   return (
//     <div
//       className={`${showFeedback ? (meta.error ? "invalid" : "valid") : ""}`}
//     >
//       <textarea {...props} {...field} onFocus={handleFocus} />
//       <div>{helpText}</div>
//     </div>
//   );
// };

function RenderContact() {
  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (e) => {
  //   const form = e.currentTarget;
  //   if (form.checkValidity() === false) {
  //     e.preventDefault();
  //     e.stopPropogation();
  //   }
  //   setValidated(true);
  // };
  return (
    <>
      <h2>
        Contact Page Under Construction! Please email me at &nbsp;
        <a href="josh.moran501@gmail.com">josh.moran501@gmail.com</a>
      </h2>
      <ContactForm></ContactForm>
    </>
    // <Contact>
    //   <Form noValidate validated={validated} onSubmit={handleSubmit}>
    //     <Form.Group>
    //       <Form.Label>Email address:</Form.Label>
    //       <Form.Control
    //         required
    //         type="email"
    //         placeholder="Enter email"
    //       ></Form.Control>
    //       <Form.Control.Feedback type="invalid">
    //         Please use a valid email
    //       </Form.Control.Feedback>
    //     </Form.Group>
    //     <Form.Group>
    //       <Form.Label>Your message:</Form.Label>
    //       <Form.Control required as="textarea"></Form.Control>
    //     </Form.Group>
    //     <Button type="submit">Submit</Button>
    //   </Form>
    // </Contact>
    // const [characterCount, setCharacterCount] = useState(0);
    // const formik = useFormik({
    //   initialValues: {
    //     email: "",
    //     message: "",
    //   },
    //   onSubmit: async (values) => {
    //     await console.log("hi");
    //   },
    //   validationSchema: { messageSchema },
    // });
    // return (
    //   <Contact>
    //     <h2>Contact Page Under Construction!</h2>
    //     <FormikProvider value={formik}>
    //       <Form>
    //         <label htmlFor="email:">Email</label>
    //         <Field
    //           label="email"
    //           id="email"
    //           name="email"
    //           type="email"
    //           helpText="please enter a valid email"
    //         ></Field>
    //         <TextInputLiveFeedback
    //           label="Your message:"
    //           name="message"
    //           as="textarea"
    //           onChange={(e) => setCharacterCount(e.target.value.length)}
    //           helpText={`${1000 - characterCount} characters remaining`}
    //         ></TextInputLiveFeedback>
    //       </Form>
    //     </FormikProvider>
    //   </Contact>
  );
}

export default RenderContact;
