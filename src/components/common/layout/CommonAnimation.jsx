"use client";
import { useEffect } from "react";
// If you are using GSAP for text-splitting:
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function CommonAnimation({ children, locale }) {
  useEffect(() => {
    // Only run letter-by-letter splitting for non-Arabic languages
    if (locale !== "ar") {
      // Example text-splitting code:
      const split = new SplitText(".split-text", { type: "words, chars" });
      gsap.from(split.chars, {
        // any animation you want
        opacity: 0,
        y: 20,
        stagger: 0.02,
        duration: 0.5,
      });
    }
  }, [locale]);

  return <>{children}</>;
}
