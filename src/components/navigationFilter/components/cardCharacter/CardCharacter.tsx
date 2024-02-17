import Image from "next/image";
import Link from "next/link";

const CardCharacter = () => {
  return (
    <Link
      className="w-full py-4 border-b-2 flex justify-between items-center"
      href={`/dashboard/2`}
    >
      <div className="flex items-center">
        <Image
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick"
          width={32}
          height={32}
          className="mr-4 rounded-full"
        />
        <div>
          <h3 className="text-base font-bold">Abadango Cluster Princess</h3>
          <p className="text-base text-gray-400">Alien</p>
        </div>
      </div>
      <Image src="/icons/heart_active.svg" alt="Rick" width={24} height={24} />
    </Link>
  );
};

export default CardCharacter;
