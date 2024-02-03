import React from "react";
import profile from "../assets/user.png";
import { IoIosNotificationsOutline } from "react-icons/io";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Upload CSV</h2>
      <div className="navRight">
        <IoIosNotificationsOutline className="notify" />
        <img src={profile} alt="user" />
      </div>
    </div>
  );
}

export default Navbar;
