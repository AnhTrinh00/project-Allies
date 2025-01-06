import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/Nav.css";

interface NavProps {
  onLogoClick: () => void;
}

function Nav({ onLogoClick }: NavProps) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const navigate = useNavigate();

  const handleModeChange = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.className = newMode ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const handleLogoClick = () => {
    onLogoClick();
    navigate("/project-Allies");
  };

  return (
    <div className="app">
      <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
        <a className="logo" onClick={handleLogoClick}>
          <img src="Sb-logo.png" alt="logo"/>
        </a>
        <h1 className="title">Project Allies</h1>
        <div className="mode-switch">
          <input 
            type="checkbox" 
            name="checkbox" 
            id="checkbox" 
            checked={darkMode}
            onChange={handleModeChange}/>
          <label htmlFor="checkbox" className="label"> </label>
        </div>
      </nav>
      <div className={`nav-underline ${darkMode ? "dark" : "light"}`}></div>
    </div>
  );
}

export default Nav;