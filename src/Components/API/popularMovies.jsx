import React, {useEffect, useState} from "react";
import LoadingAnimation from "../LoadAnimation/loadingAnimation";
import ReactLoading from "react-loading";

export default function PopularMovies() {
  const [popular, setPopular] = useState(null);
  // Loading animation
  const [loadingPopular, setLoadingPopular] = useState(true);
  const linkPopular_API =
    "https://api.themoviedb.org/3/tv/popular?api_key=f55349e10d8f5b2dab9d35e917fd8310&language=en-US&page=";

  useEffect(() => {
    // const randomNum = Math.floor(Math.random() * link_API.length);
    fetch(linkPopular_API)
      .then((response) => response.json())
      .then((data) => setPopular(data.results));
    setLoadingPopular(true);
  }, []);

  //  Loading Animation set to false
  // Give an error message if fetch didn't retrieved
  useEffect(() => {
    setTimeout(() => {
      setLoadingPopular(false);
    }, 40000);
  }, []);
  return (
    <>
      {/*scroll carousel */}
      <div className="carousel flex gap-[20px] w-full h-full overflow-x-scroll mt-[20px] pb-[50px] snap-mandatory">
        {/*loading animation while waiting to an API */}
        {!popular ? (
          <LoadingAnimation />
        ) : (
          popular.map((popularMovies) => {
            return (
              <div
                className="w-[65%] max-w-[250px] bg-[rgb(30,30,30)] flex-shrink-0 snap-start rounded-md overflow-hidden"
                key={popularMovies.id}
              >
                <div className="relative aspect-[2/3] group/item">
                  <div className="absolute w-full h-full top-0 left-0">
                    {popularMovies.backdrop_path ? (
                      <img
                        className="w-full"
                        src={`https://www.themoviedb.org/t/p/w440_and_h660_face${popularMovies.backdrop_path}`}
                        alt="Featured"
                      />
                    ) : (
                      // Loading animation
                      <div className="w-full h-full flex">
                        <div className="w-[100%] flex items-center justify-center bg-[rgb(30,30,30)]">
                          {loadingPopular ? (
                            <ReactLoading type={"spin"} color={"#737373"} />
                          ) : (
                            // when API failed to render
                            <h1 className="text-white">
                              Error check your connection
                            </h1>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="absolute left-[50%] translate-x-[-50%] bottom-[-50px] w-[150%] h-[120px] blur-xl bg-black"></div>
                  <div className="absolute bottom-[10px] px-[20px]">
                    <h1 className="text-[20px] text-white">
                      {popularMovies.name}
                      {popularMovies.title}
                    </h1>
                    <small className="text-[#737373]">
                      {popularMovies.first_air_date}
                      {popularMovies.release_date}
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
