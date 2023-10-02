/* ********** ********** ********** ********** ********** ********** ********** */
/* "MENU DE HAMBURGUESA" */
/* ********** ********** ********** ********** ********** ********** ********** */

import styles from "./burger-styles.module.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

// Genera el boton para el menu de hamburguesa.
// "isOpen" y "toggle" se definieron en "navigation.js"
export default function Burger({isOpen, toggle}) {
  return (
    <button className={styles.burger} onClick={toggle}>
      {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
    </button>
  );
}

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
