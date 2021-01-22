import React from "react";
import { useSideBarStore } from "./Store";
import { Heart, Logo, Plus } from "./Svgs";

const SideBar = () => {
  const { pages, selectedId, setSelectedId, albums } = useSideBarStore(
    (state) => ({
      pages: state.pages,
      albums: state.albums,
      selectedId: state.selectedId,
      setSelectedId: state.setSelectedId,
    })
  );
  return (
    <div className="w-56 bg-black h-full flex-none">
      <div className="p-6">
        <Logo />
      </div>
      <div className="mx-2 mb-5">
        {pages.map((i) => {
          return (
            <button
              onClick={() => setSelectedId(i.id)}
              key={i.id}
              className={`${
                selectedId === i.id ? "bg-light  text-white" : "text-lightest"
              }  w-full rounded px-3 py-2 flex items-center justify-start font-semibold focus:outline-none hover:text-gray-50`}
            >
              <i.icon />
              <p className="flex text-sm">{i.name}</p>
            </button>
          );
        })}
      </div>
      <div className="mx-5">
        <h1 className="mb-3 text-lightest uppercase tracking-widest text-xs font-semibold">
          Playlists
        </h1>
        <button className="-ml-1 flex items-center justify-start opacity-75 hover:opacity-100 mb-3 focus:outline-none">
          <Plus />
          <p className="text-sm text-white font-semibold">Create Playlist</p>
        </button>
        <button className="-ml-px flex items-center justify-start opacity-75 hover:opacity-100 focus:outline-none">
          <Heart />
          <p className="text-sm text-white font-semibold">Liked Songs</p>
        </button>
        <div className="w-full bg-light h-px my-3"></div>
      </div>
      <div className="mx-5">
        <div className="w-full h-20 overflow-y-scroll scroller">
          {albums.map((a, i) => (
            <p key={i} className="text-lightest hover:text-white text-sm py-1">
              {a.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
