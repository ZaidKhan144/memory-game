
const Gif = (props) => {
    return (
    <li className="gif-wrap">
        <img src={props.url} alt="" id={props.id} onClick={props.onClick}/>
    </li>
    )
}

export default Gif;