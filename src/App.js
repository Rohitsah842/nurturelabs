import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import SidebarMenu from './Component/SidebarMenu/SidebarMenu';
import KeyWord from './pages/KeyWord/KeyWord';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Matches from './pages/Matches/Matches';
import ManageSource from './pages/ManageSource/ManageSource';
import Integration from './pages/Integration/Integration';
import Alert from './pages/Alert/Alert';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content main-content_mob-v">
          <div className="app-sidebar">
            <SidebarMenu />
          </div>
          <div className="app-main">
            <Switch>
              <Route exact path="/" component={KeyWord} />
              <Route exact path="/Matches" component={Matches} />
              <Route exact path="/ManageSource" component={ManageSource} />
              <Route exact path="/Integration" component={Integration} />
              <Route exact path="/Alert" component={Alert} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
