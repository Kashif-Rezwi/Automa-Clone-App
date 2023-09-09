import React from "react";
import "./nodebar.css";
import stringReducer from "../../../utils/stringReducer";

function Nodebar() {
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
    <aside className="nodes-container">
      <div className="description">
        You can drag these nodes-wrapper to the pane on the right.
      </div>
      <div className="nodes-wrapper">
        <div
          className="node input"
          onDragStart={(event) =>
            onDragStart(event, "input", "Trigger", "RxLightningBolt", "#fde047")
          }
          draggable
        >
          <p>{stringReducer("Trigger", 10)}</p>
        </div>
        <div
          className="node"
          onDragStart={(event) =>
            onDragStart(
              event,
              "default",
              "New Window",
              "RiWindow2Line",
              "#fdba74"
            )
          }
          draggable
        >
          {" "}
          <p>{stringReducer("New Window", 10)}</p>
        </div>
        <div
          className="node"
          onDragStart={(event) =>
            onDragStart(
              event,
              "default",
              "Take Screenshot",
              "TbPhoto",
              "#fcb974"
            )
          }
          draggable
        >
          {" "}
          <p>{stringReducer("Take Screenshot", 10)}</p>
        </div>
        <div
          className="node"
          onDragStart={(event) =>
            onDragStart(
              event,
              "default",
              "Click Element",
              "RiCursorLine",
              "#85eeab"
            )
          }
          draggable
        >
          {" "}
          <p>{stringReducer("Click Element", 10)}</p>
        </div>
        <div
          className="node"
          onDragStart={(event) =>
            onDragStart(event, "default", "Get Text", "RiParagraph", "#85eeab")
          }
          draggable
        >
          {" "}
          <p>{stringReducer("Get Text", 10)}</p>
        </div>
      </div>
    </aside>
  );
}

export default Nodebar;
