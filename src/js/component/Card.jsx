import React from "react";

const Card = (props) => {
  return (
    <div className="card mb-3 mt-5 p-5 w-75 mx-auto bg-dark text-white">
      <div className="row g-0">
        <div className="col-md-4">
          {/*Contador  */}
          <h1>{props.time}</h1>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            {/*Título  */}
            <h5 className="card-title">{props.title}</h5>
            {/*Descripción  */}
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
