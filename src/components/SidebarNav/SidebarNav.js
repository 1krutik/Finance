// SidebarNav.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faWallet, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './SidebarNav.css';

function SidebarNav() {
  return (
    <Nav className="flex-column fixed">
      <Link to="/dashboard">
      <img src= "https://www.shutterstock.com/image-vector/finance-logo-business-maker-best-260nw-2476228421.jpg" style={{borderRadius:"100px"}} alt="Logo" className="logo-img" />
      </Link>
      <Nav.Link as={Link} to="/dashboard"><FontAwesomeIcon icon={faHome} className="nav-icon"/> Dashboard</Nav.Link>
      <Nav.Link as={Link} to="/incomes"><FontAwesomeIcon icon={faDollarSign} className="nav-icon" /> Incomes</Nav.Link>
      <Nav.Link as={Link} to="/expenses"><FontAwesomeIcon icon={faWallet} className="nav-icon" /> Expenses</Nav.Link>
      {/* Exit Link */}
      <Nav.Link as={Link} to="/signout" className="exit-link">
       Sign Out
      </Nav.Link>
      <a href="https://github.com/1krutik" style={{fontSize:"50px", marginLeft:"70px", color:"black"}} className="github-link" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} />  
    </a>
    </Nav>
  );
}

export default SidebarNav;
