import React, { useState } from "react";
import Navigation from "./navigation";
import Home from "./home";
import Section2 from "./section2";
import Footer from "./footer";
export default function LandingPageComponent() {
  const [changeLanguage, setChangeLanguage] = useState({
    language: "English",
    login: "Sign In",
    header: "Unlimited movies, TV shows, and more.",
    textOne: "Watch anywhere. Cancel anytime.",
    textTwo:
      "Ready to watch? Enter your email to create or restart your membership.",
    textButton: "Get Started",
    textOneSection: "Enjoy on your TV.",
    textTwoSection:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    footerTextOne: "FAQ",
    footerTextTwo: "Account",
    footerTextThree: "Investor Relations",
    footerTextFour: "Redeem Gifts Cards",
    footerTextFive: "Ways to Watch",
    footerTextSix: "Privacy",
    footerTextSeven: "Corporate Information",
    footerTextEight: "Speed Test",
    footerTextNine: "Only on Netflix",
    footerTextTeen: "Help Center",
    footerTextEleven: "Media Center",
    footerTextTwelve: "Jobs",
    footerTextThirteen: "Buy Gift Cards",
    footerTextOneFourTeen: "Terms of Use",
    footerTextOneFifthteen: "Cookie Preferences",
    footerTextOneSixteen: "Contact Us",
    footerTextOneSeventeen: "Legal Notices",
  });

  const [chooseLanguage, setChooseLanguage] = useState(false);

  const changeLangtoEng = () => {
    setChangeLanguage(() => ({
      language: "English",
      login: "Sign In",
      header: "Unlimited movies, TV shows, and more.",
      textOne: "Watch anywhere. Cancel anytime.",
      textTwo:
        "Ready to watch? Enter your email to create or restart your membership.",
      textButton: "Get Started",
      textOneSection: "Enjoy on your TV.",
      textTwoSection:
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      // footerTextOne: "FAQ",
      // footerTextTwo: "Account",
      footerTextThree: "Investor Relations",
      footerTextFour: "Redeem Gifts Cards",
      footerTextFive: "Ways to Watch",
      // footerTextSix: "Privacy",
      // footerTextSeven: "Corporate Information",
      // footerTextEight: "Speed Test",
      footerTextNine: "Only on Netflix",
      // footerTextTeen: "Help Center",
      // footerTextEleven: "Media Center",
      footerTextTwelve: "Jobs",
      footerTextThirteen: "Buy Gift Cards",
      footerTextOneFourTeen: "Terms of Use",
      footerTextOneFifthteen: "Cookie Preferences",
      footerTextOneSixteen: "Contact Us",
      footerTextOneSeventeen: "Legal Notices",
    }));
  };
  const changeLangtoTag = () => {
    setChangeLanguage(() => ({
      language: "Filipino",
      login: "Mag-sign In",
      header: "Unlimited na pelikula, TV show, at marami pang iba.",
      textOne: "Manood kahit saan. Mag-cancel kahit kailan.",
      textTwo:
        "Handa nang manood? Ilagay ang email mo para gawin o simulan ulit ang membership mo.",
      textButton: "Magsimula",
      textOneSection: "Mag-enjoy sa TV mo.",
      textTwoSection:
        "Manood sa mga Smart TV, Playstation, Xbox, Chromecast, Apple TV, Blu-ray player, at marami pang iba.",
      // footerTextOne: "FAQ",
      // footerTextTwo: "Account",
      footerTextThree: "Mga Pakikipag-ugnayan sa Investor",
      footerTextFour: "Mag-redeem ng mga Gift Card",
      footerTextFive: "Mga Paraan para Manood",
      // footerTextSix: "Privacy",
      // footerTextSeven: "Corporate Information",
      // footerTextEight: "Speed Test",
      footerTextNine: "Sa Netflix lang",
      footerTextTeen: "Help Center",
      footerTextEleven: "Media Center",
      footerTextTwelve: "Mga Trabaho",
      footerTextThirteen: "Bumili ng mga Gift Card",
      footerTextOneFourTeen: "Mga Tuntunin ng Paggamit",
      footerTextOneFifthteen: "Mga Preference sa Cookie",
      footerTextOneSixteen: "Makipag-ugnayan sa Amin",
      footerTextOneSeventeen: "Mga Legal na Abiso",
    }));
  };

  const choseLanguage = () => {
    setChooseLanguage((prevChooseLanguage) => !prevChooseLanguage);
  };

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
            <Navigation
              //   properties for Navigation
              changeLang={changeLanguage}
              chooseLang={chooseLanguage}
              changetoEng={changeLangtoEng}
              changetoTag={changeLangtoTag}
              choseLang={choseLanguage}
            />
            <Home changeLang={changeLanguage} />
          </div>
        </div>
      </section>
      <Section2 changeLang={changeLanguage} />
      <Footer changeLang={changeLanguage} />
    </>
  );
}
