"use client";
import Link from "next/link";
import { useTranslations } from "use-intl";

const Career1 = () => {
  // Example job array (if you have an API or DB, fetch your data dynamically)
  const jobs = []; // Replace with real job data if available

  const t = useTranslations();

  return (
    <>
      <section className="job__area pt-130 pb-150" id="job_list">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">{t("careerHeading")}</h2>
              </div>
            </div>
            <div className="col-xxl-12">
              {jobs.length > 0 ? (
                <div className="job__list">
                  {jobs.map((job, index) => (
                    <Link href="/job-details" key={index}>
                      <div className="job__item">
                        <p className="job__no">{index + 1}</p>
                        <h3 className="job__title">{job.title}</h3>
                        <h4 className="job__open">
                          ({job.openRoles} Open Roles)
                        </h4>
                        <div className="job__link">
                          <span>
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="no-jobs">
                  <p>{t("careerNoJobsHeading")}</p>
                  <p>
                    {t("careerNoJobsLine2")}{" "}
                    <a href="mailto:hr@dhsol.net">hr@dhsol.net</a>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career1;
