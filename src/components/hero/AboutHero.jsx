"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Award from "../../../public/assets/imgs/about/award.svg";
import Image from "next/image";
import animationWordCome from "@/lib/utils/animationWordCome";
import { useTranslations } from "next-intl";

const AboutHero = () => {
  const wordAnim = useRef();
  const t = useTranslations();

  useEffect(() => {
    animationWordCome(wordAnim.current);
  }, []);
  return (
    <>
      <section className="hero__about">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__about-content">
                <h1 className="hero-title animation__word_come" ref={wordAnim}>
                  {t("abotPageTitle")}
                </h1>
                <div className="hero__about-info">
                  <div className="hero__about-btn">
                    <div className="btn_wrapper">
                      <Link
                        href="/service-v5"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> {t("aboutPageBtn")} <br />
                        {t("aboutPageBtnPart")}
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="hero__about-text title-anim">
                    <p>{t("aboutPagePara")}</p>
                  </div>
                  <div className="hero__about-award">
                    <Image
                      priority
                      width={126}
                      height={82}
                      src={Award}
                      alt={t("aboutHeroAwardAlt")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row hero__about-row">
            <div className="col-xxl-12">
              <div className="hero__about-video">
                <video loop muted autoPlay playsInline>
                  <source src="assets/video/video.mp4" type="video/mp4" />
                  {/* Could add a translation fallback if desired */}
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
