"use client";
import { useState } from "react";

let interval: any;

type Card = {
  id: number;
  description: string;
  content: React.ReactNode;
};

export const CardStack = ({ items }: { items: Card[] }) => {
  const [cards, setCards] = useState<Card[]>(items);

  const flipNextCard = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()!);
      return newArray;
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className=" flex items-center justify-center relative h-80 w-96 mb-40 lg:mb-40">
        {cards.map((card) => {
          return (
            <button
              onClick={flipNextCard}
              key={card.id}
              className=" absolute bg-black h-60 w-96 lg:w-[50vw] lg:h-[30vh] rounded-3xl p-4 shadow-xl border border-white/[0.1] shadow-purple/[0.1] flex flex-col justify-center items-center gap-y-4 "
              style={{
                transformOrigin: "top center",
              }}>
              <div className="flex flex-col gap-4">
                <p className="lg:text-xl text-lg text-purple">
                  {card.description}
                </p>
                <p className=" text-sm lg:text-lg">{card.content}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
