import React, { useContext, createContext, useState } from "react";

// default language
const Language = createContext();
const LanguagetoTag = createContext();
const LanguagetoEng = createContext();
//function to change the value of showlanguage
const ChooseLanguage = createContext();
const ChooseLanguageFooter = createContext();
//change the bolean value once the chooselang was triggerd
const ShowLanguage = createContext();
const ShowLanguageFooter = createContext();

// export to Home, Section2, navigation and Footer
export function CurrentLanguage() {
  return useContext(Language);
}
// export to navigation
export function LanguageToTagalog() {
  return useContext(LanguagetoTag);
}
// export to navigation
export function LanguageToEnglish() {
  return useContext(LanguagetoEng);
}
// export to navigation
export function LanguageChoose() {
  return useContext(ChooseLanguage);
}
// export to footer
export function LanguageChooseFooter() {
  return useContext(ChooseLanguageFooter);
}
// export to navigation
export function LanguagesShow() {
  return useContext(ShowLanguage);
}
// export to footer
export function LanguagesShowFooter() {
  return useContext(ShowLanguageFooter);
}

export function ChangeLanguageFunction({ children }) {
  // ChooseLanguage Context // for Navigation
  const [chooseLanguage, setChooseLanguage] = useState(false);

  // ShowLanguage Context for navigation
  const choseLanguage = () => {
    setChooseLanguage((prevChooseLanguage) => !prevChooseLanguage);
  };

  // ChooseLanguage Context // for Footer
  const [chooseLanguageFooter, setChooseLanguageFooter] = useState(false);

  // ShowLanguageFooter Context //for footer
  const choseLanguageFooter = () => {
    setChooseLanguageFooter((prevChooseLanguage) => !prevChooseLanguage);
  };

  //Language Context
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
    footerTextFourteen: "Terms of Use",
    footerTextFifthteen: "Cookie Preferences",
    footerTextSixteen: "Contact Us",
    footerTextSeventeen: "Legal Notices",
    footerTextEighteen: "Questions?",
  });

  // LanguagetoEng Context
  const changeLangtoEng = () => {
    setChangeLanguage((prevChooseLanguage) => {
      return {
        ...prevChooseLanguage,
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
        footerTextThree: "Investor Relations",
        footerTextFour: "Redeem Gifts Cards",
        footerTextFive: "Ways to Watch",
        footerTextNine: "Only on Netflix",
        footerTextTwelve: "Jobs",
        footerTextThirteen: "Buy Gift Cards",
        footerTextFourteen: "Terms of Use",
        footerTextFifthteen: "Cookie Preferences",
        footerTextSixteen: "Contact Us",
        footerTextSeventeen: "Legal Notices",
        footerTextEighteen: "Questions?",
      };
    });
  };
  // LanguagetoTag Context
  const changeLangtoTag = () => {
    setChangeLanguage((prevChooseLanguage) => {
      return {
        ...prevChooseLanguage,
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
        footerTextThree: "Mga Pakikipag-ugnayan sa Investor",
        footerTextFour: "Mag-redeem ng mga Gift Card",
        footerTextFive: "Mga Paraan para Manood",
        footerTextNine: "Sa Netflix lang",
        footerTextTeen: "Help Center",
        footerTextEleven: "Media Center",
        footerTextTwelve: "Mga Trabaho",
        footerTextThirteen: "Bumili ng mga Gift Card",
        footerTextFourteen: "Mga Tuntunin ng Paggamit",
        footerTextFifthteen: "Mga Preference sa Cookie",
        footerTextSixteen: "Makipag-ugnayan sa Amin",
        footerTextSeventeen: "Mga Legal na Abiso",
        footerTextEighteen: "May mga tanong ka ba?",
      };
    });
  };

  return (
    <>
      <Language.Provider value={changeLanguage}>
        <LanguagetoTag.Provider value={changeLangtoTag}>
          <LanguagetoEng.Provider value={changeLangtoEng}>
            <ChooseLanguage.Provider value={chooseLanguage}>
              <ChooseLanguageFooter.Provider value={chooseLanguageFooter}>
                <ShowLanguage.Provider value={choseLanguage}>
                  <ShowLanguageFooter.Provider value={choseLanguageFooter}>
                    {children}
                  </ShowLanguageFooter.Provider>
                </ShowLanguage.Provider>
              </ChooseLanguageFooter.Provider>
            </ChooseLanguage.Provider>
          </LanguagetoEng.Provider>
        </LanguagetoTag.Provider>
      </Language.Provider>
    </>
  );
}
