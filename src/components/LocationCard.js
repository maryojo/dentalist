import React from 'react';
import mapImg from '../assets/map.png';

const LocationCard = () => {
  return (
    <div className="max-w-sm rounded-[32px] border-[1.5px] border-[#18194519] overflow-hidden bg-white">
      <div className="flex gap-2">
        <div className="w-1/2 rounded-l-lg pl-4 pt-3">
          <img
            className="w-full h-full object-cover rounded-l-[28px]"
            src="https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Dentist clinic hallway"
          />
        </div>
        <div className="w-1/2 rounded-r-lg pr-4 pt-3">
          <img
            className="w-full h-[40] object-cover rounded-r-[28px]"
            src={mapImg}
            alt="Location map"
          />
        </div>
      </div>
      <div className="flex justify-center flex-col items-center py-5">
        <div className="font-bold text-[18px] mb-2">Dentalist Main Clinic</div>
        <p className="text-sm font-[500] opacity-50">
          35 West Dental Street California 1004
        </p>
      </div>
    </div>
  );
};

export default LocationCard;