import React, { useEffect, useState } from "react";
import PetList from "../components/PetList";
import { Link } from "@reach/router";
import axios from "axios";
import "../App.css";

function Main() {
  const [pet, setPet] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pet")
      .then((res) => {
        setPet(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="rows">
        <Link to={"/create"} className="right">
          add a pet to the shelter
        </Link>
        <h1>Pet Shelter</h1>
        <h2>These pets are looking for a good home</h2>
      </div>

      {loaded && <PetList pet={pet} />}
    </div>
  );
}
export default Main;
