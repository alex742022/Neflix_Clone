import React, { useEffect, useState } from "react";
import LoadingAnimation from "../LoadAnimation/loadingAnimationForTrendingPopular";
import ReactLoading from "react-loading";

export default function TrendingMovies() {
  const [trending, setTrending] = useState(true);
  // Loading animation
  const [loadingTrending, setLoadingTrending] = useState(true);
  const linkTrending_API =
    "https://api.themoviedb.org/3/trending/all/day?api_key=f55349e10d8f5b2dab9d35e917fd8310";

  useEffect(() => {
    // const randomNum = Math.floor(Math.random() * link_API.length);
    fetch(linkTrending_API)
      .then((response) => response.json())
      .then((data) => setTrending(data.results));
    setLoadingTrending(true);
  }, [linkTrending_API]);

  //  Loading Animation set to false
  // Give an error message if fetch didn't retrieved
  useEffect(() => {
    setTimeout(() => {
      setLoadingTrending(false);
    }, 40000);
  }, [linkTrending_API]);

  return (
    <>
      {/*scroll carousel */}
      <div className="carousel flex gap-[20px] w-full h-full overflow-x-scroll mt-[20px] pb-[50px] snap-mandatory">
        {/*loading animation while waiting to an API */}
        {trending ? (
          <LoadingAnimation />
        ) : (
          trending.map((trendingMovies) => {
            return (
              <div
                className="w-[50%] max-w-[250px] bg-[rgb(30,30,30)] flex-shrink-0 snap-start rounded-md overflow-hidden"
                key={trendingMovies.id}
              >
                <div className="relative aspect-[2/3]">
                  <div className="absolute w-full h-full top-0 left-0">
                    {trendingMovies.backdrop_path ? (
                      <img
                        className="w-full"
                        src={`https://www.themoviedb.org/t/p/w440_and_h660_face${trendingMovies.backdrop_path}`}
                        alt="Featured"
                      />
                    ) : (
                      // Loading animation
                      <div className="w-full h-full flex">
                        <div className="w-[100%] flex items-center justify-center bg-[rgb(30,30,30)] px-[20px]">
                          {loadingTrending ? (
                            <ReactLoading
                              type={"spin"}
                              color={"#737373"}
                              width={40}
                            />
                          ) : (
                            // when API failed to render
                            <h1 className="text-white text-center">
                              Error check your connection
                            </h1>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="absolute left-[50%] translate-x-[-50%] bottom-[-50px] w-[150%] h-[120px] blur-xl bg-black"></div>
                  <div className="absolute bottom-[10px] px-[20px]">
                    <h1 className="text-[15px] text-white sm:text-[20px]">
                      {trendingMovies.name}
                      {trendingMovies.title}
                    </h1>
                    <small className="text-[#737373]">
                      {trendingMovies.first_air_date}
                      {trendingMovies.release_date}
                    </small>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
