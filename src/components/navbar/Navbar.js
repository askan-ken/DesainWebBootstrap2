import React, { useState } from "react";
import logo from "../assets/logo.png";
import lam from "../assets/lampung.png";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
const Menu = () => (
  <>
    <p>
      <a href="#">Beranda</a>
    </p>
    <p>
      <a href="#">Pemerintahan desa</a>
    </p>
    <p>
      <a href="#">Prifle desa</a>
    </p>
    <p>
      <a href="#">Lemmas</a>
    </p>
    <p>
      <a href="#">Data Desa</a>
    </p>
    <p>
      <a href="#">PPID</a>
    </p>
    <p>
      <a href="#">SIG</a>
    </p>
    <p>
      <a href="#">Transparansi Keuangan</a>
    </p>
    <p>
      <a href="#">Surat Online</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="desa__navbar">
      <div className="desa__navbar-header">
        <div className="desa__navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="desa__navbar-search">
          <input type="text" id="search" placeholder="nyari apa?" />
          <button type="button">Search</button>
        </div>
      </div>
      <div className="desa__navbar-links">
        <div className="desa__navbar-links__logo">
          <img src={lam} alt="" />
        </div>
        <div className="desa__navbar-links__tab">
          <Menu />
        </div>
        <div className="desa__navbar-links__sign">
          <button>Sign In</button>
        </div>
        <div className="desa__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="white"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="white"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="desa__navbar-menu_container scale-up-center">
              <div className="desa__navbar-menu_container-links">
                <Menu />
                <div className="desa__navbar-menu_container-links__sign">
                  <button>Sign In</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
