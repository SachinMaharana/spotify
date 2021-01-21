import React from "react";
import Store from "./Store";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPrevious from "@material-ui/icons/SkipPrevious";
import SkipNext from "@material-ui/icons/SkipNext";
import Repeat from "@material-ui/icons/Repeat";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Play from "@material-ui/icons/PlayArrow";

function App() {
  const {
    pages,
    selectedId,
    setSelectedId,
    albums,
    showDropDown,
    setShowDropDown,
    recents,
  } = Store((state) => ({
    pages: state.pages,
    albums: state.albums,
    selectedId: state.selectedId,
    setSelectedId: state.setSelectedId,
    showDropDown: state.showDropDown,
    setShowDropDown: state.setShowDropDown,
    recents: state.recents,
  }));

  return (
    <div className="bg-dark h-screen font-poppins">
      <div className="flex" style={{ height: "88vh" }}>
        {/* SideBar */}
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
                    selectedId === i.id
                      ? "bg-light  text-white"
                      : "text-lightest"
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
              <p className="text-sm text-white font-semibold">
                Create Playlist
              </p>
            </button>
            <button className="-ml-px flex items-center justify-start opacity-75 hover:opacity-100 focus:outline-none">
              <Heart />
              <p className="text-sm text-white font-semibold">Liked Songs</p>
            </button>
            <div className="w-full bg-light h-px my-3"></div>
          </div>
          <div className="mx-5">
            <div className="w-full h-20 overflow-y-scroll scroller">
              {albums.map((a) => (
                <p className="text-lightest hover:text-white text-sm py-1">
                  {a.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* Sidebar */}
        {/* Main Content */}
        <div className="w-full  h-full relative overflow-y-scroll">
          <div className="w-full sticky top-0 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <button className="rounded-full bg-black w-7 h-7 text-white focus:outline-none mr-3">
                <svg
                  className="text-xl"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="rounded-full bg-black w-7 h-7 text-white focus:outline-none">
                <svg
                  className="text-xl"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowDropDown()}
                className="bg-light rounded-full py-2 px-2 flex items-center focus:outline-none"
              >
                <img
                  src="https://placekitten.com/200/200"
                  className="rounded-full h-6 w-6 mr-2"
                  alt=""
                />
                <p className="text-white font-semibold text-xs mr-3">
                  Sachin Maharana
                </p>
                <svg
                  className="text-white w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {showDropDown && (
                <div className="absolute bg-light p-2 w-full rounded mt-1">
                  <button className="w-full py-2 text-sm text-lightest hover:text-white border-b border-white opacity-75 hover:opacity-100 focus:outline-none">
                    Account
                  </button>
                  <button className="w-full py-2 text-sm text-lightest hover:text-white border-white opacity-75 hover:opacity-100 focus:outline-none">
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="px-6 py-3">
            <div className="flex justify-between items-center">
              <h1 className="pl-2 text-white font-semibold text-2xl tracking-wide hover:underline">
                Recently Played
              </h1>
              <h2 className="pr-8 pt-4 text-xs  text-lightest uppercase tracking-wider hover:underline mb-3">
                See All
              </h2>
            </div>
            <div className="w-full grid grid-cols-auto-fill-12 gap-3">
              {recents.map((a) => (
                <div key={a.title} className="p-2 w-52 relative">
                  <div className="absolute w-full h-full flex items-end justify-end p-8 opacity-0 hover:opacity-100">
                    <div className="bg-green rounded-full h-8 w-8 flex items-center justify-center">
                      <Play className="text-white" />
                    </div>
                  </div>
                  <div className="bg-light w-full h-auto p-5 rounded-lg shadow-md">
                    <img
                      src={a.src}
                      className="h-auto w-full shadow mb-2 "
                      alt=""
                    />
                    <h1 className="text-sm pt-2 font-semibold text-white tracking-wide">
                      {a.title}
                    </h1>
                    <h2 className="text-xs pt-1 text-lightest tracking-wide pb-5">
                      {a.artist}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-6 py-3">
            <div className="">
              <h1 className="pl-2 text-white font-semibold text-2xl tracking-wide hover:underline">
                Made For Sachin
              </h1>
              <h2 className="text-sm pl-2 text-lightest">
                Get better recommendation the more you listen
              </h2>
            </div>
            <div className="w-full grid grid-cols-auto-fill-12 gap-3">
              {recents.map((a) => (
                <div key={a.title} className="p-2 w-52 relative">
                  <div className="absolute w-full h-full flex items-end justify-end p-8 opacity-0 hover:opacity-100">
                    <div className="bg-green rounded-full h-8 w-8 flex items-center justify-center">
                      <Play className="text-white" />
                    </div>
                  </div>
                  <div className="bg-light w-full h-auto p-5 rounded-lg shadow-md">
                    <img
                      src={a.src}
                      className="h-auto w-full shadow mb-2 "
                      alt=""
                    />
                    <h1 className="text-sm pt-2 font-semibold text-white tracking-wide">
                      {a.title}
                    </h1>
                    <h2 className="text-xs pt-1 text-lightest tracking-wide pb-5">
                      {a.artist}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Main Content */}
      </div>

      {/* Footer */}
      <div
        className="w-full flex items-center justify-between px-3 bg-light"
        style={{ height: "12vh" }}
      >
        <div className="flex items-center">
          <div>
            <h1 className="mb -1 text-sm text-white tracking-wide">
              Sinner in the city
            </h1>
            <h1 className="text-xs text-lightest tracking-wide">Coldplay</h1>
          </div>
          <svg
            className="w-6 h-6 mx-8 text-base text-green"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center w-1/3 items-center">
          <div className="flex items-center space-x-5">
            <button className="text-lg text-lightest hover:text-white">
              <ShuffleIcon className="" />
            </button>
            <button className="text-lg text-lightest hover:text-white">
              <SkipPrevious />
            </button>
            <button className="text-lg rounded-full h-10 w-10 flex items-center justify-center mx-3 border-lightest border text-lightest hover:text-white">
              <PlayArrow />
            </button>
            <button className="text-lg text-lightest hover:text-white">
              <SkipNext />
            </button>
            <button className="text-lg text-lightest hover:text-white">
              <Repeat />
            </button>
          </div>
          <div className="w-full">
            <div className="w-full h-1 bg-lightest rounded-full mt-4"></div>
          </div>
        </div>
        <div className="flex items-center">
          <svg
            className="w-6 h-6 mx-4 text-base text-lightest"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
          <div className="w-20 bg-lightest rounded-full h-1"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

function Logo() {
  return (
    <svg
      viewBox="0 0 1134 340"
      className="w-32"
      style={{ filter: "brightness(0) invert(1)" }}
    >
      <path
        fill="currentColor"
        d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
      />
    </svg>
  );
}

function Plus() {
  return (
    <svg
      className="w-6 h-6 mr-3 text-white"
      style={{ filter: "brightness(0.5) invert(1)" }}
      shapeRendering="crispEdges"
      viewBox="0 0 36 36"
    >
      <path d="M28 20h-8v8h-4v-8H8v-4h8V8h4v8h8v4z" />
    </svg>
  );
}

function Heart() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="w-6 h-6 mr-3 text-white"
      style={{ filter: "brightness(0.5) invert(1)" }}
    >
      <path fill="none" d="M0 0h16v16H0z" />
      <path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z" />
    </svg>
  );
}
