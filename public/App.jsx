import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activeContent, setActiveContent] = useState(null);
  const [displayContent, setDisplayContent] = useState(null);
  const [fade, setFade] = useState(false);

  const data = {
    info: (
      <div>
        <h2>info</h2>
        <p>
          spotify<br />
          discord github twitter insta
        </p>
      </div>
    ),
    links: (
      <div>
        <h2>links</h2>
        <p>Your links here.</p>
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
    if (section === activeContent) return; // same button, no animation
    if (!activeContent) {
      setActiveContent(section);
      setDisplayContent(data[section]);
      setFade(true); // fade in new content
    }
    // Fade out current content
    setFade(false);

    // After fade out, update content
    setTimeout(() => {
      setActiveContent(section);
      setDisplayContent(data[section]);
      setFade(true); // fade in new content
    }, 20); // match transition duration
  };

  const homePressed = () => {
    setFade(false);
    setActiveContent(null);
    setDisplayContent(null);
   ;
  };

  return (
    <div className="App">
      <button className="header" onClick={homePressed}>
        zeniel sunga
      </button>

      <div className={`menu ${activeContent ? "shift-left" : ""}`}>
        <div className="text-container">
          <button className={`text-button ${activeContent == "info" ? "activeButton" : ""}`} onClick={() => openContent("info")}>
            info
          </button>
          <button className={`text-button ${activeContent == "links" ? "activeButton" : ""}`} onClick={() => openContent("links")}>
            links
          </button>
          <button className={`text-button ${activeContent == "projects" ? "activeButton" : ""}`} onClick={() => openContent("projects")}>
            projects
          </button>
          <button className={`text-button ${activeContent == "other" ? "activeButton" : ""}`} onClick={() => openContent("other")}>
            other cool stuff
          </button>
        </div>
      </div>

      <div className={`content ${fade ? "show" : ""}`}>
        {displayContent}
      </div>
    </div>
  );
}

export default App;
