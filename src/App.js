import React from 'react';
import axios from 'axios';

import store from './redux/store';
import Card from './components/card';
import SearchBar from './components/search';


class App extends React.Component {

  state = {
    lat: 0,
    long: 0
  }
  
  componentDidMount () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setCoord)
    }
  }

  setCoord = (location) => {
    this.setState({
      lat: location.coords.latitude,
      long: location.coords.longitude
    })
    
    store.dispatch({
      type: "COORD",
      payload : {
        lat: this.state.lat,
        long: this.state.long
      }
    })
    
    this.getWeather(this.state.lat, this.state.long)
  }

  getWeather = (lat, long) => {
    const current = `http://api.weatherapi.com/v1/current.json?key=d6e8d08550c3413cb08105419202011&q=${lat},${long}`
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

  render() {

    return (
      <div>
          <SearchBar />
          <Card city={store.getState().long} />
      </div>
    );
  }
}

export default App;
