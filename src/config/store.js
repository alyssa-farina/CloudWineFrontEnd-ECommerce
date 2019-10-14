import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import cartReducer from '../features/cart/reducer';
import productsReducer from '../features/product-list/reducer';
import signupReducer from '../features/signup/reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  form: formReducer,
  loggedin: signupReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;