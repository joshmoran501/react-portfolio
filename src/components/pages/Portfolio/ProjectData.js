import Weather from "../../../assets/images/weather.png";
import MajorTalent from "../../../assets/images/major-talent.png";
import KaizenDesign from "../../../assets/images/kaizen-design.png";
import AICybersecurity from "../../../assets/images/ai-cybersecurity.png";
import AUP from "../../../assets/images/aup.png";
import ChimpanzeeSubgroups from "../../../assets/images/chimpanzee-grooming.png";

/**
 * Portfolio entries:
 * - `src` (optional): public live URL, or an internal route path starting with "/".
 *   External URLs open in a new tab; internal paths route via react-router. Omit or null if there is no demo.
 * - `source` (optional): public repo URL. Omit or null if code is proprietary or not shared.
 * - `demoLabel` (optional): label for the demo button (default: "Live demo"). Use e.g. "Live site" or "App store" when it fits better.
 * - `category` (required): one of `PORTFOLIO_CATEGORIES` below.
 */
export const PORTFOLIO_CATEGORIES = [
  "Software Development",
  "Cybersecurity",
  "Data Science",
];

const ProjectData = [
  {
    id: "Chimpanzee-Subgroups",
    category: "Data Science",
    img: ChimpanzeeSubgroups,
    name: "Chimpanzee Subgroups",
    stack: ["<Data Analysis/>", "<Data Visualization/>", "<R/>"],
    src: "/portfolio/chimpanzee-subgroups",
    demoLabel: "View document",
    shortDescription: "Statistical analysis of chimpanzee subgroup behavior",
    description:
      "A data science project analyzing chimpanzee subgroup composition and behavior using R.",
  },
  {
    id: "Authorized-Use-Policy",
    category: "Cybersecurity",
    img: AUP,
    name: "Sample Authorized Use Policy",
    stack: ["<Cybersecurity/>", "<Governance/>", "<Policy/>"],
    src: "/portfolio/authorized-use-policy",
    demoLabel: "View document",
    shortDescription: "Sample acceptable/authorized use policy",
    description:
      "A sample authorized use policy outlining acceptable use of organizational systems, data, and network resources.",
  },
  {
    id: "AI-Cybersecurity",
    category: "Cybersecurity",
    img: AICybersecurity,
    name: "Implications of AI in Cybersecurity",
    stack: ["<AI/>", "<Cybersecurity/>", "<Research/>"],
    src: "/portfolio/ai-cybersecurity",
    demoLabel: "View document",
    shortDescription: "Research paper on AI's role in modern cybersecurity",
    description:
      "A written analysis exploring how artificial intelligence is reshaping cybersecurity - covering both defensive applications and emerging threat vectors.",
  },
  {
    id: "Kaizen-Design",
    category: "Software Development",
    img: KaizenDesign,
    name: "Kaizen Design",
    stack: [
      "<React.js/>",
      "<TypeScript/>",
      "<REST APIs/>",
      "<Laravel/>",
      "<MySQL/>",
      "<PHP/>",
      "<SaaS/>",
      "<Agile/>",
    ],
    src: "https://www.thekaizendesign.com/",
    demoLabel: "Live site",
    shortDescription: "Healthcare construction standards platform",
    description:
      "Kaizen Design is a healthcare technology platform that helps health systems collect, version, and enforce building design standards across facilities to reduce waste and accelerate project delivery.",
  },
  {
    id: "Major-Talent",
    category: "Software Development",
    img: MajorTalent,
    name: "Major Talent",
    stack: [
      "<JavaScript/>",
      "<REST APIs/>",
      "<MySQL/>",
      "<PHP/>",
      "<SaaS/>",
      "<HTML5/>",
      "<CSS3/>",
      "<jQuery/>"
    ],
    src: "https://majortalent.com/",
    demoLabel: "Live site",
    shortDescription: "Veteran-focused career platform",
    description:
      "Major Talent is a veteran-owned platform that uses AI to translate military credentials into civilian career language, connecting transitioning service members and military spouses with employers.",
  },
  /* {
    id: "Dungeons-and-Devs-React",
    category: "Software Development",
    img: DungeonsAndDevsReact,
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
      "Dungeons & Devs is a card based battle game that utilizes Node.js, Express.js, MySQL, and Sequelize",
  },
  {
    id: "Dungeons-and-Devs",
    category: "Software Development",
    img: DungeonsAndDevs,
    name: "Dungeons & Devs",
    stack: ["<Node.js/>", "<Express.js/>", "<MySQL/>"],
    src: "https://dungeons-devs.herokuapp.com/",
    source: "https://github.com/wtguenthner/Dungeons-Devs",
    shortDescription: "MySQL, Node.js, and Express.js Card-Based Game",
    description:
      "Dungeons & Devs is a card based battle game that utilizes Node.js, Express.js, MySQL, and Sequelize",
  }, 
  {
    id: "JATE",
    category: "Cybersecurity",
    img: JATE,
    name: "JATE",
    stack: ["<Node.js/>", "<Express.js/>", "<Webpack/>"],
    src: "https://josh-moran-text-editor.herokuapp.com/",
    source: "https://github.com/joshmoran501/text-editor",
    shortDescription: "Text Editor Progressive Web App",
    description:
      "JATE is a text editor with JavaScript syntax highlighting that can be used offline.",
  },*/
  {
    id: "Weather",
    category: "Software Development",
    img: Weather,
    name: "Weather",
    stack: [
      "<JavaScript/>",
      "<REST APIs/>",
      "<HTML5/>",
      "<CSS3/>",
      "<jQuery/>",
    ],
    src: "https://joshmoran501.github.io/weather-app/",
    source: "https://github.com/joshmoran501/weather-app",
    shortDescription: "OpenWeather API app",
    description:
      "Weather uses OpenWeather API to generate current weather and a 5 day forecast for searched city",
  },
];

export default ProjectData;
