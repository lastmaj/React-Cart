import React from "react";
import Person from "./Person/Person";

const persons = props => {
  const data = props.persons.map(p => (
    <Person person={p} key={p.id} change={props.change} delete={props.delete} />
  ));
  return <div>{data}</div>;
};

export default persons;
