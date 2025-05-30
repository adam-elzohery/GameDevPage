import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ClientReviewsSection } from "./sections/ClientReviewsSection";
import { ContactSection } from "./sections/ContactSection";
import { LatestGamesSection } from "./sections/LatestGamesSection";
import { OurTeamSection } from "./sections/OurTeamSection";
import { SocialMediaSection } from "./sections/SocialMediaSection";
/// <reference types="vite/client" />

export const StitchDesign = (): JSX.Element => {
  // Social media images data
  const socialMediaImages = [
    { id: 1, backgroundUrl: `${import.meta.env.BASE_URL}depth-7--frame-0-3.png` },
    { id: 2, backgroundUrl: `${import.meta.env.BASE_URL}depth-7--frame-0-4.png` },
    { id: 3, backgroundUrl: `${import.meta.env.BASE_URL}depth-7--frame-0-5.png` },
  ];

  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col w-full min-h-[800px] bg-[#112116]">
        <div className="flex flex-col w-full">
          <AboutUsSection />

          <main className="flex justify-center px-4 md:px-8 lg:px-40 py-5 w-full">
            <div className="flex flex-col max-w-[960px] w-full">
              <LatestGamesSection />

              <SocialMediaSection />

              <section className="w-full pt-5 pb-3 px-4">
                <h2 className="[font-family:'Spline_Sans',Helvetica] font-bold text-white text-[22px] leading-7">
                  About Us
                </h2>
              </section>

              <section className="w-full pt-1 pb-3 px-4">
                <p className="[font-family:'Spline_Sans',Helvetica] font-normal text-white text-base leading-6">
                  At GameDev Studio, we believe in the power of storytelling and
                  immersive gameplay. Our team of talented developers, artists,
                  and designers work tirelessly to bring our visions to life. We
                  are committed to pushing the boundaries of game development
                  and creating experiences that resonate with players worldwide.
                </p>
              </section>

              <section className="w-full pt-5 pb-3 px-4">
                <h2 className="[font-family:'Spline_Sans',Helvetica] font-bold text-white text-[22px] leading-7">
                  Our Team
                </h2>
              </section>

              <OurTeamSection />

              <section className="w-full pt-5 pb-3 px-4">
                <h2 className="[font-family:'Spline_Sans',Helvetica] font-bold text-white text-[22px] leading-7">
                  Social Media
                </h2>
              </section>

              <section className="w-full p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {socialMediaImages.map((image) => (
                    <div
                      key={image.id}
                      className="w-full aspect-square max-w-[301px] max-h-[301px] mx-auto rounded-xl overflow-hidden bg-[#7da09e] flex items-center justify-center"
                    >
                      <img
                        src={image.backgroundUrl}
                        alt={"Social Media " + image.id}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>

              <section className="w-full pt-5 pb-3 px-4">
                <h2 className="[font-family:'Spline_Sans',Helvetica] font-bold text-white text-[22px] leading-7">
                  Client Reviews
                </h2>
              </section>

              <ClientReviewsSection />

              <section className="w-full pt-5 pb-3 px-4">
                <h2 className="[font-family:'Spline_Sans',Helvetica] font-bold text-white text-[22px] leading-7">
                  Contact
                </h2>
              </section>

              <div className="flex flex-wrap max-w-[480px] gap-4 px-4 py-3">
                <div className="flex-1 min-w-[200px]">
                  <Input
                    className="h-14 bg-[#264433] text-[#96c4a8] [font-family:'Spline_Sans',Helvetica] rounded-xl border-0 placeholder:text-[#96c4a8] focus-visible:ring-[#96c4a8] focus-visible:ring-1"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="w-full px-4 py-3">
                <Button className="w-[84px] h-10 bg-[#38e07a] hover:bg-[#38e07a]/90 text-[#112116] rounded-[20px] [font-family:'Spline_Sans',Helvetica] font-bold text-sm transition-none">
                  Submit
                </Button>
              </div>
            </div>
          </main>

          <ContactSection />
        </div>
      </div>
    </div>
  );
};