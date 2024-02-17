import CardCharacter from "./components/cardCharacter/CardCharacter";

const NavigationFilter = () => {
  return (
    <section className="mt-10 mx-6 mb-3 ">
      <h2 className="font-bold text-2xl mb-6 ">Rick and Morty list</h2>
      <input className="w-full mb-4" type="text" placeholder="Search" />
      <h3 className="py-4 border-b-2 text-xs font-bold">
        STARRED CHARACTERS (2)
      </h3>
      <article>
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
      </article>
      <h3 className="py-4 border-b-2 text-xs font-bold"> CHARACTERS (4)</h3>
      <article>
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
      </article>
    </section>
  );
};

export default NavigationFilter;
