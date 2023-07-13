import React, { createContext, useContext, useState } from "react";

const AlertHandlerContext = createContext();

export const AlertHandlerProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    visible: false,
    alertMessage: "",
  });

  const setAlert = (alertMessage) => {
    setAlertState({ visible: true, alertMessage: alertMessage });
  };

  const closeAlert = () => {
    setAlertState({ ...alertState, visible: false });
  };

  const contextValue = {
    ...alertState,
    setAlert,
    closeAlert,
  };

  return (
    <AlertHandlerContext.Provider value={contextValue}>
      {children}
    </AlertHandlerContext.Provider>
  );
};

export const useAlertHandlerContext = () => useContext(AlertHandlerContext);
