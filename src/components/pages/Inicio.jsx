import { Container, Row } from "react-bootstrap";
import CardReceta from "./recetas/CardReceta";
import banner from "../../assets/banner.jpg"
import { useState, useEffect } from "react";
import { leerRecetas } from "../../helpers/queries";
const Inicio = () =>{

  const [recetas, setRecetas] = useState([]);

    useEffect(()=>{

      obtenerRecetas()

    },[])

  const obtenerRecetas = async()=>{

    const respuesta = await leerRecetas();
    if (respuesta.status === 200) {
        const datos = await respuesta.json();
        console.log(datos)
        setRecetas(datos);
    }else{
      console.log("no funciona")
    }

  }

    return (
        <section className="mainSection">
          <img
            className="banner"
            src={banner}
            alt="fondo cafe"
          />
          <Container className="mt-5">
            <h1 className="display-4">Nuestras Recetas</h1>
            <hr />
        
              <Row>
                {
                  recetas.map((receta)=><CardReceta key={receta.id} receta={receta}/>)
                }
              </Row>
           
          </Container>
        </section>
      );
    };

export default Inicio;