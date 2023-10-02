/* ********** ********** ********** ********** ********** ********** ********** */
/* DATOS "VISTA PREVIA DE MARKDOWN" */
/* ********** ********** ********** ********** ********** ********** ********** */

export const placeholder = `
# Te doy la bienvenida a mi previsualizador Markdown.

Te explicare como funciona:

---


Un encabezado se escribe comenzando una línea con uno o varios **#** (máximo 6) seguido de un espacio, el número de **#** es indirectamente proporcional al tamaño del encabezado.

# Soy un encabezado tamaño h1.
## Soy un encabezado tamaño h2.
### Soy un encabezado tamaño h3.
#### Soy un encabezado tamaño h4.
##### Soy un encabezado tamaño h5.
###### Soy un encabezado tamaño h6.

---


El texto en cursiva se escribe envolviéndolo en asteriscos \\*cursiva\\*.

*Soy un texto en cursiva.*

---


El texto en negrita se escribe envolviéndolo en asteriscos dobles \\*\\*negritas\\*\\*.  

**Soy un texto en negritas.**

---


Los enlaces se escriben entre corchetes [enlace] y, para los enlaces en línea, la URL del enlace se escribe entre paréntesis (URL).

**Formato de enlace:** \\[enlace](URL).

Soy un enlace a [freeCodeCamp.com](https://www.freecodecamp.com)

---


Las imágenes son casi idénticas a los enlaces, pero una imagen comienza con un signo de exclamación **!**

**Formato de imagen:** !\\[alt](src).

![logo RMG](https://avatars.githubusercontent.com/u/106850906?v=4) ![logo RMG](https://avatars.githubusercontent.com/u/106850906?v=4) ![logo RMG](https://avatars.githubusercontent.com/u/106850906?v=4) 

---


El código en línea se escribe envolviéndolo en acentos graves **\`**.

\`<span>Soy una línea de código</span>\`

---


Un bloque de código se escribe colocando 3 acentos graves **\`\`\`** en una línea arriba y una línea abajo del bloque de código.
.

\`\`\`
// Soy un bloque de código de varias líneas:  

<div>  
  import React from 'react';  
  import ReactDOM from 'react-dom/client';  
  import App from './App';  

  export default function App() {  
    return <p id="Importante">¡Hola Mundo!</p>;  
  }  

  const root = ReactDOM.createRoot(document.getElementById('root'));  
  root.render(  
    <React.StrictMode>  
      <App />  
    </React.StrictMode>  
  );  
</div>  
\`\`\`

---


Una cita en bloque se escribe comenzando una línea con ***>*** seguido de un espacio opcional.

> -- ¡Soy una cita en bloque!

---


Para crear listas desordenadas se puede utilizar asterisco, signo más ó guion medio ***\\* + -*** como marcadores de lista, seguido de un espacio.

Aquí hay una lista desordenada:  
  * HTML
  + CSS
  - JAVASCRIPT

---


Las listas ordenadas usan números seguidos de punto ó paréntesis derecho ***. )*** y de un espacio.

Aquí hay una lista ordenada:  
  1. REACT
  2) VUE
  3. ANGULAR

---


Esas son algunas de las características del previsualizador Markdown, si quieres conocer más, visita el repositorio Github de [react-markdown](https://github.com/remarkjs/react-markdown)
`;

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
