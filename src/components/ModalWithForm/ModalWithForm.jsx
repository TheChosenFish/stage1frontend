import "../ModalWithForm/ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  secondButtonText,
  title,
  onClose,
  onSubmit,
  onClick,
}) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleOverLayClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <div onClick={handleOverLayClick} className={`modal modal_opened`}>
      <div className="modal__content">
        <h1 className="modal__title"></h1>
        <button onClick={onClose} type="button" className="modal__close" />
        <form className="modal__form" onSubmit={handleFormSubmit}>
          {children}
          <div className="modal_submit-btns">
            <button type="submit" className="modal__submit-btn">
              {buttonText}
            </button>
            <button
              onClick={onClick}
              type="button"
              className="modal__submit-btn2"
            >
              {secondButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
