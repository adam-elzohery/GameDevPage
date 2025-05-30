/// <reference types="vite/client" />

import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const AboutUsSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { title: "Games", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
  ];

  return (
    <header className="flex items-center justify-between px-10 py-3 border-b border-[#e5e8ea] w-full">
      {/* Logo and Brand Name */}
      <div className="flex items-center gap-4">
        <div className="w-4 h-4 relative">
          <img
            className="absolute w-[13px] h-[13px] top-px left-px"
            alt="Logo"
            src={`${import.meta.env.BASE_URL}vector---0-1.svg`}
          />
        </div>
        <h1 className="font-bold text-white text-lg font-['Spline_Sans',Helvetica]">
          GameDev Studio
        </h1>
      </div>

      {/* Navigation and Actions */}
      <div className="flex items-center justify-end gap-8 flex-1">
        {/* Navigation Links */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-9">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuLink
                  className="font-['Spline_Sans',Helvetica] font-medium text-white text-sm hover:text-white/80 transition-none"
                  href={link.href}
                >
                  {link.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Play Now Button */}
          <Button 
            type="button"
            className="h-10 px-4 py-0 bg-[#38e07a] hover:bg-[#38e07a] rounded-[20px] font-['Spline_Sans',Helvetica] font-bold text-[#112116] text-sm transition-none"
            onClick={() => {}}
          >
            Play Now
          </Button>

          {/* Icon Button */}
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 bg-[#264433] rounded-[20px] p-2.5 border-0 hover:bg-[#264433] transition-none"
          >
            <div className="w-full h-full" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}vector---0-4.svg)`, backgroundSize: '100% 100%' }} />
          </Button>
        </div>

        {/* Dark Mode Button */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="w-10 h-10 rounded-[20px] border-0 bg-[#264433] hover:bg-[#264433]/90 transition-colors cursor-pointer"
          onClick={() => {}}
        >
          <div className="w-full h-full" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}depth-4--frame-2.svg)`, backgroundSize: 'cover', backgroundPosition: '50% 50%' }} />
        </Button>
      </div>
    </header>
  );
};