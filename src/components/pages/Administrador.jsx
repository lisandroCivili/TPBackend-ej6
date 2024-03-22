import { Button, Table } from "react-bootstrap";
import ItemReceta from "./recetas/ItemReceta";
import { Link } from 'react-router-dom';
import { leerRecetas } from "../../helpers/queries";
import { useEffect, useState } from "react";


const Administrador = () => {

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
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Button className="btn btn-primary" as={Link} to="/administrador/crear">
          <i className="bi bi-file-earmark-plus"></i>
        </Button>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
            {
              recetas.map((receta)=><ItemReceta key={receta._id} receta={receta} setRecetas={setRecetas}/>)
            }
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
