import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-link" to="/">
        Bloghub
      </Link>

      <Link className="navbar-link" to="/articles">
        Articles
      </Link>
    </nav>
  );
};

export default Navbar;
