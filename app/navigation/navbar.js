/* ********** ********** ********** ********** ********** ********** ********** */
/* "BARRA DE NAVEGACIÓN FIJA" */
/* ********** ********** ********** ********** ********** ********** ********** */

// Indica que es un componente del cliente.
"use client";

import { Fragment } from "react";
import ActiveLink from "./active-link.js";
import styles from "./navbar-styles.module.css";
import { ROUTES } from "./routes-list.js";
import Footer from "./footer.js";
import Logo from "./logo.js";

// Genera la lista de enlaces de una sección de "ROUTES".
const Route = ({ proyects }) => {
  return (
    <div>
      <ul>
        {proyects.map((proyect) => (
          <li key={proyect.route}>
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
const RoutesList = () => {
  return (
    <nav className={styles.navbar}>
      {ROUTES.map((route, i) => (
        <Fragment key={i}>
          {/* Agrega el enlace de inicio antes de la primer sección. */}
          {i === 0 && (
            <ul>
              <li>
                <ActiveLink href={"/"}>Inicio</ActiveLink>
              </li>
            </ul>
          )}
          {/* Agrega un <hr /> antes de cada sección, excepto la primera. */}
          {i > 0 && <hr />}
          <Route {...route} />
        </Fragment>
      ))}
    </nav>
  );
};

// Se encarga de exportar la "Navbar" completa.
export default function Navbar() {
  return (
    <div className={styles.sidemenu}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <hr />
      <RoutesList />
      <hr />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
