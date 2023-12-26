import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/authServices";

// Context oluştur
const AuthContext = createContext();

// Provider bileşeni oluştur
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const username = AuthService.getUsernameFromToken(); // Yeni eklenen fonksiyonu kullan
    setCurrentUser(username); // Eğer username varsa onu, yoksa user'ı kullan
  }, []);


  const sharedValuesAndMethods = {
  currentUser,setCurrentUser
  };
  return (
    <AuthContext.Provider value={sharedValuesAndMethods}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
