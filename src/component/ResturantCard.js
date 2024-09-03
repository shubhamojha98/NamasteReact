
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
    } = resData?.data;
    return (
       
                <div className="res-card">
                    <img className="res-logo" src={IMG_CDN_URL + cloudinaryImageId} />
                    <h3>{name}</h3>
                    <h5>{cuisines.join(", ")}</h5>
                    <h6>{area}</h6>
                    <h4>{lastMileTravelString}</h4>
                    <h4>{costForTwoString}</h4>
                    <h4>{avgRating}</h4>
                </div>
    );
};

export default RestaurantCard;