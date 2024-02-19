import Image from "next/image";

function Page() {
  return (
    <div className="hidden lg:grid col-span-3  place-content-center h-full w-full">
      <Image
        src="/images/rick_and_morty.png"
        alt="Rick and Morty"
        width="500"
        height="500"
      />
    </div>
  );
}

export default Page;
