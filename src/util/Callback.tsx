import { useLocation, useNavigate } from "react-router-dom";
import { validarToken } from "../service/apiSSO";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";

function Callback() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, setAuthenticated } = useAuth();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");

    if (!code) {
      navigate("/");
      return;
    }

    const validar = async () => {
      if (isAuthenticated) return;
      const sucesso = await validarToken(code);
      if (sucesso) {
        setAuthenticated(true);
        navigate("/");
      } else {
        navigate("/erro");
      }
    };

    validar();
  }, [location.search]);

  return null;
}

export default Callback;
