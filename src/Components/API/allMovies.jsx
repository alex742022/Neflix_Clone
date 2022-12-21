import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
export default function AllMovie() {
  const [allMovies, setAllMovies] = useState([]);
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
  }, []);

  //  Loading Animation set to false
  // Give an error message if fetch didn't retrieved
  useEffect(() => {
    setTimeout(() => {
      setLoadingAllMovies(false);
    }, 40000);
  }, []);

  console.log(allMovies);
  return (
    <>
      {allMovies.map((movies) => {
        return (
          <div
            className="w-[100%] bg-[rgb(30,30,30)] rounded-md overflow-hidden flex-shrink-0"
            key={movies.id}
          >
            <div className="relative aspect-[2/3] group/item">
              <div className="absolute w-full h-full top-0 left-0">
                {movies.backdrop_path ? (
                  <img
                    className="w-full"
                    src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movies.backdrop_path}`}
                    alt="Featured"
                  />
                ) : (
                  // Loading animation
                  <div className="w-full h-full flex">
                    <div className="w-[100%] flex items-center justify-center bg-[rgb(30,30,30)]">
                      {loadingAllMovies ? (
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
                  {movies.name}
                  {movies.title}
                </h1>
                <small className="text-[#737373]">
                  {movies.first_air_date}
                  {movies.release_date}
                </small>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
