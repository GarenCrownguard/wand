import { createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

// Reducer has all the data, hence the reducer is very important for store.
import wandReducer from './wand.reducer'

// createStore is higher order function as it takes a function as parameter.
const store = createStore(wandReducer, composeWithDevTools());

export default store;