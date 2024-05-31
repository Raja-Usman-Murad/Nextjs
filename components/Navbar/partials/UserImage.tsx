import Image from "next/image";
import React from "react";

const UserImage: React.FC = () => {
  return (
    <Image
      src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
      alt="User"
      className="w-8 h-8 rounded-full ml-2"
      width={500}
      height={500}
    />
  );
};

export default UserImage;