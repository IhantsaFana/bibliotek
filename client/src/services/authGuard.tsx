import { Navigate } from "react-router-dom";
import { getToken } from "./auth";
import { JSX } from "react";

interface AuthGuardProps {
  children: JSX.Element;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  return getToken() ? children : <Navigate to="/login" />;
};

export default AuthGuard;
