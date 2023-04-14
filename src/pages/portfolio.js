import React from "react";
import { Container, Row, Col } from "reactstrap";
// import { Grid, Paper, makeStyles, List, ListItem, TextField } from '@material-ui/core';
import styled from "styled-components";
import myApps from "../assets/data/portfolio-apps.json";
import AppCard from "../components/appCard";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import Background from "../components/background";

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
        <Container  xs="2" >
          <Row xs="2">
            {myApps.map(app => (
              <Col  xs="2" key={app.title}>
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