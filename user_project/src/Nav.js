import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

import './Home.css';
const Nav=()=>{

  

return(
  <div className="Nav">
    <ul>
      <li>
        <h2 className="logo">LetsGrowMore</h2>
        <NavLink exact to="./data">
        <button className="btn" >GET USER</button>
        </NavLink>
      </li>
    </ul>
  </div>
);
};
export default Nav;