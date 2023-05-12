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
  .title {
    margin-top: 100px;
  }
  h2 {
    color: white;
  }

  p {
    animation: fadeInText 2s;
    -webkit-animation: fadeInText 2s;
    -moz-animation: fadeInText 2s;
    -o-animation: fadeInText 2s;
    -ms-animation: fadeInText 2s;
  }
  
  @keyframes fadeInText {
    0% { width : 0%; opacity : 0%; }
    100% { width : 100%; opacity : 100%; }
  }

  @-moz-keyframes fadeInText {
    0% { width : 0%; opacity : 0%; }
    100% { width : 100%; opacity : 100%; }
  }

  @-webkit-keyframes fadeInText {
    0% { width : 0%; opacity : 0%; }
    100% { width : 100%; opacity : 100%; }
  }

  @-o-keyframes fadeInText {
    0% { width : 0%; opacity : 0%; }
    100% { width : 100%; opacity : 100%; }
  }

  @-ms-keyframes fadeInText {
    0% { width : 0%; opacity : 0%; }
    100% { width : 100%; opacity : 100%; }
  }

  img {
    animation: fadeIn 4s;
    -webkit-animation: fadeIn 4s;
    -moz-animation: fadeIn 4s;
    -o-animation: fadeIn 4s;
    -ms-animation: fadeIn 4s;
  }
  
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @-moz-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @-webkit-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @-o-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @-ms-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
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
        <MyNavBar title="Jason Tilley" />
        <Container>
          <Row>
          <Col></Col>
          <Col lg={8} className="fullsheet">
              <Row>
                <Col lg={12} className="title">
                  <h1>Here's a little bit about me</h1>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col md={12} className="about">
                  <img className="aboutPic" alt="Jason Tilley" src={process.env.PUBLIC_URL + "/images/IMG_4271.jpeg"} />
                  <p>
                    I enjoy analyzing and problem solving. I am great with math and logic and love learning new things. I got into coding when I was in middle school and have enjoyed doing it ever since. I have a heart for helping others, am a good listener, and value accuracy, honesty, and truth. I love coding because I get to create and innovate helpful tools and solutions for myself and others. 
                  </p>
                  <p>
                    I got my BA in Computer Science and Information Systems from Fort Lewis College. In high school and collage I worked mostly in C++ but since then I've worked on projects in many other languages. I have since taken some coding classes on iOS, Swift, and fullstack web development. I am currently a part time Teacher's Assistant for the Denver University Fullstack Web Development Bootcamp where I get to help students better understand the concepts and principles of web development and coding in general.
                  </p>
                  <p>
                    For the last few years, I have been creating software improvements for efficiency, error checking, and ease in every day tasks. I've made these improvments in every department for Lazer Designs, the small company I currently work at, as well as for a few other companies on the side. With all the creative solutions, improvements, apps, and macros I created, I've saved Lazer Designs over $750,000/yr in time, man power, and mistakes.
                  </p>
                  <p>
                    My creativity is not only in programming. I have also made many movies with my friends since elementary school. Over the years I've refined my skills at making and editing videos. I've even helped edit award winning documentaries and have made many training videos. 
                  </p>
                  <p>
                    I have a heart for teaching others about the facinating things I've learned. Some of my favorite pastimes are spending time with my family, playing volleyball, working out, learning new things, and writing about things I've learned to share them with others and help me remember it better. I would love to find a new job where I can use my creative ideas and abilities to create and improve helpful and exciting programs and apps full time. 
                  </p>
                  <p>
                    Technology Proficiencies: Javascript, jQuery, React, Redux, HTML, CSS, Bootstrap, Ajax, APIs, Node.js, express, express-handlebars, SQL, PHP, Python, Visual Basic for Applications in Excel and CorelDraw, AutoHotkey, COM, and even a little bit of Java and C#
                  </p>
                  <p>To contact me please Email: jttilley007@gmail.com</p>
                </Col>
              </Row>
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