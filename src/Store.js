import create from "zustand";
import { chillHop, pages, albums } from "./data";

let store = (set, get) => ({
  songs: chillHop(),
  selectedSong: chillHop()[0],
  playing: false,
  setPlaying: (p) => set((state) => set((state) => ({ playing: p }))),
  setSelectedSong: (id) => {
    let currentId = get().selectedSong.id;
    if (currentId === id) {
      return;
    }
    set((state) => {
      return { selectedSong: state.songs.find((s) => s.id === id) };
    });
  },
});

const useStore = create(store);

const useAudioStore = create((set) => ({
  audio: null,
}));

const useSideBarStore = create((set) => ({
  pages: pages,
  albums: albums,
  selectedId: "home",
  setSelectedId: (id) => set({ selectedId: id }),
}));

const useTopBarStore = create((set) => ({
  showDropDown: false,
  setShowDropDown: () =>
    set((state) => ({ showDropDown: !state.showDropDown })),
}));

export { useStore, useTopBarStore, useAudioStore, useSideBarStore };
