import React, { useState } from "react";

//Animations
import { AnimatePresence, motion } from "framer-motion";
//Icons
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
//Data
import { faq } from "../../data/faq.js";
//Styles
import styles from "./FAQ.module.css";

const faqAnswerVariants = {
  visible: {
    opacity: 1,
    maxHeight: 300,
    transition: {
      duration: 0.7,
      maxHeight: {
        duration: 0.8,
      },
    },
  },
  hidden: {
    maxHeight: 0,
    opacity: 0,
  },
  exit: {
    opacity: 0,
    maxHeight: 0,
    transition: {
      duration: 0.3,
      maxHeight: {
        duration: 0.6,
      },
    },
  },
};

const Faq = () => {
  const [answer, setAnswer] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.title}>Frequently asked questions</h2>
      <p className={styles.desc}>
        The FAQ section for Luminova Studios provides concise and informative
        answers to common questions, offering a quick overview of the studio's
        unique features, game development focus, and engagement with the gaming
        community.
      </p>
      {faq.map((item) => {
        const questionEl = item.question;
        const answerEl = item.answer;
        const elementId = item.id;
        return (
          <div className={styles.questionWrapper} key={item.id}>
            <h3
              className={styles.question}
              onClick={() => {
                setAnswer(!answer);
                setActiveTab(item.id);

                if (activeTab !== elementId) {
                  setAnswer(true);
                }
              }}
            >
              <IconContext.Provider
                value={{
                  size: "2rem",
                  className: `${styles.questionIcon}`,
                }}
              >
                <BsFillQuestionSquareFill />
              </IconContext.Provider>

              {questionEl}
            </h3>
            <AnimatePresence>
              {answer && activeTab === elementId ? (
                <motion.div
                  key={item.id}
                  initial="hidden"
                  animate="visible"
                  variants={faqAnswerVariants}
                  exit="exit"
                >
                  <p className={styles.answer}>{answerEl}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
