import create from "zustand";
import { Home, Search, Library } from "./Svgs";

let pages = [
  { id: "home", name: "Home", icon: Home },
  { id: "search", name: "Search", icon: Search },
  { id: "library", name: "Your Library", icon: Library },
];

let albums = [
  { name: "drive" },
  { name: "Mellow" },
  { name: "drive" },
  { name: "drive" },
  { name: "khaspov" },
  { name: "drive" },
];

const useStore = create((set) => ({
  pages: pages,
  albums: albums,
  showDropDown: false,
  setShowDropDown: () =>
    set((state) => ({ showDropDown: !state.showDropDown })),
  selectedId: "home",
  setSelectedId: (id) => set({ selectedId: id }),
}));

export default useStore;
