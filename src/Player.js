import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PictureInPictureIcon from "@material-ui/icons/PictureInPicture";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPrevious from "@material-ui/icons/SkipPrevious";
import SkipNext from "@material-ui/icons/SkipNext";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import Repeat from "@material-ui/icons/Repeat";
import VolumeUp from "@material-ui/icons/VolumeUp";
import { useStore } from "./Store";

const Player = ({ selectedSong, audioRef }) => {
  const { playing, setPlaying } = useStore((state) => ({
    playing: state.playing,
    setPlaying: state.setPlaying,
  }));

  const audioHandler = () => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(!playing);
    } else {
      audioRef.current.play();
      setPlaying(!playing);
    }
  };

  return (
    <>
      <div className="flex items-center justify-start w-1/5">
        <div className="">
          <h1 className="text-sm text-white tracking-wide">
            {selectedSong?.name}
          </h1>
          <h1 className="text-xs text-lightest tracking-wide">
            {selectedSong?.artist.length > 15
              ? selectedSong.artist.substring(0, 15) + "..."
              : selectedSong.artist}
          </h1>
        </div>
        <div className="flex ml-4 space-x-2">
          <FavoriteIcon style={{ fontSize: 18 }} className="text-green" />
          <PictureInPictureIcon
            style={{ fontSize: 18 }}
            className="text-white opacity-80 hover:opacity-100"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center w-2/5 items-center">
        <div className="flex items-center space-x-5">
          <button className="focus:outline-none text-lg text-lightest hover:text-white">
            <ShuffleIcon className="" />
          </button>
          <button className="focus:outline-none text-lg text-lightest hover:text-white">
            <SkipPrevious />
          </button>
          <button
            onClick={audioHandler}
            className="focus:outline-none text-lg rounded-full h-10 w-10 flex items-center justify-center mx-3 border-lightest border text-lightest hover:text-white"
          >
            {playing ? <Pause /> : <PlayArrow />}
          </button>
          <button className="focus:outline-none text-lg text-lightest hover:text-white">
            <SkipNext />
          </button>
          <button className="focus:outline-none text-lg text-lightest hover:text-white">
            <Repeat />
          </button>
        </div>
        <div className="w-full">
          <div className="w-full h-1 bg-lightest rounded-full mt-4"></div>
        </div>
      </div>
      <div className="flex items-center w-1/5 justify-end">
        <VolumeUp className="w-6 h-6 mx-4 text-base text-lightest" />
        <div className="w-20 bg-lightest rounded-full h-1"></div>
      </div>
    </>
  );
};

export default Player;
