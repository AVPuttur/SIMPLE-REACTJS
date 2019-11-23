import React, { useState } from 'react';
import Tweet from './components/Tweet';
import Twitter from './components/Twitter';
import MauritiusFlag from './components/MauritiusFlag';
import IndiaFlag from './components/IndiaFlag'; 

import  './App.css';

function App () {

  //useState
  const [indiaColors , setColour] = useState([
      {colour: "Saffron"}, 
      {colour: "White"}, 
      {colour: "Green"}
    ]);

  return(

    <div className="App">
    <h1>Hello World.</h1>
    <Tweet />
    <Twitter /><br />
    <MauritiusFlag colour="Red" message="Red as the Flamboyant" />
    <MauritiusFlag colour="Blue" message="Blue as the Sky" />
    <MauritiusFlag colour="Yellow" message="Yellow as the Sun" />
    <MauritiusFlag colour="Green" message="Green as the Nature" /> <br />
    <hr />
    {indiaColors.map(india => (
      <IndiaFlag colour={india.colour} />
    ))}
    
    </div>
    );
}

export default App;
