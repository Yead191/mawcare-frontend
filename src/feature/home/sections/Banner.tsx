import Image from "next/image";
import React from "react";

export default async function Banner() {
  return (
    <div
      id="banner"
      style={{
        backgroundImage: "url('/assets/images/home/banner_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="pt-32 md:pt-0  md:min-h-screen flex flex-col items-center justify-end"
    >
      <div className="lg:max-w-[700px]  2xl:max-w-[900px] mx-auto text-center lg:mt-40 2xl:mt-[260px] px-4 lg:px-5">
        <h1 className="font-semibold mb-8 leading-[120%] text-4xl lg:text-5xl 2xl:text-6xl   ">
          Welcome to 263 PROS
        </h1>

        <p className="text-sm lg:text-base  2xl:text-lg lg:max-w-[900px]">
          The best way to shop for your next car
        </p>
        <div className="flex justify-end">
          <Image
            src={"/assets/images/home/banner-phone.png"}
            alt="Phone Image"
            width={1320}
            height={600}
            draggable={false}
            className="w-full  h-full object-contain mx-auto mt-6"
          />
        </div>
      </div>
    </div>
  );
}
