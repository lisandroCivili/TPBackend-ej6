import { Container, Card, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { obtenerReceta } from "../../helpers/queries";
const DetalleReceta = () => {

    const {id} = useParams()
    

    const [recetas, setRecetas] = useState({});

    useEffect(()=>{
        obtenerDetalleReceta()
    },[])

    const obtenerDetalleReceta = async()=>{
        const respuesta = await obtenerReceta(id)
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setRecetas(datos)
        }else{
          console.log("no funciona")
        }
    }
    return (
        <Container className="my-3 mainSection">
            <Card>
                <Row>
                    <Col md={6}>
                        <Card.Img
                        variant="top"
                        src={recetas.imagen}
                        />
                    </Col>
                    <Col md={6}>
                        <Card.Body>
                        <Card.Title className="primary-font">{recetas.nombreReceta}</Card.Title>
                        <hr />
                        <Card.Text>
                        {recetas.descripcion_amplia}
                        <br/>
                        <span className="primary-font fw-semibold ">Categoria:</span> {recetas.categoria}
                        <br className='mb-3'/>
                        <span className="primary-font fw-semibold ">Cantidad: {recetas.cantidad}</span></Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
    </Container>
    );
};

export default DetalleReceta;