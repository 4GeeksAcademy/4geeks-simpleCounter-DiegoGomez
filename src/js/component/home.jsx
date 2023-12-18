import React from "react";
import Card from "./Card";
import Seconds from "./SecondsCounter";

const Home = () => {
  return (
	  <div className="text-center">
		  {/*Paso el componente del contador como un prop que asigno a time, el cual es un h1 en la card.  */}
      <Card  title="Contador de segundos" description="Creado por Diego Gómez" time= {<Seconds />} />
    </div>
  );
};

export default Home;
