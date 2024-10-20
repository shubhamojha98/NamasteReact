

const ResturantCategory = ({data}) => {
    console.log(data);

    return (
        <>
            {/* Header */}
            <div className='w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4 flex justify-between'>
            <span className="font-semibold">{data.title}</span>
            <span>🔽</span>
            </div>
            {/* Body */}

        </>
    );
};

export default ResturantCategory;