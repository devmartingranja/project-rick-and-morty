// Libs
import { useEffect } from "react";
import Image from "next/image";

// Components
import OptionFilter from "./components/optionFilter/OptionFilter";

// Hooks
import useSearch from "./useSearch";

interface IProps {
  onSearch: (values: {}) => void;
}

const Search = ({ onSearch }: IProps) => {
  const {
    showOptionFilter,
    toggleOptionFilter,
    handlerFilterSelected,
    filter,
  } = useSearch();

  useEffect(() => {
    onSearch(filter);
  }, [filter, onSearch]);

  return (
    <section className="relative">
      <div className="w-full flex justify-between items-center bg-gray-100 px-5 py-2 rounded-lg">
        <div className="flex mr-4 w-full items-center">
          <Image
            src="/icons/search.svg"
            alt="Return"
            width={20}
            height={20}
            className="mr-2"
          />
          <input
            type="search"
            className="w-full h-6 bg-transparent outline-none"
            placeholder="Search or filter results"
            onChange={(e) =>
              handlerFilterSelected({ filterName: e.target.value })
            }
          />
        </div>
        <Image
          src="/icons/adjustments.svg"
          alt="Return"
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={toggleOptionFilter}
        />
      </div>
      {showOptionFilter && (
        <OptionFilter
          onClose={toggleOptionFilter}
          onFilter={handlerFilterSelected}
        />
      )}
    </section>
  );
};

export default Search;
