import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import Cookies from "js-cookie";

interface AuthContextType {
  isAuthenticated: boolean;
  authLoaded: boolean;
  setAuthenticated: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoaded, setAuthLoaded] = useState(false);
  
  const setAuthenticated = (value: boolean) => {
    setIsAuthenticated(value);
    if (!value) {
      Cookies.remove("token");
    }
  };

  useEffect(() => {
    const carregarToken = async () => {
      const token = Cookies.get("token");
      if (token) {
        setIsAuthenticated(true);
      }
      setAuthLoaded(true);
    }
    carregarToken();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, authLoaded, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
