import React, {useState, useEffect} from 'react'
import GifList from './GifList'

const Main = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.giphy.com/v1/gifs/trending?&limit=9&api_key=aIINKf0Pxb8MDhC2QPzTLbgvUXN6Uz7l')
        .then(response => response.json())
        .then(responseData => setData(responseData.data))
        .catch(error => {
            console.log('Error fetching and parsing data', error)
          })
    },[])

    // let gif = data.map(gif => 
    //         <img src={gif.images.fixed_height.url} key={gif.id} alt={gif.title}/>
    //     )
    
    return(
        <div className="main hide">

            <GifList data={data}/>
            {/* <ul className="gif-list">
                <li className="gif-wrap">
                    {gif}
                </li>
            </ul> */}
            
        </div>
    )
}

export default Main