import { useState } from 'react';

const ACCESS_KEY = "49edf7c2-0c83-47fd-9bf9-dd4a88dd0880";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm()
{
    const [result, setResult] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    const isFormValid =
        name.trim().length > 0 &&
        EMAIL_REGEX.test(email.trim()) &&
        message.trim().length > 0;

    const handleNameChange = (event) =>
    {
        setName(event.target.value);
        if (nameError) setNameError("");
    };

    const handleNameBlur = (event) =>
    {
        setNameError(event.target.value.trim() === "" ? "Name is required." : "");
    };

    const handleEmailChange = (event) =>
    {
        setEmail(event.target.value);
        if (emailError) setEmailError("");
    };

    const handleEmailBlur = (event) =>
    {
        const value = event.target.value.trim();
        if (value.length === 0)
        {
            setEmailError("Email is required.");
        }
        else if (event.target.validity.typeMismatch)
        {
            setEmailError("Please enter a valid email address.");
        }
        else
        {
            setEmailError("");
        }
    };

    const handleMessageChange = (event) =>
    {
        setMessage(event.target.value);
        if (messageError) setMessageError("");
    };

    const handleMessageBlur = (event) =>
    {
        setMessageError(event.target.value.trim() === "" ? "Message is required." : "");
    };

    const onSubmit = async (event) =>
    {
        event.preventDefault();
        if (submitting || !isFormValid) return;
        setSubmitting(true);
        setResult("");

        const formData = new FormData(event.target);
        formData.append("access_key", ACCESS_KEY);

        try
        {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success)
            {
                setResult("success");
                event.target.reset();
                setName("");
                setEmail("");
                setMessage("");
                setNameError("");
                setEmailError("");
                setMessageError("");
            }
            else
            {
                setResult(data.message || "error");
            }
        }
        catch (err)
        {
            setResult("network");
        }
        finally
        {
            setSubmitting(false);
        }
    };

    return (
        <form className="contact-form" onSubmit={onSubmit}>
            {/* Web3Forms metadata - shows up nicely in the email */}
            <input type="hidden" name="subject" value="New contact from joshuamoranisadev.com" />
            <input type="hidden" name="from_name" value="Portfolio contact form" />

            {/* Honeypot - humans leave this blank; bots fill it and get rejected */}
            <input
                type="checkbox"
                name="botcheck"
                className="contact-form-honeypot"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
            />

            <div className="contact-form-field">
                <label className="contact-form-label" htmlFor="contact-name">Name</label>
                <input
                    id="contact-name"
                    className={`contact-form-input ${nameError ? "contact-form-input-error" : ""}`}
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={handleNameChange}
                    onBlur={handleNameBlur}
                    aria-invalid={nameError ? "true" : "false"}
                    aria-describedby={nameError ? "contact-name-error" : undefined}
                    required
                />
                {nameError && (
                    <p id="contact-name-error" className="contact-form-field-error" role="alert">
                        {nameError}
                    </p>
                )}
            </div>

            <div className="contact-form-field">
                <label className="contact-form-label" htmlFor="contact-email">Email</label>
                <input
                    id="contact-email"
                    className={`contact-form-input ${emailError ? "contact-form-input-error" : ""}`}
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    aria-invalid={emailError ? "true" : "false"}
                    aria-describedby={emailError ? "contact-email-error" : undefined}
                    required
                />
                {emailError && (
                    <p id="contact-email-error" className="contact-form-field-error" role="alert">
                        {emailError}
                    </p>
                )}
            </div>

            <div className="contact-form-field">
                <label className="contact-form-label" htmlFor="contact-message">Message</label>
                <textarea
                    id="contact-message"
                    className={`contact-form-textarea ${messageError ? "contact-form-input-error" : ""}`}
                    name="message"
                    rows={6}
                    value={message}
                    onChange={handleMessageChange}
                    onBlur={handleMessageBlur}
                    aria-invalid={messageError ? "true" : "false"}
                    aria-describedby={messageError ? "contact-message-error" : undefined}
                    required
                />
                {messageError && (
                    <p id="contact-message-error" className="contact-form-field-error" role="alert">
                        {messageError}
                    </p>
                )}
            </div>

            <button
                type="submit"
                className="contact-form-submit"
                disabled={submitting || !isFormValid}
            >
                {submitting ? "Sending..." : "Send message"}
            </button>

            {result === "success" && (
                <p className="contact-form-status contact-form-status-success" role="status">
                    Thanks - your message is on its way. I'll reply soon.
                </p>
            )}
            {result && result !== "success" && (
                <p className="contact-form-status contact-form-status-error" role="alert">
                    {result === "network"
                        ? "Network error. Please check your connection and try again."
                        : result === "error"
                        ? "Submission failed. Please try again."
                        : result}
                </p>
            )}
        </form>
    );
}
