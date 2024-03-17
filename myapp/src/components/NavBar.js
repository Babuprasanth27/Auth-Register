import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../services/Auth";

export default function NavBar(props) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark" style={{ background: '#e67e22' }}>
      <Link className="navbar-brand" to="/">Auth</Link>
      <button 
        className={`navbar-toggler ${isNavCollapsed ? "" : "collapsed"}`} 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarsExampleDefault" 
        aria-controls="navbarsExampleDefault" 
        aria-expanded={!isNavCollapsed} 
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div 
        className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`} 
        id="navbarsExampleDefault"
        style={{ transition: "max-height 0.3s ease-in-out" }} // Add this line for smooth transition
      >
        <ul className="navbar-nav ml-auto">
          {!isAuthenticated() ? <li className="nav-item"><Link className="nav-link" to="/">Register</Link></li> : null}
          {!isAuthenticated() ? <li><Link className="nav-link" to="/login">Login</Link></li> : null}
          {isAuthenticated() ? <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li> : null}
          {isAuthenticated() ? <li><a className="nav-link" onClick={props.logoutUser} style={{ cursor: "pointer" }}>Logout</a></li> : null}
        </ul>
      </div>
    </nav>
  );
}
