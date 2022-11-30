import "./App.css";
import { useState } from "react";
import projectData from "./assets/project-data.json";
import logo from "./assets/logo.png";
import ProjectTile from "./components/ProjectTile.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
projectData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  return (
    <div className="App">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <h1 className="intro">
        Hi - I'm a designer interested in the social aspect of technology. I like to explore ways to humanize users and UX and make designs that enrich people's lives rather than distract from them.
      </h1>
      {projectData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <ProjectTile item={item} height={'20rem'}></ProjectTile> // replace with BakeryItem component
      ))}
    </div>
  );
}

export default App;
