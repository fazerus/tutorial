// 2:26

import React from "react";
import ReactDom from "react-dom";

import "./index.css";

//setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51B-PacEmGL._AC_SX184_.jpg",
  title: "Fear and Loathing in Las Vegas",
  author: "Hunter S. Thompson",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book author={firstBook.title} />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
