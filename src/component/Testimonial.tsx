"use client";

import Image from "next/image";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import userImg from "@/assets/images/user.png";
import arrow from "@/assets/images/indicator.png";

const Testimonial = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Success Stories
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 relative">
        {/* Left - User Image with Star */}
        <div className="relative flex-shrink-0">
          <Image
            src={userImg}
            alt="Christian Barlow"
            width={400}
            height={320}
            className="rounded-xl object-cover"
          />
          {/* Star Icon aligned with ear */}
          <div className="absolute top-[40%] -left-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow text-yellow-400 text-xl">
            ⭐
          </div>
        </div>

        {/* Right - Testimonial Text + Arrow */}
        <div className="relative max-w-xl text-center md:text-left flex flex-col justify-center">
          {/* Curved Arrow */}
          <Image
            src={arrow}
            alt="Arrow"
            className="absolute -left-14 top-4 w-10 hidden md:block"
          />

          {/* Testimonial Content */}
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            “This might be the best AI resume builder I’ve used. Most cost
            $20–30 a month… for $7.99 I sent 20 resumes and got 3 interviews.
            Game-changer.”
          </p>

          <div className="mt-2">
            <p className="font-bold text-lg">Christian Barlow</p>
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="mt-12 flex justify-center gap-6">
        <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition">
          <ArrowLeft className="text-purple-500" />
        </button>
        <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition">
          <ArrowRight className="text-purple-500" />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
