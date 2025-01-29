"use client";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingPrice = () => {
  const t = useTranslations();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });
        let pricing_timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".price__table",
            start: "top center",
          },
        });

        gsap.set(".animation_from_bottom", { yPercent: 50 });
        pricing_timeline.to(".animation_from_bottom", {
          yPercent: 0,
          duration: 2,
          ease: "power4.out",
        });

        gsap.set(".animation_from_top", { yPercent: -50, opacity: 0 });
        pricing_timeline.to(
          ".animation_from_top",
          {
            yPercent: 0,
            duration: 2,
            opacity: 1,
            ease: "power4.out",
          },
          "-=2"
        );
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <section className="price__area pt-130 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">
                  {t("digitalMktPriceSubtitle")}
                </h2>
                <h3 className="sec-title title-anim">
                  {t("digitalMktPriceTitle")}
                </h3>
              </div>
              <div className="faq__list-3">
                <Accordion defaultActiveKey="0" className="accordion">
                  <Accordion.Item eventKey="0" className="accordion-item">
                    <Accordion.Header>
                      {t("digitalMktFaq1Header")}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>{t("digitalMktFaq1Body")}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  {/* ... Repeat for other items ... */}
                  <Accordion.Item eventKey="4" className="accordion-item">
                    <Accordion.Header>
                      {t("digitalMktFaq5Header")}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>{t("digitalMktFaq5Body")}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="price__table">
                <div className="price__item animation_from_bottom">
                  <div className="price__icon">
                    <span>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </div>
                  <div className="price__info">
                    <h2 className="price__type">
                      {t("digitalMktPriceYearly")}
                    </h2>
                    <h3 className="price__title">
                      {t("digitalMktPrice14Days")}
                    </h3>
                    <p>{t("digitalMktPriceYearlyDesc")}</p>
                  </div>
                  <div className="price__amount">
                    <h4 className="best-value">
                      {t("digitalMktPriceBestValue")}
                    </h4>
                    <p>{t("digitalMktPriceYearlyCost")}</p>
                  </div>
                </div>

                <div className="price__item animation_from_top">
                  <div className="price__icon">
                    <span>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </div>
                  <div className="price__info">
                    <h2 className="price__type">
                      {t("digitalMktPriceMonthly")}
                    </h2>
                    <h3 className="price__title">
                      {t("digitalMktPrice7Days")}
                    </h3>
                    <p>{t("digitalMktPriceMonthlyDesc")}</p>
                  </div>
                  <div className="price__amount">
                    <p>{t("digitalMktPriceMonthlyCost")}</p>
                  </div>
                </div>
              </div>
              <div className="price__btn btn_wrapper">
                <Link
                  href="/contact"
                  className="wc-btn-black btn-hover btn-item"
                >
                  <span></span> {t("digitalMktPriceBtn")}{" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingPrice;
