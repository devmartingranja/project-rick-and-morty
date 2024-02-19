import { IOptionFilter } from "../optionFilter/OptionFilter.utils";

interface IProps {
  title: string;
  listOptions: IOptionFilter[];
  onSelect: (value: string) => void;
}

const ItemFilter = ({ title, listOptions, onSelect }: IProps) => {
  return (
    <div className="flex flex-col mb-4">
      <p className="text-sm font-semibold mb-4">{title}</p>
      <div className="flex w-full gap-1">
        {listOptions.map(({ id: idFilter, name, isSelected }, id) => (
          <span
            key={id}
            className={`flex-1 text-center border-2 cursor-pointer ${
              isSelected && "bg-primary-100 borer"
            }  rounded-lg p-4`}
            onClick={() => onSelect(idFilter)}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ItemFilter;
