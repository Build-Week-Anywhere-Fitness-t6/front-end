import { Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import './App.css';

//Components
import AddClass from "./components/AddClass";
import Dashboard from "./components/Dashboard";
import EditClass from "./components/EditClass";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/login";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./components/SignUp";
import Team from "./components/Team";

// Material UI imports
import { Container } from "@material-ui/core";




function App() {
  return (
  <Container maxWidth='xl'>
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/edit/:id" component={EditClass}/>
        <Route path="/add" component={AddClass}/>
        <Route path="/dashboard" component ={Dashboard} />
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/login">
          <Login  />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/signup">
          {/* {token !== null ? <Redirect to='/upcomingevents'/>
          :  */}
          <SignUp /> 
          {/* } */}
        </Route>
        <Route exact path="/">
          <Home />
          </Route>
      </Switch>
    </div>
  </Container>
  );
}

export default App;
