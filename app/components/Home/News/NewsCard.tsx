import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  date: string;
};
const NewsCard = ({ image, date, title }: Props) => {
  return (
    <div>
      {/* Image */}
      <div className="h-[300px] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      {/* content */}
      <h1 className="mt-6 text-lg text-red-900 font-semibold hover:text-gray-950 transition-all
      duration-200 cursor-pointer">{title}</h1>
      <p className="text-sm text-ray-600 mt-3">{date}</p>
    </div>
  );
};

export default NewsCard;
