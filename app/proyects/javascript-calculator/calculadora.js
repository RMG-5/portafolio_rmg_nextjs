/* ********** ********** ********** ********** ********** ********** ********** */
/* "CALCULADORA JAVASCRIPT"  */
/* ********** ********** ********** ********** ********** ********** ********** */

// Indica que es un componente del cliente.
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { greatVibes, chakraPetch } from "../../fonts/fonts.js";
import styles from "./jc-styles.module.css";
import { DATA } from "./jc-data.js";
import { motion } from "framer-motion";

// Sirve como contenedor para la aplicación.
const Container = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.overallContainer}>
        <h1 className={styles.title} style={greatVibes.style}>
          Calculadora JavaScript
        </h1>
        <Calculator />
        <p className={styles.rmg} style={greatVibes.style}>
          Por: Ricardo García
        </p>
      </div>
    </motion.div>
  );
};

// Reune los diferentes componentes de la aplicación.
// Se puede decir que es la aplicación.
const Calculator = () => {
  const [currentValue, setCurrentValue] = useState({
    formula: "",
    display: "0",
    operandA: "",
    operandB: "",
    operation: "",
    lastButton: "",
  });

  return (
    <div className={styles.calculator}>
      <div className={styles.formulaDisplayContainer}>
        <Formula currentValue={currentValue} />
        <Display currentValue={currentValue} />
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.numbersContainer}>
          <Numbers
            data={DATA[7]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <Numbers
            data={DATA[8]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <Numbers
            data={DATA[9]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <Numbers
            data={DATA[4]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <Numbers
            data={DATA[5]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <Numbers
            data={DATA[6]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <Numbers
            data={DATA[1]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <Numbers
            data={DATA[2]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <Numbers
            data={DATA[3]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <Decimal
            data={DATA[10]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <Numbers
            data={DATA[0]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <Back
            data={DATA[11]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
        </div>
        <div className={styles.operatorsContainer}>
          <Operators
            data={DATA[12]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <Operators
            data={DATA[13]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <Operators
            data={DATA[14]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <Operators
            data={DATA[15]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
        </div>
        <div className={styles.resetResultContainer}>
          <Reset data={DATA[16]} setCurrentValue={setCurrentValue} />
          <Result
            data={DATA[17]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
        </div>
      </div>
    </div>
  );
};

// Genera la pantalla de formulas.
const Formula = ({ currentValue }) => {
  return (
    <p className={styles.formula} style={chakraPetch.style}>
      {currentValue.formula}
    </p>
  );
};

// Genera la pantalla de resultados.
const Display = ({ currentValue }) => {
  return (
    <p id="display" className={styles.display} style={chakraPetch.style}>
      {currentValue.display}
    </p>
  );
};

// Define las instrucciones para escribir números.
const Numbers = ({ data, currentValue, setCurrentValue }) => {
  const handleClick = () => {
    // Si el único boton que se presiono fue "-".
    // Se continua un "operandA" negativo.
    if (currentValue.lastButton === "" && currentValue.operandA === "-") {
      setCurrentValue({
        formula: currentValue.formula + data.value,
        display: currentValue.display + data.value,
        operandA: currentValue.operandA + data.value,
        operandB: "",
        operation: "",
        lastButton: "number",
      });
      // Si no se ha presionado ningun boton.
      // O el valor de "operandA" es igual "0".
      // O el valor de "operandA" es igual "-0".
      // Se inicia un "operandA" o se continua un "operandA" negativo.
    } else if (
      (currentValue.lastButton === "" && currentValue.operandA === "") ||
      (currentValue.lastButton === "number" &&
        currentValue.operandA === "0" &&
        currentValue.operandB === "") ||
      (currentValue.lastButton === "number" &&
        currentValue.operandA === "-0" &&
        currentValue.operandB === "")
    ) {
      setCurrentValue({
        formula: currentValue.formula.slice(0, -1) + data.value,
        display: currentValue.display.slice(0, -1) + data.value,
        operandA: currentValue.operandA.slice(0, -1) + data.value,
        operandB: "",
        operation: "",
        lastButton: "number",
      });
      // Si el último boton que se presiono fue "=".
      // Se inicia un "operandA".
    } else if (currentValue.lastButton === "result") {
      setCurrentValue({
        formula: data.value,
        display: data.value,
        operandA: data.value,
        operandB: "",
        operation: "",
        lastButton: "number",
      });
      // Si el valor de "operandB" es igual "0".
      // O el valor de "operandB" es igual "-0".
      // Se inicia un "operandB" o se continua un "operandB" negativo.
    } else if (
      (currentValue.operandA !== "" && currentValue.operandB === "0") ||
      (currentValue.operandA !== "" && currentValue.operandB === "-0")
    ) {
      setCurrentValue({
        formula: currentValue.formula.slice(0, -1) + data.value,
        display: currentValue.display.slice(0, -1) + data.value,
        operandA: currentValue.operandA,
        operandB: currentValue.operandB.slice(0, -1) + data.value,
        operation: currentValue.operation,
        lastButton: "number",
      });
      // Si el valor de formula termina con (+, x, ÷) seguido de "-".
      // O el valor de "operandB" es diferente de "".
      // Se continua un "operandB" positivo o negativo.
    } else if (
      /[+x÷]-$/.test(currentValue.formula) ||
      (currentValue.operandA !== "" && currentValue.operandB !== "")
    ) {
      setCurrentValue({
        formula: currentValue.formula + data.value,
        display: currentValue.display + data.value,
        operandA: currentValue.operandA,
        operandB: currentValue.operandB + data.value,
        operation: currentValue.operation,
        lastButton: "number",
      });
      // Si el último boton que se presiono fue un "operador".
      // Se inicia un "operandB".
    } else if (currentValue.lastButton === "operator") {
      setCurrentValue({
        formula: currentValue.formula + data.value,
        display: currentValue.display.slice(0, -1) + data.value,
        operandA: currentValue.operandA,
        operandB: data.value,
        operation: currentValue.operation,
        lastButton: "number",
      });
      // Si "operandA" es diferente de "" y "operandB" es igual a "".
      // Se continua el valor de "operandA".
    } else if (currentValue.operandA !== "" && currentValue.operandB === "") {
      setCurrentValue({
        formula: currentValue.formula + data.value,
        display: currentValue.display + data.value,
        operandA: currentValue.operandA + data.value,
        operandB: "",
        operation: "",
        lastButton: "number",
      });
    }
  };

  return (
    <Button
      id={data.id}
      className={`${styles.numbers} ${chakraPetch.className}`}
      handleClick={handleClick}
      dataKey={data.key}
      dataValue={data.value}
    />
  );
};

// Define las instrucciones para escribir el punto decimal.
const Decimal = ({ data, currentValue, setCurrentValue }) => {
  const handleClick = () => {
    // Si el último boton que se presiono fue "=".
    // Se agrega "0" y se inicia un numero decimal.
    if (currentValue.lastButton === "result") {
      setCurrentValue({
        formula: "0" + data.value,
        display: "0" + data.value,
        operandA: "0" + data.value,
        operandB: "",
        operation: "",
        lastButton: "number",
      });
      // Si display contiene un "."
      // No se hace nada.
    } else if (currentValue.display.includes(".")) {
      setCurrentValue({
        ...currentValue,
      });
      // Si no se ha presionado ningun boton.
      // O el único boton que se presiono fue "-".
      // Se agrega "0" y se inicia un nuevo "operandA".
    } else if (
      (currentValue.lastButton === "" && currentValue.operandA === "") ||
      (currentValue.lastButton === "" && currentValue.operandA === "-")
    ) {
      setCurrentValue({
        formula: currentValue.formula + "0" + data.value,
        display: currentValue.formula + "0" + data.value, // FORMULA.
        operandA: currentValue.formula + "0" + data.value, // FORMULA.
        operandB: "",
        operation: "",
        lastButton: "number",
      });
      // Si el valor de "operandA" es diferente de "".
      // O el valor de "operandA" es diferente de "-".
      // Se continua el valor de "operandA".
    } else if (
      (currentValue.lastButton === "number" &&
        currentValue.operandA !== "" &&
        currentValue.operandB === "") ||
      (currentValue.lastButton === "number" &&
        currentValue.operandA !== "-" &&
        currentValue.operandB === "")
    ) {
      setCurrentValue({
        formula: currentValue.formula + data.value,
        display: currentValue.display + data.value,
        operandA: currentValue.operandA + data.value,
        operandB: "",
        operation: "",
        lastButton: "number",
      });
      // Si el valor de formula termina con (+, x, ÷) seguido de "-".
      // Se agrega "0" y se inicia un nuevo "operandB" negativo.
    } else if (/[+x÷]-$/.test(currentValue.formula)) {
      setCurrentValue({
        formula: currentValue.formula + "0" + data.value,
        display: currentValue.display + "0" + data.value,
        operandA: currentValue.operandA,
        operandB: currentValue.operandB + "0" + data.value,
        operation: currentValue.operation,
        lastButton: "number",
      });
      // Si el último boton que se presiono fue un "operador".
      // Se agrega "0" y se inicia un nuevo "operandB".
    } else if (currentValue.lastButton === "operator") {
      setCurrentValue({
        formula: currentValue.formula + "0" + data.value,
        display: currentValue.display.slice(0, -1) + "0" + data.value,
        operandA: currentValue.operandA,
        operandB: "0" + data.value,
        operation: currentValue.operation,
        lastButton: "number",
      });
      // Si el valor de "operandB" es diferente de ("", "0", "-", "-0").
      // Se continua el valor de "operandB".
    } else if (
      (currentValue.operandA !== "" && currentValue.operandB !== "") ||
      (currentValue.operandA !== "" && currentValue.operandB !== "0")
    ) {
      setCurrentValue({
        formula: currentValue.formula + data.value,
        display: currentValue.display + data.value,
        operandA: currentValue.operandA,
        operandB: currentValue.operandB + data.value,
        operation: currentValue.operation,
        lastButton: "number",
      });
    }
  };

  return (
    <Button
      id={data.id}
      className={`${styles.numbers} ${chakraPetch.className}`}
      handleClick={handleClick}
      dataKey={data.key}
      dataValue={data.value}
    />
  );
};

// Define las instrucciones para escribir el boton CD.
const Back = ({ data, currentValue, setCurrentValue }) => {
  const handleClick = () => {
    // Si valor de formula contiene uno o más caracteres.
    // Y valor de formula contiene algun "operador".
    // Y valor de display contiene uno o más caracteres.
    // Y valor de display contiene solo "números" o "-".
    // Y valor de "operandB" es diferente de "".
    // Se elimina y resetea el valor de "operandB".
    if (
      currentValue.formula.length >= 1 &&
      /[+x÷-]/.test(currentValue.formula) &&
      currentValue.display.length >= 1 &&
      /[0-9]|-/.test(currentValue.display) &&
      currentValue.operandB !== ""
    ) {
      setCurrentValue({
        formula: currentValue.formula.slice(
          0,
          currentValue.formula.length - currentValue.display.length
        ),
        display: "0",
        operandA: currentValue.operandA,
        operandB: "",
        operation: currentValue.operation,
        lastButton: "operator",
      });
      // Si valor de formula contiene uno o más caracteres.
      // Y valor de formula contiene solo "números" o "-".
      // Y valor de display contiene uno o más caracteres.
      // Y valor de display contiene solo "números" o "-".
      // Se realiza un reseteo.
    } else if (
      currentValue.formula.length >= 1 &&
      /[0-9]|-/.test(currentValue.formula) &&
      currentValue.display.length >= 1 &&
      /[0-9]|-/.test(currentValue.display)
    ) {
      setCurrentValue({
        formula: "",
        display: "0",
        operandA: "",
        operandB: "",
        operation: "",
        lastButton: "",
      });
    }
  };

  return (
    <Button
      id={data.id}
      className={`${styles.numbers} ${chakraPetch.className}`}
      handleClick={handleClick}
      dataKey={data.key}
      dataValue={data.value}
    />
  );
};

// Define las instrucciones para escribir operadores.
const Operators = ({ data, currentValue, setCurrentValue }) => {
  const round = 1000000000000;
  const handleClick = () => {
    // Si el único boton que se presiono fue "-".
    // Se inicia un nuevo "operandA" negativo.
    if (
      currentValue.lastButton === "" &&
      currentValue.operandA === "" &&
      data.value === "-"
    ) {
      setCurrentValue({
        formula: data.value,
        display: data.value,
        operandA: "-",
        operandB: "",
        operation: "",
        lastButton: "",
      });
      // Si el valor de formula termina con (+, x, ÷) seguido de "-".
    } else if (/[+x÷]-$/.test(currentValue.formula)) {
      // Y se presiona "-".
      // No se hace nada.
      if (data.value === "-") {
        setCurrentValue({
          ...currentValue,
        });
        // Y se presiona (+, x, ÷).
        // Se sustituyen los operadores con el boton oprimido.
      } else {
        setCurrentValue({
          formula: currentValue.formula.slice(0, -2) + data.value,
          display: currentValue.display.slice(0, -2) + data.value,
          operandA: currentValue.operandA,
          operandB: "",
          operation: data.key,
          lastButton: "operator",
        });
      }
      // Si "operation" es igual a "-" y se presiona el operador "-".
      // No se hace nada.
    } else if (currentValue.operation === "-" && data.value === "-") {
      setCurrentValue({
        ...currentValue,
      });
      // Si el último boton que se presiono fue un "operador".
    } else if (currentValue.lastButton === "operator") {
      // Y se presiona "-".
      // Se inicia un "operandB" negativo.
      if (data.value === "-") {
        setCurrentValue({
          formula: currentValue.formula + data.value,
          display: data.value,
          operandA: currentValue.operandA,
          operandB: "-",
          operation: currentValue.operation,
          lastButton: "operator",
        });
        // Y se presiona (+, x, ÷).
        // Se sustituye el operador con el boton oprimido.
      } else {
        setCurrentValue({
          formula: currentValue.formula.slice(0, -1) + data.value,
          display: currentValue.display.slice(0, -1) + data.value,
          operandA: currentValue.operandA,
          operandB: "",
          operation: data.key,
          lastButton: "operator",
        });
      }
      // Si el valor de formula termina con ".".
      // Se quita el "." y se prepara una "operation".
    } else if (currentValue.formula.endsWith(".")) {
      setCurrentValue({
        formula: currentValue.formula.slice(0, -1) + data.value,
        display: data.value,
        operandA: currentValue.operandA.slice(0, -1),
        operandB: "",
        operation: data.key,
        lastButton: "operator",
      });
      // Si "operandA" es diferente de ("", "-") y "operandB" es igual a "".
      // Se prepara una "operation".
    } else if (
      (currentValue.operandA !== "" &&
        currentValue.operandA !== "-" &&
        currentValue.operandB === "") ||
      currentValue.lastButton === "result"
    ) {
      setCurrentValue({
        formula: currentValue.operandA + data.value, // operandA.
        display: data.value,
        operandA: currentValue.operandA,
        operandB: "",
        operation: data.key,
        lastButton: "operator",
      });
      // Si "operandA" y "operandB" son diferentes de "".
    } else if (currentValue.operandA !== "" && currentValue.operandB !== "") {
      // Y "operation" es igual a "+".
      // Se realiza una "suma" y se prepara la siguiente "operation".
      if (currentValue.operation === "+") {
        setCurrentValue({
          formula:
            (parseFloat(currentValue.operandA) * round +
              parseFloat(currentValue.operandB) * round) /
              round +
            data.value,
          display: data.value,
          operandA:
            (parseFloat(currentValue.operandA) * round +
              parseFloat(currentValue.operandB) * round) /
            round,
          operandB: "",
          operation: data.key,
          lastButton: "operator",
        });
        // Y "operation" es igual a "-".
        // Se realiza una "resta" y se prepara la siguiente "operation".
      } else if (currentValue.operation === "-") {
        setCurrentValue({
          formula:
            (parseFloat(currentValue.operandA) * round -
              parseFloat(currentValue.operandB) * round) /
              round +
            data.value,
          display: data.value,
          operandA:
            (parseFloat(currentValue.operandA) * round -
              parseFloat(currentValue.operandB) * round) /
            round,
          operandB: "",
          operation: data.key,
          lastButton: "operator",
        });
        // Y "operation" es igual a "*".
        // Se realiza una "multiplicación" y se prepara la siguiente "operation".
      } else if (currentValue.operation === "*") {
        setCurrentValue({
          formula:
            parseFloat(currentValue.operandA) *
              parseFloat(currentValue.operandB) +
            data.value,
          display: data.value,
          operandA:
            parseFloat(currentValue.operandA) *
            parseFloat(currentValue.operandB),
          operandB: "",
          operation: data.key,
          lastButton: "operator",
        });
        // Y "operation" es igual a "/".
        // Se realiza una "división" y se prepara la siguiente "operation".
      } else if (currentValue.operation === "/") {
        setCurrentValue({
          formula:
            parseFloat(currentValue.operandA) /
              parseFloat(currentValue.operandB) +
            data.value,
          display: data.value,
          operandA:
            parseFloat(currentValue.operandA) /
            parseFloat(currentValue.operandB),
          operandB: "",
          operation: data.key,
          lastButton: "operator",
        });
      }
    }
  };

  return (
    <Button
      id={data.id}
      className={`${styles.operators} ${chakraPetch.className}`}
      handleClick={handleClick}
      dataKey={data.key}
      dataValue={data.value}
    />
  );
};

// Define las instrucciones para escribir el boton CA.
const Reset = ({ data, setCurrentValue }) => {
  const handleClick = () => {
    setCurrentValue({
      formula: "",
      display: "0",
      operandA: "",
      operandB: "",
      operation: "",
      lastButton: "",
    });
  };

  return (
    <Button
      id={data.id}
      className={`${styles.resetResult} ${chakraPetch.className}`}
      handleClick={handleClick}
      dataKey={data.key}
      dataValue={data.value}
    />
  );
};

// Define las instrucciones para escribir el boton igual.
const Result = ({ data, currentValue, setCurrentValue }) => {
  const round = 1000000000000;
  const handleClick = () => {
    // Si no se ha presionado ningun boton.
    // O solo se a presionado "-".
    // O solo se a presionado "0".
    // O solo se a presionado "-0".
    // Se inicia un nuevo "operandA".
    if (
      (currentValue.lastButton === "" && currentValue.operandA === "") ||
      (currentValue.lastButton === "" && currentValue.operandA === "-") ||
      (currentValue.lastButton === "number" &&
        currentValue.display === "0" &&
        currentValue.operandB === "") ||
      (currentValue.lastButton === "number" &&
        currentValue.display === "-0" &&
        currentValue.operandB === "")
    ) {
      setCurrentValue({
        formula: "",
        display: "0",
        operandA: "",
        operandB: "",
        operation: "",
        lastButton: "",
      });
      // Si "operandA" es diferente de "" y "operandB" es igual a "".
      // O "operandA" es diferente de "" y "operandB" es igual a "-"
      // No hace nada.
    } else if (
      (currentValue.operandA !== "" && currentValue.operandB === "") ||
      (currentValue.operandA !== "" && currentValue.operandB === "-")
    ) {
      setCurrentValue({
        ...currentValue,
      });
      // Si "operandA" y "operandB" son diferentes de "".
    } else if (currentValue.operandA !== "" && currentValue.operandB !== "") {
      // Y "operation" es igual a "+".
      // Se realiza una "suma" y se prepara la siguiente "operation".
      if (currentValue.operation === "+") {
        setCurrentValue({
          formula:
            currentValue.formula +
            data.value +
            (parseFloat(currentValue.operandA) * round +
              parseFloat(currentValue.operandB) * round) /
              round,
          display:
            (parseFloat(currentValue.operandA) * round +
              parseFloat(currentValue.operandB) * round) /
            round,
          operandA:
            (parseFloat(currentValue.operandA) * round +
              parseFloat(currentValue.operandB) * round) /
            round,
          operandB: "",
          operation: "",
          lastButton: "result",
        });
        // Y "operation" es igual a "-".
        // Se realiza una "resta" y se resetea la "operation".
      } else if (currentValue.operation === "-") {
        setCurrentValue({
          formula:
            currentValue.formula +
            data.value +
            (parseFloat(currentValue.operandA) * round -
              parseFloat(currentValue.operandB) * round) /
              round,
          display:
            (parseFloat(currentValue.operandA) * round -
              parseFloat(currentValue.operandB) * round) /
            round,
          operandA:
            (parseFloat(currentValue.operandA) * round -
              parseFloat(currentValue.operandB) * round) /
            round,
          operandB: "",
          operation: "",
          lastButton: "result",
        });
        // Y "operation" es igual a "*".
        // Se realiza una "multiplicación" y se resetea la "operation".
      } else if (currentValue.operation === "*") {
        setCurrentValue({
          formula:
            currentValue.formula +
            data.value +
            parseFloat(currentValue.operandA) *
              parseFloat(currentValue.operandB),
          display:
            parseFloat(currentValue.operandA) *
            parseFloat(currentValue.operandB),
          operandA:
            parseFloat(currentValue.operandA) *
            parseFloat(currentValue.operandB),
          operandB: "",
          operation: "",
          lastButton: "result",
        });
        // Y "operation" es igual a "/".
        // Se realiza una "división" y se resetea la "operation".
      } else if (currentValue.operation === "/") {
        setCurrentValue({
          formula:
            currentValue.formula +
            data.value +
            parseFloat(currentValue.operandA) /
              parseFloat(currentValue.operandB),
          display:
            parseFloat(currentValue.operandA) /
            parseFloat(currentValue.operandB),
          operandA:
            parseFloat(currentValue.operandA) /
            parseFloat(currentValue.operandB),
          operandB: "",
          operation: "",
          lastButton: "result",
        });
      }
    }
  };

  return (
    <Button
      id={data.id}
      className={`${styles.resetResult} ${chakraPetch.className}`}
      handleClick={handleClick}
      dataKey={data.key}
      dataValue={data.value}
    />
  );
};

// Crea un elemento Button para utilizarlo en la aplicación.
const Button = ({ id, className, handleClick, dataKey, dataValue }) => {
  const nodeRef = useRef(null);

  const handleMouseDown = useCallback(() => {
    nodeRef.current.style.backgroundColor = "rgba(0, 155, 255, 1)";
    nodeRef.current.style.boxShadow = "0 0 0.15vh 0.15vh rgba(0, 0, 0, 0.75)";
    nodeRef.current.style.transform = "scale(103%)";
    nodeRef.current.style.fontSize = "5vh";
  }, []);

  const handleMouseUp = useCallback(() => {
    id === "clear" || id === "equals"
      ? (nodeRef.current.style.backgroundColor = "#ffffff")
      : id === "add" ||
        id === "subtract" ||
        id === "multiply" ||
        id === "divide"
      ? (nodeRef.current.style.backgroundColor = "#555555")
      : (nodeRef.current.style.backgroundColor = "#111111");
    nodeRef.current.style.boxShadow = "0.3vh 0.3vh 0.3vh rgba(0, 0, 0, 0.75)";
    nodeRef.current.style.transform = "scale(100%)";
    nodeRef.current.style.fontSize = "4vh";
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === dataKey) {
        handleMouseDown();
      }
    };
    const handleKeyUp = (e) => {
      if (e.key === dataKey) {
        handleMouseUp();
        handleClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [dataKey, handleMouseDown, handleMouseUp, handleClick]);

  return (
    <div
      ref={nodeRef}
      id={id}
      className={className}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {dataValue}
    </div>
  );
};

// Se encarga de exportar el componente "Container".
export default function Page() {
  return <Container />;
}

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */
