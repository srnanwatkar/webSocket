import { SET_DATA, LOADING, SET_DATA_KEY, TOGGLE_MODAL } from "../constants/constants";

/**
 * Handle on init Loader
 * @param value
 */
export function handleLoader(value) {
    return (dispatch) => {
        dispatch({
            type: LOADING,
            payload: value
        });
    };
}

/**
 * Set the Stock data in the store
 * @param data
 */
export function setDataInStore(data) {
    return (dispatch) => {
        dispatch({
            type: SET_DATA,
            payload: data
        });
    };
}

/**
 * Handle Modal open/close
 * @param key 
 */
export function handleModal(key) {
    return (dispatch) => {
        dispatch([
            {
                type: SET_DATA_KEY,
                payload: key ? key : ''
            },
            {
                type: TOGGLE_MODAL,
                payload: key ? true : false
            }
        ]);
    };
}
