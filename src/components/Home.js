import React, { useEffect, useState } from "react";
import "../App.css";
import Search from "./Search";
import ShipCard from "./ShipCard";
import { useQuery } from "react-query";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [filterTerm, setFilterTerm] = useState("");
  const [starships, setStarships] = useState({
    page: 1,
    ships: [],
    isError: false,
  });
  const { refetch, isLoading } = useQuery(
    "starships",
    async () => {
      try {
        const { data } = await axios.get(
          "https://swapi.dev/api/starships/?page=" + starships.page
        );
        console.log(data);
        setStarships({
          page: starships.page + 1,
          ships: [...starships.ships, ...data.results],
          isError: false,
        });
        return data;
      } catch (err) {
        setStarships({ ...starships, isError: true });
      }
    },
    { enabled: false }
  );

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="home-container">
      <img
        className="star-wars-logo"
        src={require("../assets/Star_Wars_Logo.png")}
      />

      <Search setFilterTerm={setFilterTerm} />

      <div className="all-ships-container">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          starships.ships.map(
            (s, i) =>
              (s.name.toLowerCase().includes(filterTerm.toLowerCase()) ||
                s.model.toLowerCase().includes(filterTerm.toLowerCase())) && (
                <NavLink
                  className="navlink"
                  to={`/detail/${s.url
                    .slice(
                      s.url.indexOf("starships") + "starships".length,
                      s.url.length
                    )
                    .replaceAll("/", "")}`}
                >
                  <ShipCard {...s} key={i} />
                </NavLink>
              )
          )
        )}
      </div>

      {!starships.isError && (
        <button onClick={() => refetch()}>Load More</button>
      )}
    </div>
  );
};

export default Home;
