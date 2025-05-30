/// <reference types="vite/client" />

import React, { useState, useEffect, useRef } from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export const AboutUsSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const lastShowY = useRef(0);

  // Navigation links data
  const navLinks = [
    { title: "Games", href: "#latest-games", onClick: (e: React.MouseEvent) => { e.preventDefault(); document.getElementById("latest-games")?.scrollIntoView({ behavior: "smooth" }); } },
    { title: "About", href: "#about", onClick: (e: React.MouseEvent) => { e.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); } },
    { title: "Contact", href: "#contact", onClick: (e: React.MouseEvent) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); } },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let ticking = false;
    const threshold = 10;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY <= threshold) {
            setIsVisible(true);
          } else if (currentScrollY < lastScrollY.current) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY.current) {
            setIsVisible(false);
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between min-w-0 px-1 sm:px-2 md:px-4 py-2 md:py-3 border-b border-[#e5e8ea] w-full transition-transform duration-300 bg-[#112116] ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Logo and Brand Name */}
      <div className="flex items-center gap-1 md:gap-4">
        <div className="w-4 h-4 relative">
          <img
            className="absolute w-[13px] h-[13px] top-px left-px"
            alt="Logo"
            src={`${import.meta.env.BASE_URL}vector---0-1.svg`}
          />
        </div>
        <h1 className="font-bold text-white text-xs sm:text-base md:text-lg font-['Spline_Sans',Helvetica]">
          GameDev Studio
        </h1>
      </div>

      {/* Navigation and Actions */}
      <div className="flex items-center justify-end gap-1 md:gap-8">
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-6 md:gap-9">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuLink
                  className="font-['Spline_Sans',Helvetica] font-medium text-white text-xs md:text-sm hover:text-white/80 transition-none"
                  href={link.href}
                  onClick={link.onClick}
                >
                  {link.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 md:gap-2">
          {/* Play Now Button */}
          <Button 
            type="button"
            className="h-7 w-auto md:h-10 px-2 md:px-4 py-0 bg-[#38e07a] hover:bg-[#38e07a]/90 rounded-[20px] font-['Spline_Sans',Helvetica] font-bold text-[#112116] text-xs md:text-sm transition-none"
            onClick={() => {}}
          >
            Play Now
          </Button>

          {/* Icon Button */}
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7 md:h-10 md:w-10 bg-[#264433] rounded-full p-1.5 md:p-2.5 border-0 hover:bg-[#264433] transition-none"
          >
            <div className="w-full h-full" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}vector---0-4.svg)`, backgroundSize: '100% 100%' }} />
          </Button>
        </div>

        {/* Dark Mode Button */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="w-7 h-7 md:w-10 md:h-10 rounded-full border-0 bg-[#264433] hover:bg-[#264433]/90 transition-colors cursor-pointer"
        >
          <div className="w-full h-full" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}depth-4--frame-2.svg)`, backgroundSize: 'cover', backgroundPosition: '50% 50%' }} />
        </Button>

        {/* Mobile Menu Button */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="md:hidden w-7 h-7 rounded-full border-0 bg-[#264433] hover:bg-[#264433]/90 transition-colors cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
          ) : (
            <Menu className="w-4 h-4 md:w-5 md:h-5 text-white" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[52px] md:top-[60px] left-0 right-0 bg-[#112116] border-b border-[#e5e8ea] md:hidden z-50">
          <div className="flex flex-col px-3 md:px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="py-2 font-['Spline_Sans',Helvetica] font-medium text-white text-sm hover:text-white/80 transition-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};