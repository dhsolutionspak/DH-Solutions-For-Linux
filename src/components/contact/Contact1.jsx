"use client";
import React, { useEffect, useRef, useState } from "react";
import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import { useTranslations } from "use-intl";

const Contact1 = () => {
  const charAnim = useRef(null);
  const wordAnim = useRef(null);
  const [status, setStatus] = useState(null); // State to manage success/error message
  const [selectedService, setSelectedService] = useState(""); // State for dropdown

  const t = useTranslations(); // or from 'next-intl'

  // Array of services (still in English or add to i18n if desired)
  const services = [
    { label: t("webDevelopment") },
    { label: t("mobileDevelopment") },
    { label: t("aI/MLSolutions") },
    { label: t("cyberSecurity") },
    { label: t("devOps") },
    { label: t("customSoftwareDevelopment") },
    { label: t("testing") },
    { label: t("computerVision") },
    { label: t("others") },
  ];

  // Trigger animations on component mount
  useEffect(() => {
    if (charAnim.current) animationCharCome(charAnim.current);
    if (wordAnim.current) animationWordCome(wordAnim.current);
  }, []);

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus({ type: "success", message: t("contactSuccess") });
        e.target.reset();
        setSelectedService("");
      } else {
        const result = await response.json();
        setStatus({
          type: "error",
          message: result.message || t("contactFail"),
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: t("contactErrorGeneric"),
      });
    }

    // Remove the status message after 5 seconds
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section className="contact__area-6">
      <div className="container g-0 line pt-120 pb-110">
        <span className="line-3"></span>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="sec-title-wrapper">
              <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                {t("contactTitle")}
              </h2>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="contact__text">
              <p>{t("contactDesc")}</p>
            </div>
          </div>
        </div>
        <div className="row contact__btm">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
            <div className="contact__info">
              <h3
                className="sub-title-anim-top animation__word_come"
                ref={wordAnim}
              >
                {t("contactDontBeAfraid")}
              </h3>
              <ul>
                <li>
                  <a href="https://wa.me/19255589107">(+1) 925 558 9107</a>
                </li>
                <li>
                  <a href="mailto:hello@dhsol.net">hello@dhsol.net</a>
                </li>
                <li>
                  <span>
                    1309 Coffeen Ave. Sheridan, Wyoming , <br /> (USA) 82801
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
            <div className="contact__form">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <input
                      type="text"
                      name="name"
                      placeholder={t("contactNamePlaceholder")}
                      required
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <input
                      type="email"
                      name="email"
                      placeholder={t("contactEmailPlaceholder")}
                      required
                    />
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t("contactPhonePlaceholder")}
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <input
                      type="text"
                      name="subject"
                      placeholder={t("contactSubjectPlaceholder")}
                      required
                    />
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <input
                      type="text"
                      name="company"
                      placeholder={t("contactCompanyPlaceholder")}
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <select
                      name="services"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        fontSize: "16px",
                      }}
                    >
                      <option value="" disabled>
                        {t("contactServicePlaceholder")}
                      </option>
                      {services.map((service, index) => (
                        <option key={index} value={service.label}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-12">
                    <textarea
                      name="message"
                      placeholder={t("contactMessagePlaceholder")}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="btn_wrapper">
                      <button
                        type="submit"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> {t("contactSendBtn")}{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {status && (
                <p
                  style={{
                    color: status.type === "success" ? "green" : "red",
                    marginTop: "10px",
                  }}
                >
                  {status.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact1;
