import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="bg-[#3944bc] text-white">
      <div className="flex flex-col md:flex-row justify-between px-4 sm:px-6 lg:px-16 py-6">
        <p className="text-xl font-semibold text-center md:text-left">
          &copy; {date} - All rights reserved by Tanushri Das
        </p>
        <div className="flex justify-center md:justify-start items-center gap-x-3 mt-6 md:mt-0">
          <a
            className="social-link"
            href="https://www.linkedin.com/in/tanushri-das-06a520194/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            className="social-link"
            href="https://www.facebook.com/tanushri.das01?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            className="social-link"
            href="https://www.youtube.com/watch?v=ZvggB9FT4gM&ab_channel=MuseumofFineArts%2CBoston"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
