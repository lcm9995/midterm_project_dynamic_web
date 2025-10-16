import {useState} from "react"
import './Window.css'
import WindowTopBar from "./WindowTopBar"
import WindowBody from "./WindowBody";
import WindowImage  from "./WindowImage";
import WindowMessage from "./WindowMessage";
const Window = (props) => {
    const {title, type, messageText, imageSrc} = props;
    const [isVisible, setIsVisable] = useState(true);
    const handleClose = () => {
        setIsVisable(false)
    }
    if (!isVisible) return null;
    return (
        <div className = "window">
            <WindowTopBar title = {title} onClose={handleClose}/>
            <WindowBody>
                {type==="message" ? <WindowMessage message = {messageText}/>: null}
                {type==="image" ? <WindowImage src = {imageSrc}/> : null }
            </WindowBody>
        </div>
    );
};
export default Window;