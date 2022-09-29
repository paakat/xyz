import ReactBootstrap.Nav from 'react-bootstrap/ReactBootstrap.Nav';

function StackedExample() {
  return (
    <ReactBootstrap.Nav defaultActiveKey="/home" className="flex-column">
      <ReactBootstrap.Nav.Link href="/home">Active</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link eventKey="link-1">Link</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link eventKey="link-2">Link</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link eventKey="disabled" disabled>
        Disabled
      </ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
  );
}

export default StackedExample;
