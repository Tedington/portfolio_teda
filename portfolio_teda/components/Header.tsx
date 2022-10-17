import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <div>
        <SocialIcon
          url="https://twitter.com/Temitope_Dansa"
          fgColor="grey"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://twitter.com/Temitope_Dansa"
          fgColor="grey"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://twitter.com/Temitope_Dansa"
          fgColor="grey"
          bgColor="transparent"
        />
      </div>

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="grey"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </div>
    </header>
  );
}

export default Header;
