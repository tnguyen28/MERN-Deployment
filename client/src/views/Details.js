import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import AdoptButton from "../components/AdoptButton";
import { Link } from "@reach/router";

import Paper from "@material-ui/core/Paper";

function Detail(props) {
  const [pet, setPet] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8000/api/pet/" + props.id).then((res) =>
      setPet({
        ...res.data,
      })
    );
  }, [props]);

  return (
    <div>
      <div>
        <Link to={"/"} className="right">
          back to home
        </Link>
        <h1>Pet Shelter</h1>

        <h2>Details about: {pet.name}</h2>
        <AdoptButton pet={pet} petId={pet._id} />
      </div>

      <Paper
        variant="outlined"
        square
        style={{ borderColor: "black", border: "3px solid" }}
      >
        <div>
          <h3>Pet type: </h3>
          <p>{pet.type}</p>
        </div>
        <div>
          <h3>Description: </h3>
          <p>{pet.description}</p>
        </div>
        <div>
          <h3>Skills:</h3>
          {pet.skills ? <p>{pet.skills.map((skill) => skill + "  |  ")}</p> : " "}
        </div>
      </Paper>
    </div>
  );
}

export default Detail;
