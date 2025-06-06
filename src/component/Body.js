import React, { useState, useEffect } from "react";
import RestaurantCard, { promtedLabel } from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import axios from "axios";

const Body = () => {

  const [listofResturant, setListOfResturant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const PromotedResCard = promtedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async ()=>{
    try {
      const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4929905&lng=77.07241429999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const data = response?.data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfResturant(data);
      setFilteredRestaurant(data);
    } catch (error) {
      console.error(error)
      
    }
  }

  // const fetchData = async () => {
  //   // const data = await fetch(
  //   //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4929905&lng=77.07241429999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   //   // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3440997&lng=85.309562&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   // );
  //   const data =async ()=>{
  //     await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4929905&lng=77.07241429999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  //   }
  //   console.log(data);

  //   const json = await data.json();
  //   //  Optional Chaining
  //   setListOfResturant(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilteredRestaurant(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  const filterTopRated = () => {
    const filteredList = listofResturant?.filter(
      (res) => res.info.avgRating > 4.3
    );
    const sortedList = filteredList?.sort(
      (a, b) => b.info.avgRating - a.info.avgRating
    );
    setFilteredRestaurant(sortedList);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Your Are Offline</h1>;
  }
  return listofResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="flex justify-center items-center mt-12 gap-2">
          <input
            type="search"
            className="w-72 p-2 text-base border-2 border-gray-300 rounded focus:border-blue-300
            transition-all duration-300 ease-in-out"
            placeholder="Search a restaurant you want..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="search-btn text-base px-2 py-2 border-0 rounded bg-blue-600 text-white cursor-pointer
            transition-colors duration-300 hover:bg-blue-700"
            onClick={() => {
              const filteredListByName = listofResturant.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredListByName);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center p-4 m-4">
          <button className="px-3 py-2 rounded-lg bg-gray-400 cursor-pointer" onClick={filterTopRated}>
            Top Rate Resturant
          </button>
        </div>
        <div className="w-auto flex flex-auto justify-center flex-wrap">
          {filteredRestaurant.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={"/resturant/" + restaurant.info.id}
              >
                {restaurant.info.avgRating > 4.3 ? (<PromotedResCard resData={restaurant} />) : (<RestaurantCard resData={restaurant}/>)}

              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
