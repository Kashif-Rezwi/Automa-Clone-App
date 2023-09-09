import React, { memo, useCallback } from "react";
import { useReactFlow } from "reactflow";
import "./contextmenu.css";
import uniqueId from "../../../utils/uniqueId";
import findEdgeById from "../../../utils/findEdgeById";

function ContextMenu({ id, top, left, right, bottom, ...props }) {
  const { getNode, setNodes, addNodes, setEdges, getNodes } = useReactFlow();

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
    console.log({ updatedNodes });
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
        <EdgesMenu id={id} setEdges={setEdges} />
      ) : (
        <NodesMenu
          id={id}
          duplicateNode={duplicateNode}
          deleteNode={deleteNode}
        />
      )}
    </div>
  );
}

export default ContextMenu;

const NodesMenu = memo(({ id, duplicateNode, deleteNode }) => {
  return (
    <>
      <p style={{ margin: "0.5em" }}>
        <small>node: {id}</small>
      </p>
      <button onClick={duplicateNode}>duplicate</button>
      <button onClick={deleteNode}>delete</button>
    </>
  );
});

const EdgesMenu = memo(({ id, setEdges }) => {
  const handleDeleteEdge = () => {
    setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== id));
  };

  return (
    <>
      <button onClick={handleDeleteEdge}>Delete</button>
    </>
  );
});
