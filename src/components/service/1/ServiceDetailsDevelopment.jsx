import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../../public/assets/imgs/thumb/left-top/1.svg";
import ThumbDev2 from "../../../../public/assets/imgs/thumb/right-top/1.svg";
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
                  {t("serviceDetailsDevelopmentHeading")}
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>{t("serviceDetailsDevelopmentPara1")}</p>
                  <p>{t("serviceDetailsDevelopmentPara2")}</p>
                </div>
                <ul>
                  <li>
                    + {t("serviceDetailsDevelopmentListResponsiveWebDesgin")}
                  </li>
                  <li>+ {t("serviceDevelopmentJSFrameworks")}</li>
                  <li>+ {t("serViceDevelopmentHtmlCSS")}</li>
                  <li>+ {t("serviceDevelopmentApiIntegration")}</li>
                  <li>+ {t("serviceDevlopmentPeformanceOptimization")}</li>
                  <li>+ {t("serivceDevlopemntCrossBrowserCompatibility")}</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev1}
                  alt="Front-End Development"
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
