// import React, {useState} from 'react'

const Scoreboard = (props) => {

    return(
        <div className="scoreboard hide">
            <div className="scores">
                <h3>Current Score: <span>{props.current}</span></h3>
                <h3>Best Score: <span>{props.best}</span></h3>
            </div>
        </div>
    )
}

export default Scoreboard