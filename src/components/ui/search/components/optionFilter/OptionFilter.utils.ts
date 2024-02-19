export interface IOptionFilter {
  id: string;
  name: string;
  isSelected: boolean;
}

export type TConfigFilter = {
  [key: string]: { nameFilter: string; list: IOptionFilter[] };
};

export const CONFIG_FILTER: TConfigFilter = {
  species: {
    nameFilter: "filterSpecie",
    list: [
      { id: "", name: "All", isSelected: true },
      { id: "human", name: "Human", isSelected: false },
      { id: "alien", name: "Alien", isSelected: false },
    ],
  },
  status: {
    nameFilter: "filterStatus",
    list: [
      { id: "", name: "All", isSelected: true },
      { id: "alive", name: "Alive", isSelected: false },
      { id: "dead", name: "Dead", isSelected: false },
    ],
  },
  gender: {
    nameFilter: "filterGender",
    list: [
      { id: "", name: "All", isSelected: true },
      { id: "female", name: "Female", isSelected: false },
      { id: "male", name: "Male", isSelected: false },
    ],
  },
};
