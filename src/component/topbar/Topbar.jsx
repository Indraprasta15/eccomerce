import React from 'react';
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="top-wrap">
        <div className="top-left">
          <span className="logo">INDA ADMIN</span>
        </div>
        <div className="top-right">
          <div className="top-icon">
            <NotificationsNone />
            <span className="top-badge">2</span>
          </div> 
          <div className="top-icon">
            <Language />
            <span className="top-badge">2</span>
          </div> 
          <div className="top-icon">
            <Settings />
          </div> 
          <img 
            src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" 
            className="avatar" />
        </div>
      </div>
    </div>
  )
}
