import React from "react";
import "../App.css";
import { NavLink, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const Ship = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery("starship", async () => {
    const { data: responseData } = await axios.get(
      "https://swapi.dev/api/starships/" + id
    );
    console.log(responseData);
    return responseData;
  });

  if (isLoading) {
    return <h1 style={{ color: "#ffe81f" }}>Loading...</h1>;
  }

  return (
    <div className="ship-container">
      <img
        className="star-wars-logo"
        src={require("../assets/Star_Wars_Logo.png")}
      />

      <NavLink className="home-button" to="/">
        {"<"} Home
      </NavLink>

      <div className="detailed-card">
        <div className="detailed-card-header">{data.name}</div>

        <img src={require("../assets/5-2-star-wars-ship-vector.png")} />

        <div className="ship-info" style={{ gap: "25px" }}>
          <label>
            <strong>Model:</strong> {data.model}
          </label>
          <label>
            <strong>Hyperdrive Rating:</strong> {data.hyperdrive_rating}
          </label>
          <label>
            <strong>Passengers:</strong> {data.passengers}
          </label>
          <label>
            <strong>Max Atmosphering Speed:</strong>{" "}
            {data.max_atmosphering_speed}
          </label>
          <label>
            <strong>Manufacturer:</strong> {data.manufacturer}
          </label>
          <label>
            <strong>Crew:</strong> {data.crew}
          </label>
          <label>
            <strong>Cargo Capacity:</strong> {data.cargo_capacity}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Ship;
