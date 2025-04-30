// make an interactive react app with a button that changes the background color of the page to a random color when clicked
import React from 'react'
// import  app.css file
import './App.css'

const App = () => {
  const randomcolor = () => {
    // generate a random color
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    // set the background color of the page to the random color
    document.body.style.backgroundColor = `#${randomColor}`;
  }
  return (
    <div>
      <div className="center">
      
      <button className='btn'
        onClick={randomcolor}
        >
        Change Background Color
      </button>
        </div>
    </div>
  )
}

export default App
