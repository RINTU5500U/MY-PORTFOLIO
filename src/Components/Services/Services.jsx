import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
// import Resume from '../../../../../../RESUME/BISWAJIT.pdf'

const Services = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="services">
      <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}> My Awesome </span>
        <span> services </span>
        <span>
          Lorem ipsum is simpley dummy text of printing of printing Lorem
          <br />
          ipsum is simpley dummy text if printing
        </span>
        <a>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"design"}
            detail={"Figma, Sketch,Photoshop, Adobe, Adobe xd"}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Frontend Developer"}
            detail={"Html, Css, Javascript, React"}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"Backend Developer"}
            detail={"Node.js, Express, mongoDB, mySQL"}
          />
        </div>
        <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
      </div>
    </div>
  );
};

export default Services;
