import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegCopyright } from "react-icons/fa";
import styled from "styled-components";

const Center = styled.div`
  margin: 20px auto;
`;

function App() {
  return (
    <div className="App">
      <div className="customcolor navv">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/favicon.ico"
                width="30px"
                height="30px"
                className="d-inline-block align-top"
              />{" "}
              React-Bootstrap
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div
        className="main"
        style={{
          paddingLeft: "5em",
          paddingRight: "5em",
          paddingBotton: "5em",
          paddingTop: "1em",
        }}
      >
        <div>
          {" "}
          <img alt="" src="/favicon.ico" width="50px" height="50px" />
          <h4>Jopasavvy</h4>
          <h6>Coming soon!</h6>
          <p>
            Our mission as a company is to provide packages that can be paid for
            without stress. This is the sole aim of jopa savvy global limited,
            adding value to the lives of Nigerians by helping them get their
            daily needs one Naira @ a time.
          </p>
        </div>
        <div>
          <h4>Sign up</h4>
        </div>
      </div>
      <div className="item1">
        <div
          style={{
            paddingLeft: "5em",
            paddingRight: "5em",
            paddingBotton: "5em",
            paddingTop: "1em",
          }}
        >
          {" "}
          <h4>About us</h4>
          <p>
            Jopasavvy Global is a dynamic company focused on helping the average
            Nigerian meet up with their Household need through daily
            contribution otherwise know as product savings , we provide the best
            payment method every Nigerian can access any product they need
            through instalmental payments that are very convenient.
          </p>
        </div>

        <div>
          {" "}
          <h4>Our Vision</h4>
          <p>
            Our vision is to eradicate lack by making all daily needs accessible
            to every Nigerians and beyond.
          </p>
        </div>
      </div>
      <div className="item2">
        <h4>Jopasavvy</h4>
        <h4>Quick Links</h4>
        <h4>Follow Us</h4>
      </div>
      <div className="footer">
        <footerSection>
          <Center>
            <textContent>
              <FaRegCopyright /> Copyright 2022. jopasavvy.com
            </textContent>
          </Center>
        </footerSection>
      </div>
    </div>
  );
}

export default App;
