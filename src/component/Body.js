import React, { useState, useEffect } from "react";
// import { restaurantList } from "../utils/constant"
import RestaurantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // const [listofResturant, setListOfResturant] = useState(restaurantList);
  const [listofResturant, setListOfResturant] = useState([]);
  // const [filteredRestaurant, setFilteredRestaurant] = useState(restaurantList);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3440997&lng=85.309562&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //  Optional Chaining
    setListOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterTopRated = () => {
    // const filteredList = listofResturant?.filter((res) => res.data.avgRating > 4);
    const filteredList = listofResturant?.filter(
      (res) => res.info.avgRating > 4
    );
    const sortedList = filteredList?.sort(
      (a, b) => b.info.avgRating - a.info.avgRating
    );
    // setFilteredRestaurant(filteredList);
    setFilteredRestaurant(sortedList);
  };
  return listofResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="search">
          <input
            type="search"
            className="search-input"
            placeholder="Search a restaurant you want..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
        <div className="filter">
          <button className="filter-btn" onClick={filterTopRated}>
            Top Rate Resturant
          </button>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={"/resturant/" + restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
