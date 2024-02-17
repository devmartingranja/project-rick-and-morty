import Image from "next/image";

const DetailCharacter = () => {
  return (
    <section>
      <div className="mb-2 relative w-fit">
        <Image
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Morty"
          width={75}
          height={75}
          className="rounded-full"
        />
        <div className="absolute right-[-15px] bottom-0 rounded-full bg-white overflow-hidden p-1">
          <Image
            src="/icons/heart_active.svg"
            alt="Vercel Logo"
            className=" "
            width={24}
            height={24}
          />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4">Abadango Cluster Princess</h3>
      <div className="py-4 border-b-2">
        <h4 className="text-base font-bold">Specie</h4>
        <p className="text-base text-gray-400">Alien</p>
      </div>
      <div className="py-4 border-b-2">
        <h4 className="text-base font-bold">Status</h4>
        <p className="text-base text-gray-400">Alien</p>
      </div>
      <div className="py-4 border-b-2">
        <h4 className="text-base font-bold">Occupation</h4>
        <p className="text-base text-gray-400">Alien</p>
      </div>
    </section>
  );
};

export default DetailCharacter;
