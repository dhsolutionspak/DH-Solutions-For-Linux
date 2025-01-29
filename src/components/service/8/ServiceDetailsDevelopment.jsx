import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../../public/assets/imgs/thumb/left-top/8.svg";
import ThumbDev2 from "../../../../public/assets/imgs/thumb/right-top/8.svg";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";
import { useTranslations } from "next-intl";

const ServiceDetailsDevelopment = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  const t = useTranslations();
  return (
    <>
      <section className="development__area">
        <div className="container g-0 line pt-130 pb-150">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  {t("comprehensiveQAtitle")}
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>{t("comprehensiveQApara1")}</p>
                  <p>{t("comprehensiveQApara2")}</p>
                </div>
                <ul>
                  <li>+ {t("comprehensiveQlistElem1")}</li>
                  <li>+ {t("comprehensiveQlistElem2")}</li>
                  <li>+ {t("comprehensiveQlistElem3")}</li>
                  <li>+ {t("comprehensiveQlistElem4")}</li>
                  <li>+ {t("comprehensiveQlistElem5")}</li>
                  <li>+ {t("comprehensiveQlistElem6")}</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev1}
                  alt="Quality Assurance Testing"
                  data-speed="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Styled JSX for scoping CSS to this component */}
      <style jsx>{`
        .col-xxl-8 {
          flex: 0 0 auto;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default ServiceDetailsDevelopment;
