import { memo, useCallback, useContext, useState } from "react";
import "./customnode.css";
import { Handle, useReactFlow } from "reactflow";
import { BiPencil } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import stringReducer from "../../../utils/stringReducer";
import getIcons from "../../../utils/getIcons";
import { AppContext } from "../../../Context/AppContext";

const CustomNode = ({ id }) => {
  const { setData } = useContext(AppContext);
  const [isVisible, setIsVisible] = useState(false);
  const { setNodes, getNodes } = useReactFlow();

  const currentNode = getNodes()?.filter((node) => node.id === id);
  const { type, data, selected } = currentNode[0];
  const { label, nodeType, description, Icon, color, reactFlowInstance, ref } =
    data;

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

  const deleteNode = useCallback(() => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
    setData((prev) => ({ ...prev, status: false }));
  }, []);

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
          <AiOutlineDelete onClick={deleteNode} />
          <BiPencil
            onClick={() =>
              setData((prev) => ({
                ...prev,
                id,
                selected,
                type,
                data,
                status: true,
              }))
            }
          />
        </div>
      </div>

      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className={`custom-node-wrapper ${selected ? "selected" : ""}`}
        // onClick={centerSelectedNode}
      >
        <div style={{ backgroundColor: color }}>{getIcons(Icon)}</div>
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
