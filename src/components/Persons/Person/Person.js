import React from "react";

const person = props => {
  const style = {
    boxShadow: "0 2px 3px limegreen",
    text: "center",
    border: "2px gray solid",
    width: "60%",
    padding: "16px",
    margin: "16px auto"
  };

  return (
    <div style={style}>
      <p onClick={() => props.delete(props.person.id)}>
        Hello, I'm {props.person.name} : "{props.person.corp}"
      </p>
      <input
        value={props.person.name}
        onChange={event => props.change(event, props.person.id)}
      />
    </div>
  );
};

export default person;
