import * as types from './ActionTypes';

// 액션 생성자
export function increment() {
    return {
        type: types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}

export function setBGColor(color) {
    return {
        type: types.SET_BG_COLOR,
        // color: color = color 와 동일한 의미
        color
    };
}

