"use client";
import { useState, useEffect } from "react";
import { useTranslation, Trans, i18n } from "next-i18next";
import "./locales/config";
import Landing from "./(components)/Landing";
import Question from "./(components)/Question";

export default function Home() {
  const { t } = useTranslation("translation");

  const maxPageNo = 13;
  const [posX, setposX] = useState(0);
  const [pageNo, setPageNo] = useState(1);

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  function shiftBackgroundForward(e: React.MouseEvent) {
    if (pageNo < maxPageNo) {
      setPageNo(pageNo + 1);
      setposX(-(width * pageNo));
    }
  }

  function shiftBackgroundBackward(e: React.MouseEvent) {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
      setposX(-(width * (pageNo - 2)));
    }
  }

  return (
    <main
      className="h-screen gradient-bg transition ease-in-out pt-8 px-6"
      style={{
        backgroundPosition: `${posX}px 0`,
        backgroundSize: `${width * maxPageNo}px 100vh`,
      }}
    >
      <Landing
        shiftBackgroundForward={shiftBackgroundForward}
        pageNo={pageNo}
      />
      {/* <Question
        shiftBackgroundForward={shiftBackgroundForward}
        shiftBackgroundBackward={shiftBackgroundBackward}
        pageNo={pageNo}
      /> */}
    </main>
  );
}
