 import { useState } from 'react'
import Gif from './Gif'
import Scoreboard from './Scoreboard'

 const GifList = (props) => {

    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [clicked, setClicked] = useState([])

    let results = props.data
    let gif

    const cardClick = (e) => {
        //If Clicked with the unique ID
        if(clicked.indexOf(e.target.id) < 0){
            //that clicked is going to set in array with its ID
            setClicked(clicked => [...clicked, e.target.id])
            setCurrentScore(currentScore + 1)
        } // If clicked on already exist ID
        else {  // Check Score
            if(currentScore > bestScore) {
                setBestScore(currentScore)
            }   // Reset current score
            setCurrentScore(0)
            setClicked(clicked => [])
        }
    }
    
        const pickRandomGif = () =>{
        let randomGifs = []
        // Getting random numbers from here
        for(let i=0; i<6; i++){
            let randomNumber = Math.floor(Math.random() * results.length)   
            randomGifs.push(randomNumber)
        }
        console.log(randomGifs)

        gif = randomGifs.map((random, index) => 
            <Gif 
                onClick={cardClick}
                // Getting random GIFs 
                url={!results[random] ? 'Loading...' : `${results[random].images.fixed_height.url}`} 
                key={index} 
                id={random}
            />
        )
    }
        pickRandomGif()

        return (
            <div>
            <Scoreboard current={currentScore} best={bestScore}/>
            <div className="gif-container">
                <ul className="gif-list">
                    {gif}
                </ul>
            </div> 
            </div>
        )
}

export default GifList