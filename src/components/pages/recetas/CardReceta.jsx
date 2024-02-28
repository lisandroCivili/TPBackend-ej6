import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = ({producto}) => {
 
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img src="" alt="" className="card-img-top-nueva" />
        </div>
        <Card.Body>
        <Card.Title className="primary-font"></Card.Title>
        <Card.Text>
          Descripción: <br className="mb-2"/> 
          <span className="fw-bold">Precio: </span></Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
        <Button className='btn btn-success me-2' as={Link} to='/detallereceta'>Ver más</Button>
      </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardReceta;