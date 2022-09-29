import ReactBootstrap.Container from 'react-bootstrap/ReactBootstrap.Container';
import ReactBootstrap.Nav from 'react-bootstrap/ReactBootstrap.Nav';
import ReactBootstrap.Navbar from 'react-bootstrap/ReactBootstrap.Navbar';


function ColorSchemesExample() {
  return (
    <>
      <ReactBootstrap.Navbar bg="dark" variant="dark">
        <ReactBootstrap.Container>
          <ReactBootstrap.Navbar.Brand href="#home">ReactBootstrap.Navbar</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Nav className="me-auto">
            <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#features">Features</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#pricing">Pricing</ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Container>
      </ReactBootstrap.Navbar>
    </>
  );
}

export default ColorSchemesExample;
