import { Container, Row } from "react-bootstrap";
import CardReceta from "./recetas/CardReceta";

const Inicio = () =>{

    return (
        <section className="mainSection">
          <img
            className="banner"
            src="https://images.pexels.com/photos/13591748/pexels-photo-13591748.jpeg"
            alt="fondo cafe"
          />
          <Container className="mt-5">
            <h1 className="display-4">Nuestras Recetas</h1>
            <hr />
        
              <Row>
                <CardReceta/>
                <CardReceta/>
                <CardReceta/>
              </Row>
           
          </Container>
        </section>
      );
    };

export default Inicio;