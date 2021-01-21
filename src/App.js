import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

/*
- [x] In `App.js` (or where ever you wanted to fetch the data) add state for the data you'll be getting from NASA.
- [x] Add an effect hook to handle the API call side effect.
- [x] Go to the [NASA APOD API docs](https://api.nasa.gov/#apod) and read through the docs to see how to make the API call.
- [x] You don't _need_ an API key. However you may need one if you exceed the API request limits.
- [x] Using the endpoint given, fetch the data using `axios`.
- [x] In your `.then()` make sure to `console.log` the response so you can look at the shape of the data. 😃
- [x] Before you add your data to state, make sure your effect hook has a dependency array (probably empty, since we don't want this effect synced up to any state/props), otherwise you will start an **infinite loop, and you will exceed the API rate limits of the DEMO_KEY and need to use a real API_KEY.**
*/
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd; 

function App( props ) {
  const [blah, setBlah] = useState ("");



  useEffect(( ) => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${today}`)
      .then(( res ) => setBlah(res.data))
      .catch((err) => console.log(err))
  }, []);

  return (
  
  <div className="App">
      <p>
     <h1>{ blah.title }</h1>
     <a href={ blah.hdurl }><img src={ blah.url } alt={ blah.title }/></a></p> 
    </div>
  );
}
export default App;
