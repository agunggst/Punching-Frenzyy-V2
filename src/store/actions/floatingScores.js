import {
    ADD_FLOATING_SCORE,
    REMOVE_FLOATING_SCORE
} from "./action-types";

const addFloatingScore = (timestamp, text, x, y) => ({
    type: ADD_FLOATING_SCORE,
    timestamp,
    text,
    x,
    y
});

const removeFloatingScore = (timestamp) => ({
    type: REMOVE_FLOATING_SCORE,
    timestamp
});

export const showFloatingScore = (text, x, y) => (dispatch, getState) => {
    const timestamp = new Date();
    dispatch(addFloatingScore(timestamp, text, x, y));
    setTimeout(() => {
        dispatch(removeFloatingScore(timestamp));
    }, 2000);
}