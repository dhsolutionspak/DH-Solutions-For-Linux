"use client";
import Link from "next/link";
import Thumb404 from "../../../public/assets/imgs/thumb/404.png";
import Image from "next/image";
import { useTranslations } from "use-intl";

const Error1 = () => {
  const t = useTranslations();

  return (
    <>
      <section className="error__page">
        <div className="container line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="error__content">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={Thumb404}
                  alt="Page not found"
                />
                <h2>{t("errorHeading")}</h2>
                <p>{t("errorDesc")}</p>
                <div className="btn_wrapper">
                  <Link
                    href="/home"
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span> {t("errorBtn")}{" "}
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

export default Error1;
