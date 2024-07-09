import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [access, setAccess] = useState("");
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedAccess = localStorage.getItem("access");
    const storedUser = localStorage.getItem("user");
    setToken(storedToken);
    setAccess(storedAccess);
    setUser(storedUser);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, setToken, loading, access, setAccess, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
