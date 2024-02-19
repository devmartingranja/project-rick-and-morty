import Image from "next/image";
import ItemFilter from "../itemFilter/ItemFilter";
import useOptionFilter from "./useOptionFilter";
import useContextProvider from "@/context/ContextProvider";
import { useEffect } from "react";

interface IProps {
  onClose: () => void;
  onFilter: (data: {}) => void;
}

const OptionFilter = ({ onClose, onFilter }: IProps) => {
  const { filter, handlerSelectFilter, getValuesFilter } = useOptionFilter();
  const { filterSelectProvider } = useContextProvider();

  useEffect(() => {
    Object.keys(filter).forEach((key) => {
      const nameFilter = filter[key].nameFilter;

      Object.keys(filterSelectProvider).forEach((keyFilter) => {
        if (nameFilter === keyFilter) {
          handlerSelectFilter(key, filterSelectProvider[keyFilter]);
        }
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerFilter = () => {
    onFilter(getValuesFilter());
  };

  return (
    <article className="fixed left-0 top-0 bottom-0 right-0 bg-white flex flex-col lg:absolute  lg:top-[52px] lg:bottom-auto z-20 lg:border-2 lg:rounded-lg lg:py-5">
      <div className="flex w-full justify-between items-center lg:hidden">
        <div className="flex-1">
          <Image
            src="/icons/arrow_left.svg"
            alt="Return"
            width={24}
            height={24}
            className="py-6 px-4 block w-fit flex-1"
            role="button"
            onClick={onClose}
          />
        </div>
        <h3 className="flex-1 text-center text-base font-semibold">Filter</h3>
        <span className="flex-1" />
      </div>
      <article className="px-6">
        <ItemFilter
          title="Species"
          listOptions={filter["species"].list}
          onSelect={(idFilter) => handlerSelectFilter("species", idFilter)}
        />
        <ItemFilter
          title="Status"
          listOptions={filter["status"].list}
          onSelect={(idFilter) => handlerSelectFilter("status", idFilter)}
        />
        <ItemFilter
          title="Gender"
          listOptions={filter["gender"].list}
          onSelect={(idFilter) => handlerSelectFilter("gender", idFilter)}
        />
      </article>
      <div className="px-6 h-full flex items-end pb-5">
        <button
          type="button"
          onClick={handlerFilter}
          className="w-full bg-primary-600 text-white py-4 font-semibold rounded-lg"
        >
          Filter
        </button>
      </div>
    </article>
  );
};

export default OptionFilter;
