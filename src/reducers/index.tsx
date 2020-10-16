import reducer from './reducer'
import sortReducer from './sortReducer'
import SearchReducer from './searchReducer'
import filterReducer from './filterReducer';
import { combineReducers } from 'redux';

// Slår sammen alle reducers i combineReducers
const rootReducer = combineReducers({
    Reducer: reducer,
    SortReducer: sortReducer,
    SearchReducer: SearchReducer,
    FilterReducer: filterReducer
});

export default rootReducer