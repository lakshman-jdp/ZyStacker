import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
//
import React, { useEffect } from "react";

import { Header, Banner, Loading, Footer } from "@/comps/utils/Dummy01";
import { PopularPlaces, Categories } from "@/comps/utils/Dummy01";
import { Collections, Teams, Testiminials } from "@/comps/utils/Dummy01";
import { Contact, Features } from "@/comps/utils/Dummy01";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    window.addEventListener("scroll", listenScroll);

    function listenScroll() {
      // Get the reference
      const navbar = document.querySelector(".navbar");
      const heroHeader = document.querySelector(".hero-header");
      const heroBanner = document.querySelector(".hero-banner");

      const referencePassed =
        window.scrollY + heroHeader.getBoundingClientRect().height >
        heroHeader.offsetTop;

      const navClassNames = referencePassed
        ? ["transparent-nav", "bg-nav"]
        : ["bg-nav", "transparent-nav"];

      navbar.classList.replace(...navClassNames);

      // for navbar text color
      const bannerDimention = heroBanner.getBoundingClientRect();
      const bannerPassed = bannerDimention.top + bannerDimention.height <= 38; // Check if the banner dimention is passed
      const navTextColor = bannerPassed
        ? ["text-white", "text-gray-700"]
        : ["text-gray-700", "text-white"];
      navbar.classList.replace(...navTextColor);
    }
    listenScroll();
  }, []);
  return (
    <main>
      {/* Navigation Bar */}

      {/* Hero Banner */}
      <Banner />

      {/* Main Contents */}
      <PopularPlaces />
      <Categories />
      <Collections />
      <Teams />
      <Testiminials />
      <Contact />
      <Features />
      <Loading />

      {/* Navigation Bar */}
      <Footer />
    </main>
  );
}
