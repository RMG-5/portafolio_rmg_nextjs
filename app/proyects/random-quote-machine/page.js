/* ********** ********** ********** ********** ********** ********** ********** */
/* MAQUINA DE FRASES ALEATORIAS */
/* ********** ********** ********** ********** ********** ********** ********** */

// Indica que es un componente del cliente.
"use client";

import { useState } from "react";
import { parisienne, rambla } from "../../fonts/fonts.js";
import styles from "./rqm-styles.module.css";
import { QUOTES } from "./rqm-data.js";
import { FaXTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { motion } from "framer-motion";

// Sirve como contenedor para la aplicación.
const Container = () => {
  const [random, setRandom] = useState(
    QUOTES[Math.floor(Math.random() * QUOTES.length)]
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1 }}
    >
      <div key={random.id} className={styles.overallContainer}>
        <motion.div
          className={styles.backgroundImage}
          style={{ backgroundImage: `url(${random.picture})` }}
          initial={{ opacity: 0, scale: 0.25 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.25 }}
          transition={{ duration: 1 }}
        />
        <h1
          className={`${styles.title} ${parisienne.className}`}
          style={{ color: random.color }}
        >
          Máquina de Frases Aleatorias
        </h1>
        <QuoteBox random={random} setRandom={setRandom} />
        <p
          className={`${styles.rmg} ${parisienne.className}`}
          style={{ color: random.color }}
        >
          Por: Ricardo García
        </p>
      </div>
    </motion.div>
  );
};

// Personaliza el contenedor de frases.
const QuoteBox = ({ random, setRandom }) => {
  return (
    <div id="quote-box" className={styles.quoteBox}>
      <motion.div
        key={random.id}
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 1 }}
        id="text"
        className={styles.text}
        style={rambla.style}
      >
        <p>
          <FaQuoteLeft /> &nbsp; {random.quote} &nbsp; <FaQuoteRight />
        </p>
      </motion.div>
      <motion.div
        key={random.id}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100%" }}
        transition={{ type: "spring", stiffness: 50 }}
        id="author"
        className={styles.author}
        style={rambla.style}
      >
        <p>-- {random.author}</p>
      </motion.div>
      <TweetQuote random={random} />
      <NewQuote random={random} setRandom={setRandom} />
    </div>
  );
};

// Define las instrucciones para el boton "tweet".
const TweetQuote = ({ random }) => {
  return (
    <a
      id="tweet-quote"
      className={styles.tweetQuote}
      style={{ backgroundColor: random.color }}
      target="_blank"
      rel="noreferrer"
      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
        '"' + random.quote + '"  --' + random.author
      )}`}
    >
      <FaXTwitter />
    </a>
  );
};

// Define las instrucciones para el boton "New Quote".
const NewQuote = ({ random, setRandom }) => {
  return (
    <button
      id="new-quote"
      className={styles.newQuote}
      style={{ backgroundColor: random.color }}
      onClick={() => {
        return setRandom(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
      }}
    >
      New Quote
    </button>
  );
};

// Se encarga de exportar el componente "Container".
export default function Page() {
  return <Container />;
}

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
