"use client";
import React from "react";
import Image from "next/image"; // Importing Next.js Image component
import { data } from "@/app/data/cardData";  // Assuming you are fetching this data

const Dynamic = ({ params }: { params: { slug: string } }) => {
  // Define the product type for TypeScript
  interface Idata {
    id: number;
    title: string;
    price: string;
    image: string;  // Image URL
    slug: string;
  }

  // Find the product by slug
  const dataa = data.find((b) => b.slug === params.slug);

  if (!dataa) {
    // Return a 404-like message if product is not found
    return (
      <div className="max-w-4xl mx-auto mt-[40px] px-4 sm:px-6 lg:px-8 py-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center bg-blue-950 py-3 px-3 font-bold underline mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-700">Sorry, the product you are looking for could not be found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-[40px] px-4 sm:px-6 lg:px-8 py-[60px] ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#D84727] text-center  py-3 px-3 font-bold underline mb-7">
        {dataa.title}
      </h1>

      {/* Blog Content Section */}
      <div className="flex gap-8">
        {/* Left Section: Image */}
        <div className="w-1/3">
          <Image
            src={dataa.image}  // Using the image URL from the data
            alt={dataa.title}
            width={300}  // Adjust size as needed
            height={300} // Adjust size as needed
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="w-2/3">
          <p className="mt-4 text-gray-700">Brand: {dataa.title}</p>
          <p className="text-lg text-red-500">Price: {dataa.price}</p>
          <p className="mt-4 text-gray-700">{dataa.description}</p> {/* You can add more product details here */}
        </div>
      </div>
    </div>
  );
};

export default Dynamic;