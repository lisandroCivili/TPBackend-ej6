import { Button } from "react-bootstrap";

const ItemReceta = () => {
    return (
        <tr>
        <td className="text-center">1</td>
        <td>Nomrbe del producto</td>
        <td className="text-end">Precio?</td>
        <td className="text-center">
          <img
            src=""
            className="img-thumbnail"
            alt=""
          ></img>
        </td>
        <td>categoria?</td>
        <td className="text-center">
          <Button variant="warning" className="me-lg-2">
            <i className="bi bi-pencil-square"></i>
          </Button>
          <Button variant="danger">
            <i className="bi bi-trash"></i>
          </Button>
        </td>
      </tr>
    );
};

export default ItemReceta;