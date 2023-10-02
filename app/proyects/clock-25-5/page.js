/* ********** ********** ********** ********** ********** ********** ********** */
/* "RELOJ 25 + 5" */
/* ********** ********** ********** ********** ********** ********** ********** */

// Indica que es un componente del cliente.
"use client";

import { useState, useRef } from "react";
import { merienda, shareTechMono } from "../../fonts/fonts.js";
import styles from "./c255-styles.module.css";
import { motion } from "framer-motion";

// Sirve como contenedor para la aplicación.
const Container = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.overallContainer}>
        <h1 className={styles.title} style={merienda.style}>
          Reloj 25 + 5
        </h1>
        <Clock />
        <p className={styles.rmg} style={merienda.style}>
          Por: Ricardo García
        </p>
      </div>
    </motion.div>
  );
};

// Reune los diferentes componentes de la aplicación.
// Se puede decir que es la aplicación.
const Clock = () => {
  const [sessionBreak, setSessionBreak] = useState(true);
  const [sessionValue, setSessionValue] = useState(25);
  const [breakValue, setBreakValue] = useState(5);
  const [timer, setTimer] = useState(1500);
  const [playPause, setPlayPause] = useState(true);
  const intervalRef = useRef(null);
  const beepRef = useRef(null);

  return (
    <div
      className={styles.clock}
      style={
        sessionBreak
          ? { background: "rgb(0, 63, 0)" }
          : { background: "rgb(0, 55, 155)" }
      }
    >
      <SessionLabel
        sessionBreak={sessionBreak}
        sessionValue={sessionValue}
        setSessionValue={setSessionValue}
        setTimer={setTimer}
        playPause={playPause}
      />
      <BreakLabel
        sessionBreak={sessionBreak}
        breakValue={breakValue}
        setBreakValue={setBreakValue}
        setTimer={setTimer}
        playPause={playPause}
      />
      <TimerLabel
        sessionBreak={sessionBreak}
        setSessionBreak={setSessionBreak}
        sessionValue={sessionValue}
        breakValue={breakValue}
        timer={timer}
        setTimer={setTimer}
        intervalRef={intervalRef}
        beepRef={beepRef}
      />
      <StartStop
        sessionBreak={sessionBreak}
        timer={timer}
        setTimer={setTimer}
        playPause={playPause}
        setPlayPause={setPlayPause}
        intervalRef={intervalRef}
      />
      <Reset
        sessionBreak={sessionBreak}
        setSessionBreak={setSessionBreak}
        setSessionValue={setSessionValue}
        setBreakValue={setBreakValue}
        setTimer={setTimer}
        setPlayPause={setPlayPause}
        intervalRef={intervalRef}
        beepRef={beepRef}
      />
    </div>
  );
};

// Define las instrucciones para SessionLabel.
const SessionLabel = ({
  sessionBreak,
  sessionValue,
  setSessionValue,
  setTimer,
  playPause,
}) => {
  // Disminuye en 1 el valor de Session Length.
  const handleClickDown = () => {
    if (sessionValue > 1 && playPause) {
      setSessionValue(sessionValue - 1);
      if (sessionBreak) {
        setTimer(sessionValue * 60 - 60);
      }
    }
  };
  // Aumenta en 1 el valor de Session Length.
  const handleClickUp = () => {
    if (sessionValue < 60 && playPause) {
      setSessionValue(sessionValue + 1);
      if (sessionBreak) {
        setTimer(sessionValue * 60 + 60);
      }
    }
  };

  return (
    <div
      id="session-label"
      className={styles.sessionLabel}
      style={shareTechMono.style}
    >
      <p>Session Length</p>
      <div className={styles.controller}>
        <Button
          sessionBreak={sessionBreak}
          handleClick={handleClickDown}
          id={"session-decrement"}
          className={styles.buttonSquare}
          value={"▼"}
        />
        <p id="session-length">{sessionValue}</p>
        <Button
          sessionBreak={sessionBreak}
          handleClick={handleClickUp}
          id={"session-increment"}
          className={styles.buttonSquare}
          value={"▲"}
        />
      </div>
    </div>
  );
};

// Define las instrucciones para BreakLabel.
const BreakLabel = ({
  sessionBreak,
  breakValue,
  setBreakValue,
  setTimer,
  playPause,
}) => {
  // Disminuye en 1 el valor de Break Length.
  const handleClickDown = () => {
    if (breakValue > 1 && playPause) {
      setBreakValue(breakValue - 1);
      if (!sessionBreak) {
        setTimer(breakValue * 60 - 60);
      }
    }
  };
  // Aumenta en 1 el valor de Break Length.
  const handleClickUp = () => {
    if (breakValue < 60 && playPause) {
      setBreakValue(breakValue + 1);
      if (!sessionBreak) {
        setTimer(breakValue * 60 + 60);
      }
    }
  };

  return (
    <div
      id="break-label"
      className={styles.breakLabel}
      style={shareTechMono.style}
    >
      <p>Break Length</p>
      <div className={styles.controller}>
        <Button
          sessionBreak={sessionBreak}
          handleClick={handleClickDown}
          id={"break-decrement"}
          className={styles.buttonSquare}
          value={"▼"}
        />
        <p id="break-length">{breakValue}</p>
        <Button
          sessionBreak={sessionBreak}
          handleClick={handleClickUp}
          id={"break-increment"}
          className={styles.buttonSquare}
          value={"▲"}
        />
      </div>
    </div>
  );
};

// Define las instrucciones para TimerLabel.
const TimerLabel = ({
  sessionBreak,
  setSessionBreak,
  sessionValue,
  breakValue,
  timer,
  setTimer,
  intervalRef,
  beepRef,
}) => {
  // Genera el formato mm:ss.
  const timerValue = (e) => {
    let minutes = Math.floor(e / 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = e - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  };
  // Activa el sonido y cambia entre Session y Break.
  if (timer < 0) {
    beepRef.current.play();
    if (sessionBreak) {
      setSessionBreak(!sessionBreak);
      setTimer((timer += breakValue * 60 + 1));
    } else if (!sessionBreak) {
      setSessionBreak(!sessionBreak);
      setTimer((timer += sessionValue * 60 + 1));
    }
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTimer((timer -= 1));
    }, 1000);
  }

  return (
    <div
      id="timer-label"
      className={`${styles.timerLabel} ${shareTechMono.className}`}
      style={
        timer <= 60
          ? { border: "0.4rem solid orange" }
          : { border: "0.4rem solid white" }
      }
    >
      <p style={timer <= 60 ? { color: "orange" } : { color: "white" }}>
        {sessionBreak ? "Session" : "Break"}
      </p>
      <p
        id="time-left"
        className={styles.timeLeft}
        style={timer <= 60 ? { color: "orange" } : { color: "white" }}
      >
        {timerValue(timer)}
      </p>
      <audio ref={beepRef} id="beep" src="/audio/cancion-de-saria.mp3"></audio>
    </div>
  );
};

// Define las instrucciones para StartStop.
const StartStop = ({
  sessionBreak,
  timer,
  setTimer,
  playPause,
  setPlayPause,
  intervalRef,
}) => {
  // Activa y pausa el reloj.
  const handleClick = () => {
    setPlayPause(!playPause);
    if (playPause) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setTimer((timer -= 1));
      }, 1000);
    } else if (!playPause) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <Button
      sessionBreak={sessionBreak}
      handleClick={handleClick}
      id={"start_stop"}
      className={`${styles.buttonSquare} ${styles.buttonLong} ${shareTechMono.className} ${styles.startStop}`}
      value={playPause ? "Play" : "Pause"}
    />
  );
};

// Define las instrucciones para Reset.
const Reset = ({
  sessionBreak,
  setSessionBreak,
  setSessionValue,
  setBreakValue,
  setTimer,
  setPlayPause,
  intervalRef,
  beepRef,
}) => {
  // Resetea el reloj.
  const handleClick = () => {
    setSessionValue(25);
    setBreakValue(5);
    setTimer(1500);
    setPlayPause(true);
    setSessionBreak(true);
    clearInterval(intervalRef.current);
    beepRef.current.load();
  };

  return (
    <Button
      sessionBreak={sessionBreak}
      handleClick={handleClick}
      id={"reset"}
      className={`${styles.buttonSquare} ${styles.buttonLong} ${shareTechMono.className} ${styles.reset}`}
      value={"Reset"}
    />
  );
};

// Crea un elemento Button para utilizarlo en la aplicación.
const Button = ({ sessionBreak, handleClick, id, className, value }) => {
  const handleMouseEnterUp = (e) => {
    sessionBreak
      ? (e.target.style.background = "rgba(0, 163, 0, 1)")
      : (e.target.style.background = "rgba(0, 155, 255, 1)");
  };
  const handleMouseLeaveDown = (e) => {
    sessionBreak
      ? (e.target.style.background = "rgba(0, 113, 0, 1)")
      : (e.target.style.background = "rgba(0, 105, 205, 1)");
  };

  return (
    <button
      className={className}
      id={id}
      style={
        sessionBreak
          ? { background: "rgba(0, 103, 0, 1)" }
          : { background: "rgba(0, 105, 205, 1)" }
      }
      onClick={handleClick}
      onMouseEnter={handleMouseEnterUp}
      onMouseLeave={handleMouseLeaveDown}
      onMouseDown={handleMouseLeaveDown}
      onMouseUp={handleMouseEnterUp}
    >
      {value}
    </button>
  );
};

// Se encarga de exportar el componente "Container".
export default function Page() {
  return <Container />;
}

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
