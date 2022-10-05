import React from "react";
import ResumePDF from "../../assets/documents/Joshua-Moran.pdf";

// const styles = {
//   resumeStyles: {},
// };

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>
        Download my&nbsp;
        <a className="download-btn" href={ResumePDF} download="Joshua-Moran">
          Resume
        </a>
      </p>
      <h1>Front-End Skills</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>React.js</li>
        <li>Responsive Design</li>
        <li>JQuery</li>
        <li>Bootstrap</li>
      </ul>
      <h1>Back-End Skills</h1>
      <ul>
        <li>APIs</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>MySQL, Sequelize</li>
        <li>Express</li>
      </ul>
    </div>
  );
}
