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
                    {t("requirementAnalysisTitle")} <br />
                    {t("requirementAnalysisTitlePart")}
                  </h6>
                  <p>{t("requirementAnalysisPara")}</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    {t("databaseDesginTitle")} <br />
                    {t("databaseDesginTitlePart")}
                  </h6>
                  <p>{t("databaseDesginPara")}</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    {t("apiDevlopmentTitle")} <br />
                    {t("apiDevlopmentTitlePart")}
                  </h6>
                  <p>{t("apiDevlopmentPara")}</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    {t("testingDeploymentTitle")} <br />
                    {t("testingDeploymentTitlePart")}
                  </h6>
                  <p>{t("testingDeploymentPara")}</p>
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
