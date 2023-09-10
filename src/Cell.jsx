import React, { useState } from "react";
import Circle from "./Circle";
import Cross from "./Cross";

function Cell(props) {
  function handleClick(e) {
    let c = props.turns;
    c += 1;
    props.tie(c);
    if (!props.win && props.turns < 9) {
      var cells = props.curr;

      var temp = [...cells];
      temp[props.id] = props.go;

      props.updater(temp);
      if (props.go === "O") {
        setLogo(<Circle />);
        props.setGo("X");
      }

      if (props.go === "X") {
        setLogo(<Cross />);
        props.setGo("O");
      }
    }
  }

  const [logo, setLogo] = useState();

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className="square"
      id={props.id}
      onClick={handleClick}
    >
      {logo}
    </div>
  );
}

export default Cell;
