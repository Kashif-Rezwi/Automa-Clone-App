import React, { useState } from "react";
import stringReducer from "../../../../utils/stringReducer";
import getIcons from "../../../../utils/getIcons";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { VscPinned } from "react-icons/vsc";
import { IconButton } from "@mui/material";

function NodeComp({ title, type, icon, color }) {
  const [isVisible, setIsVisible] = useState(false);

  const onDragStart = (event, type, label, Icon, color) => {
    const dragData = {
      type,
      label,
      Icon,
      color,
    };
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(dragData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="node"
      onDragStart={(event) => onDragStart(event, type, title, icon, color)}
      draggable
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div style={{ display: isVisible ? "block" : "none" }}>
        <IconButton disableRipple>
          <AiOutlineInfoCircle />
        </IconButton>

        <IconButton disableRipple>
          <VscPinned />
        </IconButton>
      </div>
      {getIcons(icon)}
      <p>{stringReducer(title, 10)}</p>
    </div>
  );
}

export default NodeComp;
