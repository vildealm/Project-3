import { create } from 'domain';
import {applyMiddleware, createStore} from 'redux'; 
import {personReducer} from './reducers/reducer'; 
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';


const middlewares = [thunk];
const store = createStore(rootReducer,applyMiddleware(...middlewares)); 

