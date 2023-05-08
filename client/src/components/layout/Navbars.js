import React from "react";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

const Navbars =({auth,logoutUser,...rest})=>{
  const onLogoutClick = e => {
    e.preventDefault();
    logoutUser();
  };


  return (
    <Navbar>
      <Container >
        <Navbar.Brand href="dashboard">Treasure Hunt</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Nav style={{display:"inline-block"}} >
          {auth.user.name === "admin"?<Link to="/userdetail">UserDetail</Link>:<></>}
        </Nav>
        <Nav style={{display:"inline-block",float:"right"}} >
            {auth.isAuthenticated===true?<Nav.Link
              
              onClick={onLogoutClick}
              className="btn btn-large btn-flat waves-effect white black-text"
            >
              Logout
            </Nav.Link>:<Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>}
              
          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}
Navbars.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps,{ logoutUser })(Navbars);
