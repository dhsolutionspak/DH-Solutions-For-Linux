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
                    {t("projectPlanningTitle")} <br />
                    {t("projectPlanningTitlePart")}
                  </h6>
                  <p>{t("projectPlanningTitlePara")}</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    {t("UIUXdesginTitle")} <br />
                    {t("UIUXdesginTitlePart")}
                  </h6>
                  <p>{t("UIUXdesginTitlePara")}</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    {t("appDevelopmentTitle")} <br />
                    {t("appDevelopmentTitlePart")}
                  </h6>
                  <p>{t("appDevelopmentTitlePara")}</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    {t("testing&DeploymantTitle")} <br />
                    {t("testing&DeploymantTitlePart")}
                  </h6>
                  <p>{t("testing&DeploymantTitlePara")}</p>
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
