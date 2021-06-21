// import logo from "./logo.svg";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import Button from "react-bootstrap/Button";

function LandingNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="./openIVF-01.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Open-IVF
      </Navbar.Brand>
      <Nav className="">
        <Link href="/posts/hello-world">Demo</Link>
      </Nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="">
          <Nav.Link href="/posts/hello-world">Doctors</Nav.Link>
          <Nav.Link href="/posts/second-post">Patients</Nav.Link>
          <Nav.Link href="/posts/first-post">
            <strong>Log-in</strong>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export { LandingNav };
