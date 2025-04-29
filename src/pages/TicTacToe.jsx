import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//Icons
import { FaArrowLeft } from "react-icons/fa";
//Animations
import { motion } from "framer-motion";
import { slideTopSpring } from "../styles/animations";
//Styles
import styles from "./TicTacToe.module.css";

export const playerIconIconVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
    },
  },
  hidden: {
    opacity: 0.5,
    scale: 0.2,
  },
  exit: {
    scale: 0.2,
    transition: {
      duration: 1,
    },
  },
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(new Array(9).fill(null));

  const [winner, setWinner] = useState(null);

  const [winningLine, setWinningLine] = useState([]);

  const [clickedTile, setClickedTile] = useState(null);

  const [computerClickedTile, setComputerClickedTile] = useState(null);

  const [gameFinished, setGameFinished] = useState(false);

  const [isDraw, setIsDraw] = useState(false);

  const [winsCounter, setWinsCounter] = useState({
    player1: 0,
    player2: 0,
  });

  const filledSquares = squares.filter((square) => square !== null);
  //Computer turn
  const isComputerTurn =
    squares.filter((square) => square !== null).length % 2 === 1 &&
    filledSquares.length !== 9; //This part is to avoid situation when computer tries to make a move when there is no empty Tile

  //Player turn
  const isPlayerTurn =
    squares.filter((square) => square !== null).length % 2 === 0;

  useEffect(() => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], //Vertical lines
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], //Horizontal lines
      [0, 4, 8],
      [2, 4, 6], //Diagonal lines
    ];
    //It defines template for possible winning lines
    const winningLines = (a, b, c) => {
      return lines.filter((squareIndexes) => {
        const squareValues = squareIndexes.map((index) => squares[index]);
        return (
          JSON.stringify([a, b, c].sort()) ===
          JSON.stringify(squareValues.sort())
        );
      });
    };
    const emptyIndexes = squares
      .map((square, index) => (square === null ? index : null))
      .filter((val) => val !== null);
    //Checks if the letters patters matches 3x or 3o
    const playerWon = winningLines("x", "x", "x").length > 0;
    const computerWon = winningLines("o", "o", "o").length > 0;
    if (playerWon) {
      setWinner("x");
      setGameFinished(true);
      setWinsCounter({
        ...winsCounter,
        player1: winsCounter.player1 + 1,
      });
      setWinningLine(winningLines("x", "x", "x")[0]);
      return;
    }
    if (computerWon) {
      setWinner("o");
      setGameFinished(true);
      setWinsCounter({
        ...winsCounter,
        player2: winsCounter.player2 + 1,
      });
      setWinningLine(winningLines("o", "o", "o")[0]);
      return;
    }

    //Draw
    if (filledSquares.length === 9 && !winner) {
      setIsDraw(true);
      setGameFinished(true);
      setWinner(null);
    }

    const putComputerAt = (index) => {
      setComputerClickedTile(index);
      setSquares((prevSquares) => {
        const newSquares = [...prevSquares];
        newSquares[index] = "o";
        return newSquares;
      });
    };
    setTimeout(() => {
      //setTimeout will make an effect of computer thinking his moves
      if (isComputerTurn) {
        setClickedTile("");
        //What happens when computer has 2 tiles already
        const possibleWinningLines = winningLines("o", "o", null);
        if (possibleWinningLines.length > 0) {
          const winIndex = possibleWinningLines[0].filter(
            (index) => squares[index] === null
          )[0];
          putComputerAt(winIndex);
          return;
        }

        //What happens when user has 2 tiles already
        const linesToBlock = winningLines("x", "x", null);
        if (linesToBlock.length > 0) {
          const blockIndex = linesToBlock[0].filter(
            (index) => squares[index] === null
          )[0];
          putComputerAt(blockIndex);
          return;
        }

        //What happens when computer has 1 tile
        const linesToContinue = winningLines("o", null, null);
        if (linesToContinue.length > 0) {
          putComputerAt(
            linesToContinue[0].filter((index) => squares[index] === null)[0]
          );
          return;
        }
        const randomIndex =
          emptyIndexes[Math.ceil(Math.random() * emptyIndexes.length)];
        putComputerAt(randomIndex);
      }
    }, 1000);
  }, [
    squares,
    isComputerTurn,
    isPlayerTurn,
    filledSquares,
    winner,
    winsCounter,
  ]);

  //Defines what happends with a Tile when it's clicked
  function handleTileClick(index) {
    if (isPlayerTurn && !gameFinished) {
      setComputerClickedTile("");
      let newSquares = squares;
      //Only put X on the field if it's value equals null
      if (newSquares[index] === null) {
        newSquares[index] = "x";
        setSquares([...newSquares]);
        setClickedTile(index);
      }
    }
  }

  //Restart game function
  function handleRestart() {
    setSquares(new Array(9).fill(null));
    setGameFinished(false);
    setWinner(null);
    setIsDraw(false);
    setWinningLine([]);
  }

  //Adding border-none to certain tiles to make a visual effect
  const borderClasses = {
    0: `${styles.leftBorder} ${styles.topBorder}`,
    1: `${styles.topBorder}`,
    2: `${styles.rightBorder} ${styles.topBorder}`,
    3: `${styles.leftBorder}`,
    5: `${styles.rightBorder}`,
    6: `${styles.leftBorder} ${styles.bottomBorder}`,
    7: `${styles.bottomBorder}`,
    8: `${styles.rightBorder} ${styles.bottomBorder}`,
  };

  const getBorderClass = (index) => borderClasses[index];

  const Tile = (props) => {
    //Defines the winning square by it's index to assign strike class
    const isWinningSquare = winningLine.includes(props.index);
    //Dynamically adding X hover class to the Tile
    return (
      <div className={`${styles.boardTile} ${props.borderClass}`} {...props}>
        <motion.span
          variants={
            clickedTile === props.index || computerClickedTile === props.index
              ? playerIconIconVariants
              : null
          }
          animate="visible"
          initial="hidden"
          exit="exit"
          id="tile-value"
          className={`tictactoe-container__board__tile__value ${
            isWinningSquare ? `${styles.strike}` : ""
          }`}
          key={props.index}
        >
          {props.x ? "x" : props.o ? "o" : ""}
        </motion.span>
      </div>
    );
  };

  function Board(props) {
    return <div className={styles.gameBoard} {...props}></div>;
  }

  return (
    <div className={styles.tictactoeContainer}>
      <div className={styles.tictactoe}>
        <Link to={"/"}>
          <button className={styles.backButton}>
            <FaArrowLeft style={{ color: "aliceblue" }} />
          </button>
        </Link>
        <h2 className={styles.gameTitle}>TicTacToe</h2>
        {!!winner && winner === "x" && (
          <div className={styles.gameResult}>You won!</div>
        )}
        {!!winner && winner === "o" && (
          <div className={styles.gameResult}>You lost!</div>
        )}
        {isDraw && <div className={styles.gameResult}>Draw!</div>}
        <Board>
          {squares.map((square, index) => (
            <Tile
              key={index}
              index={index}
              x={square === "x" ? 1 : 0}
              o={square === "o" ? 1 : 0}
              onClick={() => handleTileClick(index)}
              borderClass={getBorderClass(index)}
            />
          ))}
        </Board>
        <div className={styles.scoreboard}>
          <div className={styles.human} id="human">
            Human (x)<p>{winsCounter.player1}</p>
          </div>

          <div className={styles.computer} id="computer">
            Computer (o)<p>{winsCounter.player2}</p>
          </div>
        </div>
        {gameFinished && (
          <motion.button
            className={styles.restartButton}
            onClick={() => handleRestart()}
            variants={slideTopSpring}
            initial="hidden"
            whileInView="visible"
          >
            Retry
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
