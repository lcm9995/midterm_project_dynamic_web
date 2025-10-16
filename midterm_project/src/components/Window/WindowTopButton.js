import "./WindowTopButton.css"

const WindowTopButton = (props) => {
    const {type} = props;
    let symbol = "";
    if (type==="close"){
        symbol = "X";
    } else if (type === "min"){
        symbol = "-";
    } else {
        symbol = "[]";
    }
    return (
        <div className = "window-top-button">
            {symbol}
        </div>
    )
}
export default WindowTopButton;