"use client";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import Shape11 from "../../../public/assets/imgs/shape/11.png";
import Shape12 from "../../../public/assets/imgs/shape/12.png";
import Image from "next/image";
import { useTranslations } from "use-intl";

const Canvas = ({ bladeMode = "", ofCanvasArea }) => {
  const [accordion, setAccordion] = useState(0);
  const [subAccordion, setSubAccordion] = useState(0);
  const headerTitle = useRef();

  const t = useTranslations();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        let rootParent = headerTitle.current?.children;
        if (!rootParent) return;
        for (let i = 0; i < rootParent.length; i++) {
          let firstParent = rootParent[i].children;
          for (let j = 0; j < firstParent.length; j++) {
            if (firstParent[j].className?.includes("header_title")) {
              let arr = firstParent[j].children[0].textContent.split("");
              let spanData = "";
              for (let k = 0; k < arr.length; k++) {
                if (arr[k] === " ") {
                  spanData += `<span style='width:2vw;'>${arr[k]}</span>`;
                } else {
                  spanData += `<span>${arr[k]}</span>`;
                }
              }
              let result = '<div class="menu-text">' + spanData + "</div>";
              firstParent[j].children[0].innerHTML = result;
            }
          }
        }
      }, 10);
    }
  }, []);

  const openData = (data) => {
    setAccordion(data);
  };
  const openSubData = (data) => {
    setSubAccordion(data);
  };
  const closeCanvas = () => {
    ofCanvasArea.current.style.opacity = "0";
    ofCanvasArea.current.style.visibility = "hidden";
    if (bladeMode) {
      let header_bg = bladeMode;
      header_bg.style.setProperty("mix-blend-mode", "exclusion");
    }
  };
  return (
    <>
      <div className="offcanvas__area" ref={ofCanvasArea}>
        <div className="offcanvas__body">
          <div className="offcanvas__left">
            <div className="offcanvas__logo">
              <Link href="/home">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={logoWhite2}
                  alt="Offcanvas Logo"
                />
              </Link>
            </div>
            <div className="offcanvas__social" style={{ paddingTop: "135px" }}>
              <h3 className="social-title">{t("canvasFollowUs")}</h3>
              <ul>
                <li>
                  <a href="https://www.instagram.com/dhsolutions.official/">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/dhsolutions.official/">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://pk.linkedin.com/company/dhsolutionspakistan">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="offcanvas__mid">
            <div
              className="offcanvas__menu-wrapper"
              style={{ display: "flex", alignItems: "center", height: "100vh" }}
            >
              <nav className="offcanvas__menu">
                <ul className="menu-anim title" ref={headerTitle}>
                  <li>
                    <div className="header_title">
                      <Link href={"/home"}>{t("navHome")}</Link>
                    </div>

                    <div className="header_title">
                      <Link href={"/about"}>{t("navAbout")}</Link>
                    </div>

                    <div className="header_title">
                      <Link href={"/service-v5"}>{t("navServices")}</Link>
                    </div>

                    <div className="header_title">
                      <Link href={"/portfolio"}>{t("navPortfolio")}</Link>
                    </div>

                    <div className="header_title">
                      <Link href={"/team"}>{t("navTeam")}</Link>
                    </div>

                    <div className="header_title">
                      <Link href={"/career"}>{t("navCareers")}</Link>
                    </div>

                    <div className="header_title">
                      <Link href={"/blog/"}>{t("navBlog")}</Link>
                    </div>

                    <div className="header_title">
                      <Link href={"/contact"}>{t("navContact")}</Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="offcanvas__right">
            <div
              className="offcanvas__contact"
              style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3>{t("canvasGetInTouch")}</h3>
              <ul>
                <li>
                  <a href="https://wa.me/19255589107">(+1) 925 558 9107</a>
                </li>
                <li>
                  <a href="mailto:hello@dhsol.net">hello@dhsol.net</a>
                </li>
                <li>{t("canvasAddress")}</li>
              </ul>
            </div>
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={Shape11}
              alt="shape"
              className="shape-1"
            />
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={Shape12}
              alt="shape"
              className="shape-2"
            />
          </div>
          <div className="offcanvas__close">
            <button type="button" onClick={closeCanvas}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;
