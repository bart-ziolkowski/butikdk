import React, { useRef } from "react";

import RegisterBanner from "../components/register-page/RegisterBanner";
import RegisterForm from "../components/register-page/RegisterForm";
import { useIsVisible } from "../redux/hooks";

const Register: React.FC = () => {
  const registerForm = useRef<HTMLDivElement>(null);
  const isVisibleRegisterForm = useIsVisible(registerForm);

  return (
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
      <RegisterBanner />
      <RegisterForm
        ref={registerForm}
        className={`transition-opacity ease-in duration-700 delay-300 ${
          isVisibleRegisterForm ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default Register;
