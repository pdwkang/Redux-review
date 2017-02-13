import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


// Remember, react and reudx do not know about each other.
// they are separate libraries
// we need react-redux to get them to talk. import provider compnent
import { Provider } from 'react-redux'
import reducers from './reducers/index'

// get createStore method from redux. we will use it to create a 
// store and pass to that store all our reducers
import { createStore } from 'redux'
const theStore = createStore(reducers);

// Wrapping the provider component which come from react-redux around <App>
// will allow the store(brain of redux) to get them to talk
ReactDOM.render(
	<Provider store={theStore}>
  		<App />
	</Provider>,
	document.getElementById('root')
);

