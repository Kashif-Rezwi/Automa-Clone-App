import { memo, useState } from "react";
import "./customnode.css";
import { Handle, NodeToolbar } from "reactflow";
import { RxLightningBolt } from "react-icons/rx";
import { RiWindow2Line, RiCursorLine, RiParagraph } from "react-icons/ri";
import { TbPhoto } from "react-icons/tb";
import { BiPencil } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import stringReducer from "../../../utils/stringReducer";

const icons = {
  RxLightningBolt: <RxLightningBolt />,
  RiWindow2Line: <RiWindow2Line />,
  RiCursorLine: <RiCursorLine />,
  RiParagraph: <RiParagraph />,
  TbPhoto: <TbPhoto />,
};

const CustomNode = ({ id, selected, type, data, ...rest }) => {
  const { label, nodeType, description, Icon, bgColor } = data;

  const [isVisible, setIsVisible] = useState(false);

  //   console.log({ id, selected, type, nodeType, data, ...rest });
  return (
    <>
      {nodeType === "default" && <Handle type="source" position="top" />}

      <NodeToolbar isVisible={isVisible}>
        <div
          className="toolbar-wrapper"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          <p>{id}</p>
          <div>
            <AiOutlineDelete
              onClick={() => console.log({ Status: "Delete" })}
            />
            <BiPencil onClick={() => console.log({ Status: "Edit" })} />
          </div>
        </div>
      </NodeToolbar>

      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className={`custom-node-wrapper ${selected ? "selected" : ""}`}
      >
        <div style={{ backgroundColor: bgColor }}>{icons[Icon]}</div>
        <div>
          <p>{stringReducer(label, 15)}</p>
          <p>{stringReducer(description, 16)}</p>
        </div>
      </div>

      {(nodeType === "default" || nodeType === "input") && (
        <Handle type="target" position="bottom" />
      )}
    </>
  );
};

export default memo(CustomNode);
