import React, { useState } from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/f84e3960-516b-11ed-9f58-f3ab7f1a635a";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      className="contact-form"
      action={FORM_ENDPOINT}
      method="POST"
      target="_blank"
    >
      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          className="contact-form-input"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
      </div>

      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          className="contact-form-input"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
      </div>

      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="contact-business">
          Business
        </label>
        <input
          id="contact-business"
          className="contact-form-input"
          name="business"
          type="text"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          autoComplete="organization"
        />
      </div>

      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          className="contact-form-textarea"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          required
        />
      </div>

      <button type="submit" className="contact-form-submit">
        Send message
      </button>
    </form>
  );
}
