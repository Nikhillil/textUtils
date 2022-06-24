import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import your route components too

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    console.log("toggle");
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#052657";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtilies - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtilies - Light Mode";
    }
  };

  const bgColorRed = () => {
    console.log("color-Red");
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "red";
      showAlert("BackGround color red!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("BackGround color white!", "success");
    }
  };

  const bgColorOrange = () => {
    console.log("Color-Orange");
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "orange";
      showAlert("BackGround color yellow!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("BackGround color white!", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          togglemode={toggleMode}
          bgColorRed={bgColorRed}
          bgColorOrange={bgColorOrange}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/home"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter to text to analyze below"
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
