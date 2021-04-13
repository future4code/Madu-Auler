import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminHomePage from "./pages/AdminHomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage"
import HomePage from "./pages/HomePage";
import CreateTripPage from "./pages/CreateTripPage";
import ListTripsPage from "./pages/ListTripsPage"
import LoginPage from "./pages/LoginPage"
import TripDetailsPage from "./pages/TripDetailsPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/adminhomepage">
            <AdminHomePage />
          </Route>
          <Route exact path="/applicationformpage">
            <ApplicationFormPage />
          </Route>
          <Route exact path="/createtrippage">
            <CreateTripPage />
          </Route>
          <Route exact path="/listtripspage">
            <ListTripsPage />
          </Route>
          <Route exact path="/loginpage">
            <LoginPage />
          </Route>
          <Route exact path="/tripdetailspage">
            <TripDetailsPage />
          </Route>
        </Switch>
      </Router>

    </div >
  );
}

export default App;
