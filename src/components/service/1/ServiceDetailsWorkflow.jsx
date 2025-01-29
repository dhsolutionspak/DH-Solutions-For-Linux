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
                    {t("serviceDetailsWorkflowHeading")} <br />
                    {t("serviceDetailsWorkflowHeadingPart")}
                  </h6>
                  <p>{t("serviceDetailsWorkflowPAra")}</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    {t("serviceDetailsWorkflowHeading2")} <br />
                    {t("serviceDetailsWorkflowHeading2Part")}
                  </h6>
                  <p>{t("serviceDetailsWorkflowHeading2Para")}</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    {t("serviceDetailsWorkflowHeading3")} <br />
                    {t("serviceDetailsWorkflowHeading3Part")}
                  </h6>
                  <p>{t("serviceDetailsWorkflowHeading3Part")}</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    {t("serviceDetailsWorkflowHeading4")} <br />
                    {t("serviceDetailsWorkflowHeading4Part")}
                  </h6>
                  <p>{t("serviceDetailsWorkflowHeading4Para")}</p>
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
