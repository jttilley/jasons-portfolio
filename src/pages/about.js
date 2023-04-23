import React from "react"
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import MyNavBar from "../components/nav";
import Footer from "../components/footer";
import Background from "../components/background";

const AboutWrapper = styled.div`
  .aboutPic {
    width: 300px;
    float: left;
    margin-right: 20px;
  }
  .about {
      padding: 10px;
      background-color: white;
  }
  .fullsheet {
    background-color: white;
    margin: 30px;
  }
  @media screen and (max-width: 480px) {
    .fullbackground { 
      height: 1800px;
    }
  }
`;

const About = () => {
  return (
    <AboutWrapper >
      <Background>
        <MyNavBar title="About Me" />
        <Container>
          <Row>
          <Col></Col>
          <Col lg={8} className="fullsheet">
              <Row>
                <Col lg={12} className="title">
                  <h2>About Me</h2>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col md={12} className="about">
                  <img className="aboutPic" alt="Jason Tilley" src={process.env.PUBLIC_URL + "/images/Family.jpeg"} />
                  <p>
                    I enjoy analyzing and problem solving. I am great with math and logic and love learning new things. I got into coding when I was in middle school and have enjoyed doing it ever since. I have a heart for helping others, am a good listener, and value accuracy, honesty, and truth. I love coding because I'm able to make helpful tools and functions for myself and others and it gives me the ability to innovate unique and useful solutions for people. 
                  </p>
                  <p>
                    For the last few years, I have been creating computer improvements for efficiency, error checking, and ease in every day tasks. I've made these improvments in every department for Lazer Designs, the small company I currently work at, as well as for a few other companies on the side. With all the creative solutions, improvements, apps, and macros I created, I've saved Lazer Designs over $750,000/yr in time, man power, and mistakes.
                  </p>
                  <p>
                    My creativity is not only in programming. I have also made many movies with my friends since elementary school. Over the years I've refined my skills at making and editing videos. I've even helped edit award winning documentaries and have made many training videos. 
                  </p>
                  <p>
                    I have a heart for teaching others about the facinating things I've learned. Some of my favorite passtimes are playing with my kids, playing volleyball, working out, and writing about things I've learned. I would love to find a job were I can create helpful and exciting apps full time. 
                  </p>
                  <p>
                    Technology Proficiencies: Javascript, jQuery, React, HTML, CSS, Bootstrap, Ajax, APIs, Node.js, express, express-handlebars, Visual Basic for Applications in Excel and CorelDraw, and AutoHotKeys
                  </p>
                </Col>
              </Row>
              <p>To contact me please Email: jttilley007@gmail.com</p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <Footer />
      </Background>
    </AboutWrapper>
  );
}

export default About;