/*import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';*/
import React from "react";
import ".//LogIn.css";

/*
let box = new gsap.timeline();

box.form('.container', { width: '0%', stagger: 0.4, duration: 1.5});
box.form('.from__title', { opacity: 0, y: -30 });
box.form('.form__input-group input', { opacity: 0, stagger: 0.3 });

box.form('.form__button', {opacity:0, y:20 });
*/

const Register = () => {
  return (
    <div className="container">
      <div className="form" id="login">
        <h1 className="from__title">SignUp</h1>
        <div className="from__input-group">
          <input
            type={"text"}
            className="from__input"
            autoFocus
            placeholder="Email"
            id="emailInput"
          ></input>
        </div>
        <div className="from__input-group">
          <input
            type={"text"}
            className="from__input"
            autoFocus
            placeholder="Username"
            id="usernameInput"
          ></input>
        </div>
        <div className="from__input-group">
          <input
            type={"password"}
            className="from__input"
            autoFocus
            placeholder="Password"
            id="passwordInput"
          ></input>
          <div className="padding"></div>
          <button className="from__button" id="login">
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
