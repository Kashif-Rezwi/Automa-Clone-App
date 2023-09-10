import React, { useState } from "react";
import "./nodebar.css";
import { GiEarthAmerica } from "react-icons/gi";
import NodeComp from "./NodeComp";
import { RiSearch2Line } from "react-icons/ri";
import { BsFillCircleFill } from "react-icons/bs";
import { IconButton } from "@mui/material";
import { BiMinus, BiPlus } from "react-icons/bi";

const nodes = [
  {
    title: "Trigger",
    type: "input",
    icon: "RxLightningBolt",
    color: "#fde047",
  },
  {
    title: "New Window",
    type: "default",
    icon: "RiWindow2Line",
    color: "#fdba74",
  },
  {
    title: "Take Screenshot",
    type: "default",
    icon: "TbPhoto",
    color: "#fcb974",
  },
  {
    title: "Click Element",
    type: "default",
    icon: "RiCursorLine",
    color: "#85eeab",
  },
  { title: "Get Text", type: "default", icon: "RiParagraph", color: "#85eeab" },
];

function Nodebar() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <aside className="nodes-container">
      <div className="nodes-header">
        <div>
          <GiEarthAmerica />
          <p>Testing</p>
        </div>

        <div>
          <RiSearch2Line />
          <input type="text" placeholder="Search... (ctrl+f)" />
        </div>
      </div>
      <div className="nodes-content">
        <div className="nodes-type">
          <div>
            <BsFillCircleFill />
            <p>General</p>
          </div>
          <IconButton disableRipple onClick={() => setIsVisible(!isVisible)}>
            {!isVisible ? <BiPlus /> : <BiMinus />}
          </IconButton>
        </div>
        <div className={`nodes-wrapper ${!isVisible ? "hidden" : ""}`}>
          {nodes.map((node, idx) => (
            <NodeComp key={idx} {...node} />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Nodebar;
