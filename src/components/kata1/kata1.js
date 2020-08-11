import React, { useState } from "react";

const Kata1 = (props) => {
  const [text, setText] = useState("Texto de prueba");
  const [hidden, setHidden] = useState(false);

  const hiddenText = () => {
    props.setList(!props.list);
  };

  let content = (
    <div>
      <p>{props.list ? "" : text}</p>
      <button onClick={hiddenText}>Ocultar</button>
    </div>
  );
  return content;
};

export default Kata1;
