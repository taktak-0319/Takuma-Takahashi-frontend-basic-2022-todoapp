import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";
import React, { useEffect } from "react";

const AlertManager = () => {
  const alertHandlerContext = useAlertHandlerContext();
  useEffect(() => {
    if (alertHandlerContext.visible === true) {
      setTimeout(() => {
        alertHandlerContext.closeAlert();
      }, 5000);
    }
  }, [alertHandlerContext]);
  return (
    <Alert
      alertMessage={alertHandlerContext.alertMessage}
      visible={alertHandlerContext.visible}
    />
  );
};

export default AlertManager;
