import { useTranslations } from "next-intl";

const ServiceDetailsWorkflow = () => {
  const t = useTranslations();
  return (
    <>
      <section className="workflow__area-6">
        <div className="container g-0 line pb-130">
          <div className="line-3"></div>
          <div className="workflow__wrapper-6">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    {t("planningAndStrategyTitle")} <br />
                    {t("planningAndStrategyTitlePart")}
                  </h6>
                  <p>{t("planningAndStrategyTitlePara")}</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    {t("teamCollaborationTitle")}
                    <br />
                    {t("teamCollaborationTitlePart")}
                  </h6>
                  <p>{t("teamCollaborationTitlePara")}</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    {t("testPlanningTitle")} <br />
                    {t("testPlanningTitlePart")}
                  </h6>
                  <p>{t("testPlanningTitlePara")}</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    {t("userAcceptanceTitle")} <br />
                    {t("userAcceptanceTitlePart")}
                  </h6>
                  <p>{t("userAcceptanceTitlePara")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsWorkflow;
