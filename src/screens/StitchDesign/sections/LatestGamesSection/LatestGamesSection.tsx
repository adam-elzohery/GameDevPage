import React from "react";
import { Button } from "../../../../components/ui/button";
/// <reference types="vite/client" />

export const LatestGamesSection = ({ id }: { id?: string }): JSX.Element => {
  return (
    <section id={id} className="w-full">
      <div className="p-4">
        <div className="w-full overflow-hidden rounded-xl">
          <div
            className="flex flex-col items-center justify-end h-[300px] sm:h-[400px] md:h-[480px] w-full bg-cover bg-center text-center px-4"
            style={{
              backgroundImage:
                `linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%), url(${import.meta.env.BASE_URL}depth-6--frame-0.png)`,
            }}
          >
            <div className="w-[100%] mx-auto mb-8 md:mb-12 space-y-2">
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-[-2px] leading-[1.2] md:leading-[60px] font-['Spline_Sans',Helvetica]">
                Crafting Immersive Worlds
              </h2>
              <p className="text-sm sm:text-base text-white font-['Spline_Sans',Helvetica] leading-6">
                We are a passionate team of game developers dedicated to
                creating unforgettable gaming experiences. Explore our latest
                titles and join us on our journey.
              </p>
              <div className="pt-4 md:pt-6">
                <Button
                  className="bg-[#38e07a] text-[#112116] hover:bg-[#38e07a]/90 rounded-3xl px-5 h-10 md:h-12 font-bold font-['Spline_Sans',Helvetica] transition-none"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("latest-games")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore Games
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};