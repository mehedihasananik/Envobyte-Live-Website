"use client";
import React, { createContext } from "react";

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const user = { displayName: "Mehedi Anik" };

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProviders;
