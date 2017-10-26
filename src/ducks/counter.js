// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export function increment(amount) {
    return {
        type: INCREMENT,
        amount
    }
}

export function decrement(amount) {
    return {
        type: DECREMENT,
        amount
    }
}

const initialState = {
    currentValue: 0
};


export default function counter(state = initialState, action)  {
    switch(action.type) {
        case INCREMENT:
         return Object.assign({}, state, { currentValue: state.currentValue + action.amount })
        case DECREMENT:
            return Object.assing({}, state, { currentValue: state.currentValue + action.amout })
        default:
            return state
    }

    return state;
}