import { Accordion } from "react-bootstrap";
import ThumbFaq from "../../../../public/assets/imgs/thumb/faq.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ServiceDetailsFaq = () => {
  const t = useTranslations();
  return (
    <>
      <section className="faq__area">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbFaq}
                  alt="FAQ Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__content">
                <h2 className="faq__title title-anim">
                  {t("FAQsoftwareDevelopmentTitle")}
                </h2>

                <div className="faq__list">
                  <Accordion
                    defaultActiveKey="0"
                    className="accordion"
                    id="accordionExample"
                  >
                    <Accordion.Item eventKey="0" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingOne"
                      >
                        {t("FAQsQuestion1")}
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>{t("FAQsAnswer1")}</p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingTwo"
                      >
                        {t("FAQsQuestion2")}
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>{t("FAQsAnswer2")}</p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingThree"
                      >
                        {t("FAQsQuestion3")}
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>{t("FAQsAnswer3")}</p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFour"
                      >
                        {t("FAQsQuestion4")}
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>{t("FAQsAnswer4")}</p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFive"
                      >
                        {t("FAQsQuestion5")}
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>{t("FAQsAnswer5")}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsFaq;
