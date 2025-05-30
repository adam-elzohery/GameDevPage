import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
/// <reference types="vite/client" />

export const SocialMediaSection = (): JSX.Element => {
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
    <section className="w-full">
      <div className="flex flex-wrap gap-3 p-4">
        {gameCards.map((game) => (
          <Card
            key={game.id}
            className="flex-1 min-w-60 rounded-lg bg-transparent border-0"
          >
            <CardContent className="p-0 flex flex-col gap-4">
              <div
                className="w-full h-[169px] rounded-xl bg-cover bg-center"
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
