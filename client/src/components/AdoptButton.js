import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function AdoptButton(props) {
  const { pet, petId } = props;
  const adoptPet = () => {
    axios.delete("http://localhost:8000/api/pet/" + petId).then((res) => {
      navigate("/");
    });
  };
  return (
    <Button
      variant="contained"
      onClick={adoptPet}
      style={{ backgroundColor: "red", margin: '15px'}}
    >
      <Typography>Adopt {pet.name}</Typography>
    </Button>
  );
}

export default AdoptButton;
