"use client";
import { FreeMode, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { useTranslations } from "next-intl";

const DigitalAgencyRoll = () => {
  const t = useTranslations();

  // We'll store each “roll” item in an array from your JSON or define them as multiple keys.
  // For simplicity, let's define them as multiple translation keys:
  const rollItems = [
    t("digitalAgencyRoll1"),
    t("digitalAgencyRoll2"),
    t("digitalAgencyRoll3"),
    t("digitalAgencyRoll4"),
    t("digitalAgencyRoll5"),
    t("digitalAgencyRoll6"),
    t("digitalAgencyRoll7"),
    t("digitalAgencyRoll8"),
    t("digitalAgencyRoll9"),
    t("digitalAgencyRoll10"),
    t("digitalAgencyRoll11"),
    t("digitalAgencyRoll12"),
    t("digitalAgencyRoll13"),
    t("digitalAgencyRoll14"),
    t("digitalAgencyRoll15"),
    t("digitalAgencyRoll16"),
    t("digitalAgencyRoll17"),
    t("digitalAgencyRoll18"),
    t("digitalAgencyRoll19"),
  ];

  return (
    <section className="roll__area">
      <div className="roll__slider">
        <Swiper
          modules={[FreeMode, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          freeMode
          loop
          centeredSlides
          allowTouchMove={false}
          speed={2000}
          autoplay={{
            delay: 1,
            disableOnInteraction: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1300: {
              slidesPerView: 5,
            },
            1900: {
              slidesPerView: 8,
            },
          }}
        >
          {rollItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="roll__slide">
                <h2>{item}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DigitalAgencyRoll;
