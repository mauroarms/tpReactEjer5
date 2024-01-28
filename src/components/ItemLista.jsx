import { ListGroup, Button } from "react-bootstrap";

const ItemLista = ({tarea, borrarTarea}) => {
  return (
    <ListGroup.Item as="li" className="mb-2 d-flex align-items-center">
      &nbsp; {tarea}
      <Button variant="danger" className="ms-auto" onClick={() => borrarTarea(tarea)}> Borrar </Button>
    </ListGroup.Item>
  );
};

export default ItemLista;
