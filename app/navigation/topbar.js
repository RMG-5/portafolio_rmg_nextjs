/* ********** ********** ********** ********** ********** ********** ********** */
/* "BARRA DE NAVEGACIÓN FLOTANTE" */
/* ********** ********** ********** ********** ********** ********** ********** */

// Indica que es un componente del cliente.
"use client";

import { Fragment } from "react";
import ActiveLink from "./active-link.js";
import styles from "./topbar-styles.module.css";
import { ROUTES } from "./routes-list.js";
import Footer from "./footer.js";
import Logo from "./logo.js";
import Burger from "./burger.js";

// Genera la lista de enlaces de una sección de "ROUTES".
// "toggle" se definio en "navigation.js"
const Route = ({ proyects, toggle }) => {
  return (
    <div>
      <ul>
        {proyects.map((proyect) => (
          <li key={proyect.route} onClick={toggle}>
            <ActiveLink href={`/proyects/${proyect.route}`}>
              {proyect.name}
            </ActiveLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Genera la lista de enlaces de todas las secciones de "ROUTES".
// "toggle" se definio en "navigation.js"
const RoutesList = ({ toggle }) => {
  return (
    <nav className={styles.floatbar}>
      {ROUTES.map((route, i) => (
        <Fragment key={i}>
          {/* Agrega el enlace de inicio antes de la primer sección. */}
          {i === 0 && (
            <ul>
              <li onClick={toggle}>
                <ActiveLink href={"/"}>Inicio</ActiveLink>
              </li>
            </ul>
          )}
          {/* Agrega un <hr /> antes de cada sección, excepto la primera. */}
          {i > 0 && <hr />}
          <Route {...route} toggle={toggle} />
        </Fragment>
      ))}
    </nav>
  );
};

// Se encarga de exportar la "Topbar" completa.
export default function Topbar({ isOpen, toggle }) {
  return (
    <div className={styles.topbar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.span}></div>
      <Burger isOpen={isOpen} toggle={toggle} />
      <div
        className={styles.floatmenu}
        style={{
          opacity: `${isOpen ? "0.9" : "0"}`,
          left: `${isOpen ? "0" : "100vw"}`,
          transition: "left 0.5s",
        }}
      >
        <div>
          <RoutesList toggle={toggle} />
        </div>
        <hr />
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
