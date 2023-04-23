import React from "react"
import { Card, CardHeader, CardBody } from "reactstrap";
import styled from "styled-components";

const DetailsWrapper = styled(Card)`
  img {
    width: 450px;
    height: 400px;
    margin-top: 10px;
  }
  .card {
    width: 20rem;
    margin: 10px;
    border: 10px;
    padding: 10px;
    flex-direction: row;
  }

  a {
    width:500px;
  }

  .card-header {
    width:500px;
  }

  .card-body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 500px;
  }

  .github {
    display: flex;
    align-items: center;
    justify-content: space-between;
    float: right;
    font-size: 15pt;
  }

  .description {
    width: 400px;
    font-size: 18px;
  }

  span {
    font-size: 30px;
    margin-right: 0px;
  }

  @media screen and (max-width: 780)
  .card-body {
    width: 100%;
  }

`;

const AppCard = ({title, github, deployed, img, imgDescription}) => {
  return (
    <DetailsWrapper>
      <Card>
          <CardHeader>
            <span>{title} <a className="github" href={github}>GitHub</a></span>
            
          </CardHeader>
          <a href={deployed}>
            <CardBody>
            <div className="description"><strong>{imgDescription}</strong></div>
            <img src={process.env.PUBLIC_URL + img} alt={imgDescription}/>
          </CardBody>
        </a>
      </Card>
    </DetailsWrapper>
  );
}

export default AppCard;