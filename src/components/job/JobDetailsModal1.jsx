"use client";
import { Modal } from "react-bootstrap";
import LogoBlack from "../../../public/assets/imgs/logo/logo-black.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const JobDetailsModal1 = ({ modal1, setModal1, setModal2 }) => {
  const t = useTranslations();

  const applyClose = () => {
    setModal1(false);
  };
  const applyTrigger = () => {
    setModal2(true);
  };

  return (
    <Modal
      show={modal1}
      onHide={applyClose}
      backdrop="static"
      keyboard={false}
      className="modal-show modal__application"
      id="application_form"
    >
      <div className="modal__apply">
        <button
          onClick={applyClose}
          className="modal__close-2"
          id="apply_close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="form-top">
          <Image
            priority
            style={{ width: "auto", height: "auto" }}
            src={LogoBlack}
            alt="Site logo"
          />
          <h2 className="sec-title">{t("jobDetailsHeading")}</h2>
          <p>{t("jobDetailsJobTypeValue")}</p>
        </div>
        <div className="form-apply">
          <form>
            <div className="input-apply">
              <p>{t("jobModalQ1")}</p>
              <textarea name="question" required></textarea>
            </div>
            <div className="input-apply">
              <p>{t("jobModalQ2")}</p>
              <textarea name="question-2" required></textarea>
            </div>
            <div className="input-apply">
              <p>{t("jobModalQ3")}</p>
              <textarea name="question-3" required></textarea>
            </div>
            <div className="input-apply">
              <p>{t("jobModalQ4")}</p>
              <textarea name="question-4" required></textarea>
            </div>
            <div className="input-apply">
              <p>{t("jobModalQ5")}</p>
              <textarea name="question-5" required></textarea>
            </div>
            <div className="input-apply">
              <p>{t("jobModalQ6")}</p>
              <textarea name="question-6" required></textarea>
            </div>
            <div className="input-apply">
              <p>{t("jobModalQ7")}</p>
              <textarea name="question-7" required></textarea>
            </div>
            <div className="input-apply">
              <p>{t("jobModalQ8")}</p>
              <textarea name="question-8" required></textarea>
            </div>
          </form>
        </div>

        <div className="form-btn apply-trigger">
          <button onClick={applyTrigger} className="wc-btn-primary btn-hover">
            <span></span> {t("jobModalNext")}{" "}
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default JobDetailsModal1;
