import React from "react";
import Home from "../Page/Home";
import Projects from "../Page/Projects";
import About from "../Page/About";
import Contact from "../Page/Contact";
import MyNavbar from "../Component/myNavbar/MyNavbar";
import Skills2 from "./Skills";

function Combined() {
  return (
    <div>
      <Home id="home"></Home>
      <Skills2 id="skills" />
      <Projects id="projects" />
      <About id="about" />
      <Contact id="contact" />
      <MyNavbar className="myNavbar"></MyNavbar>
    </div>
  );
}

export default Combined;
