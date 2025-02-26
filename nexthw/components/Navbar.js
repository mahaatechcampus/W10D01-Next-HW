import React from "react";
import Link from "next/link"
function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Next-HW
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <Link href="/">
                <a className="nav-link active" aria-current="page" href="#">
                Home
                </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/about">
                <a className="nav-link" >
                About Us
                </a>
                </Link>
                
              </li>
           
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
