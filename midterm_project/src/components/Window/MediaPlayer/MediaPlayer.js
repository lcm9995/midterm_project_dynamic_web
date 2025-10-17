import "./MediaPlayer.css";
import { useRef, useState } from "react";
import VideoContent from "./VideoContent";
import AudioContent from "./AudioContent";
import ControlBar from "./ControlBar";

const MediaPlayer = (props) => {
    const { mediaType = "audio", mediaTitle = "Untitled", src } = props;
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);

    const onPlay = () => {
        if (videoRef.current) videoRef.current.play();
    };
    const onPause = () => {
        if (videoRef.current) videoRef.current.pause();
    };
    /*const onRestart = () => {
        if (videoRef.current){
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    }*/
    /*const onToggleMute = () => {
        if
    }*/
  return (
    <div className="media-player">
      <div className="media-player-title">{mediaTitle}</div>
      {mediaType === "video" ? <VideoContent videoRef={videoRef} src={src}/> : <AudioContent />}
      <ControlBar onPlay={onPlay} onPause = {onPause} />
    </div>
  );
};

export default MediaPlayer;