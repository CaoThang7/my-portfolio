"use client";
import { useEffect, useRef, useState } from "react";

const Progress = () => {
  const [scroll, setScroll] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);

  const updateScrollProgress = () => {
    const pos = document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);
    setScroll(scrollValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    window.addEventListener("load", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("load", updateScrollProgress);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="w-[45px] h-[45px] rounded-full fixed bottom-6 right-4 z-[999] cursor-pointer shadow-[0_0_10px_var(--whiteColor)] flex items-center justify-center"
      style={{
        background: `conic-gradient(#38bdf8 ${scroll}%, #0f172a ${scroll}%)`,
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div
        ref={valueRef}
        className="w-[calc(100%-5px)] h-[calc(100%-5px)] bg-[#111] rounded-full flex items-center justify-center text-white"
      >
        {scroll}%
      </div>
    </div>
  );
};

export default Progress;
