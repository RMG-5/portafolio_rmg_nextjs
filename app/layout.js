/* ********** ********** ********** ********** ********** ********** ********** */
/* ESTRUCTURA GENERAL DE LA APLICACIÓN */
/* ********** ********** ********** ********** ********** ********** ********** */

import Navigation from "./navigation/navigation.js";
import { lato } from "./fonts/fonts.js";
import globalStyles from "./globals.css"; // SE REQUIRE PARA APLICAR ESTILOS GLOBALES.
import styles from "./styles/layout.module.css";

// Define los metadatos y demas componentes del "head".
export const metadata = {
  title: "Portafolio RMG next.js",
  description: "Portafolio de proyectos react creado en next.js",
};

// Genera la estructura general de la aplicación.
export default function RootLayout({ children }) {
  return (
    <html lang="es-MX" className={lato.className}>
      <body className={styles.page}>
        <Navigation />
        <div className={styles.content}>{children}</div>
      </body>
    </html>
  );
}

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
