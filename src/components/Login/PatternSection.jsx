import React from "react";

const PatternSection = () => {
  return (
    <>
      <div className="absolute top-10 right-2 md:right-20 lg:top-14 lg:right-[15.5rem] xl:top-5 xl:right-[23.5rem] 2xl:right-[31.5rem] 2xl:top-0 min-[1920px]:right-[43.5rem] min-[1920px]:top-[6.5rem] -z-10">
        <img src="/PolkaDotPattern.svg" alt="" />
      </div>
      <div className="absolute bottom-4 -left-12 md:bottom-5 md:left-20 lg:left-60 lg:bottom-10 xl:bottom-0 xl:left-[23rem] 2xl:left-[31rem] min-[1920px]:left-[43rem] min-[1920px]:bottom-[5rem] -z-10 bg-bgPattern p-8 rounded-xl">
        <img src="/PolkaDotPattern.svg" alt="" />
      </div>
    </>
  );
};

export default PatternSection;
