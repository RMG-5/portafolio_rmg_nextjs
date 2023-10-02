/* ********** ********** ********** ********** ********** ********** ********** */
/* "NAVEGACIÓN GENERAL" */
/* ********** ********** ********** ********** ********** ********** ********** */

// Indica que es un componente del cliente.
"use client";

import { useState } from "react";
import Navbar from "./navbar.js";
import Topbar from "./topbar.js";

// Maneja el estado de "topbar" y genera los componentes de navegación.
export default function Navigation() {
  // Sirve para cambiar el estado de "topbar".
  const [isOpen, setIsOpen] = useState(false);
  // Alterna el estado en cada clic.
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Navbar />
    </>
  );
}

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
