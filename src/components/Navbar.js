import React, { useState } from "react";
// import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/" className="navbar-logo"> 
            <h1>SEO Playboard <i className='fab fa-typo3' /></h1>
        </Link> 
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/services"> Services </Link>
          {/* <Link to="/menu"> Menu </Link> */}
          <Link to="/login"> Login </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/services"> Services </Link>
        {/* <Link to="/menu"> Menu </Link> */}
        <Link to="/login"> Login </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;