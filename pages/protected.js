import React from "react";
import { useSelector } from "react-redux";

const AuthComponent = ({ children }) => {
  const user = useSelector((state) => state.user);

  if (!user) {
    return <div>Loading...</div>; // You can replace this with your own loading component or redirect logic
  }

  return children;
};

export default AuthComponent;
