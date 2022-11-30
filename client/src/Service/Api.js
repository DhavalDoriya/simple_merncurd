import axios from "axios";

const URL = `http://localhost:8000/`;

export const addNote = async (data) => {
  try {
    return await axios.post(`${URL}`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getNotes = async (data) => {
  try {
    return await axios.get(`${URL}`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getNote = async (id) => {
  try {
    return await axios.get(`${URL}show/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const editNote = async (user, id) => {
  try {
    return await axios.post(`${URL}edit/${id}`, user);
  } catch (error) {
    console.log(error);
  }
};

export const deleteNotedata = async (id) => {
  try {
    return await axios.delete(`${URL}delete/${id}`);
  } catch (error) {
    console.log(error);
  }
};
