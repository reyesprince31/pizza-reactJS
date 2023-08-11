import PropTypes from "prop-types";

function Pizza({ name, photoName, ingredients, price, soldOut }) {
  const extractName = (text) => text.split("/").pop().split(".")[0];

  return (
    <li id="pizza-list" className={`pizza ${soldOut && "sold-out"}`}>
      <img src={photoName} alt={extractName(photoName)} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

Pizza.propTypes = {
  name: PropTypes.string,
  photoName: PropTypes.string,
  ingredients: PropTypes.string,
  price: PropTypes.number,
  soldOut: PropTypes.bool,
};

export default Pizza;
