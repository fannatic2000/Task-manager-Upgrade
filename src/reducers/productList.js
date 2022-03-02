import * as Types from '../constants/ActionTypes'

const initialState = [];

const productList = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.ADD_PRODUCT:
            return [...state, action.product];
        case Types.DELETE_PRODUCT:
            state = state.filter(product => product.id !== action.id);
            return [...state];
        case Types.UPDATE_PRODUCT:
            for (let product of state) {
                if(product.id === action.product.id) {
                    product = action.product;
                    break;
                }
            }
            return [...state];
        default:
            return state;
    }
}

export default productList;