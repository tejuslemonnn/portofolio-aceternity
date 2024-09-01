import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/app/data";
import Image from "next/image";
function Footer() {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:vrd5nj@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-end items-center">

        <div className="flex items-center md:gap-3 gap-6 md:mt-0 lg:mt-0 mt-5">
          {socialMedia.map((profile) => (
            <a
            target="_blank"
            href={profile.url}
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-lg border-black-300"
            >
              <Image  src={profile.img} alt={profile.img} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
