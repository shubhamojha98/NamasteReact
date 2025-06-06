import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturnatMenu";
import ResturantCategory from "./ResturantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  const [expandedCategory, setExpandedCategory] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
  } = resInfo?.cards[2]?.card?.card?.info;

  const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const handleCategoryClick = (title) => {
    setExpandedCategory((prev) => (prev === title ? null : title));
  };

  return (
    <>
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </p>

        {categories.map((category, index) => (
          <ResturantCategory
            key={index}
            data={category.card.card}
            expanded={expandedCategory === category.card.card.title}
            onChange={() => handleCategoryClick(category.card.card.title)}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
