import Gif from './Gif'

const GifList = (props) => {
    
    let results = props.data

    let gif = results.map(gif => 
            <Gif url={gif.images.fixed_height.url} key={gif.id} />
        )

        return (
            <ul className="gif-list">
                
                    {gif}
                
            </ul>
        )
}

export default GifList