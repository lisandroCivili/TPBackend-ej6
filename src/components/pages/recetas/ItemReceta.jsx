import Swal from 'sweetalert2'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarReceta, leerRecetas } from '../../../helpers/queries';



const ItemReceta = ({receta, setRecetas}) => {

  const eliminarReceta = () =>{
    Swal.fire({
      title: "¿Seguro desea eliminar la receta?",
      text: "¡No se puede revertir esta operación!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarReceta(receta.id)
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Receta eliminada",
            text: `La receta ${receta.nombreReceta} fue eliminada.`,
            icon: "success"
          });
          const productosActualizadosRespuesta = await leerRecetas()
          if (productosActualizadosRespuesta.status === 200) {
            const productosActualizados = await productosActualizadosRespuesta.json()
            setRecetas(productosActualizados)
          }
        }else{
          Swal.fire({
            title: "Ocurrio un error",
            text: `No se pudo eliminar la receta, intente nuevamente en unos minutos.`,
            icon: "error"
          });
        }
      }
    });
  }


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
          <Link className="me-lg-2 btn btn-warning" to={'/administrador/editar/'+receta._id}>
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button variant="danger" onClick={eliminarReceta}>
            <i className="bi bi-trash"></i>
          </Button>
        </td>
      </tr>
    );
};

export default ItemReceta;