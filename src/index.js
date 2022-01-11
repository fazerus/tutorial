import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return <h4>Greatting from react and git</h4>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
