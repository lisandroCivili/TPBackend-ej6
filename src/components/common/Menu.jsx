import { Navbar, Nav, Container} from "react-bootstrap";
import {NavLink, Link, useNavigate} from "react-router-dom";
import logo from "../../assets/logochef.png";

const Menu = ({ usuarioLogeado, setUsuarioLogeado }) => {
  const navegacion = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("loginRC");
    setUsuarioLogeado("");
    navegacion("/");
  };
    return (
      <Navbar expand="lg" className="bg-body-secondary">
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img
              src={logo}
              alt="Logo de RollingCoffee"
              className="img-fluid"
              width={50}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink end className='nav-link' to='/'>Inicio</NavLink>
              <NavLink end className='nav-link'to='/registro'>Registro</NavLink>
              {usuarioLogeado !== "" ? (
              <>
                <NavLink end className="nav-link" to="/administrador">
                  Administrador
                </NavLink>
                <Button variant="link" className="nav-link" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <NavLink end className="nav-link" to="/login">
                Login
              </NavLink>
            )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default Menu;