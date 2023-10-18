"use client";
import Cards from "@/components/shared/Cards";
import Insta from "@/components/shared/Insta";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="p-1 ">
      <div className="relative max-w-auto h-[40vh] lg:h-[60vh] p-3 px-8 rounded-md">
        <Image
          src="/main.png"
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 rounded-lg blur-s"
        />
        <div className="absolute top-0 left-0 z-10 p-4 md:p-8">
          <div className=" p-2 md:p-4 bg-black/60 rounded-lg">
            <div className="space-y-1">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium leading-none text-[#c39457] font-extrabold">
                Vassallo Construction
              </h1>
              <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-lg text-[#acacac] font-bold">
                Excellence in Custom Woodworking and More
              </p>
            </div>
            <div className="border border-white my-4 mx-2 rounded-lg"></div>
            <div className="flex h-5 space-x-4 text-xs sm:text-sm md:text-base text-[#e3e3e3] text-center">
              <div>Office</div>
              <div className="border my-1 rounded-lg"></div>
              <div>Outdoor</div>
              <div className="border my-1 rounded-lg"></div>
              <div>Indoor</div>
              <div className="border my-1 rounded-lg"></div>
              <div>Design</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Cards />
      </div>
      <div className="relative max-w-auto h-[50vh] p-3 px-8 rounded-md mb-20 md:mb-4 mx-6 lg:mx-40">
        <Image
          src="/second.jpg"
          alt="Header Image"
          layout="fill"
          objectFit=""
          className="rounded-md blur-"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="bg-black/30 border">
          <div className="absolute top-0 left-0 z-10 p-2 px-4  ">
            <div className="space-y-1">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium leading-none text-[#c39457] font-bold">
                Our Journey in Construction
              </h1>
            </div>
            <div className="border border-white my-4 mx-2 rounded-lg"></div>
            <p className="font-semibold text-xs sm:text-lg lg:text-lg text-white">
              At Vassallo Construction, we pride ourselves on our commitment to
              quality and attention to detail. With years of experience in the
              industry, our team is dedicated to ensuring that each project is
              completed to perfection. From custom woodworking to concrete
              framing, we offer a diverse range of services tailored to your
              unique needs.
            </p>
            <div className="hidden sm:flex  sm:mt-10 lg:flex  lg:mt-10">
              <div className="flex gap-6 border p-2 bg-white/50 rounded-lg">
                <a href="tel:4167023183" title="Call us at 4167023183">
                  <Image src="/phone.svg" alt="phone" height={30} width={30} />
                </a>
                <a href="mailto:vnick8@hotmail.com?subject=Contact Vassallo Construction">
                  <Image src="/email.svg" alt="call" height={30} width={30} />
                </a>
                <a
                  href="https://www.instagram.com/vassallotyler/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit our Instagram page"
                >
                  <Image
                    src="/insta.svg"
                    alt="Instagram"
                    height={30}
                    width={30}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex sm:mt-10 lg:flex  lg:mt-10 justify-center">
        <Insta />
      </div>
    </div>
  );
};

export default Home;
