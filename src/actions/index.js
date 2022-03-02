import * as Types from '../constants/ActionTypes'
import callApi from '../utils/apiCaller'

// ProductList
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        callApi('products', 'GET', null)
            .then(res => {
                dispatch(actFetchProducts(res.data));
            })
    }
}

export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        callApi(`products/${id}`, 'DELETE', null)
            .then(res => {
                dispatch(actDeleteProduct(id))
            })
    }
}

export const actAddProductRequest = (product) => {
    return (dispatch) => {
        callApi(`products`, 'POST', product)
            .then(res => {
                dispatch(actAddProduct(res.data));
            })
    }
}

export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        callApi(`products/${product.id}`, 'PUT', product)
            .then(res => {
                dispatch(actUpdateProduct(res.data));
            })
    }
}


export const actFetchProducts = products => ({
    type: Types.FETCH_PRODUCTS,
    products,
})

export const actDeleteProduct = id => ({
    type: Types.DELETE_PRODUCT,
    id,
})

export const actAddProduct = product => ({
    type: Types.ADD_PRODUCT,
    product
})

export const actUpdateProduct = product => ({
    type: Types.UPDATE_PRODUCT,
    product
})

//
export const actGetProductRequest = (id) => {
    return (dispatch) => {
        callApi(`products/${id}`, 'GET', null)
            .then(res => {
                dispatch(actGetProduct(res.data));
            })
    }
}

export const actGetProduct = product => ({
    type: Types.EDIT_PRODUCT,
    product
})