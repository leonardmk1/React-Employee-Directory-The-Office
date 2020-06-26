import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar className="blue-gradient" dark expand="md">
        <MDBNavbarBrand>
          <h1 className="black-text p-2" style={{fontFamily:"American Typewriter", textShadow:"2px 2px white"}}>Dunder Mifflin Office Directory</h1>
        </MDBNavbarBrand>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;