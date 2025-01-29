import { useEffect } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";

gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { useTranslations } from "next-intl";

const DigitalAgencyWorkflow = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".fade_left", { x: -20, opacity: 0 });
        gsap.to(".fade_left", {
          scrollTrigger: {
            trigger: ".fade_left",
            start: "top center+=300",
          },
          x: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
          stagger: {
            each: 0.2,
          },
        });
      });
      return () => tHero.revert();
    }
  }, []);
  const t = useTranslations();
  return (
    <>
      <section className="workflow__area">
        <div className="container g-0 line pt-140 pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">
                  {t("workFlowHeading")}
                </h2>
                <h3 className="sec-title title-anim">
                  {t("howWeWorkHeading")}
                </h3>
              </div>
            </div>

            <div className="col-xxl-12 workflow__slider">
              <Swiper
                modules={[FreeMode]}
                spaceBetween={0}
                slidesPerView={1}
                freemode="true"
                loop={true}
                speed={2000}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">{t("step01")}</h4>
                      <h5 className="workflow__number">01</h5>
                      <h6 className="workflow__title">
                        {t("audienceResearchHeading")}
                      </h6>
                      <p>{t("audienceResearchPara")}</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">{t("step02")}</h4>
                      <h5 className="workflow__number">02</h5>
                      <h6 className="workflow__title">
                        {t("planningSketchingHeading")}
                      </h6>
                      <p>{t("planningSketchingPara")}</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">{t("step03")}</h4>
                      <h5 className="workflow__number">03</h5>
                      <h6 className="workflow__title">
                        {t("designCustomizationHeading")}
                      </h6>
                      <p>{t("designCustomizationPara")}</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">{t("step04")}</h4>
                      <h5 className="workflow__number">04</h5>
                      <h6 className="workflow__title">
                        {t("prototypeDevelopmentHeading")}
                      </h6>
                      <p>{t("prototypeDevelopmentPara")}</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">{t("step05")}</h4>
                      <h5 className="workflow__number">05</h5>
                      <h6 className="workflow__title">
                        {t("userTestingFeedbackHeading")}
                      </h6>
                      <p>{t("userTestingFeedbackPara")}</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">{t("step06")}</h4>
                      <h5 className="workflow__number">06</h5>
                      <h6 className="workflow__title">
                        {t("finalReviewLaunchHeaidng")}
                      </h6>
                      <p>{t("finalReviewLaunchPara")}</p>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyWorkflow;
