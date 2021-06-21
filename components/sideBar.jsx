import React from "react";

import { NavDropdown, Nav, Container, Row } from "react-bootstrap";
// import { withRouter } from "react-router";
// import styles from "./layout.module.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

export default function Side() {
  return (
    <>
      <Nav
        className=" bg-light pt-2 "
        expand="lg"
        style={{
          width: "220px",
          height: "100%",
          position: "fixed",
        }}
      >
        <Container
          className=""
          style={{
            height: "100%",
          }}
        >
          {" "}
          <a
            href="/"
            // className="d-flex flex-column flex-shrink-0 p-3 bg-light"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <img
              className="bi me-2 "
              width="40"
              height="40"
              alt=""
              src="../openIVF-01.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />

            <span className="fs-4 p-2">Sidebar</span>
          </a>
          <hr></hr>
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <a href="#" className="nav-link link-dark" aria-current="page">
                <i class="bi-house-door p-2"></i>
                Home
              </a>
            </li>
            <li className="">
              <a href="#" className="nav-link link-dark" aria-current="page">
                <i class="bi-speedometer2 p-2"></i>
                Dashboard
              </a>
            </li>
            <li className="">
              <a href="#" className="nav-link link-dark" aria-current="page">
                <i class="bi-table p-2"></i>
                Calender
              </a>
            </li>
            <li className="">
              <a href="#" className="nav-link link-dark" aria-current="page">
                <i class="bi-grid p-2"></i>
                Services
              </a>
            </li>
            <li className="">
              <a href="#" className="nav-link link-dark" aria-current="page">
                <i class="bi-person-circle p-2"></i>
                My Profil
              </a>
            </li>
          </ul>
          <hr />
          <Nav
            className="me-auto p-2"
            style={{
              position: "absolute",
              bottom: 0,
            }}
          >
            <img
              src="../user1.jpg"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />

            <NavDropdown title="Jane Doe" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Nav>
    </>
  );
}
