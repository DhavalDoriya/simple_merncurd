import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
} from "@mui/material/";
import styled from "@emotion/styled";
import { addNote } from "../Service/Api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: auto;
  margin-top: 50px;
  & > div {
    margin-top: 20px
`;

const defaultuser = {
  title: "",
  desc: "",
  // details: "",
};

function AddNote() {
  const navigate = useNavigate();
  const [User, setUser] = useState(defaultuser);

  const onvaluechange = (e) => {
    // console.log(e.target.name, e.target.value);
    setUser({ ...User, [e.target.name]: e.target.value });
    console.log(User);
  };

  const Submitdata = async () => {
    await addNote(User);
    navigate("/");
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Add Note</h1>
      <Container>
        <FormControl>
          <InputLabel>Title</InputLabel>
          <Input onChange={(e) => onvaluechange(e)} name="title" />
        </FormControl>
        <FormControl>
          <InputLabel>Description</InputLabel>
          <Input onChange={(e) => onvaluechange(e)} name="desc" />
        </FormControl>
        {/* <FormControl>
          <InputLabel>Details</InputLabel>
          <Input onChange={(e) => onvaluechange(e)} name="details" />
        </FormControl> */}
        <FormControl>
          <Button variant="contained" onClick={() => Submitdata()}>
            Add Note
          </Button>
        </FormControl>
      </Container>
    </>
  );
}

export default AddNote;
