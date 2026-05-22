import { Flex } from "@chakra-ui/react";
import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center border-t border-white/10 bg-black text-white">
      <div className="w-full flex max-w-7xl flex-col gap-2 mg:gap-10 !p-4 md:!p-6 py-12 md:flex-row md:items-center md:justify-between">
        {/* Left Side */}
        <Flex gap={2} justifyContent={"space-between"}>
          <div className="space-y-4">
            <h2 className="!text-lg md:!text-2xl !font-semibold !tracking-tight">
              Sife Mahmud Simon
            </h2>

            <p className="max-w-md !text-sm !leading-relaxed !text-gray-400">
              Software Engineer
            </p>
          </div>
          <div className="flex md:hidden justify-end  items-center gap-3 pt-2">
            {[
              {
                icon: <FaFacebookF size={14} />,
                href: "https://facebook.com",
              },
              {
                icon: <FaInstagram size={14} />,
                href: "https://instagram.com",
              },
              {
                icon: <FaLinkedinIn size={14} />,
                href: "https://linkedin.com",
              },
              {
                icon: <FaGithub size={14} />,
                href: "https://github.com",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 md-h-10 md:w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-[#916CE7] hover:bg-[#916CE7] hover:text-black"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </Flex>

        {/* Right Side */}
        <div className="space-y-3 text-sm text-gray-400  md:text-right">
          <div className="hidden md:flex justify-end  items-center gap-3 pt-2">
            {[
              {
                icon: <FaFacebookF size={14} />,
                href: "https://facebook.com",
              },
              {
                icon: <FaInstagram size={14} />,
                href: "https://instagram.com",
              },
              {
                icon: <FaLinkedinIn size={14} />,
                href: "https://linkedin.com",
              },
              {
                icon: <FaGithub size={14} />,
                href: "https://github.com",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 md-h-10 md:w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-[#916CE7] hover:bg-[#916CE7] hover:text-black"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p>
            Email:{" "}
            <a
              href="mailto:sifemahmudsimon@gmail.com"
              className="transition hover:text-[#916CE7]"
            >
              sifemahmudsimon@gmail.com
            </a>
          </p>

          <p>
            Phone:{" "}
            <a
              href="tel:+8801728337711"
              className="transition hover:text-[#916CE7]"
            >
              +88 01728 337711
            </a>
          </p>

          <p className="pt-4 !text-xs text-gray-500">
            © {new Date().getFullYear()} Simon Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
