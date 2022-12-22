import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

export default function SearchMovies(prop) {
  const [movieSearchResult, setMovieSearchResult] = useState([]);
  //   loading animation
  const [loadingAllresultSearchMovies, setloadingAllresultSearchMovies] = useState(true);
  useEffect(() => {
    setMovieSearchResult(prop.movieSearch);
    setloadingAllresultSearchMovies(true);
  }, [prop.movieSearch]);

  //  Loading Animation set to false
  // Give an error message if fetch didn't retrieved
  useEffect(() => {
    setTimeout(() => {
      setloadingAllresultSearchMovies(false);
    }, 40000);
  }, [prop.movieSearch]);

  console.log(movieSearchResult);
  return (
    <>
      {movieSearchResult.map((resultMovies) => {
        return (
          <div
            className="w-[100%] bg-[rgb(30,30,30)] rounded-md overflow-hidden flex-shrink-0"
            key={resultMovies.id}
          >
            <div className="aspect-[2/3]">
              <div className="w-full h-fit">
                {resultMovies.poster_path ? (
                  <img
                    className="w-full"
                    src={`https://www.themoviedb.org/t/p/w440_and_h660_face${resultMovies.poster_path}`}
                    alt="Featured"
                  />
                ) : (
                  // Loading animation
                  <div className="w-full h-full flex">
                    <div className="w-[100%] flex items-center justify-center bg-[rgb(30,30,30)] px-[20px]">
                      {loadingAllresultSearchMovies ? (
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
                  <h1 className="allresultMoviesTitle text-[11px] sm:text-[18px] md:text-[20px]">
                    {resultMovies.name}
                    {resultMovies.title}
                  </h1>
                  <small className="allresultMoviesRelease text-[#737373] text-[10px] sm:text-sm">
                    {resultMovies.first_air_date}
                    {resultMovies.release_date}
                  </small>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
