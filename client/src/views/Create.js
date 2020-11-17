import React, { useEffect, useState } from "react";
import axios from "axios";
import PetForm from "../components/PetForm";
import { navigate, Link } from "@reach/router";

function Create(props) {
  const [pet, setPet] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/pet/create").then((res) => {
      setPet(res.data);
      setLoaded(true);
    });
  }, []);

  const createPet = ({ name, type, description, skill1, skill2, skill3 }) => {
    const skills = [skill1, skill2, skill3];
    axios
      .post("http://localhost:8000/api/pet/create", {
        name,
        type,
        description,
        skills,
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          const errorResponse = err.response.data.errors;
          const errorArr = [];
          for (const key of Object.keys(errorResponse)) {
            errorArr.push(errorResponse[key].message);
          }

          setErrors(errorArr);
        }
      });
  };

  return (
    <div>
      <div>
        <Link to={"/"} className="right">
          back to home
        </Link>
        <h1>Pet Shelter</h1>
        <h2>Know a pet needing a home?</h2>
      </div>

      {loaded && (
        <>
          <PetForm
            buttonName="Add"
            onSubmitProp={createPet}
            initialName={""}
            initialType={""}
            initialDescription={""}
            initialSkill1={""}
            initialSkill2={""}
            initialSkill3={""}
            errors={errors}
          />
        </>
      )}
    </div>
  );
}

export default Create;
