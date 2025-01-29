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
                    {t("continousIntegrationTitle")}
                  </h6>
                  <p>{t("continousIntegrationPara")}</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    {t("continousDeliveryTitle")}
                  </h6>
                  <p>{t("continousDeliveryPara")}</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    {t("monitringAndFeedbackTitle")}
                  </h6>
                  <p>{t("monitringAndFeedbackPara")}</p>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="workflow__slide-6">
                  <h6 className="workflow__title-6">
                    {t("collaborationAndCommunicationTitle")}
                  </h6>
                  <p>{t("collaborationAndCommunicationPara")}</p>
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
