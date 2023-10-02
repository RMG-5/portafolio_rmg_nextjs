/* ********** ********** ********** ********** ********** ********** ********** */
/* PAGINA DE INICIO */
/* ********** ********** ********** ********** ********** ********** ********** */

// Indica que es un componente del cliente.
"use client";

import { magneto } from "./fonts/fonts.js";
import styles from "./styles/page.module.css";
import { FaGithub, FaXTwitter, FaFreeCodeCamp } from "react-icons/fa6";
import { motion } from "framer-motion";

// Genera el contenido de la página de inicio.
const Container = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.overallContainer}>
        <h1 className={styles.title}>
          <span className={`${styles.rmg1} ${magneto.className}`}> R</span>
          <span className={`${styles.rmg2} ${magneto.className}`}>M</span>
          <span className={`${styles.rmg3} ${magneto.className}`}>G</span>
        </h1>
        <hr className={styles.separator} />
        <div className={styles.contacts}>
          <div className={styles.contact}>
            <a
              className={styles.buttonContact}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/RMG-5"
            >
              <FaGithub />
            </a>
          </div>
          <div className={styles.contact}>
            <a
              className={styles.buttonContact}
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/RMG48210037"
            >
              <FaXTwitter />
            </a>
          </div>
          <div className={styles.contact}>
            <a
              className={styles.buttonContact}
              target="_blank"
              rel="noreferrer"
              href="https://www.freecodecamp.org/fcc5e116d99-324f-4efc-bf20-6a5e4ea23151"
            >
              <FaFreeCodeCamp />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Se encarga de exportar el componente "Container".
export default function Page() {
  return <Container />;
}

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
