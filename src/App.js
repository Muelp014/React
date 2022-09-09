import logo from "./logo.svg";
import React from 'react'
import './App.css';
import Header from './Component/Header';
import Content from './Component/Content';
import Footer from './Component/Footer';
import Sidebar from './Component/Sidebar';
import Dashboard from './Component/Dashboard';
import Report from './Component/Report';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./Component/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Sidebar/>
      <Route component={Content} path="/Content" />
      <Route component={Dashboard} path="/Dashboard" />
      <Route component={Report} path="/Report" />
      <Route component={Gallery} path="/gallery" />
      {/*<Content/>*/}
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
