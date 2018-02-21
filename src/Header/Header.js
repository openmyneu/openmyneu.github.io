import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";

export default function Header() {
  return (
    <div className="AppHeader">
      <h1>openMyNEU</h1>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        {/*<NavLink to="/about">About</NavLink>*/}
        {/*<NavLink to="/nostalgic">I'm Feeling Nostalgic</NavLink>*/}
      </nav>
    </div>
  )
}