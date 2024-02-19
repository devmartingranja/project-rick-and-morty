import { ICharacter } from "@/components/detailCharacter/DetailCharacter.utils";
import CardCharacter from "@/components/ui/cardCharacter/CardCharacter";

interface IProps {
  title: string;
  list: ICharacter[];
  idSelected: number;
  onAddFavorite: (id: number, isAdd: boolean) => void;
}

const ListCharacters = ({ title, list, idSelected, onAddFavorite }: IProps) => {
  return (
    <section>
      <h3 className="py-4 border-b-2 text-xs font-bold">
        {title} ({list.length})
      </h3>
      <article>
        {list.map((character, id) => (
          <CardCharacter
            key={id}
            {...character}
            isSelected={idSelected === Number(character.id)}
            isFavorite={character.isFavorite}
            onFavorite={(isAdd) => onAddFavorite(Number(character.id), isAdd)}
          />
        ))}
      </article>
    </section>
  );
};

export default ListCharacters;
