import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      {/* section heading */}
      <SectionHeading heading="Why Choose Us" />
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center
      mt-20">
        {/* why choose card  */}
       
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <WhyChooseCard image="travel-app/public/images/guarantee_6854644.png" title="Easy & Quick Booking"/>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <WhyChooseCard image="travel-app/public/images/booking.png" title="Easy & Quick Booking"/>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="150">
          <WhyChooseCard image="travel-app/public/images/24-hours-delivery_2311394.png" title="Customer Care 24/7"/>
        </div>
      </div>
    </div>
  )
}

export default WhyChoose