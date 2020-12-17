import React from 'react'
import NavBar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Col from "react-bootstrap/Col";

function Navigation() {
 return (
 
  <Container fluid="true">
  <NavBar className="navbar navbar-expand-lg navbar-light bg-light">
  <Col className="container-fluid">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Andy Ives</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </Col>
  </NavBar>
  </Container>

 )
}
export default Navigation