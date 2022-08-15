import { createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

import wandReducer from './wand.reducer'

const store = createStore(wandReducer, composeWithDevTools());

export default store;