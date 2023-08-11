import PropTypes from "prop-types";

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        Were open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

Order.propTypes = {
  closeHour: PropTypes.number,
  openHour: PropTypes.number,
};

export default Order;
