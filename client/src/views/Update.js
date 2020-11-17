import React, { useEffect, useState } from "react";
import axios from "axios";
import PetForm from "../components/PetForm";
import { navigate, Link } from "@reach/router";

function Update(props) {
  const { id } = props;
  const [pet, setPet] = useState();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pet/" + id)
      .then((res) => {
        setPet(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const updatePet = ({ name, type, description, skill1, skill2, skill3 }) => {
    const skills = [skill1, skill2, skill3];
    axios
      .put("http://localhost:8000/api/pet/" + id, {
        name,
        type,
        description,
        skills,
      })
      .then((res) => navigate("/"))
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        console.log(err.response.data.errors);
        setErrors(errorArr);
      });
  };

  return (
    <div>
      {loaded && (
        <>
          <div>
            <Link to={"/"} className="right">
              back to home
            </Link>
            <h1 className="row title">Pet Shelter</h1>
            <h2>Edit {pet.name}</h2>
          </div>

          <PetForm
            buttonName="Edit"
            onSubmitProp={updatePet}
            initialName={pet.name}
            initialType={pet.type}
            initialDescription={pet.description}
            initialSkill1={pet.skills[0]}
            initialSkill2={pet.skills[1]}
            initialSkill3={pet.skills[2]}
            errors={errors}
          />
        </>
      )}
    </div>
  );
}

export default Update;
