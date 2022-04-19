import React from "react";

const Featured = ({ match }) => {
  let name = `${match.params.name}`;
  let topic = match.params.topic;
  return (
    <div className="main-content">
      <h2>{name.toUpperCase()}: </h2>
      <p>
        Introducing <strong>{name.toUpperCase()}</strong>, a teacher who loves
        teaching courses about <strong>{topic.toUpperCase()}</strong>!
      </p>
    </div>
  );
};

export default Featured;
