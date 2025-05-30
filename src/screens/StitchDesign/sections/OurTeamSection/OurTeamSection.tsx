import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const OurTeamSection = (): JSX.Element => {
  // Team members data for easy mapping
  const teamMembers = [
    {
      id: 1,
      name: "Ethan Carter",
      role: "Lead Developer",
      image: "..//depth-8--frame-0.png",
    },
    {
      id: 2,
      name: "Olivia Bennett",
      role: "Art Director",
      image: "..//depth-8--frame-0-1.png",
    },
    {
      id: 3,
      name: "Noah Thompson",
      role: "Game Designer",
      image: "..//depth-8--frame-0-2.png",
    },
  ];

  return (
    <section className="w-full p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {teamMembers.map((member) => (
          <Card
            key={member.id}
            className="border-0 bg-transparent"
          >
            <CardContent className="flex flex-col items-center gap-3 p-0 pb-3">
              <div className="w-full px-4">
                <div
                  className="w-full aspect-square rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
              </div>
              <div className="flex flex-col items-center w-full">
                <h3 className="font-medium text-white text-base text-center leading-6 [font-family:'Spline_Sans',Helvetica]">
                  {member.name}
                </h3>
                <p className="font-normal text-[#96c4a8] text-sm text-center leading-[21px] [font-family:'Spline_Sans',Helvetica]">
                  {member.role}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}