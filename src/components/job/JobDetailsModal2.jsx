"use client";
import { Modal } from "react-bootstrap";
import LogoBlack from "../../../public/assets/imgs/logo/logo-black.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const JobDetailsModal2 = ({ modal2, setModal1, setModal2 }) => {
  const t = useTranslations();

  const backForm = () => {
    setModal2(false);
  };

  const applyClose = () => {
    setModal2(false);
    setModal1(false);
  };

  return (
    <Modal
      show={modal2}
      onHide={applyClose}
      backdrop="static"
      keyboard={false}
      className="modal-show modal__application"
      id="application_form2"
    >
      <div className="modal__apply">
        <button
          onClick={applyClose}
          className="modal__close-2"
          id="apply_close2"
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
            <div className="input-apply-2">
              <p>{t("jobModal2Name")}</p>
              <input type="text" name="name" required />
            </div>
            <div className="input-apply-2">
              <p>{t("jobModal2Email")}</p>
              <input type="email" name="email" required />
            </div>
            <div className="input-apply-2">
              <p>{t("jobModal2Phone")}</p>
              <input type="tel" name="phone" required />
            </div>
            <div className="input-apply-2">
              <p>{t("jobModal2CV")}</p>
              <input type="file" name="cv" />
            </div>
          </form>
        </div>
        <div className="form-btn-2">
          <button
            onClick={backForm}
            className="wc-btn-primary btn-hover"
            id="back_form1"
          >
            <span></span> {t("jobModalBack")}{" "}
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          <button
            onClick={applyClose}
            type="submit"
            className="wc-btn-primary btn-hover"
          >
            <span></span> {t("jobModalSubmit")}{" "}
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default JobDetailsModal2;
