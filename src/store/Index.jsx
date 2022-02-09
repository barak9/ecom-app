import {createStore, combineReducers} from 'redux';
import {ProductsReducer} from './reducers/ProductsReducer';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {CartReducer} from './reducers/CartReducer';

const root = combineReducers({
    ProductsReducer,
    CartReducer
});
const Store = createStore(root, devToolsEnhancer());


export {Store};