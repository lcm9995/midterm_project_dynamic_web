import React from "react";
import Window from "./components/Window/Window";
import testImg from "./assets/test.jpg"

function App() {
  return (
   <div>
     <Window title = "Image Window" type="image" imageSrc={testImg}/>
     <Window title = "Message Window" type = "message" messageText = "Hello Welcome to my website"/>
   </div>
  );
}

export default App;
