import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "reactstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

const NavWrapper = styled.div`
  span {
    .fab {
      font-size: 30pt;
      margin-left: 50px;
    }
  }
  nav {
    margin-bottom: 20px;
    flex-direction: row;
  }
  .box {
    color: black;
    a {
      color: navy;
    }
  }
  @media screen and (max-width: 780) {
    #navbarNav {
      flex-direction: row;
      text-align: center;
      justify-items: space-between;
      align-content: center;
    }
    .items {
        display: flex;
        flex-direction: row;
      }
  }
`;

const NavBar = ({title}) => {
  const { faGithub, faLinkedin } = fab;
  const links = [
    {
      link:"/",
      name:"Portfolio"
    },{
      link:"/about",
      name:"About"
    },{
      link:"/contact",
      name:"Contact"
    }
  ]

  return (
    <NavWrapper>
      <Nav className="navbar navbar-expand-lg navbar-light bg-light shadow ">
        <div className="box">
            <Link className="title" to="/about"><h1>Jason Tilley</h1></Link>
        </div>

        <div className="ml-auto" id="navbarNav">
            <ul className="navbar-nav ml-auto items">
              {links.map(({ name, link }) => (
                <li className="item" key={name}>
                  <Link className="nav-link" to={link}>{name}</Link>
                </li>
              ))}
              <li className="icon">
                <a className="nav-link" href="https://docs.google.com/document/d/1JZmUQ6V4Xdrd1v8K9TQgww6I28AzIHfSSeBME6vDJ1w/edit?usp=sharing">  
                  Resume
                </a>
              </li>
              <li className="icon">  
                <a className="nav-link" href="https://www.linkedin.com/in/jason-t-tilley/"> 
                  <FontAwesomeIcon icon={faLinkedin} size="2x" /> 
                </a>
              </li>
              <li className="icon">
                <a className="nav-link" href="https://github.com/jttilley">  
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </li>
            </ul>
        </div>
      </Nav>
    </NavWrapper>
  );
}
export default NavBar;