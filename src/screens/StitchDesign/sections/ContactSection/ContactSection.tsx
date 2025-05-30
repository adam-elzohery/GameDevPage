import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import React from "react";

export const ContactSection = (): JSX.Element => {
  // Social media links data
  const socialLinks = [
    { icon: <FacebookIcon className="h-6 w-6 text-[#96c4a8]" />, url: "#" },
    { icon: <TwitterIcon className="h-6 w-6 text-[#96c4a8]" />, url: "#" },
    { icon: <InstagramIcon className="h-6 w-6 text-[#96c4a8]" />, url: "#" },
  ];

  // Footer links data
  const footerLinks = [
    { text: "Privacy Policy", url: "#" },
    { text: "Terms of Service", url: "#" },
  ];

  return (
    <footer className="flex items-start justify-center w-full">
      <div className="flex flex-col max-w-[960px] items-start flex-1">
        <div className="flex flex-col items-start gap-4 md:gap-6 px-4 md:px-5 py-6 md:py-10 w-full">
          {/* Footer links */}
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-[24px] w-full">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="w-full md:w-40 flex items-center justify-center"
              >
                <span className="[font-family:'Spline_Sans',Helvetica] font-normal text-[#96c4a8] text-sm md:text-base text-center leading-6">
                  {link.text}
                </span>
              </a>
            ))}
          </div>

          {/* Social media icons */}
          <div className="flex flex-wrap items-start justify-center gap-4 w-full">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="inline-flex items-center"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright text */}
          <div className="flex items-center w-full justify-center">
            <p className="[font-family:'Spline_Sans',Helvetica] font-normal text-[#96c4a8] text-sm md:text-base text-center leading-6">
              © 2024 GameDev Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
