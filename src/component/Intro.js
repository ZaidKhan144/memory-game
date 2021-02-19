
const Intro = () => {

    const closeIntro = (e) => {
        e.preventDefault()
        const intro = document.querySelector('.intro')
        const header = document.querySelector('.header')
        const scoreboard = document.querySelector('.scoreboard')
        const main = document.querySelector('.main')

        intro.classList.add('hide')
        header.classList.remove('hide')
        scoreboard.classList.remove('hide')
        main.classList.remove('hide')
    }

    return(
    
        <div className="intro" >
        <h1>How it works</h1>
            <p>Welcome to Suspect GIFs!</p>
            <p>This memory game will present you with random GIFs on screen.</p> 
            <p>To gain points, select GIFs that are different from the previous ones you selected. 
            If you choose the same GIF more than once, you will lose.</p>
            <button onClick={closeIntro}>Ok, I got it</button>
        </div>
        
    )
}

export default Intro