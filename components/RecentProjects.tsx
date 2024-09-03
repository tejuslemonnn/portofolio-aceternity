import { projects } from "@/app/data";
import React from "react";
import { PinContainer } from "./ui/3dPin";
import { FaLocationArrow } from "react-icons/fa";

function RecentProjects() {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            {link === 'INTERNAL COMPANY APP' ? (
  <PinContainer key={id} title={link} href={link}>
    <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10">
      <div className="absolute w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
        <img src="/bg.png" alt="/bg.png" />
      </div>
      <img
        src={img}
        alt={title}
        className="z-10 bottom-0 h-[95%] w-[95%] lg:rounded-xl object-cover"
      />
    </div>

    <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1">
      {title}
    </h1>

    <p className="lg:text-md lg:font-normal font-light text-sm line-clamp-3">
      {des}
    </p>

    <div className="flex items-center justify-between mt-7 mb-3">
      <div className="flex items-center">
        {iconLists.map((icon, index) => (
          <div
            key={icon}
            className="border border-white/[0.2] rounded-full bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center gap-1"
            style={{
              transform: `translateX(-${5 * index * 2}px)`,
            }}
          >
            <img src={icon} alt={icon} className="p-2" />
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center items-center">
        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
          Check Live Site
        </p>
        <FaLocationArrow className="ms-3" color="#CBACF9" />
      </div> */}
    </div>
  </PinContainer>
) : (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <PinContainer key={id} title={link} href={link}>
      <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10">
        <div className="absolute w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
          <img src="/bg.png" alt="/bg.png" />
        </div>
        <img
          src={img}
          alt={title}
          className="z-10 bottom-0 h-[95%] w-[95%] lg:rounded-xl object-cover"
        />
      </div>

      <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1">
        {title}
      </h1>

      <p className="lg:text-md lg:font-normal font-light text-sm line-clamp-3">
        {des}
      </p>

      <div className="flex items-center justify-between mt-7 mb-3">
        <div className="flex items-center">
          {iconLists.map((icon, index) => (
            <div
              key={icon}
              className="border border-white/[0.2] rounded-full bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center gap-1"
              style={{
                transform: `translateX(-${5 * index * 2}px)`,
              }}
            >
              <img src={icon} alt={icon} className="p-2" />
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center items-center">
          <p className="flex lg:text-xl md:text-xs text-sm text-purple">
            Check Live Site
          </p>
          <FaLocationArrow className="ms-3" color="#CBACF9" />
        </div> */}
      </div>
    </PinContainer>
  </a>
)}

          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;
