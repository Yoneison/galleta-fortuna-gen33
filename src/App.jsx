import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRandomFromArr from './utils/getRandomFromArr'
import Phrase from './components/Phrase'
import Button from './components/Button'
import arrPhotos from './utils/photos.json'


function App() {


  const initialPhrase = getRandomFromArr(phrases)

  const initialPhoto = getRandomFromArr(arrPhotos)
   
  const [quoteRandom, setQuoteRandom] = useState(initialPhrase)
  const [photoRandom, setPhotoRandom]= useState(initialPhoto)

  const objStyle ={
    backgroundImage: `url(/fondo${photoRandom}.png)`
  }

  return (
    <div className='app' style={objStyle}>
      <h1 className='app__title'>GALLETA DE LA FORTUNA</h1>

      <div className='app__card'>
      <Phrase quoteRandom = {quoteRandom} />
      <Button setQuoteRandom = {setQuoteRandom} 
      setPhotoRandom = {setPhotoRandom}/>
      </div>

    </div>
  )
}

export default App
