import FilterDiv from "./components/FilterDiv";
import NavBar from "../../components/NavBar";
import OcorrenciasList from "./components/OcorrenciasList";
import { fetchOcorrencias } from "../../service/apiForms";

function HomePage() {

  return (
    <>
      <NavBar />
      <FilterDiv />
      <OcorrenciasList />
    </>
  );
}

console.log(fetchOcorrencias())

export default HomePage;
