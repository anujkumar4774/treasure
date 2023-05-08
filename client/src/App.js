import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbars from "./components/layout/Navbars";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Challenge1 from "./components/challenge/Challenge1";
import Challenge2 from "./components/challenge/Challenge2";
import Challenge3 from "./components/challenge/Challenge3";
import Challenge4 from "./components/challenge/Challenge4";
import Challenge5 from "./components/challenge/Challenge5";
import Finish from "./components/challenge/Finish";
import End from "./components/challenge/End";
import UserDetail from "./components/adminDashboard/UserDetail";
import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
          
            <Route path="/" component={Navbars} />
            <Route  exact path="/"  component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/challenge1" component={Challenge1} />
            <PrivateRoute exact path="/challenge2" component={Challenge2} />
            <PrivateRoute exact path="/challenge3" component={Challenge3} />
            <PrivateRoute exact path="/challenge4" component={Challenge4} />
            <PrivateRoute exact path="/challenge5" component={Challenge5} />
            <PrivateRoute exact path="/finish" component={Finish} />
            <PrivateRoute exact path="/end" component={End} />
            <PrivateRoute exact path="/userdetail" component={UserDetail} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
              
            
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
