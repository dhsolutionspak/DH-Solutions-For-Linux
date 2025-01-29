"use client";
import Link from "next/link";
import { useTranslations } from "use-intl";

const FaqCTA = () => {
  const t = useTranslations();

  return (
    <>
      <section className="faq__btm">
        <div className="container line pb-130">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">{t("faqCTAHeading")}</h2>
                <p className="sub-title-anim">{t("faqCTADesc")}</p>
                <div className="btn_wrapper">
                  <Link
                    href="/contact"
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span>
                    {t("faqCTAButton")}{" "}
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

export default FaqCTA;
