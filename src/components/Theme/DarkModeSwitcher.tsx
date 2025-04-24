"use client";

import useColorMode from "@/hooks/useColorMode";

const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();

  const handleSunClick = () => {
    setColorMode("light");
  };

  const handleMoonClick = () => {
    setColorMode("dark");
  };

  return (
    <div className="w-[45px] h-[30px] rounded-full flex justify-center items-center fixed bottom-[90px] right-4 z-[999] cursor-pointer">
      {colorMode === "light" ? (
        <i
          className="fa-solid fa-moon text-[var(--text-primary)] text-[2rem] [text-shadow:0_0_10px_var(--shadow-color)]"
          onClick={handleMoonClick}
        ></i>
      ) : (
        <i
          className="fa-solid fa-sun text-[var(--text-primary)] text-[2rem] [text-shadow:0_0_10px_var(--shadow-color)]"
          onClick={handleSunClick}
        ></i>
      )}
    </div>
  );
};

export default DarkModeSwitcher;
