
import { IMG_CDN_URL } from "../utils/constant"

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        area,
        lastMileTravelString,
        costForTwoString,
        avgRating,
    } = resData?.info;
    return (

        <div className="res-card w-60 cursor-pointer rounded m-5 p-5 transition-transform duration-300 ease-in-out 
                shadow-md hover:scale-105 hover:shadow-[rgba(112,112,112,0.2)_-1px_5px_15px_5px]">
            <img className="rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} />
            <h3 className="my-1 overflow-hidden whitespace-nowrap text-ellipsis text-center">{name}</h3>
            <h5 className="my-1 overflow-hidden whitespace-nowrap text-ellipsis text-center">{cuisines.join(", ")}</h5>
            <h6 className="my-1 overflow-hidden whitespace-nowrap text-ellipsis text-center">{area}</h6>
            <h4 className="my-1 overflow-hidden whitespace-nowrap text-ellipsis text-center">{lastMileTravelString}</h4>
            <h4 className="my-1 overflow-hidden whitespace-nowrap text-ellipsis text-center">{costForTwoString}</h4>
            <h4 className="my-1 overflow-hidden whitespace-nowrap text-ellipsis text-center">{avgRating}</h4>
        </div>
    );
};

// Higher Order Components

export const promtedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-gray-700 p-1 m-2 rounded-lg text-white">Top Rated</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;