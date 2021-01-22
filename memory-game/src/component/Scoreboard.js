// import React, {useState} from 'react'

const Scoreboard = (props) => {

    
    return(
        <div className="scoreboard hide">
            <div className="scores">
            <h3>Current Score: {props.current}</h3>
                <h3>Best Score: {props.best}</h3>
            </div>
        </div>
    )
}

export default Scoreboard