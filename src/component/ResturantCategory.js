import ItemList from "./ItemList";


const ResturantCategory = ({ data }) => {
    return (
        <>
            <div className='w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4'>
                <div className="flex justify-between">
                    <span className="font-semibold">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                <ItemList items={data.itemCards} />
            </div>

        </>
    );
};

export default ResturantCategory;