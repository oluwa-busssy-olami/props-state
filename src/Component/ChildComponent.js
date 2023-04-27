//import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <h2 style={props.style}> My name is {props.name} </h2>{" "}
      <p> I'm {props.age} years old</p> <p> {props.text} </p> ;{" "}
    </div>
  );
};

export default ChildComponent;
