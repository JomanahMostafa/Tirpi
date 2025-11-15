import React from "react";
type Props = {
  heading: string;
};
const SectionHeading = ({ heading }: Props) => {
  return (
    <div className="w-[80%] mx-auto">
      <h1
        data-aos="fade-up"
        className="text-xl sm:text-3xl text-green-950 font-bold"
      >
        {heading}
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="mt-2 text-gray-700 sm:text-base text-sm font-medium
      "
      >
        Lorem ipsum dolor sit amet consectetur.{" "}
      </p>
    </div>
  );
};

export default SectionHeading;
