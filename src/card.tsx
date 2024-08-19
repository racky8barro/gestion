import React from 'react';

interface CardProps {
  title: string;
  amount: string;
  color: string;


}

const Card: React.FC<CardProps> = ({ title, amount, color,  }) => {
  return (
    <div className="bg-sky-950 shadow-md rounded-lg p-6 flex flex-col items-center">
      <h3 className="text-full   h-full text-white">{title}</h3>
      <p className={`text-2xl font-bold ${color} mt-2`}>{amount}</p>

    </div>
  );
};

export default Card;