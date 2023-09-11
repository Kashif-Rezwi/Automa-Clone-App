import { createContext, useState } from "react";
import { useResizeDetector } from "react-resize-detector";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [data, setData] = useState({ status: false });
  const [showSidebar, setShowSidebar] = useState(true);
  const { width, ref } = useResizeDetector();

  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        showSidebar,
        setShowSidebar,
        width,
        ref,
        reactFlowInstance,
        setReactFlowInstance,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
