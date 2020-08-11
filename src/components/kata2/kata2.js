import React, { useState } from "react";

import Kata1 from "../kata1/kata1";

const Kata2 = () => {
  const [color, setColor] = useState("");
  const [data, setData] = useState([]);
  const [list, setList] = useState(false);

  console.log(list);

  const handleColor = (props) => {
    setData([...data, color]);
    setColor("");
  };

  const handleInput = (event) => {
    setColor(event.target.value);
    console.log(color);
  };

  let content = (
    <div>
      <h1>Lista de colores</h1>
      <div>
        <input type="text" onChange={handleInput} value={color} />
      </div>
      <button onClick={handleColor}>Agregar</button>
      <br />
      <hr />
      {data != null
        ? data.map((value) => {
            return (
              <ul>
                <li>{value}</li>
              </ul>
            );
          })
        : null}
      <br />
      <br />
      <Kata1 list={list} setList={setList} />
    </div>
  );
  return content;
};

export default Kata2;
