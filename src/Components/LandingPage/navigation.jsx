import React from "react";
import Logo from "../../Assets/Netflix-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Navigation(prop) {
  return (
    <nav className="flex text-white justify-between items-center">
      <div className="w-[100px] sm:w-[120px] xl:w-[170px]">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="relative z-10" onClick={prop.choseLang}>
          <button className="border px-[10px] sm:py-[5px]">
            <FontAwesomeIcon icon={faGlobe} className="mr-[5px]" />
            {prop.changeLang.language}
            <FontAwesomeIcon icon={faCaretDown} className="ml-[5px]" />
          </button>
          <div
            className={`absolute flex flex-col w-full bg-[gray] cursor-pointer text-center ${
              prop.chooseLang ? "visible" : "invisible"
            }`}
          >
            <span className="hover:bg-sky-700" onClick={prop.changetoEng}>
              English
            </span>
            <span className="hover:bg-sky-700" onClick={prop.changetoTag}>
              Filipino
            </span>
          </div>
        </div>
        <button
          className="bg-[red] px-[10px] py-[1px] rounded-md 
                                sm:px-[20px] 
                                sm:py-[5px]"
        >
          {prop.changeLang.login}
        </button>
      </div>
    </nav>
  );
}
