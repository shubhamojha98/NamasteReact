
const ItemList = ({ items }) => {
    console.log(items)
    return (
        <div>
            {items.map((items) => (
                <div key={items.card.info.id} className="p-2 m-2 border-b-2 border-gray-300 text-left">
                    <div className="py-2">
                        <span>{items.card.info.name}</span>
                        <span> - Rs {items.card.info.price ? items.card.info.price / 100 : items.card.info.defaultPrice / 100}</span>
                    </div>
                    <p className="text-xs">{items.card.info.description}</p>
                </div>
            ))}
        </div>
    )
}
export default ItemList;