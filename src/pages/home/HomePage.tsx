import FilterDiv from "./components/FilterDiv";
import NavBar from "../../components/NavBar";
import OcorrenciasList from "./components/OcorrenciasList";

function HomePage() {

  return (
    <>
      <NavBar />
      <FilterDiv />
      <OcorrenciasList />
    </>
  );
}

export default HomePage;
