import React from "react";
import LandingPageComponent from "./Components/LandingPage/landingPageComponent";
import Main from "./Components/Main/main";
//Router 
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/Neflix_Clone" element={<LandingPageComponent />} />
        <Route path="/started" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
