"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "use-intl";

import KuwaitImage from "/public/assets/imgs/location/kuwait.png";
import pakistanImage from "/public/assets/imgs/location/map.png";
import saudiImage from "/public/assets/imgs/location/saudi-arabia.png";
import USACalifornia from "/public/assets/imgs/location/statue-of-liberty.png";
import USAYoming from "/public/assets/imgs/location/usa.png";
import UnitedKingdom from "/public/assets/imgs/location/united-kingdom.png";

const Location = () => {
  const t = useTranslations();

  return (
    <section className="location-section">
      <h1>{t("locationTitle")}</h1>
      <div className="card-grid">
        {/* Card 1 - Pakistan */}
        <div className="card">
          <div className="card-image">
            <Image
              src={pakistanImage}
              alt={t("locationPakistanTitle")}
              width={50}
              height={50}
            />
          </div>
          <h3>{t("locationPakistanTitle")}</h3>
          <p>{t("locationPakistanAddress")}</p>
        </div>

        {/* Card 2 - Kuwait */}
        <div className="card">
          <div className="card-image">
            <Image
              src={KuwaitImage}
              alt={t("locationKuwaitTitle")}
              width={50}
              height={50}
            />
          </div>
          <h3>{t("locationKuwaitTitle")}</h3>
          <p>{t("locationKuwaitAddress")}</p>
        </div>

        {/* Card 3 - USA California */}
        <div className="card">
          <div className="card-image">
            <Image
              src={USACalifornia}
              alt={t("locationUSACaliTitle")}
              width={50}
              height={50}
            />
          </div>
          <h3>{t("locationUSACaliTitle")}</h3>
          <p>{t("locationUSACaliAddress")}</p>
        </div>

        {/* Card 4 - Saudi Arabia */}
        <div className="card">
          <div className="card-image">
            <Image
              src={saudiImage}
              alt={t("locationSaudiTitle")}
              width={50}
              height={50}
            />
          </div>
          <h3>{t("locationSaudiTitle")}</h3>
          <p>{t("locationSaudiAddress")}</p>
        </div>

        {/* Card 5 - USA Wyoming */}
        <div className="card">
          <div className="card-image">
            <Image
              src={USAYoming}
              alt={t("locationUSAWyomingTitle")}
              width={50}
              height={50}
            />
          </div>
          <h3>{t("locationUSAWyomingTitle")}</h3>
          <p>{t("locationUSAWyomingAddress")}</p>
        </div>

        {/* Card 6 - United Kingdom */}
        <div className="card">
          <div className="card-image">
            <Image
              src={UnitedKingdom}
              alt={t("locationUKTitle")}
              width={50}
              height={50}
            />
          </div>
          <h3>{t("locationUKTitle")}</h3>
          <p>{t("locationUKAddress")}</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
