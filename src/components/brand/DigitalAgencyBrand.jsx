"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Brand1 from "../../../public/assets/imgs/brand/1.svg";
import Brand2 from "../../../public/assets/imgs/brand/2.svg";
import Brand3 from "../../../public/assets/imgs/brand/3.svg";
import Brand4 from "../../../public/assets/imgs/brand/4.svg";
import Brand5 from "../../../public/assets/imgs/brand/5.svg";
import Brand6 from "../../../public/assets/imgs/brand/6.svg";
import Brand7 from "../../../public/assets/imgs/brand/7.svg";
import Brand8 from "../../../public/assets/imgs/brand/8.svg";
import Brand9 from "../../../public/assets/imgs/brand/9.svg";
import Brand10 from "../../../public/assets/imgs/brand/10.svg";
import Brand11 from "../../../public/assets/imgs/brand/11.svg";
import Brand12 from "../../../public/assets/imgs/brand/12.svg";
import Image from "next/image";
import { useTranslations } from "use-intl";

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyBrand = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom");
          fadeArray.forEach((item) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom", {
            scrollTrigger: {
              trigger: ".fade_bottom",
              start: "top center+=300",
              markers: false,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);

  const t = useTranslations();

  return (
    <>
      <section className="brand__area">
        <div className="container g-0 line pt-140 pb-130">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">
                  {t("digitalAgencyBrandSubTitle")}
                </h2>
                <h3 className="sec-title title-anim">
                  {t("digitalAgencyBrandHeadingLine1")} <br />
                  {t("digitalAgencyBrandHeadingLine2")}
                </h3>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="brand__list">
                {/* Brand images */}
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={97}
                    height={67}
                    src={Brand1}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={85}
                    height={67}
                    src={Brand2}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={114}
                    height={64}
                    src={Brand3}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={114}
                    height={64}
                    src={Brand4}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={114}
                    height={64}
                    src={Brand5}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={114}
                    height={64}
                    src={Brand6}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={114}
                    height={64}
                    src={Brand7}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={114}
                    height={64}
                    src={Brand8}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={114}
                    height={64}
                    src={Brand9}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={114}
                    height={64}
                    src={Brand10}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={114}
                    height={64}
                    src={Brand11}
                    alt="Brand Logo"
                  />
                </div>

                <div className="brand__item fade_bottom">
                  <Image
                    priority
                    width={85}
                    height={67}
                    src={Brand12}
                    alt="Brand Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyBrand;
