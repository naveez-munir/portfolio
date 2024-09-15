"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import { features } from "@/data/portfolioFeatures";

import HighLight from "./HiglightSection";
import { useState } from "react";

export const ProfessionalHighlights = () => {
  const [resetKey, setResetKey] = useState(0);
  return (
    <div className="mt-auto hidden md:block w-1/4 md:w-2/5 lg:w-1/4 xl:mb-12 order-3">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => setResetKey((prev) => prev + 1)}
      >
        {features.map((feature) => (
          <SwiperSlide key={feature.title}>
            <HighLight feature={feature} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
