import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";

function SuccessModal({ onClose }) {
  const handleOverLayClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <div onClick={handleOverLayClick} className={`modal modal_opened`}>
      <div className="modal__content">
        <h1 className="modal__title">Registration successfully completed!</h1>
        <button onClick={onClose} type="button" className="modal__close" />
      </div>
    </div>
  );
}

export default SuccessModal;
