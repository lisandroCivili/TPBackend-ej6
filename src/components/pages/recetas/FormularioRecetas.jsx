import Swal from 'sweetalert2'
import { Form, Button } from "react-bootstrap";
import { useForm} from "react-hook-form";
import { crearReceta, editarReceta, obtenerReceta } from "../../../helpers/queries";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const FormularioRecetas = ({editando, titulo}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();

  const {id} = useParams()

  useEffect(()=>{
    if (editando) {
      cargarDatosReceta()
    }
  }, [])

  const cargarDatosReceta = async() =>{ 
    const respuesta = await obtenerReceta(id);
    if (respuesta.status === 200) {
      const datos = await respuesta.json()
      setValue('nombreReceta', datos.nombreReceta)
      setValue('cantidad', datos.cantidad)
      setValue('imagen', datos.imagen)
      setValue('categoria', datos.categoria)
      setValue('descripcion_breve', datos.descripcion_breve)
      setValue('descripcion_amplia', datos.descripcion_amplia)
    }else{
      console.log("no se obtuvieron datos")
    }
  }


  const datosValidados = async(receta) => {
    if (editando) {
      const respuesta = await editarReceta(receta, id)
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Edicion confirmada",
          text: `Receta de ${receta.nombreReceta} editada con exito.`,
          icon: "success"
        });
      }else{
        Swal.fire({
          title: "No se pudo editar.",
          text: "Por favor intentalo nuevamente en unos minutos.",
          icon: "error"
        });
      }
    }else{

      const respuesta = await crearReceta(receta)
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Producto creado",
          text: `Se creo la receta de: ${receta.nombreReceta}`,
          icon: "success"
        });
        reset()
      }else{
        Swal.fire({
          title: "Ocurrio un error",
          text: "No se puedo crear la receta, intente nuevamente en unos minutos.",
          icon: "error"
        });
      }

    }

  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">{titulo}</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(datosValidados)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Nombre de la receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Brownies"
            {...register("nombreReceta", {
              required: "El nombre de la receta es obligatorio",
              minLength: {
                value: 3,
                message:
                  "El nombre de la receta debe tener como minimo 3 caracteres.",
              },
              maxLength: {
                value: 30,
                message:
                  "El nombre de la receta debe tener como maximo 30 caracteres.",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreReceta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Cantidad*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 6"
            {...register("cantidad", {
              required: "La cantidad resultante es obligatoria.",
              min: {
                value: 1,
                message: "La cantidad tiene que tiene ser 1 como minimo.",
              },
              max: {
                value: 100,
                message: "La cantidad tiene que tiene ser 100 como máximo.",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.cantidad?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/3090274/pexels-photo-3090274.jpeg"
            {...register("imagen",{
              required: "La url de al imagen es obligatoria.",
              pattern: {
                value: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/,
                message: "Debe ingresar una URL válida, con una imagen en formato jpg, jpeg, gif o png."
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select {...register('categoria',{
            required: "Debe seleccionar una categoria."
          })}>
            <option value="">Seleccione una opcion</option>
            <option value="Desayuno">Desayuno</option>
            <option value="Almuerzo">Almuerzo</option>
            <option value="Cena">Cena</option>
            <option value="Postre">Postre</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático."
            as="textarea"
            {...register("descripcion_breve", {
              required: "La descripcion breve es obligatoria",
              minLength: {
                value: 15,
                message:
                  "La descripcion breve debe tener como minimo 3 caracteres.",
              },
              maxLength: {
                value: 50,
                message:
                  "La descripcion breve debe tener como maximo 30 caracteres.",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_breve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: El café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático. Es una opción popular para aquellos que prefieren un café menos intenso que el espresso tradicional. Perfecto para disfrutar en cualquier momento del día."
            as="textarea"
            {...register("descripcion_amplia", {
              required: "La descripcion amplia es obligatoria",
              minLength: {
                value: 15,
                message:
                  "La descripcion amplia debe tener como minimo 3 caracteres.",
              },
              maxLength: {
                value: 250,
                message:
                  "La descripcion amplia debe tener como maximo 30 caracteres.",
              },
            })}
          />
          <Form.Text className="text-danger">
          {errors.descripcion_amplia?.message}
          </Form.Text>
        </Form.Group>

        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioRecetas;
