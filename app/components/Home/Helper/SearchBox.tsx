import React from 'react'
import { FaCalendar, FaCalendarWeek, FaMap } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';

const SearchBox = () => {
  return (
    <div className="bg-white rounded-xl p-5 sm:p-8 md:p-10 shadow-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-stretch gap-5 sm:gap-8 md:gap-10 mt-4 sm:mt-12 w-full">
      {/* 1st Search input */}
      <div className="flex items-center space-x-3 sm:space-x-6 py-1 w-full">
        <FaMap className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"/>
      <div className="w-full min-w-0">
      <p className="text-sm sm:text-base font-medium mb-1">Location</p>
      <input type="text" placeholder="Where are you going?" className="w-full bg-transparent border border-gray-200 rounded-md px-3 py-2 text-sm sm:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"/>
    </div>
    </div>
    {/* 2nd Search input */}
    <div className="flex items-center space-x-3 sm:space-x-6 py-1 w-full">
      <FaCalendarWeek className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"/>
      <div className="w-full min-w-0">
          <p className="text-sm sm:text-base font-medium mb-1">Start Date</p>
          <input type="date" className="w-full bg-transparent border border-gray-200 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"/>
    </div>
     </div>
     {/* 3nd Search input */}
    <div className="flex items-center space-x-3 sm:space-x-6 py-1 w-full">
      <FaCalendarWeek className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"/>
      <div className="w-full min-w-0">
          <p className="text-sm sm:text-base font-medium mb-1">End Date</p>
          <input type="date" className="w-full bg-transparent border border-gray-200 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"/>
    </div>
     </div>
      {/* 4th Search input */}
      <div className="flex items-center space-x-3 sm:space-x-6 py-1 w-full">
        <FaUserGroup className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"/>
        <div className="w-full min-w-0">
          <p className="text-sm sm:text-base font-medium mb-1">Guest</p>
          <p className="text-sm sm:text-base font-normal truncate">1 Guest 1 Room</p>
        </div>
      </div>
      </div>
  );
}

export default SearchBox