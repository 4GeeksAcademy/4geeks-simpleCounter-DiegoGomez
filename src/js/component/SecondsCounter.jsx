import React, { useState, useEffect } from "react";

const Seconds = () => {
  //Declaro counter como la variable para mi estado, y setCounter para poder
  //"setearlo", es decir, actualizar la variable
  const [counter, setCounter] = useState(0);
  //IntervalId y setIntervalID tienen la misma lógica que los dos anteriores, solo que en vez del intervalo como
  //tal es su id, es una forma de guardar su identificador para más tarde poder hacer el clearInterval.
  const [intervalId, setIntervalId] = useState(null);

  const startInterval = () => {
     //Compruebo si no hay un interval existente.
    if (!intervalId) {
      const newInterval = setInterval(() => {
        //Creo un interval el cual se ejecuta cada segundo, este interval se añade al estado,
    //de forma que lo que se está actualizando es su estado.
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
      //Para poder continuar la cuenta del interval inicial sin tener que repetirla, guardo el intervalo
      //con intervalId, de esta forma, cuando su estado cambie a un reset o a un stop, esas acciones sobre 
      //el mismo id.
      setIntervalId(newInterval);
    }
  };

  //Para parar el interval, cambio su estado a null, de forma que no tiene ninguna forma
  //de sumar al valor inicial 0 del counter
  const stopInterval = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  //Como el valor por defecto del contador es 0, si lo que quiero es reiniciarlo
  //le cambio su estado a su valor inicial dándole un 0.
  const resetInterval = () => {
    stopInterval();
    setCounter(0);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="m-3 d-flex flex-direction-column">
        {/* Reloj y contador */}
        <i className="far fa-clock fs-1 px-4"></i>
        <h1>{counter}</h1>
      </div>
      {/* Botones que ejecutan las funciones */}
      <div className="d-flex gap-5">
        <button onClick={stopInterval} className="bg-transparent border-0">
          <i className="fa-solid fa-pause text-white"></i>
        </button>
        <button onClick={startInterval} className="bg-transparent border-0">
          <i className="fa-solid fa-play text-white"></i>
        </button>
        <button onClick={resetInterval} className="bg-transparent border-0">
          <i className="fa-solid fa-rotate-left text-white"></i>
        </button>
      </div>
    </div>
  );
};

export default Seconds;
