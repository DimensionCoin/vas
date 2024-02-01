"use client";
import React, { useState, useEffect } from "react";
import { servicebarLinks } from "@/lib/utils";

function OutdoorPage() {
  const officeData = servicebarLinks.find((link) => link.name === "Outdoor");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    description: "",
  });

   useEffect(() => {
     if (!officeData) return; // Check for officeData

     const interval = setInterval(() => {
       setCurrentImageIndex(
         (prevIndex) => (prevIndex + 1) % officeData.imgURL.length
       );
     }, 2000);
     return () => clearInterval(interval);
   }, [officeData ? officeData.imgURL.length : 0]); // Add dependency

   if (!officeData) {
     return <div>Error: Office data not found!</div>;
   }

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSendEmail = () => {
    const mailtoLink = `mailto:tylervassalloconstruction@gmail.com?subject=Office Renovation&body=Name: ${formData.name}%0D%0A%0D%0APhone Number: ${formData.phoneNumber}%0D%0A%0D%0AAddress: ${formData.address}%0D%0A%0D%0ADescription: ${formData.description}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 to-[#283132] min-h-screen flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold mb-8 text-black">Outdoor Services</h1>
      <div className="mb-8 w-full  md:w-1/2 lg:w-1/3 xl:w-1/4 h-64 relative">
        <img
          src={officeData.imgURL[currentImageIndex]}
          alt="Outdoor Image"
          className="rounded-lg shadow-lg w-full h-full object-cover absolute top-0 left-0"
        />
      </div>
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mb-20">
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="description"
            placeholder="Please provide what you want done and a time and day that would work for us to stop by and give you a quote, free of charge."
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md h-40"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleSendEmail}
          className="bg-[#2b403f] hover:bg-[#376866] text-white p-3 rounded-md w-full  transition duration-300"
        >
          Send Email
        </button>
        <p className="text-xs text-black mt-2">
          *After clicking &apos;Send Email&apos;, your mail app will open.
          Please review the pre-filled email and hit &apos;send&apos; to
          complete your request.*
        </p>
      </form>
    </div>
  );
}

export default OutdoorPage;
