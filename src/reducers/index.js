import { combineReducers } from 'redux'
import productList from './productList'
import itemEditing from './itemEditing';

const appReducers = combineReducers({
    productList,
    itemEditing
})

export default appReducers;