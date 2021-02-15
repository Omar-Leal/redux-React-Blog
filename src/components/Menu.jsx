import React from 'react'
import { Link } from 'react-router-dom'


const Menu = () => (
  <nav className="Menu">
    <Link to="/">
      Users
    </Link>
    <Link to="/tasks">
      Tasking...
    </Link>
  </nav>
  
);

export default Menu;