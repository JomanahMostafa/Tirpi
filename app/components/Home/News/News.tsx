import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="pt-16 pb-16">
      {/* Section Heading */}
      <SectionHeading heading="Exciting Travel News For You" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" >
          <NewsCard
            image="/images/image13.jpeg"
            title="Top 10 places to visit in Australia"
            date="15 November 2025"
          />
        </div>

        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-delay="100" >
          <NewsCard
            image="/images/image14.jpeg"
            title="Top 10 places to visit in Bangladesh"
            date="25 November 2024"
          />
        </div>

        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-delay="200">
          <NewsCard
            image="/images/image15.jpeg"
            title="Top 10 places to visit in Pakistan"
            date="22 November 2024"
          />
        </div>

        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-delay="300">
          <NewsCard
            image="/images/image16.jpeg"
            title="Top 10 places to visit in Egypt"
            date="5 November 2025"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
