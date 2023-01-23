import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import myApps from "../assets/data/portfolio-apps.json";
import AppCard from "./appCard";
import NavBar from "./nav";
import Footer from "./footer";
import Background from "./background";

const PortfolioWrapper = styled.div`
  .card-holder {
    margin-top: 20px;
  }
  .card-header {
    background-color: navy;
    color: white;
    a {
      color: white;
    }
  }
`;



const Portfolio = () => {

  return (
    <PortfolioWrapper>
      <Background>
        <NavBar />
        <div className="card-holder">
        <Container >
          <Row>
            {myApps.map(app => (
              <Col key={app.title}>
                <AppCard 
                  title={app.title}
                  img={app.img}
                  github={app.github}
                  deployed={app.deployed}
                  imgDescription={app.imgDescription}
                />
              </Col>
            ))}
          </Row>
        </Container>
        </div>
        <Footer />
      </Background>
    </PortfolioWrapper>
  );
}

export default Portfolio;