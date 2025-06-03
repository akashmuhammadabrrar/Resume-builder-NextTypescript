"use client";

import Image from "next/image";
import React from "react";
import clientLogos from "@/assets/images/clients.png"; 

const TrustedBy = () => {
  return (
    <section className="bg-[#f1f5f9] py-20 px-4 text-center">
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trusted By Professionals
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Discover why our platform is recognized as the best AI resume builder for job seekers ready to transform their career trajectory. Our advanced AI resume technology is designed to streamline the application process, ensuring that every resume is optimized to pass ATS filters and catch the eye of recruiters.
        </p>

        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          By leveraging cutting-edge algorithms and data-driven insights, we’ve built the best resume builder AI that not only saves you time but also increases your chances of landing interviews and ultimately, your dream job. Whether you're revamping an old resume or creating one from scratch, our solution is the ideal choice for a seamless and effective job search.
        </p>

        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded shadow-md transition">
          Build Your AI Resume →
        </button>

        {/* Client Logos */}
        <div className="mt-10 flex justify-center">
          <Image
            src={clientLogos}
            alt="Trusted company logos"
            className="w-full max-w-4xl h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
