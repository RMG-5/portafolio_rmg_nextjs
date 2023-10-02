/* ********** ********** ********** ********** ********** ********** ********** */
/* "CAJA DE RITMOS 10 BOTONES" */
/* ********** ********** ********** ********** ********** ********** ********** */

// Indica que es un componente del cliente.
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { arizonia, acme, lemon } from "../../fonts/fonts.js";
import styles from "./dm10-styles.module.css";
import { DATA } from "./dm10-data.js";
import { motion } from "framer-motion";

// Sirve como contenedor para la aplicación
const Container = () => {
  const [instrument, setInstrument] = useState(true);
  // Obtiene y posiciona las imagenes de fondo.
  const background = [
    {
      backgroundImage: "url(/img/ocarina-a.png), url(/img/tambor.png)",
      backgroundAttachment: "absolute, absolute",
      backgroundPosition: "top 7.5% left 2.5%, bottom 5% right 2.5%",
      backgroundRepeat: "no-repeat, no-repeat",
    },
    {
      backgroundImage: "url(/img/gaita.png), url(/img/guitarra.png)",
      backgroundAttachment: "absolute, absolute",
      backgroundPosition: "top 7.5% left 2.5%, bottom 5% right 2.5%",
      backgroundRepeat: "no-repeat, no-repeat",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1 }}
    >
      <div
        className={styles.overallContainer}
        style={instrument ? background[0] : background[1]}
      >
        <h1 className={styles.title} style={arizonia.style}>
          Caja de Ritmos
        </h1>
        <DrumMachine instrument={instrument} setInstrument={setInstrument} />
        <p className={styles.rmg} style={arizonia.style}>
          Por: Ricardo García
        </p>
      </div>
    </motion.div>
  );
};

// Reune los diferentes componentes de la aplicación.
// Se puede decir que es la aplicación.
const DrumMachine = ({ instrument, setInstrument }) => {
  const [currentNote, setCurrentNote] = useState("Ocarina / Tambor");
  const [volume, setVolume] = useState(0.5);
  return (
    <div id="drum-machine" className={styles.drumMachine}>
      <div className={styles.displayContainer}>
        <Display currentNote={currentNote} />
      </div>
      <div className={styles.drumPadContainer}>
        <DrumPad
          data={DATA[0]}
          instrument={instrument}
          setCurrentNote={setCurrentNote}
          volume={volume}
        />
        <DrumPad
          data={DATA[1]}
          instrument={instrument}
          setCurrentNote={setCurrentNote}
          volume={volume}
        />
        <DrumPad
          data={DATA[2]}
          instrument={instrument}
          setCurrentNote={setCurrentNote}
          volume={volume}
        />
        <DrumPad
          data={DATA[3]}
          instrument={instrument}
          setCurrentNote={setCurrentNote}
          volume={volume}
        />
        <DrumPad
          data={DATA[4]}
          instrument={instrument}
          setCurrentNote={setCurrentNote}
          volume={volume}
        />
        <DrumPad
          data={DATA[5]}
          instrument={instrument}
          setCurrentNote={setCurrentNote}
          volume={volume}
        />
        <DrumPad
          data={DATA[6]}
          instrument={instrument}
          setCurrentNote={setCurrentNote}
          volume={volume}
        />
        <DrumPad
          data={DATA[7]}
          instrument={instrument}
          setCurrentNote={setCurrentNote}
          volume={volume}
        />
        <DrumPad
          data={DATA[8]}
          instrument={instrument}
          setCurrentNote={setCurrentNote}
          volume={volume}
        />
        <DrumPad
          data={DATA[9]}
          instrument={instrument}
          setCurrentNote={setCurrentNote}
          volume={volume}
        />
      </div>
      <div className={styles.controlsContainer}>
        <ChangeInstruments
          instrument={instrument}
          setInstrument={setInstrument}
          setCurrentNote={setCurrentNote}
        />
        <Volume
          volume={volume}
          setVolume={setVolume}
          setCurrentNote={setCurrentNote}
        />
      </div>
    </div>
  );
};

// Define las instrucciones para el Display.
const Display = ({ currentNote }) => {
  return (
    <p id="display" className={styles.display} style={acme.style}>
      {currentNote}
    </p>
  );
};

// Define las instrucciones para DrumPad.
const DrumPad = ({ data, instrument, setCurrentNote, volume }) => {
  const nodeRef = useRef(null);
  const soundRef = useRef(null);
  const id = instrument ? data.id.ocarinaTambor : data.id.gaitaGuitarra;
  const url = instrument ? data.url.ocarinaTambor : data.url.gaitaGuitarra;
  // Genera el nombre de nota que se presiona.
  const noteName = (e) => {
    return e
      .replace(/-/g, " ")
      .split(" ")
      .map((i) => {
        return i[0].toUpperCase() + i.slice(1).toLowerCase();
      })
      .join(" ");
  };

  // Indicaciones al presionar una nota.
  const handleMouseDown = useCallback(() => {
    setCurrentNote(noteName(id));
    soundRef.current.src = url;
    soundRef.current.play();
    soundRef.current.volume = volume;
    nodeRef.current.style.backgroundColor = "rgba(0, 125, 0, 1)";
    nodeRef.current.style.boxShadow =
      "0 0 0.125rem 0.125rem rgba(0, 0, 0, 0.4), 0 0 0.125rem 0.125rem rgba(0, 0, 0, 0.8)";
  }, [id, setCurrentNote, url, volume]);

  // Indicaciones al soltar una nota.
  const handleMouseUp = useCallback(() => {
    nodeRef.current.style.backgroundColor = "rgba(0, 200, 0, 1)";
    nodeRef.current.style.boxShadow =
      "0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.4), 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.8)";
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === data.keyCode) {
        handleMouseDown();
      }
    };
    const handleKeyUp = (e) => {
      if (e.keyCode === data.keyCode) {
        handleMouseUp();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [data.keyCode, handleMouseDown, handleMouseUp]);

  return (
    <div
      ref={nodeRef}
      id={id}
      className={`drum-pad ${styles.drumPad}`}
      style={lemon.style}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <audio
        ref={soundRef}
        id={data.keyName}
        className="clip"
        src={url}
      ></audio>
      {data.keyName}
    </div>
  );
};

// Permite cambiar de instrumentos.
const ChangeInstruments = ({ instrument, setInstrument, setCurrentNote }) => {
  const handleClick = () => {
    setInstrument(!instrument);
    setCurrentNote(instrument ? "Gaita / Guitarra" : "Ocarina / Tambor");
  };

  return (
    <div className={styles.controls}>
      <p style={acme.style}>
        {instrument ? "Ocarina / Tambor" : "Gaita / Guitarra"}
      </p>
      <label className={styles.switch}>
        <input type="checkbox" onClick={handleClick} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

// Permite ajustar el volumen.
const Volume = ({ volume, setVolume, setCurrentNote }) => {
  const handleChange = (e) => {
    setVolume(e.target.value);
    setCurrentNote("Volumen: " + Math.round(e.target.value * 100));
  };

  return (
    <div className={styles.controls}>
      <p style={acme.style}>Ajustar Volumen</p>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={handleChange}
      />
    </div>
  );
};

// Se encarga de exportar el componente "Container".
export default function Page() {
  return <Container />;
}

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
