import React, { useState } from 'react';

import store from '../redux/store';

const Card = () => {
    var currentTemp = store.getState().temp
    var city = store.getState().city
    var imgSrc = store.getState().imgSrc
    var lat = store.getState().lat
    var long = store.getState().long
    var code = store.getState().conCode
    const [msg, setMsg] = useState(" ")
    var x = Math.floor(Math.random() * 3)
    const play = (e) => {
        e.preventDefault()
        
        if(code >= 1000 && code < 1067){
            store.dispatch({type: "MSG_OKAY"})
        }
        else if (code < 1193){
            store.dispatch({type: "MSG_CAUTION"})
        }
        else {
            store.dispatch({type: "MSG_NO"})
        }
        var m = [...store.getState().msg]
        setMsg(m[x])
    }
    return(
        <React.Fragment>
            <div className="main">
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
                <h5>Latitude: {lat}</h5>
                <h5>Longitude:{long}</h5>
            </div>
        </React.Fragment>
    )
}

export default Card;