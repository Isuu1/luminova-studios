import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

//Animations
import { motion } from "framer-motion";
//Components
import DieTile from "./DieTile";
import SectionHeadline from "../SectionHeadline/SectionHeadline";
//Styles
import styles from "./TenziesGame.module.css";
//Animations
import { slideRight } from "../../styles/animations";

export const gameContainerVariants = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
};

const TenziesGame = () => {
  const [dice, setDice] = useState(allNewDice());

  const [tenzies, setTenzies] = useState(false);

  const [time, setTime] = useState(0);

  const [start, setStart] = useState(false);

  const [gameOn, setGameOn] = useState(false);

  //Current times recorded in local storage
  let localStorageTimes = localStorage.getItem("time");
  if (!localStorageTimes) {
    localStorage.setItem("time", 0);
  } else {
    localStorageTimes = localStorage.getItem("time");
  }

  //Starting timer when the game is set to start
  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  useEffect(() => {
    const allDiceHeld = dice.every((die) => die.isHeld);
    const firstDiceValue = dice[0].value;
    const allDiceSameValue = dice.every((die) => die.value === firstDiceValue);
    if (allDiceHeld && allDiceSameValue) {
      setTenzies(true);
      setStart(false);

      if (time < localStorageTimes || localStorageTimes === "0") {
        localStorage.setItem("time", JSON.stringify(time));
      }
    }
  }, [dice, localStorageTimes, time]);

  function newDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const randomArray = [];

    for (let i = 0; i < 10; i++) {
      const randomObject = newDie();
      randomArray.push(randomObject);
    }
    return randomArray;
  }

  let [clicked, setClicked] = useState(0);

  //Function rolling new dies except the dies that are already held
  function roll() {
    if (!tenzies) {
      setClicked(clicked + 1);
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : newDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
      setClicked(0);
      setTime(0); // Setting timer to value 0 when game is finished
      setStart(true);
    }
  }

  function holdDice(id) {
    if (gameOn === true) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
        })
      );
    } else {
      return null;
    }
  }

  function startGame() {
    setGameOn(true);
    setStart(true);
  }

  //Format time and return it in more readable version
  function formatTime(milliseconds) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const hundredths = Math.floor((milliseconds % 1000) / 10);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}.${String(hundredths).padStart(2, "0")}`;
  }

  return (
    <section className={styles.tenziesGameContainer} id="tenzies-container">
      <SectionHeadline sectionName="Tenzies Game" />
      <div className={styles.bgShape}>
        <img src="/images/dice-bg.webp" alt="" />
      </div>
      <div className={styles.bgShape}>
        <img src="/images/dice-bg.webp" alt="" />
      </div>

      <div className={styles.bgTitle}>Tenzies Game</div>
      <div className={styles.innerWrapper}>
        <div className={styles.description}>
          <motion.p
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
          >
            Race Against Time: Tenzies Game challenges you to match 10 dice in
            record speed!
          </motion.p>
        </div>

        <motion.div
          className={styles.gameContainer}
          variants={gameContainerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <div className={styles.header}></div>
          {/* {tenzies && <Confetti style={{ width: "100%" }} />} */}
          <div className={styles.gameInstructions}>
            <h2>Tenzies</h2>
            <p>
              Roll until all dice are the same. Click each dice to freeze is at
              it's value between rolls.
            </p>
          </div>

          <div className={styles.dicesContainer}>
            {dice.map((die) => (
              <DieTile
                value={die.value}
                key={die.id}
                isHeld={die.isHeld}
                onClick={() => holdDice(die.id)}
              />
            ))}
          </div>

          {gameOn ? (
            <button className={styles.button} onClick={roll}>
              {tenzies ? "Play again" : "Roll"}
            </button>
          ) : (
            <button className={styles.button} onClick={startGame}>
              Start game
            </button>
          )}

          <div className={styles.gameInfo}>
            <p>
              You rolled the dice <span>{clicked}</span> times.
            </p>
            <h2>Timer: {formatTime(time)}</h2>
            <h3>
              Best score:{" "}
              {localStorageTimes > 0 ? (
                <span style={{ color: "red" }}>
                  {formatTime(localStorageTimes)}
                </span>
              ) : (
                "N/A"
              )}
            </h3>
          </div>
        </motion.div>
      </div>

      <svg
        className={styles.shapeDivider}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0d1224"
          fillOpacity="1"
          d="M0,160L60,144C120,128,240,96,360,96C480,96,600,128,720,138.7C840,149,960,139,1080,128C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default TenziesGame;
