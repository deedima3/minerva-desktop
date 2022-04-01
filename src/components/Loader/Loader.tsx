import { AnimatePresence } from "framer-motion";
import React from "react";
import ModalOverlay from "../Modals/ModalOverlay";
import ReactDOM from "react-dom";

export interface LoaderProps {
  isLoading: boolean;
}

const Loader = ({ isLoading }: LoaderProps) => {
  const loader = (
    <AnimatePresence>
      {isLoading && (
        <ModalOverlay>
          <div className="animate-spin w-10 h-10 z-20 bg-brand-primary rounded-lg" />
        </ModalOverlay>
      )}
    </AnimatePresence>
  );

  return ReactDOM.createPortal(loader, document.getElementById("portal")!);
};

export default Loader;
