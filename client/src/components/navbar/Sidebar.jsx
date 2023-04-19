import React, { useState, useEffect } from "react";
import profile from "../../assets/profile-pic.png";
import "./Sidebar.scss";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="info-container">
          <div className="photo-container">
            <img src={profile} className="profile-pic" alt="my profile image" />
          </div>
          <div className="text-container">Satyam Garhewal</div>
        </div>
        <div className="menu-container">
          <ul className="list-head">
            <li className="list-item"> Home </li>
            <li className="list-item"> About Me </li>
            <li className="list-item"> What I do </li>
            <li className="list-item"> Resume </li>
            <li className="list-item"> Portfolio </li>
            <li className="list-item"> Contact </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
