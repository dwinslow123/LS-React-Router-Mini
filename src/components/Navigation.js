import React from 'react';
import { Nav, NavItem, } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css'

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>React Router Mini</h1>
        <NavItem>
          <Link className="link-styles" to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link className="link-styles" to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link className="link-styles" to="/contact">Contact</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;