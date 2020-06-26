import React, { useState } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import Navbar from "./components/Navbar.js";
import Search from "./components/Search.js";

const App = () => {
    return (
      <>
      <Navbar></Navbar>
      <MDBContainer className="mb-4">
        <Search>
        </Search>
      </MDBContainer>
      </>
    );
  
}

export default App;
