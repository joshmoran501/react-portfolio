import React from "react";

const styles = {
  contactStyles: {
    listStyleType: "none",
  },
};

export default function Contact() {
  return (
    <div>
      <h2>Contact Page Under Construction!</h2>
      <p>In the meantime, please contact me at:</p>
      <ul style={styles.contactStyles}>
        <li>
          email:&nbsp;
          <a
            href="mailto:josh.moran501@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            josh.moran501@gmail.com
          </a>
        </li>
        <li>
          GitHub:&nbsp;
          <a
            href="https://github.com/joshmoran501"
            target="_blank"
            rel="noopener noreferrer"
          >
            joshmoran501
          </a>
        </li>
      </ul>
    </div>
  );
}
