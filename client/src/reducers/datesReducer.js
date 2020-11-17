// import moment from 'moment';
// import CONFIG from './../config';
import {
    SET_START_DATE,
    SET_END_DATE,
    // GET_START_DATE,
    // GET_END_DATE,
} from '../actions/types';

const initialState = {
    start: null,
    end: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_START_DATE:
            console.log('REDUCER: SET_START_DATE');
            return {
                ...state,
                start: action.payload,
            };
        case SET_END_DATE:
            console.log('REDUCER: SET_END_DATE');
            return {
                ...state,
                end: action.payload,
            };
        default:
            return state;
        // case GET_START_DATE:
        //     return moment(state.start).format(CONFIG.dateFormat);
        // case GET_END_DATE:
        //     return moment(state.end).format(CONFIG.dateFormat);
        // case GET_START_DATE:
        //     return moment(state.start).format(CONFIG.dateFormat);
        // case GET_END_DATE:
        //     return moment(state.end).format(CONFIG.dateFormat);
    }
};

export default reducer;
