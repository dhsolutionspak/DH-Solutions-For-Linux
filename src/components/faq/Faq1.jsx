"use client";
import animationCharCome from "@/lib/utils/animationCharCome";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import { useTranslations } from "use-intl";

const Faq1 = () => {
  const charAnim = useRef();
  const t = useTranslations();

  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);

  return (
    <>
      <section className="faq__area-6">
        <div className="container g-0 line pt-130 pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  {t("faqTitle")}
                </h2>
                <p>{t("faqSubtitle")}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="faq__list-6">
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
                      {t("servicesFaqItem1")}
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>
                        {/* Example text can remain as is, or further localized if you prefer */}
                        People know what an FAQ is, so make that your page
                        title. Don’t overcomplicate things by calling it “Good
                        to Know”...
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingTwo"
                    >
                      {t("servicesFaqItem2")}
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>
                        {/* More example text... */}
                        This is the second items accordion body...
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingThree"
                    >
                      {t("servicesFaqItem3")}
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>People know what an FAQ is...</p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFour"
                    >
                      {t("servicesFaqItem4")}
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>People know what an FAQ is...</p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFive"
                    >
                      {t("servicesFaqItem5")}
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>People know what an FAQ is...</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq1;
