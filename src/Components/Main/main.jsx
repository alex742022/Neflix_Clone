import React from "react";
import Logo from "../../Assets/Netflix-Logo.png";
import TrendingMovies from "../API/trendingMovies";
import PopularMovies from "../API/popularMovies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  return (
    <section className="bg-black">
      <div className="max-w-[1900px] mx-auto px-[20px] md:px-[40px]">
        <nav className="flex flex-col justify-between gap-[15px] sm:flex-row sm:items-center">
          <div className="">
            <img className="w-[100px]" src={Logo} alt="Logo" />
          </div>
          <div className="sm:w-[50%]">
            <form className="flex items-center justify-end gap-[10px]">
              <div className="flex items-center gap-[10px] w-full h-[40px] px-[15px] bg-[rgb(30,30,30)] text-[#737373] rounded-md">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                  type="text"
                  className="bg-[rgb(30,30,30)] w-full outline-none"
                  placeholder="Search TV Shows, Videos and Movies"
                />
              </div>
            </form>
          </div>
        </nav>
        {/* Trending Movies Section */}
        <div>
          <h1 className="text-white mt-[20px] text-[25px] sm:mt-[50px]">
            Top Trending
          </h1>
          {/* Carousel */}
          <div className="carousel flex gap-[20px] overflow-x-scroll mt-[20px] snap-mandatory">
            {/* API Trending*/}
            <TrendingMovies />
          </div>
        </div>
        {/* Popular Movies Section */}
        <div>
          <h1 className="text-white mt-[20px] text-[25px] sm:mt-[50px]">
            What's Popular
          </h1>
          {/* Carousel */}
          <div className="carousel flex gap-[20px] overflow-x-scroll mt-[20px] pb-[50px] snap-mandatory">
            {/* API Popular*/}
            <PopularMovies />
          </div>
        </div>
        {/* All Movies */}
        <div className="w-full h-[400px]">
        <h1 className="text-white mt-[20px] text-[25px] sm:mt-[50px]">
            Movies
          </h1>
        </div>
      </div>
    </section>
  );
}
