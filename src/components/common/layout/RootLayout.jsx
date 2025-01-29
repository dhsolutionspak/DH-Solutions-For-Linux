"use client";

import { useEffect, useRef, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import { loadMessages } from "@/lib/utils/loadMessages";
import Cookies from "js-cookie";

import allNavData from "../../../data/navData.json";
import Preloader from "@/components/preloader/Preloader";

// IMPORTANT: import CommonAnimation
import CommonAnimation from "../CommonAnimation";

import ScrollSmootherComponents from "../ScrollSmootherComponents";
import CursorAnimation from "../CursorAnimation";
import Switcher from "../Switcher";
import ScrollTop from "../ScrollTop";
import Header1 from "@/components/header/Header1";
import Header2 from "@/components/header/Header2";
import Header3 from "@/components/header/Header3";
import Header4 from "@/components/header/Header4";
import Header5 from "@/components/header/Header5";
import Footer1 from "@/components/footer/Footer1";

const HeaderContent = ({ header, navData }) => {
  switch (header) {
    case "header1":
      return <Header1 navData={navData} />;
    case "header2":
      return <Header2 navData={navData} />;
    case "header3":
      return <Header3 />;
    case "header4":
      return <Header4 navData={navData} />;
    case "header5":
      return <Header5 />;
    case "none":
      return null;
    default:
      return <Header3 />;
  }
};

export default function RootLayout({
  children,
  header = "",
  defaultMode = "",
}) {
  const [mode, setMode] = useState(defaultMode);

  // Locale and Messages
  const [locale, setLocale] = useState(() => {
    if (typeof window !== "undefined") {
      return Cookies.get("locale") || "en";
    }
    return "en"; // fallback for SSR
  });

  const [messages, setMessages] = useState(null);
  const [navData, setNavData] = useState({});
  const cursor1 = useRef();
  const cursor2 = useRef();

  // Load navigation data
  useEffect(() => {
    setNavData(allNavData);
  }, []);

  // Load translation messages whenever locale changes
  useEffect(() => {
    let isMounted = true;
    const fetchMessages = async () => {
      const loaded = await loadMessages(locale);
      if (isMounted) {
        setMessages(loaded);
      }
    };
    fetchMessages();
    return () => {
      isMounted = false;
    };
  }, [locale]);

  // Update locale cookie whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentCookie = Cookies.get("locale");
      if (locale && locale !== currentCookie) {
        Cookies.set("locale", locale, {
          expires: 1,
          sameSite: "strict",
          path: "/",
        });
      }
    }
  }, [locale]);

  // Dark mode effect
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (mode === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  }, [mode]);

  // RTL / LTR toggle and font-family for Arabic
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute(
        "dir",
        locale === "ar" ? "rtl" : "ltr"
      );
      document.documentElement.setAttribute("lang", locale);

      // Apply Tajawal font for Arabic
      if (locale === "ar") {
        document.body.style.fontFamily = "'Tajawal', serif";
      } else {
        document.body.style.fontFamily = "";
      }
    }
  }, [locale]);

  // If messages are still loading, show a fallback
  if (!messages) {
    return <Preloader />;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {/* Pass the locale to CommonAnimation so it can skip text-splitting for Arabic */}
      <CommonAnimation locale={locale}>
        <div className="has-smooth" id="has_smooth"></div>
        <ScrollSmootherComponents />
        <div className="cursor" id="team_cursor">
          Drag
        </div>
        <Preloader />
        <CursorAnimation cursor1={cursor1} cursor2={cursor2} />

        <Switcher
          setMode={setMode}
          mode={mode}
          cursor1={cursor1}
          cursor2={cursor2}
          locale={locale}
          setLocale={setLocale}
        />

        <ScrollTop />

        <HeaderContent header={header} navData={navData} />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <Footer1 />
          </div>
        </div>
      </CommonAnimation>
    </NextIntlClientProvider>
  );
}
