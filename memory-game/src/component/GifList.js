 import Gif from './Gif'

 const GifList = (props) => {

    let results = props.data
    let gif
    //console.log(results)
        const pickRandomGif = () =>{
        let randomGifs = []

        for(let i=0; i<6; i++){
            let randomNumber = Math.floor(Math.random() * results.length)   
            randomGifs.push(randomNumber)
            
        }
        console.log(randomGifs)

        gif = randomGifs.map((random, index) => 
            <Gif url={!results[random] ? 'Loading...' : `${results[random].images.fixed_height.url}`} 
            key={index} 
            />
        )
    }
    
    
    //pickRandomGif()
   
    // let gif = results.map(gif => 
    //         <Gif url={gif.images.fixed_height.url} key={gif.id} />
    //     )
    // const handleClick = (e) =>{
    //     e.preventDefault()
        pickRandomGif()
    //}

        return (
            <div>
                <ul className="gif-list">
                    {gif}
                </ul>
                {/* <button className="btn" onClick={handleClick}>Click here</button> */}
            </div>
            
        )
}

export default GifList