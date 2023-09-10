import React, { useState, useRef, useCallback, useMemo } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  MiniMap,
  Background,
} from "reactflow";
import "./editor.css";
import CustomNode from "./CustomNode/CustomNode";
import uniqueId from "../../utils/uniqueId";
import ContextMenu from "./ContextMenu/ContextMenu";

function Editor() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [menu, setMenu] = useState(null);
  const ref = useRef(null);

  const onConnect = useCallback(
    (params) => {
      params.type = "smoothstep";
      setEdges((eds) => addEdge(params, eds));
    },
    [edges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const data = event.dataTransfer.getData("application/reactflow");
      const { type, label, Icon, color } = JSON.parse(data);

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: uniqueId(7),
        type: "custom",
        position,
        data: {
          label,
          nodeType: type,
          description: "Hello guys, how are you ?",
          Icon,
          color,
          reactFlowInstance,
          ref,
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const handleContextMenu = useCallback(
    (event, node) => {
      // Prevent native context menu from showing
      event.preventDefault();

      // Calculate position of the node context menu. We want to make sure it doesn't get positioned off-screen.
      const pane = ref.current.getBoundingClientRect();

      setMenu({
        id: node.id,
        top: event.clientY < pane.height - 200 && event.clientY - (40 - 10),
        left: event.clientX < pane.width - 200 && event.clientX - (384 + 100),
        right:
          event.clientX >= pane.width - 200 &&
          pane.width - event.clientX + (384 - 100),
        bottom:
          event.clientY >= pane.height - 200 &&
          pane.height - event.clientY + (40 + 10),
      });
    },
    [menu]
  );

  // Close the node context menu if it's open whenever the window is clicked.
  const onPaneClick = useCallback(() => setMenu(null), [menu]);

  const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);

  const nodeColor = (node) => {
    return node.data.color;
  };

  return (
    <section className="editor-wrapper" ref={reactFlowWrapper}>
      <ReactFlow
        ref={ref}
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onPaneClick={onPaneClick}
        onNodeContextMenu={handleContextMenu}
        onEdgeContextMenu={handleContextMenu}
        minZoom={0.3}
        maxZoom={1.2}
      >
        <Background variant="dots" className="editor-bg" />
        <Controls className="controls" position="bottom-right" />
        <MiniMap nodeColor={nodeColor} className="mini-map" />
        {menu && <ContextMenu onClick={onPaneClick} {...menu} />}
      </ReactFlow>
    </section>
  );
}

export default Editor;
