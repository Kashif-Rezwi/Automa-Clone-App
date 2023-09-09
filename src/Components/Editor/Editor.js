import React, { useState, useRef, useCallback, useMemo } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  MiniMap,
  Background,
} from "reactflow";
import NodeMenu from "./NodeMenu/NodeMenu";
import "./editor.css";
import CustomNode from "./CustomNode/CustomNode";
import uniqueId from "../../utils/uniqueId";

function Editor() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [menu, setMenu] = useState(null);
  const ref = useRef(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
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
      const { type, label, Icon, bgColor } = JSON.parse(data);

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
          bgColor,
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const onNodeContextMenu = useCallback(
    (event, node) => {
      // Prevent native context menu from showing
      event.preventDefault();

      // Calculate position of the node context menu. We want to make sure it doesn't get positioned off-screen.
      const pane = ref.current.getBoundingClientRect();

      setMenu({
        id: node.id,
        top: event.clientY < pane.height - 200 && event.clientY - (24 - 10),
        left: event.clientX < pane.width - 200 && event.clientX - (384 + 100),
        right:
          event.clientX >= pane.width - 200 &&
          pane.width - event.clientX + (384 - 100),
        bottom:
          event.clientY >= pane.height - 200 &&
          pane.height - event.clientY + (24 + 10),
      });
    },
    [menu]
  );

  // Close the node context menu if it's open whenever the window is clicked.
  const onPaneClick = useCallback(() => setMenu(null), [menu]);

  const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);

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
        onNodeContextMenu={onNodeContextMenu}
        minZoom={0.3}
        maxZoom={1.2}
      >
        <Background variant="dots" />
        <Controls />
        <MiniMap />
        {menu && <NodeMenu onClick={onPaneClick} {...menu} />}
      </ReactFlow>
    </section>
  );
}

export default Editor;
