import React from 'react';
import NaviBar from './Components/Navibar';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
}from "react-router-dom";

import {About} from "./About";
import {Home} from "./Home";

function App() {
  return (
    <>
    <Router>
      <NaviBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
