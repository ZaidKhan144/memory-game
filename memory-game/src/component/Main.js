import React, {useState, useEffect} from 'react'

const Main = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=aIINKf0Pxb8MDhC2QPzTLbgvUXN6Uz7l')
        .then(response => response.json())
        .then(responseData => setData(responseData.data))
        .catch(error => {
            console.log('Error fetching and parsing data', error)
          })
    },[])

    let gif = data.map(gif => 
            <img src={gif.images.fixed_height.url} key={gif.id} alt=""/>
        )
    
    return(
        <div className="main hide">
            {gif}
        </div>
    )
}

export default Main