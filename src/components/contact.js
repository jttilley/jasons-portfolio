import React from "react"
import {Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import Background from "./background";
import Footer from "./footer";
import NavBar from "./nav";

const ContactWrapper = styled.div`
  .container {
    height: 600px;
    margin-top: 30px;
  }
  .info {
    font-size: 20pt;
    li {
      margin: 20px;
    }
  }
  .contactpic {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 480px) {
    .container { 
      height: 50%;
    }
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <Background>
        <NavBar />
        <Container>
          <Row className="card-header">
            <Col lg={4} className="card card-body">
            <img className="contactpic" alt="Jason Tilley" src="https://github.com/jttilley/react-portfolio/blob/main/images/Family.jpeg?raw=true" />
            </Col>
            <Col lg={8} className="card card-body">

              <ul className="info">
                <li > GitHub: <a  href="https://github.com/jttilley">jttilley</a>
                </li>
                <li > LinkedIn: <a href="https://www.linkedin.com/in/jason-t-tilley/">jason-t-tilley</a>
                </li>
                <li>Email: jttilley007@gmail.com</li>
                <li>Resume: <a href="https://docs.google.com/document/d/1JZmUQ6V4Xdrd1v8K9TQgww6I28AzIHfSSeBME6vDJ1w/edit?usp=sharing">Jason Tilley</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Background>
    </ContactWrapper>
  );
}

export default Contact;