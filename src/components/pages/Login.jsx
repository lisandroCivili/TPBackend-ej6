import { Container, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = ({setUsuarioLogeado}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate()

  const onSubmit = (usuario)=>{
    if (login(usuario)) {
      console.log(usuario)
      Swal.fire({
        title: "Bienvenido",
        text: `Ingresaste al panel de administracion.`,
        icon: "success"
      });
      navegacion('/administrador')
      setUsuarioLogeado(usuario.mail)
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: `Email o password incorrectos.`,
        icon: "error"
      });
    }
  }

  return (
    <Container className="my-3">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="loginMail">
          <Form.Label>Correo electronico:</Form.Label>
          <Form.Control
            type="mail"
            placeholder="Ej: ejemplo@mail.com"
            {...register("mail", {
              required: "Ingrese un correo electronico.",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Formato de correo electronico inválido.",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.mail?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese una contraseña"
            {...register("pass", {
              required: "Ingrese una contraseña.",
              pattern: {
                value:
                  /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                message: "La contraseña debe tener minimo 8 caracteres, al menos un digito, una minúscula y una mayúscula .",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.pass?.message}</Form.Text>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
