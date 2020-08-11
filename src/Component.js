import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "./utils/storage";
import tasks from "./data";

const Component = () => {
  const [color, setColor] = useState("Amarillo");
  const [flag, setFlag] = useState(true);
  const { sharing } = useContext(StoreContext);
  console.log(sharing);

  const changedColor = () => {
    setColor("Amarillo");
  };

  useEffect(() => {
    // alert("useEffect funcionando");
    return () => {};
  }, [color]);

  let content = (
    <div>
      <h1>{color}</h1>
      <button onClick={() => setColor("Verde")}>Verde</button>
      <button onClick={changedColor}>Amarillo</button>
      {tasks.map((task) => {
        return (
          <ul>
            <li>{task.name}</li>
            <li>{task.description}</li>
          </ul>
        );
      })}
    </div>
  );
  return content;
};

export default Component;
