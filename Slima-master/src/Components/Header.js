import hamburger from "../Items/hamburger.svg";
import Logo from "../Items/Logo.png";
import UserIcon from "../Items/user-icon.svg";
import magnifying from "../Items/MAG.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/AppSlice";
import { useState } from "react";
import { useEffect } from "react";
import { Youtube_search_Api } from "../Constant/YoutubeVideoAPI";
import { useSelector } from "react-redux";
import { store } from "../Utils/Store";
import { cacheResults } from "../Utils/SearchSlice";

export const Header = () => {
  const [seachQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[seachQuery]) {
        setSuggestions(searchCache[seachQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [seachQuery]);

  const getSearchSuggestions = async () => {
    console.log("Api " + seachQuery);
    const data = await fetch(Youtube_search_Api + seachQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [seachQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex  justify-between px-2 pb-2 my-4 shadow-xl">
      {/* Left Icons */}
      <div className="flex">
        <img
          src={hamburger}
          onClick={() => toggleMenuHandler()}
          alt="hamburger"
          className=" mx-3 h-8 cursor-pointer "
        />
        <img src={Logo} alt="Logo" className="h-16 -mt-4 -ml-2" />
      </div>

      {/* Middle Searchbar */}
      <div className="w-1/2 -mt-1">
        <div>
          <input
            type="text"
            className=" border border-gray-950 px-5 w-3/4 rounded-2xl h-9"
            placeholder="Search"
            value={seachQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="searchbutton">
            <span></span>
            <img src={magnifying} alt="Logo" className="h-6 -mb-[6px] " />
            <span></span>
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute bg-white py-2 px-5 w-[35rem] shadow-xl rounded-xl border border-gray-100">
            <ul>
              {suggestions.map((sugg, index) => {
                return (
                  <li
                    key={index}
                    className="flex shadow-sm py-2 hover:bg-gray-100"
                  >
                    {" "}
                    <img
                      src={magnifying}
                      alt="Logo"
                      className="h-5 pt-1 pr-1"
                    />{" "}
                    &nbsp; {sugg}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* Right User Icon  */}
      <div>
        <img src={UserIcon} alt="user-icon" className="h-8 mr-2" />
      </div>
    </div>
  );
};
