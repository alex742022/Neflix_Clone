import React from "react";
import Home from "./Components/LandingPage/home";
import Section2 from "./Components/LandingPage/section2";
import Footer from "./Components/LandingPage/footer";
import Main from "./Components/Main/main";

function App() {
  return (
    // <div className="grid grid-rows-[1fr_1fr] sm:grid-cols-[minmax(0px,_400px)_1fr]">
    //   <div className="border">
    //     <h1 className="text-3xl font-bold underline ">Column1</h1>
    //   </div>
    //   <div><h1 className="text-3xl font-light border">Column2asdsadsadsadsadasdasd</h1></div>
    // </div>
    <div>
      <Home />
      <Section2 />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
