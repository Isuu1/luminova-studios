import React from "react";
import { useLocation, useOutlet } from "react-router-dom";

//Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
//Animations
import { AnimatePresence, motion } from "motion/react";

const pageTransitionVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const MainLayout = () => {
  const { pathname } = useLocation();

  const element = useOutlet();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={pageTransitionVariants}
        >
          {element && React.cloneElement(element, { key: pathname })}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default MainLayout;
