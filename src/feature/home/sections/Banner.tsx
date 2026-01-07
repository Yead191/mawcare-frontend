"use client";
import Image from "next/image";
import React from "react";
import { PawPrint, Star, ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section
      id="banner"
      className="relative min-h-screen bg-[#f0f0f0] pt-24 pb-12 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-1/4 w-32 h-32 bg-[#FF8755] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-8 z-10">
            <div className="space-y-4">
              <h1 className="text-7xl lg:text-8xl font-bold text-[#1C1C29] leading-[0.8]">
                Maw Care
              </h1>
              <p className="text-lg text-[#1C1C29]/70 max-w-[200px] leading-snug">
                Gentle, expert care for your feline friend
              </p>
            </div>

            <button className="flex items-center gap-2 bg-white text-[#1C1C29] font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all group">
              Get Started!
            </button>

            <div className="flex items-start gap-3 pt-4">
              <div className="w-12 h-12 bg-[#FF8755] rounded-xl flex items-center justify-center text-white shadow-lg">
                <PawPrint size={24} />
              </div>
              <div className="space-y-1">
                <p className="text-[#1C1C29] font-bold leading-tight">
                  5-Star
                  <br />
                  Ratings
                  <br />
                  Across
                  <br />
                  Platforms
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#"
                className="text-sm text-[#1C1C29] font-medium underline underline-offset-4 hover:text-[#FF8755] transition-colors"
              >
                Check Out All Google Reviews
              </a>
            </div>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[600px]">
            {/* Glassmorphism Card */}
            <div className="absolute w-[80%] h-[500px] 2xl:h-[630px] bg-white/20 backdrop-blur-md rounded-[60px] border border-white/30 shadow-2xl z-0 transform -rotate-2 lg:top-20 2xl:top-0"></div>

            {/* Cat Image */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <Image
                src="/assets/images/home/banner-img2.png"
                alt="White Cat"
                width={1000}
                height={1000}
                className="object-contain h-[580px] 2xl:h-full w-fit transform 2xl:scale-115"
                priority
                draggable={false}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full py-12 space-y-12">
            {/* Join Us Badge */}
            <div className="flex justify-end pr-8">
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-xl flex items-center gap-3 border border-white">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                    >
                      <Image
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="User"
                        width={32}
                        height={32}
                      />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#FF8755] flex items-center justify-center text-[10px] text-white font-bold">
                    8k+
                  </div>
                </div>
                <span className="text-sm font-bold text-[#1C1C29] pr-2">
                  Join Us
                </span>
              </div>
            </div>

            {/* Secondary Image Box */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-[#FF8755] to-orange-400 rounded-[40px] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative aspect-square w-full rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/home/secondary-img.png"
                  alt="Pet Care"
                  fill
                  draggable={false}
                  className="object-cover "
                />
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-1 text-right">
              <p className="text-sm text-[#1C1C29]/60 font-medium">
                Trusted By Cat Owners
              </p>
              <h2 className="text-6xl font-bold text-[#1C1C29]">13k+</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
