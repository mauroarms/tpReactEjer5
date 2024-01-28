import ListGroup from "react-bootstrap/ListGroup";
import ItemLista from "./ItemLista";

const ListaTareas = ({ arrayTarea , borrarTarea }) => {
  return (
    <ListGroup as="ol" numbered className="mt-5">
      {arrayTarea.map((tarea, index) => (
        <ItemLista
          key={index}
          tarea={tarea}
          borrarTarea={borrarTarea}
        ></ItemLista>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
