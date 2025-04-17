import DarkModeSwitcher from "@/components/Theme/DarkModeSwitcher";

const Home = () => {
  return (
    <>
      <DarkModeSwitcher />
      <div className="w-full max-w-[1024px] min-h-screen bg-[var(--bgColor)] absolute top-0 left-1/2 -translate-x-1/2 px-[15px] overflow-hidden">
        {/* Content here */}
      </div>
    </>
  );
};

export default Home;
