import React from "react"
import './Window.css'
import WindowTopBar from "./WindowTopBar"
import WindowBody from "./WindowBody";
import WindowImage  from "./WindowImage";
const Window = () => {
    return (
        <div className = "window">
            <WindowTopBar title = "Untitled"/>
            <WindowBody>
                <WindowImage/>
            </WindowBody>
        </div>
    );
    
};
export default Window;