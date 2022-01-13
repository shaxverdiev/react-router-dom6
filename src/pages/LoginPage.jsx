import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import React from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {signin} = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const handlerSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;

    signin(user, () => navigate(fromPage, {replace: true}));
  }
  return (
    <div>
      <h1>Login page</h1>
      {fromPage}
      <form onSubmit={handlerSubmit}>
        <label>
          Name: <input name="username"/>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;