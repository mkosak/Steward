import {
    SET_START_DATE,
    SET_END_DATE,
    // GET_START_DATE,
    // GET_END_DATE,
} from './types';

// Set start date
export const setStartDate = (date) => {
    console.log('ACTION: setStartDate');
    return {
        type: SET_START_DATE,
        payload: date,
    };
};

// Set end date
export const setEndDate = (date) => {
    console.log('ACTION: setEndDate');
    return {
        type: SET_END_DATE,
        payload: date,
    };
};

// // Get start date
// export const getStartDate = () => {
//     return {
//         type: GET_START_DATE,
//     };
// };

// // Get end date
// export const getEndDate = () => {
//     return {
//         type: GET_END_DATE,
//     };
// };
