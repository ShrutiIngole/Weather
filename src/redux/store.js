import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    lat: 0,
    long: 0,
    city: " ",
    temp: "",
    condition: "",
    conCode: 0,
    imgSrc: " ",
    msg: []
}

const store = createStore(reducer, initialState)

export default store;