import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
/// <reference types="vite/client" />

export const SocialMediaSection = ({ id }: { id?: string }): JSX.Element => {
  // Data for game cards to enable mapping
  const gameCards = [
    {
      id: 1,
      title: "Realm of Legends",
      description:
        "Embark on an epic journey in a world of magic and mythical creatures.",
      imageUrl: `${import.meta.env.BASE_URL}depth-7--frame-0.png`,
    },
    {
      id: 2,
      title: "Starfall Odyssey",
      description:
        "Explore the vastness of space in this thrilling sci-fi adventure.",
      imageUrl: `${import.meta.env.BASE_URL}depth-7--frame-0-1.png`,
    },
    {
      id: 3,
      title: "Mystic Quest",
      description:
        "Uncover ancient secrets and solve puzzles in this captivating adventure game.",
      imageUrl: `${import.meta.env.BASE_URL}depth-7--frame-0-2.png`,
    },
  ];

  return (
    <section id={id} className="w-full">
      <section className="w-full pt-5 pb-3 px-4">
        <h2 id = {"latest-games"} className="[font-family:'Spline_Sans',Helvetica] font-bold text-white text-[22px] leading-7">
          Latest Games
        </h2>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
        {gameCards.map((game) => (
          <Card
            key={game.id}
            className="rounded-lg bg-transparent border-0"
          >
            <CardContent className="p-0 flex flex-col gap-4">
              <div
                className="w-full aspect-[16/9] rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${game.imageUrl})` }}
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-medium text-white text-base leading-6 font-sans">
                  {game.title}
                </h3>
                <p className="font-normal text-[#96c4a8] text-sm leading-[21px] font-sans">
                  {game.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
