import {useState} from "react"
import './Window.css'
import WindowTopBar from "./WindowTopBar"
import WindowBody from "./WindowBody";
import WindowImage  from "./WindowImage";
import WindowMessage from "./WindowMessage";
import MediaPlayer from "./MediaPlayer/MediaPlayer";
const Window = (props) => {
    const {title="New Window", type, messageText, mediaSrc} = props;
    const [isVisible, setIsVisable] = useState(true);
    const handleClose = () => {
        setIsVisable(false)
    }
    //const displayTitle = type ==="media" ? "Media Player" : title;
    let displayTitle = title;
    let mediaTitle = "";
    if (type==="media"){
        displayTitle = "Media Player";
        mediaTitle = title;
    }/*else if (type==="image"){
        //const img_path_split = imageSrc.split("/");
        //displayTitle = img_path_split[img_path_split.length-1];
        displayTitle = "Image Viewer"
    } else if (type == "message"){
        displayTitle = "New Window";
    }*/

    if (!isVisible) return null;
    return (
        <div className = "window">
            <WindowTopBar title = {displayTitle} onClose={handleClose}/>
            <WindowBody>
                {type==="message" ? <WindowMessage message = {messageText} buttonLabel="OK" onClose={handleClose} />: null}
                {type==="image" ? <WindowImage src = {mediaSrc}/> : null }
                {type==="media" ? <MediaPlayer mediaType="video" mediaTitle={mediaTitle} src={mediaSrc}/> : null}
            </WindowBody>
        </div>
    );
};
export default Window;