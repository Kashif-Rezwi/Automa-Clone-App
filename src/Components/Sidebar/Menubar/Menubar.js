import React from "react";
import "./menubar.css";

import { GoWorkflow, GoHistory } from "react-icons/go";
import { FiPackage } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { RiHardDrive2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi2";
import { IconButton } from "@mui/material";

function Menubar() {
  return (
    <div className="menu-wrapper">
      <div>
        <div className="logo">
          <img src="./assets/logo.svg" />
        </div>

        <div className="option">
          <IconButton disableTouchRipple>
            <GoWorkflow />
          </IconButton>
        </div>
        <div className="option">
          <IconButton disableTouchRipple>
            <FiPackage />
          </IconButton>
        </div>
        <div className="option">
          <IconButton disableTouchRipple>
            <LuClock3 />
          </IconButton>
        </div>
        <div className="option">
          <IconButton disableTouchRipple>
            <RiHardDrive2Line />
          </IconButton>
        </div>
        <div className="option">
          <IconButton disableTouchRipple>
            <GoHistory />
          </IconButton>
        </div>
        <div className="option">
          <IconButton disableTouchRipple>
            <IoSettingsOutline />
          </IconButton>
        </div>
        <div className="option">
          <IconButton disableTouchRipple>
            <BiTargetLock />
          </IconButton>
        </div>
      </div>

      <div>
        <div className="option">
          <IconButton disableTouchRipple>
            <AiOutlineInfoCircle />
          </IconButton>
        </div>
        <div className="option">
          <IconButton disableTouchRipple>
            <HiOutlineUsers />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Menubar;
