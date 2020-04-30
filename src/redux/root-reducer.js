import { combineReducers } from 'redux';

//reducers
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
})