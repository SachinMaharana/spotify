import create from "zustand";
import { Home, Search, Library } from "./Svgs";

let pages = [
  { id: "home", name: "Home", icon: Home },
  { id: "search", name: "Search", icon: Search },
  { id: "library", name: "Your Library", icon: Library },
];

let recents = [
  {
    src: "https://placekitten.com/g/400/400",
    title: "Daily Mix 2",
    artist: "By Spotify",
  },
  {
    src: "https://placekitten.com/g/400/400",
    title: "Daily Mix 3",
    artist: "By Spotify",
  },
  {
    src: "https://placekitten.com/g/400/400",
    title: "Bad Guy",
    artist: "Billie Ellish",
  },
  {
    src: "https://placekitten.com/g/400/400",
    title: "Cold Case Files",
    artist: "PodcastOne",
  },
  {
    src: "https://placekitten.com/g/400/400",
    title: "Life is Good Radio",
    artist: "Billie",
  },
  {
    src: "https://placekitten.com/g/400/400",
    title: "Radio",
    artist: "Coldplay",
  },
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
  recents: recents,
  showDropDown: false,
  setShowDropDown: () =>
    set((state) => ({ showDropDown: !state.showDropDown })),
  selectedId: "home",
  setSelectedId: (id) => set({ selectedId: id }),
}));

export default useStore;
