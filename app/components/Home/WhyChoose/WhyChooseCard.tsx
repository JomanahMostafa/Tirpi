import React from "react";
import Image from "next/image";
type Props = {
  image: string;
  title: string;
};
const WhyChooseCard = ({ image, title }: Props) => {
  // Normalize incoming image paths so next/image receives a valid src.
  // Accepts:
  // - '/images/...' (already valid)
  // - absolute URLs ('http(s)://...') (already valid)
  // - paths that include '/public/images/...' or '.../public/images/...'
  // - other relative paths: we'll try to extract the '/images/...' part
  let src = image;
  try {
    if (!image) src = "";
    else if (
      image.startsWith("http://") ||
      image.startsWith("https://") ||
      image.startsWith("/")
    ) {
      src = image;
    } else {
      const idx = image.indexOf("/images/");
      if (idx !== -1) src = image.slice(idx);
      else {
        // fallback: ensure leading slash
        src = image.startsWith("/") ? image : "/" + image;
      }
    }
  } catch (e) {
    src = image;
  }

  return (
    <div className="group text-center">
      <div className="flex justify-center mb-6">
        <div className="p-6 bg-linear-to-br from-green-50 to-green-100 rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 group-hover:bg-linear-to-br group-hover:from-green-100 group-hover:to-green-200">
          <Image
            src={src}
            width={80}
            height={80}
            alt={title}
            className="mx-auto drop-shadow-md"
          />
        </div>
      </div>
      {/* content*/}
      <h1 className="text-center text-gray-900 font-bold text-lg group-hover:text-green-700 transition-colors duration-300">
        {title}
      </h1>
      <p
        className="mt-3 text-center text-sm font-medium text-gray-600 leading-relaxed
    group-hover:text-gray-800 transition-colors duration-300"
      >
        Discover premium travel experiences with our expert guidance and
        exclusive partnerships worldwide.
      </p>
    </div>
  );
};

export default WhyChooseCard;
