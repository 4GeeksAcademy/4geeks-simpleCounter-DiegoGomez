import React, { useState, useEffect } from "react";

const Seconds = () => {
  //Declaro counter como la variable para mi estado, y setCounter para poder
  //"setearlo", es decir, actualizar la variable
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    //Creo un interval el cual se ejecuta cada segundo, este interval se añade al estado,
    //de forma que lo que se está actualizando es su estado.
    const interval = setInterval(() => {
      //prevCounter es el estado previo a la suma del 1 que se hace cada segundo
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    //Utilizo clearInterval, una función de JavaScript la cual detiene las repeticiones del interval.
    //Al utilizar [], especifico que esta función se ejecute después del primer render, es decir, que
    //cleanInterval está asegurando que la próxima que vez que se cargue, la cuenta se reinicie.
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex align-items-center">
      <div className="m-3">
        <i className="far fa-clock fs-1"></i>
      </div>
      <div>
        <h1>{counter}</h1>
      </div>
    </div>
  );
};

export default Seconds;
