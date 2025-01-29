"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import JobDetailsModal1 from "./JobDetailsModal1";
import JobDetailsModal2 from "./JobDetailsModal2";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const JobDetails1 = () => {
  const t = useTranslations();
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 767) {
          gsap.to(".job__detail-sidebar", {
            scrollTrigger: {
              trigger: ".job__detail",
              pin: ".job__detail-sidebar",
              pinSpacing: false,
              start: "top top",
              end: "bottom center",
              markers: false,
              delay: 1,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);

  const jobApply = () => {
    setModal1(true);
  };

  return (
    <>
      <section className="job__detail">
        <div className="container g-0 line pb-110">
          <span className="line-3"></span>

          <div className="row">
            <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-8">
              <div className="job__detail-wrapper">
                <h2 className="sec-title">{t("jobDetailsHeading")}</h2>
                <ul className="job__detail-meta">
                  <li>
                    <span>{t("jobDetailsLocation")}</span>{" "}
                    {t("jobDetailsLocationValue")}
                  </li>
                  <li>
                    <span>{t("jobDetailsDate")}</span>{" "}
                    {t("jobDetailsDateValue")}
                  </li>
                  <li>
                    <span>{t("jobDetailsJobType")}</span>{" "}
                    {t("jobDetailsJobTypeValue")}
                  </li>
                </ul>
                <div className="job__detail-content">
                  <p>{t("jobDetailsIntro1")}</p>
                  <h2>{t("jobDetailsHeading2")}</h2>
                  <ul>
                    <li>{t("jobDetailsBullet1")}</li>
                    <li>{t("jobDetailsBullet2")}</li>
                    <li>{t("jobDetailsBullet3")}</li>
                    <li>{t("jobDetailsBullet4")}</li>
                    <li>{t("jobDetailsBullet5")}</li>
                    <li>{t("jobDetailsBullet6")}</li>
                    <li>{t("jobDetailsBullet7")}</li>
                    <li>{t("jobDetailsBullet8")}</li>
                    <li>{t("jobDetailsBullet9")}</li>
                  </ul>

                  <h2>{t("jobDetailsReqTitle")}</h2>
                  <ul>
                    <li>{t("jobDetailsReq1")}</li>
                    <li>{t("jobDetailsReq2")}</li>
                    <li>{t("jobDetailsReq3")}</li>
                    <li>{t("jobDetailsReq4")}</li>
                    <li>{t("jobDetailsReq5")}</li>
                    <li>{t("jobDetailsReq6")}</li>
                    <li>{t("jobDetailsReq7")}</li>
                    <li>{t("jobDetailsReq8")}</li>
                    <li>{t("jobDetailsReq9")}</li>
                    <li>{t("jobDetailsReq10")}</li>
                    <li>{t("jobDetailsReq11")}</li>
                    <li>{t("jobDetailsReq12")}</li>
                    <li>{t("jobDetailsReq13")}</li>
                    <li>{t("jobDetailsReq14")}</li>
                    <li>{t("jobDetailsReq15")}</li>
                  </ul>

                  <h2>{t("jobDetailsEduTitle")}</h2>
                  <ul>
                    <li>{t("jobDetailsEduPara")}</li>
                  </ul>

                  <h2>{t("jobDetailsPerksTitle")}</h2>
                  <ul>
                    <li>{t("jobDetailsPerks1")}</li>
                    <li>{t("jobDetailsPerks2")}</li>
                    <li>{t("jobDetailsPerks3")}</li>
                    <li>{t("jobDetailsPerks4")}</li>
                    <li>{t("jobDetailsPerks5")}</li>
                    <li>{t("jobDetailsPerks6")}</li>
                    <li>{t("jobDetailsPerks7")}</li>
                    <li>{t("jobDetailsPerks8")}</li>
                    <li>{t("jobDetailsPerks9")}</li>
                    <li>{t("jobDetailsPerks10")}</li>
                    <li>{t("jobDetailsPerks11")}</li>
                  </ul>

                  <p>{t("jobDetailsOutro1")}</p>
                </div>

                <div className="job__apply btn_wrapper">
                  <button
                    onClick={jobApply}
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span> {t("jobDetailsApplyBtn")}{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
              <div className="job__detail-sidebar">
                <ul>
                  <li>
                    <span>{t("jobDetailsSideExpLabel")}</span>{" "}
                    {t("jobDetailsSideExpValue")}
                  </li>
                  <li>
                    <span>{t("jobDetailsSideHoursLabel")}</span>{" "}
                    {t("jobDetailsSideHoursValue")}
                  </li>
                  <li>
                    <span>{t("jobDetailsSideDaysLabel")}</span>{" "}
                    {t("jobDetailsSideDaysValue")}
                  </li>
                  <li>
                    <span>{t("jobDetailsSideSalaryLabel")}</span>{" "}
                    {t("jobDetailsSideSalaryValue")}
                  </li>
                  <li>
                    <span>{t("jobDetailsSideVacancyLabel")}</span>{" "}
                    {t("jobDetailsSideVacancyValue")}
                  </li>
                  <li>
                    <span>{t("jobDetailsSideDeadlineLabel")}</span>{" "}
                    {t("jobDetailsSideDeadlineValue")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <JobDetailsModal1
        modal1={modal1}
        setModal1={setModal1}
        setModal2={setModal2}
      />
      <JobDetailsModal2
        modal2={modal2}
        setModal2={setModal2}
        setModal1={setModal1}
      />
    </>
  );
};

export default JobDetails1;
