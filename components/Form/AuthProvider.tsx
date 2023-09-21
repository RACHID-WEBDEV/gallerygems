"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider basePath="/custom-route/api/auth">
      {children}
    </SessionProvider>
  );
};

export default AuthProvider;
