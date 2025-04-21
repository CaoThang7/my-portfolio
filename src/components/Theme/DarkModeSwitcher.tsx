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
    <div className="w-[45px] h-[30px] rounded-full flex justify-center items-center fixed bottom-[90px] right-6 z-[999] cursor-pointer">
      {colorMode === "light" ? (
        <i
          className="fa-solid fa-moon text-black text-[2rem] [text-shadow:0_0_10px_#162052]"
          onClick={handleMoonClick}
        ></i>
      ) : (
        <i
          className="fa-solid fa-sun text-white text-[2rem] [text-shadow:0_0_10px_white]"
          onClick={handleSunClick}
        ></i>
      )}
    </div>
  );
};

export default DarkModeSwitcher;
