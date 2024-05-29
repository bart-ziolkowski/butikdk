import React, { useRef } from "react";

import LoginForm from "../components/login-page/LoginForm";
import { useIsVisible } from "../redux/hooks";

const Login: React.FC = () => {
  const loginForm = useRef<HTMLDivElement>(null);
  const isVisibleLoginForm = useIsVisible(loginForm);

  return (
    <LoginForm
      ref={loginForm}
      className={`transition-opacity ease-in duration-700 delay-300 ${
        isVisibleLoginForm ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

export default Login;
