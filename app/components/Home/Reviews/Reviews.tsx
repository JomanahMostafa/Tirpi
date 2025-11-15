import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col
    bg-[#bba43ecf]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1
      lg:grid-cols-2 gap-10">
        {/* text content */}
        <div>
          <h1 className="text-2xl font-semibold text-red-900
          ">What our customers are saying about us?</h1>
          <p className="mt-6 text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Quam cum, tempora soluta deserunt atque quod dolorem .</p>
            {/* rating */}
            <div className="mt-6 flex items-center space-x-6">
              <div>
                <p className="text-2xl font-bold text-black">4.88</p>
                <p className="text-black mb-2">Overall Rating</p>
                <div className="flex items-center">
                  <FaStar className="text-red-900"/>
                  <FaStar className="text-red-900"/>
                  <FaStar className="text-red-900"/>
                  <FaStar className="text-red-900"/>
                  <FaStar className="text-red-900"/>
                </div>
              </div>
            </div>
        </div>
        {/* slider */}
        <div className="overflow-hidden">
          <ReviewSlider/>
        </div>
      </div>
    </div>
  )
}

export default Reviews