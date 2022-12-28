import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import Context
import {
  CurrentLanguage,
  LanguageChooseFooter,
  LanguagesShowFooter,
  LanguageToEnglish,
  LanguageToTagalog,
} from "./changeLanguageFunction";

export default function Footer() {
  const languages = CurrentLanguage();
  // distructuring
  const {
    language,
    footerTextOne,
    footerTextTwo,
    footerTextThree,
    footerTextFour,
    footerTextFive,
    footerTextSix,
    footerTextSeven,
    footerTextEight,
    footerTextNine,
    footerTextTeen,
    footerTextEleven,
    footerTextTwelve,
    footerTextThirteen,
    footerTextFourteen,
    footerTextFifthteen,
    footerTextSixteen,
    footerTextSeventeen,
    footerTextEighteen
  } = languages;

  const languageToTagalog = LanguageToTagalog();
  const languageToEnglish = LanguageToEnglish();
  const languageChooseFooter = LanguageChooseFooter();
  const languageShowFooter = LanguagesShowFooter();

  return (
    <footer className="bg-black border-t-8 border-[#222222] text-[#737373]">
      <div className="px-[20px] max-w-screen-lg mx-auto">
        <div className="px-[20px] pt-[50px] pb-[30px] sm:px-[40px]">
          <h1 className="text-[17px]">
            {footerTextEighteen} {footerTextSixteen}.
          </h1>
          <div className="flex justify-between gap-[30px] mt-[30px] sm:hidden">
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{footerTextOne}</ul>
              <ul>{footerTextTwo}</ul>
              <ul>{footerTextThree}</ul>
              <ul>{footerTextFour}</ul>
              <ul>{footerTextFive}</ul>
              <ul>{footerTextSix}</ul>
              <ul>{footerTextSeven}</ul>
              <ul>{footerTextEight}</ul>
              <ul>{footerTextNine}</ul>
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{footerTextTeen}</ul>
              <ul>{footerTextEleven}</ul>
              <ul>{footerTextTwelve}</ul>
              <ul>{footerTextThirteen}</ul>
              <ul>{footerTextFourteen}</ul>
              <ul>{footerTextFifthteen}</ul>
              <ul>{footerTextSixteen}</ul>
              <ul>{footerTextSeventeen}</ul>
            </li>
          </div>

          <div className="hidden sm:flex sm:justify-between sm:gap-[30px] mt-[30px] md:hidden">
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{footerTextOne}</ul>
              <ul>{footerTextEleven}</ul>
              <ul>{footerTextThree}</ul>
              <ul>{footerTextFour}</ul>
              <ul>{footerTextFourteen}</ul>
              <ul>{footerTextSeven}</ul>
              <ul>{footerTextSeventeen}</ul>
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{footerTextTeen}</ul>
              <ul>{footerTextThree}</ul>
              <ul>{footerTextThirteen}</ul>
              <ul>{footerTextSix}</ul>
              <ul>{footerTextSixteen}</ul>
              <ul>{footerTextNine}</ul>
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{footerTextTwo}</ul>
              <ul>{footerTextTwelve}</ul>
              <ul>{footerTextThirteen}</ul>
              <ul>{footerTextFive}</ul>
              <ul>{footerTextFifthteen}</ul>
              <ul>{footerTextEight}</ul>
            </li>
          </div>

          <div className="hidden md:flex md:justify-between md:gap-[30px] mt-[30px]">
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{footerTextOne}</ul>
              <ul>{footerTextThree}</ul>
              <ul>{footerTextFive}</ul>
              <ul>{footerTextSeven}</ul>
              <ul>{footerTextNine}</ul>
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{footerTextTeen}</ul>
              <ul>{footerTextTwelve}</ul>
              <ul>{footerTextFourteen}</ul>
              <ul>{footerTextSixteen}</ul>
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{footerTextTwo}</ul>
              <ul>{footerTextFour}</ul>
              <ul>{footerTextSix}</ul>
              <ul>{footerTextEight}</ul>
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>{footerTextEleven}</ul>
              <ul>{footerTextThirteen}</ul>
              <ul>{footerTextFifthteen}</ul>
              <ul>{footerTextSeventeen}</ul>
            </li>
          </div>

          <div
            className="relative text-[rgb(180,180,180)] mt-[30px] w-[145px]"
            onClick={languageShowFooter}
          >
            <button className="text-[17px] font-[400] px-[15px] py-[10px] border border-[rgba(250,250,250,.3)] w-full">
              <FontAwesomeIcon className="mr-[15px]" icon={faGlobe} />
              {language}
              <FontAwesomeIcon className="ml-[10px]" icon={faCaretDown} />
            </button>
            <div
              className={`absolute flex flex-col w-full bg-[gray] cursor-pointer text-center ${
                languageChooseFooter ? "visible" : "invisible"
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
          <small className="mt-[20px] block">Netflix Philippines</small>
        </div>
      </div>
    </footer>
  );
}
