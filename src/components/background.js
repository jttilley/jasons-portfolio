import React from "react"
import styled from "styled-components";

const FullBackgroundWrapper = styled.div`
  .fullbackground {
    background-image: "./images/background.jpeg";
    background-size: cover;
    background-position: center;
    height: 100%;
  }
  @media screen and (max-width: 480px) {
    .fullbackground {
      background-image: none;
    }
  }
`;

function Background({ children }) {
  return(
    <FullBackgroundWrapper>
      <div className="fullbackground">{children}</div>
    </FullBackgroundWrapper>
  );
}

export default Background;