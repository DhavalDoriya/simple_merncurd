import AddNote from "./Components/AddNote";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ShowNote from "./Components/ShowNote";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditNote from "./Components/EditNote";
import { ThemeProvider, createTheme } from "@mui/material/";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/add" element={<AddNote />} />
            <Route path="/show" element={<ShowNote />} />
            <Route path="/edit/:id" element={<EditNote />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
