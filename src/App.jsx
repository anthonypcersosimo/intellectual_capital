import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing';
import Container from "react-bootstrap/Container";
// import Landing from './pages/Landing'

function App() {
  return (
    <Router>
      <NavBar />
      <Container className='my-2'>
        <Switch>
          <Route
            exact
            path='/'
            render={props => <Landing/>}
          />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
