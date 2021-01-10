/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Profile from "./profile/Profile";
import Education from "./education/Education";
import Certifications from "./certifications/Certifications";
import Twitter from "./twitter-embed/twitter";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Contact from "./contact/Contact";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <Education />
        <WorkExperience />
        <Projects />
        <Certifications />
        <Blogs />
        <Profile />
        <Footer />
        <Top />
        {/*<StartupProject />*/}
        {/*<Achievement />*/}
        {/*<Talks />*/}
        {/*<Twitter />*/}
        {/*<Podcast />*/}
      </div>
    );
  }
}
