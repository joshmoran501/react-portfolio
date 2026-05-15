import React from "react";
import bioPhoto from "../../assets/images/bio photo.jpg";

const photoStyle = {
  maxWidth: "min(40%, 280px)",
  height: "auto",
};

export default function About() {
  return (
    <div className="row about-section">
      <div className="col-lg-12 pt-4 pt-lg-0">
        <h2>About Me</h2>
        <img
          style={photoStyle}
          src={bioPhoto}
          alt="Joshua Moran"
          className="float-md-end ms-md-3 mb-3 about-photo"
        />

        <p className="about-prose">
          Hello, my name is Joshua Moran. I am a software developer with full-stack
          experience building and deploying scalable applications, including a
          Laravel, React, and MySQL SaaS product in an Agile environment. I use
          AI-assisted tools across the development lifecycle to move faster while
          keeping code quality high, and I am comfortable troubleshooting and
          resolving issues in production. I am also developing an Android application
          that is currently in alpha testing, from design through deployment.
        </p>
        <p className="about-prose">
          My background is unusual for tech on paper: I hold a Master of Research
          in Primate Biology, Behavior, and Conservation from Roehampton University and
          a Bachelor of Science in Neuroscience and Behavioral Biology from Emory
          University. I am completing an Associate of Science in Computer Science at
          Metropolitan Community College. Research and instruction taught me
          rigorous data analysis, clear communication, and how to collaborate with
          diverse teams—skills I apply every day in software delivery.
        </p>
        <p className="about-prose">
          Outside of work, I am a huge Star Wars fan and have collected memorabilia
          since I was young. I enjoy shooters and strategy games, especially the
          social side of Destiny 2. I still care deeply about primates and science
          education from my earlier career in primate behavior research.
        </p>
      </div>
    </div>
  );
}
