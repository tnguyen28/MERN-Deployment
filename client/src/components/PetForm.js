import React, { useState } from "react";

import Paper from "@material-ui/core/Paper";

function PetForm(props) {
  //keep track of what is being typed via useState hook
  const {
    buttonName,
    initialName,
    initialType,
    initialDescription,
    initialSkill1,
    initialSkill2,
    initialSkill3,
    onSubmitProp,
    errors,
  } = props;
  const [name, setName] = useState(initialName);
  const [type, setType] = useState(initialType);
  const [description, setDescription] = useState(initialDescription);
  const [skill1, setSkill1] = useState(initialSkill1);
  const [skill2, setSkill2] = useState(initialSkill2);
  const [skill3, setSkill3] = useState(initialSkill3);

  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ name, type, description, skill1, skill2, skill3 });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}

      <Paper
        variant="outlined"
        square
        style={{ borderColor: "black", border: "3px solid" }}
      >
        <div>
          <label>Pet Name:</label>
          <br />
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="name"
            value={name}
          />
          <br />
          <label>Pet Type:</label>
          <br />
          <input
            type="text"
            onChange={(e) => setType(e.target.value)}
            name="type"
            value={type}
          />
          <br />
          <label>Pet Description:</label>
          <br />
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            value={description}
          />
        </div>

        <div>
          <p>Skills (optional)</p>
          <label>Skill 1:</label>
          <br />
          <input
            type="text"
            onChange={(e) => setSkill1(e.target.value)}
            name="skill1"
            value={skill1}
          />{" "}
          <br />
          <label>Skill 2:</label>
          <br />
          <input
            type="text"
            onChange={(e) => setSkill2(e.target.value)}
            name="skill1"
            value={skill2}
          />
          <br />
          <label>Skill 3:</label>
          <br />
          <input
            type="text"
            onChange={(e) => setSkill3(e.target.value)}
            name="skill1"
            value={skill3}
          />
        </div>

        <input type="submit" value={buttonName + " Pet"} />
      </Paper>
    </form>
  );
}

export default PetForm;
