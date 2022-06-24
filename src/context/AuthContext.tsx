import { createContext, useContext, useEffect, useState } from "react";
import { User as FirebaseUser } from "firebase/auth";
import { auth } from "../firebase";
import { authContextType } from "../types/authTypes";
import { reactChildren } from "../types/commonTypes";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext({} as authContextType);

const AuthContextProvider = ({ children }: reactChildren) => {
  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    const onAuthChange = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      onAuthChange();
    };
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        authLoading,
        setAuthLoading,
        createUser,
        loginUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthContextProvider, useAuth };
