import React, { useState } from "react";
import "./App.css"; // We'll put the CSS here

function App() {
  const [activeContent, setActiveContent] = useState(null);

  const data = {
    info: (
      <div>
        <h2>info</h2>
        <p>
          hi
        </p>
      </div>
    ),
    links: (
      <div>
        <h2>links</h2>
        <p>
          <a href="">spotify</a><br/>
          <a href="">discord</a><br/> 
          <a href="">github</a><br/> 
          <a href="">twitter</a><br/> 
          <a href="">insta</a><br/>
          </p>
      </div>
    ),
    projects: (
      <div>
        <h2>projects</h2>
        <p>Your projects here.</p>
      </div>
    ),
    other: (
      <div>
        <h2>other cool stuff</h2>
        <p>Random cool stuff here.</p>
      </div>
    ),
  };

  const openContent = (section) => {
    setActiveContent(section);
  };

  const homePressed = () => {
    setActiveContent(null);
  };

  return (
    <div className="App">
      <button className="header" onClick={homePressed}>
        zeniel sunga
      </button>

      <div className={`menu ${activeContent ? "shift-left" : ""}`}>
        <div className="text-container">
          <button className={`text-button ${activeContent=="info" ? "activeButton" : ""}`} onClick={() => openContent("info")}>
            info
          </button>
          <button className={`text-button ${activeContent=="links" ? "activeButton" : ""}`} onClick={() => openContent("links")}>
            links
          </button>
          <button className={`text-button ${activeContent=="projects" ? "activeButton" : ""}`} onClick={() => openContent("projects")}>
            projects
          </button>
          <button className={`text-button ${activeContent=="other" ? "activeButton" : ""}`} onClick={() => openContent("other")}>
            other cool stuff
          </button>
        </div>
      </div>

      <div className={`content ${activeContent ? "show" : ""}`}>
        {activeContent && data[activeContent]}
      </div>
    </div>
  );
}

export default App;
