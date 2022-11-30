import React from "react";

import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  margin: 10px 0 0 50px;
  color: white;
  text-decoration: none;
  font-size: 20px;
`;

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <StyledNavLink to="/">All Data</StyledNavLink>
          <StyledNavLink to="/add">Add user</StyledNavLink>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
