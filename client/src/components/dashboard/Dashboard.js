import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GameCard from "../challenge/GameCard";
const Dashboard = ()=>{
  return  (<div className="container">
    <GameCard/>

    </div>
  );
   
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(Dashboard);
