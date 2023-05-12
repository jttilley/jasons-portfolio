import React from "react";
import styled from "styled-components";
import myApps from "../assets/data/portfolio-apps.json";
import AppCard from "../components/AppCard";
import MyNavBar from "../components/nav";
import Footer from "../components/footer";
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
      <Box sx={{ display: 'flex' }}>
        <MyNavBar title="Jason Tilley"/>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Grid container spacing={1}>
            {myApps.map(app => (
              <Grid item xs={12} sm={6} md={4} lg={3} >
                <AppCard 
                  title={app.title}
                  sub={app.sub}
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
    </PortfolioWrapper>
  );
}

export default Portfolio;