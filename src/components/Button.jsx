import getRandomFromArr from "../utils/getRandomFromArr"
import Phrases from "../utils/phrases.json"
import arrPhotos from '../utils/photos.json'

const Button = ({setQuoteRandom,  setPhotoRandom}) => {
    const Button =({setQuoteRandom})

    const pasarPhrase =() =>{
       setQuoteRandom( getRandomFromArr(Phrases))
       setPhotoRandom(getRandomFromArr(arrPhotos))

    }
  return (
    
    <button className="app__btn" onClick={pasarPhrase}>Ver otro</button>
  )
}

export default Button