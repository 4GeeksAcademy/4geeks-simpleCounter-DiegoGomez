import React from "react";
import Card from "./Card";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <Card imageUrl="http://via.placeholder.com/350x150" title="A nice image" />
    </div>
  );
};

export default Home;
