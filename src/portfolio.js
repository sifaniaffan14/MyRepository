/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sifani Affan",
  title: "Hi all, I'm Affan",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 with experience in building and maintaining websites end-to-end. Skilled in designing, developing, and maintaining server-side API applications using a tech stack that includes PHP, Laravel, JavaScript, Node.js, and other powerful tools and frameworks."
  ),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sifaniaffan14",
  linkedin: "https://www.linkedin.com/in/sifaniaffan/",
  gmail: "sifaniaffan14@gmail.com",
  whatsApp: "https://wa.me/6289696499160",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER EXPLORING ADVANCED TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop and maintain fullstack web applications with robust front-end and back-end integration"
    ),
    emoji("⚡ Design and implement server-side APIs using PHP, Laravel, and Node.js"),
    emoji(
      "⚡ Ensure seamless integration of third-party services like Firebase, AWS, and DigitalOcean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [{
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [{
    schoolName: "University of Muhammadiyah Malang",
    logo: require("./assets/images/umm.png"),
    subHeader: "Bachelor of Science in Informatics",
    duration: "September 2018 - October 2023",
    desc: "Active participant in student organizations and laboratory assistant roles.",
    descBullets: [
      "Member of the Informatics Student Association",
      "Served as an assistant in the Informatics Laboratory",
      "Frequently participated in volunteer activities and event committees on campus"
    ]
  }, ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [{
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [{
      role: "Back-end Developer",
      company: "Sekawan Media",
      companylogo: require("./assets/images/sekawan.png"),
      date: "September 2023 – Present",
      desc: "Design, develop, and maintain server-side applications and APIs.",
      descBullets: [
        "Collaborate with front-end developers to integrate user-facing elements with server-side logic",
        "Troubleshoot and debug issues that arise",
        "Discuss with Lead Engineer and Clients for existing problems or new features"
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Sekawan Media",
      companylogo: require("./assets/images/sekawan.png"),
      date: "December 2022 – February 2023",
      desc: "Developed the East Java Transportation Service Data Lab website system using the Laravel framework.",
      descBullets: [
        "Improved existing features and created new ones for the system",
        "Collaborated with Lead Engineer to address issues and implement new features",
        "Provided bug fixes and maintenance support for the system"
      ]
    },
    {
      role: "Front-end Developer Intern",
      company: "ID Core Indonesia",
      companylogo: require("./assets/images/idcore.png"),
      date: "July 2021 – October 2021",
      desc: "Learned and applied front-end development skills using Vue.JS.",
      descBullets: [
        "Analyzed systems developed within the company",
        "Participated in project scope development meetings with the team",
        "Actively sought challenging projects to enhance programming and service skills"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [{
      image: require("./assets/images/perpus-portofolio.png"),
      projectName: "Sistem Perpustakaan SMP AL-FALAH",
      projectDesc: "In this project, I play the role of a Fullstack Developer from the system requirements analysis phase to the User Acceptance phase. The system was designed for the library of SMP Al-Falah Ketintang Surabaya, featuring core functionalities such as book data search, book data management, and the ability to handle book loan transactions.",
      footerLink: [{
          name: "Laravel",
          // url: "http://saayahealth.com/"
        },
        {
          name: "PHP",
          // url: "http://inovatik.com/"
        },
        {
          name: "Jquery",
        },
        {
          name: "MySQL",
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [{
    //     name: "Visit Website",
    //     url: "http://nextu.se/"
    //   }]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle: "My Certifications",

  achievementsCards: [{
      title: "BNSP Competency Certification",
      subtitle: "Certified Database Administrator by the National Professional Certification Agency (BNSP), demonstrating expertise in database design, management, and optimization.",
      image: require("./assets/images/bnsp.png"),
      imageAlt: "BNSP", 
      footerLink: [{
          name: "Certification",
          url: "https://drive.google.com/file/d/15ET_57PGMKZXi_BCWyigeDYDUf5CYAeN/view?usp=sharing"
        },
      ]
    },
    {
      title: "Path Pengembangan Web (Node.js)",
      subtitle: "Completed the Web Development Path focusing on Node.js at Progate, covering essential skills in building and deploying scalable web applications using Node.js.",
      image: require("./assets/images/progate.png"),
      imageAlt: "Progate",
      footerLink: [{
        name: "Certification",
        url: "https://drive.google.com/file/d/1_JUrg56AExkQWN47TXpw5MT6oH2Tn99q/view?usp=sharing"
      }]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [{
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [{
    title: "Build Actions For Google Assistant",
    subtitle: "Codelab at GDG DevFest Karachi 2019",
    slides_url: "https://bit.ly/saadpasta-slides",
    event_url: "https://www.facebook.com/events/2339906106275053/"
  }],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62-089696499160",
  email_address: "sifaniaffan14@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};