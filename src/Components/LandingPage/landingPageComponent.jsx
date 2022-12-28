import React from "react";
import Navigation from "./navigation";
import Home from "./home";
import Section2 from "./section2";
import Footer from "./footer";
export default function LandingPageComponent() {
  return (
    <>
      <section
        className="bg-landingPageNetflix w-full h-[550px] bg-cover bg-center bg-no-repeat
                relative
                sm:h-[750px]"
      >
        <div
          className="absolute top-0 w-full h-full bg-[rgba(0,0,0,.6)] 
                   px-[20px] lg:px-[50px]"
        >
          <div className="relative min-w-[300px]  w-full h-full mx-auto">
            <Navigation />
            <Home />
          </div>
        </div>
      </section>
      <Section2 />
      <Footer />
    </>
  );
}
