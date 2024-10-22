import { IMG_CDN_URL } from "../utils/constant";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((items) => (
        <div
          key={items.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{items.card.info.name}</span>
              <span>
                {" "}
                - Rs{" "}
                {items.card.info.price
                  ? items.card.info.price / 100
                  : items.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{items.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute mx-11 mt-16">
              <button className="p-2 bg-white shadow-lg m-auto rounded-lg">Add+</button>
            </div>
            <img
              className="w-full"
              src={IMG_CDN_URL + items.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
