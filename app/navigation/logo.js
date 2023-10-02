/* ********** ********** ********** ********** ********** ********** ********** */
/* "LOGO" */
/* ********** ********** ********** ********** ********** ********** ********** */

// Indica que es un componente del cliente.
"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./logo-styles.module.css";

// Genera el logo.
export default function Logo() {
  // Sirve para cambiar el estado del logo.
  const [isActive, setIsActive] = useState(false);
  // Cambia el estado del logo al pasar el mouse por encima.
  const handleMouseEnter = () => {
    setIsActive(true);
  };
  // Regresa el estado del logo al retirar el mouse de encima.
  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.logo}>
      <Image
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={isActive ? "/img/logo_dw_azul.svg" : "/img/logo_dw_negro.svg"}
        width={240}
        height={30}
        alt="Logo RMG Desarrollo WEB"
      />
    </div>
  );
}

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
