"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const DigitalAgencyHero = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations();
  const locale = useLocale();

  // Video sources and corresponding titles/subtitles
  const videoSources = [
    {
      video: "/assets/video/1.mp4",
      title: "Innovating the Future",
      subtitle: "Shaping tomorrow with cutting-edge solutions.",
    },
    {
      video: "/assets/video/2.mp4",
      title: "AI-Powered Systems",
      subtitle: "Transforming industries with advanced technology.",
    },
    {
      video: "/assets/video/3.mp4",
      title: "High-Tech Revolution",
      subtitle: "Leading the digital transformation globally.",
    },
  ];

  // Function to change video index every 4 seconds
  useEffect(() => {
    setIsClient(true);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    }, 4000); // Change video every 4 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Handle GSAP animation
  useEffect(() => {
    if (locale === "ar") {
      return;
    }

    let ctx = gsap.context(() => {
      gsap.set(".custom-experience", { y: 50, opacity: 0 });

      let heroTitle = document.querySelector(".custom-hero__title");
      let heroSubtitle = document.querySelector(".custom-hero__sub-title");

      let splitHeroTitle = new SplitText(heroTitle, { type: "chars" });
      let splitHeroSubtitle = new SplitText(heroSubtitle, { type: "chars words" });

      gsap.from(splitHeroTitle.chars, {
        duration: 1,
        x: 70,
        autoAlpha: 0,
        stagger: 0.1,
      });

      gsap.from(splitHeroSubtitle.words, {
        duration: 1,
        x: 50,
        autoAlpha: 0,
        stagger: 0.05,
      });

      gsap.to(".custom-experience", {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, [locale]);

  return (
    <>
      <section className="custom-hero__area">
        {/* Background Video Slider */}
        <div className="custom-background-video">
          {isClient && (
            <video key={currentIndex} className="background-video" autoPlay muted loop playsInline>
              <source src={videoSources[currentIndex].video} />
              {t("vidErrorMsg")}
            </video>
          )}
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="custom-hero__content animation__hero_one">
                <Link href="/service-v5">
                  {t("strategyHero")}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
                <div className="custom-hero__title-wrapper">
                  <h1 className="custom-hero__title">
                    {videoSources[currentIndex].title}
                  </h1>
                  <p className="custom-hero__sub-title">
                    {videoSources[currentIndex].subtitle}
                  </p>
                </div>

                <div className="custom-experience">
                  <h2 className="title">{t("digitalAgencyHeroExpNumber")}</h2>
                  <p className="custom-exp-para">
                    {t("projectComplete")} <br />
                    {t("Succesfully")}
                  </p>
                </div>
                <div className="cursor-btn btn_wrapper">
                  <Link className="btn-item wc-btn-primary btn-hover" href="/contact">
                    <span></span> {t("meetingBtn")}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots indicating the current video */}
        <div className="video-dots">
          {videoSources.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Style block with backticks */}
      <style jsx>{`
        .custom-background-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1; /* Send the video to the background */
        }

        .background-video {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ensures the video covers the entire area without distortion */
        }

        .custom-hero__area {
          position: relative;
          overflow: hidden;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .custom-hero__content {
          position: relative;
          z-index: 1;
        }

        .custom-hero__title-wrapper {
          margin-bottom: 20px;
        }

        .custom-hero__title {
          font-size: 7rem;
          font-weight: bold;
          color: #ffffff;
        }

        @media (max-width: 768px) {
         .custom-hero__title {
         font-size: 4rem; /* Adjust font size for mobile */
    }
  }

        .custom-hero__sub-title {
          font-weight: 400;
          font-size: 25px;
          line-height: 1.4;
          color: #ffffff;
          max-width: 620px;
        }

        .custom-experience {
          position: absolute;
          bottom: 0;
          right: 3%;
          color: #fff;
          font-size: 2rem;
        }

        .title {
          font-size: 3rem;
          font-weight: semibold;
          margin-bottom: 10px;
          color: #fff;
        }

        .custom-exp-para {
          color: #fff;
          font-size: 1.5rem;
        }

        @media (max-width: 768px) {
    .custom-exp-para {
          color: #fff;
          font-size: 15px;
        }
  }

        /* Dots for video slider */
        .video-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
        }

        .dot {
          width: 12px;
          height: 12px;
          background-color: #fff;
          border-radius: 50%;
          opacity: 0.5;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .dot.active {
          opacity: 1;
          background-color: #ff3131; /* Active dot color */
        }

        .dot:hover {
          opacity: 0.8;
        }

        /* Responsive styles omitted for brevity */
      `}</style>
    </>
  );
};

export default DigitalAgencyHero;
