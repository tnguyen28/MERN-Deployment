import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { Link } from "@reach/router";

function PetList(props) {
  const [pet, setPet] = useState(props.pet);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table style={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pet.map((pet, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {pet.name}
                </TableCell>
                <TableCell>{pet.type}</TableCell>
                <TableCell>
                  <Link to={"/" + pet._id}>details</Link> | <Link to={"/" + pet._id + '/edit'}>edit</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default PetList;
