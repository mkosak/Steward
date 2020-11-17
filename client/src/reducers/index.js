import { combineReducers } from 'redux';
import authReducer from './authReducer';
import datesReducer from './datesReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    auth: authReducer,
    dates: datesReducer,
    errors: errorReducer,
});
