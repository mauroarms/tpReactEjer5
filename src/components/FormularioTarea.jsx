import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const FormularioTarea = () => {
  const MySwal = withReactContent(Swal);
  const [tarea, setTarea] = useState("");
  const tareasGuardadas = JSON.parse(localStorage.getItem('tareasLS')) || [];
  const [arrayTarea, setArrayTarea] = useState(tareasGuardadas);

  useEffect(() =>{
    console.log("hola mundo");
    localStorage.setItem('tareasLS', JSON.stringify(arrayTarea))

  }, [arrayTarea]) //Montaje y actualizción del arrayTarea

  const handleSubmit = (event) => {
    event.preventDefault();

    if (arrayTarea.includes(tarea)) {
      MySwal.fire({
        icon: "error",
        title: "¡Error!",
        text: "La tarea ingresada ya existe",
      });
    } else {
      setArrayTarea([...arrayTarea, tarea]);
      setTarea("");
    }
  };

  const borrarTarea = (nombreTarea) => {
    Swal.fire({
      title: "¿Estás Seguro?",
      text: "La tarea se borrará definitivamente",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Tarea Borrada Correctamente",
          text: "La tarea fue eliminada",
          icon: "success",
        });
        const arregloFiltrado = arrayTarea.filter(
          (tarea) => tarea !== nombreTarea
        );
        setArrayTarea(arregloFiltrado);
      }
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formularioTarea">
          <Form.Label>Titulo Tarea</Form.Label>
          <div className="d-flex gap-3">
            <Form.Control
              type="text"
              placeholder="Mi Tarea"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
            />
            <Button className="btnAgregar" variant="outline-dark" type="submit">
              Agregar
            </Button>
          </div>
        </Form.Group>
      </Form>

      <ListaTareas
        arrayTarea={arrayTarea}
        borrarTarea={borrarTarea}
      ></ListaTareas>
    </>
  );
};

export default FormularioTarea;
