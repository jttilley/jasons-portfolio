import React from "react";
import { Container, Row, Col } from "reactstrap";
// import { Grid, Paper, makeStyles, List, ListItem, TextField } from '@material-ui/core';
import styled from "styled-components";
import myApps from "../assets/data/portfolio-apps.json";
import AppCard from "../components/AppCard";
import MyNavBar from "../components/nav";
import Footer from "../components/footer";
import Background from "../components/background";
import { Box } from "@mui/system";
import { Grid, Toolbar } from '@mui/material';
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
      {/* <Background> */}
        <Box sx={{ display: 'flex' }}>
          <MyNavBar title="Jason Tilley"/>
          <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Grid container spacing={1}>
            {myApps.map(app => (
              <Grid item xs={12} sm={6} md={4} lg={3} >
                <AppCard 
                  title={app.title}
                  img={app.img}
                  github={app.github}
                  deployed={app.deployed}
                  imgDescription={app.imgDescription}
                />
               </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
        <Footer />
      {/* </Background> */}
    </PortfolioWrapper>
  );
}

export default Portfolio;