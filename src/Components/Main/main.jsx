import React, { useEffect, useState } from "react";
import Logo from "../../Assets/Netflix-Logo.png";
import TrendingMovies from "../API/trendingMovies";
import PopularMovies from "../API/popularMovies";
import AllMovies from "../API/allMovies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// container for API search and will pass the properties
import SearchMovies from "../API/searchMovies";

export default function Main() {
  // your input data or search will store on this state
  const [searchInput, setSearchInput] = useState(null);
  // fetch data will be store on this state
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    const searchMoviesFetch = async () => {
      const searchMovies_API = `https://api.themoviedb.org/3/search/movie?api_key=f55349e10d8f5b2dab9d35e917fd8310&query=${searchInput}`;
      const response = await fetch(searchMovies_API);
      const data = await response.json();
      setSearchMovie(data.results);
    };
    if (searchInput) {
      searchMoviesFetch();
    }
  }, [searchInput]);

  // onSearch function
  const onSearch = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === "") {
      setSearchMovie((prevSearchMovie) => prevSearchMovie === "");
    }
  };
  console.log(searchInput);
  // console.log(searchMovie);

  return (
    <section className="bg-black">
      <div className="max-w-[1900px] mx-auto px-[20px] pt-[20px] md:px-[40px] md:pt-[30px]">
        <nav className="flex flex-col justify-between gap-[15px] sm:flex-row sm:items-center">
          <div>
            <img className="w-[100px]" src={Logo} alt="Logo" />
          </div>
          <div className="sm:w-[50%]">
            <form className="flex items-center justify-end gap-[10px]">
              <div className="flex items-center gap-[10px] w-full h-[40px] px-[15px] bg-[rgb(30,30,30)] text-[#737373] rounded-md">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                  onChange={onSearch}
                  type="text"
                  className="bg-[rgb(30,30,30)] w-full outline-none"
                  placeholder="Search TV Shows, Videos and Movies"
                />
              </div>
            </form>
          </div>
        </nav>
        {/* condition for which would be display */}
        {searchMovie ? (
          <div className="pb-[60px] sm:pb-[100px]">
            <h1 className="text-white mt-[20px] text-[20px] sm:text-[25px] sm:mt-[50px]">
              Movies
            </h1>
            {/* Import Search Component and then will recieve the API properties */}
            <div className="grid grid-cols-3 gap-[15px] mt-[30px] sm:gap-[20px] md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              <SearchMovies movieSearch={searchMovie} />
            </div>
          </div>
        ) : (
          // Trending Movies Section
          <>
            <div>
              <h1 className="text-white mt-[20px] text-[20px] sm:text-[25px] sm:mt-[50px]">
                Top Trending
              </h1>
              {/* Carousel */}
              <div className="carousel flex gap-[20px] overflow-x-scroll mt-[20px] snap-mandatory">
                {/* API Trending */}
                <TrendingMovies />
              </div>
            </div>
            {/* Popular Movies Section  */}
            <div>
              <h1 className="text-white mt-[20px] text-[20px] sm:text-[25px] sm:mt-[50px]">
                What's Popular
              </h1>
              {/* Carousel  */}
              <div className="carousel flex gap-[20px] overflow-x-scroll mt-[20px] snap-mandatory">
                {/* API Popular */}
                <PopularMovies />
              </div>
            </div>
            {/* All Movies  */}
            <div className="w-full pb-[60px] sm:pb-[100px]">
              <h1 className="text-white mt-[20px] text-[20px] sm:text-[25px] sm:mt-[50px]">
                Movies
              </h1>
              <div className="grid grid-cols-3 gap-[15px] mt-[30px] sm:gap-[20px] md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                <AllMovies />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
