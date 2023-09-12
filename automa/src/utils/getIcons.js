import React from "react";
import { RxLightningBolt } from "react-icons/rx";
import { RiWindow2Line, RiCursorLine, RiParagraph } from "react-icons/ri";
import { TbPhoto } from "react-icons/tb";

function getIcons(requestIcon) {
  const icons = {
    RxLightningBolt: <RxLightningBolt />,
    RiWindow2Line: <RiWindow2Line />,
    RiCursorLine: <RiCursorLine />,
    RiParagraph: <RiParagraph />,
    TbPhoto: <TbPhoto />,
  };

  return icons[requestIcon];
}

export default getIcons;
