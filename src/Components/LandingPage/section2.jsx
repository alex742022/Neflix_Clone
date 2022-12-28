import React from "react";
import Tv from "../../Assets/tv.png";
import NetflixVid from "../../Assets/NetflixVid_Trim.mp4";
// import Context
import { CurrentLanguage } from "./changeLanguageFunction";
export default function Section2() {
  const languages = CurrentLanguage();
  // distructuring
  const {textOneSection, textTwoSection} = languages;
  return (
    <section
      className="bg-black border-t-8 border-[#222222] text-white pt-[40px] 
                        md:pt-[20px]"
    >
      <div
        className="flex flex-col items-center max-w-[1200px] mx-auto px-[20px] 
                      sm:pt-[20px] sm:px-[40px] 
                      md:flex-row md:pt-0"
      >
        <div
          className="text-center z-20 
                        md:text-left"
        >
          <h1
            className="text-[28px] font-semibold 
                        sm:text-[40px] 
                        lg:text-[55px]"
          >
            {textOneSection}
          </h1>
          <p
            className="text-[18px] mt-[5px] 
                        m:text-[22px]"
          >
            {textTwoSection}
          </p>
        </div>
        <div
          className="relative w-fit overflow-hidden mt-[-40px] 
                        md:mt-0"
        >
          <div className="w-fit">
            <img className="relative z-10" src={Tv} alt="tv" />
          </div>
          <div className="w-[80%] absolute left-[50%] translate-x-[-50%] top-[49%] translate-y-[-51%] bg-transparent overflow-hidden">
            <video autoPlay muted loop>
              <source src={NetflixVid} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
