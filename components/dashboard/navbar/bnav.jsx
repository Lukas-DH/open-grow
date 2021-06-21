import { Nav, Navbar } from "react-bootstrap";

export default function Bnav() {
  return (
    <>
      <Navbar>
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="#">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="">Disabled</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}
