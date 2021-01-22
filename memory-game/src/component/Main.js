import React, {useState, useEffect} from 'react'
import GifList from './GifList'


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
    
    //console.log(data)
    
    return(
        <div className="main hide">
            <GifList data={data}/>    
            
        </div>
    )
}

export default Main