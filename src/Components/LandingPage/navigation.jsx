import React from "react";
import Logo from "../../Assets/Netflix-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import Context
import { LanguageToTagalog, LanguageToEnglish, LanguageChoose, LanguagesShow, CurrentLanguage} from "./changeLanguageFunction"
export default function Navigation() {
  const languages = CurrentLanguage();
  // distructuring
  const {language, login } = languages;  
  const languageToTagalog = LanguageToTagalog();
  const languageToEnglish = LanguageToEnglish();
  const languageChoose = LanguageChoose();
  const languageShow = LanguagesShow();
  return (
    <nav className="flex text-white justify-between items-center">
      <div className="w-[100px] sm:w-[120px] xl:w-[170px]">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="relative z-10" onClick={languageShow}>
          <button className="border px-[10px] sm:py-[5px]">
            <FontAwesomeIcon icon={faGlobe} className="mr-[5px]" />
            {language}
            <FontAwesomeIcon icon={faCaretDown} className="ml-[5px]" />
          </button>
          <div
            className={`absolute flex flex-col w-full bg-[gray] cursor-pointer text-center ${
               languageChoose? "visible" : "invisible"
            }`}
          >
            <span className="hover:bg-sky-700" onClick={languageToEnglish}>
              English
            </span>
            <span className="hover:bg-sky-700" onClick={languageToTagalog}>
              Filipino
            </span>
          </div>
        </div>
        <button
          className="bg-[red] px-[10px] py-[1px] rounded-md 
                                sm:px-[20px] 
                                sm:py-[5px]"
        >
          {login}
        </button>
      </div>
    </nav>
  );
}
