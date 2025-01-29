import animationCharCome from "@/lib/utils/animationCharCome";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const ServiceElementV5 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  const t = useTranslations();
  return (
    <div>
      <section className="portfolio__service service-v5 pt-140 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
              <h2 className="sec-title animation__char_come" ref={charAnim}>
                {t("ServiceElementHeading")}
              </h2>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
              <div className="sec-text">
                <p>{t("ServiceElementPara")}</p>
              </div>
            </div>
          </div>
          <div className="portfolio__service-list">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-1">
                    <h3 className="ps-title">
                      {t("serviceElementCard1Heading")} <br />
                      {t("serviceElementCard1HeadingPart")}
                    </h3>
                    <ul>
                      <li>+ {t("serviceElementCard1ListElem1")}</li>
                      <li>+ {t("serviceElementCard1ListElem2")}</li>
                      <li>+ {t("serviceElementCard1ListElem3")}</li>
                      <li>+ {t("serviceElementCard1ListElem4")}</li>
                      <li>+ {t("serviceElementCard1ListElem5")}</li>
                      <li>+ {t("serviceElementCard1ListElem6")}</li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-2">
                    <h3 className="ps-title">
                      {t("serviceElementCard2Heading")} <br />{" "}
                      {t("serviceElementCard2HeadingPart")}
                    </h3>
                    <ul>
                      <li>+ {t("serviceElementCard2ListElem1")}</li>
                      <li>+ {t("serviceElementCard2ListElem2")}</li>
                      <li>+ {t("serviceElementCard2ListElem3")}</li>
                      <li>+ {t("serviceElementCard2ListElem4")}</li>
                      <li>+ {t("serviceElementCard2ListElem5")}</li>
                      <li>+ {t("serviceElementCard2ListElem6")}</li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-3">
                    <h3 className="ps-title">
                      {t("serviceElementCard3Heading")} <br />{" "}
                      {t("serviceElementCard3HeadingPart")}
                    </h3>
                    <ul>
                      <li>+ {t("serviceElementCard3ListElem1")}</li>
                      <li>+ {t("serviceElementCard3ListElem2")}</li>
                      <li>+ {t("serviceElementCard3ListElem3")}</li>
                      <li>+ {t("serviceElementCard3ListElem4")}</li>
                      <li>+ {t("serviceElementCard3ListElem5")}</li>
                      <li>+ {t("serviceElementCard3ListElem6")}</li>
                    </ul>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-4">
                    <h3 className="ps-title">
                      {t("serviceElementCard4Heading")} <br />{" "}
                      {t("serviceElementCard4HeadingPart")}
                    </h3>
                    <ul>
                      <li>+ {t("serviceElementCard4ListElem1")}</li>
                      <li>+ {t("serviceElementCard4ListElem2")}</li>
                      <li>+ {t("serviceElementCard4ListElem3")}</li>
                      <li>+ {t("serviceElementCard4ListElem4")}</li>
                      <li>+ {t("serviceElementCard4ListElem5")} </li>
                      <li>+ {t("serviceElementCard4ListElem6")}</li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-5">
                    <h3 className="ps-title">
                      {t("serviceElementCard5Heading")} <br />{" "}
                      {t("serviceElementCard5HeadingPart")}
                    </h3>
                    <ul>
                      <li>+ {t("serviceElementCard5ListElem1")}</li>
                      <li>+ {t("serviceElementCard5ListElem2")}</li>
                      <li>+ {t("serviceElementCard5ListElem3")}</li>
                      <li>+ {t("serviceElementCard5ListElem4")}</li>
                      <li>+ {t("serviceElementCard5ListElem5")}</li>
                      <li>+ {t("serviceElementCard5ListElem6")}</li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-6">
                    <h3 className="ps-title">
                      {t("serviceElementCard6Heading")} <br />{" "}
                      {t("serviceElementCard6HeadingPart")}
                    </h3>
                    <ul>
                      <li>+ {t("serviceElementCard6ListElem1")}</li>
                      <li>+ {t("serviceElementCard6ListElem2")}</li>
                      <li>+ {t("serviceElementCard6ListElem3")}</li>
                      <li>+ {t("serviceElementCard6ListElem4")}</li>
                      <li>+ {t("serviceElementCard6ListElem5")}</li>
                      <li>+ {t("serviceElementCard6ListElem6")}</li>
                    </ul>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-7">
                    <h3 className="ps-title">
                      {t("serviceElementCard7Heading")} <br />{" "}
                      {t("serviceElementCard7HeadingPart")}
                    </h3>
                    <ul>
                      <li>+ {t("serviceElementCard7ListElem1")}</li>
                      <li>+ {t("serviceElementCard7ListElem2")}</li>
                      <li>+ {t("serviceElementCard7ListElem3")} </li>
                      <li>+ {t("serviceElementCard7ListElem4")}</li>
                      <li>+ {t("serviceElementCard7ListElem5")}</li>
                      <li>+ {t("serviceElementCard7ListElem6")}</li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-8">
                    <h3 className="ps-title">
                      {t("serviceElementCard8Heading")} <br />{" "}
                      {t("serviceElementCard8HeadingPart")}
                    </h3>
                    <ul>
                      <li>+ {t("serviceElementCard8ListElem1")}</li>
                      <li>+ {t("serviceElementCard8ListElem2")}</li>
                      <li>+ {t("serviceElementCard8ListElem3")}</li>
                      <li>+ {t("serviceElementCard8ListElem4")}</li>
                      <li>+ {t("serviceElementCard8ListElem5")} </li>
                      <li>+ {t("serviceElementCard8ListElem6")}</li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details-9">
                    <h3 className="ps-title">
                      {t("serviceElementCard9Heading")} <br />{" "}
                      {t("serviceElementCard9HeadingPart")}
                    </h3>
                    <ul>
                      <li>+ {t("serviceElementCard9ListElem1")}</li>
                      <li>+ {t("serviceElementCard9ListElem2")}</li>
                      <li>+ {t("serviceElementCard9ListElem3")}</li>
                      <li>+ {t("serviceElementCard9ListElem4")}</li>
                      <li>+ {t("serviceElementCard9ListElem5")}</li>
                      <li>+ {t("serviceElementCard9ListElem6")}</li>
                    </ul>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceElementV5;
