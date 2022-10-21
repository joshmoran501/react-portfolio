import DungeonsAndDevs from "../../../assets/images/DungeonsNDevs.png";
import Weather from "../../../assets/images/weather.png";
import IMDA from "../../../assets/images/spotify.png";
import JATE from "../../../assets/images/JATE.png";

const ProjectData = [
  {
    id: "Dungeons-and-Devs-React",
    img: DungeonsAndDevs,
    name: "Dungeons & Devs React",
    stack: [
      "<MERN/>",
      "<MongoDB/>",
      "<Express.js/>",
      "<React.js/>",
      "<Node.js/>",
    ],
    src: "https://dungeons-n-devs.herokuapp.com/",
    source: "https://github.com/hackpres/DnDevs_React",
    shortDescription: "MERN Stack card game",
    description:
      "Dungeons $ Devs is a card based battle game that utilizes Node.js, Express.js, MySQL, and Sequelize",
  },
  {
    id: "Dungeons-and-Devs",
    img: DungeonsAndDevs,
    name: "Dungeons & Devs",
    stack: ["<Node.js/>", "<Express.js/>", "<MySQL/>"],
    src: "https://dungeons-devs.herokuapp.com/",
    source: "https://github.com/wtguenthner/Dungeons-Devs",
    shortDescription: "MySQL, Node.js, and Express.js Card-Based Game",
    description:
      "Dungeons $ Devs is a card based battle game that utilizes Node.js, Express.js, MySQL, and Sequelize",
  },
  {
    id: "JATE",
    img: JATE,
    name: "JATE",
    stack: ["<Node.js/>", "<Express.js/>", "<Webpack/>"],
    src: "https://josh-moran-text-editor.herokuapp.com/",
    source: "https://github.com/joshmoran501/text-editor",
    shortDescription: "Text Editor Progressive Web App",
    description:
      "JATE is a text editor with JavaScript syntax highlighting that can be used offline.",
  },
  {
    id: "Weather",
    img: Weather,
    name: "Weather",
    stack: [
      "<RESTful API/>",
      "<Javascript/>",
      "<JQuery/>",
      "<CSS3/>",
      "<HTML5/>",
    ],
    src: "https://joshmoran501.github.io/weather-app/",
    source: "https://github.com/joshmoran501/weather-app",
    shortDescription: "OpenWeather API app",
    description:
      "Weather uses OpenWeather API to generate current weather and a 5 day forecast for searched city",
  },
  {
    id: "IMDA",
    img: IMDA,
    name: "IMDA",
    stack: [
      "<RESTful API/>",
      "<Javascript/>",
      "<JQuery/>",
      "<CSS3/>",
      "<HTML5/>",
    ],
    src: "https://sophiadelarosa.github.io/group-project/",
    source: "https://github.com/sophiadelarosa/group-project",
    shortDescription: "Spotify API app",
    description:
      "IMDA utilizes the Spotify API to search for songs based on genre, as well as saving favorite songs",
  },
];

export default ProjectData;
