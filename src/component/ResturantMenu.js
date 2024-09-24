import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
const RestaurantMenu = () => {
  const [resInfo, setResinfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResinfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const data1 = resInfo?.cards[2]?.card?.card?.info;
  //   console. log( resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card);
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
