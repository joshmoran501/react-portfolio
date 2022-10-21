import React, { useState } from "react";
import styled from "styled-components";
const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/f84e3960-516b-11ed-9f58-f3ab7f1a635a";

const InputLabel = styled.h5`
  display: flex;
  justify-content: center;
  font-size: 1.75rem;
  font-family: darkmode-on, sans-serif;
  font-weight: 100;
  font-style: normal;
  margin: 0.8rem auto;
`;
const Input = styled.input`
  display: flex;
  justify-content: center;
  border: 1px solid #11526c;
  border-radius: 10px;
  background-color: #dfebe8;
  width: 60%;
  font-size: 1.25rem;
  padding-block: 0.5rem;
  margin: 0 auto 0 auto;
`;
const TextArea = styled.textarea`
  display: flex;
  justify-content: center;
  border: 1px solid #11526c;
  border-radius: 10px;
  background-color: #dfebe8;
  width: 60%;
  font-size: 1.25rem;
  padding-block: 0.5rem;
  margin: 0 auto 0 auto;
`;
const Submit = styled.input`
  display: flex;
  justify-content: center;
  border: 2px solid #11526c;
  border-radius: 10px;
  background-color: #11526c;
  color: #dfebe8;
  width: 30%;
  font-size: 1.5rem;
  padding-block: 0.5rem;
  margin: 1rem auto;
`;

const FormWrapper = styled.form`
  overflowx: hidden;
`;
const logoStyle = {
  margin: "auto 2rem",
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleBusinessChange = (event) => {
    setBusiness(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = (event) => {
    const formData = [name, email, business, message];
    return console.log(formData);
  };

  return (
    <FormWrapper action={FORM_ENDPOINT} method="POST" target="_blank">
      <InputLabel>Name:</InputLabel>
      <Input
        name="name"
        type="text"
        defaultValue={name}
        onChange={handleNameChange}
      ></Input>
      <InputLabel>Email:</InputLabel>
      <Input
        name="email"
        type="email"
        defaultValue={email}
        onChange={handleEmailChange}
      ></Input>
      <InputLabel>Business:</InputLabel>
      <Input
        name="business"
        type="text"
        defaultValue={business}
        onChange={handleBusinessChange}
      ></Input>
      <InputLabel>Message:</InputLabel>
      <TextArea
        name="message"
        type="text"
        defaultValue={message}
        onChange={handleMessageChange}
      ></TextArea>
      <Submit type="submit" value="Submit" onClick={handleSubmit}></Submit>
    </FormWrapper>
  );
};

export default ContactForm;
