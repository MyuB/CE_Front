import React, { useState } from "react";
import "./LoginForm.css";
// import backIcon from "./left-arrow.png";

import { connect } from "react-redux";

function LoginForm(props) {
  const { email, password, setEmail, setPassword, handleSubmit } = props;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <header className="header">
        <a href="#" className="back-button">
          {/* <img src={backIcon} alt="Back" /> */}
        </a>
        <div className="header-title">Carbon Eye</div>
      </header>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login">로그인</h2>
        <label htmlFor="email" className="inputInfo">
          이메일
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password" className="inputInfo">
          비밀번호
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit" className="pink-button">
          완료
        </button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    email: state.email,
    password: state.password,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setEmail: (email) => dispatch({ type: "SET_EMAIL", payload: email }),
    setPassword: (password) =>
      dispatch({ type: "SET_PASSWORD", payload: password }),
    handleSubmit: (event) => {
      event.preventDefault();
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
