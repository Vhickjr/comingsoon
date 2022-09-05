import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegCopyright } from "react-icons/fa";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Center = styled.div`
  margin: 20px auto;
`;

function App() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uzujr4h",
        "template_23cdkcq",
        e.target,
        "dfKvdTRbroAo0kBGF"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
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
              Jopasavvy
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About us</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
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
          <form
            style={{
              paddingTop: "3em",
              paddingBottom: "3em",
              justifyContent: "center",
            }}
            onSubmit={sendEmail}
          >
            <div>
              <input
                type="name"
                placeholder="Full name"
                style={{
                  width: "500px",
                  height: "50px",
                  borderRadius: "5px",
                  paddingLeft: "25px",
                }}
              ></input>
            </div>
            <div style={{ display: "inline-flex", paddingTop: "20px" }}>
              <input
                type="email"
                placeholder="Email"
                style={{
                  width: "400px",
                  height: "50px",
                  borderRadius: "5px",
                  paddingLeft: "25px",
                }}
              ></input>
            </div>
            <button
              type="submit"
              value="send"
              style={{
                width: "100px",
                height: "50px",
                borderRadius: "5px",
                color: "white",
                backgroundColor: "black",
              }}
            >
              Subscribe
            </button>
          </form>
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
        <div>
          <h4>Jopasavvy</h4>
          <h9>The new way to buy</h9>
        </div>
        <div>
          <h4>Quick Links</h4>
          <h6>Home</h6>
          <h6>About</h6> <h6>Contact</h6>
        </div>
        <div>
          <h4>Follow Us</h4>
          <h6>
            <a
              style={{ textDecoration: "none" }}
              href="https://web.facebook.com/Jopa_Savvy"
            >
              Facebook
            </a>
          </h6>
          <h6 href="https://twitter.com/Jopasavvy">Twitter</h6>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.instagram.com/Jopasavvy_GL/"
          >
            <h6>Instagram</h6>
          </a>
        </div>
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
