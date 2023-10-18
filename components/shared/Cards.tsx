import React from "react";
import { servicebarLinks } from "@/lib/utils";

const Cards = () => {
  return (
    <div className="text-center items-center justify-center flex flex-col mt-3 h-full">
      <div className="flex gap-3 items-center mb-5">
        <div className="border border-[#6c512f] p-[2px] bg-white rounded-full "></div>
        <h1 className="text-[#c39457] text-center text-1xl">Services</h1>
        <div className="border border-[#6c512f] p-[2px] bg-white rounded-full "></div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3 mx-2 md:mx-4 lg:mx-20  gap-2 mb-4">
        {servicebarLinks.map((link, index) => (
          <a
            key={index}
            href={link.route}
            className="flex flex-col items-center rounded-lg text-black  text-center mb-1 md:mb-0"
          >
            <div className="w-full h-36 sm:h-60 overflow-hidden rounded-lg">
              <img
                src={link.imgURL[0]} // Always use the first image
                alt="Service Image"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 mb-1 font-bold text-[#c39457]">{link.name}</p>
            <p className="mt-1 p-3 text-[#535e87] text-xs md:text-sm">{link.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Cards;
