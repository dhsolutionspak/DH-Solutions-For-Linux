"use client";
import Link from "next/link";
import ThumbFooter from "../../../public/assets/imgs/thumb/footer.jpg";
import FooterLogoWhite from "../../../public/assets/imgs/logo/footer-logo-white.png";
import footer from "../../../public/assets/imgs/footer/footer.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer3() {
  const t = useTranslations();
  return (
    <>
      <footer className="footer__area">
        <div className="footer__top">
          <div className="container footer-line"></div>
          <Image
            priority
            width={1160}
            style={{ height: "auto" }}
            src={footer}
            alt="Footer Image"
            data-speed="0.75"
          />
        </div>

        <div className="footer__btm">
          <div className="container">
            <div className="row footer__row">
              <div className="col-xxl-12">
                <div className="footer__inner">
                  <div className="footer__widget">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      className="footer__logo"
                      src={FooterLogoWhite}
                      alt="Footer Logo"
                    />
                    <p>{t("footerAboutDesc")}</p>
                    <ul className="footer__social">
                      <li>
                        <a href="https://www.facebook.com/dhsolutions.official/">
                          <span>
                            <i className="fa-brands fa-facebook-f"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/dhsolutions.official/">
                          <span>
                            <i className="fa-brands fa-instagram"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://pk.linkedin.com/company/dhsolutionspakistan">
                          <span>
                            <i className="fa-brands fa-linkedin"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-2">
                    <h2 className="footer__widget-title">
                      {t("footerInfoTitle")}
                    </h2>
                    <ul className="footer__link">
                      <li>
                        <Link href="/about">{t("aboutCompany")}</Link>
                      </li>
                      <li>
                        <Link href="/portfolio">{t("caseStudy")}</Link>
                      </li>
                      <li>
                        <Link href="/career">{t("navCareers")}</Link>
                      </li>
                      <li>
                        <Link href="/blog">{t("navBlog")}</Link>
                      </li>
                      <li>
                        <Link href="/contact">{t("navContact")}</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-3">
                    <h2 className="footer__widget-title">
                      {t("footerContactTitle")}
                    </h2>
                    <ul className="footer__contact">
                      <li>1309 Coffeen Ave. Sheridan, Wyoming , USA 82801</li>
                      <li>
                        <a href="https://wa.me/19255589107">
                          (+1) 925 558 9107
                        </a>
                      </li>
                      <li>
                        <a href="mailto:hello@dhsol.net">hello@dhsol.net</a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-4">
                    <h2 className="project-title">{t("footerProjTitle")}</h2>
                    <div className="btn_wrapper">
                      <Link
                        href="/contact"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> {t("footerProjBtn")}{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <h3 className="contact-time">{t("footerTimeRange")}</h3>
                    <h4 className="contact-day">{t("footerWorkingDays")}</h4>
                  </div>

                  <div className="footer__copyright">
                    <p>
                      {t("footerCopyRight")}{" "}
                      <a href="https:/dhsol.net/" target="_blank">
                        {t("footerCopyLinkName")}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
