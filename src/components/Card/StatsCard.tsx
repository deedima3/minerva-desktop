import React from "react";
import { StatsCardProps} from "../../interfaces/card.interface";

const StatsCard = ({title, amount, thing} : StatsCardProps) => {
  return (
    <div className="bg-brand-black-secondary rounded-md p-3 w-72 flex flex-col justify-center items-center gap-2">
      <h2 className="text-white font-bold text-xl">{title}</h2>
      <h1 className="text-white font-bold text-4xl">{amount}</h1>
      <h2 className="text-white font-bold">{thing}</h2>
    </div>
  );
};

export default StatsCard;
