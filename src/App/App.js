import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Footer from "../Footer/Footer";
import RouteNotFoundPage from "../RouteNotFoundPage/RouteNotFoundPage";
import Header from "../Header/Header";
import MyNeuPage from "../MyNeuPage/MyNeuPage";
import AboutPage from "../AboutPage/AboutPage";
import NostalgicMyNeuPage from "../NostalgicMyNeuPage/NostalgicMyNeuPage";

import './App.css'

export default function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={MyNeuPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/nostalgic" component={NostalgicMyNeuPage} />
        <Route component={RouteNotFoundPage} />
      </Switch>
      <Footer/>
    </div>
  )
}