import React from "react"
import { Card, CardHeader, CardBody } from "reactstrap";
import styled from "styled-components";

const DetailsWrapper = styled(Card)`
  img {
    width: 450px;
    height: 400px;
    margin-top: 10px;
  }

  .card-body {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .github {
    display: flex;
    align-items: center;
    justify-content: space-between;
    float: right;
    font-size: 15pt;
  }

  .description {
    /* width: 400px; */
    font-size: 18px;
  }

  span {
    font-size: 30px;
    margin-right: 0px;
  }


`;

const AppCard = ({title, github, deployed, img, imgDescription}) => {
  return (
    <DetailsWrapper>
      <Card sx={{paddingTop:'50px'}}>
          <CardHeader>
            <span>{title} <a className="github" href={github}>GitHub</a></span>
            
          </CardHeader>
          <a href={deployed}>
            <CardBody>
            <div className="description"><strong>{imgDescription}</strong></div>
            <img src={img} alt={imgDescription}/>
            {/* <CardHeader> */}
            {/* </CardHeader> */}
          </CardBody>
        </a>
      </Card>
    </DetailsWrapper>
  );
}

export default AppCard;