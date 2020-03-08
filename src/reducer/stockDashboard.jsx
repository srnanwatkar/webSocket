import { LOADING, SET_DATA, TOGGLE_MODAL } from '../constants/constants';

const initialState = {
    isLoading: false,
    stockData: {},
    isModalOpen: false
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
        default:
            return state
    }
}

export default stockDashboard;