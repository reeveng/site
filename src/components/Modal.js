import { ReactComponent as X } from "../assets/vector/x.svg"

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <X width="24" height="24" className="modal-close-btn"
          onClick={handleClose}></X>
        {children}
      </section>
    </div>
  );
};

export default Modal;