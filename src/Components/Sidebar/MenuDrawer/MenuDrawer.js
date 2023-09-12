import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import "./menuDrawer.css";
import { useContext } from "react";
import { AppContext } from "../../../Context/AppContext";
import NodeEditor from "../../Editor/EditorMenu/NodeEditor/NodeEditor";
import Nodebar from "../../Editor/EditorMenu/Nodebar/Nodebar";

function MenuDrawer() {
  const { showDrawer, data, setShowDrawer, width } = useContext(AppContext);
  return (
    <div>
      <>
        <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
          <aside
            className="menu-drawer"
            style={{
              display: width <= "815" ? "block" : "none",
            }}
          >
            {data?.status ? <NodeEditor /> : <Nodebar />}
          </aside>
        </Drawer>
      </>
    </div>
  );
}

export default MenuDrawer;
