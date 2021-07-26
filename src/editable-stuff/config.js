// import img from "../editable-stuff/vishesh.png";
// import resume from "../editable-stuff/resume.pdf";

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Vishesh",
  middleName: "",
  lastName: "Khanna",
  message: " Passionate about changing the world with technology. ",
  // message: " | Engineer | Programmer | Web Developer | Tech Enthusiast | Photographer | Athlete | ",

  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/visheshkhanna5/",
    },
    {
      image: "fa-github",
      url: "https://github.com/visheshkhanna",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/vishesh_khanna5/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/khannavishesh5/",
    },

    // {
    //   image: "fa-twitter",
    //   url: "",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use import at the top of the page to import here,
//      i.e: import img from "../editable-stuff/vishesh.png";,
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: resume,
//         resume: "https://drive.google.com/file/d/1E0dbfjWi3ZVS92iouiYshmRD2Wv0a6Je/view?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: "",
  imageSize: 375,
  message:
    "Hi, My name is Vishesh Khanna. I’m a final year student from Maharaja Agrasen Institue of Technology with a degree in Computer Science Engineering. I'm a Developer & Tech Enthusiast from New Delhi, India. I aim to make a difference through my creative thinking, and my goal is to pursue this passion within the field of software engineering. I am a hard working, dedicated and organised person who is always willing to learn and expand my horizon. My hobbies include programming, photography, gardening and exercising.",
  resume: "https://drive.google.com/file/d/1E0dbfjWi3ZVS92iouiYshmRD2Wv0a6Je/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "visheshkhanna", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["PersonalPortfolio", "BankingSystem", "iPod-React", "MusicPlayerProject", "TODO-LIST-APP", "Resume-Project"],

};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: "",
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: "",
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "C/C++", value: 85 },
    { name: "Python", value: 80 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 85 },
    { name: "HTML/CSS", value: 90 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "vishesh.khanna5@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
