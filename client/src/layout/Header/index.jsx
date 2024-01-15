import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row justify-content-between">
          <div className="logo">
            <h2>Pulse Menu</h2>
          </div>
          <div className="links">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/wishlist">Wishlist</Link>
                </li>
                <li>
                  <Link to="/add-new">Add</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
