import { Provider } from "react-redux";
import React from "react";
import { Toaster } from "react-hot-toast";
import { store } from "../redux/store";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster />
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default GlobalProvider;
