/* ********** ********** ********** ********** ********** ********** ********** */
/* "RESALTAR ENLACE ACTIVO" */
/* ********** ********** ********** ********** ********** ********** ********** */

// Indica que es un componente del cliente.
"use client";

import Link from "next/link";
// usePathname permite leer la URL actual.
import { usePathname } from "next/navigation";

export default function ActiveLink({ href, children }) {
  // Verifica si la URL es la URL actual.
  const url = usePathname();
  // Marca como activo el enlace cuyo "href" es igual a "url".
  const active = href === url;

  return (
    <Link
      href={href}
      // Los siguientes estilos se aplican unicamente al enlace activo.
      style={{
        color: active ? "white" : "#252525",
        background: active ? "rgb(0, 155, 255)" : "rgb(240, 250, 255)",
        borderRadius: active ? "0.25rem" : "0",
        boxShadow: active ? "0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.4)" : "none",
      }}
    >
      {children}
    </Link>
  );
}

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
