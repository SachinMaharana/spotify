import React from "react";
import { useStore } from "./Store";
import Sidebar from "./SideBar";
import Main from "./Main";
import Player from "./Player";

function App() {
  const {
    selectedSong,
    setSelectedSong,
    songs,
    playing,
    setPlaying,
  } = useStore((state) => ({
    selectedSong: state.selectedSong,
    setSelectedSong: state.setSelectedSong,
    songs: state.songs,
    playing: state.playing,
    setPlaying: state.setPlaying,
  }));

  const audioRef = React.useRef(null);

  const endFn = () => {
    let currentSong = songs.findIndex((song) => song.id === selectedSong.id);
    let nextSong = songs[(currentSong + 1) % songs.length];
    console.log("isPlay", playing);
    setTimeout(() => {
      handleChangeSong(nextSong.id);
    }, 5000);
  };

  React.useEffect(() => {
    console.log("eff", audioRef);
  }, []);

  const handleChangeSong = (id) => {
    setSelectedSong(id);
    if (playing) {
      console.log("inside");
      const pp = audioRef.current.play();
      if (pp !== undefined) {
        pp.then((_) => {
          audioRef.current.play();
        }).catch((e) => console.log("Error", e));
      }
    } else {
      console.log("here");
      const pp = audioRef.current.play();
      if (pp !== undefined) {
        pp.then((_) => {
          audioRef.current.play();
          setPlaying(!playing);
        }).catch((e) => console.log("Error", e));
      }
    }
  };

  return (
    <div className="bg-dark h-screen font-poppins">
      <div className="flex" style={{ height: "90vh" }}>
        <Sidebar />
        <Main
          audioRef={audioRef}
          isPlaying={playing}
          handleChangeSong={handleChangeSong}
          songs={songs}
        />
      </div>
      <div
        className="w-full flex items-center justify-between px-5 bg-light border-t border-gray-900"
        style={{ height: "10vh" }}
      >
        <Player selectedSong={selectedSong} audioRef={audioRef} />
        <audio ref={audioRef} onEnded={endFn} src={selectedSong.audio} />
      </div>
    </div>
  );
}

export default App;
