import { ICharacter } from "@/components/detailCharacter/DetailCharacter.utils";
import { on } from "events";
import Image from "next/image";
import Link from "next/link";

interface IProps extends ICharacter {
  isFavorite?: boolean;
  isSelected?: boolean;
  onAddFavorite?: (id: number) => void;
  onDeleteFavorite?: (id: number) => void;
}

const CardCharacter = ({
  id,
  image,
  name,
  species,
  isFavorite = false,
  isSelected = false,
  onAddFavorite = (id) => {},
  onDeleteFavorite = (id) => {},
}: IProps) => {
  const handlerFavorite = () => {
    if (isFavorite) onDeleteFavorite(id);
    else onAddFavorite(id);
  };

  return (
    <section
      className={`w-full py-4 border-b-2 flex justify-between items-center overflow-hidden ${
        isSelected && "rounded-md bg-pink-50"
      }`}
    >
      <Link className="flex items-center w-full" href={`/dashboard/${id}`}>
        <Image
          src={image}
          alt={`Image the character ${name}`}
          width={32}
          height={32}
          className="mr-4 rounded-full"
        />
        <div>
          <h3 className="text-base font-bold">{name}</h3>
          <p className="text-base text-gray-400">{species}</p>
        </div>
      </Link>
      <Image
        src={`/icons/${isFavorite ? "heart_active.svg" : "heart.svg"}`}
        alt="Rick"
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={handlerFavorite}
      />
    </section>
  );
};

export default CardCharacter;
