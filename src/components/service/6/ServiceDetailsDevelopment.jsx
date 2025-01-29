import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../../public/assets/imgs/thumb/left-top/6.svg";
import ThumbDev2 from "../../../../public/assets/imgs/thumb/right-top/6.svg";
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
                  {t("expertDevopsTitile")}
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>{t("expertDevopsPara1")}</p>
                  <p>{t("expertDevopsPara2")}</p>
                </div>
                <ul>
                  <li>+ {t("expertDevopsListElem1")}</li>
                  <li>+ {t("expertDevopsListElem2")}</li>
                  <li>+ {t("expertDevopsListElem3")}</li>
                  <li>+ {t("expertDevopsListElem4")}</li>
                  <li>+ {t("expertDevopsListElem5")}</li>
                  <li>+ {t("expertDevopsListElem6")}</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev1}
                  alt="DevOps Services"
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
