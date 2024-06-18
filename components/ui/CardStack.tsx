"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

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
    <div className=" flex items-center justify-center relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card) => {
        return (
          <button
            onClick={flipNextCard}
            key={card.id}
            className=" absolute bg-black h-60 w-60 md:h-60 md:w-96 lg:w-[55vw] lg:h-[40vh] rounded-3xl p-4 shadow-xl border border-white/[0.1] shadow-purple/[0.1] flex flex-col justify-center items-center gap-y-4 lg:text-xl text-lg "
            style={{
              transformOrigin: "top center",
            }}>
            <div>
              <p>
                {card.description}
              </p>
            </div>
            <div >
              {card.content}
            </div>
          </button>
        );
      })}
    </div>
  );
};
