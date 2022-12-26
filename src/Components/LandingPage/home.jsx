import React from "react";
export default function Home(prop) {
  return (
    <div className="w-full h-full flex items-center justify-center px-[20px] absolute top-0">
      <div className="text-white text-center items-center mt-[80px] max-w-[800px]">
        <h1
          className="landingHeader text-[25px] font-[600] 
                          sm:text-[55px] sm:leading-[55px]
                          lg:text-[60px] xl:text-[65px] xl:leading-[70px]"
        >
          {prop.changeLang.header}
        </h1>
        <p
          className="landingParag mt-[10px] text-[18px]
                          sm:text-[25px]"
        >
          {prop.changeLang.textOne}
        </p>
        <p className="mt-[10px] text-[18px]">{prop.changeLang.textTwo}</p>
        <button
          className="bg-[red] px-[20px] py-[8px] mt-[25px] rounded-md
                                lg:text-[30px] lg:px-[25px] lg:py-[10px]"
        >
          {prop.changeLang.textButton}
        </button>
      </div>
    </div>
  );
}
