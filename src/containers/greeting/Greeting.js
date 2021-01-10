import React, { useState, useEffect } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import { motion, AnimatePresence } from "framer-motion";

export default function Greeting() {
// State
const [showHeadingOne, setShowHeadingOne] = useState(true);
const [showHeadingTwo, setShowHeadingTwo] = useState(false);
  
  // Timeout
  useEffect(() => {
    setTimeout(() => {
      if (showHeadingOne) {
          setShowHeadingOne(false);
          setShowHeadingTwo(true);
        } else {
          setShowHeadingOne(true);
          setShowHeadingTwo(false);
        }
      }, 4000);
    }, [showHeadingOne, showHeadingTwo]
  );

  const contentVariants = {
    initial: {
      translateY: "100vh",
      opacity: 0,
    },
  
    animate: {
      translateY: "0vh",
      opacity: 1,
      transition: {
        duration: 2,
        when: "beforeChildren",
        // staggerChildren: 0.4,
      },
    },
  };
  
  const childrenVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
  
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        type: "spring",
        delay: 0.5,
      },
    },
  
    exit: {
      opacity: 0,
      y: -200,
      transition: { duration: 0.2 },
    },
  };

  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {" "}
              {greeting.title}
              {" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>

            <motion.div
            className="content-container"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            >
            </motion.div>
            
            {/* Animate Skill Content */}
            <div className="skill-animation">
              <AnimatePresence>
                {showHeadingOne && (
                  <motion.h2
                    className="skill-content"
                    variants={childrenVariants}
                    exit="exit"
                    animate="animate"
                    initial="initial"
                  >
                    "I am a Coffee Lover and Wordpress Fans"
                  </motion.h2>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {showHeadingTwo && (
                  <motion.h2
                    className="skill-content"
                    variants={childrenVariants}
                    exit="exit"
                    animate="animate"
                    initial="initial"
                  >
                    "I am Passionated about Minimalistic Design"
                  </motion.h2>
                )}
              </AnimatePresence>
            </div>
            {/* Animate Skill Content */}

            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="man at desk" src={require("../../assets/images/manOnTable.svg")}></img>
        </div>
      </div>
    </div>
    </Fade>
  );
}
