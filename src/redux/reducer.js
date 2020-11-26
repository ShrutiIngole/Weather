const weatherData = (state, action) => {
    switch (action.type) {
        case "COORD":
            return ({
                city: " ",
                lat: action.payload.lat,
                long: action.payload.long
            })
        case "CITY":
            return ({
                city: action.payload.city,
                lat: action.payload.lat,
                long: action.payload.long
            })
        case "WEATHER":
            return({
                city: action.payload.city,
                lat: action.payload.lat,
                long: action.payload.long,
                condition: action.payload.condition,
                temp: action.payload.temp,
                imgSrc: action.payload.imgSrc,
                conCode: action.payload.conCode
            })
        
        case "MSG_OKAY":
            return({
                ...state,
                msg: [
                    "Of course, if you can find 6 friends who want to play with you",
                    "Why not? Perfect day!",
                    "You can! Have fun. Or play video games. Don't let me dictate your life choices."
                ]
            })
        case "MSG_CAUTION":
            return({
                ...state,
                msg: [
                    "Does your broomstick come with an umbrella?",
                    "You can do anything when you are the chosen one. You are the chosen one, right?",
                    "Sure! If you are willing to be sick for the next few days, that is."
                ]
            })
        case "MSG_NO":
            return({
                ...state,
                msg: [
                    "Heck no! You're gonna lose that brand new snitch!",
                    "Mum says no",
                    "Just stay in and play board games man... Today's not the day"
                ]
            })

        default:
            return state;
    }
}

export default weatherData;