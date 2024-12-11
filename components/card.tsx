import React from "react";
import Image, { StaticImageData } from "next/image";

export type CardProps = {
  title: string;
  imageURL?: StaticImageData;
  description: string;
};

const Card = ({ title, description, imageURL }: CardProps) => {
  return (
    <div className="w-[22.813rem] h-[33.938rem]  p-2 rounded-lg flex flex-col gap-2 hover:scale-110 duration-300 ease-out bg-[#F8FBFF]">
      {imageURL ? (
        <div className="h-[13rem] p-3 bg-gray-200 rounded-t-lg hover:scale-95 transition-transform overflow-hidden">
          <Image
            src={imageURL}
            alt="cards image"
            width={365}
            height={200}
            className="object-fit"
          />
        </div>
      ) : (
        <div className=""></div>
      )}

      <div className="text-md font-semibold text-blue-600 uppercase pt-2 px-2 hover:cursor-pointer">
        {title}
      </div>
      <div className="font-semibold text-gray-700 px-2 hover:cursor-pointer">
        {description}
      </div>
    </div>
  );
};

export default Card;
