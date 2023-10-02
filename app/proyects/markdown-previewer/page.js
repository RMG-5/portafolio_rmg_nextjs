/* ********** ********** ********** ********** ********** ********** ********** */
/* "VISTA PREVIA DE MARKDOWN" */
/* ********** ********** ********** ********** ********** ********** ********** */

// Indica que es un componente del cliente.
"use client";

import { useState } from "react";
import {
  monteCarlo,
  asapCondensed400,
  asapCondensed700,
  shareTechMono,
} from "../../fonts/fonts.js";
import styles from "./mp-styles.module.css";
import { placeholder } from "./mp-data.js";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { motion } from "framer-motion";

/// Sirve como contenedor para la aplicación.
const Container = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.overallContainer}>
        <h1 className={styles.title} style={monteCarlo.style}>
          Vista Previa de Markdown
        </h1>
        <div id="markdown" className={styles.markdown}>
          <Markdown />
        </div>
        <p className={styles.rmg} style={monteCarlo.style}>
          Por: Ricardo García
        </p>
      </div>
    </motion.div>
  );
};

// Reune los diferentes componentes de la aplicación.
// Se puede decir que es la aplicación.
const Markdown = () => {
  const [text, setText] = useState(placeholder);
  return (
    <>
      <Editor text={text} setText={setText} />
      <Preview text={text} />
    </>
  );
};

// Personaliza el editor.
const Editor = ({ text, setText }) => {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.header} style={asapCondensed700.style}>
        Editor
      </h4>
      <textarea
        id="editor"
        className={styles.editor}
        style={shareTechMono.style}
        onChange={handleChange}
        value={text}
        placeholder={text}
      ></textarea>
    </div>
  );
};

// Personaliza el preview.
// "remarkBreaks" sirve para reconocer los saltos de linea.
const Preview = ({ text }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.header} style={asapCondensed700.style}>
        Preview
      </h4>
      <div
        id="preview"
        className={styles.preview}
        style={asapCondensed400.style}
      >
        <ReactMarkdown remarkPlugins={[remarkBreaks]}>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

// Se encarga de exportar el componente "Container".
export default function Page() {
  return <Container />;
}

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
