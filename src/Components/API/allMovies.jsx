import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import LoadingAnimationForAllMovies from "../LoadAnimation/loadingAnimationForAllMovies";
//Loading animation while waiting for an API
export default function AllMovie() {
  const [allMovies, setAllMovies] = useState(null);
  //   loading animation
  const [loadingAllMovies, setLoadingAllMovies] = useState(true);
  const allMovies_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f55349e10d8f5b2dab9d35e917fd8310&page=1";

  //fecth the API
  useEffect(() => {
    fetch(allMovies_API)
      .then((response) => response.json())
      .then((data) => setAllMovies(data.results));
    setLoadingAllMovies(true);
  }, [allMovies_API]);

  //  Loading Animation set to false
  // Give an error message if fetch didn't retrieved
  useEffect(() => {
    setTimeout(() => {
      setLoadingAllMovies(false);
    }, 40000);
  }, [allMovies_API]);
  console.log(allMovies);
  return (
    <>
      {!allMovies ? (
        <LoadingAnimationForAllMovies />
      ) : (
        allMovies.map((movies) => {
          return (
            <div
              className="w-[100%] bg-[rgb(30,30,30)] rounded-md overflow-hidden flex-shrink-0"
              key={movies.id}
            >
              <div className="aspect-[2/3]">
                <div className="w-full h-fit">
                  {movies.poster_path ? (
                    <img
                      className="w-full"
                      src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movies.poster_path}`}
                      alt="Featured"
                    />
                  ) : (
                    // Loading animation
                    <div className="w-full h-full flex">
                      <div className="w-[100%] flex items-center justify-center bg-[rgb(30,30,30)] px-[20px]">
                        {loadingAllMovies ? (
                          <ReactLoading
                            type={"spin"}
                            color={"#737373"}
                            width={40}
                          />
                        ) : (
                          // when API failed to render
                          <h1 className="text-white text-center text-sm">
                            Error check your connection
                          </h1>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative w-full h-fit">
                  <div className="absolute left-[50%] translate-x-[-50%] top-[-10px] w-[150%] h-[120px] blur-xl bg-black"></div>
                  <div className="relative mt-[10px] px-[10px] text-white">
                    <h1 className="allMoviesTitle text-[11px] sm:text-[18px] md:text-[20px]">
                      {movies.name}
                      {movies.title}
                    </h1>
                    <small className="allMoviesRelease text-[#737373] text-[10px] sm:text-sm">
                      {movies.first_air_date}
                      {movies.release_date}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
