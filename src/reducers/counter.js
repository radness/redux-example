import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0
};

// es6 defailt argument(es6 기본 문법)
// state = initialState
// state가 undefined 일 때 initialState를 사용한다.
export default function counter(state = initialState, action) {
    // if(typeof state == 'undefined') {
    //     return initialState;
    // }

    /* ... */
    switch(action.type) {
        case types.INCREMENT:
            return { ...state, number: state.number + 1};
        case types.DECREMENT:
            return { ...state, number: state.number - 1};
        default:
            return state;
    }

    return state;
}