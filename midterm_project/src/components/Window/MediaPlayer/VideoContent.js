import "./VideoContent.css";

const VideoContent = (props) => {
    const {videoRef, src} = props;
    return (
        <div className="video-content">
        <div className="video-frame">
            <video
                ref={videoRef}
                src={src}
                className="video-frame"
                preload="metadata"
            />
        </div>
        </div>
    );
};

export default VideoContent;