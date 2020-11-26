import React from 'react';
import axios from 'axios';

import store from '../redux/store'
const SearchBar = () => {
    const handleClick = (e) => {
        var city = document.getElementById('city').value
        store.dispatch({
            type: "CITY",
            payload: {
                city: city
            }
        })
        console.log(store.getState())
        getWeather(city)
        console.log(store.getState())
    }

    const getWeather = (city) => {
        const current = `http://api.weatherapi.com/v1/current.json?key=d6e8d08550c3413cb08105419202011&q=${city}`
        axios.get(current)
          .then(res=> {
            store.dispatch({
              type: "WEATHER",
              payload: {
                city: res.data.location.name,
                lat: res.data.location.lat,
                long: res.data.location.lon,
                condition: res.data.current.condition.text,            
                temp: res.data.current.temp_c,
                imgSrc: res.data.current.condition.icon,
                conCode: res.data.current.condition.code
              }
            })
          })
      }
    return(
        <span id="searchbar">
            <input type="text" placeholder="Enter City" id="city" /><button onClick={e=>handleClick(e)}>Search</button>
        </span>
    )
}

export default SearchBar;