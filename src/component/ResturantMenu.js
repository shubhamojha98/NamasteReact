import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturnatMenu";
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

  return (
    <>
    <br/>
      <div className="menu"> <br/>
        <h1>{name}</h1> <br/>
        <h2>{cuisines?.join(", ")}</h2> <br/>
        <h3>{costForTwoMessage}</h3> <br/>
        <p>
          Rating: {avgRatingString} ({totalRatingsString})
        </p> <br/> <br/>
        <h3>Menu</h3> <br/>
        <ul>
          {itemCards.map((items) => (
            <li key={items.card.info.id}>
              {items.card.info.name} - {"Rs."} {items.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
