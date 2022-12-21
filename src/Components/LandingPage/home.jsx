import React, { useState } from "react";
import Logo from "../../Assets/Netflix-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const [changeLanguage, setChangeLanguage] = useState({
    language: "English",
  });

  const [chooseLanguage, setChooseLanguage] = useState(false);

  const changeLangtoEng = () => {
    setChangeLanguage(() => ({
      language: "English",
    }));
  };
  const changeLangtoTag = () => {
    setChangeLanguage(() => ({
      language: "Filipino",
    }));
  };

  const chooseLang = () => {
    setChooseLanguage((prevChooseLanguage) => !prevChooseLanguage);
  };

  return (
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
          <header className="flex text-white justify-between items-center">
            <div className="w-[100px] sm:w-[120px] xl:w-[170px]">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="relative z-10" onClick={chooseLang}>
                <button className="border px-[10px] sm:py-[5px]">
                  <FontAwesomeIcon icon={faGlobe} className="mr-[5px]" />
                  {changeLanguage.language}
                  <FontAwesomeIcon icon={faCaretDown} className="ml-[5px]" />
                </button>
                <div
                  className={`absolute flex flex-col w-full bg-[gray] cursor-pointer text-center ${
                    chooseLanguage ? "visible" : "invisible"
                  }`}
                >
                  <span className="hover:bg-sky-700" onClick={changeLangtoEng}>
                    English
                  </span>
                  <span className="hover:bg-sky-700" onClick={changeLangtoTag}>
                    Filipino
                  </span>
                </div>
              </div>
              <button
                className="bg-[red] px-[10px] py-[1px] rounded-md 
                                sm:px-[20px] 
                                sm:py-[5px]"
              >
                Sign In
              </button>
            </div>
          </header>

          <div className="w-full h-full flex items-center justify-center px-[20px] absolute top-0">
            <div className="text-white text-center items-center mt-[80px] max-w-[700px]">
              <h1
                className="landingHeader text-[25px] font-[600] 
                          sm:text-[55px] sm:leading-[55px]
                          lg:text-[60px] xl:text-[65px] xl:leading-[70px]"
              >
                Unlimited movies, TV shows, and more.
              </h1>
              <p
                className="landingParag mt-[10px] text-[18px]
                          sm:text-[25px]"
              >
                Watch anywhere. Cancel anytime.
              </p>
              <p className="mt-[10px] text-[18px]">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <button
                className="bg-[red] px-[20px] py-[8px] mt-[25px] rounded-md
                                lg:text-[30px] lg:px-[25px] lg:py-[10px]"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
