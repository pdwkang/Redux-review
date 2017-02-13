// the master reducer doesnt manage any state on its own.
// it manages all the reducers.
// the reducers manage state. 
// export all the reducers as an object using 'combine reducers'
// each property we export, will be avaiable as state.property

// first we need combineReducers from redux
import { combineReducers } from 'redux';
import StudentReducer from './StudentReducer.js';

// Each key/property in this object, will be avaiable on the redux
const rootReducer = combineReducers({
	students: StudentReducer
})

export default rootReducer;