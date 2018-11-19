import { combineReducers } from 'redux';
import weatherReducer from './reducer_weather'

const rootReducer = combineReducers({
 weatherList : weatherReducer 
});

export default rootReducer;
