import React from "react";
import Window from "./components/Window/Window";
import testImg from "./assets/test.jpg"
import testVid from "./assets/paradise_cut.mp4"

function App() {
  return (
   <div>
     <Window title = "Image Window" type="image" imageSrc={testImg}/>
     <Window title = "Message Window" type = "message" messageText = "Hello Welcome to my website"/>
     <Window title = "Paradise" type = "media" mediaSrc = {testVid} />
   </div>
  );
}

export default App;
