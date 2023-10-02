/* ********** ********** ********** ********** ********** ********** ********** */
/* "DEFINICIÓN DE FUENTES" */
/* ********** ********** ********** ********** ********** ********** ********** */

// Importa fuentes desde google fonts, si el nombre contiene espacios se sustituyen por guiones bajos.
import {
  Lato,
  Parisienne,
  Rambla,
  MonteCarlo,
  Asap_Condensed,
  Share_Tech_Mono,
  Arizonia,
  Acme,
  Lemon,
  Great_Vibes,
  Chakra_Petch,
  Merienda,
} from "next/font/google";
// Importa fuentes locales.
import localFont from "next/font/local";

// Define variables para las fuentes.
const lato = Lato({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});
const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const rambla = Rambla({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const monteCarlo = MonteCarlo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const asapCondensed400 = Asap_Condensed({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const asapCondensed700 = Asap_Condensed({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const arizonia = Arizonia({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const acme = Acme({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const lemon = Lemon({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const chakraPetch = Chakra_Petch({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const merienda = Merienda({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const magneto = localFont({
  src: "../fonts/Magneto-Negrita.ttf",
  display: "swap",
});

// Exporta las fuentes para su uso en cualquier parte de la aplicación.
export {
  lato,
  parisienne,
  rambla,
  monteCarlo,
  asapCondensed400,
  asapCondensed700,
  shareTechMono,
  arizonia,
  acme,
  lemon,
  greatVibes,
  chakraPetch,
  merienda,
  magneto,
};

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */

// Metodos de uso.
// <p className={lato.className}>Uso de fuente en propiedad className.</p>
// <p style={lato.style}>Uso de fuente en propiedad style.</p>
