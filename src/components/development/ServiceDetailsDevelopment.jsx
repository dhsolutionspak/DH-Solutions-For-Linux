"use client";
import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../public/assets/imgs/thumb/dev-1.jpg";
import ThumbDev2 from "../../../public/assets/imgs/thumb/dev-2.jpg";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";
import { useTranslations } from "use-intl";

const ServiceDetailsDevelopment = () => {
  const charAnim = useRef();
  const t = useTranslations();

  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);

  return (
    <>
      <section className="development__area">
        <div className="container g-0 line pt-130 pb-150">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  {t("servicesDevHeading")}
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>{t("servicesDevPara1")}</p>
                  <p>{t("servicesDevPara2")}</p>
                </div>
                <ul>
                  <li>+ {t("servicesDevList1")}</li>
                  <li>+ {t("servicesDevList2")}</li>
                  <li>+ {t("servicesDevList3")}</li>
                  <li>+ {t("servicesDevList4")}</li>
                  <li>+ {t("servicesDevList5")}</li>
                  <li>+ {t("servicesDevList6")}</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev1}
                  alt="Development Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev2}
                  alt="Development Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsDevelopment;
