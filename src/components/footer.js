import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'


const FooterWrapper = styled.div`
  span {
    margin: 0 20px;
    color: white;
  }
  svg {
    font-size: 30pt;
    color: white;
  }
  footer {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: flex-end;
    padding: 30px 200px;
    background-color: black;
  }
  @media screen and (max-width: 480px) {
    span {
      margin: 0 20px;
      color: white;
    }
    icon {
      font-size: 30pt;
      color: white;
    }
    footer {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: flex-end;
      padding: 30px 10px;
      width: 100%
    }
  }
`;

function Footer() {
  console.log('fab: ', fab);
  const { faGithub, faLinkedin } = fab;
  return (
    <FooterWrapper>
      <footer>
        <span>  
          <a href="https://www.linkedin.com/in/jason-t-tilley/">  
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </span>
        <span>
          <a href="https://github.com/jttilley">  
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </span>
        <span>
          &copy; Copyright 2020
        </span>
      </footer>
    </FooterWrapper>
  );
}

export default Footer;