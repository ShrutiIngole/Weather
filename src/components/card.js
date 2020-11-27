import React, { useState } from 'react';

import store from '../redux/store';

import '../styles/card.css';

const Card = () => {
    var currentTemp = store.getState().temp
    var city = store.getState().city
    var imgSrc = store.getState().imgSrc
    var code = store.getState().conCode
    const [msg, setMsg] = useState(" ")
    var x = Math.floor(Math.random() * 3)
    const play = (e) => {
        e.preventDefault()
        if (currentTemp < 7 || (code > 1192 && code < 1283)) {
            store.dispatch({type: "MSG_NO"})
        }
        else if(code >= 1000 && code < 1067){
            store.dispatch({type: "MSG_OKAY"})
        }
        else {
            store.dispatch({type: "MSG_CAUTION"})
        }
        var m = [...store.getState().msg]
        setMsg(m[x])
    }
    return(
        <React.Fragment>
            <div>
                <span className="photo"><img src={imgSrc} alt="" /></span>
                <span className="data">
                    <h2>{city}</h2>
                </span>
            </div>
            <div className="details">
                <h3>{currentTemp}°C</h3>
                <h4>{store.getState().condition}</h4>  
                <button onClick={e=>{play(e)}}>Can I play quidditch today?</button>        
                <div>{msg}</div>
            </div>
        </React.Fragment>
    )
}

export default Card;