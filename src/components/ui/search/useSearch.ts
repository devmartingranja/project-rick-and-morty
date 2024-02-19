import { useState } from "react";

const useSearch = () => {
  const [showOptionFilter, setShowOptionFilter] = useState(false);
  const [filter, setFilter] = useState<{ [key: string]: string }>({
    filterName: "",
    filterSpecie: "",
    filterStatus: "",
    filterGender: "",
  });

  const toggleOptionFilter = () => {
    setShowOptionFilter(!showOptionFilter);
  };

  const handlerFilterSelected = (data: {}) => {
    setFilter((prev) => ({
      ...prev,
      ...data,
    }));

    if (!("filterName" in data)) toggleOptionFilter();
  };

  return {
    showOptionFilter,
    toggleOptionFilter,
    filter,
    handlerFilterSelected,
  };
};

export default useSearch;
