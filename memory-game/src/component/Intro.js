
const Intro = () => {

    const closeIntro = (e) => {
        e.preventDefault()
        const intro = document.querySelector('.intro')
        const header = document.querySelector('.header')
        
        intro.classList.add('hide')
        header.classList.remove('hide')
    }

    return(
    
        <div className="intro" >
        <h1>How it works</h1>
            <p>Welcome to the Memory GIFs Game!</p>
            <p>This memory game will present you with random gifs on screen.</p> 
            <p>To gain points, select GIFs that are different from the previous ones you selected. 
            If you choose the same gif more than once, you will lose.</p>
            <button onClick={closeIntro}>Ok, I got it</button>
        </div>
        
    )
}

export default Intro