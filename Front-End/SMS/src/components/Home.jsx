import React from "react";
import heroImg from "../assets/hero.png";
import ViratImg from "../assets/virat.jpg";
import harrieImg from "../assets/harrie.webp";
import MaxImg from "../assets/max.webp";
import ironImg from "../assets/iron.webp";

const Home = () => {
  return (
    <div>
      Home
      <h2>Welcome Aayush</h2>
      <img src={heroImg} className="base"  width="170" height="179" alt=""  style={{ border:"2px solid black"}}/>
      <img src={ViratImg} className="base" width="170" height="179" alt="" style={{ border:"2px solid black"}}/>
      <img src={harrieImg} className="base" width="170" height="179" alt="" style={{ border:"2px solid black"}} />
      <img src={MaxImg} className="base" width="170" height="179" alt="" style={{ border:"2px solid black"}}/>
      <img src={ironImg} className="base" width="170" height="179" alt=""style={{ border:"2px solid black"}} />
    </div>
  );
};

export default Home;
