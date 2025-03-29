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
  return (
    <div className={`modal modal_opened`}>
      <div className="modal__content">
        <h2 className="modal__title">Sign in</h2>
        <button onClick={onClose} type="button" className="modal__close" />
        <form className="modal__form" onSubmit={handleFormSubmit}>
          {children}
          {/* <label htmlFor="username" className="modal__label"></label>
          Username{""}
          <input
            type="text"
            className="modal__input"
            id="username"
            placeholder="Username"
          />
          <label htmlFor="email" className="modal__label"></label>
          Email{""}
          <input
            type="text"
            className="modal__input"
            id="email"
            placeholder="Email"
          /> */}
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
