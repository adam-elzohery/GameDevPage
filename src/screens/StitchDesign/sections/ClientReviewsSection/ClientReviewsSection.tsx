import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
/// <reference types="vite/client" />

export const ClientReviewsSection = (): JSX.Element => {
  // Client testimonial data for mapping
  const clientReviews = [
    {
      id: 1,
      name: "Sophia Clark",
      testimonial:
        "GameDev Studio exceeded our expectations with their innovative approach and dedication to quality. The game they developed for us is a huge success!",
      imagePath: `${import.meta.env.BASE_URL}depth-7--frame-0-6.png`,
    },
    {
      id: 2,
      name: "Liam Walker",
      testimonial:
        "We had a great experience working with GameDev Studio. Their team was professional and delivered a fantastic product within the agreed timeline.",
      imagePath: `${import.meta.env.BASE_URL}depth-7--frame-0-7.png`,
    },
    {
      id: 3,
      name: "Emma Davis",
      testimonial:
        "The team at GameDev Studio is incredibly talented and passionate about their work. They truly brought our vision to life.",
      imagePath: `${import.meta.env.BASE_URL}depth-7--frame-0-8.png`,
    },
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
        {clientReviews.map((review) => (
          <Card
            key={review.id}
            className="rounded-lg bg-transparent border-none"
          >
            <div
              className="w-full aspect-square rounded-xl mb-4 bg-cover bg-center"
              style={{ backgroundImage: `url(${review.imagePath})` }}
            />
            <CardContent className="p-0">
              <h3 className="font-medium text-white text-base leading-6 font-sans">
                {review.name}
              </h3>
              <p className="font-normal text-[#96c4a8] text-sm leading-[21px] font-sans">
                {review.testimonial}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
