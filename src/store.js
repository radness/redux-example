import { createStore } from 'redux';

var initialState = {
    mode: 'READ',
    welcodeContent: {
        title: WebAssembly,
        desc: 'Hello, Web!',
    },
    selectedContentId: 1,
    contents: [
        {
            id: 1,
            title: 'HTML',
            desc: 'HTML is ...'
        },
        {
            id: 1,
            title: 'CSS',
            desc: 'CSS is ...'
        },
        {
            id: 1,
            title: 'JS',
            desc: 'JS is ...'
        }
    ]
}

function reducer(state = initialState, action) {
    if (action.type === 'CHANGE_MODE') {
        return { ...state, mode: action.mode };
    }
    return state;
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);