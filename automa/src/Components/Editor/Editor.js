import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
  useContext,
  memo,
} from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  MiniMap,
  Background,
  Panel,
} from "reactflow";
import "./editor.css";
import CustomNode from "./CustomNode/CustomNode";
import uniqueId from "../../utils/uniqueId";
import ContextMenu from "./ContextMenu/ContextMenu";
import { RiSaveLine } from "react-icons/ri";
import { parse, stringify, toJSON, fromJSON } from "flatted";
import { IconButton } from "@mui/material";
import { PiSidebarSimpleFill } from "react-icons/pi";
import { BiFullscreen } from "react-icons/bi";
import { AppContext } from "../../Context/AppContext";
import MenuDrawer from "../Sidebar/MenuDrawer/MenuDrawer";
import { BsFillCircleFill } from "react-icons/bs";

function Editor() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  // const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [menu, setMenu] = useState(null);
  const ref = useRef(null);

  const {
    width,
    showSidebar,
    setShowSidebar,
    reactFlowInstance,
    setReactFlowInstance,
    showDrawer,
    setShowDrawer,
    isUpdated,
    setIsUpdated,
    setData,
  } = useContext(AppContext);

  const onConnect = useCallback(
    (params) => {
      params.type = "smoothstep";
      setEdges((eds) => addEdge(params, eds));
      setIsUpdated(true);
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
          description: "",
          interval: "",
          url: "",
          screenshot: "none",
          cssSelecter: "",
          Icon,
          color,
          ref,
        },
      };

      setNodes((nds) => nds.concat(newNode));
      setIsUpdated(true);
    },
    [reactFlowInstance]
  );

  const handleContextMenu = useCallback(
    (event, node) => {
      // Prevent native context menu from showing
      event.preventDefault();

      // Calculate position of the node context menu.
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

  const handleWorkflowData = useCallback(() => {
    const workflowData = { nodes, edges };
    localStorage.setItem("workflowData", stringify(workflowData));
  });

  useEffect(() => {
    try {
      const workflowData = parse(localStorage.getItem("workflowData"));
      if (workflowData?.nodes?.length > 0) {
        const { nodes, edges } = workflowData;
        setNodes(nodes);
        setEdges(edges);
      }
    } catch (error) {}
  }, []);

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
        <LeftPanel
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          showDrawer={showDrawer}
          setShowDrawer={setShowDrawer}
          width={width}
        />
        <RightPanel
          handleWorkflowData={handleWorkflowData}
          isUpdated={isUpdated}
          setData={setData}
          setIsUpdated={setIsUpdated}
        />
        <Controls
          className="controls"
          position="bottom-right"
          fitViewOptions={{ duration: 800 }}
        />
        <MiniMap nodeColor={nodeColor} className="mini-map" />
        {menu && <ContextMenu onClick={onPaneClick} {...menu} />}
        {width <= "815" && <MenuDrawer />}
      </ReactFlow>
    </section>
  );
}

export default memo(Editor);

const LeftPanel = memo(
  ({ showSidebar, setShowSidebar, showDrawer, setShowDrawer, width }) => {
    return (
      <Panel position="top-left">
        <div className="left-panel-button">
          <IconButton
            disableTouchRipple
            onClick={() => {
              setShowSidebar(!showSidebar);
              setShowDrawer(!showDrawer);
            }}
          >
            {width > 815 ? (
              !showSidebar ? (
                <PiSidebarSimpleFill />
              ) : (
                <BiFullscreen />
              )
            ) : showSidebar ? (
              <PiSidebarSimpleFill />
            ) : (
              <BiFullscreen />
            )}
          </IconButton>
        </div>
      </Panel>
    );
  }
);

const RightPanel = memo(
  ({ handleWorkflowData, isUpdated, setIsUpdated, setData }) => {
    return (
      <Panel position="top-right">
        {isUpdated && <UpdateBadge />}
        <div
          className="right-panel-button"
          onClick={() => {
            if (isUpdated) {
              handleWorkflowData();
              setIsUpdated(false);
              setData((prev) => ({ ...prev, status: false }));
            }
          }}
        >
          <RiSaveLine />
          <p>Save</p>
        </div>
      </Panel>
    );
  }
);

const UpdateBadge = () => {
  return (
    <div
      style={{ position: "absolute", left: "5px", top: "5px", zIndex: "10" }}
    >
      <BsFillCircleFill color="cornflowerblue" />
    </div>
  );
};
