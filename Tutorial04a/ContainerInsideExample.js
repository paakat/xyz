import Container from 'react-bootstrap/Container';
import ReactBootstrap.Navbar from 'react-bootstrap/ReactBootstrap.Navbar';

function ContainerInsideExample() {
  return (
    <ReactBootstrap.Navbar expand="lg" variant="light" bg="light">
      <ReactBootstrap.Container>

        <ReactBootstrap.Navbar.Brand href="#">ReactBootstrap.Navbar</ReactBootstrap.Navbar.Brand>

      </ReactBootstrap.Container>
    </ReactBootstrap.Navbar>
  );
}

export default ContainerInsideExample;
