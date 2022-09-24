import React from "react";
import bioPhoto from "../../assets/images/bio photo.jpg";

const styles = {
  photoStyle: {
    display: "flex",
    height: "fit-content",
    padding: "2em",
  },
};

export default function About() {
  return (
    <div className="row">
      <div className="col-8">
        <h2>About Me</h2>
        <p>
          Hello, my name is Joshua Moran. I am a MERN stack developer in the
          Georgia Tech Coding Boot Camp. I am proficient in JavaScript, HTML and
          CSS, front-end, database, and server-side developments, as well as
          quality assurance and deployment.
        </p>
        <p>
          I have a Master’s in Primate Behavior and undergraduate degrees in
          neuroscience and biology, not exactly tech-oriented degrees, right?
          Many of the skills I learned are applicable, however, including
          problem-solving, analyzing data, and effective communication skills.
        </p>
        <p>
          Outside of work, I am a huge Star Wars fan! I have been collecting
          memorabilia since I was 3 years old and travel around the country to
          attend Star Wars conventions! Also, I am an avid gamer. I play mostly
          shooters and strategy games. Destiny 2 is my favorite game, mostly for
          the social aspects. I have made many great friends through Destiny!
          Finally, I am a big animal lover! My education and previous
          positionshave all been centered around primate behavior, and while I
          no longer am in the field, I still love my primates and love educating
          people about them!
        </p>
      </div>
      <img style={styles.photoStyle} src={bioPhoto} className="col-4"></img>
    </div>
  );
}
