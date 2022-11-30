import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
} from "@mui/material/";
import styled from "@emotion/styled";
import { editNote, getNote } from "../Service/Api";
import { useNavigate, useParams } from "react-router-dom";
// import { response } from "express";

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

function EditNote() {
  const navigate = useNavigate();
  const [User, setUser] = useState(defaultuser);
  //for load note data to update
  useEffect(() => {
    LoadNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { id } = useParams();

  const LoadNote = async () => {
    const output = await getNote(id);
    // console.log(output.data);
    setUser(output.data);
  };

  //for submit a note data
  const onvaluechange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...User, [e.target.name]: e.target.value });
    console.log(User);
  };

  const editdata = async () => {
    await editNote(User, id);
    navigate("/");
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Edit Note</h1>
      <Container>
        <FormControl>
          <InputLabel>Title</InputLabel>
          <Input
            onChange={(e) => onvaluechange(e)}
            name="title"
            value={User.title}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Description</InputLabel>
          <Input
            onChange={(e) => onvaluechange(e)}
            name="desc"
            value={User.desc}
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => editdata()}>
            Edit Note
          </Button>
        </FormControl>
      </Container>
    </>
  );
}

export default EditNote;
