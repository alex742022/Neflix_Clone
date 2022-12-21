import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <footer className="bg-black border-t-8 border-[#222222] text-[#737373]">
      <div className="px-[20px] max-w-screen-lg mx-auto">
        <div className="px-[20px] pt-[50px] pb-[30px] sm:px-[40px]">
          <h1 className="text-[17px]">Questions? Contact us.</h1>
          <div className="flex justify-between gap-[30px] mt-[30px] sm:hidden">
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>FAQ</ul>
              <ul>Account</ul>
              <ul>Investor Relations</ul>
              <ul>Redeem Gifts Cards</ul>
              <ul>Ways to Watch</ul>
              <ul>Privacy</ul>
              <ul>Corporate Information</ul>
              <ul>Speed Test</ul>
              <ul>Only on Netflix</ul>
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>Help Center</ul>
              <ul>Media Center</ul>
              <ul>Jobs</ul>
              <ul>Buy Gift Cards</ul>
              <ul>Terms of Use</ul>
              <ul>Cookie Preferences</ul>
              <ul>Contact Us</ul>
              <ul>Legal Notices</ul>
            </li>
          </div>

          <div className="hidden sm:flex sm:justify-between sm:gap-[30px] mt-[30px] md:hidden">
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>FAQ</ul>
              <ul>Media Center</ul>
              <ul>Investor Relations</ul>
              <ul>Redeem Gifts Cards</ul>
              <ul>Terms of Use</ul>
              <ul>Corporate Information</ul>
              <ul>Legal Notices</ul>
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>Help Center</ul>
              <ul>Investor Relations</ul>
              <ul>Buy Gift Cards</ul>
              <ul>Privacy</ul>
              <ul>Contact Us</ul>
              <ul>Only on Netflix</ul>
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>Account</ul>
              <ul>Jobs</ul>
              <ul>Buy Gift Cards</ul>
              <ul>Ways to Watch</ul>
              <ul>Cookies Preferences</ul>
              <ul>Speed Test</ul>
            </li>
          </div>

          <div className="hidden md:flex md:justify-between md:gap-[30px] mt-[30px]">
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>FAQ</ul>
              <ul>Investor Relations</ul>
              <ul>Ways to Watch</ul>
              <ul>Corporate Information</ul>
              <ul>Only on Netflix</ul>
              
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>Help Center</ul>
              <ul>Jobs</ul>
              <ul>Terms of Use</ul>
              <ul>Contact Us</ul>
              
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>Account</ul>
              <ul>Redeem Gifts Cards</ul>
              <ul>Privacy</ul>
              <ul>Speed Test</ul>
            </li>
            <li className="flex flex-col gap-[10px] w-[50%] text-sm list-none">
              <ul>Media Center</ul>
              <ul>Buy Gift Cards</ul>
              <ul>Cookies Preferences</ul>
              <ul>Legal Notices</ul>
            </li>
          </div>

          <div className="text-[rgb(180,180,180)] mt-[30px]">
            <button className="text-[17px] font-[400] px-[15px] py-[10px] border border-[rgba(250,250,250,.3)]">
              <FontAwesomeIcon className="mr-[15px]" icon={faGlobe}/>
              English
              <FontAwesomeIcon className="ml-[10px]" icon={faCaretDown}/>
            </button>
          </div>
          <small className="mt-[20px] block">Netflix Philippines</small>
        </div>
      </div>
    </footer>
  );
}
