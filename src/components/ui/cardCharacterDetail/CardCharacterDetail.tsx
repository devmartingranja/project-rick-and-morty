import React from "react";
import Image from "next/image";
import { ICharacter } from "@/components/detailCharacter/DetailCharacter.utils";

interface IProps extends ICharacter {
  isFavorite: boolean;
}

const CardCharacterDetail = ({
  image,
  name,
  status,
  species,
  gender,
  isFavorite,
}: IProps) => {
  return (
    <section>
      <div className="mb-2 relative w-fit">
        <Image
          src={image}
          alt={`Image the character ${name}`}
          width={75}
          height={75}
          className="rounded-full"
        />
        <div className="absolute right-[-15px] bottom-0 rounded-full bg-white overflow-hidden p-1">
          <Image
            data-testid="test-id-img-favorite"
            src={`/icons/${isFavorite ? "heart_active.svg" : "heart.svg"}`}
            alt="Vercel Logo"
            className=" "
            width={24}
            height={24}
          />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <div className="py-4 border-b-2">
        <h4 className="text-base font-bold">Specie</h4>
        <p className="text-base text-gray-400">{species}</p>
      </div>
      <div className="py-4 border-b-2">
        <h4 className="text-base font-bold">Status</h4>
        <p className="text-base text-gray-400">{status}</p>
      </div>
      <div className="py-4 border-b-2">
        <h4 className="text-base font-bold">Gender</h4>
        <p className="text-base text-gray-400">{gender}</p>
      </div>
    </section>
  );
};

export default CardCharacterDetail;
