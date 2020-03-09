import { SET_DATA, LOADING, SET_DATA_KEY, TOGGLE_MODAL } from "../constants/constants";

export function handleLoader(value) {
    return (dispatch) => {
        dispatch({
            type: LOADING,
            payload: value
        });
    };
}

export function setDataInStore(data) {
    return (dispatch) => {
        dispatch({
            type: SET_DATA,
            payload: data
        });
    };
}

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
