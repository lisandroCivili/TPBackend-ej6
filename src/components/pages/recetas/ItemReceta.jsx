import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemReceta = ({receta}) => {
    return (

        <tr>
        <td className="text-center">{receta.id}</td>
        <td>{receta.nombreReceta}</td>
        <td className="text-end">{receta.cantidad}</td>
        <td className="text-center">
          <img
            src={receta.imagen}
            className="img-thumbnail"
            alt=""
          ></img>
        </td>
        <td>{receta.categoria}</td>
        <td className="text-center">
          <Link className="me-lg-2 btn btn-warning" to={'/administrador/editar/'+receta.id}>
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button variant="danger">
            <i className="bi bi-trash"></i>
          </Button>
        </td>
      </tr>
    );
};

export default ItemReceta;