import { LOADING, SET_DATA, TOGGLE_MODAL, SET_DATA_KEY } from '../constants/constants';

const initialState = {
    isLoading: false,
    stockData: null,
    isModalOpen: false,
    itemKey: ''
};

const stockDashboard = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return state = {
                ...state,
                isLoading: action.payload
            };
        case SET_DATA:
            return state = {
                ...state,
                stockData: action.payload
            }
        case TOGGLE_MODAL:
            return state = {
                ...state,
                isModalOpen: action.payload
            }
        case SET_DATA_KEY:
            return state = {
                ...state,
                itemKey: action.payload
            }
        default:
            return state
    }
}

export default stockDashboard;