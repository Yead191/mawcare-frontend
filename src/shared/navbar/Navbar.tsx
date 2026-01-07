"use client";
import React, { useState, useEffect, useRef } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { Drawer, ConfigProvider } from "antd";
import { usePathname } from "next/navigation";
import { endItems, startItems } from "@/constants/navItem";

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      const scrollY = globalThis.scrollY;
      // console.log("scroll", scrollY);
      // Change navbar background after banner
      setIsScrolled(scrollY > bannerHeight - 80);

      // Hide/show logic
      if (scrollY > lastScrollTop.current && scrollY > 100) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;
    };

    globalThis.addEventListener("scroll", handleScroll);
    // console.log("inside");
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      if (window.scrollY > bannerHeight - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0  z-50 w-full transition-all duration-500 navbar-container 
        ${
          isScrolled
            ? "bg-white mt-0"
            : "bg-transparent lg:bg-transparent md:px-8 2xl:px-0  lg:backdrop-blur-none  "
        }
        ${showNavbar ? "translate-y-0" : "-translate-y-28"}
      `}
    >
      <div
        className={`container mx-auto px-4  py-5 transition-colors duration-300`}
      >
        <div className="flex items-center justify-between">
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {startItems?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-sm lg:text-xs 2xl:text-sm transition-all duration-300 ${
                  item.href === pathname
                    ? "relative font-semibold text-[#000000]"
                    : "text-[#000000]/70 hover:text-[#000000]"
                }`}
              >
                {item.labelKey}
              </Link>
            ))}
          </div>
          {/* Logo */}
          <Link href={"/"} className="shrink-0 -mt-2">
            <Image
              src="/Logo.png"
              alt="VIAJIA Logo"
              width={280}
              height={100}
              className="h-6 lg:h-8 w-fit"
            />
          </Link>

          {/* Right Section - Language + Download + Menu */}
          <div className="flex items-center gap-4">
            {/* Download Button (Hidden on Small Devices) */}
            {endItems?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-sm lg:text-xs 2xl:text-sm transition-all duration-300 ${
                  item.href === pathname
                    ? "relative font-semibold text-[#000000]"
                    : "text-[#000000]/70 hover:text-[#000000]"
                }`}
              >
                {item.labelKey}
              </Link>
            ))}

            {/* Mobile Menu Icon */}
            <button
              className="lg:hidden  text-xl"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuOutlined />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer for Mobile */}
      <ConfigProvider>
        <Drawer
          title={
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">Menu</span>
              {/* <CloseOutlined onClick={() => setDrawerOpen(false)} /> */}
            </div>
          }
          placement="right"
          width={280}
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
        >
          <div className="flex flex-col gap-6 mt-4">
            {startItems?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`${
                  item.href === pathname
                    ? "relative font-semibold pl-4 -ml-4 py-2 rounded-lg  bg-primary! text-white! backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    : " hover:text-primary text-[#000000]!"
                } text-base   transition-all`}
                onClick={() => setDrawerOpen(false)}
              >
                {item.labelKey}
              </Link>
            ))}
            {endItems?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`${
                  item.href === pathname
                    ? "relative font-semibold pl-4 -ml-4 py-2 rounded-lg  bg-primary! text-white! backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    : " hover:text-primary text-[#000000]!"
                } text-base   transition-all`}
                onClick={() => setDrawerOpen(false)}
              >
                {item.labelKey}
              </Link>
            ))}
            {/* Download Button */}
            {/* <button className="bg-[#06825C] text-white px-6 py-2 rounded-full transition-colors text-sm w-full">
              Download App
            </button> */}
          </div>
        </Drawer>
      </ConfigProvider>
    </nav>
  );
}
