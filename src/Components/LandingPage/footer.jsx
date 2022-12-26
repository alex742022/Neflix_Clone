import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Footer(prop) {
  return (
    <footer className="bg-black border-t-8 border-[#222222] text-[#737373]">
      <div className="px-[20px] max-w-screen-lg mx-auto">
        <div className="px-[20px] pt-[50px] pb-[30px] sm:px-[40px]">
          <h1 className="text-[17px]">Questions? {prop.changeLang.footerTextOneSixteen}.</h1>
          <div className="flex justify-between gap-[30px] mt-[30px] sm:hidden">
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{prop.changeLang.footerTextOne}</ul>
              <ul>{prop.changeLang.footerTextTwo}</ul>
              <ul>{prop.changeLang.footerTextThree}</ul>
              <ul>{prop.changeLang.footerTextFour}</ul>
              <ul>{prop.changeLang.footerTextFive}</ul>
              <ul>{prop.changeLang.footerTextSix}</ul>
              <ul>{prop.changeLang.footerTextSeven}</ul>
              <ul>{prop.changeLang.footerTextEight}</ul>
              <ul>{prop.changeLang.footerTextNine}</ul>
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{prop.changeLang.footerTextTeen}</ul>
              <ul>{prop.changeLang.footerTextEleven}</ul>
              <ul>{prop.changeLang.footerTextTwelve}</ul>
              <ul>{prop.changeLang.footerTextThirteen}</ul>
              <ul>{prop.changeLang.footerTextOneFourteen}</ul>
              <ul>{prop.changeLang.footerTextOneFifthteen}</ul>
              <ul>{prop.changeLang.footerTextOneSixteen}</ul>
              <ul>{prop.changeLang.footerTextOneSeventeen}</ul>
            </li>
          </div>

          <div className="hidden sm:flex sm:justify-between sm:gap-[30px] mt-[30px] md:hidden">
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{prop.changeLang.footerTextOne}</ul>
              <ul>{prop.changeLang.footerTextEleven}</ul>
              <ul>{prop.changeLang.footerTextThree}</ul>
              <ul>{prop.changeLang.footerTextFour}</ul>
              <ul>{prop.changeLang.footerTextOneFourteen}</ul>
              <ul>{prop.changeLang.footerTextSeven}</ul>
              <ul>{prop.changeLang.footerTextOneSeventeen}</ul>
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{prop.changeLang.footerTextTeen}</ul>
              <ul>{prop.changeLang.footerTextThree}</ul>
              <ul>{prop.changeLang.footerTextThirteen}</ul>
              <ul>{prop.changeLang.footerTextSix}</ul>
              <ul>{prop.changeLang.footerTextOneSixteen}</ul>
              <ul>{prop.changeLang.footerTextNine}</ul>
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{prop.changeLang.footerTextTwo}</ul>
              <ul>{prop.changeLang.footerTextTwelve}</ul>
              <ul>{prop.changeLang.footerTextThirteen}</ul>
              <ul>{prop.changeLang.footerTextFive}</ul>
              <ul>{prop.changeLang.footerTextOneFifthteen}</ul>
              <ul>{prop.changeLang.footerTextEight}</ul>
            </li>
          </div>

          <div className="hidden md:flex md:justify-between md:gap-[30px] mt-[30px]">
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{prop.changeLang.footerTextOne}</ul>
              <ul>{prop.changeLang.footerTextThree}</ul>
              <ul>{prop.changeLang.footerTextFive}</ul>
              <ul>{prop.changeLang.footerTextSeven}</ul>
              <ul>{prop.changeLang.footerTextNine}</ul>
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{prop.changeLang.footerTextTeen}</ul>
              <ul>{prop.changeLang.footerTextTwelve}</ul>
              <ul>{prop.changeLang.footerTextOneFourteen}</ul>
              <ul>{prop.changeLang.footerTextOneSixteen}</ul>
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{prop.changeLang.footerTextTwo}</ul>
              <ul>{prop.changeLang.footerTextFour}</ul>
              <ul>{prop.changeLang.footerTextSix}</ul>
              <ul>{prop.changeLang.footerTextEight}</ul>
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{prop.changeLang.footerTextEleven}</ul>
              <ul>{prop.changeLang.footerTextThirteen}</ul>
              <ul>{prop.changeLang.footerTextOneFifthteen}</ul>
              <ul>{prop.changeLang.footerTextOneSeventeen}</ul>
            </li>
          </div>

          <div
            className="relative text-[rgb(180,180,180)] mt-[30px] w-[145px]"
            onClick={prop.choseLang}
          >
            <button className="text-[17px] font-[400] px-[15px] py-[10px] border border-[rgba(250,250,250,.3)] w-full">
              <FontAwesomeIcon className="mr-[15px]" icon={faGlobe} />
              {prop.changeLang.language}
              <FontAwesomeIcon className="ml-[10px]" icon={faCaretDown} />
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
          <small className="mt-[20px] block">Netflix Philippines</small>
        </div>
      </div>
    </footer>
  );
}
