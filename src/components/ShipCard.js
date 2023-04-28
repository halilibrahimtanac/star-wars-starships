import React from "react";
import "../App.css";

const ShipCard = (props) => {
  return (
    <div className="ship-card">
      <img src={require("../assets/5-2-star-wars-ship-vector.png")} />

      <h5>{props.name}</h5>

      <div className="ship-info">
        <label>
          <strong>Model:</strong> {props.model}
        </label>
        <label>
          <strong>Hyperdrive Rating:</strong> {props.hyperdrive_rating}
        </label>
      </div>
    </div>
  );
};

export default ShipCard;
