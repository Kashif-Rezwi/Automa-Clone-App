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
import { IconButton, Tooltip, Typography } from "@mui/material";

const menus = [
  { title: "Workflows", Icon: <GoWorkflow /> },
  { title: "Packages", Icon: <FiPackage /> },
  { title: "Schedule", Icon: <LuClock3 /> },
  { title: "Storage", Icon: <RiHardDrive2Line /> },
  { title: "Logs", Icon: <GoHistory /> },
  { title: "Settings", Icon: <IoSettingsOutline /> },
  { title: "Element selector", Icon: <BiTargetLock /> },
];

function Menubar() {
  return (
    <div className="menu-wrapper">
      <div>
        <div className="logo">
          <img src="./assets/logo.svg" />
        </div>

        {menus.map((menu, idx) => (
          <div className="option" key={idx}>
            <Tooltip
              title={<Typography>{menu.title}</Typography>}
              placement="right"
              className="menus-tooltip"
            >
              <IconButton disableTouchRipple>{menu.Icon}</IconButton>
            </Tooltip>
          </div>
        ))}
      </div>

      <div>
        <div className="option">
          <IconButton disableTouchRipple>
            <HiOutlineUsers />
          </IconButton>
        </div>
        <div className="option">
          <Tooltip
            title={<Typography>About</Typography>}
            placement="right"
            className="menus-tooltip"
          >
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
