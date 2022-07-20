import { useState } from 'react'
import muteButton from './assets/on.svg'
import muteButton2 from './assets/off.svg'
import './App.css'

function App() {
  const [imgData, setImgData] = useState(muteButton)

function changeImage() {
  if (imgData === muteButton){
    setImgData(muteButton2)
  }
  else {
    setImgData(muteButton)
  }
}

  return (
    <div className="App">
      <img src={imgData} onClick={changeImage} />
    </div>
  )
}

export default App
