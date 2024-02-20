import { ICharacter } from "@/components/detailCharacter/DetailCharacter.utils";
import { on } from "events";
import Image from "next/image";
import Link from "next/link";

interface IProps extends ICharacter {
  isFavorite?: boolean;
  isSelected?: boolean;
  onFavorite?: (is: boolean) => void;
}

const CardCharacter = ({
  id,
  image,
  name,
  species,
  isFavorite = false,
  isSelected = false,
  onFavorite = (is: boolean) => {},
}: IProps) => {
  return (
    <section
      className={`w-full py-4 border-b-2 flex justify-between items-center overflow-hidden lg:px-5 ${
        isSelected && "rounded-md bg-primary-100 px-5 border-b-0 my-1"
      }`}
    >
      <Link className="flex items-center w-full " href={`/dashboard/${id}`}>
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
      <div className={isSelected ? "bg-white p-1 rounded-2xl" : ""}>
        <Image
          src={`/icons/${isFavorite ? "heart_active.svg" : "heart.svg"}`}
          alt="Rick"
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={() => {
            onFavorite(!isFavorite);
          }}
        />
      </div>
    </section>
  );
};

export default CardCharacter;
