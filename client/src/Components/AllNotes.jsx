import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  Button,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getNotes, deleteNotedata } from "../Service/Api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 75%;
  margin: auto;
`;

function AllNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = async () => {
    let output = await getNotes();
    setNotes(output.data);
    // console.log(output);
  };
  const deleteNote = async (id) => {
    await deleteNotedata(id);
    getAllNotes();
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Home</h1>

      <TableContainer component={Paper}>
        <StyledTable sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell> ID</TableCell> */}
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Update</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notes.map((note) => (
              <TableRow
                key={note._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell component="th" scope="row">
                {note._id}
              </TableCell> */}
                <TableCell align="right">{note.title}</TableCell>
                <TableCell align="right">{note.desc}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="success"
                    component={Link}
                    to={`edit/${note._id}`}
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteNote(note._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </>
  );
}

export default AllNotes;
