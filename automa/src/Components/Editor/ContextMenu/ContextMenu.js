import React, { memo, useCallback, useContext } from "react";
import { useReactFlow } from "reactflow";
import "./contextMenu.css";
import uniqueId from "../../../utils/uniqueId";
import findEdgeById from "../../../utils/findEdgeById";
import { AppContext } from "../../../Context/AppContext";

function ContextMenu({ id, top, left, right, bottom, ...props }) {
  const { getNode, setNodes, addNodes, setEdges, getNodes } = useReactFlow();
  const { setIsUpdated } = useContext(AppContext);

  const duplicateNode = useCallback(() => {
    const node = getNode(id);
    const position = {
      x: node.position.x + 50,
      y: node.position.y + 50,
    };

    const updatedNodes = getNodes();
    setNodes(
      updatedNodes?.map((node) => ({
        ...node,
        selected: false,
      }))
    );
    addNodes({ ...node, selected: true, id: uniqueId(7), position });
  }, [id, getNode, addNodes]);

  const deleteNode = useCallback(() => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
    setEdges((edges) => edges.filter((edge) => edge.source !== id));
  }, [id, setNodes, setEdges]);

  return (
    <div
      style={{ top, left, right, bottom }}
      className="context-menu"
      {...props}
    >
      {findEdgeById(id) ? (
        <EdgesMenu id={id} setEdges={setEdges} setIsUpdated={setIsUpdated} />
      ) : (
        <NodesMenu
          id={id}
          duplicateNode={duplicateNode}
          setIsUpdated={setIsUpdated}
          deleteNode={deleteNode}
        />
      )}
    </div>
  );
}

export default ContextMenu;

const NodesMenu = memo(({ id, duplicateNode, deleteNode, setIsUpdated }) => {
  return (
    <>
      <button
        onClick={() => {
          duplicateNode();
          setIsUpdated(true);
        }}
      >
        duplicate
      </button>
      <button
        onClick={() => {
          deleteNode();
          setIsUpdated(true);
        }}
      >
        delete
      </button>
    </>
  );
});

const EdgesMenu = memo(({ id, setEdges, setIsUpdated }) => {
  const handleDeleteEdge = () => {
    setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== id));
    setIsUpdated(true);
  };

  return (
    <>
      <button onClick={handleDeleteEdge}>Delete</button>
    </>
  );
});
