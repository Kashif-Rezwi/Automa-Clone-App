import React from "react";

function Nodebar() {
  const onDragStart = (event, type, label, Icon, bgColor) => {
    const dragData = {
      type,
      label,
      Icon,
      bgColor,
    };
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(dragData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="nodes-wrapper">
      <div className="description">
        You can drag these nodes-wrapper to the pane on the right.
      </div>
      <div
        className="node input"
        onDragStart={(event) =>
          onDragStart(event, "input", "Trigger", "RxLightningBolt", "#fde047")
        }
        draggable
      >
        Trigger
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
        New Window
      </div>
      <div
        className="node"
        onDragStart={(event) =>
          onDragStart(event, "default", "Take Screenshot", "TbPhoto", "#fcb974")
        }
        draggable
      >
        Take Screenshot
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
        Click Element
      </div>
      <div
        className="node"
        onDragStart={(event) =>
          onDragStart(event, "default", "Get Text", "RiParagraph", "#85eeab")
        }
        draggable
      >
        Get Text
      </div>
    </aside>
  );
}

export default Nodebar;
