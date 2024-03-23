
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = ({receta}) => {
 
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img src={receta.imagen} alt={receta.nombreReceta} className="card-img-top-nueva" />
        </div>
        <Card.Body>
        <Card.Title className="primary-font">{receta.nombreReceta}</Card.Title>
        <Card.Text>
          Descripción: {receta.descripcion_breve}<br className="mb-2"/> 
          <span className="fw-bold">Cantidad: {receta.cantidad}</span></Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
        <Link className='btn btn-success me-2' to={'/detallereceta/'+receta._id}>Ver más</Link>
      </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardReceta;