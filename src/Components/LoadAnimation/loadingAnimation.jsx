import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

export default function LoadingAnimation() {
  // array defendencies
  const countMainLoading = [1, 2, 4, 5, 6, 7, 8, 9, 10];
  const [carouselLoading, setCarouselLoading] = useState(true);

  // Timer 
   useEffect(() => {
    setTimeout(() => {
      setCarouselLoading(false);
    }, 40000);
  }, []);
  return (
    <>

      {countMainLoading.map((mainLoading) => {
        return (
          <div
            className="w-[65%] max-w-[300px] bg-[rgb(30,30,30)] flex-shrink-0 snap-start relative overflow-hidden rounded-md"
            key={mainLoading}
          >
            {/* Loading animation */}
            {carouselLoading ? (
              <div className="w-full h-full">
                <div className="w-[100%] h-[100%] flex items-center justify-center bg-[rgb(30,30,30)] py-[60%]">
                  <ReactLoading type={"spin"} color={"#737373"} />
                </div>
              </div>
            ) : (
              <div className="w-full h-full">
                <div className="w-[100%] h-[100%] flex items-center justify-center bg-[rgb(30,30,30)] py-[65%]">
                <h1 className="text-white">Error check your connection</h1>
                </div>
              </div>  
            )}
          </div>
        );
      })}
    </>
  );
}
