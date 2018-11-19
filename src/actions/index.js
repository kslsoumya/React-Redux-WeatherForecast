import axios from 'axios';


const API_KEY ='0af2452b5fe842d34b928d2897ff8a84';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER ='FETCH_WEATHER';

export  function  fetchWeather(city) {
    const url =`${BASE_URL}&q=${city},us`
    const request = axios.get(url)
    return {
        type : FETCH_WEATHER,
        payload : request
    }

}


