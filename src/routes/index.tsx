import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import OcorrenciaPage from "../pages/ocorrencia/OcorrenciaPage";
import Callback from "../util/Callback";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/callback" element={<Callback />}/>
      <Route path="/ocorrencia/:identificador" element={<OcorrenciaPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
