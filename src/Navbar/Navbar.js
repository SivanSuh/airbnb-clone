import React from "react";
import "./Navbar.css";
import { FaAirbnb } from "react-icons/all";
import Home from "../Home/Home";

function Navbar() {
  return (
    <div className="wrapper">
      <img
        className="foto__background"
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=960"
        alt="foto"
      />
      <div className="navbar">
        <div className="foto__wrapper">
          <div className="logo">
            <FaAirbnb className="logo-airbnb" />
            <h1>airbnb</h1>
          </div>
          <div className="navbar-section">
            <h3>Konaklama Yeri</h3>
            <h3 style={{ margin: "0 20px " }}>Deneyimler</h3>
            <h3>Cevrim İci Deneyimler</h3>
          </div>
          <div>
            <h2>Ev Sahibi Olun</h2>
          </div>
        </div>
        <Home />
        <div className="header">
          <h2>Nereye gitmek istediginize emin degilseniz . Harika</h2>
          <button className="btn__esnekarama">Esnek Arama</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
