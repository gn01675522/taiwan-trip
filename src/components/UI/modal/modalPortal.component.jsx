//* which use this：
//* 1. detail.component.jsx

import { createPortal } from "react-dom";

import Modal from "./modal.component";

const portalElement = document.getElementById("overlays");

const ModalPortal = ({ children }) => {
  return <>{createPortal(<Modal>{children}</Modal>, portalElement)}</>;
};

export default ModalPortal;
