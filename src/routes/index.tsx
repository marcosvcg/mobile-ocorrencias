import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import OcorrenciaPage from "../pages/ocorrencia/OcorrenciaPage";
import Callback from "../util/Callback";
import { useAuth } from "../util/AuthProvider";
import Spinner from "../components/Spinner";

const AppRoutes = () => {
  const { authLoaded } = useAuth();

  if (!authLoaded) return <Spinner />;

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/callback" element={<Callback />}/>
      <Route path="/ocorrencia-digital/:identificador" element={<OcorrenciaPage />} />
      <Route path="/ocorrencia/:protocolo" element={<> <p>teste</p> </>} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
