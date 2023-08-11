import PropTypes from "prop-types";
import { useState } from "react";

function Pizza({ id, name, photoName, ingredients, price, soldOut }) {
  const extractName = (text) => text.split("/").pop().split(".")[0];
  const [state, setState] = useState({
    border: "",
    margin: "",
    isClicked: false,
  });

  function handleClick(_id) {
    const selected = {
      border: "1px solid black",
      margin: "2px",
      isClicked: "true",
    };
    !state.isClicked && _id.id === id
      ? setState(selected)
      : setState({ border: "", margin: "", isClicked: false });
  }

  return (
    <li
      id="pizza-list"
      className={`pizza ${soldOut && "sold-out"}`}
      onClick={(e) => {
        // console.log(e.target && { id });
        handleClick(e.target && { id });
      }}
      style={state}>
      <img src={photoName} alt={extractName(photoName)} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : `$ ${price}.00`}</span>
        <span> Qty: {}</span>
      </div>
    </li>
  );
}

Pizza.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  photoName: PropTypes.string,
  ingredients: PropTypes.string,
  price: PropTypes.number,
  soldOut: PropTypes.bool,
};

export default Pizza;
