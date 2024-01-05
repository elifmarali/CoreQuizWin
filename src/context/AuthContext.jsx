// AuthContext.js
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/authServices";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentUserPointsData,setCurrentUserPointsData]=useState({});

  useEffect(() => {
    const username = AuthService.getUsernameFromToken();
    const userId = AuthService.getCurrentUserIdFromToken();
    const getCurrentUserPointData= async ()=>{
      const response= await AuthService.getCurrentUserEnteredExams();
      setCurrentUserPointsData(response);
    }
    getCurrentUserPointData()
    setCurrentUser(username);
    setCurrentUserId(userId);
  }, []);

  const sharedValuesAndMethods = {
    currentUser,
    setCurrentUser,
    currentUserId,
    setCurrentUserId,
    currentUserPointsData,
    setCurrentUserPointsData
  };

  return (
    <AuthContext.Provider value={sharedValuesAndMethods}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
