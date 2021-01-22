import React from "react";
import TopBar from "./TopBar";
import Play from "@material-ui/icons/PlayArrow";

const Main = ({ audioRef, handleChangeSong, songs }) => {
  return (
    <div className="w-full  h-full relative overflow-y-scroll scroller">
      <TopBar />
      <div className="px-8 py-3">
        <div className="flex justify-between items-center">
          <h1 className="pl-2 text-white font-semibold text-2xl tracking-wide hover:underline">
            Recently Played
          </h1>
          <h2 className="pr-8 pt-4 text-xs  text-lightest uppercase tracking-wider hover:underline mb-3">
            See All
          </h2>
        </div>
        <div className="w-full grid grid-cols-auto-fill-12 gap-3">
          {songs.map((song) => (
            <div
              key={song.name}
              className="p-2 w-52 relative cursor-pointer"
              onClick={() => handleChangeSong(song.id)}
            >
              <div className="relative bg-dim w-full h-auto p-5 shadow-2xl rounded-lg hover:bg-light">
                <div className="absolute w-full h-full flex items-center justify-end p-10 opacity-0 hover:opacity-100 transition duration-300 ease-out transform hover:-translate-y-3">
                  <button className="focus:outline-none bg-green shadow-inner rounded-full h-10 w-10 flex items-center justify-center mr-2">
                    <Play className="text-white" />
                  </button>
                </div>
                <img
                  src={song.cover}
                  className="h-auto w-full shadow mb-2 "
                  alt=""
                />
                <h1 className="text-sm pt-2 font-semibold text-white tracking-wide truncate">
                  {song.name}
                </h1>
                <p className="text-xs pt-1 text-lightest tracking-wide pb-5 truncate">
                  {song.artist}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
