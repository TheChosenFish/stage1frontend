import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";

function RegisterModal({ onClose, onRegister, handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const onSubmit = () => {
    return onRegister({
      email: email,
      password: password,
      name: name,
    });
  };

  return (
    <ModalWithForm
      buttonText="Register"
      secondButtonText="or Login"
      title="Register"
      onClose={onClose}
      onSubmit={onSubmit}
      onClick={handleLogin}
    >
      <h1 className="modal__title">Sign Up</h1>
      <label htmlFor="email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="email"
          onChange={handleEmail}
          value={email}
          autoComplete="email"
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
          autoComplete="password"
        />
      </label>
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          onChange={handleName}
          value={name}
          autoComplete="username"
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
