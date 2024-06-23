"use client";

import { useState } from "react";
import { createContext } from "use-context-selector";

interface SignInContextType {
  email: string;
  setEmail: (email: string) => void;
  isSignedIn: boolean;
  setIsSignedIn: (isSignedIn: boolean) => void;
}

export const SignInContext = createContext({} as SignInContextType);

export function SignInContextProvider({ children }: any) {
  const [email, setEmail] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <SignInContext.Provider
      value={{
        email,
        setEmail,
        isSignedIn,
        setIsSignedIn,
      }}
    >
      {children}
    </SignInContext.Provider>
  );
}
