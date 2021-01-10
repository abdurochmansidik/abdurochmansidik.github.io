/* Change this file to get your personal Portfolio */
import emoji from "react-easy-emoji";

// Your Summary And Greeting Section
const greeting = {
  username: "Abdurochman Sidik",
  title: "Hallo All, I'm Sidik",
  subTitle: emoji("I am a Freelance Graphic Designer, Junior Frontend Dev and Blog Writer. I Design super cool Websites and Applications.  I live in a small town somewhere in the world"),
  resumeLink: "https://drive.google.com/file/d/1I1n9rgkMicSck6EwK1EAsGvw1W5fjww4/view?usp=sharing"
};

// Your Social Media Link
const socialMediaLinks = {
  github: "https://github.com/abdurochmansidik",
  linkedin: "https://www.linkedin.com/in/abdurochmansidik",
  instagram: "https://www.instagram.com/abdurochman_sidik",
  twitter: "https://twitter.com/abdurochmansdk",
  blogger: "https://www.goindoti.blogspot.com",
  gmail: "abdurochmansidik@gmail.com"
};

// Your Skills Section
const skillsSection = {
  title: "What i do",
  subTitle: "JUNIOR FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Building predictive models to extract insights and make decisions out of data"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

  softwareSkills: [
    {
      skillName: "Html5",
      classname: "vscode-icons:file-type-html",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "Css3",
      classname: "vscode-icons:file-type-css",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "JavaScript",
      classname: "vscode-icons:file-type-js-official",
      style: {
        backgroundColor: "transparent",
      }
    },
    {
      skillName: "ReactJS",
      classname: "vscode-icons:file-type-reactjs",
      style: {
        color: "#61DAFB"
      }
    },
    {
      skillName: "NodeJS",
      classname: "vscode-icons:file-type-node",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "Firebase",
      classname: "vscode-icons:file-type-firebase",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "MongoDB",
      classname: "vscode-icons:file-type-mongo",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "MySQL",
      classname: "vscode-icons:file-type-sql",
      style: {
        backgroundColor: "transparent"
      }
    },
  ]
};

// Your education background
const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "MAHADHIKA 4",
      logo: require("./assets/images/mahadhikaLogo.png"),
      subHeader: "Computer Network",
      duration: "2010 - 2013",
      desc: "Ranked top 10% in the program. Took courses about Networking, Software Engineering, Web Security, Operating Systems, ...",
      //descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      schoolName: "INDRAPRASTA PGRI UNIVERSITY",
      logo: require("./assets/images/unindraLogo.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "2014 - 2018",
      desc: "Participated in the research of Puskesmas Clinic and published Project Netbeans and MySQL with the name Application of Bhakti Jaya Clinic.",
      //descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    }
  ]
}

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "UI/UX Design",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",  //Insert stack or technology you have experience in
      progressPercentage: "60%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",  //Insert stack or technology you have experience in
      progressPercentage: "70%"  //Insert relative proficiency in percentage
    }
  ]
};

// Your top 3 work experiences
const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT Support",   
      company: "PT. Eksa Anugrah Mandiri",
      companylogo: require("./assets/images/EksaLogo.png"),
      date: "May 2012 - Jul 2012",
      desc: "I Practical Work as a IT Support at PT. Eksa Anugrah Mandiri for 3 months."
    },
    {
      role: "Technical Support",  
      company: "BLKD Jakarta Timur",
      companylogo: require("./assets/images/BLKDLogo.png"),
      date: "Jun 2013 – Aug 2013",
      desc: "I Practical Work as a Technical Support at BLKD Jakarta Timur for 3 months."
    },
    {
      role: "Front-end Web Development",  
      company: "Kementrian Pertanian RI",
      companylogo: require("./assets/images/PertanianLogo.png"),
      date: "Feb 2018 - Mar 2018",
      desc: "I Practical Work as a IT Project at Kementerian Pertanian RI for 2 months."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "abdurochmansidik", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};

// Some Big Projects You have worked with your company
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement
const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First indonesia to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com" },
        { name: "Award Letter", url: "https://drive.google.com" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com" },
        { name: "Final Project", url: "https://www.google.com" }
      ]
    }
  ]
};

// Your certifications
const certifications = {
	certifications: [
		{
			title: "Computer Network",
			subtitle: "BNSP",
			logo_path: "BNSP-logo.png",
			certificate_link:
				"https://drive.google.com/file/d/1DS_P5vEX5b1KiJUKw06cJlXnt1d9iFl-/view",
			alt_name: "BNSP",
			color_code: "#222222"
    },
    {
			title: "Computer Science",
			subtitle: "PPKD",
			logo_path: "PPKD-logo.png",
			certificate_link:
				"https://drive.google.com/file/d/1XbQotOXEikICZ4AE000GqylYYixSCepV/view",
			alt_name: "PPKD",
			color_code: "#222222"
		},
		{
			title: "IT Essentials",
			subtitle: "CISCO",
			logo_path: "CISCO-logo.png",
			certificate_link:
				"https://drive.google.com/file/d/1w6BGNzSru7p4IWHgCf7VgO8HusHVaATa/view",
			alt_name: "CISCO",
			color_code: "#222222"
    },
    {
			title: "Toefl EPT",
			subtitle: "LPIA",
			logo_path: "LPIA-logo.png",
			certificate_link:
				"https://drive.google.com/file/d/14LDFEJZfy3_i70mhS65DAbzmvYNOcAlR/view",
			alt_name: "LPIA",
			color_code: "#222222"
    }
	]
};

// Blogs Section
const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://goindoti.blogspot.com",
      title: "My Personal Blog",
      description: "This is my personal blog, With Love for Developing cool stuff, I love to write and teach others what I have learnt."
    },
    {
      url: "https://www.abdurochmansidik.ml",
      title: "My Personal CV Project",
      description: "My Personal CV Project is my personal website that displays information about my personal data, this website displays several pages consisting of the About Me, Resume, Blog, Contact, Portfolio pages."
    },
    {
      url: "https://goindoti.blogspot.com/2019/04/sistem-aplikasi-klinik-bhakti-jaya.html",
      title: "Application of Bhakti Jaya Clinic",
      description: "Today I will share Project Netbeans and MySQL with the name Application of Bhakti Jaya Clinic (Netbeans), for those of you who are working on assignments and need references, you can download the Project Here."
    },
    {
      url: "https://goindoti.blogspot.com/2019/06/cara-bermain-game-nitendo-wii-u-di-pc.html",
      title: "How to Play Wii U Games on Your PC",
      description: "Cemu the Nintendo Wii U emulator is now a mature program with good performance on most systems. If you’d like to play Wii U games on your PC with all the benefits of an emulator, Cemu is the way to go."
    }
  ]
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "your title",
      subtitle: "your subtitle",
      slides_url: "Your slides url here",
      event_url: "your event url",
      image: "image url"
    }
  ]
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["Paste your podcast url here"]
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62 9512071613",
  email_address: "abdurochmansidik@gmail.com"
};

//Twitter Section
const twitterDetails = {

  userName : "abdurochmansdk"//Replace "twitter" with your twitter username without @
};

export { 
  greeting, 
  socialMediaLinks, 
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
  contactInfo , 
  twitterDetails,
  certifications
};
