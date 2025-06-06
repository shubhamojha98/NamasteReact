import { Typography } from '@mui/material';
import { IMG_CDN_URL } from "../utils/constant";

// Component that maps items to accordions
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <>
      {items.map((item, index) => {
        const info = item?.card?.info;

        return (
          <Typography
            key={index}
            sx={{
              borderBottom: '1px solid #e0e0e0',
              py: 1,
              fontSize: '0.95rem',
            }}
          >
            <div className="flex gap-4">
              <div className='w-2/3 items-center'>
                <div className='text-left font-semibold text-lg leading-[22px] tracking-[-0.45px]'>{info?.name}</div>
                <div className='text-left font-semibold text-lg mt-1'>Rs {Math.round(info?.price / 100)}</div>
                <div className='mt-3 text-sm font-normal leading-5 tracking-[-0.45px]'>{info?.description}</div>
              </div>
              <div className='w-1/3'>
                <img className="rounded-lg" src={IMG_CDN_URL + info?.imageId} alt={info?.name} />
              </div>
            </div>
          </Typography>
        );
      })}
    </>
  );
};

export default ItemList;
