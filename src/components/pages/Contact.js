import React from "react";
import ContactForm from "../Form";

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

function RenderContact()
{
  return (
    <>
      <h3>
        Please contact me at&nbsp;
        <a
          href="mailto:josh.moran501@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          josh.moran501@gmail.com
        </a>
        &nbsp;or in the form below:
      </h3>
      <ContactForm></ContactForm>
    </>
  );
}

export default RenderContact;
