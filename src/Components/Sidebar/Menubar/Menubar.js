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
import { IconButton, Tooltip } from "@mui/material";

function Menubar() {
  return (
    <div className="menu-wrapper">
      <div>
        <div className="logo">
          <img src="./assets/logo.svg" />
        </div>

        <div className="option">
          <Tooltip title="Workflows" placement="right">
            <IconButton disableTouchRipple>
              <GoWorkflow />
            </IconButton>
          </Tooltip>
        </div>
        <div className="option">
          <Tooltip title="Packages" placement="right">
            <IconButton disableTouchRipple>
              <FiPackage />
            </IconButton>
          </Tooltip>
        </div>
        <div className="option">
          <Tooltip title="Schedule" placement="right">
            <IconButton disableTouchRipple>
              <LuClock3 />
            </IconButton>
          </Tooltip>
        </div>
        <div className="option">
          <Tooltip title="Storage" placement="right">
            <IconButton disableTouchRipple>
              <RiHardDrive2Line />
            </IconButton>
          </Tooltip>
        </div>
        <div className="option">
          <Tooltip title="Logs" placement="right">
            <IconButton disableTouchRipple>
              <GoHistory />
            </IconButton>
          </Tooltip>
        </div>
        <div className="option">
          <Tooltip title="Settings" placement="right">
            <IconButton disableTouchRipple>
              <IoSettingsOutline />
            </IconButton>
          </Tooltip>
        </div>
        <div className="option">
          <Tooltip title="Element selector" placement="right">
            <IconButton disableTouchRipple>
              <BiTargetLock />
            </IconButton>
          </Tooltip>
        </div>
      </div>

      <div>
        <div className="option">
          <IconButton disableTouchRipple>
            <HiOutlineUsers />
          </IconButton>
        </div>
        <div className="option">
          <Tooltip title="About" placement="right">
            <IconButton disableTouchRipple>
              <AiOutlineInfoCircle />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Menubar;
