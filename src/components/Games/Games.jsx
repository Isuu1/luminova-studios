import React from "react";
import { Link } from "react-router-dom";

//Animations
import { motion } from "framer-motion";
import { staggeredChildrenParent } from "../../styles/animations";
//Components
import SectionHeadline from "../SectionHeadline/SectionHeadline";
//Styles
import styles from "./Games.module.css";
//Data
import { games } from "../../data/games";

const gameCardVariants = {
  visible: {
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    scale: 0,
  },
};

const Games = () => {
  return (
    <div className={styles.gamesContainer}>
      <img src="/images/gaming-bg.png" alt="" className={styles.image} />
      <SectionHeadline sectionName="Latest Games" />
      <motion.div
        className={styles.games}
        variants={staggeredChildrenParent}
        whileInView="visible"
        initial="hidden"
      >
        {games.map((game) => (
          <motion.div
            className={styles.card}
            key={game.id}
            variants={gameCardVariants}
            // whileHover="visible"
            // initial="hidden"
          >
            <div className={styles.thumbnailWrapper}>
              {game.isCompleted === false && (
                <div className={styles.comingSoonOverlay}>
                  <h2>Coming soon</h2>
                </div>
              )}
              <img className={styles.thumbnail} src={game.img} alt="" />
              <h3 className={styles.title}>{game.title}</h3>
            </div>

            <div className={styles.cardContent}>
              <p>{game.desc}</p>
              <Link to="tictactoe">
                <button className={styles.tryBtn}>Try it</button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Games;
