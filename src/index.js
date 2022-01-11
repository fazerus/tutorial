import React from "react";
import ReactDom from "react-dom";

import "./index.css";

//setup vars
const author = "Hunter S. Thompson, Ralph Steadman";
const title = "Fear and Loathing in Las Vegas";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/51B-PacEmGL._AC_SX184_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book author="slawek" />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
