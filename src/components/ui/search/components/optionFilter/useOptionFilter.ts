import { useState } from "react";
import { CONFIG_FILTER } from "./OptionFilter.utils";

const useOptionFilter = () => {
  const [filter, setFilter] = useState(CONFIG_FILTER);

  const handlerSelectFilter = (key: string, idFilter: string) => {
    setFilter((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        list: prev[key].list.map((item) => ({
          ...item,
          isSelected: item.id === idFilter,
        })),
      },
    }));
  };

  const getValuesFilter = () => {
    const listFilters: { [key: string]: string } = {};
    Object.keys(filter).forEach((key) => {
      const filterSelected = filter[key].list.find((item) => item.isSelected);
      listFilters[filter[key].nameFilter] = filterSelected?.id || "";
    });

    return listFilters;
  };

  return { filter, handlerSelectFilter, getValuesFilter };
};

export default useOptionFilter;
