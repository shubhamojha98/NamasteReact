import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturnatMenu";
import ResturantCategory from "./ResturantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo=useResturantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const data1 = resInfo?.cards[2]?.card?.card?.info;
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log( resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const category=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    // console.log(category)

  return (
    <>
    <br/>
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">{cuisines?.join(", ")} - {costForTwoMessage}</p>
        {category.map((category)=>(
          <ResturantCategory data={category.card.card}/>

        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
