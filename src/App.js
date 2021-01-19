import React from "react";
import Store from "./Store";

function App() {
  const { pages, selectedId, setSelectedId, albums } = Store((state) => ({
    pages: state.pages,
    albums: state.albums,
    selectedId: state.selectedId,
    setSelectedId: state.setSelectedId,
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
        <div className="w-full  h-full relative bg-blue-400">
          <div className="w-full sticky top-0 bg-yellow-300 p-2"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-light" style={{ height: "12vh" }}></div>
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
