import React from "react";
import "../modal/Modal.css";

interface Props {
  visible: boolean;
  dismiss: () => void;
}

const Modal: React.FC<Props> = props => {
  const { visible, dismiss, children } = props;
  return (
    <main id="modal">
      {visible ? (
        <div className="modal-wrapper">
          <div className="modal-box-setup">{children}</div>
          <div className="modal-bg" onClick={dismiss} />
        </div>
      ) : null}
    </main>
  );
};

export default Modal;
