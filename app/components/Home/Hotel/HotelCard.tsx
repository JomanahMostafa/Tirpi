import { FaHeart } from "react-icons/fa";
import React from "react";
import Image from "next/image";
type Props = {
  hotel: {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
  };
};
const HotelCard = ({ hotel }: Props) => {
  return (
    <div>
      <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
        {/* Add to fav button */}
        <div
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black
        flex items-center justify-center flex-col"
        >
          <FaHeart className="w-3 h-3" />
        </div>
        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-20 z-10 group-hover:opacity-40 transition-all duration-300"></div>
        {/* image */}
        <Image
          src={hotel.image}
          alt={hotel.name}
          width={500}
          height={500}
          className="h-full w-full transition-all duration-300 object-cover group-hover:scale-110"
        />
      </div>
      {/* content */}
      <div>
        <h1 className="mt-4 text-lg font-semibold text-green-900 hover:text-black cursor-pointer
         transition-all duration-200">{hotel.name}</h1>
        <p className="text-sm text-gray-600 mt-3 font-medium mb-6">{hotel.location}</p>
       {/* rating */}
      </div>
    </div>
  );
};

export default HotelCard;
