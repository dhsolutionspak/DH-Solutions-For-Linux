"use client";
import Link from "next/link";
import { useTranslations } from "use-intl";

const DigitalAgencyCTA = () => {
  const t = useTranslations();

  return (
    <>
      <section className="cta__area">
        <div className="container line pb-110">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content">
                <p className="cta__sub-title">{t("digitalAgencyCTAWork")}</p>
                <h2 className="cta__title title-anim">
                  {t("digitalAgencyCTADesc")}
                </h2>
                <div className="btn_wrapper">
                  <Link
                    href="/contact"
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span>
                    {t("digitalAgencyCTAButton")}{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyCTA;
