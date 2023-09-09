import { memo, useCallback, useState } from "react";
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
  const { label, nodeType, description, Icon, color, reactFlowInstance, ref } =
    data;

  const [isVisible, setIsVisible] = useState(false);

  //   const centerSelectedNode = useCallback(() => {
  //     if (reactFlowInstance) {
  //       // Get the selected node
  //       const selectedNode = reactFlowInstance
  //         .getNodes()
  //         .find((element) => element.selected);

  //       if (selectedNode) {
  //         // Calculate the position to center the node
  //         const editor = ref.current.getBoundingClientRect();
  //         const { left, right, top, bottom } = editor;
  //         const panX = (right - left) / 2;
  //         const panY = (bottom - top) / 2;

  //         const { x, y, width, height } = selectedNode.position;
  //         const centerX = panX - width / 2;
  //         const centerY = panY - height / 2;
  //         reactFlowInstance.fitView({ x: centerX, y: centerY, zoom: 1 });
  //       }
  //     }
  //   }, []);

  return (
    <>
      {nodeType === "default" && (
        <Handle className="edge-handle top" type="source" position="top" />
      )}

      <div
        className="toolbar-wrapper"
        style={{ display: isVisible ? "flex" : "none" }}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <p>{id}</p>
        <div>
          <AiOutlineDelete onClick={() => console.log({ Status: "Delete" })} />
          <BiPencil onClick={() => console.log({ Status: "Edit" })} />
        </div>
      </div>

      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className={`custom-node-wrapper ${selected ? "selected" : ""}`}
        // onClick={centerSelectedNode}
      >
        <div style={{ backgroundColor: color }}>{icons[Icon]}</div>
        <div>
          <p>{stringReducer(label, 15)}</p>
          <p>{stringReducer(description, 16)}</p>
        </div>
      </div>

      {(nodeType === "default" || nodeType === "input") && (
        <Handle className="edge-handle" type="target" position="bottom" />
      )}
    </>
  );
};

export default memo(CustomNode);
