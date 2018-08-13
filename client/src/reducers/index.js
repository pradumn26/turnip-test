import {combineReducers} from 'redux';

import currentUser from './currentUserReducer';

const combinedReducer = combineReducers({
    currentUser
});

export default combinedReducer;