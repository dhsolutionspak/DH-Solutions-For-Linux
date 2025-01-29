"use client";
import { useTranslations } from "use-intl";

const CareerBenefit = () => {
  const t = useTranslations();

  return (
    <>
      <section className="career__benefits">
        <div className="container line g-0 pt-140 pb-150">
          <span className="line-3"></span>

          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-7">
              <ul className="career__benefits-list">
                <li>{t("careerBenefitItem1")}</li>
                <li>{t("careerBenefitItem2")}</li>
                <li>{t("careerBenefitItem3")}</li>
                <li>{t("careerBenefitItem4")}</li>
                <li>{t("careerBenefitItem5")}</li>
                <li>{t("careerBenefitItem6")}</li>
              </ul>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  {t("careerBenefitHeading")}
                </h2>
                <p>{t("careerBenefitPara")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerBenefit;
