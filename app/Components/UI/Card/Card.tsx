import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-24 m-3 border-2 border-gray-300  border-solid shadow flex justify-center items-center">
      {children}
    </div>
  );
};

export default Card;
