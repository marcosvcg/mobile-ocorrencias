import { Routes, Route, Outlet } from "react-router-dom";
import { useAuth } from "../util/AuthProvider";
import HomePage from "../pages/home/HomePage";
import OcorrenciaPage from "../pages/ocorrencia/OcorrenciaPage";
import DemandaPage from "../pages/demanda/DemandaPage";
import Callback from "../util/Callback";
import Spinner from "../components/Spinner";

const ProtectedRoutes = () => {
  const { isAuthenticated, authLoaded } = useAuth();

  if (!authLoaded) return <Spinner />;

  if (!isAuthenticated) {
    window.location.href = import.meta.env.VITE_SSO_LOGOUT;
    return null;
  }

  return <Outlet />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/callback" element={<Callback />} />

      {/* Rotas protegidas */}
      <Route element={<ProtectedRoutes />}>
        <Route index element={<HomePage />} />
        <Route path="/ocorrencia-digital/:identificador" element={<OcorrenciaPage />} />
        <Route path="/ocorrencia/:protocolo" element={<DemandaPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
