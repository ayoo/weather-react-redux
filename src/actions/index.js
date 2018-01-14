import axios from 'axios';

const API_KEY='YOUR-API-KEY';
const ROOT_URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

/**
 * Action Creator - fetchWeather
 * @param {} city 
 */
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},nz`;
  const request = axios.get(url);

  console.log('Request', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}