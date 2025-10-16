import "./WindowMessage.css";

const WindowMessage = (props) => {
    const message = props;
    return (
        <div className="window-message">
           <div className = "window-message-text">{message}</div>
        </div>
    );
};
export default WindowMessage;