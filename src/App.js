import './App.css';
import {useState, useEffect} from 'react';

function App() {
  //grabs current date and time
  const currentTime = Date().toLocaleString()
  //hook for time so you can render with every update to time
  const [time, setTime] = useState(currentTime);

  //x and y position hooks for the mouse when hovering on the site
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  //useEffect to update time after every second (1000 milliseconds)
  useEffect(() => {
    const intervalId = setInterval(() => {setTime((prev) => prev = Date().toLocaleString())}, 1000)
    return () => {
      clearInterval(intervalId);
    };
    //uses a blank dependency array so that useEffect renders once and stays running uninterupted
  }, [])

  //function to update the x and y values on the page every time you move the mouse
  const onMouseMove = (e) => {
      setPosX((prev) => prev = e.clientX);
      setPosY((prev) => prev = e.clientY);
  }

  //return statement
  return (
    <div className='container'>
      <div className="App" onMouseMove={onMouseMove}>
        <h1>" meta site"</h1>
        <h3>"{time}"</h3>
        <p >X:{posX}</p>
        <p>Y:{posY}</p>
      </div>
    </div>
    
  );
}

export default App;
