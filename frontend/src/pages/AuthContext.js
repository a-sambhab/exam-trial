import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [access, setAccess] = useState("")
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    setAccess("");
    setLoading(false); 
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, loading, access, setAccess }}>
      {children}
    </AuthContext.Provider>
  );
};