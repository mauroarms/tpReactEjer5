import Container from "react-bootstrap/Container";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <>
      <h1 className="display-3 text-center">Lista de Tareas</h1>

      <Container className="mainPage d-flex flex-column align-items-center">      

        <section className=" d-flex flex-column border border-info-subtle border-3 rounded my-5 w-50 align-items-center ">
          <div className="text-center">
            <h2 className="my-3 display-5">Bienvenido</h2>
            <h4>Ingresa tus tareas</h4>
          </div>
          <div className="w-75 my-4">
            <FormularioTarea />
          </div>
        </section>
      </Container>

      <Footer></Footer>
    </>
  );
}

export default App;
