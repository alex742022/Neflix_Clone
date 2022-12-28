import React from "react";
import LandingPageComponent from "./Components/LandingPage/landingPageComponent";
import Main from "./Components/Main/main";
//Router
import { Route, Routes } from "react-router-dom";
//import the Context Provider from ./Components/LandingPage/changeLanguageFunction
import { ChangeLanguageFunction } from "./Components/LandingPage/changeLanguageFunction";
function App() {
  return (
    // import Context Provider
    <>
      <ChangeLanguageFunction>
        <Routes>
          <Route path="/Neflix_Clone" element={<LandingPageComponent />} />
          <Route path="/started" element={<Main />} />
        </Routes>
      </ChangeLanguageFunction>
    </>
  );
}

export default App;
