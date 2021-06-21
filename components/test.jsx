import { NavDropdown, Nav, Container, Row } from "react-bootstrap";
// import { withRouter } from "react-router";
// import styles from "./layout.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function NavigationTest() {
  return (
    <>
      <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <style jsx>
        {`
          .sidebar {
            position: fixed;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            min-height: 100vh !important;
            z-index: 100;
            padding: 48px 0 0;
            box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
          }
          #sidebar-wrapper {
            min-height: 100vh !important;
            width: 100vw;
            margin-left: -1rem;
            -webkit-transition: margin 0.25s ease-out;
            -moz-transition: margin 0.25s ease-out;
            -o-transition: margin 0.25s ease-out;
            transition: margin 0.25s ease-out;
          }
          #sidebar-wrapper .sidebar-heading {
            padding: 0.875rem 1.25rem;
            font-size: 1.2rem;
          }

          #page-content-wrapper {
            min-width: 0;
            width: 100%;
          }
        `}
      </style>
    </>
  );
}
