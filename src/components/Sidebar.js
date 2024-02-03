import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaCloudUploadAlt, FaFileInvoice, FaCalendarAlt } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import companyLogo from "../assets/company_logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={companyLogo} alt="" />
      <div className="sideLinks">
        <h2>
          <MdDashboard /> Dashboard
        </h2>
      </div>
      <div id="uploadBtn" className="sideLinks">
        <h2>
          <FaCloudUploadAlt /> Upload
        </h2>
      </div>
      <div className="sideLinks">
        <h2>
          <FaFileInvoice /> Invoice
        </h2>
      </div>
      <div className="sideLinks">
        <h2>
          <AiOutlineSchedule /> Schedule
        </h2>
      </div>
      <div className="sideLinks">
        <h2>
          <FaCalendarAlt /> Calendar
        </h2>
      </div>
      <div className="sideLinks">
        <h2>
          <IoNotifications /> Notification
        </h2>
      </div>
      <div className="sideLinks">
        <h2>
          <IoMdSettings /> Setting
        </h2>
      </div>
    </div>
  );
};

export default Sidebar;
