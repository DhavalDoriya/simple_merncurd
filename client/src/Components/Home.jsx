import React from "react";
import AllNotes from "./AllNotes";

function Home() {
  return (
    <>
      <AllNotes />
      <h6 style={{ textAlign: "center" }}>
        you can add maximum of 10 notes due some reason
      </h6>
    </>
  );
}

export default Home;
