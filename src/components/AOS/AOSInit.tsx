"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      // once: true, //Only run once.
      once: false, //Run many times
    });
  }, []);

  return null;
}
